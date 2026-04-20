const lang_en = {
    pageTitle: "Astro Equipment & FOV Calculator",
    appTitle: "🔭 Astro Equipment & FOV Calculator",

    // Sections
    telescope: "Telescope",
    camera: "Camera",

    // Inputs
    selectPreset: "Select preset",
    selectPresetPlaceholder: "-- Please select --",
    aperture: "Aperture (mm)",
    aperturePlaceholder: "e.g. 80",
    focalLength: "Focal Length (mm)",
    focalLengthPlaceholder: "e.g. 600",
    corrector: "Corrector/Barlow (factor)",
    sensorX: "Sensor Width X (mm)",
    sensorY: "Sensor Height Y (mm)",
    pixelSize: "Pixel Size (µm)",
    targetObject: "Target Object",

    // Button
    calculate: "Calculate & Visualize",

    // Results placeholder
    resultsPlaceholder: "Please enter values...",

    // Canvas
    canvasLabel: "Preview: White frame = Sensor",

    // Alerts
    alertFillAll: "Please fill in all fields!",

    // Result labels
    fRatio: "Focal Ratio",
    fov: "Field of View",
    imageScale: "Image Scale",
    imageScaleUnit: "arcsec/px",
    rayleighLimit: "Rayleigh Limit",
    dawesLimit: "Dawes Limit",
    sampling: "Sampling",

    // Sampling badges
    oversampling: "Strong Oversampling",
    optimalSampling: "Optimal Sampling",
    undersampling: "Undersampling",

    // Object names
    objects: {
        sun:     "Sun",
        moon:    "Moon",
        jupiter: "Jupiter",
        saturn:  "Saturn",
        mars:    "Mars",
        m31:     "M31 Andromeda Galaxy",
        m33:     "M33 Triangulum Galaxy",
        m51:     "M51 Whirlpool Galaxy",
        m81:     "M81 Bode's Galaxy",
        m82:     "M82 Cigar Galaxy",
        m1:      "M1 Crab Nebula",
        m27:     "M27 Dumbbell Nebula",
        m42:     "M42 Orion Nebula",
        m57:     "M57 Ring Nebula",
        ngc891:  "NGC 891",
        ngc2244: "NGC 2244 Rosette Nebula",
        ngc7293: "NGC 7293 Helix Nebula",
        ic1805:  "IC 1805 Heart Nebula",
        ic1848:  "IC 1848 Soul Nebula",
        lmc:     "Large Magellanic Cloud (LMC)",
        smc:     "Small Magellanic Cloud (SMC)",
        ngc2070: "NGC 2070 Tarantula Nebula",
        ngc3372: "NGC 3372 Eta Carinae Nebula",
        ngc5128: "NGC 5128 Centaurus A",
        ngc5139: "NGC 5139 Omega Centauri",
        ngc104:  "NGC 104 47 Tucanae",
        ngc4755: "NGC 4755 Jewel Box"
    },

    // About
    aboutTitle: "About AstroRechner",
    aboutDescription: "AstroRechner is a free, browser-based calculator for astrophotographers. It computes field of view, image scale, focal ratio, and resolution limits for any telescope and camera combination — no installation or internet connection required.",
    aboutVersion: "Version",
    aboutDeveloper: "Developed by",
    aboutLicense: "License",
    aboutLicenseText: "MIT License – free to use, share, and modify.",
    aboutGithub: "Source code on GitHub",
    aboutClose: "Close",
    aboutCopyright: "© 2026 MiceInSpace Development",

    // Tabs
    tabCalculator: "Calculator",
    tabSmartTelescopes: "Smart Telescopes",
    tabStellarium: "Stellarium",

    // Stellarium tab
    stellariumTitle: "Stellarium Connection",
    stellariumConnect: "Connect",
    stellariumConnecting: "Connecting …",
    stellariumConnected: "Connected to Stellarium",
    stellariumConnectionFailed: "Connection failed – is Stellarium running with the Remote Control plugin enabled?",
    stellariumConnectionLost: "Connection to Stellarium lost",
    stellariumNotConnected: "Not connected",
    stellariumSelectedObject: "Selected Object",
    stellariumNoSelection: "No object selected in Stellarium.",
    stellariumType: "Type",
    stellariumRA: "RA (J2000)",
    stellariumDec: "Dec (J2000)",
    stellariumSize: "Angular size",
    stellariumImport: "Use in Calculator",
    stellariumImported: "Object imported",
    stellariumAutoUpdate: "Automatically update target when changed in Stellarium",
    stellariumAutoRecalc: "Automatically recalculate when target changes",
    stellariumHelpText: "<strong>Requirements for the connection:</strong><br>" +
        "1. The <em>Remote Control</em> plugin in Stellarium must be enabled (<em>Configuration → Plugins → Remote Control → Load at startup</em>, then restart Stellarium). In the plugin settings, set <em>Allow CORS from</em> to <code>*</code>.<br>" +
        "2. Whether the connection works depends on how this page is loaded: when served via a <strong>local web server</strong> (e.g. <code>python -m http.server</code>) or opened as a <strong>local file</strong> in the browser it generally works. When loaded from <strong>GitHub Pages (HTTPS)</strong>, browsers block requests to local HTTP services for security reasons (Mixed Content policy).<br>" +
        "3. <strong>Do not alter your browser's security settings</strong> to force the connection unless you know exactly what you are doing and understand the risks involved.",

    // Smart telescope tab
    smartTelescopeTitle: "Smart Telescope Comparison",
    smartSelectLabel: "Select telescopes (multiple selection possible)",
    smartTargetObject: "Target Object",
    smartCompareBtn: "Compare & Visualize",
    smartNoSelection: "Please select at least one telescope.",
    smartColTelescope: "Telescope",
    smartColSensor: "Sensor",
    smartColAperture: "Aperture",
    smartColFocalLength: "Focal Length",
    smartColFRatio: "f/#",
    smartColFov: "Field of View",
    smartColScale: "Scale",
    smartColSampling: "Sampling",
    smartShowDetails: "Show details",

    // Help texts
    help: {
        fratio: {
            title: "Focal Ratio (f-ratio)",
            text: "The ratio of the effective focal length to the aperture. Smaller values (e.g. f/4) mean a brighter, faster system; larger values (e.g. f/10) mean a slower system with higher contrast.",
            formula: "f/# = Focal Length × Corrector / Aperture"
        },
        fov: {
            title: "Field of View (FOV)",
            text: "The area of sky captured by the sensor. Depends on sensor size and effective focal length. Larger sensors or shorter focal lengths produce a wider field of view.",
            formula: "FOV = (Sensor size / Focal length) × (180 / π)"
        },
        scale: {
            title: "Image Scale",
            text: "How many arcseconds of sky each pixel covers. Smaller values mean finer resolution. Typical guideline: 1–2 arcsec/px for average seeing conditions.",
            formula: "Scale = (Pixel size [µm] / Focal length [mm]) × 206.265"
        },
        rayleigh: {
            title: "Rayleigh Limit",
            text: "The theoretical resolving power of the telescope based on the Rayleigh criterion: two point sources are considered resolved when the maximum of one falls on the first minimum of the other. Depends on aperture and wavelength — shorter wavelengths (violet) allow finer resolution.",
            formula: "R = 1.22 × λ [nm] × 0.206265 / Aperture [mm]"
        },
        dawes: {
            title: "Dawes Limit",
            text: "An empirical resolution limit derived from visual observations of double stars. Uses factor 1.02 instead of 1.22 (Rayleigh) — experienced observers can resolve slightly closer pairs. Lower arcsecond values = better resolution.",
            formula: "D = 1.02 × λ [nm] × 0.206265 / Aperture [mm]"
        },
        sampling: {
            title: "Sampling",
            text: "Describes how well the image scale matches the telescope's resolving power. Oversampling: pixels too small — noise increases. Undersampling: pixels too large — resolution is wasted. Optimal: 0.8–2.0 arcsec/px.",
            formula: "Guideline: Image scale ≈ 0.8–2.0 arcsec/px"
        }
    }
};
