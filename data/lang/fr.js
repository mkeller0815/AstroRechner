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
