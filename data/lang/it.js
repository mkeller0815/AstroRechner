const lang_it = {
    pageTitle: "Calcolatore Astro & Campo Visivo",
    appTitle: "🔭 Calcolatore Astro & Campo Visivo",

    // Sections
    telescope: "Telescopio",
    camera: "Fotocamera",

    // Inputs
    selectPreset: "Seleziona preset",
    selectPresetPlaceholder: "-- Selezionare --",
    aperture: "Apertura (mm)",
    aperturePlaceholder: "es. 80",
    focalLength: "Lunghezza focale (mm)",
    focalLengthPlaceholder: "es. 600",
    corrector: "Correttore/Barlow (fattore)",
    sensorX: "Larghezza sensore X (mm)",
    sensorY: "Altezza sensore Y (mm)",
    pixelSize: "Dimensione pixel (µm)",
    targetObject: "Oggetto target",

    // Button
    calculate: "Calcola & Visualizza",

    // Results placeholder
    resultsPlaceholder: "Inserire i valori...",

    // Canvas
    canvasLabel: "Anteprima: Cornice bianca = Sensore",

    // Alerts
    alertFillAll: "Compilare tutti i campi!",

    // Result labels
    fRatio: "Rapporto focale",
    fov: "Campo visivo",
    imageScale: "Scala immagine",
    imageScaleUnit: "arcsec/px",
    rayleighLimit: "Limite di Rayleigh",
    dawesLimit: "Limite di Dawes",
    sampling: "Campionamento",

    // Sampling badges
    oversampling: "Forte sovracampionamento",
    optimalSampling: "Campionamento ottimale",
    undersampling: "Sottocampionamento",

    // Object names
    objects: {
        sun:     "Sole",
        moon:    "Luna",
        jupiter: "Giove",
        saturn:  "Saturno",
        mars:    "Marte",
        m31:     "M31 Galassia di Andromeda",
        m33:     "M33 Galassia del Triangolo",
        m51:     "M51 Galassia Vortice",
        m81:     "M81 Galassia di Bode",
        m82:     "M82 Galassia Sigaro",
        m1:      "M1 Nebulosa Granchio",
        m27:     "M27 Nebulosa Manubrio",
        m42:     "M42 Nebulosa di Orione",
        m57:     "M57 Nebulosa Anello",
        ngc891:  "NGC 891",
        ngc2244: "NGC 2244 Nebulosa Rosetta",
        ngc7293: "NGC 7293 Nebulosa Elica",
        ic1805:  "IC 1805 Nebulosa Cuore",
        ic1848:  "IC 1848 Nebulosa Anima",
        lmc:     "Grande Nube di Magellano (LMC)",
        smc:     "Piccola Nube di Magellano (SMC)",
        ngc2070: "NGC 2070 Nebulosa Tarantola",
        ngc3372: "NGC 3372 Nebulosa Eta Carinae",
        ngc5128: "NGC 5128 Centaurus A",
        ngc5139: "NGC 5139 Omega Centauri",
        ngc104:  "NGC 104 47 Tucanae",
        ngc4755: "NGC 4755 Scrigno dei Gioielli"
    },

    // About
    aboutTitle: "Informazioni su AstroRechner",
    aboutDescription: "AstroRechner è un calcolatore gratuito basato su browser per gli astrofotografi. Calcola il campo visivo, la scala immagine, il rapporto focale e i limiti di risoluzione per qualsiasi combinazione di telescopio e fotocamera — senza installazione né connessione internet.",
    aboutVersion: "Versione",
    aboutDeveloper: "Sviluppato da",
    aboutLicense: "Licenza",
    aboutLicenseText: "Licenza MIT – libero utilizzo, condivisione e modifica.",
    aboutGithub: "Codice sorgente su GitHub",
    aboutClose: "Chiudi",
    aboutCopyright: "© 2026 MiceInSpace Development",

    // Tabs
    tabCalculator: "Calcolatore",
    tabSmartTelescopes: "Telescopi smart",

    // Smart telescope tab
    smartTelescopeTitle: "Confronto telescopi smart",
    smartSelectLabel: "Seleziona telescopi (selezione multipla possibile)",
    smartTargetObject: "Oggetto target",
    smartCompareBtn: "Confronta & Visualizza",
    smartNoSelection: "Selezionare almeno un telescopio.",
    smartColTelescope: "Telescopio",
    smartColSensor: "Sensore",
    smartColAperture: "Apertura",
    smartColFocalLength: "Lunghezza focale",
    smartColFRatio: "f/#",
    smartColFov: "Campo visivo",
    smartColScale: "Scala",
    smartColSampling: "Campionamento",
    smartShowDetails: "Mostra dettagli",

    // Help texts
    help: {
        fratio: {
            title: "Rapporto focale (f/ratio)",
            text: "Il rapporto tra la lunghezza focale effettiva e l'apertura del telescopio. Valori più bassi (es. f/4) indicano un sistema più luminoso e veloce; valori più alti (es. f/10) indicano un sistema più lento con maggior contrasto.",
            formula: "f/# = Lunghezza focale × Correttore / Apertura"
        },
        fov: {
            title: "Campo visivo (FOV)",
            text: "L'area di cielo acquisita dal sensore. Dipende dalle dimensioni del sensore e dalla lunghezza focale effettiva. Sensori più grandi o focali più corte producono un campo visivo più ampio.",
            formula: "FOV = (Dimensione sensore / Lunghezza focale) × (180 / π)"
        },
        scale: {
            title: "Scala immagine",
            text: "Quanti secondi d'arco del cielo copre ogni pixel. Valori più piccoli significano risoluzione più fine. Valore indicativo: 1–2 arcsec/px per condizioni di seeing medie.",
            formula: "Scala = (Dimensione pixel [µm] / Lunghezza focale [mm]) × 206,265"
        },
        rayleigh: {
            title: "Limite di Rayleigh",
            text: "Il potere risolutivo teorico del telescopio secondo il criterio di Rayleigh: due sorgenti puntiformi si considerano risolte quando il massimo di una coincide con il primo minimo dell'altra. Dipende dall'apertura e dalla lunghezza d'onda — lunghezze d'onda più corte (viola) consentono una risoluzione migliore.",
            formula: "R = 1,22 × λ [nm] × 0,206265 / Apertura [mm]"
        },
        dawes: {
            title: "Limite di Dawes",
            text: "Un limite di risoluzione empirico derivato da osservazioni visive di stelle doppie. Usa il fattore 1,02 invece di 1,22 (Rayleigh) — osservatori esperti possono risolvere coppie leggermente più ravvicinate. Valori in arcsec più piccoli = risoluzione migliore.",
            formula: "D = 1,02 × λ [nm] × 0,206265 / Apertura [mm]"
        },
        sampling: {
            title: "Campionamento",
            text: "Descrive quanto bene la scala immagine corrisponde al potere risolutivo del telescopio. Sovracampionamento: pixel troppo piccoli — il rumore aumenta. Sottocampionamento: pixel troppo grandi — la risoluzione viene sprecata. Ottimale: 0,8–2,0 arcsec/px.",
            formula: "Valore indicativo: Scala immagine ≈ 0,8–2,0 arcsec/px"
        }
    }
};
