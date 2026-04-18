const lang_de = {
    pageTitle: "Astro-Equipment & FOV Rechner",
    appTitle: "🔭 Astro-Equipment & FOV Rechner",

    // Sections
    telescope: "Teleskop",
    camera: "Kamera",

    // Inputs
    selectPreset: "Preset auswählen",
    selectPresetPlaceholder: "-- Bitte wählen --",
    aperture: "Öffnung (mm)",
    aperturePlaceholder: "z.B. 80",
    focalLength: "Brennweite (mm)",
    focalLengthPlaceholder: "z.B. 600",
    corrector: "Korrektor/Barlow (Faktor)",
    sensorX: "Sensorbreite X (mm)",
    sensorY: "Sensorhöhe Y (mm)",
    pixelSize: "Pixelgröße (µm)",
    targetObject: "Ziel-Objekt",

    // Button
    calculate: "Berechnen & Visualisieren",

    // Results placeholder
    resultsPlaceholder: "Bitte Werte eingeben...",

    // Canvas
    canvasLabel: "Vorschau: Weißer Rahmen = Sensor",

    // Alerts
    alertFillAll: "Bitte fülle alle Felder aus!",

    // Result labels
    fRatio: "Öffnungsverhältnis",
    fov: "Bildfeld",
    imageScale: "Bildmaßstab",
    imageScaleUnit: "arcsec/px",
    rayleighLimit: "Rayleigh Limit",
    dawesLimit: "Dawes Limit",
    sampling: "Sampling",

    // Sampling badges
    oversampling: "Starkes Oversampling",
    optimalSampling: "Optimales Sampling",
    undersampling: "Undersampling",

    // Tabs
    tabCalculator: "Rechner",
    tabSmartTelescopes: "Smart Teleskope",

    // Smart telescope tab
    smartTelescopeTitle: "Smart Teleskop Vergleich",
    smartSelectLabel: "Teleskope auswählen (Mehrfachauswahl möglich)",
    smartTargetObject: "Ziel-Objekt",
    smartCompareBtn: "Vergleichen & Visualisieren",
    smartNoSelection: "Bitte mindestens ein Teleskop auswählen.",
    smartColTelescope: "Teleskop",
    smartColSensor: "Sensor",
    smartColAperture: "Öffnung",
    smartColFocalLength: "Brennweite",
    smartColFRatio: "f/#",
    smartColFov: "Bildfeld",
    smartColScale: "Maßstab",
    smartColSampling: "Sampling",

    // Help texts
    help: {
        fratio: {
            title: "Öffnungsverhältnis (f-Ratio)",
            text: "Das Verhältnis der effektiven Brennweite zur Öffnung des Teleskops. Kleinere Werte (z.B. f/4) bedeuten ein lichtstärkeres, schnelleres System; größere Werte (z.B. f/10) ein langsameres mit höherem Kontrast.",
            formula: "f/# = Brennweite × Korrektor / Öffnung"
        },
        fov: {
            title: "Bildfeld (Field of View)",
            text: "Der Himmelsausschnitt, den der Sensor abbildet. Hängt von der Sensorgröße und der effektiven Brennweite ab. Größere Sensoren oder kürzere Brennweiten ergeben ein größeres Bildfeld.",
            formula: "FOV = (Sensorgröße / Brennweite) × (180 / π)"
        },
        scale: {
            title: "Bildmaßstab (Image Scale)",
            text: "Gibt an, wie viele Bogensekunden ein einzelnes Pixel am Himmel abdeckt. Kleinere Werte bedeuten eine feinere Auflösung. Richtwert: 1–2 arcsec/px für typisches Seeing.",
            formula: "Maßstab = (Pixelgröße [µm] / Brennweite [mm]) × 206.265"
        },
        rayleigh: {
            title: "Rayleigh-Limit",
            text: "Das theoretische Auflösungsvermögen des Teleskops nach dem Rayleigh-Kriterium: Zwei Punktquellen gelten als getrennt, wenn das Maximum der einen im ersten Minimum der anderen liegt. Abhängig von Öffnung und Wellenlänge – kürzere Wellenlängen (Violett) ermöglichen bessere Auflösung.",
            formula: "R = 1.22 × λ [nm] × 0.206265 / Öffnung [mm]"
        },
        dawes: {
            title: "Dawes-Limit",
            text: "Empirisches Auflösungslimit, abgeleitet aus visuellen Beobachtungen von Doppelsternen. Verwendet den Faktor 1.02 statt 1.22 (Rayleigh) – erfahrene Beobachter können etwas näher beieinanderliegende Sterne noch trennen. Kleinere arcsec-Werte = bessere Auflösung.",
            formula: "D = 1.02 × λ [nm] × 0.206265 / Öffnung [mm]"
        },
        sampling: {
            title: "Sampling",
            text: "Beschreibt, wie gut der Bildmaßstab zur Auflösung des Teleskops passt. Oversampling: Pixel zu klein – Bildrauschen steigt. Undersampling: Pixel zu groß – Auflösung wird verschenkt. Optimal: 0.8–2.0 arcsec/px.",
            formula: "Richtwert: Bildmaßstab ≈ 0.8–2.0 arcsec/px"
        }
    }
};
