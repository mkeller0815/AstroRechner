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
- **Smart Telescope Comparison:** Dedicated tab to compare multiple smart/all-in-one telescopes side by side, including FOV previews; optional "Show details" toggle reveals sensor name, aspect ratio, aperture/focal length, and f-ratio in the selection list
- **Multilingual UI:** Interface available in German, English, Spanish, French, Italian, Dutch, and Portuguese — switchable at runtime via flag buttons; object names are translated in all languages
- **Presets:** External databases for telescopes, cameras, smart telescopes, and target objects (loaded as `.js` files — works locally without a server); smart telescope sensors are shared with the camera preset list so they can be used in both tabs; selecting a camera preset displays a summary line showing resolution, sensor diagonal, and aspect ratio
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
    it.js                — Italian translations
    nl.js                — Dutch translations
    pt.js                — Portuguese translations
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
| Celestron NexStar 8SE | 203 mm | 2032 mm | f/10 |
| Celestron RASA 8 | 203 mm | 400 mm | f/2 |
| Celestron RASA 11 | 279 mm | 620 mm | f/2.2 |
| Celestron RASA 36 | 356 mm | 790 mm | f/2.2 |
| Generic 150mm Newton | 150 mm | 750 mm | f/5 |
| Orion EON 120mm ED APO | 120 mm | 900 mm | f/7.5 |
| Sharpstar 61EDPH II | 61 mm | 335 mm | f/5.5 |
| Sky-Watcher 80ED | 80 mm | 600 mm | f/7.5 |
| Sky-Watcher Skymax 102 | 102 mm | 1300 mm | f/12.7 |
| Sky-Watcher Skymax 180 | 180 mm | 2700 mm | f/15 |
| SVBony Mak 127 | 127 mm | 1500 mm | f/11.8 |
| SVBony SV545 | 45 mm | 203 mm | f/4.5 |
| Touptek Hope D60 | 60 mm | 280 mm | f/4.7 |

## Camera Presets

| Sensor | Used In | Sensor (mm) | Pixel Size | Resolution | Diagonal | Aspect Ratio |
|---|---|---|---|---|---|---|
| Canon EOS 5D Mark IV | — | 36.0 × 24.0 | 5.3 µm | 6720 × 4480 px (30.1 MP) | 43.27 mm | 3:2 |
| Panasonic MN34230 | ASI1600MM | 14.2 × 14.2 | 3.76 µm | 4656 × 3520 px (16.4 MP) | 20.08 mm | 4:3 |
| Sony IMX178 | ASI178MC, Stellina | 7.4 × 5.0 | 2.4 µm | 3096 × 2080 px (6.4 MP) | 8.92 mm | 3:2 |
| Sony IMX183 | ASI183MC | 13.2 × 8.8 | 2.4 µm | 5496 × 3672 px (20.2 MP) | 15.87 mm | 3:2 |
| Sony IMX224 | eQuinox, eVscope | 4.80 × 3.60 | 3.75 µm | 1304 × 976 px (1.3 MP) | 6.00 mm | 4:3 |
| Sony IMX294 | ASI294MC Pro | 17.2 × 13.0 | 4.63 µm | 4144 × 2822 px (11.7 MP) | 21.50 mm | 4:3 |
| Sony IMX347 | eVscope 2 | 7.8 × 4.4 | 2.9 µm | 2688 × 1520 px (4.1 MP) | 8.97 mm | 16:9 |
| Sony IMX415 | Dwarf II | 5.6 × 3.2 | 1.45 µm | 3864 × 2176 px (8.4 MP) | 6.47 mm | 16:9 |
| Sony IMX415 (cropped) | Odyssey Pro | 3.40 × 2.55 | 1.45 µm | 2344 × 1758 px (4.1 MP) | 4.25 mm | 4:3 |
| Sony IMX462 | Vespera, Seestar S50 | 5.57 × 3.13 | 2.9 µm | 1936 × 1096 px (2.1 MP) | 6.39 mm | 16:9 |
| Sony IMX571 | ASI2600 | 23.5 × 15.7 | 3.76 µm | 6248 × 4176 px (26.1 MP) | 28.25 mm | 3:2 |
| Sony IMX585 | ASI585MC, Vespera 2/3, S30 Pro | 11.14 × 6.27 | 2.9 µm | 3856 × 2180 px (8.4 MP) | 12.78 mm | 16:9 |
| Sony IMX662 | Dwarf Mini, Seestar S30 | 5.76 × 3.24 | 2.9 µm | 1936 × 1100 px (2.1 MP) | 6.64 mm | 16:9 |
| Sony IMX676 | ASI676MC, Vespera Pro | 7.0 × 7.0 | 2.0 µm | 3552 × 3552 px (12.6 MP) | 9.90 mm | 1:1 |
| Sony IMX678 | Origin MK2, Dwarf III | 7.7 × 4.3 | 2.0 µm | 3840 × 2160 px (8.3 MP) | 8.81 mm | 16:9 |
| Sony IMX715 | ASI715MC | 5.6 × 3.2 | 1.45 µm | 3864 × 2176 px (8.4 MP) | 6.47 mm | 16:9 |

