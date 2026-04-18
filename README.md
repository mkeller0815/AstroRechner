# AstroRechner - Astronomical Equipment & FOV Calculator

AstroRechner is a self-contained, client-side web application for astrophotographers to plan imaging sessions. It calculates field of view, image scale, and optical resolution limits for a given telescope/camera combination. It runs directly in any modern web browser without installation.

## Features

- **f-ratio:** Displays the effective f-ratio of the telescope (accounting for corrector/Barlow)
- **Field of View (FOV):** Calculates the sensor's FOV in decimal degrees and DMS format
- **Image Scale:** Computes arcseconds per pixel for the optical system
- **Rayleigh Diffraction Limit:** Wavelength-dependent resolution limit for violet (400 nm), green (550 nm), and red (700 nm)
- **Dawes Limit:** Empirical resolution limit, wavelength-dependent (V/G/R), using factor 1.02 vs. Rayleigh's 1.22
- **Sampling Assessment:** Classifies the setup as oversampling (<0.8 arcsec/px), optimal (0.8–2.0 arcsec/px), or undersampling (>2.0 arcsec/px)
- **FOV Visualization:** Canvas preview showing the selected celestial object overlaid with the sensor frame to scale
- **Inline help:** Each result has a `?` icon with a plain-language explanation and the formula used
- **Multilingual UI:** Interface available in German, English, and French — switchable at runtime
- **Presets:** External databases for telescopes, cameras, and target objects (loaded as `.js` files — works locally without a server)

## File Structure

```
AstroRechner.html   — main application
data/
  telescopes.js     — telescope preset database
  cameras.js        — camera preset database
  objects.js        — celestial object preset database
  lang/
    de.js           — German translations
    en.js           — English translations
    fr.js           — French translations
```

To add telescopes or cameras, edit the corresponding file in `data/`.
To add a new language, create `data/lang/<code>.js` with a `lang_<code>` object matching the structure of the existing files, add a `<script>` tag for it in the HTML, register it in the `languages` map, and add a button to the language switcher.

## Telescope Presets

| Name | Aperture | Focal Length | f-ratio |
|---|---|---|---|
| Sky-Watcher 80ED | 80 mm | 600 mm | f/7.5 |
| Sky-Watcher Skymax 180 | 180 mm | 2700 mm | f/15 |
| Celestron NexStar 8SE | 203 mm | 1830 mm | f/9 |
| Orion Sirius 120 | 120 mm | 840 mm | f/7 |
| Generic 150mm Newton | 150 mm | 750 mm | f/5 |
| Askar 103APO | 103 mm | 700 mm | f/6.8 |
| Sharpstar 61EDPH II | 61 mm | 335 mm | f/5.5 |
| Touptek Hope D60 | 60 mm | 280 mm | f/4.7 |
| SVBony SV545 | 45 mm | 203 mm | f/4.5 |

## Camera Presets

| Name | Sensor (mm) | Pixel Size |
|---|---|---|
| Sony IMX294 (ASI294MC Pro) | 17.2 × 13.0 | 4.63 µm |
| Panasonic MN34230 (ASI1600MM) | 14.2 × 14.2 | 3.76 µm |
| Sony IMX571 (ASI2600) | 23.5 × 15.7 | 3.76 µm |
| Sony IMX585 (ASI585MC) | 11.2 × 6.3 | 2.9 µm |
| Sony IMX183 (ASI183MC) | 13.2 × 8.8 | 2.4 µm |
| Sony IMX178 (ASI178MC) | 7.4 × 5.0 | 2.4 µm |
| Sony IMX676 (ASI676MC) | 7.1 × 7.1 | 2.0 µm |
| Sony IMX715 (ASI715MC) | 5.6 × 3.2 | 1.45 µm |
| Canon EOS 5D Mark IV | 36.0 × 24.0 | 5.3 µm |

## Target Object Presets

| Object | Angular Size |
|---|---|
| M31 Andromeda Galaxy | 3.16° × 1.0° |
| M33 Triangulum Galaxy | 1.0° × 0.6° |
| M42 Orion Nebula | 1.1° × 1.0° |
| Moon | 0.517° × 0.517° |
| Sun | 0.53° × 0.53° |
| Jupiter | ~0.0013° (~4.7") |
| Saturn | ~0.0008° (~2.9") |
| Mars | ~0.0006° (~2.2") |

> **Note:** Planetary angular sizes represent near-minimum apparent sizes and do not adjust for current distance or opposition.

## How It Works

1. Select telescope and camera presets or enter custom values manually
2. Optionally set a corrector/Barlow factor (default 1.0; use values <1.0 for focal reducers, >1.0 for Barlow lenses)
3. Select a target object from the dropdown
4. Click the calculate button to compute results and render the FOV preview

All calculations run client-side in JavaScript. The effective focal length is `focal_length × corrector_factor`.

## Getting Started

1. Clone or download the repository
2. Open `AstroRechner.html` directly in any modern web browser (Chrome, Firefox, Safari, Edge)

No server, build tool, or internet connection required.
