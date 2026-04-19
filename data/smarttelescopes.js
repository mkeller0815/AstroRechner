// Smart telescopes with integrated sensors, grouped by vendor.
// sensor field references a sensorId from cameras.js (resolved at runtime via sensorById).
// orientation: "landscape" (default) or "portrait" — affects FOV dimension order in calculations.
const smartTelescopeData = [
    { name: "Origin MK 1",    vendor: "Celestron",  aperture: 152, focalLength: 335, sensor: "IMX178", orientation: "landscape" },
    { name: "Origin MK 2",    vendor: "Celestron",  aperture: 152, focalLength: 335, sensor: "IMX678", orientation: "landscape" },
    { name: "Dwarf III",      vendor: "Dwarf Lab",  aperture: 35,  focalLength: 150, sensor: "IMX678", orientation: "landscape" },
    { name: "Dwarf Mini",     vendor: "Dwarf Lab",  aperture: 30,  focalLength: 150, sensor: "IMX662", orientation: "landscape" },
    { name: "eQuinox",        vendor: "Unistellar", aperture: 114, focalLength: 450, sensor: "IMX224", orientation: "landscape" },
    { name: "eVscope",        vendor: "Unistellar", aperture: 112, focalLength: 450, sensor: "IMX224", orientation: "landscape" },
    { name: "eVscope 2",      vendor: "Unistellar", aperture: 114, focalLength: 450, sensor: "IMX347", orientation: "landscape" },
    { name: "Odyssey Pro",    vendor: "Unistellar", aperture: 85,  focalLength: 320, sensor: "IMX415", orientation: "landscape" },
    { name: "Stellina",       vendor: "Vaonis",     aperture: 80,  focalLength: 400, sensor: "IMX178", orientation: "landscape" },
    { name: "Vespera",        vendor: "Vaonis",     aperture: 50,  focalLength: 200, sensor: "IMX462", orientation: "landscape" },
    { name: "Vespera 2",      vendor: "Vaonis",     aperture: 50,  focalLength: 250, sensor: "IMX585", orientation: "landscape" },
    { name: "Vespera 3",      vendor: "Vaonis",     aperture: 50,  focalLength: 245, sensor: "IMX585", orientation: "landscape" },
    { name: "Vespera Pro",    vendor: "Vaonis",     aperture: 50,  focalLength: 250, sensor: "IMX676", orientation: "landscape" },
    { name: "Vespera Pro 2",  vendor: "Vaonis",     aperture: 50,  focalLength: 245, sensor: "IMX676", orientation: "landscape" },
    { name: "Seestar S30",    vendor: "ZWO",        aperture: 30,  focalLength: 150, sensor: "IMX662", orientation: "portrait" },
    { name: "Seestar S30 Pro",vendor: "ZWO",        aperture: 30,  focalLength: 160, sensor: "IMX585", orientation: "portrait" },
    { name: "Seestar S50",    vendor: "ZWO",        aperture: 50,  focalLength: 250, sensor: "IMX462", orientation: "portrait" },
];