## Smart Telescope Presets

| Vendor | Model | Aperture | Focal Length | f-ratio | Sensor | Orientation |
|---|---|---|---|---|---|---|
| Celestron | Origin MK 1 | 152 mm | 335 mm | f/2.2 | Sony IMX178 | Landscape |
| Celestron | Origin MK 2 | 152 mm | 335 mm | f/2.2 | Sony IMX678 | Landscape |
| Dwarf Lab | Dwarf II | 24 mm | 100 mm | f/4.2 | Sony IMX415 | Landscape |
| Dwarf Lab | Dwarf III | 35 mm | 150 mm | f/4.3 | Sony IMX678 | Landscape |
| Dwarf Lab | Dwarf Mini | 30 mm | 150 mm | f/5 | Sony IMX662 | Landscape |
| Unistellar | eQuinox | 114 mm | 450 mm | f/3.9 | Sony IMX224 | Landscape |
| Unistellar | eVscope | 112 mm | 450 mm | f/4.0 | Sony IMX224 | Landscape |
| Unistellar | eVscope 2 | 114 mm | 450 mm | f/3.9 | Sony IMX347 | Landscape |
| Unistellar | Odyssey Pro | 85 mm | 320 mm | f/3.8 | Sony IMX415 (cropped, 4:3) | Landscape |
| Vaonis | Stellina | 80 mm | 400 mm | f/5 | Sony IMX178 | Landscape |
| Vaonis | Vespera | 50 mm | 200 mm | f/4 | Sony IMX462 | Landscape |
| Vaonis | Vespera 2 | 50 mm | 250 mm | f/5 | Sony IMX585 | Landscape |
| Vaonis | Vespera 3 | 50 mm | 245 mm | f/4.9 | Sony IMX585 | Landscape |
| Vaonis | Vespera Pro | 50 mm | 250 mm | f/5 | Sony IMX676 | Landscape |
| Vaonis | Vespera Pro 2 | 50 mm | 245 mm | f/4.9 | Sony IMX676 | Landscape |
| ZWO | Seestar S30 | 30 mm | 150 mm | f/5 | Sony IMX662 | Portrait |
| ZWO | Seestar S30 Pro | 30 mm | 160 mm | f/5.3 | Sony IMX585 | Portrait |
| ZWO | Seestar S50 | 50 mm | 250 mm | f/5 | Sony IMX462 | Portrait |

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
2. Enable "Show details" to see sensor name, aspect ratio, aperture/focal length, and f-ratio directly in the selection list
3. Select a target object
4. Click compare to see a side-by-side table of calculated values and individual FOV previews

### Stellarium Tab
1. Click **Connect** to establish a connection to a locally running Stellarium instance
2. Select any object in Stellarium — its name, type, designations, RA/Dec, and angular size appear automatically
3. Click **Use in Calculator** to import the object as the target in both the Calculator and Smart Telescopes tabs
4. Enable **Auto-update** to have the target update silently whenever the selection changes in Stellarium
5. Enable **Auto-recalculate** to automatically re-run the calculation(s) whenever the target changes — only triggers if a calculation has already been performed manually

All calculations run client-side in JavaScript. The effective focal length is `focal_length × corrector_factor`.

## Stellarium Integration

AstroRechner can connect to a locally running [Stellarium](https://stellarium.org) instance via its built-in HTTP Remote Control API (default port 8090) to import the currently selected object as a calculation target.

### Setup in Stellarium

1. Open **Configuration → Plugins → Remote Control**
2. Enable **Load at startup**, then restart Stellarium
3. Open the plugin settings and set **Allow CORS from** to `*`

The API runs on `http://localhost:8090` by default.

### Connection Compatibility

Whether the connection works depends on how the page is served:

| How the page is loaded | Connection |
|---|---|
| Local web server (`python -m http.server`) | Works |
| Local file opened directly in browser (`file://`) | Works in most browsers |
| GitHub Pages (HTTPS) | **Blocked** — browsers reject HTTP requests from HTTPS pages (Mixed Content policy) |

### Security Note

Do not alter your browser's security settings (e.g. disabling Mixed Content protection) to force the connection unless you fully understand the implications. The Mixed Content policy exists to protect users from malicious pages accessing local services.

## Contributing

Pull requests are welcome. To contribute:

1. Fork the repository on [GitHub](https://github.com/mkeller0815/AstroRechner)
2. Create a feature branch
3. Submit a pull request

To add a telescope or camera preset, edit the relevant file in `data/` and submit a PR.
