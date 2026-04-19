const lang_fr = {
    pageTitle: "Calculateur Astro & Champ de Vision",
    appTitle: "🔭 Calculateur Astro & Champ de Vision",

    // Sections
    telescope: "Télescope",
    camera: "Caméra",

    // Inputs
    selectPreset: "Sélectionner un préréglage",
    selectPresetPlaceholder: "-- Veuillez choisir --",
    aperture: "Ouverture (mm)",
    aperturePlaceholder: "ex. 80",
    focalLength: "Longueur focale (mm)",
    focalLengthPlaceholder: "ex. 600",
    corrector: "Correcteur/Barlow (facteur)",
    sensorX: "Largeur du capteur X (mm)",
    sensorY: "Hauteur du capteur Y (mm)",
    pixelSize: "Taille des pixels (µm)",
    targetObject: "Objet cible",

    // Button
    calculate: "Calculer & Visualiser",

    // Results placeholder
    resultsPlaceholder: "Veuillez saisir les valeurs...",

    // Canvas
    canvasLabel: "Aperçu : Cadre blanc = Capteur",

    // Alerts
    alertFillAll: "Veuillez remplir tous les champs !",

    // Result labels
    fRatio: "Rapport focal",
    fov: "Champ de vision",
    imageScale: "Échelle d'image",
    imageScaleUnit: "arcsec/px",
    rayleighLimit: "Limite de Rayleigh",
    dawesLimit: "Limite de Dawes",
    sampling: "Échantillonnage",

    // Sampling badges
    oversampling: "Sur-échantillonnage fort",
    optimalSampling: "Échantillonnage optimal",
    undersampling: "Sous-échantillonnage",

    // Object names
    objects: {
        sun:     "Soleil",
        moon:    "Lune",
        jupiter: "Jupiter",
        saturn:  "Saturne",
        mars:    "Mars",
        m31:     "M31 Galaxie d'Andromède",
        m33:     "M33 Galaxie du Triangle",
        m51:     "M51 Galaxie du Tourbillon",
        m81:     "M81 Galaxie de Bode",
        m82:     "M82 Galaxie du Cigare",
        m1:      "M1 Nébuleuse du Crabe",
        m27:     "M27 Nébuleuse de l'Haltère",
        m42:     "M42 Nébuleuse d'Orion",
        m57:     "M57 Nébuleuse de l'Anneau",
        ngc891:  "NGC 891",
        ngc2244: "NGC 2244 Nébuleuse de la Rosette",
        ngc7293: "NGC 7293 Nébuleuse de l'Hélice",
        ic1805:  "IC 1805 Nébuleuse du Cœur",
        ic1848:  "IC 1848 Nébuleuse de l'Âme",
        lmc:     "Grand Nuage de Magellan (LMC)",
        smc:     "Petit Nuage de Magellan (SMC)",
        ngc2070: "NGC 2070 Nébuleuse de la Tarentule",
        ngc3372: "NGC 3372 Nébuleuse d'Eta Carène",
        ngc5128: "NGC 5128 Centaurus A",
        ngc5139: "NGC 5139 Oméga du Centaure",
        ngc104:  "NGC 104 47 Tucanae",
        ngc4755: "NGC 4755 Boîte à Bijoux"
    },

    // About
    aboutTitle: "À propos d'AstroRechner",
    aboutDescription: "AstroRechner est une calculatrice gratuite basée sur navigateur pour les astrophotographes. Elle calcule le champ de vision, l'échelle d'image, le rapport focal et les limites de résolution pour n'importe quelle combinaison télescope/caméra — sans installation ni connexion internet.",
    aboutVersion: "Version",
    aboutDeveloper: "Développé par",
    aboutLicense: "Licence",
    aboutLicenseText: "Licence MIT – utilisation, partage et modification libres.",
    aboutGithub: "Code source sur GitHub",
    aboutClose: "Fermer",
    aboutCopyright: "© 2026 MiceInSpace Development",

    // Tabs
    tabCalculator: "Calculateur",
    tabSmartTelescopes: "Télescopes intelligents",
    tabStellarium: "Stellarium",
    stellariumTitle: "Connexion Stellarium",
    stellariumConnect: "Connecter",
    stellariumConnecting: "Connexion …",
    stellariumConnected: "Connecté à Stellarium",
    stellariumConnectionFailed: "Échec de connexion – Stellarium est-il lancé avec le plugin Remote Control activé ?",
    stellariumConnectionLost: "Connexion à Stellarium perdue",
    stellariumNotConnected: "Non connecté",
    stellariumSelectedObject: "Objet sélectionné",
    stellariumNoSelection: "Aucun objet sélectionné dans Stellarium.",
    stellariumType: "Type",
    stellariumRA: "AD",
    stellariumDec: "Déc",
    stellariumSize: "Taille angulaire",
    stellariumImport: "Utiliser dans le calculateur",
    stellariumImported: "Objet importé",
    stellariumAutoUpdate: "Mettre à jour la cible automatiquement lors d'un changement dans Stellarium",
    stellariumHelpText: "<strong>Conditions requises pour la connexion :</strong><br>" +
        "1. Le plugin <em>Remote Control</em> de Stellarium doit être activé (<em>Configuration → Plugins → Remote Control → Charger au démarrage</em>, puis redémarrer Stellarium). Dans les paramètres du plugin, définir <em>Autoriser CORS depuis</em> sur <code>*</code>.<br>" +
        "2. Le bon fonctionnement de la connexion dépend de la façon dont la page est chargée : via un <strong>serveur web local</strong> (ex. <code>python -m http.server</code>) ou en tant que <strong>fichier local</strong>, cela fonctionne généralement. Depuis <strong>GitHub Pages (HTTPS)</strong>, les navigateurs bloquent les requêtes vers des services HTTP locaux (politique Mixed Content).<br>" +
        "3. <strong>Ne modifiez pas les paramètres de sécurité de votre navigateur</strong> pour forcer la connexion, sauf si vous savez exactement ce que vous faites et comprenez les risques.",

    // Smart telescope tab
    smartTelescopeTitle: "Comparaison de télescopes intelligents",
    smartSelectLabel: "Sélectionner des télescopes (sélection multiple possible)",
    smartTargetObject: "Objet cible",
    smartCompareBtn: "Comparer & Visualiser",
    smartNoSelection: "Veuillez sélectionner au moins un télescope.",
    smartColTelescope: "Télescope",
    smartColSensor: "Capteur",
    smartColAperture: "Ouverture",
    smartColFocalLength: "Longueur focale",
    smartColFRatio: "f/#",
    smartColFov: "Champ de vision",
    smartColScale: "Échelle",
    smartColSampling: "Échantillonnage",
    smartShowDetails: "Afficher les détails",

    // Help texts
    help: {
        fratio: {
            title: "Rapport focal (f/ratio)",
            text: "Le rapport entre la longueur focale effective et l'ouverture du télescope. Des valeurs plus faibles (ex. f/4) signifient un système plus lumineux et plus rapide ; des valeurs plus élevées (ex. f/10) signifient un système plus lent avec un contraste plus élevé.",
            formula: "f/# = Longueur focale × Correcteur / Ouverture"
        },
        fov: {
            title: "Champ de vision (FOV)",
            text: "La zone du ciel capturée par le capteur. Dépend de la taille du capteur et de la longueur focale effective. Un capteur plus grand ou une longueur focale plus courte produisent un champ de vision plus large.",
            formula: "FOV = (Taille capteur / Longueur focale) × (180 / π)"
        },
        scale: {
            title: "Échelle d'image",
            text: "Le nombre de secondes d'arc du ciel couvert par chaque pixel. Des valeurs plus petites signifient une résolution plus fine. Valeur indicative : 1–2 arcsec/px pour un seeing moyen.",
            formula: "Échelle = (Taille pixel [µm] / Longueur focale [mm]) × 206,265"
        },
        rayleigh: {
            title: "Limite de Rayleigh",
            text: "Le pouvoir de résolution théorique du télescope selon le critère de Rayleigh : deux sources ponctuelles sont considérées comme résolues lorsque le maximum de l'une coïncide avec le premier minimum de l'autre. Dépend de l'ouverture et de la longueur d'onde — les longueurs d'onde plus courtes (violet) permettent une meilleure résolution.",
            formula: "R = 1,22 × λ [nm] × 0,206265 / Ouverture [mm]"
        },
        dawes: {
            title: "Limite de Dawes",
            text: "Une limite de résolution empirique dérivée d'observations visuelles d'étoiles doubles. Utilise le facteur 1,02 au lieu de 1,22 (Rayleigh) — des observateurs expérimentés peuvent résoudre des paires légèrement plus proches. Des valeurs en arcsec plus petites = meilleure résolution.",
            formula: "D = 1,02 × λ [nm] × 0,206265 / Ouverture [mm]"
        },
        sampling: {
            title: "Échantillonnage",
            text: "Décrit dans quelle mesure l'échelle d'image correspond au pouvoir de résolution du télescope. Sur-échantillonnage : pixels trop petits — le bruit augmente. Sous-échantillonnage : pixels trop grands — la résolution est gaspillée. Optimal : 0,8–2,0 arcsec/px.",
            formula: "Valeur indicative : Échelle d'image ≈ 0,8–2,0 arcsec/px"
        }
    }
};
