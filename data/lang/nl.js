const lang_nl = {
    pageTitle: "Astro Rekenmachine & Beeldveld Calculator",
    appTitle: "🔭 Astro Rekenmachine & Beeldveld Calculator",

    // Sections
    telescope: "Telescoop",
    camera: "Camera",

    // Inputs
    selectPreset: "Selecteer preset",
    selectPresetPlaceholder: "-- Selecteer --",
    aperture: "Opening (mm)",
    aperturePlaceholder: "bijv. 80",
    focalLength: "Brandpuntsafstand (mm)",
    focalLengthPlaceholder: "bijv. 600",
    corrector: "Corrector/Barlow (factor)",
    sensorX: "Sensorbreedte X (mm)",
    sensorY: "Sensorhoogte Y (mm)",
    pixelSize: "Pixelgrootte (µm)",
    targetObject: "Doelobject",

    // Button
    calculate: "Bereken & Visualiseer",

    // Results placeholder
    resultsPlaceholder: "Vul waarden in...",

    // Canvas
    canvasLabel: "Voorbeeld: Wit kader = Sensor",

    // Alerts
    alertFillAll: "Vul alle velden in!",

    // Result labels
    fRatio: "Brandpuntsverhouding",
    fov: "Beeldveld",
    imageScale: "Beeldschaal",
    imageScaleUnit: "arcsec/px",
    rayleighLimit: "Rayleigh-limiet",
    dawesLimit: "Dawes-limiet",
    sampling: "Sampling",

    // Sampling badges
    oversampling: "Sterk oversampling",
    optimalSampling: "Optimale sampling",
    undersampling: "Undersampling",

    // Object names
    objects: {
        sun:     "Zon",
        moon:    "Maan",
        jupiter: "Jupiter",
        saturn:  "Saturnus",
        mars:    "Mars",
        m31:     "M31 Andromedanevel",
        m33:     "M33 Driehoekstelsel",
        m51:     "M51 Draaikolk Sterrenstelsel",
        m81:     "M81 Bode's Sterrenstelsel",
        m82:     "M82 Sigaarstelsel",
        m1:      "M1 Krabnevel",
        m27:     "M27 Halternevel",
        m42:     "M42 Orionnevel",
        m57:     "M57 Ringnevel",
        ngc891:  "NGC 891",
        ngc2244: "NGC 2244 Rozettenevel",
        ngc7293: "NGC 7293 Helixnevel",
        ic1805:  "IC 1805 Hartnevel",
        ic1848:  "IC 1848 Zielnevel",
        lmc:     "Grote Magelhaense Wolk (LMC)",
        smc:     "Kleine Magelhaense Wolk (SMC)",
        ngc2070: "NGC 2070 Tarantulanevel",
        ngc3372: "NGC 3372 Eta Carinae Nevel",
        ngc5128: "NGC 5128 Centaurus A",
        ngc5139: "NGC 5139 Omega Centauri",
        ngc104:  "NGC 104 47 Tucanae",
        ngc4755: "NGC 4755 Juwelenkist"
    },

    // About
    aboutTitle: "Over AstroRechner",
    aboutDescription: "AstroRechner is een gratis, browsergebaseerde rekenmachine voor astrofotografen. Het berekent het beeldveld, de beeldschaal, de brandpuntsverhouding en resolutielimieten voor elke telescoop- en cameracombinatie — zonder installatie of internetverbinding.",
    aboutVersion: "Versie",
    aboutDeveloper: "Ontwikkeld door",
    aboutLicense: "Licentie",
    aboutLicenseText: "MIT-licentie – vrij te gebruiken, delen en aanpassen.",
    aboutGithub: "Broncode op GitHub",
    aboutClose: "Sluiten",
    aboutCopyright: "© 2026 MiceInSpace Development",

    // Tabs
    tabCalculator: "Rekenmachine",
    tabSmartTelescopes: "Slimme telescopen",

    // Smart telescope tab
    smartTelescopeTitle: "Vergelijking slimme telescopen",
    smartSelectLabel: "Selecteer telescopen (meervoudige selectie mogelijk)",
    smartTargetObject: "Doelobject",
    smartCompareBtn: "Vergelijk & Visualiseer",
    smartNoSelection: "Selecteer minimaal één telescoop.",
    smartColTelescope: "Telescoop",
    smartColSensor: "Sensor",
    smartColAperture: "Opening",
    smartColFocalLength: "Brandpuntsafstand",
    smartColFRatio: "f/#",
    smartColFov: "Beeldveld",
    smartColScale: "Schaal",
    smartColSampling: "Sampling",
    smartShowDetails: "Details tonen",

    // Help texts
    help: {
        fratio: {
            title: "Brandpuntsverhouding (f/ratio)",
            text: "De verhouding tussen de effectieve brandpuntsafstand en de opening van de telescoop. Lagere waarden (bijv. f/4) betekenen een helderder, sneller systeem; hogere waarden (bijv. f/10) betekenen een trager systeem met meer contrast.",
            formula: "f/# = Brandpuntsafstand × Corrector / Opening"
        },
        fov: {
            title: "Beeldveld (FOV)",
            text: "Het stuk hemel dat de sensor vastlegt. Afhankelijk van de sensorgrootte en de effectieve brandpuntsafstand. Grotere sensoren of kortere brandpuntsafstanden geven een groter beeldveld.",
            formula: "FOV = (Sensorgrootte / Brandpuntsafstand) × (180 / π)"
        },
        scale: {
            title: "Beeldschaal",
            text: "Hoeveel boogseconden hemel elke pixel beslaat. Kleinere waarden betekenen fijnere resolutie. Richtwaarde: 1–2 arcsec/px bij gemiddelde seeing.",
            formula: "Schaal = (Pixelgrootte [µm] / Brandpuntsafstand [mm]) × 206,265"
        },
        rayleigh: {
            title: "Rayleigh-limiet",
            text: "Het theoretische oplossend vermogen van de telescoop volgens het Rayleigh-criterium: twee puntbronnen worden als opgelost beschouwd wanneer het maximum van de ene samenvalt met het eerste minimum van de andere. Afhankelijk van opening en golflengte — kortere golflengten (violet) geven een betere resolutie.",
            formula: "R = 1,22 × λ [nm] × 0,206265 / Opening [mm]"
        },
        dawes: {
            title: "Dawes-limiet",
            text: "Een empirische resolutielimiet afgeleid van visuele waarnemingen van dubbelsterren. Gebruikt factor 1,02 in plaats van 1,22 (Rayleigh) — ervaren waarnemers kunnen iets nauwere paren oplossen. Kleinere boogsecondwaarden = betere resolutie.",
            formula: "D = 1,02 × λ [nm] × 0,206265 / Opening [mm]"
        },
        sampling: {
            title: "Sampling",
            text: "Beschrijft hoe goed de beeldschaal overeenkomt met het oplossend vermogen van de telescoop. Oversampling: pixels te klein — ruis neemt toe. Undersampling: pixels te groot — resolutie wordt verspild. Optimaal: 0,8–2,0 arcsec/px.",
            formula: "Richtwaarde: Beeldschaal ≈ 0,8–2,0 arcsec/px"
        }
    }
};
