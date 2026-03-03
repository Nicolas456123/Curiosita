"""
Refactor quiz.py — Migration script
Replaces inline quiz/goTo/scrollSpy JS in all HTML pages
with <script src="quiz.js"> and <script src="utils.js"> tags.
"""
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

BASE = r'C:\Users\nicol\Desktop\Curiosita\Curiosita'

# Patterns to detect inline quiz/goTo blocks
# Pattern 1: Full quiz block — with or without spaces (minified vs formatted)
# Also handles comment lines like "// QUIZ LOGIC" before const questions
QUIZ_START = re.compile(r'<script>\s*(?://[^\n]*\n\s*)*const questions\s*=\s*document\.querySelectorAll')
# Pattern 2: goTo-only block (starts with "function goTo(id")
GOTO_START = re.compile(r'<script>\s*\n?\s*function goTo\(id')

# The inline script block ends with </script>
# We need to find the matching </script> tag
SCRIPT_END = '</script>'

def get_prefix(content):
    """Extract the relative prefix from the style.css link."""
    m = re.search(r'href="([^"]*?)style\.css', content)
    if m:
        return m.group(1)
    return ''

def find_inline_script_block(content):
    """Find the start and end positions of the inline quiz/goTo script block."""
    # Try full quiz block first
    match = QUIZ_START.search(content)
    if not match:
        # Try goTo-only block
        match = GOTO_START.search(content)

    if not match:
        return None, None

    start = match.start()

    # Find the closing </script> tag after this match
    end_pos = content.find(SCRIPT_END, match.end())
    if end_pos == -1:
        return None, None

    end = end_pos + len(SCRIPT_END)
    return start, end

def process_file(filepath):
    """Process a single HTML file: replace inline script with external script tags."""
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    start, end = find_inline_script_block(content)
    if start is None:
        return False, 'no match'

    prefix = get_prefix(content)

    # Build replacement: quiz.js script tag
    replacement = f'<script src="{prefix}quiz.js"></script>'

    # Also check if utils.js is already present
    has_utils = 'utils.js' in content
    if not has_utils:
        # Add utils.js BEFORE quiz.js
        replacement = f'<script src="{prefix}utils.js"></script>\n{replacement}'

    # Check if mobile.js tag exists after the inline block
    # We want to keep it, but make sure utils.js is before it too
    new_content = content[:start] + replacement + content[end:]

    # Verify we didn't break anything
    if '<script src="' + prefix + 'quiz.js">' not in new_content:
        return False, 'replacement failed'

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return True, 'ok'

def main():
    modified = 0
    skipped = 0
    errors = 0

    for root, dirs, files in os.walk(BASE):
        # Skip hidden dirs and node_modules
        dirs[:] = [d for d in dirs if not d.startswith('.')]

        for fname in files:
            if not fname.endswith('.html'):
                continue

            filepath = os.path.join(root, fname)

            # Quick check: does file contain inline quiz or goTo?
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                peek = f.read()

            has_quiz = 'function resetQuiz' in peek or 'function answer(el' in peek
            has_goto_inline = re.search(r'<script>\s*\n?\s*function goTo\(id', peek) is not None
            # Also detect minified quiz blocks where resetQuiz is NOT a standalone function
            has_quiz_minified = re.search(r'<script>\s*const questions\s*=\s*document\.querySelectorAll', peek) is not None
            has_quiz = has_quiz or has_quiz_minified

            if not has_quiz and not has_goto_inline:
                skipped += 1
                continue

            # Already migrated?
            if 'quiz.js' in peek and 'function resetQuiz' not in peek:
                skipped += 1
                continue

            success, msg = process_file(filepath)
            if success:
                modified += 1
                rel = os.path.relpath(filepath, BASE)
                if modified <= 10 or modified % 50 == 0:
                    print(f'  Migrated: {rel}')
            else:
                errors += 1
                rel = os.path.relpath(filepath, BASE)
                print(f'  ERROR ({msg}): {rel}')

    print(f'\nDone: {modified} migrated, {skipped} skipped, {errors} errors')

if __name__ == '__main__':
    main()
