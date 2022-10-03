export default exampleTaggunResponse = {
  data: {
    location: {
      city: { geoname_id: 2633749, names: [Object] },
      continent: { code: "EU", geoname_id: 6255148, names: [Object] },
      country: {
        geoname_id: 2635167,
        is_in_european_union: true,
        iso_code: "GB",
        names: [Object],
      },
      location: {
        accuracy_radius: 10,
        latitude: 51.8194,
        longitude: 0.6718,
        time_zone: "Europe/London",
      },
      postal: { code: "CM8" },
      registered_country: {
        geoname_id: 2635167,
        is_in_european_union: true,
        iso_code: "GB",
        names: [Object],
      },
      subdivisions: [[Object], [Object]],
    },
    totalAmount: {
      confidenceLevel: 0.821,
      index: 11,
      data: 29.25,
      text: "-FOOD 29.25 --",
      regions: [[Array]],
    },
    taxAmount: { confidenceLevel: 0 },
    confidenceLevel: 0.5399747367501259,
    date: { confidenceLevel: 0 },
    text: {
      text:
        "CHAPELBANK HOTEL\n" +
        "69 EAST HIGH STREET\n" +
        "FORFAR DD8 2EP\n" +
        "TEL NO 01307 463151\n" +
        "************\n" +
        "TABLE RESTAURANT\n" +
        "3x SOUP 3.95 11.85\n" +
        "Lunch Main\n" +
        "Lasagne (V) 6.95\n" +
        "MISC FOOD 6.95\n" +
        "2x CHIPS / ONION RINGS 1.75 3.50\n" +
        "-FOOD 29.25 --\n" +
        "Prev Bal: 29.25\n" +
        "SUBTOTAL 29.25",
      regions: [[Object], [Object], [Object], [Object]],
    },
    amounts: [
      {
        data: 3.95,
        index: 6,
        regions: [Array],
        text: "3x SOUP 3.95 11.85",
      },
      {
        data: 11.85,
        index: 6,
        regions: [Array],
        text: "3x SOUP 3.95 11.85",
      },
      {
        data: 6.95,
        index: 8,
        regions: [Array],
        text: "Lasagne (V) 6.95",
      },
      { data: 6.95, index: 9, regions: [Array], text: "MISC FOOD 6.95" },
      {
        data: 1.75,
        index: 10,
        regions: [Array],
        text: "2x CHIPS / ONION RINGS 1.75 3.50",
      },
      {
        data: 3.5,
        index: 10,
        regions: [Array],
        text: "2x CHIPS / ONION RINGS 1.75 3.50",
      },
      {
        data: 29.25,
        index: 11,
        regions: [Array],
        text: "-FOOD 29.25 --",
      },
      {
        data: 29.25,
        index: 12,
        regions: [Array],
        text: "Prev Bal  29.25",
      },
      {
        data: 29.25,
        index: 13,
        regions: [Array],
        text: "SUBTOTAL 29.25",
      },
    ],
    numbers: [
      {
        data: 69,
        text: "69 EAST HIGH STREET",
        regions: [Array],
        index: 1,
      },
    ],
    lineAmounts: [],
    itemsCount: { data: 4, confidenceLevel: 0.3064 },
    entities: {
      invoiceNumber: {
        data: "463151",
        text: " 463151",
        confidenceLevel: 0.51,
        keyword: "TEL NO 01307 463151",
      },
    },
    merchantName: {
      data: "CHAPELBANK HOTEL",
      confidenceLevel: 0.6473736837506294,
      text: "CHAPELBANK HOTEL",
      index: 0,
      regions: [[Array], [Array]],
    },
    merchantAddress: {
      data: "69 East High Street, Forfar, Angus, Scotland, DD8 2",
      confidenceLevel: 0.9815000000000002,
      text: "HOTEL\n69 EAST HIGH STREET\nFORFAR",
      index: 1,
      regions: [[Array], [Array], [Array], [Array]],
    },
    merchantCity: {
      data: "Forfar",
      confidenceLevel: 0.9815000000000002,
      text: "HOTEL\n69 EAST HIGH STREET\nFORFAR",
      index: 1,
      regions: [[Array], [Array], [Array], [Array]],
    },
    merchantState: {
      data: "Angus, Scotland",
      confidenceLevel: 0.9815000000000002,
      text: "HOTEL\n69 EAST HIGH STREET\nFORFAR",
      index: 1,
      regions: [[Array], [Array], [Array], [Array]],
    },
    merchantCountryCode: {
      data: "GB",
      confidenceLevel: 0.9815000000000002,
      text: "HOTEL\n69 EAST HIGH STREET\nFORFAR",
      index: 1,
      regions: [[Array], [Array], [Array], [Array]],
    },
    merchantTypes: { confidenceLevel: 0 },
    merchantPostalCode: {
      data: "DD8 2",
      confidenceLevel: 0.9815000000000002,
      text: "HOTEL\n69 EAST HIGH STREET\nFORFAR",
      index: 1,
      regions: [[Array], [Array], [Array], [Array]],
    },
    elapsed: 1286.7145824432373,
  },
};
