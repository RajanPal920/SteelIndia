// src/data/productMaterials/buttweldFitting.js

// ============================================
// IMAGE IMPORTS
// ============================================
import carbon from "../../../public/images/stock/carbon-steel-butt-weld-fittings.jpg";
import hast from "../../../public/images/stock/Hastelloy-Buttweld-Fittings.jpg";
import nic from "../../../public/images/stock/Nickel-Copper-Alloy-Buttweld-Fittings.jpg";
import nickelAlloy from "../../../public/images/stock/nickel-alloy-buttweld-fittings.jpg";
import duplex from "../../../public/images/stock/duplex-steel-buttweld-fittings.jpg";
import titani from "../../../public/images/stock/titanium-buttweld-fittings.jpg";
import alloySteel from "../../../public/images/stock/alloy-steel-buttweld-fittings.jpg";
import brass from "../../../public/images/stock/brass-butt-weld-fittings.jpg";
import alloy from "../../../public/images/stock/alloy-20-buttweld-fittings.jpg";
import buttweldImg from "../../../public/images/stock/buttweld-fitting.jpg";

// ============================================
// BUTTWELD FITTINGS — 9 Products (One Per Material Group)
// ============================================
const buttweldFitting = [
  // ============================================
  // 1. STAINLESS STEEL BUTTWELD FITTINGS
  // ============================================
  {
    id: 1,
    slug: "stainless-steel-buttweld-fittings-manufacturer-in-mumbai",
    oldSlug: "stainless-steel-buttweld-fittings",
    image: duplex,
    title: "Stainless Steel Buttweld Fittings",
    shortDescription:
      "304, 316L, 321, 310S, 347, 904L Seamless & Welded Elbows, Tees, Reducers for Critical Service.",
    materialGroup: "Stainless Steel",
    standards: "ASTM A403, ASTM A815, ASME B16.9, ASME B16.28, MSS SP-43",

    overview:
      "Complete range of stainless steel butt weld fittings conforming to ASTM A403 and ASME B16.9 standards. Manufactured from premium SS 304, 316, 316L, 321, 347, and 904L grades with full material traceability and intergranular corrosion resistance — engineered for chemical processing, power generation, and oil & gas facilities.",

    grades: [
      "SS 304",
      "SS 304L",
      "SS 316",
      "SS 316L",
      "SS 321",
      "SS 310S",
      "SS 347",
      "SS 904L",
    ],

    supplyForms: [
      "90° / 45° Long Radius Elbows",
      "Equal / Reducing Tees",
      "Concentric / Eccentric Reducers",
      "End Caps",
      "Stub Ends",
      "Return Bends",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM A403, ASME B16.9, ASME B16.28, MSS SP-43",
      nominalSize: '1/2" NB to 48" NB',
      wallThickness: "Sch 5S to Sch XXS",
      manufacturingMethods: "Seamless, Welded, Cold Formed, Hot Formed",
      surfaceFinish: "Pickled, Passivated, Sand Blasted, Mirror Polished",
      endConnections: "Butt Weld Ends (Beveled)",
      qualityTesting: "Radiography, PMI, Hydrostatic, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM A403 / A403M — Wrought Austenitic Stainless Steel Piping Fittings",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "ASME B16.28 — Wrought Steel Buttwelding Short Radius Elbows and Returns",
      "MSS SP-43 — Wrought and Fabricated Butt-Welding Fittings for Low Pressure",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Seamless / Welded Cold Formed",
    pressureRating: "Per ASME B16.9 / ASME B31.3",
    tolerance: "Per ASME B16.9",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Chemical, petrochemical, and pharmaceutical process piping",
      "Offshore oil and gas platforms and subsea flowlines",
      "Power generation and desalination plant piping",
      "Food, beverage, and dairy sanitary systems",
      "Refinery and hydrocarbon processing",
      "High-purity semiconductor and cryogenic systems",
    ],

    forms: "Elbows, Tees, Reducers, Caps, Stub Ends",
    application:
      "Chemical processing, oil & gas, power generation, pharmaceutical",
  },

  // ============================================
  // 2. CARBON STEEL BUTTWELD FITTINGS
  // ============================================
  {
    id: 2,
    slug: "carbon-steel-buttweld-fittings-manufacturer-in-mumbai",
    oldSlug: "carbon-steel-buttweld-fittings",
    image: carbon,
    title: "Carbon Steel Buttweld Fittings",
    shortDescription:
      "ASTM A106 Gr B, A105, A333 Low Temp Carbon Steel Seamless Fittings for High-Pressure Service.",
    materialGroup: "Carbon",
    standards:
      "ASTM A234, ASTM A420, ASTM A106, ASTM A105, ASTM A333, ASME B16.9",

    overview:
      "Heavy-duty carbon steel butt weld fittings engineered for high-pressure, high-temperature, and low-temperature piping systems. Manufactured to ASTM A234, A420, A106, A105, and A333 standards, our fittings deliver superior strength and reliability in refineries, power plants, oil & gas pipelines, and heavy engineering applications.",

    grades: [
      "ASTM A106 Gr B",
      "ASTM A105",
      "ASTM A333 Gr 6",
      "ASTM A234 WPB",
      "ASTM A420 WPL6",
    ],

    supplyForms: [
      "90° / 45° Long Radius Elbows",
      "Equal / Reducing Tees",
      "Concentric / Eccentric Reducers",
      "End Caps",
      "Stub Ends",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A234, ASTM A420, ASME B16.9, ASME B16.28, MSS SP-75",
      nominalSize: '1/2" NB to 48" NB',
      wallThickness: "Sch 10 to Sch XXS",
      manufacturingMethods: "Seamless, Welded, Cold Formed, Hot Formed",
      surfaceFinish: "Black, Varnished, Galvanized",
      endConnections: "Butt Weld Ends (Beveled)",
      qualityTesting: "Radiography, Hydrostatic, Ultrasonic, PMI",
    },

    standardsCompliance: [
      "ASTM A234 — Piping Fittings of Wrought Carbon Steel and Alloy Steel",
      "ASTM A420 — Piping Fittings for Low-Temperature Service",
      "ASTM A106 — Seamless Carbon Steel Pipe for High-Temperature Service",
      "ASTM A105 — Carbon Steel Forgings for Piping Applications",
      "ASTM A333 — Seamless and Welded Steel Pipe for Low-Temperature Service",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "MSS SP-75 — High-Test Wrought Butt-Welding Fittings",
    ],

    manufacturingType: "Seamless / Welded Cold Formed",
    pressureRating: "Per ASME B16.9 / ASME B31.3",
    tolerance: "Per ASME B16.9",
    certifications: "EN 10204 3.1 MTC, NACE MR0175 compliant",

    industryApplications: [
      "High-pressure oil and gas transmission pipelines",
      "Refinery and petrochemical process piping",
      "Steam generation and power plants",
      "Low-temperature and cryogenic service",
      "Heavy engineering and industrial infrastructure",
      "Water and gas distribution systems",
    ],

    forms: "Elbows, Tees, Reducers, Caps, Stub Ends",
    application:
      "High-pressure piping systems, refineries, power plants, heavy engineering",
  },

  // ============================================
  // 3. ALLOY STEEL BUTTWELD FITTINGS
  // ============================================
  {
    id: 3,
    slug: "alloy-steel-buttweld-fittings-manufacturer-in-mumbai",
    oldSlug: "alloy-steel-buttweld-fittings",
    image: alloySteel,
    title: "Alloy Steel Buttweld Fittings",
    shortDescription:
      "ASTM A335 P5, P9, P11, P22, P91 Chrome-Moly High-Temperature Forged Fittings for Steam Lines.",
    materialGroup: "Alloy Steel",
    standards: "ASTM A234, ASTM A335, ASME B16.9, ASME B16.28, ASME B31.1",

    overview:
      "Chromium-molybdenum creep-resistant alloy steel butt weld fittings engineered for supercritical boilers, heat recovery steam generators, and extreme-temperature steam lines. Manufactured to ASTM A335 and A234 standards, our fittings deliver reliable performance at temperatures up to 650°C.",

    grades: [
      "ASTM A335 P5",
      "ASTM A335 P9",
      "ASTM A335 P11",
      "ASTM A335 P22",
      "ASTM A335 P91",
      "ASTM A335 P92",
    ],

    supplyForms: [
      "90° / 45° Long Radius Elbows",
      "Equal / Reducing Tees",
      "Concentric / Eccentric Reducers",
      "End Caps",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM A234, ASTM A335, ASME B16.9, ASME B16.28",
      nominalSize: '1/2" NB to 36" NB',
      wallThickness: "Sch 10 to Sch XXS",
      manufacturingMethods: "Seamless, Hot Formed, Cold Formed",
      surfaceFinish: "Hot Finished, Pickled, Annealed",
      endConnections: "Butt Weld Ends (Beveled)",
      qualityTesting: "Radiography, Hydrostatic, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM A335 — Seamless Ferritic Alloy-Steel Pipe for High-Temperature Service",
      "ASTM A234 — Piping Fittings of Wrought Carbon Steel and Alloy Steel",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "ASME B16.28 — Wrought Steel Buttwelding Short Radius Elbows and Returns",
      "ASME B31.1 — Power Piping Code",
    ],

    manufacturingType: "Seamless Hot Formed / Cold Formed",
    pressureRating: "Per ASME B31.1",
    tolerance: "Per ASME B16.9",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Supercritical boiler tubes",
      "Heat recovery steam generators (HRSG)",
      "Refinery hydrotreaters and hydrocrackers",
      "Power plant steam lines",
      "Petrochemical process piping",
      "High-temperature chemical reactors",
    ],

    forms: "Elbows, Tees, Reducers, Caps",
    application:
      "Superheater steam lines, power plants, refinery hydrotreaters",
  },

  // ============================================
  // 4. DUPLEX STEEL BUTTWELD FITTINGS
  // ============================================
  {
    id: 4,
    slug: "duplex-steel-buttweld-fittings-manufacturer-in-mumbai",
    oldSlug: "duplex-steel-buttweld-fittings",
    image: duplex,
    title: "Duplex Steel Buttweld Fittings",
    shortDescription:
      "UNS S31803 (2205), UNS S32205 Duplex Steel Seamless Elbows, Tees & Reducers for Chloride-Rich Service.",
    materialGroup: "Duplex",
    standards: "ASTM A815, ASME B16.9, ASME B16.28",

    overview:
      "High-strength dual-phase austenitic-ferritic stainless steel butt weld fittings providing exceptional resistance to chloride stress corrosion cracking. Manufactured to ASTM A815 standards, our fittings deliver superior strength and corrosion resistance for offshore oil & gas, chemical tankers, and desalination applications.",

    grades: ["UNS S31803", "UNS S32205", "2205", "LDX 2101"],

    supplyForms: [
      "90° / 45° Long Radius Elbows",
      "Equal / Reducing Tees",
      "Concentric / Eccentric Reducers",
      "End Caps",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM A815, ASME B16.9, ASME B16.28",
      nominalSize: '1/2" NB to 24" NB',
      wallThickness: "Sch 10S to Sch XXS",
      manufacturingMethods: "Seamless, Cold Formed, Hot Formed",
      surfaceFinish: "Solution Annealed, Pickled",
      endConnections: "Butt Weld Ends (Beveled)",
      qualityTesting: "Radiography, PMI, Hydrostatic",
    },

    standardsCompliance: [
      "ASTM A815 — Wrought Ferritic, Ferritic/Austenitic Stainless Steel Piping Fittings",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "ASME B16.28 — Wrought Steel Buttwelding Short Radius Elbows and Returns",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Seamless Cold Formed",
    pressureRating: "Per ASME B31.3",
    tolerance: "Per ASME B16.9",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Offshore oil and gas platforms",
      "Subsea flowlines and risers",
      "Desalination plants and seawater systems",
      "Chemical cargo tankers",
      "Pulp and paper digesters",
      "Pollution control scrubbers",
    ],

    forms: "Elbows, Tees, Reducers, Caps",
    application:
      "Offshore platforms, desalination, chemical processing, marine",
  },

  // ============================================
  // 5. SUPER DUPLEX BUTTWELD FITTINGS
  // ============================================
  {
    id: 5,
    slug: "super-duplex-buttweld-fittings-manufacturer-in-mumbai",
    oldSlug: "super-duplex-buttweld-fittings",
    image: duplex,
    title: "Super Duplex Buttweld Fittings",
    shortDescription:
      "UNS S32750 (2507), UNS S32760 Super Duplex Seamless Fittings for Subsea Oilfields & Seawater Systems.",
    materialGroup: "Super Duplex",
    standards: "ASTM A815, ASME B16.9, ASME B16.28",

    overview:
      "Ultra-high performance super duplex butt weld fittings designed for aggressive subsea oilfields, critical seawater loops, and chemical plant service. Manufactured to ASTM A815 standards, our fittings offer superior strength and corrosion resistance in the most demanding environments.",

    grades: ["UNS S32750", "UNS S32760", "2507", "Zeron 100"],

    supplyForms: [
      "90° / 45° Long Radius Elbows",
      "Equal / Reducing Tees",
      "Concentric / Eccentric Reducers",
      "End Caps",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM A815, ASME B16.9, ASME B16.28",
      nominalSize: '1/2" NB to 16" NB',
      wallThickness: "Sch 10S to Sch XXS",
      manufacturingMethods: "Seamless Cold Formed",
      surfaceFinish: "Solution Annealed, Pickled",
      endConnections: "Butt Weld Ends (Beveled)",
      qualityTesting: "Radiography, PMI, Hydrostatic",
    },

    standardsCompliance: [
      "ASTM A815 — Wrought Ferritic, Ferritic/Austenitic Stainless Steel Piping Fittings",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "ASME B16.28 — Wrought Steel Buttwelding Short Radius Elbows and Returns",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Seamless Cold Formed",
    pressureRating: "Per ASME B31.3",
    tolerance: "Per ASME B16.9",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Subsea oilfields and deepwater equipment",
      "Seawater handling and desalination systems",
      "Chemical plant service and reactors",
      "Marine engineering and shipbuilding",
      "Offshore platforms and risers",
      "Pollution control scrubbers",
    ],

    forms: "Elbows, Tees, Reducers, Caps",
    application: "Subsea oilfields, seawater systems, chemical processing",
  },

  // ============================================
  // 6. NICKEL ALLOY BUTTWELD FITTINGS
  // ============================================
  {
    id: 6,
    slug: "nickel-alloy-buttweld-fittings-manufacturer-in-mumbai",
    oldSlug: "nickel-alloy-buttweld-fittings",
    image: nickelAlloy,
    title: "Nickel Alloy Buttweld Fittings",
    shortDescription:
      "Nickel 200/201, Monel 400, Inconel 600/625/718, Incoloy 800/825 Seamless Fittings for Extreme Corrosion.",
    materialGroup: "Nickel",
    standards: "ASTM B366, ASME B16.9, ASME B16.28, MSS SP-43",

    overview:
      "Premium nickel alloy butt weld fittings engineered for extreme temperature, pressure, and corrosive environments. Manufactured to ASTM B366 standards, our fittings deliver exceptional oxidation resistance, high-temperature strength, and superior resistance to acids, alkalis, and seawater.",

    grades: [
      "Nickel 200",
      "Nickel 201",
      "Monel 400",
      "Monel K500",
      "Inconel 600",
      "Inconel 601",
      "Inconel 625",
      "Inconel 718",
      "Inconel X-750",
      "Incoloy 800",
      "Incoloy 800H",
      "Incoloy 825",
    ],

    supplyForms: [
      "90° / 45° Long Radius Elbows",
      "Equal / Reducing Tees",
      "Concentric / Eccentric Reducers",
      "End Caps",
      "Stub Ends",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B366, ASME B16.9, ASME B16.28, MSS SP-43",
      nominalSize: '1/2" NB to 24" NB',
      wallThickness: "Sch 10S to Sch XXS",
      manufacturingMethods: "Seamless, Cold Formed, Hot Formed",
      surfaceFinish: "Solution Annealed, Pickled",
      endConnections: "Butt Weld Ends (Beveled)",
      qualityTesting: "Radiography, PMI, Hydrostatic, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM B366 — Factory-Made Wrought Nickel and Nickel Alloy Fittings",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "ASME B16.28 — Wrought Steel Buttwelding Short Radius Elbows and Returns",
      "MSS SP-43 — Wrought and Fabricated Butt-Welding Fittings for Low Pressure",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Seamless Cold Formed / Hot Formed",
    pressureRating: "Per ASME B31.3",
    tolerance: "Per ASME B16.9",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Chemical processing and acid handling systems",
      "Aerospace and turbine engine components",
      "Nuclear power generation and heat exchangers",
      "Offshore oil & gas and subsea systems",
      "Marine engineering and desalination plants",
      "Heat treatment furnaces and industrial equipment",
    ],

    forms: "Elbows, Tees, Reducers, Caps, Stub Ends",
    application: "Chemical, aerospace, nuclear, offshore, marine industries",
  },

  // ============================================
  // 7. HIGH ALLOYS BUTTWELD FITTINGS
  // ============================================
  {
    id: 7,
    slug: "high-alloys-buttweld-fittings-manufacturer-in-mumbai",
    oldSlug: "high-alloys-buttweld-fittings",
    image: hast,
    title: "High Alloys Buttweld Fittings",
    shortDescription:
      "Hastelloy C22, C276, Alloy 20, SMO 254 Seamless Fittings for Extreme Corrosive & Acid Handling Systems.",
    materialGroup: "High Alloys",
    standards: "ASTM B366, ASTM B462, ASME B16.9, ASME B16.28",

    overview:
      "Specialized high-alloy butt weld fittings engineered for wet chlorine, sulfuric acid, phosphoric acid, and aggressive halide services. Manufactured from Hastelloy C22, C276, Alloy 20, and SMO 254 grades, our fittings deliver exceptional performance in the most demanding corrosive environments across chemical processing, pollution control, and pharmaceutical industries.",

    grades: [
      "Hastelloy C22",
      "Hastelloy C276",
      "Hastelloy C2000",
      "Alloy 20",
      "Alloy 28",
      "SMO 254",
      "Alloy 59",
    ],

    supplyForms: [
      "90° / 45° Long Radius Elbows",
      "Equal / Reducing Tees",
      "Concentric / Eccentric Reducers",
      "End Caps",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B366, ASTM B462, ASME B16.9, ASME B16.28",
      nominalSize: '1/2" NB to 16" NB',
      wallThickness: "Sch 10S to Sch XXS",
      manufacturingMethods: "Seamless, Cold Formed",
      surfaceFinish: "Solution Annealed, Pickled",
      endConnections: "Butt Weld Ends (Beveled)",
      qualityTesting: "Radiography, PMI, Hydrostatic",
    },

    standardsCompliance: [
      "ASTM B366 — Factory-Made Wrought Nickel and Nickel Alloy Fittings",
      "ASTM B462 — Wrought Nickel and Nickel Alloy Fittings",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "ASME B16.28 — Wrought Steel Buttwelding Short Radius Elbows and Returns",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Seamless Cold Formed",
    pressureRating: "Per ASME B31.3",
    tolerance: "Per ASME B16.9",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Wet chlorine and acid handling systems",
      "Phosphoric and sulfuric acid production",
      "Flue gas desulfurization (FGD) scrubbers",
      "Chemical reactors and process vessels",
      "Pharmaceutical and agrochemical processing",
      "Pollution control equipment",
    ],

    forms: "Elbows, Tees, Reducers, Caps",
    application: "Wet chlorine, acid handling, aggressive chemical processes",
  },

  // ============================================
  // 8. TITANIUM BUTTWELD FITTINGS
  // ============================================
  {
    id: 8,
    slug: "titanium-buttweld-fittings-manufacturer-in-mumbai",
    oldSlug: "titanium-buttweld-fittings",
    image: titani,
    title: "Titanium Buttweld Fittings",
    shortDescription:
      "ASTM B363 WP Gr. 1, Gr. 2, Gr. 5 (Ti-6Al-4V), Gr. 7 High Strength-to-Weight Cryogenic Pipeline Fittings.",
    materialGroup: "Titanium",
    standards: "ASTM B363, ASME B16.9, ASME B16.28",

    overview:
      "Ultra-lightweight, high-strength titanium butt weld fittings with impervious corrosion immunity against seawater, wet chlorine, and organic chlorides. Manufactured to ASTM B363 standards, our fittings deliver exceptional performance in aerospace, marine, and chemical processing applications.",

    grades: [
      "Grade 1",
      "Grade 2",
      "Grade 5 (Ti-6Al-4V)",
      "Grade 7",
      "Grade 12",
    ],

    supplyForms: [
      "90° / 45° Long Radius Elbows",
      "Equal / Reducing Tees",
      "Concentric / Eccentric Reducers",
      "End Caps",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B363, ASME B16.9, ASME B16.28",
      nominalSize: '1/2" NB to 24" NB',
      wallThickness: "Sch 10S to Sch XXS",
      manufacturingMethods: "Seamless, Cold Formed",
      surfaceFinish: "Pickled, Passivated, Bright Annealed",
      endConnections: "Butt Weld Ends (Beveled)",
      qualityTesting: "Radiography, PMI, Hydrostatic",
    },

    standardsCompliance: [
      "ASTM B363 — Wrought Titanium and Titanium Alloy Fittings",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "ASME B16.28 — Wrought Steel Buttwelding Short Radius Elbows and Returns",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Seamless Cold Formed",
    pressureRating: "Per ASME B31.3",
    tolerance: "Per ASME B16.9",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Aerospace and aircraft components",
      "Marine and offshore seawater systems",
      "Chemical processing and chlor-alkali plants",
      "Desalination plants",
      "Medical implants and equipment",
      "Cryogenic piping systems",
    ],

    forms: "Elbows, Tees, Reducers, Caps",
    application: "Aerospace, marine, chemical processing, cryogenic",
  },

  // ============================================
  // 9. ALLOYS BUTTWELD FITTINGS
  // ============================================
  {
    id: 9,
    slug: "alloys-buttweld-fittings-manufacturer-in-mumbai",
    oldSlug: "alloys-buttweld-fittings",
    image: alloy,
    title: "Alloys Buttweld Fittings",
    shortDescription:
      "Zirconium 702, Tantalum, Copper-Nickel 70/30 & 90/10 Specialty Alloy Fittings for Ultra-Corrosive Service.",
    materialGroup: "Alloys",
    standards: "ASTM B523, B521, B466, B467, B658, ASME B16.9",

    overview:
      "Specialty alloy butt weld fittings including zirconium, tantalum, and copper-nickel grades engineered for ultra-corrosive chemical processing, nuclear, and marine applications. Manufactured to ASTM B523, B521, B466, B467, and B658 standards, our fittings deliver exceptional performance in the most demanding environments.",

    grades: [
      "Zirconium 702",
      "Tantalum",
      "Copper-Nickel 70/30",
      "Copper-Nickel 90/10",
    ],

    supplyForms: [
      "90° / 45° Long Radius Elbows",
      "Equal / Reducing Tees",
      "Concentric / Eccentric Reducers",
      "End Caps",
      "Stub Ends",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B523, B521, B466, B467, B658, ASME B16.9",
      nominalSize: '1/2" NB to 12" NB',
      wallThickness: "Sch 10S to Sch XXS",
      manufacturingMethods: "Seamless, Cold Formed",
      surfaceFinish: "Pickled, Annealed",
      endConnections: "Butt Weld Ends (Beveled)",
      qualityTesting: "Radiography, PMI, Hydrostatic",
    },

    standardsCompliance: [
      "ASTM B523 — Seamless and Welded Zirconium and Zirconium Alloy Tubes",
      "ASTM B521 — Tantalum and Tantalum Alloy Seamless and Welded Tubes",
      "ASTM B466 — Seamless Copper-Nickel Pipe and Tube",
      "ASTM B467 — Welded Copper-Nickel Pipe",
      "ASTM B658 — Zirconium and Zirconium Alloy Seamless and Welded Pipe",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
    ],

    manufacturingType: "Seamless Cold Formed",
    pressureRating: "Per ASME B31.3",
    tolerance: "Per ASME B16.9",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Chemical processing and acid handling",
      "Nuclear power generation",
      "Marine engineering and shipbuilding",
      "Desalination and heat exchangers",
      "Pharmaceutical and food processing",
      "Pollution control equipment",
    ],

    forms: "Elbows, Tees, Reducers, Caps, Stub Ends",
    application: "Chemical processing, nuclear, marine, desalination",
  },

  // ============================================
  // 10. COPPER NICKEL BUTTWELD FITTINGS
  // ============================================
  {
    id: 10,
    slug: "copper-nickel-buttweld-fittings-manufacturer-in-mumbai",
    oldSlug: "copper-nickel-buttweld-fittings",
    image: nic,
    title: "Copper Nickel Buttweld Fittings",
    shortDescription:
      "CuNi 90/10 (C70600) & CuNi 70/30 (C71500) Marine Anti-Biofouling Seamless Butt Weld Elbows, Tees & Reducers.",
    materialGroup: "Copper Nickel",
    standards: "ASTM B466, ASTM B467, ASME B16.9, DIN 86019, EEMUA 146",

    overview:
      "Precision marine-grade copper-nickel butt weld fittings manufactured per ASTM B466, ASME B16.9, and DIN 86019 in 90/10 (C70600) and 70/30 (C71500) alloys. Engineered for continuous marine seawater piping, offshore ballast lines, and coastal condenser cooling with natural anti-biofouling performance.",

    grades: [
      "CuNi 90/10 (UNS C70600)",
      "CuNi 70/30 (UNS C71500)",
      "DIN 2.0872 (CuNi10Fe1Mn)",
      "DIN 2.0882 (CuNi30Mn1Fe)",
      "EEMUA 146",
    ],

    supplyForms: [
      "90° / 45° Long Radius Elbows",
      "Equal / Reducing Tees",
      "Concentric / Eccentric Reducers",
      "End Caps & Saddle Outlets",
      "Type A / Type B Composite Stub Ends",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B466, ASTM B467, ASME B16.9, DIN 86019, EEMUA 146",
      nominalSize: '1/2" NB to 16" NB (DN15 to DN400)',
      wallThickness: "1.0 mm to 10.0 mm / DIN Series 1 & 2 / Sch 10 to Sch 80",
      manufacturingMethods: "Cold Formed Seamless, Annealed & Pickled",
      surfaceFinish: "Natural Pickled, Bright Cleaned",
      endConnections: "Beveled Ends ANSI B16.25",
      qualityTesting: "PMI, Tensile, Hydrostatic, Eddy Current, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B466 — Seamless Copper-Nickel Pipe and Tube",
      "EEMUA 146 — 90/10 Copper Nickel Buttweld Pipe Fittings",
      "DIN 86019 — Copper-Nickel Alloy Pipes for Shipbuilding",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
    ],

    manufacturingType: "Cold Formed Seamless / Hydroformed",
    pressureRating: "Per ASME B31.3 / EEMUA 146",
    tolerance: "Per ASME B16.9 / DIN 86019",
    certifications: "EN 10204 3.1 MTC, Marine Class Approval (DNV, LR, BV)",

    industryApplications: [
      "Naval surface combatants and submarine seawater cooling",
      "Offshore oil platform firewater deluge manifolds",
      "Commercial cargo ship bilge, ballast and sanitary lines",
      "Desalination plant seawater brine recirculation",
    ],

    forms: "Elbows, Tees, Reducers, Caps, Stub Ends",
    application: "Shipbuilding, Offshore Platforms & Desalination Seawater Piping",
  },

  // ============================================
  // 11. BRASS BUTTWELD FITTINGS
  // ============================================
  {
    id: 11,
    slug: "brass-buttweld-fittings-manufacturer-in-mumbai",
    oldSlug: "brass-buttweld-fittings",
    image: brass,
    title: "Brass Buttweld Fittings",
    shortDescription:
      "Naval Brass (C46400), Cartridge (C26000), Free Cutting (C36000) High-Machinability & Spark-Resistant Butt Weld Fittings.",
    materialGroup: "Brass",
    standards: "ASTM B21, ASTM B135, ASTM B43, ASME B16.9, IS 319, BS 2874",

    overview:
      "High-precision wrought and forged brass butt weld fittings manufactured to ASTM B21 and ASME B16.9 standards. Produced from Naval Brass C46400, C26000, and C36000 providing low friction, spark resistance, and excellent corrosion resistance in plumbing, marine, and instrumentation applications.",

    grades: [
      "Naval Brass (UNS C46400 / IS 291)",
      "Cartridge Brass (UNS C26000)",
      "Free Cutting Brass (UNS C36000 / IS 319)",
      "High Tensile Brass (Manganese Bronze C67500)",
      "Admiralty Brass (UNS C44300)",
    ],

    supplyForms: [
      "90° / 45° Long Radius Elbows",
      "Equal / Reducing Tees",
      "Concentric Reducers",
      "End Caps",
      "Couplings & Bushings",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B21, ASTM B135, ASME B16.9, IS 319",
      nominalSize: '1/4" NB to 6" NB (DN8 to DN150)',
      wallThickness: "Sch 10, Sch 40, Sch 80",
      manufacturingMethods: "Hot Forged & Cold Formed, CNC Precision Finished",
      surfaceFinish: "Smooth Machine Turned, Pickled Golden Finish",
      endConnections: "Butt Weld Beveled / Square Cut",
      qualityTesting: "PMI, Tensile, Hardness, Pneumatic 6 Bar, Hydrostatic",
    },

    standardsCompliance: [
      "ASTM B21 — Naval Brass Rod, Bar, and Shapes",
      "ASTM B135 — Seamless Brass Tube",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "IS 319 — Free Cutting Brass Specifications",
    ],

    manufacturingType: "Forged / Seamless Extruded & Machined",
    pressureRating: "Class 150 to Class 300 / 300 WOG",
    tolerance: "Per ASME B16.9",
    certifications: "EN 10204 3.1 MTC, ATEX Non-Sparking Certified",

    industryApplications: [
      "Marine engine cooling and yacht plumbing systems",
      "Non-sparking industrial fuel and solvent lines",
      "Instrumentation sensor lines and pneumatic tubing",
      "Commercial HVAC hydronic heating and cooling",
    ],

    forms: "Elbows, Tees, Reducers, Caps",
    application: "Marine Plumbing, HVAC, Pneumatic & Non-Sparking Lines",
  },
  // ============================================
  // 12. ALUMINIUM BUTTWELD FITTINGS
  // ============================================
  {
    id: 12,
    slug: "aluminium-buttweld-fittings-manufacturer-in-mumbai",
    oldSlug: "aluminium-buttweld-fittings",
    image: buttweldImg,
    title: "Aluminium Buttweld Fittings",
    shortDescription:
      "ASTM B361, ASME B16.9 Alloy 5083-H111 Marine Grade, 6061-T6 & 6082-T6 Lightweight High-Strength Butt Weld Fittings.",
    materialGroup: "Aluminium",
    standards: "ASTM B361, ASME B16.9, ASME B16.28, EN 573-3, DIN 2605",

    overview:
      "Lightweight, high-strength industrial aluminium butt weld pipe fittings conforming to ASTM B361 and ASME B16.9 standards. Produced from marine-grade Alloy 5083-H111 and structural Alloy 6061-T6 / 6082-T6 with superior weldability, cryogenic toughness, and saltwater atmospheric corrosion resistance — engineered for cryogenic tankers, marine vessels, aerospace ground systems, and pneumatic bulk conveying.",

    grades: [
      "Aluminium 5083-H111 (Marine Grade)",
      "Aluminium 6061-T6 (Structural Heat-Treated)",
      "Aluminium 6082-T6 (High Strength Engineering)",
      "Aluminium 1050 / 1060 (High Purity Commercial)",
      "Aluminium 5052-H32 (Corrosion Resistant Sheet Grade)",
    ],

    supplyForms: [
      "90° / 45° Long Radius Elbows",
      "Short Radius Elbows (1D / 1.5D)",
      "Equal / Reducing Tees",
      "Concentric & Eccentric Reducers",
      "End Caps & Stub Ends",
      "Return Bends (180°)",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B361, ASME B16.9, EN 573-3, DIN 2605",
      nominalSize: '1/2" NB to 24" NB (DN15 to DN600)',
      wallThickness: "Sch 10S, Sch 40S, Sch 80S",
      manufacturingMethods: "Cold Formed & Hot Mandrel Extruded, CNC Beveled",
      surfaceFinish: "Clean Satin Mill Finish, Degreased, Anodized on Request",
      endConnections: "Butt Weld Beveled per ASME B16.25",
      qualityTesting: "PMI, Dye Penetrant (DP), Radiography (X-Ray), Hydrostatic 1.5x WP",
    },

    chemicalComposition: [
      { grade: "Alloy 5083", Mg: "4.0 - 4.9%", Mn: "0.4 - 1.0%", Cr: "0.05 - 0.25%", Si: "≤ 0.40%", Fe: "≤ 0.40%", Al: "Remainder" },
      { grade: "Alloy 6061", Mg: "0.8 - 1.2%", Si: "0.4 - 0.8%", Cu: "0.15 - 0.40%", Cr: "0.04 - 0.35%", Fe: "≤ 0.70%", Al: "Remainder" },
      { grade: "Alloy 6082", Si: "0.7 - 1.3%", Mg: "0.6 - 1.2%", Mn: "0.4 - 1.0%", Fe: "≤ 0.50%", Al: "Remainder" },
    ],

    mechanicalProperties: [
      { grade: "Alloy 5083-H111", tensileStrength: "275 - 350 MPa", yieldStrength: "≥ 125 MPa", elongation: "≥ 12%", hardness: "75 HB" },
      { grade: "Alloy 6061-T6", tensileStrength: "≥ 310 MPa", yieldStrength: "≥ 276 MPa", elongation: "≥ 10%", hardness: "95 HB" },
      { grade: "Alloy 6082-T6", tensileStrength: "≥ 310 MPa", yieldStrength: "≥ 260 MPa", elongation: "≥ 8%", hardness: "95 HB" },
    ],

    standardsCompliance: [
      "ASTM B361 — Factory-Made Wrought Aluminum and Aluminum-Alloy Welding Fittings",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "EN 573-3 — Chemical Composition and Form of Wrought Aluminium Alloys",
      "DIN 2605 — Steel and Aluminium Butt-Welding Pipe Fittings",
    ],

    manufacturingType: "Seamless Wrought / Forged & CNC Machined",
    pressureRating: "Matches Schedule / Pipe Wall Rating",
    tolerance: "Per ASME B16.9 Dimensional Standards",
    certifications: "EN 10204 3.1 Mill Test Certificate, Marine Class Approved",

    industryApplications: [
      "Cryogenic road tankers, LNG fuel supply lines, and air separation units",
      "High-speed catamaran & naval aluminium hull piping",
      "Pneumatic powdered polymer and food conveying lines",
      "Aerospace ground fuel and hydraulic test benches",
    ],

    forms: "Elbows, Tees, Reducers, Caps, Stub Ends",
    application: "Cryogenics, Marine Piping, Pneumatic Conveying & Aerospace",
  }
];

export default buttweldFitting;
