import json, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/astronomie.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# Helper to append content before closing section tags
def append_to_contenu(key, extra_html):
    c = pages[key]['content']
    # insert before last </div>\n    </section>
    insert_before = '      </div>\n    </section>'
    idx = c.rfind(insert_before)
    if idx == -1:
        raise ValueError(f"Could not find insert point in {key}")
    pages[key]['content'] = c[:idx] + extra_html + '\n' + insert_before

# ============================================================
# Extend etoiles/galaxies
# ============================================================
append_to_contenu('etoiles/galaxies', """
        <h3>Les interactions entre galaxies</h3>
        <p>Les galaxies ne sont pas des objets isolés. Les interactions gravitationnelles entre galaxies proches sont fréquentes et jouent un rôle crucial dans leur évolution. Ces interactions peuvent prendre plusieurs formes :</p>
        <ul>
          <li><strong>Les rencontres rapprochées (fly-by) :</strong> deux galaxies passent l'une près de l'autre sans fusionner, mais leurs forces de marée déforment les deux structures, créant des « queues de marée » spectaculaires.</li>
          <li><strong>Les fusions mineures :</strong> une grande galaxie absorbe une beaucoup plus petite (accrétion de galaxies naines), enrichissant son halo en étoiles.</li>
          <li><strong>Les fusions majeures :</strong> deux galaxies de masse comparable fusionnent sur plusieurs milliards d'années, détruisant les structures spirales et formant souvent une elliptique.</li>
        </ul>
        <p>Les galaxies en interaction sont souvent des sources intenses de formation stellaire. Les <strong>Antennes</strong> (NGC 4038/4039), deux spirales en collision à 45 millions d'années-lumière, présentent des filaments de gaz et des milliers de jeunes amas stellaires brillants formés sous l'effet de la compression du gaz par les forces de marée.</p>

        <h3>Les galaxies naines et les satellites</h3>
        <p>Les galaxies naines — de quelques millions à quelques milliards d'étoiles — sont les galaxies les plus nombreuses dans l'univers, mais aussi les plus difficiles à détecter. Elles se déclinent en plusieurs types :</p>
        <ul>
          <li><strong>Naines sphéroïdales (dSph) :</strong> très peu de gaz, populations stellaires vieilles, faible luminosité de surface. Très sensibles aux effets de marée des grandes galaxies voisines.</li>
          <li><strong>Naines elliptiques compactes (cE) :</strong> plus denses, comme M32, satellite d'Andromède.</li>
          <li><strong>Naines irrégulières :</strong> riches en gaz et en formation stellaire, comme les Nuages de Magellan.</li>
          <li><strong>Naines ultra-diffuses (UDG) :</strong> découvertes récemment (2015), aussi grandes que la Voie lactée mais 1000 fois moins lumineuses, dominées par la matière noire.</li>
        </ul>
        <p>Le recensement des galaxies naines dans le Groupe Local est un défi observationnel majeur. Chaque avancée technique révèle de nouvelles galaxies satellites naines autour de la Voie lactée et d'Andromède, posant des contraintes importantes sur les modèles de matière noire froide.</p>

        <h3>Les sursauts d'étoiles (starburst)</h3>
        <p>Certaines galaxies présentent des taux de formation stellaire extraordinairement élevés — des centaines voire des milliers de fois supérieurs à celui de la Voie lactée. Ces galaxies à <strong>sursaut d'étoiles</strong> (<em>starburst</em>) convertissent leur gaz en étoiles à un rythme qui les épuiserait en quelques milliards d'années seulement.</p>
        <p>M82, la « Galaxie Cigare » à 12 millions d'années-lumière, est l'exemple le plus célèbre. Elle forme des étoiles 10 fois plus vite que la Voie lactée, sous l'effet de l'interaction gravitationnelle avec sa voisine M81. Le gaz chaud et les vents stellaires s'échappent en cônes perpendiculaires au disque, visibles en rayons X.</p>

        <h3>Observations et instruments</h3>
        <p>L'étude des galaxies mobilise l'ensemble du spectre électromagnétique :</p>
        <ul>
          <li><strong>Visible et infrarouge proche :</strong> distribution des étoiles, morphologie, couleurs et classification. Télescopes au sol (VLT, Keck) et Hubble.</li>
          <li><strong>Infrarouge thermique :</strong> formation stellaire cachée dans la poussière. Spitzer, Herschel, et désormais James-Webb.</li>
          <li><strong>Radio :</strong> distribution du gaz HI (21 cm), molécules interstellaires, jets de radiogalaxies.</li>
          <li><strong>Rayons X :</strong> gaz intergalactique chaud dans les amas, jets AGN. Chandra, XMM-Newton.</li>
          <li><strong>Rayons gamma :</strong> noyaux actifs les plus énergétiques, blazars. Fermi-LAT.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Le télescope spatial James-Webb (2022) :</strong> avec son miroir de 6,5 m et sa sensibilité infrarouge sans précédent, il observe des galaxies formées moins de 300 millions d'années après le Big Bang (redshift z > 15), repoussant les limites de notre connaissance de la formation galactique aux tout premiers âges de l'univers.</p>
        </div>""")

