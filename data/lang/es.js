const lang_es = {
    pageTitle: "Calculadora Astro & Campo de Visión",
    appTitle: "🔭 Calculadora Astro & Campo de Visión",

    // Sections
    telescope: "Telescopio",
    camera: "Cámara",

    // Inputs
    selectPreset: "Seleccionar preajuste",
    selectPresetPlaceholder: "-- Por favor seleccione --",
    aperture: "Apertura (mm)",
    aperturePlaceholder: "ej. 80",
    focalLength: "Longitud focal (mm)",
    focalLengthPlaceholder: "ej. 600",
    corrector: "Corrector/Barlow (factor)",
    sensorX: "Ancho del sensor X (mm)",
    sensorY: "Alto del sensor Y (mm)",
    pixelSize: "Tamaño de píxel (µm)",
    targetObject: "Objeto objetivo",

    // Button
    calculate: "Calcular & Visualizar",

    // Results placeholder
    resultsPlaceholder: "Por favor introduzca los valores...",

    // Canvas
    canvasLabel: "Vista previa: Marco blanco = Sensor",

    // Alerts
    alertFillAll: "¡Por favor rellene todos los campos!",

    // Result labels
    fRatio: "Relación focal",
    fov: "Campo de visión",
    imageScale: "Escala de imagen",
    imageScaleUnit: "arcsec/px",
    rayleighLimit: "Límite de Rayleigh",
    dawesLimit: "Límite de Dawes",
    sampling: "Muestreo",

    // Sampling badges
    oversampling: "Sobre-muestreo fuerte",
    optimalSampling: "Muestreo óptimo",
    undersampling: "Submuestreo",

    // Tabs
    tabCalculator: "Calculadora",
    tabSmartTelescopes: "Telescopios inteligentes",

    // Smart telescope tab
    smartTelescopeTitle: "Comparación de telescopios inteligentes",
    smartSelectLabel: "Seleccionar telescopios (selección múltiple posible)",
    smartTargetObject: "Objeto objetivo",
    smartCompareBtn: "Comparar & Visualizar",
    smartNoSelection: "Por favor seleccione al menos un telescopio.",
    smartColTelescope: "Telescopio",
    smartColSensor: "Sensor",
    smartColAperture: "Apertura",
    smartColFocalLength: "Longitud focal",
    smartColFRatio: "f/#",
    smartColFov: "Campo de visión",
    smartColScale: "Escala",
    smartColSampling: "Muestreo",

    // Help texts
    help: {
        fratio: {
            title: "Relación focal (f/ratio)",
            text: "La relación entre la longitud focal efectiva y la apertura del telescopio. Valores más bajos (ej. f/4) significan un sistema más luminoso y rápido; valores más altos (ej. f/10) significan un sistema más lento con mayor contraste.",
            formula: "f/# = Longitud focal × Corrector / Apertura"
        },
        fov: {
            title: "Campo de visión (FOV)",
            text: "El área del cielo capturada por el sensor. Depende del tamaño del sensor y la longitud focal efectiva. Sensores más grandes o longitudes focales más cortas producen un campo de visión más amplio.",
            formula: "FOV = (Tamaño sensor / Longitud focal) × (180 / π)"
        },
        scale: {
            title: "Escala de imagen",
            text: "Cuántos segundos de arco del cielo cubre cada píxel. Valores más pequeños significan una resolución más fina. Valor orientativo: 1–2 arcsec/px para condiciones de seeing promedio.",
            formula: "Escala = (Tamaño píxel [µm] / Longitud focal [mm]) × 206,265"
        },
        rayleigh: {
            title: "Límite de Rayleigh",
            text: "El poder de resolución teórico del telescopio según el criterio de Rayleigh: dos fuentes puntuales se consideran resueltas cuando el máximo de una coincide con el primer mínimo de la otra. Depende de la apertura y la longitud de onda — longitudes de onda más cortas (violeta) permiten una mejor resolución.",
            formula: "R = 1,22 × λ [nm] × 0,206265 / Apertura [mm]"
        },
        dawes: {
            title: "Límite de Dawes",
            text: "Un límite de resolución empírico derivado de observaciones visuales de estrellas dobles. Usa el factor 1,02 en lugar de 1,22 (Rayleigh) — observadores experimentados pueden resolver pares ligeramente más cercanos. Valores más pequeños en arcsec = mejor resolución.",
            formula: "D = 1,02 × λ [nm] × 0,206265 / Apertura [mm]"
        },
        sampling: {
            title: "Muestreo",
            text: "Describe qué tan bien coincide la escala de imagen con el poder de resolución del telescopio. Sobre-muestreo: píxeles demasiado pequeños — el ruido aumenta. Submuestreo: píxeles demasiado grandes — se desperdicia resolución. Óptimo: 0,8–2,0 arcsec/px.",
            formula: "Valor orientativo: Escala de imagen ≈ 0,8–2,0 arcsec/px"
        }
    }
};
