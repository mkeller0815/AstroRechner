const cameraData = [
    { name: "Canon EOS 5D Mark IV",    used_in: "",                                        sensorX: 36.0,  sensorY: 24.0, pixelSize: 5.3,  resolutionX: 6720, resolutionY: 4480, diagonal: 43.27, aspectRatio: "3:2"  },
    { name: "Panasonic MN34230",        used_in: "ASI1600MM",                               sensorX: 14.2,  sensorY: 14.2, pixelSize: 3.76, resolutionX: 4656, resolutionY: 3520, diagonal: 20.08, aspectRatio: "4:3"  },
    { name: "Sony IMX178",              used_in: "ASI178MC, Stellina",                      sensorX: 7.4,   sensorY: 5.0,  pixelSize: 2.4,  resolutionX: 3096, resolutionY: 2080, diagonal: 8.92,  aspectRatio: "3:2",  sensorId: "IMX178" },
    { name: "Sony IMX183",              used_in: "ASI183MC",                                sensorX: 13.2,  sensorY: 8.8,  pixelSize: 2.4,  resolutionX: 5496, resolutionY: 3672, diagonal: 15.87, aspectRatio: "3:2"  },
    { name: "Sony IMX224",              used_in: "eQuinox, eVscope",                        sensorX: 4.80,  sensorY: 3.60, pixelSize: 3.75, resolutionX: 1304, resolutionY:  976, diagonal: 6.00,  aspectRatio: "4:3",  sensorId: "IMX224" },
    { name: "Sony IMX294",              used_in: "ASI294MC Pro",                            sensorX: 17.2,  sensorY: 13.0, pixelSize: 4.63, resolutionX: 4144, resolutionY: 2822, diagonal: 21.50, aspectRatio: "4:3"  },
    { name: "Sony IMX347",              used_in: "eVscope 2",                               sensorX: 7.8,   sensorY: 4.4,  pixelSize: 2.9,  resolutionX: 2688, resolutionY: 1520, diagonal: 8.97,  aspectRatio: "16:9", sensorId: "IMX347" },
    { name: "Sony IMX415",              used_in: "Dwarf II",                                sensorX: 5.6,   sensorY: 3.2,  pixelSize: 1.45, resolutionX: 3864, resolutionY: 2176, diagonal: 6.47,  aspectRatio: "16:9", sensorId: "IMX415" },
    { name: "Sony IMX415 (cropped)",    used_in: "Odyssey Pro",                             sensorX: 3.40,  sensorY: 2.55, pixelSize: 1.45, resolutionX: 2344, resolutionY: 1758, diagonal: 4.25,  aspectRatio: "4:3",  sensorId: "IMX415-crop" },
    { name: "Sony IMX462",              used_in: "Vespera, Seestar S50",                    sensorX: 5.57,  sensorY: 3.13, pixelSize: 2.9,  resolutionX: 1936, resolutionY: 1096, diagonal: 6.39,  aspectRatio: "16:9", sensorId: "IMX462" },
    { name: "Sony IMX571",              used_in: "ASI2600",                                 sensorX: 23.5,  sensorY: 15.7, pixelSize: 3.76, resolutionX: 6248, resolutionY: 4176, diagonal: 28.25, aspectRatio: "3:2"  },
    { name: "Sony IMX585",              used_in: "ASI585MC, Vespera 2/3, S30 Pro",          sensorX: 11.14, sensorY: 6.27, pixelSize: 2.9,  resolutionX: 3856, resolutionY: 2180, diagonal: 12.78, aspectRatio: "16:9", sensorId: "IMX585" },
    { name: "Sony IMX662",              used_in: "Dwarf Mini, Seestar S30",                 sensorX: 5.76,  sensorY: 3.24, pixelSize: 2.9,  resolutionX: 1936, resolutionY: 1100, diagonal: 6.64,  aspectRatio: "16:9", sensorId: "IMX662" },
    { name: "Sony IMX676",              used_in: "ASI676MC, Vespera Pro",                   sensorX: 7.0,   sensorY: 7.0,  pixelSize: 2.0,  resolutionX: 3552, resolutionY: 3552, diagonal: 9.90,  aspectRatio: "1:1",  sensorId: "IMX676" },
    { name: "Sony IMX678",              used_in: "Origin MK2, Dwarf III",                   sensorX: 7.7,   sensorY: 4.3,  pixelSize: 2.0,  resolutionX: 3840, resolutionY: 2160, diagonal: 8.81,  aspectRatio: "16:9", sensorId: "IMX678" },
    { name: "Sony IMX715",              used_in: "ASI715MC",                                sensorX: 5.6,   sensorY: 3.2,  pixelSize: 1.45, resolutionX: 3864, resolutionY: 2176, diagonal: 6.47,  aspectRatio: "16:9" },
];

// Lookup map for smart telescope sensor resolution
const sensorById = {};
cameraData.forEach(c => { if (c.sensorId) sensorById[c.sensorId] = c; });