print('etoiles/galaxies extended, len:', len(pages['etoiles/galaxies']['content']))

# ============================================================
# Extend etoiles/voie-lactee
# ============================================================
append_to_contenu('etoiles/voie-lactee', """
        <h3>Le milieu interstellaire</h3>
        <p>L'espace entre les étoiles n'est pas vide. Le <strong>milieu interstellaire</strong> (MIS) de la Voie lactée est un mélange complexe de gaz, de poussières et de rayonnement qui représente environ 10 à 15 % de la masse du disque galactique :</p>
        <ul>
          <li><strong>Gaz ionisé (HII) :</strong> hydrogène ionisé par le rayonnement UV des étoiles chaudes, formant des nébuleuses brillantes comme la Nébuleuse d'Orion (M42) ou la Nébuleuse de la Lagune (M8).</li>
          <li><strong>Gaz neutre atomique (HI) :</strong> hydrogène neutre détectable par sa raie à 21 cm, réparti dans le disque. C'est le principal traceur de la structure spirale.</li>
          <li><strong>Gaz moléculaire (H₂) :</strong> régions denses et froides (10–30 K) où l'hydrogène est sous forme moléculaire. Ces nuages moléculaires géants (100 à 10 000 années-lumière de diamètre) sont les berceaux des étoiles.</li>
          <li><strong>Poussières interstellaires :</strong> grains de silicates et de carbone de taille nanométrique à micrométrique. Ils absorbent et diffusent la lumière visible (extinction interstellaire) et re-émettent en infrarouge.</li>
          <li><strong>Rayonnement cosmique :</strong> particules subatomiques accélérées à des vitesses relativistes par les restes de supernovae.</li>
        </ul>

        <h3>Les nuages moléculaires et la naissance des étoiles</h3>
        <p>Les <strong>nuages moléculaires géants</strong> (CMG) sont les plus grandes structures cohérentes de la Voie lactée. Le complexe moléculaire de la constellation d'Orion, à 1 500 années-lumière, s'étend sur plusieurs centaines d'années-lumière et contient plusieurs milliers de masses solaires de gaz. Au sein de ces nuages, sous l'effet de perturbations (ondes de densité spirales, ondes de choc de supernovae), des régions s'effondrent gravitationnellement pour former de nouvelles étoiles.</p>
        <p>Les jeunes amas stellaires (amas ouverts) restent souvent associés à leurs nébuleuses nourricières pendant quelques millions d'années avant de s'en disperser. Les Pléiades (à 440 années-lumière) sont un amas ouvert âgé de 115 millions d'années, encore partiellement entouré de gaz et poussières.</p>

        <h3>Les supernovae et l'enrichissement chimique</h3>
        <p>La Voie lactée est le théâtre continu d'explosions de supernovae — environ une à deux par siècle. Ces explosions jouent un rôle fondamental :</p>
        <ul>
          <li><strong>Enrichissement chimique :</strong> les supernovae de type II (effondrement de noyaux d'étoiles massives) et de type Ia (explosion de naines blanches en systèmes binaires) synthétisent et dispersent des éléments lourds dans le milieu interstellaire — des métaux comme le fer, le nickel, le zinc — qui seront incorporés dans les générations stellaires suivantes.</li>
          <li><strong>Injection d'énergie :</strong> les restes de supernovae (SNR) chauffent le gaz interstellaire et accélèrent les rayons cosmiques galactiques.</li>
          <li><strong>Déclenchement de formation stellaire :</strong> les ondes de choc des supernovae compriment le gaz des nuages moléculaires voisins, pouvant déclencher l'effondrement gravitationnel et la naissance de nouvelles étoiles.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>La supernova de 1987A :</strong> observée dans le Grand Nuage de Magellan à 168 000 années-lumière, c'est la supernova la plus proche observée depuis l'invention du télescope. Elle a permis de détecter pour la première fois des neutrinos cosmiques extragalactiques (Kamiokande, IMB), confirmant les modèles d'effondrement du cœur stellaire.</p>
        </div>

        <h3>Rotation différentielle et matière noire</h3>
        <p>Dans une galaxie, on s'attendrait, par analogie avec le système solaire, à ce que les objets plus éloignés du centre orbital moins vite (loi de Képler). Or, la <strong>courbe de rotation</strong> de la Voie lactée — et de toutes les galaxies spirales observées — est remarquablement plate : les étoiles et nuages de gaz orbitent à vitesse à peu près constante (environ 220 km/s pour le Soleil) quelle que soit leur distance au centre galactique.</p>
        <p>Cette anomalie, découverte par Vera Rubin et Kent Ford dans les années 1970, est l'une des preuves les plus robustes de l'existence de la <strong>matière noire</strong>. Une masse invisible et étendue — le halo de matière noire — doit être présente pour expliquer la vitesse orbitale élevée des étoiles loin du centre. La nature exacte de cette matière noire (particules WIMPs, axions, neutrinos stériles ?) reste l'une des grandes questions ouvertes de la physique.</p>""")

