# AstroRechner - Astronomical Equipment & FOV Calculator

AstroRechner is a self-contained, client-side web application for astrophotographers to plan imaging sessions. It calculates field of view, image scale, and optical resolution limits for a given telescope/camera combination. It runs directly in any modern web browser without installation.

## Features

- **f-ratio:** Displays the effective f-ratio of the telescope (accounting for corrector/Barlow)
- **Field of View (FOV):** Calculates the sensor's FOV in decimal degrees and DMS format
- **Image Scale:** Computes arcseconds per pixel for the optical system
- **Rayleigh Diffraction Limit:** Wavelength-dependent resolution limit for violet (400 nm), green (550 nm), and red (700 nm)
- **Dawes Limit:** Empirical resolution limit, wavelength-dependent (V/G/R), using factor 1.02 vs. Rayleigh's 1.22
- **Sampling Assessment:** Classifies the setup as oversampling (<0.8 arcsec/px), optimal (0.8–2.0 arcsec/px), or undersampling (>2.0 arcsec/px)
- **FOV Visualization:** Canvas preview showing the selected celestial object overlaid with the sensor frame to scale; object label shows angular size and pixel dimensions; hover over the canvas for a detailed tooltip with angular size in degrees and arcminutes and the calculated pixel size
- **Inline help:** Each result has a `?` icon with a plain-language explanation and the formula used
- **Smart Telescope Comparison:** Dedicated tab to compare multiple smart/all-in-one telescopes side by side, including FOV previews; optional "Show details" toggle reveals sensor, focal length, and f-ratio in the selection list
- **Multilingual UI:** Interface available in German, English, French, and Spanish — switchable at runtime; object names are translated in all languages
- **Presets:** External databases for telescopes, cameras, smart telescopes, and target objects (loaded as `.js` files — works locally without a server)
- **Analytics:** GoatCounter privacy-friendly analytics (no cookies, GDPR-compliant) for the hosted version

## Getting Started

```bash
git clone https://github.com/mkeller0815/AstroRechner.git
```

Then open `index.html` directly in any modern web browser (Chrome, Firefox, Safari, Edge), or visit the hosted version at **https://mkeller0815.github.io/AstroRechner/**.

No server, build tool, or internet connection required.

## File Structure

```
index.html               — main application
data/
  telescopes.js          — telescope preset database
  cameras.js             — camera preset database
  objects.js             — celestial object preset database
  smarttelescopes.js     — smart telescope database
  lang/
    de.js                — German translations
    en.js                — English translations
    fr.js                — French translations
    es.js                — Spanish translations
```

To add telescopes or cameras, edit the corresponding file in `data/`.
To add a new language, create `data/lang/<code>.js` with a `lang_<code>` object matching the structure of the existing files, add a `<script>` tag for it in the HTML, register it in the `languages` map, and add a button to the language switcher.

## Telescope Presets

| Name | Aperture | Focal Length | f-ratio |
|---|---|---|---|
| Askar 103APO | 103 mm | 700 mm | f/6.8 |
| Celestron C8 SCT | 203 mm | 2032 mm | f/10 |
| Celestron C9.25 SCT | 235 mm | 2350 mm | f/10 |
| Celestron C11 SCT | 279 mm | 2800 mm | f/10 |
| Celestron C14 SCT | 356 mm | 3910 mm | f/11 |
| Celestron NexStar 8SE | 203 mm | 1830 mm | f/9 |
| Celestron RASA 8 | 203 mm | 400 mm | f/2 |
| Celestron RASA 11 | 279 mm | 620 mm | f/2.2 |
| Celestron RASA 36 | 914 mm | 1854 mm | f/2 |
| Generic 150mm Newton | 150 mm | 750 mm | f/5 |
| Orion Sirius 120 | 120 mm | 840 mm | f/7 |
| Sharpstar 61EDPH II | 61 mm | 335 mm | f/5.5 |
| Sky-Watcher 80ED | 80 mm | 600 mm | f/7.5 |
| Sky-Watcher Skymax 102 | 102 mm | 1300 mm | f/12.7 |
| Sky-Watcher Skymax 180 | 180 mm | 2700 mm | f/15 |
| SVBony Mak 127 | 127 mm | 1500 mm | f/11.8 |
| SVBony SV545 | 45 mm | 203 mm | f/4.5 |
| Touptek Hope D60 | 60 mm | 280 mm | f/4.7 |

## Camera Presets

| Name | Sensor (mm) | Pixel Size |
|---|---|---|
| Canon EOS 5D Mark IV | 36.0 × 24.0 | 5.3 µm |
| Panasonic MN34230 (ASI1600MM) | 14.2 × 14.2 | 3.76 µm |
| Sony IMX178 (ASI178MC) | 7.4 × 5.0 | 2.4 µm |
| Sony IMX183 (ASI183MC) | 13.2 × 8.8 | 2.4 µm |
| Sony IMX294 (ASI294MC Pro) | 17.2 × 13.0 | 4.63 µm |
| Sony IMX571 (ASI2600) | 23.5 × 15.7 | 3.76 µm |
| Sony IMX585 (ASI585MC) | 11.2 × 6.3 | 2.9 µm |
| Sony IMX676 (ASI676MC) | 7.1 × 7.1 | 2.0 µm |
| Sony IMX715 (ASI715MC) | 5.6 × 3.2 | 1.45 µm |

