#!/usr/bin/env python3
"""Troisième passe d'enrichissement pour relations-internationales.json"""
import json
import re

ENRICHMENTS = {
    "diplomatie/diplomatie-economique": """<h3>La géoéconomie comme stratégie d'influence</h3><p class="resume-text">La <strong>géoéconomie</strong> désigne l'utilisation des instruments économiques à des fins stratégiques et géopolitiques. L'extraterritorialité du droit américain est l'outil le plus redoutable : les sanctions de l'OFAC (Office of Foreign Assets Control) s'appliquent à toute entreprise utilisant le dollar ou le système bancaire américain, quelle que soit sa nationalité. L'amende de 8,9 milliards de dollars infligée à BNP Paribas (2014) pour avoir contourné des sanctions a démontré la portée mondiale de cette arme juridique.</p><p class="resume-text">La <strong>diplomatie de la dette</strong> est une autre forme de géoéconomie. La Chine a accordé des prêts massifs à des pays en développement (Zambie, Sri Lanka, Pakistan, Éthiopie) pour financer des infrastructures. Lorsque ces pays ne peuvent rembourser, ils se retrouvent contraints à des renégociations asymétriques. Le port de Hambantota au Sri Lanka a été cédé à bail à une entreprise chinoise pour 99 ans (2017) après que le pays a été incapable de rembourser sa dette. Ce modèle est contesté par Pékin, qui le juge caricaturé.</p><div class="highlight-box"><p>L'extraterritorialité du droit américain permet aux États-Unis d'imposer leurs sanctions économiques à des entreprises du monde entier, faisant du dollar une arme géopolitique sans équivalent.</p></div>""",

    "diplomatie/negociation-internationale": """<h3>La négociation climatique comme laboratoire du multilatéralisme</h3><p class="resume-text">Les négociations climatiques constituent le plus grand exercice de diplomatie multilatérale en cours. Chaque COP (Conférence des Parties) réunit 197 délégations nationales, des milliers d'observateurs et mobilise des techniques diplomatiques spécifiques. La formation de <strong>coalitions</strong> y est cruciale : le groupe des pays insulaires (AOSIS, 44 États), l'Alliance des États arabes producteurs de pétrole, le groupe G77+Chine (130 pays en développement) et le groupe « Umbrella » (pays développés non-UE) défendent des intérêts souvent contradictoires.</p><p class="resume-text">La COP28 (Dubaï, 2023) a marqué un tournant avec le premier bilan mondial de l'Accord de Paris (Global Stocktake), qui a conclu que les engagements nationaux actuels mènent à un réchauffement de 2,7°C au lieu des 1,5°C visés. Cette négociation a illustré les techniques de <strong>facilitation de haut niveau</strong> : présidence de la COP détenant un calendrier serré, text-based negotiation (négociation sur textes), consultations bilatérales nocturnes (« confessionnaux »), et recours aux chefs d'État pour débloquer les derniers points. L'accord final a pour la première fois mentionné une « transition hors des énergies fossiles ».</p><div class="highlight-box"><p>La COP28 (Dubaï, 2023) est la première à mentionner une « transition hors des énergies fossiles » — un résultat négocié pendant 30 ans, acquis sous la présidence d'un pays pétrolier.</p></div>""",

    "conflits/theories-du-conflit": """<h3>Nouveaux paradigmes des relations internationales</h3><p class="resume-text">Les paradigmes classiques des relations internationales sont challengés par la réalité du XXIe siècle. Le <strong>constructivisme</strong>, développé par Alexander Wendt (1992), soutient que les structures internationales sont socialement construites : « l'anarchie est ce que les États en font ». Les identités nationales, les normes et les idées façonnent les intérêts autant que les capacités matérielles. Le succès de l'Union européenne — coopération profonde entre États historiquement rivaux — serait incompréhensible sans cette approche.</p><p class="resume-text">La <strong>théorie de la transition de puissance</strong> (Power Transition Theory, Organski, 1958) est particulièrement pertinente pour analyser la rivalité sino-américaine. Elle postule que les guerres les plus destructrices surviennent quand une puissance montante défie la puissance hégémonique. Le « piège de Thucydide » (Graham Allison, 2017) analyse 16 cas historiques de transitions de puissance : 12 ont abouti à la guerre. La question est de savoir si la Chine et les États-Unis réussiront à éviter ce destin.</p><div class="highlight-box"><p>Graham Allison (Harvard) a identifié 16 cas historiques de « piège de Thucydide » depuis 500 ans : 12 ont débouché sur la guerre. Le défi pour la Chine et les États-Unis est d'appartenir aux 4 exceptions.</p></div>""",
}


def enrich_content(content: str, extra_html: str) -> str:
    quiz_pattern = r'(<section class="content-section" id="quiz">)'
    match = re.search(quiz_pattern, content)
    if match:
        insert_pos = match.start()
        return content[:insert_pos] + '\n' + extra_html + '\n' + content[insert_pos:]
    else:
        last_section = content.rfind('</section>')
        if last_section >= 0:
            return content[:last_section] + extra_html + '\n' + content[last_section:]
    return content


def main():
    filepath = 'C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/relations-internationales.json'

    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)

    enriched_count = 0
    for key, enrichment in ENRICHMENTS.items():
        if key in data['pages']:
            page = data['pages'][key]
            if page.get('type') == 'course':
                original_len = len(page['content'])
                page['content'] = enrich_content(page['content'], enrichment)
                new_len = len(page['content'])
                print(f"  {key}: {original_len} -> {new_len} chars (+{new_len - original_len})")
                enriched_count += 1
        else:
            print(f"  WARNING: key not found: {key}")

    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"\nEnriched {enriched_count} articles in relations-internationales.json")

    # Final summary
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    sizes = [len(p['content']) for p in data['pages'].values() if p.get('type') == 'course']
    print(f"Final stats: min={min(sizes)}, max={max(sizes)}, avg={sum(sizes)//len(sizes)}")


if __name__ == '__main__':
    main()
