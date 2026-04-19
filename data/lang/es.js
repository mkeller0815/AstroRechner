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

    // Object names
    objects: {
        sun:     "Sol",
        moon:    "Luna",
        jupiter: "Júpiter",
        saturn:  "Saturno",
        mars:    "Marte",
        m31:     "M31 Galaxia de Andrómeda",
        m33:     "M33 Galaxia del Triángulo",
        m51:     "M51 Galaxia del Remolino",
        m81:     "M81 Galaxia de Bode",
        m82:     "M82 Galaxia del Cigarro",
        m1:      "M1 Nebulosa del Cangrejo",
        m27:     "M27 Nebulosa de la Mancuerna",
        m42:     "M42 Nebulosa de Orión",
        m57:     "M57 Nebulosa del Anillo",
        ngc891:  "NGC 891",
        ngc2244: "NGC 2244 Nebulosa de la Roseta",
        ngc7293: "NGC 7293 Nebulosa de la Hélice",
        ic1805:  "IC 1805 Nebulosa del Corazón",
        ic1848:  "IC 1848 Nebulosa del Alma",
        lmc:     "Gran Nube de Magallanes (LMC)",
        smc:     "Pequeña Nube de Magallanes (SMC)",
        ngc2070: "NGC 2070 Nebulosa de la Tarántula",
        ngc3372: "NGC 3372 Nebulosa de Eta Carinae",
        ngc5128: "NGC 5128 Centaurus A",
        ngc5139: "NGC 5139 Omega Centauri",
        ngc104:  "NGC 104 47 Tucanae",
        ngc4755: "NGC 4755 Caja de Joyas"
    },

    // About
    aboutTitle: "Acerca de AstroRechner",
    aboutDescription: "AstroRechner es una calculadora gratuita basada en navegador para astrofotógrafos. Calcula el campo de visión, la escala de imagen, la relación focal y los límites de resolución para cualquier combinación de telescopio y cámara — sin instalación ni conexión a internet.",
    aboutVersion: "Versión",
    aboutDeveloper: "Desarrollado por",
    aboutLicense: "Licencia",
    aboutLicenseText: "Licencia MIT – uso, distribución y modificación libres.",
    aboutGithub: "Código fuente en GitHub",
    aboutClose: "Cerrar",
    aboutCopyright: "© 2026 MiceInSpace Development",

    // Tabs
    tabCalculator: "Calculadora",
    tabSmartTelescopes: "Telescopios inteligentes",
    tabStellarium: "Stellarium",
    stellariumTitle: "Conexión con Stellarium",
    stellariumConnect: "Conectar",
    stellariumConnecting: "Conectando …",
    stellariumConnected: "Conectado a Stellarium",
    stellariumConnectionFailed: "Error de conexión – ¿Stellarium está en ejecución con el plugin Remote Control activado?",
    stellariumConnectionLost: "Conexión con Stellarium perdida",
    stellariumNotConnected: "No conectado",
    stellariumSelectedObject: "Objeto seleccionado",
    stellariumNoSelection: "Ningún objeto seleccionado en Stellarium.",
    stellariumType: "Tipo",
    stellariumRA: "AR",
    stellariumDec: "Dec",
    stellariumSize: "Tamaño angular",
    stellariumImport: "Usar en la calculadora",
    stellariumImported: "Objeto importado",
    stellariumAutoUpdate: "Actualizar el objetivo automáticamente al cambiar en Stellarium",
    stellariumHelpText: "<strong>Requisitos para la conexión:</strong><br>" +
        "1. El plugin <em>Remote Control</em> de Stellarium debe estar activado (<em>Configuración → Plugins → Remote Control → Cargar al inicio</em>, luego reiniciar Stellarium). En los ajustes del plugin, establece <em>Permitir CORS desde</em> como <code>*</code>.<br>" +
        "2. Si la conexión funciona depende de cómo se cargue esta página: a través de un <strong>servidor web local</strong> (ej. <code>python -m http.server</code>) o como <strong>archivo local</strong> en el navegador suele funcionar. Desde <strong>GitHub Pages (HTTPS)</strong>, los navegadores bloquean las solicitudes a servicios HTTP locales (política de contenido mixto).<br>" +
        "3. <strong>No modifiques la configuración de seguridad de tu navegador</strong> para forzar la conexión, a menos que sepas exactamente lo que haces y entiendas los riesgos.",

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
    smartShowDetails: "Mostrar detalles",

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
