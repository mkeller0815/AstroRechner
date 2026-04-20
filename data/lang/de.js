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

    // Object names
    objects: {
        sun:     "Sonne",
        moon:    "Mond",
        jupiter: "Jupiter",
        saturn:  "Saturn",
        mars:    "Mars",
        m31:     "M31 Andromeda Galaxie",
        m33:     "M33 Dreieck Galaxie",
        m51:     "M51 Whirlpool Galaxie",
        m81:     "M81 Bode Galaxie",
        m82:     "M82 Zigarren Galaxie",
        m1:      "M1 Krebsnebel",
        m27:     "M27 Hantelnebel",
        m42:     "M42 Orionnebel",
        m57:     "M57 Ringnebel",
        ngc891:  "NGC 891",
        ngc2244: "NGC 2244 Rosettennebel",
        ngc7293: "NGC 7293 Helixnebel",
        ic1805:  "IC 1805 Herznebel",
        ic1848:  "IC 1848 Seelennebel",
        lmc:     "Große Magellansche Wolke (LMC)",
        smc:     "Kleine Magellansche Wolke (SMC)",
        ngc2070: "NGC 2070 Tarantelnebel",
        ngc3372: "NGC 3372 Eta Carinae Nebel",
        ngc5128: "NGC 5128 Centaurus A",
        ngc5139: "NGC 5139 Omega Centauri",
        ngc104:  "NGC 104 47 Tucanae",
        ngc4755: "NGC 4755 Schmuckkästchen"
    },

    // About
    aboutTitle: "Über AstroRechner",
    aboutDescription: "AstroRechner ist ein kostenloser, browserbasierter Rechner für Astrofotografen. Er berechnet Bildfeld, Bildmaßstab, Öffnungsverhältnis und Auflösungsgrenzen für beliebige Teleskop- und Kamerakombinationen – ohne Installation oder Internetverbindung.",
    aboutVersion: "Version",
    aboutDeveloper: "Entwickelt von",
    aboutLicense: "Lizenz",
    aboutLicenseText: "MIT License – freie Nutzung, Weitergabe und Modifikation erlaubt.",
    aboutGithub: "Quellcode auf GitHub",
    aboutClose: "Schließen",
    aboutCopyright: "© 2026 MiceInSpace Development",

    // Tabs
    tabCalculator: "Rechner",
    tabSmartTelescopes: "Smart Teleskope",
    tabStellarium: "Stellarium",

    // Stellarium tab
    stellariumTitle: "Stellarium Verbindung",
    stellariumConnect: "Verbinden",
    stellariumConnecting: "Verbinde …",
    stellariumConnected: "Verbunden mit Stellarium",
    stellariumConnectionFailed: "Verbindung fehlgeschlagen – läuft Stellarium mit aktiviertem Remote-Control-Plugin?",
    stellariumConnectionLost: "Verbindung zu Stellarium unterbrochen",
    stellariumNotConnected: "Nicht verbunden",
    stellariumSelectedObject: "Ausgewähltes Objekt",
    stellariumNoSelection: "Kein Objekt in Stellarium ausgewählt.",
    stellariumType: "Typ",
    stellariumRA: "RA (J2000)",
    stellariumDec: "Dek (J2000)",
    stellariumSize: "Winkelgröße",
    stellariumImport: "In Rechner übernehmen",
    stellariumImported: "Objekt übernommen",
    stellariumAutoUpdate: "Ziel automatisch übernehmen wenn in Stellarium gewechselt",
    stellariumAutoRecalc: "Berechnung automatisch aktualisieren wenn Ziel gewechselt wird",
    stellariumHelpText: "<strong>Voraussetzungen für die Verbindung:</strong><br>" +
        "1. Das <em>Remote Control</em>-Plugin in Stellarium muss aktiviert sein (<em>Konfiguration → Plugins → Remote Control → Beim Start laden</em> aktivieren und Stellarium neu starten). In den Plugin-Einstellungen muss unter <em>CORS-Ursprünge erlauben</em> der Wert <code>*</code> eingetragen sein.<br>" +
        "2. Ob die Verbindung funktioniert, hängt davon ab, wie diese Seite geladen wird: Bei Aufruf über einen <strong>lokalen Webserver</strong> (z.B. <code>python -m http.server</code>) oder direkt als <strong>Datei im Browser</strong> funktioniert es in der Regel. Bei Aufruf über <strong>GitHub Pages (HTTPS)</strong> blockieren Browser aus Sicherheitsgründen Anfragen an lokale HTTP-Dienste (Mixed Content).<br>" +
        "3. <strong>Bitte keine Sicherheitseinstellungen des Browsers ändern</strong>, um die Verbindung zu erzwingen – es sei denn, du weißt genau, was du tust und welche Risiken das mit sich bringt.",

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
    smartShowDetails: "Details anzeigen",

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
