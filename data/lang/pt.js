const lang_pt = {
    pageTitle: "Calculadora Astro & Campo Visual",
    appTitle: "🔭 Calculadora Astro & Campo Visual",

    // Sections
    telescope: "Telescópio",
    camera: "Câmera",

    // Inputs
    selectPreset: "Selecionar preset",
    selectPresetPlaceholder: "-- Selecionar --",
    aperture: "Abertura (mm)",
    aperturePlaceholder: "ex. 80",
    focalLength: "Distância focal (mm)",
    focalLengthPlaceholder: "ex. 600",
    corrector: "Corretor/Barlow (fator)",
    sensorX: "Largura do sensor X (mm)",
    sensorY: "Altura do sensor Y (mm)",
    pixelSize: "Tamanho do pixel (µm)",
    targetObject: "Objeto alvo",

    // Button
    calculate: "Calcular & Visualizar",

    // Results placeholder
    resultsPlaceholder: "Insira os valores...",

    // Canvas
    canvasLabel: "Pré-visualização: Moldura branca = Sensor",

    // Alerts
    alertFillAll: "Preencha todos os campos!",

    // Result labels
    fRatio: "Razão focal",
    fov: "Campo visual",
    imageScale: "Escala de imagem",
    imageScaleUnit: "arcsec/px",
    rayleighLimit: "Limite de Rayleigh",
    dawesLimit: "Limite de Dawes",
    sampling: "Amostragem",

    // Sampling badges
    oversampling: "Sobre-amostragem forte",
    optimalSampling: "Amostragem ideal",
    undersampling: "Sub-amostragem",

    // Object names
    objects: {
        sun:     "Sol",
        moon:    "Lua",
        jupiter: "Júpiter",
        saturn:  "Saturno",
        mars:    "Marte",
        m31:     "M31 Galáxia de Andrômeda",
        m33:     "M33 Galáxia do Triângulo",
        m51:     "M51 Galáxia do Redemoinho",
        m81:     "M81 Galáxia de Bode",
        m82:     "M82 Galáxia Charuto",
        m1:      "M1 Nebulosa do Caranguejo",
        m27:     "M27 Nebulosa Haltere",
        m42:     "M42 Nebulosa de Órion",
        m57:     "M57 Nebulosa Anel",
        ngc891:  "NGC 891",
        ngc2244: "NGC 2244 Nebulosa Roseta",
        ngc7293: "NGC 7293 Nebulosa Hélice",
        ic1805:  "IC 1805 Nebulosa Coração",
        ic1848:  "IC 1848 Nebulosa Alma",
        lmc:     "Grande Nuvem de Magalhães (LMC)",
        smc:     "Pequena Nuvem de Magalhães (SMC)",
        ngc2070: "NGC 2070 Nebulosa Tarântula",
        ngc3372: "NGC 3372 Nebulosa Eta Carinae",
        ngc5128: "NGC 5128 Centaurus A",
        ngc5139: "NGC 5139 Ômega Centauri",
        ngc104:  "NGC 104 47 Tucanae",
        ngc4755: "NGC 4755 Caixa de Joias"
    },

    // About
    aboutTitle: "Sobre o AstroRechner",
    aboutDescription: "AstroRechner é uma calculadora gratuita baseada em navegador para astrofotógrafos. Calcula o campo visual, a escala de imagem, a razão focal e os limites de resolução para qualquer combinação de telescópio e câmera — sem instalação nem conexão à internet.",
    aboutVersion: "Versão",
    aboutDeveloper: "Desenvolvido por",
    aboutLicense: "Licença",
    aboutLicenseText: "Licença MIT – uso, partilha e modificação livres.",
    aboutGithub: "Código-fonte no GitHub",
    aboutClose: "Fechar",
    aboutCopyright: "© 2026 MiceInSpace Development",

    // Tabs
    tabCalculator: "Calculadora",
    tabSmartTelescopes: "Telescópios inteligentes",
    tabStellarium: "Stellarium",
    stellariumTitle: "Ligação ao Stellarium",
    stellariumConnect: "Ligar",
    stellariumConnecting: "A ligar …",
    stellariumConnected: "Ligado ao Stellarium",
    stellariumConnectionFailed: "Falha na ligação – o Stellarium está em execução com o plugin Remote Control ativado?",
    stellariumConnectionLost: "Ligação ao Stellarium perdida",
    stellariumNotConnected: "Não ligado",
    stellariumSelectedObject: "Objeto selecionado",
    stellariumNoSelection: "Nenhum objeto selecionado no Stellarium.",
    stellariumType: "Tipo",
    stellariumRA: "AR",
    stellariumDec: "Dec",
    stellariumSize: "Tamanho angular",
    stellariumImport: "Usar na calculadora",
    stellariumImported: "Objeto importado",
    stellariumAutoUpdate: "Atualizar o alvo automaticamente quando alterado no Stellarium",
    stellariumHelpText: "<strong>Requisitos para a ligação:</strong><br>" +
        "1. O plugin <em>Remote Control</em> do Stellarium deve estar ativado (<em>Configuração → Plugins → Remote Control → Carregar no início</em>, depois reiniciar o Stellarium). Nas definições do plugin, defina <em>Permitir CORS de</em> como <code>*</code>.<br>" +
        "2. O funcionamento da ligação depende de como esta página é carregada: através de um <strong>servidor web local</strong> (ex. <code>python -m http.server</code>) ou como <strong>ficheiro local</strong> no navegador funciona geralmente. A partir do <strong>GitHub Pages (HTTPS)</strong>, os navegadores bloqueiam pedidos a serviços HTTP locais (política de Mixed Content).<br>" +
        "3. <strong>Não altere as definições de segurança do seu navegador</strong> para forçar a ligação, a menos que saiba exatamente o que está a fazer e compreenda os riscos.",

    // Smart telescope tab
    smartTelescopeTitle: "Comparação de telescópios inteligentes",
    smartSelectLabel: "Selecionar telescópios (seleção múltipla possível)",
    smartTargetObject: "Objeto alvo",
    smartCompareBtn: "Comparar & Visualizar",
    smartNoSelection: "Selecione pelo menos um telescópio.",
    smartColTelescope: "Telescópio",
    smartColSensor: "Sensor",
    smartColAperture: "Abertura",
    smartColFocalLength: "Distância focal",
    smartColFRatio: "f/#",
    smartColFov: "Campo visual",
    smartColScale: "Escala",
    smartColSampling: "Amostragem",
    smartShowDetails: "Mostrar detalhes",

    // Help texts
    help: {
        fratio: {
            title: "Razão focal (f/ratio)",
            text: "A razão entre a distância focal efetiva e a abertura do telescópio. Valores menores (ex. f/4) indicam um sistema mais luminoso e rápido; valores maiores (ex. f/10) indicam um sistema mais lento com maior contraste.",
            formula: "f/# = Distância focal × Corretor / Abertura"
        },
        fov: {
            title: "Campo visual (FOV)",
            text: "A área do céu capturada pelo sensor. Depende do tamanho do sensor e da distância focal efetiva. Sensores maiores ou distâncias focais menores produzem um campo visual mais amplo.",
            formula: "FOV = (Tamanho do sensor / Distância focal) × (180 / π)"
        },
        scale: {
            title: "Escala de imagem",
            text: "Quantos segundos de arco do céu cada pixel cobre. Valores menores significam resolução mais fina. Valor indicativo: 1–2 arcsec/px para condições de seeing médias.",
            formula: "Escala = (Tamanho do pixel [µm] / Distância focal [mm]) × 206,265"
        },
        rayleigh: {
            title: "Limite de Rayleigh",
            text: "O poder de resolução teórico do telescópio segundo o critério de Rayleigh: duas fontes pontuais são consideradas resolvidas quando o máximo de uma coincide com o primeiro mínimo da outra. Depende da abertura e do comprimento de onda — comprimentos de onda menores (violeta) permitem melhor resolução.",
            formula: "R = 1,22 × λ [nm] × 0,206265 / Abertura [mm]"
        },
        dawes: {
            title: "Limite de Dawes",
            text: "Um limite de resolução empírico derivado de observações visuais de estrelas duplas. Usa o fator 1,02 em vez de 1,22 (Rayleigh) — observadores experientes conseguem resolver pares ligeiramente mais próximos. Valores em arcsec menores = melhor resolução.",
            formula: "D = 1,02 × λ [nm] × 0,206265 / Abertura [mm]"
        },
        sampling: {
            title: "Amostragem",
            text: "Descreve quão bem a escala de imagem corresponde ao poder de resolução do telescópio. Sobre-amostragem: pixels muito pequenos — o ruído aumenta. Sub-amostragem: pixels muito grandes — a resolução é desperdiçada. Ótimo: 0,8–2,0 arcsec/px.",
            formula: "Valor indicativo: Escala de imagem ≈ 0,8–2,0 arcsec/px"
        }
    }
};
