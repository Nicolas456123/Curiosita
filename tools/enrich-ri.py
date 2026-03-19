#!/usr/bin/env python3
"""Enrichissement des articles de relations-internationales.json"""
import json
import re

ENRICHMENTS = {
    "organisations-internationales/systeme-des-nations-unies": """<h3>L'ONU et les grandes crises du XXIe siècle</h3><p class="resume-text">Le XXIe siècle a mis à rude épreuve le système onusien. L'<strong>invasion de l'Irak en 2003</strong>, menée sans mandat du Conseil de sécurité, a fragilisé la légitimité du droit international. La crise syrienne (depuis 2011) a révélé l'impuissance de l'ONU face aux veto croisés de la Russie et de la Chine, bloquant toute résolution contraignante malgré 500 000 morts. L'invasion de l'Ukraine en 2022 a conduit à la suspension de la Russie du Conseil des droits de l'homme par l'Assemblée générale.</p><p class="resume-text">Face à ces blocages, l'ONU a développé des mécanismes alternatifs. La doctrine de la <strong>Responsabilité de protéger</strong> (R2P), adoptée en 2005, affirme que la communauté internationale a le droit d'intervenir lorsqu'un État faillit à protéger sa population contre les crimes de masse. Invoquée en Libye (2011), elle s'est heurtée à des controverses sur ses modalités d'application. La réforme institutionnelle reste urgente : l'Assemblée générale a adopté en 2024 une résolution préconisant l'élargissement du Conseil de sécurité à 21 membres.</p><div class="highlight-box"><p>En 2024, l'Assemblée générale de l'ONU a adopté un Pacte pour l'avenir visant à réformer la gouvernance mondiale et à mieux faire face aux défis du XXIe siècle.</p></div>""",

    "organisations-internationales/otan-et-alliances": """<h3>L'OTAN face au retour de la guerre en Europe</h3><p class="resume-text">L'invasion russe de l'Ukraine en février 2022 a marqué un tournant historique pour l'OTAN. En quelques semaines, l'alliance a déployé des groupes tactiques multinationaux dans les pays baltes et en Pologne, livré des armements massifs à l'Ukraine et imposé un régime de sanctions sans précédent contre la Russie. Le sommet de Madrid (juin 2022) a adopté un nouveau Concept stratégique désignant la Russie comme « menace la plus directe » et la Chine comme « défi systémique ».</p><p class="resume-text">La <strong>base industrielle de défense</strong> européenne connaît un réveil forcé. Les budgets de défense augmentent dans toute l'Europe : l'Allemagne a annoncé un fonds spécial de 100 milliards d'euros pour moderniser sa Bundeswehr. La Pologne est devenue en 2023 le premier pays de l'OTAN en pourcentage de PIB consacré à la défense (4 %). Le débat sur l'<strong>autonomie stratégique européenne</strong>, longtemps théorique, est devenu urgence politique.</p><div class="highlight-box"><p>Après l'invasion de l'Ukraine, les dépenses de défense des membres européens de l'OTAN ont augmenté de 32 % entre 2021 et 2024.</p></div>""",

    "organisations-internationales/organisations-regionales": """<h3>Les organisations régionales face aux crises contemporaines</h3><p class="resume-text">Les organisations régionales sont confrontées à des défis qui dépassent souvent leurs capacités. L'<strong>Union africaine</strong> peine à endiguer les crises sécuritaires au Sahel, où plusieurs gouvernements sont issus de coups d'État (Mali, Burkina Faso, Niger, Gabon entre 2021 et 2023). Le retrait des forces françaises et onusiennes de ces pays illustre les limites des interventions extérieures et la montée des sentiments antioccidentaux. L'initiative africaine de paix pour l'Ukraine (2023), menée par Nelson Mandela, a mis en évidence la volonté du continent de jouer un rôle propre sur la scène internationale.</p><p class="resume-text">L'<strong>ASEAN</strong> est paralysée par la crise birmane : depuis le coup d'État de 2021, la junte militaire est officiellement exclue des sommets mais l'organisation refuse toute intervention, fidèle à son principe de non-ingérence. Ce dilemme illustre la tension entre souveraineté nationale et normes régionales de gouvernance. En Amérique latine, l'Organisation des États américains (OEA) est traversée par des tensions entre États membres aux régimes politiques opposés (Venezuela vs reste du bloc).</p><div class="highlight-box"><p>L'Agenda 2063 de l'Union africaine vise à faire du continent africain la première zone de libre-échange du monde avec 54 pays et 3,4 milliards d'habitants à l'horizon 2063.</p></div>""",

    "conflits/guerres-modernes": """<h3>L'évolution de la guerre au XXIe siècle</h3><p class="resume-text">Les guerres contemporaines se caractérisent par leur <strong>hybridité</strong> : elles combinent opérations militaires conventionnelles, guerre de l'information, cyberattaques, utilisation de mercenaires et déstabilisation économique. La guerre en Ukraine (2022-) en est l'illustration la plus complète : drones civils reconvertis, guerre électronique, utilisation de Starlink pour les communications militaires et bataille narrative mondiale sur les réseaux sociaux. La guerre de Gaza (2023-) a quant à elle suscité un débat inédit sur le droit international humanitaire à l'ère des caméras omniprésentes.</p><p class="resume-text">Les <strong>drones</strong> ont révolutionné la guerre moderne. Utilisés massivement par les deux parties en Ukraine (des dizaines de milliers de drones de combat déployés), ils permettent des frappes de précision à moindre coût et ont rendu obsolètes certains équipements militaires lourds. Les drones « kamikazes » (Shahed iraniens utilisés par la Russie) et les essaims autonomes constituent la menace émergente. La prolifération des drones militaires dans des États non membres de l'OTAN pose des questions urgentes de régulation internationale.</p><div class="highlight-box"><p>La guerre en Ukraine a consommé plus d'un million de drones en deux ans, révolutionnant la doctrine militaire mondiale et reconfigurant les industries de défense.</p></div>""",

    "traites/droit-de-la-mer": """<h3>La mer de Chine méridionale et les disputes maritimes contemporaines</h3><p class="resume-text">La <strong>mer de Chine méridionale</strong> est le théâtre des tensions maritimes les plus explosives de la planète. La Chine revendique 90 % de cette mer stratégique via la « ligne en neuf traits », en contradiction avec la CNUDM. En 2016, le Tribunal arbitral de La Haye a invalidé ces revendications, mais Pékin a refusé de reconnaître ce jugement. La construction d'îles artificielles militarisées dans les archipels Spratly et Paracel, au détriment du Vietnam, des Philippines, de la Malaisie et de Brunei, crée des incidents répétés.</p><p class="resume-text">L'<strong>Arctique</strong> est l'autre zone de friction maritime émergente. Le changement climatique ouvre de nouvelles routes maritimes (passage du Nord-Est) et rend accessibles des réserves d'hydrocarbures considérables. Huit États bordent l'Arctique (Russie, Canada, États-Unis, Danemark/Groenland, Norvège, Finlande, Suède, Islande) et le Conseil arctique en coordonne la gouvernance. La militarisation russe de la région (réouverture de bases soviétiques) et les ambitions chinoises (« Route de la soie polaire ») génèrent de nouvelles tensions.</p><div class="highlight-box"><p>La route maritime du Nord (Arctique) pourrait réduire de 40 % la distance entre l'Europe et l'Asie par rapport au canal de Suez, faisant de l'Arctique un enjeu géopolitique majeur.</p></div>""",

    "cooperation/institutions-financieres": """<h3>La remise en cause de l'ordre financier mondial</h3><p class="resume-text">L'ordre financier international né de Bretton Woods (1944) est contesté de toutes parts. Les <strong>BRICS</strong> ont créé la Nouvelle Banque de développement (NBD, 2015) et le pool de réserves de changes (AMCA) pour réduire leur dépendance au dollar et au FMI. La Banque asiatique d'investissement dans les infrastructures (BAII, fondée par la Chine en 2015, 109 membres) concurrence directement la Banque mondiale et la Banque asiatique de développement. Ces nouvelles institutions reflètent la montée en puissance des économies émergentes et leur volonté de façonner les normes du financement international.</p><p class="resume-text">La <strong>dédollarisation</strong> est le mot d'ordre des économies qui cherchent à s'affranchir de l'hégémonie américaine. Les sanctions contre la Russie (gel de 300 milliards de dollars de réserves en 2022) ont accéléré cette tendance : de nombreux États cherchent à diversifier leurs réserves en euros, yuans et or. Le règlement en yuans des échanges pétroliers entre la Chine et l'Arabie Saoudite défie le « pétrodollar » institué depuis 1973. Le FMI a néanmoins réaffirmé la primauté du dollar, qui représente encore 58 % des réserves mondiales.</p><div class="highlight-box"><p>La Nouvelle Banque de développement des BRICS (2015) a approuvé plus de 30 milliards de dollars de prêts en infrastructure dans 10 ans, principalement en Asie, Afrique et Amérique latine.</p></div>""",

    "cooperation/mondialisation": """<h3>La mondialisation à l'épreuve du repli nationaliste</h3><p class="resume-text">La mondialisation économique connaît depuis 2016 un coup d'arrêt inédit. L'élection de Donald Trump et le Brexit ont marqué une rupture avec le consensus libre-échangiste. Les droits de douane punitifs américains (jusqu'à 145 % sur les produits chinois en 2025), les politiques industrielles protectionnistes (Inflation Reduction Act américain, Pacte vert européen) et la relocalisation des chaînes d'approvisionnement stratégiques (semi-conducteurs, batteries, médicaments) illustrent le phénomène de « nearshoring » et de « friendshoring ».</p><p class="resume-text">La <strong>fragmentation géoéconomique</strong>, analysée par le FMI, divise le monde en blocs commerciaux concurrents. L'Occident technologique (États-Unis, UE, alliés du G7) contrôle les semi-conducteurs de pointe et les technologies d'intelligence artificielle. La Chine domine les matières premières critiques pour la transition énergétique (terres rares, lithium, cobalt) et les technologies des énergies renouvelables. Cette interdépendance asymétrique est utilisée comme levier géopolitique par les deux camps.</p><div class="highlight-box"><p>Le FMI estime que la fragmentation géoéconomique mondiale pourrait réduire le PIB mondial de 7 % à long terme, l'équivalent des économies combinées de la France et de l'Allemagne.</p></div>""",

    "cooperation/geopolitique-de-lenergie": """<h3>La transition énergétique comme enjeu géopolitique</h3><p class="resume-text">La transition vers les énergies renouvelables redistribue les cartes de la géopolitique énergétique mondiale. Si elle réduira la dépendance aux pétromonarchies du Golfe et à la Russie, elle crée de nouvelles dépendances. La <strong>Chine contrôle 60 % de la production mondiale</strong> de panneaux solaires, 80 % des batteries lithium-ion et domine le raffinage des terres rares indispensables aux éoliennes, moteurs électriques et électronique. L'Union européenne, qui a interdit les véhicules thermiques d'ici 2035, dépend ainsi de la Chine pour sa propre « indépendance énergétique ».</p><p class="resume-text">Les <strong>matières premières critiques</strong> (lithium, cobalt, nickel, manganèse, graphite) sont le nouveau pétrole. La République démocratique du Congo produit 70 % du cobalt mondial dans des conditions souvent déplorables. Le triangle du lithium (Argentine, Chili, Bolivie) attire les investissements de l'UE, des États-Unis et de la Chine. L'Agence internationale de l'énergie prévient que la demande en minéraux critiques pourrait être multipliée par quatre d'ici 2040, créant de nouveaux risques de pénurie et de concentration géographique.</p><div class="highlight-box"><p>La Chine contrôle 90 % du traitement mondial des terres rares, minéraux indispensables aux technologies vertes et à l'industrie de défense, créant une dépendance stratégique mondiale.</p></div>""",
}


def enrich_content(content: str, extra_html: str) -> str:
    """Insert extra_html before the closing </section> of the contenu section."""
    # Find the contenu section end (before the quiz section or end of string)
    # Pattern: find </section> that follows id="contenu"
    # Strategy: find the quiz section start and insert before it
    quiz_pattern = r'(<section class="content-section" id="quiz">)'
    match = re.search(quiz_pattern, content)
    if match:
        insert_pos = match.start()
        return content[:insert_pos] + '\n' + extra_html + '\n' + content[insert_pos:]
    else:
        # No quiz section, insert before closing </section> of contenu
        # Find the last </section>
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


if __name__ == '__main__':
    main()