print('etoiles/voie-lactee extended, len:', len(pages['etoiles/voie-lactee']['content']))

# ============================================================
# Extend etoiles/types
# ============================================================
append_to_contenu('etoiles/types', """
        <h3>Les étoiles binaires et multiples</h3>
        <p>La majorité des étoiles ne sont pas solitaires. Environ la moitié des systèmes stellaires de la Voie lactée sont des <strong>systèmes binaires ou multiples</strong> — deux étoiles ou plus liées gravitationnellement et orbitant autour de leur centre de masse commun. Les binaires se déclinent selon leur séparation :</p>
        <ul>
          <li><strong>Binaires visuelles :</strong> séparées d'au moins quelques dizaines d'UA, résolvables optiquement. Exemple : Alpha Centauri AB (séparation ~23 UA).</li>
          <li><strong>Binaires spectroscopiques :</strong> trop rapprochées pour être résolues mais identifiables par les décalages Doppler periodiques de leurs raies spectrales.</li>
          <li><strong>Binaires à éclipses :</strong> les plans orbitaux sont vus par la tranche, permettant de mesurer précisément masses, rayons et températures des deux étoiles.</li>
        </ul>
        <p>Les systèmes binaires serrés peuvent interagir : transfert de masse d'une étoile à l'autre, nova (explosion thermonucléaire à la surface de la naine blanche receveuse), ou supernova de type Ia (si la naine blanche dépasse la limite de Chandrasekhar de 1,4 masse solaire).</p>

        <h3>Les stades évolutifs avancés</h3>
        <p>La fin de vie d'une étoile dépend principalement de sa masse initiale :</p>
        <ul>
          <li><strong>Étoiles &lt; 0,5 M☉ (naines rouges) :</strong> brûlent l'hydrogène si lentement que leur durée de vie dépasse l'âge actuel de l'univers. Elles n'ont pas encore eu le temps d'évoluer. Elles finiront en naines blanches d'hélium.</li>
          <li><strong>Étoiles 0,5–8 M☉ (dont le Soleil) :</strong> deviennent géantes rouges en épuisant leur hydrogène central, puis subgéantes, branchent sur la branche horizontale (fusion de l'hélium central), puis sur la branche asymptotique des géantes (AGB). La fusion de l'hélium produit carbone et oxygène. L'étoile expulse ses couches externes — une <strong>nébuleuse planétaire</strong> — laissant le noyau résiduel : une <strong>naine blanche</strong> de carbone-oxygène.</li>
          <li><strong>Étoiles 8–20 M☉ :</strong> fusionnent des éléments de plus en plus lourds jusqu'au fer. Le noyau de fer ne peut pas fusionner (c'est l'élément le plus stable). L'effondrement du noyau déclenche une <strong>supernova de type II</strong>, laissant une <strong>étoile à neutrons</strong> (pulsar) ou un trou noir selon la masse résiduelle.</li>
          <li><strong>Étoiles &gt; 20–25 M☉ :</strong> l'effondrement du noyau conduit directement à un <strong>trou noir stellaire</strong> sans supernova visible (ou avec une explosion plus ténue). Ces étoiles très massives perdent une grande partie de leur masse par vents stellaires avant de mourir.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Les étoiles à neutrons et pulsars :</strong> une étoile à neutrons a une masse de 1,4 à 3 M☉ concentrée dans une sphère de ~10 km de rayon — la densité y est comparable à celle des noyaux atomiques. Les <em>pulsars</em> sont des étoiles à neutrons en rotation rapide qui émettent des faisceaux de rayonnement détectables comme des signaux périodiques ultrastables, utilisés comme horloges de précision pour tester la relativité générale.</p>
        </div>

        <h3>Les étoiles variables et pulsantes</h3>
        <p>Environ 2 % des étoiles observées présentent des variations de luminosité mesurables. Ces <strong>étoiles variables</strong> forment plusieurs familles :</p>
        <ul>
          <li><strong>Céphéides :</strong> géantes jaunes pulsantes dont la période (1 à 50 jours) est strictement liée à la luminosité absolue. Cette relation période-luminosité, découverte par Henrietta Swan Leavitt en 1912, en fait les « chandelles standard » de l'astronomie extragalactique.</li>
          <li><strong>RR Lyrae :</strong> étoiles pulsantes du halo galactique, avec des périodes de moins d'un jour. Utilisées pour mesurer les distances dans la Voie lactée et les galaxies voisines.</li>
          <li><strong>Étoiles de type solaire :</strong> pulsent légèrement sous l'effet d'oscillations acoustiques, étudiées par l'<em>astérosismologie</em> pour sonder leur intérieur.</li>
          <li><strong>Étoiles variables cataclysmiques :</strong> systèmes binaires avec accrétion intermittente sur une naine blanche, produisant des novae récurrentes.</li>
        </ul>

        <h3>Trouver des exoplanètes grâce aux étoiles</h3>
        <p>La recherche d'<strong>exoplanètes</strong> exploite directement les propriétés physiques des étoiles. Les deux méthodes principales sont :</p>
        <ul>
          <li><strong>Méthode des transits :</strong> une planète passant devant son étoile provoque une légère diminution de luminosité (0,01 à 1 %). Kepler et TESS ont découvert des milliers d'exoplanètes par cette méthode.</li>
          <li><strong>Méthode des vitesses radiales :</strong> une planète massive attire gravitationnellement son étoile, provoquant un léger mouvement périodique détectable par effet Doppler dans les raies spectrales.</li>
        </ul>
        <p>La connaissance précise des propriétés de l'étoile hôte (masse, rayon, âge, métallicité) est indispensable pour caractériser les exoplanètes découvertes — leur taille, leur masse et leur potentiel d'habitabilité dépendent directement de ces paramètres stellaires.</p>""")

print('etoiles/types extended, len:', len(pages['etoiles/types']['content']))

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/astronomie.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print('Batch 3 saved.')
