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

    // Tabs
    tabCalculator: "Calculator",
    tabSmartTelescopes: "Smart Telescopes",

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