## Smart Telescope Presets

| Vendor | Model | Aperture | Focal Length | f-ratio | Sensor |
|---|---|---|---|---|---|
| Celestron | Origin MK 1 | 152 mm | 335 mm | f/2.2 | Sony IMX178 |
| Celestron | Origin MK 2 | 152 mm | 335 mm | f/2.2 | Sony IMX678 |
| Dwarf Lab | Dwarf III | 35 mm | 150 mm | f/4.3 | Sony IMX678 |
| Dwarf Lab | Dwarf Mini | 30 mm | 150 mm | f/5 | Sony IMX662 |
| Unistellar | eQuinox | 114 mm | 450 mm | f/3.9 | Sony IMX224 |
| Unistellar | eVscope | 112 mm | 450 mm | f/4.0 | Sony IMX224 |
| Unistellar | eVscope 2 | 114 mm | 450 mm | f/3.9 | Sony IMX347 |
| Unistellar | Odyssey Pro | 85 mm | 320 mm | f/3.8 | Sony IMX415 |
| Vaonis | Stellina | 80 mm | 400 mm | f/5 | Sony IMX178 |
| Vaonis | Vespera | 50 mm | 200 mm | f/4 | Sony IMX462 |
| Vaonis | Vespera 2 | 50 mm | 250 mm | f/5 | Sony IMX585 |
| Vaonis | Vespera 3 | 50 mm | 245 mm | f/4.9 | Sony IMX585 |
| Vaonis | Vespera Pro | 50 mm | 250 mm | f/5 | Sony IMX676 |
| Vaonis | Vespera Pro 2 | 50 mm | 245 mm | f/4.9 | Sony IMX676 |
| ZWO | Seestar S30 | 30 mm | 150 mm | f/5 | Sony IMX662 |
| ZWO | Seestar S30 Pro | 30 mm | 160 mm | f/5.3 | Sony IMX585 |
| ZWO | Seestar S50 | 50 mm | 250 mm | f/5 | Sony IMX462 |

## Target Object Presets

### Solar System
| Object | Angular Size |
|---|---|
| Sun | 0.53° × 0.53° |
| Moon | 0.517° × 0.517° |
| Mars | ~0.0069° (~24.8") |
| Jupiter | ~0.0138° (~49.7") |
| Saturn | ~0.0125° (~45") |

> **Note:** Planetary angular sizes represent approximate apparent sizes near opposition and do not adjust dynamically for current distance.

### Messier Catalog
| Object | Angular Size |
|---|---|
| M1 Crab Nebula | 0.10° × 0.07° |
| M27 Dumbbell Nebula | 0.13° × 0.10° |
| M31 Andromeda Galaxy | 3.16° × 1.0° |
| M33 Triangulum Galaxy | 1.0° × 0.6° |
| M42 Orion Nebula | 1.1° × 1.0° |
| M51 Whirlpool Galaxy | 0.19° × 0.12° |
| M57 Ring Nebula | 0.03° × 0.02° |
| M81 Bode's Galaxy | 0.45° × 0.24° |
| M82 Cigar Galaxy | 0.19° × 0.07° |

### NGC / IC Catalog
| Object | Angular Size |
|---|---|
| NGC 104 (47 Tucanae) | 0.73° × 0.73° |
| NGC 891 | 0.23° × 0.04° |
| NGC 2070 (Tarantula Nebula) | 2.0° × 1.33° |
| NGC 2244 (Rosette Nebula) | 1.3° × 1.3° |
| NGC 3372 (Eta Carinae Nebula) | 2.0° × 2.0° |
| NGC 4755 (Jewel Box) | 0.17° × 0.17° |
| NGC 5128 (Centaurus A) | 0.43° × 0.33° |
| NGC 5139 (Omega Centauri) | 0.60° × 0.60° |
| NGC 7293 (Helix Nebula) | 0.42° × 0.42° |
| IC 1805 (Heart Nebula) | 2.5° × 1.0° |
| IC 1848 (Soul Nebula) | 2.5° × 1.25° |
| LMC (Large Magellanic Cloud) | 10.7° × 9.2° |
| SMC (Small Magellanic Cloud) | 5.33° × 3.08° |

## How It Works

### Calculator Tab
1. Select telescope and camera presets or enter custom values manually
2. Optionally set a corrector/Barlow factor (default 1.0; use values <1.0 for focal reducers, >1.0 for Barlow lenses)
3. Select a target object from the dropdown
4. Click the calculate button to compute results and render the FOV preview

### Smart Telescopes Tab
1. Check one or more smart telescopes from the vendor-grouped selection
2. Enable "Show details" to see sensor name, focal length, and f-ratio directly in the selection list
3. Select a target object
4. Click compare to see a side-by-side table of calculated values and individual FOV previews

All calculations run client-side in JavaScript. The effective focal length is `focal_length × corrector_factor`.

## Contributing

Pull requests are welcome. To contribute:

1. Fork the repository on [GitHub](https://github.com/mkeller0815/AstroRechner)
2. Create a feature branch
3. Submit a pull request

To add a telescope or camera preset, edit the relevant file in `data/` and submit a PR.
