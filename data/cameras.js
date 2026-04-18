const cameraData = [
    { name: "Canon EOS 5D Mark IV",              sensorX: 36.0,  sensorY: 24.0, pixelSize: 5.3  },
    { name: "Panasonic MN34230 (ASI1600MM)",      sensorX: 14.2,  sensorY: 14.2, pixelSize: 3.76 },
    { name: "Sony IMX178 (ASI178MC, Stellina)",   sensorX: 7.4,   sensorY: 5.0,  pixelSize: 2.4,  sensorId: "IMX178" },
    { name: "Sony IMX183 (ASI183MC)",             sensorX: 13.2,  sensorY: 8.8,  pixelSize: 2.4  },
    { name: "Sony IMX224 (eQuinox, eVscope)",     sensorX: 4.80,  sensorY: 3.60, pixelSize: 3.75, sensorId: "IMX224" },
    { name: "Sony IMX294 (ASI294MC Pro)",         sensorX: 17.2,  sensorY: 13.0, pixelSize: 4.63 },
    { name: "Sony IMX347 (eVscope 2)",            sensorX: 7.8,   sensorY: 4.4,  pixelSize: 2.9,  sensorId: "IMX347" },
    { name: "Sony IMX415 (ASI715MC, Odyssey Pro)",sensorX: 5.6,   sensorY: 3.2,  pixelSize: 1.45, sensorId: "IMX415" },
    { name: "Sony IMX462 (Vespera, Seestar S50)", sensorX: 5.57,  sensorY: 3.13, pixelSize: 2.9,  sensorId: "IMX462" },
    { name: "Sony IMX571 (ASI2600)",              sensorX: 23.5,  sensorY: 15.7, pixelSize: 3.76 },
    { name: "Sony IMX585 (ASI585MC, Vespera 2/3, S30 Pro)", sensorX: 11.14, sensorY: 6.27, pixelSize: 2.9, sensorId: "IMX585" },
    { name: "Sony IMX662 (Dwarf Mini, Seestar S30)", sensorX: 5.76, sensorY: 3.24, pixelSize: 2.9, sensorId: "IMX662" },
    { name: "Sony IMX676 (ASI676MC, Vespera Pro)",sensorX: 7.0,   sensorY: 7.0,  pixelSize: 2.0,  sensorId: "IMX676" },
    { name: "Sony IMX678 (Origin MK2, Dwarf III)",sensorX: 7.7,   sensorY: 4.3,  pixelSize: 2.0,  sensorId: "IMX678" },
    { name: "Sony IMX715 (ASI715MC)",             sensorX: 5.6,   sensorY: 3.2,  pixelSize: 1.45 },
];

// Lookup map for smart telescope sensor resolution
const sensorById = {};
cameraData.forEach(c => { if (c.sensorId) sensorById[c.sensorId] = c; });
