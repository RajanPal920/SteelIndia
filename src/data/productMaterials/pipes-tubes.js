// src/data/productMaterials/pipes.js

// ============================================
// IMAGE IMPORTS — Only these images used
// ============================================
import high from "../../../public/images/stock/high-performance-alloy-pipes.jpg";
import stain from "../../../public/images/stock/stainless-steel-316-316l-pipes.jpg";
import tita from "../../../public/images/stock/titanium-pipes.jpg";
import ally28 from "../../../public/images/stock/alloy-28-pipes.jpg";
import ally20 from "../../../public/images/stock/alloy-20-pipes.jpg";
import smo from "../../../public/images/stock/smo-254-pipes.jpg";
import nic200 from "../../../public/images/stock/nickel-alloy-200-201-pipes.jpg";
import nic from "../../../public/images/stock/nickel-alloy-pipes.jpg";
import mon400 from "../../../public/images/stock/monel-400-pipes.jpg";
import inc750 from "../../../public/images/stock/inconel-x750-pipes.jpg";
import stain1 from "../../../public/images/stock/stainless-steel-310s-pipes.jpg";
import cop from "../../../public/images/stock/copper-nickel-pipes.jpg";
import dup from "../../../public/images/stock/duplex-super-duplex-pipes.jpg";
import brass from "../../../public/images/stock/brass-pipe.jpg";

// ============================================
// PIPES — 9 Products (One Per Material)
// ============================================
const pipes = [
  // ============================================
  // 1. STAINLESS STEEL PIPES
  // ============================================
  {
    id: 1,
    slug: "stainless-steel-pipes-manufacturer-in-mumbai",
    oldSlug: "stainless-steel-pipes",
    image: stain,
    title: "Stainless Steel Pipes Supplier",
    shortDescription:
      "ASTM A312 TP304/304L, TP316/316L, TP321/321H, TP310S, TP347/347H, 904L Seamless & Welded Pipes for Critical Service.",
    materialGroup: "Stainless Steel",
    standards:
      "ASTM A312, ASTM A213, ASTM A269, ASTM A358, ASME B36.19M, ASME B36.10M",

    overview:
      "Complete range of stainless steel seamless and welded pipes conforming to ASTM A312, ASTM A213, and ASTM A269. Sourced from premier global mills and fully tested with eddy current, hydrostatic, and ultrasonic non-destructive examinations — providing superior pitting and crevice corrosion resistance across chemical processing, power generation, and offshore oil & gas facilities.",

    grades: [
      "ASTM A312 TP304",
      "TP304L",
      "TP316",
      "TP316L",
      "TP321",
      "TP321H",
      "TP310S",
      "TP347",
      "TP347H",
      "904L",
    ],

    supplyForms: [
      "Seamless Pipe",
      "ERW / Welded Pipe",
      "Instrumentation Tube",
      "Heat Exchanger Tube",
      "Capillary Tube",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A312, ASTM A213, ASTM A269, ASTM A358, ASME B36.19M, ASME B36.10M",
      nominalPipeSize:
        '1/8" NB to 36" NB (Seamless up to 24" NB, Welded up to 36" NB)',
      outsideDiameter: "6.0 mm to 914.4 mm",
      wallThickness:
        "Sch 5S, Sch 10S, Sch 20, Sch 40S, Sch 80S, Sch 120, Sch 160, Sch XXS",
      manufacturingMethods:
        "Hot Extruded, Cold Drawn Seamless, Continuous TIG / Plasma Welded",
      surfaceFinish:
        "Solution Annealed & Pickled, Bright Annealed (BA), 320 Grit Polished, Mirror Polished",
      pipeEndConditions:
        "Plain End (Square Cut), Beveled End (37.5° ANSI B16.25), Threaded NPT / BSPT",
      qualityTesting:
        "100% Radiography / Eddy Current, Hydrostatic Tested up to 300 Bar, EN 10204 3.1 MTC",
    },

    standardsCompliance: [
      "ASTM A312 / A312M — Seamless, Welded, and Heavily Cold Worked Austenitic Stainless Steel Pipes",
      "ASTM A213 / A213M — Seamless Ferritic and Austenitic Alloy-Steel Boiler, Superheater, and Heat-Exchanger Tubes",
      "ASTM A269 — Seamless and Welded Austenitic Stainless Steel Tubing for General Service",
      "ASME B36.19M / B36.10M — Stainless Steel and Welded/Seamless Wrought Steel Pipe Dimensions",
      "EN 10216-5 / DIN 17456 — Seamless Stainless Steel Tubes for Pressure Purposes",
    ],

    manufacturingType: "Seamless Cold Drawn / Welded Automatic TIG",
    pressureRating: "Tested up to 350 Bar per ASTM A530",
    tolerance: "Per ASTM A530 / ASTM A999 Standard Permissible Variations",
    certifications:
      "EN 10204 Type 3.1 & 3.2 Mill Test Certificates, NACE MR0175 / ISO 15156",
    industryApplications: [
      "Chemical, petrochemical, and pharmaceutical process fluid transfer",
      "Offshore oil and gas platforms, subsea flowlines, and refinery piping networks",
      "High-pressure boiler, condenser, and shell-and-tube heat exchanger tubing",
      "Food, beverage, and dairy sanitary fluid transport systems",
      "Nuclear power generation and desalination plant piping",
      "High-purity semiconductor and cryogenic gas delivery lines",
    ],

    forms: "Seamless, ERW / Welded, Instrumentation, Heat Exchanger Tubes",
    application:
      "Chemical processing, oil & gas, power generation, pharmaceutical, marine",
  },

  // ============================================
  // 2. NICKEL ALLOY PIPES
  // ============================================
  {
    id: 2,
    slug: "nickel-alloy-pipes-manufacturer-in-mumbai",
    oldSlug: "nickel-alloy-pipes",
    image: nic,
    title: "Nickel Alloy Pipes Supplier",
    shortDescription:
      "Nickel 200/201, Monel 400, Inconel 600/625/718/X-750, Incoloy 800/825 Seamless Pipes for Extreme Corrosive Service.",
    materialGroup: "Nickel",
    standards: "ASTM B161, B163, B165, B167, B407, B423, B444, B622, B829",

    overview:
      "Premium nickel alloy seamless pipes engineered for extreme temperature, pressure, and corrosive environments. Manufactured to ASTM B161, B163, B165, B167, B407, B423, B444, B622, and B829 standards, our nickel alloy pipes deliver exceptional oxidation resistance, high-temperature strength, and superior resistance to acids, alkalis, and seawater.",

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
      "Seamless Pipe",
      "Welded Pipe",
      "Heat Exchanger Tube",
      "Instrumentation Tube",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B161, B163, B165, B167, B407, B423, B444, B622, B829",
      nominalPipeSize: '1/8" NB to 24" NB',
      outsideDiameter: "6.0 mm to 610 mm",
      wallThickness: "Sch 5S to Sch XXS",
      manufacturingMethods: "Hot Extruded, Cold Drawn Seamless",
      surfaceFinish: "Solution Annealed, Pickled, Bright Annealed",
      pipeEndConditions: "Plain End, Beveled End, Threaded",
      qualityTesting: "Eddy Current, Hydrostatic, Ultrasonic, PMI Verified",
    },

    standardsCompliance: [
      "ASTM B161 — Nickel Seamless Pipe and Tube",
      "ASTM B163 — Seamless Nickel and Nickel Alloy Condenser and Heat-Exchanger Tubes",
      "ASTM B165 — Nickel-Copper Alloy (UNS N04400) Seamless Pipe and Tube",
      "ASTM B167 — Nickel-Chromium-Iron Alloys Seamless Pipe and Tube",
      "ASTM B407 — Nickel-Iron-Chromium Alloy Seamless Pipe and Tube",
      "ASTM B423 — Nickel-Iron-Chromium-Molybdenum-Copper Alloy Seamless Pipe and Tube",
      "ASTM B444 — Nickel-Chromium-Molybdenum-Columbium Alloys Seamless Pipe and Tube",
      "ASTM B622 — Seamless Nickel and Nickel-Cobalt Alloy Pipe and Tube",
      "ASTM B829 — General Requirements for Nickel and Nickel Alloys Seamless Pipe and Tube",
    ],

    manufacturingType: "Seamless Cold Drawn / Hot Extruded",
    pressureRating: "Tested up to 350 Bar",
    tolerance: "Per ASTM B829 Standard Permissible Variations",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",
    industryApplications: [
      "Chemical processing and acid handling systems",
      "Aerospace and turbine engine components",
      "Nuclear power generation and heat exchangers",
      "Offshore oil & gas and subsea systems",
      "Marine engineering and desalination plants",
      "Heat treatment furnaces and industrial equipment",
    ],

    forms: "Seamless, Welded, Heat Exchanger Tubes",
    application: "Chemical, aerospace, nuclear, offshore, marine industries",
  },

  // ============================================
  // 3. HIGH ALLOY PIPES
  // ============================================
  {
    id: 3,
    slug: "high-alloy-pipes-manufacturer-in-mumbai",
    oldSlug: "high-alloy-pipes",
    image: high,
    title: "High Alloy Pipes Supplier",
    shortDescription:
      "Hastelloy C276, C22, C2000, B2, B3, Alloy 20, Alloy 28, SMO 254, Nimonic, Nichrome Seamless Pipes for Extreme Corrosion.",
    materialGroup: "High Alloys",
    standards: "ASTM B622, B619, B626, B729, B775, B829",

    overview:
      "Specialized high-alloy super-austenitic and nickel-iron-chromium pipes engineered for hot sulfuric acid, phosphoric acid, and aggressive halide services. Manufactured to ASTM B622, B619, B626, B729, B775, and B829 standards, our high-alloy pipes deliver exceptional performance in the most demanding corrosive environments.",

    grades: [
      "Hastelloy C276",
      "Hastelloy C22",
      "Hastelloy C2000",
      "Hastelloy B2",
      "Hastelloy B3",
      "Hastelloy C59",
      "Hastelloy C4",
      "Alloy 20",
      "Alloy 28",
      "SMO 254",
      "Nimonic 75/80A",
      "Nichrome",
    ],

    supplyForms: ["Seamless Pipe", "Welded Pipe", "Heat Exchanger Tube"],

    technicalSpecs: {
      standardSpecifications: "ASTM B622, B619, B626, B729, B775, B829",
      nominalPipeSize: '1/4" NB to 16" NB',
      outsideDiameter: "6.0 mm to 406 mm",
      wallThickness: "Sch 10S to Sch XXS",
      manufacturingMethods: "Cold Drawn Seamless, Hot Extruded",
      surfaceFinish: "Solution Annealed, Pickled",
      pipeEndConditions: "Plain End, Beveled End, Threaded",
      qualityTesting: "Eddy Current, Hydrostatic, PMI Verified",
    },

    standardsCompliance: [
      "ASTM B622 — Seamless Nickel and Nickel-Cobalt Alloy Pipe and Tube",
      "ASTM B619 — Welded Nickel and Nickel-Cobalt Alloy Pipe",
      "ASTM B626 — Welded Nickel and Nickel-Cobalt Alloy Tube",
      "ASTM B729 — Seamless UNS N08020, N08026, and N08024 Alloy Pipe and Tube",
      "ASTM B775 — General Requirements for Nickel and Nickel Alloy Welded Pipe",
      "ASTM B829 — General Requirements for Nickel and Nickel Alloys Seamless Pipe and Tube",
    ],

    manufacturingType: "Seamless Cold Drawn / Welded",
    pressureRating: "Per ASME B31.3 Process Piping",
    tolerance: "Per ASTM B829",
    certifications: "EN 10204 3.1 & 3.2 MTC",
    industryApplications: [
      "Wet chlorine and acid handling systems",
      "Phosphoric and sulfuric acid production",
      "Flue gas desulfurization (FGD) scrubbers",
      "Chemical reactors and process vessels",
      "Pollution control equipment",
      "Pulp and paper processing",
    ],

    forms: "Seamless, Welded, Heat Exchanger Tubes",
    application:
      "Chemical processing, acid handling, pollution control, pulp & paper",
  },

  // ============================================
  // 4. DUPLEX STEEL PIPES
  // ============================================
  {
    id: 4,
    slug: "duplex-steel-pipes-manufacturer-in-mumbai",
    oldSlug: "duplex-steel-pipes",
    image: dup,
    title: "Duplex Steel Pipes Supplier",
    shortDescription:
      "ASTM A790 / A789 UNS S31803 / S32205 (2205) Duplex Steel Seamless Pipes for Chloride-Rich Offshore & Desalination Systems.",
    materialGroup: "Duplex",
    standards: "ASTM A790, A789, ASME B36.19M",

    overview:
      "High-strength dual-phase austenitic-ferritic stainless steel pipes providing exceptional resistance to chloride stress corrosion cracking. Manufactured to ASTM A790 and A789 standards, our duplex steel pipes deliver superior strength and corrosion resistance for offshore oil & gas, chemical tankers, and desalination vessels.",

    grades: ["UNS S31803", "UNS S32205", "2205", "LDX 2101"],

    supplyForms: ["Seamless Pipe", "Welded Pipe", "Heat Exchanger Tube"],

    technicalSpecs: {
      standardSpecifications: "ASTM A790, A789, ASME B36.19M",
      nominalPipeSize: '1/2" NB to 24" NB',
      outsideDiameter: "12.7 mm to 610 mm",
      wallThickness: "Sch 10S to Sch XXS",
      manufacturingMethods: "Cold Drawn Seamless, Welded",
      surfaceFinish: "Solution Annealed, Pickled, Bright Annealed",
      pipeEndConditions: "Plain End, Beveled End, Threaded",
      qualityTesting: "Eddy Current, Hydrostatic, PMI Verified",
    },

    standardsCompliance: [
      "ASTM A790 — Seamless and Welded Ferritic/Austenitic Stainless Steel Pipe",
      "ASTM A789 — Seamless and Welded Ferritic/Austenitic Stainless Steel Tubing",
      "ASME B36.19M — Stainless Steel Pipe Dimensions",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Seamless Cold Drawn / Welded",
    pressureRating: "Tested up to 300 Bar",
    tolerance: "Per ASTM A999",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",
    industryApplications: [
      "Offshore oil and gas platforms",
      "Subsea flowlines and risers",
      "Desalination plants and seawater systems",
      "Chemical cargo tankers",
      "Pulp and paper digesters",
      "Pollution control scrubbers",
    ],

    forms: "Seamless, Welded, Heat Exchanger Tubes",
    application:
      "Offshore platforms, desalination, chemical processing, marine",
  },

  // ============================================
  // 5. SUPER DUPLEX PIPES
  // ============================================
  {
    id: 5,
    slug: "super-duplex-pipes-manufacturer-in-mumbai",
    oldSlug: "super-duplex-pipes",
    image: dup,
    title: "Super Duplex Pipes Supplier",
    shortDescription:
      "ASTM A790 UNS S32750 (2507) / S32760 (F55) Super Duplex Seamless Pipes for Subsea Oilfields & Seawater Systems.",
    materialGroup: "Super Duplex",
    standards: "ASTM A790, A789, ASME B36.19M",

    overview:
      "Ultra-high performance 25% chromium super duplex pipes designed for aggressive subsea oilfields, critical seawater loops, and chemical plant service. Manufactured to ASTM A790 and A789 standards, our super duplex pipes offer superior strength and corrosion resistance in the most demanding environments.",

    grades: ["UNS S32750", "UNS S32760", "2507", "Zeron 100"],

    supplyForms: ["Seamless Pipe", "Welded Pipe", "Heat Exchanger Tube"],

    technicalSpecs: {
      standardSpecifications: "ASTM A790, A789, ASME B36.19M",
      nominalPipeSize: '1/2" NB to 16" NB',
      outsideDiameter: "12.7 mm to 406 mm",
      wallThickness: "Sch 10S to Sch XXS",
      manufacturingMethods: "Cold Drawn Seamless",
      surfaceFinish: "Solution Annealed, Pickled",
      pipeEndConditions: "Plain End, Beveled End, Threaded",
      qualityTesting: "Eddy Current, Hydrostatic, PMI Verified",
    },

    standardsCompliance: [
      "ASTM A790 — Seamless and Welded Ferritic/Austenitic Stainless Steel Pipe",
      "ASTM A789 — Seamless and Welded Ferritic/Austenitic Stainless Steel Tubing",
      "ASME B36.19M — Stainless Steel Pipe Dimensions",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Seamless Cold Drawn",
    pressureRating: "Tested up to 400 Bar",
    tolerance: "Per ASTM A999",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",
    industryApplications: [
      "Subsea oilfields and deepwater equipment",
      "Seawater handling and desalination systems",
      "Chemical plant service and reactors",
      "Marine engineering and shipbuilding",
      "Offshore platforms and risers",
      "Pollution control scrubbers",
    ],

    forms: "Seamless, Welded, Heat Exchanger Tubes",
    application: "Subsea oilfields, seawater systems, chemical processing",
  },

  // ============================================
  // 6. TITANIUM PIPES
  // ============================================
  {
    id: 6,
    slug: "titanium-pipes-manufacturer-in-mumbai",
    oldSlug: "titanium-pipes",
    image: tita,
    title: "Titanium Pipes Supplier",
    shortDescription:
      "ASTM B338 Grade 1, 2, 5 (Ti-6Al-4V), 7 Seamless Pipes with Impervious Corrosion Immunity in Seawater & Chlorides.",
    materialGroup: "Titanium",
    standards: "ASTM B338, ASTM B861, ASTM B862",

    overview:
      "Ultra-lightweight, high-strength titanium seamless and welded pipes with impervious corrosion immunity against seawater, wet chlorine, and organic chlorides. Manufactured to ASTM B338, B861, and B862 standards, our titanium pipes deliver exceptional performance in aerospace, marine, and chemical processing applications.",

    grades: [
      "Grade 1",
      "Grade 2",
      "Grade 5 (Ti-6Al-4V)",
      "Grade 7",
      "Grade 12",
    ],

    supplyForms: [
      "Seamless Pipe",
      "Welded Pipe",
      "Capillary Tube",
      "Heat Exchanger Tube",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B338, ASTM B861, ASTM B862",
      nominalPipeSize: '1/4" NB to 16" NB',
      outsideDiameter: "6.0 mm to 406 mm",
      wallThickness: "Sch 5S to Sch XXS",
      manufacturingMethods: "Cold Drawn Seamless, Welded",
      surfaceFinish: "Pickled, Bright Annealed, Polished",
      pipeEndConditions: "Plain End, Beveled End, Threaded",
      qualityTesting: "Eddy Current, Hydrostatic, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM B338 — Seamless and Welded Titanium and Titanium Alloy Tubes",
      "ASTM B861 — Titanium and Titanium Alloy Seamless Pipe",
      "ASTM B862 — Titanium and Titanium Alloy Welded Pipe",
    ],

    manufacturingType: "Seamless Cold Drawn / Welded",
    pressureRating: "Tested up to 300 Bar",
    tolerance: "Per ASTM B338",
    certifications: "EN 10204 3.1 & 3.2 MTC",
    industryApplications: [
      "Aerospace and aircraft components",
      "Marine and seawater systems",
      "Chemical processing and chlor-alkali cells",
      "Medical implants and surgical instruments",
      "Desalination plants",
      "Heat exchangers and condensers",
    ],

    forms: "Seamless, Welded, Capillary, Heat Exchanger Tubes",
    application:
      "Aerospace, marine, chemical processing, medical, desalination",
  },

  // ============================================
  // 7. ALLOY PIPES
  // ============================================
  {
    id: 7,
    slug: "alloy-pipes-manufacturer-in-mumbai",
    oldSlug: "alloy-pipes",
    image: ally20,
    title: "Alloy Pipes Supplier",
    shortDescription:
      "Alloy 20, Alloy 28, Copper-Nickel 70/30 & 90/10, Zirconium, Tantalum Specialty Alloy Pipes for Ultra-Corrosive Service.",
    materialGroup: "Alloys",
    standards: "ASTM B729, B466, B467, B523, B521, B658",

    overview:
      "Specialty alloys including alloy 20, alloy 28, copper-nickel, zirconium, and tantalum pipes engineered for ultra-corrosive chemical processing, nuclear, and marine applications. Manufactured to ASTM B729, B466, B467, B523, B521, and B658 standards, our alloy pipes deliver exceptional performance in the most demanding environments.",

    grades: [
      "Alloy 20",
      "Alloy 28",
      "Copper-Nickel 70/30",
      "Copper-Nickel 90/10",
      "Zirconium 702",
      "Tantalum",
    ],

    supplyForms: ["Seamless Pipe", "Welded Pipe", "Heat Exchanger Tube"],

    technicalSpecs: {
      standardSpecifications: "ASTM B729, B466, B467, B523, B521, B658",
      nominalPipeSize: '1/4" NB to 12" NB',
      outsideDiameter: "6.0 mm to 323.9 mm",
      wallThickness: "Sch 10S to Sch XXS",
      manufacturingMethods: "Cold Drawn Seamless, Welded",
      surfaceFinish: "Pickled, Annealed",
      pipeEndConditions: "Plain End, Beveled End, Threaded",
      qualityTesting: "Eddy Current, Hydrostatic, PMI Verified",
    },

    standardsCompliance: [
      "ASTM B729 — Seamless UNS N08020, N08026, and N08024 Alloy Pipe and Tube",
      "ASTM B466 — Seamless Copper-Nickel Pipe and Tube",
      "ASTM B467 — Welded Copper-Nickel Pipe",
      "ASTM B523 — Seamless and Welded Zirconium and Zirconium Alloy Tubes",
      "ASTM B521 — Tantalum and Tantalum Alloy Seamless and Welded Tubes",
      "ASTM B658 — Zirconium and Zirconium Alloy Seamless and Welded Pipe",
    ],

    manufacturingType: "Seamless Cold Drawn / Welded",
    pressureRating: "Per ASME B31.3",
    tolerance: "Per ASTM standards",
    certifications: "EN 10204 3.1 & 3.2 MTC",
    industryApplications: [
      "Chemical processing and acid handling",
      "Nuclear power generation",
      "Marine engineering and shipbuilding",
      "Desalination and heat exchangers",
      "Pharmaceutical and food processing",
      "Pollution control equipment",
    ],

    forms: "Seamless, Welded, Heat Exchanger Tubes",
    application: "Chemical processing, nuclear, marine, desalination, pharma",
  },

  // ============================================
  // 8. CARBON STEEL PIPES
  // ============================================
  {
    id: 8,
    slug: "carbon-steel-pipes-manufacturer-in-mumbai",
    oldSlug: "carbon-steel-pipes",
    image: ally28,
    title: "Carbon Steel Pipes Supplier",
    shortDescription:
      "ASTM A106 Gr B, A53 Gr B, A333 Gr 6, API 5L X42-X70 Seamless & Welded Carbon Steel Pipes for High-Pressure Service.",
    materialGroup: "Carbon",
    standards: "ASTM A106, ASTM A53, ASTM A333, API 5L, ASME B36.10M",

    overview:
      "High-yield heavy-duty seamless and ERW/LSAW carbon steel line pipes engineered for high-pressure hydrocarbons, steam generation, and industrial infrastructure. Manufactured to ASTM A106, A53, A333, and API 5L standards, our carbon steel pipes deliver reliable performance in oil & gas, power generation, and process industries.",

    grades: [
      "ASTM A106 Gr A/B/C",
      "ASTM A53 Gr A/B",
      "ASTM A333 Gr 1/6",
      "API 5L Gr B",
      "API 5L X42",
      "X52",
      "X60",
      "X65",
      "X70",
    ],

    supplyForms: ["Seamless Pipe", "ERW Pipe", "LSAW Pipe", "SAW Pipe"],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A106, ASTM A53, ASTM A333, API 5L, ASME B36.10M",
      nominalPipeSize: '1/8" NB to 48" NB',
      outsideDiameter: "10.3 mm to 1219.2 mm",
      wallThickness: "Sch 10 to Sch XXS",
      manufacturingMethods: "Hot Rolled Seamless, ERW, LSAW, SAW",
      surfaceFinish: "Black, Varnished, Galvanized, 3LPE Coated",
      pipeEndConditions: "Plain End, Beveled End, Threaded",
      qualityTesting: "Radiography, Hydrostatic, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM A106 — Seamless Carbon Steel Pipe for High-Temperature Service",
      "ASTM A53 — Pipe, Steel, Black and Hot-Dipped, Zinc-Coated, Welded and Seamless",
      "ASTM A333 — Seamless and Welded Steel Pipe for Low-Temperature Service",
      "API 5L — Specification for Line Pipe",
      "ASME B36.10M — Welded and Seamless Wrought Steel Pipe Dimensions",
    ],

    manufacturingType: "Seamless Hot Rolled / ERW / LSAW",
    pressureRating: "Per API 5L / ASME B31.4",
    tolerance: "Per ASTM A106 / API 5L",
    certifications: "EN 10204 3.1 MTC, API 5L certified",
    industryApplications: [
      "Oil and gas transmission pipelines",
      "Steam generation and power plants",
      "Refinery and petrochemical piping",
      "Water and gas distribution networks",
      "Structural and industrial applications",
      "Low-temperature and cryogenic service",
    ],

    forms: "Seamless, ERW, LSAW, SAW",
    application: "Oil & gas, steam lines, power plants, water distribution",
  },

  // ============================================
  // 9. ALLOY STEEL PIPES
  // ============================================
  {
    id: 9,
    slug: "alloy-steel-pipes-manufacturer-in-mumbai",
    oldSlug: "alloy-steel-pipes",
    image: ally28,
    title: "Alloy Steel Pipes Supplier",
    shortDescription:
      "ASTM A335 P5, P9, P11, P22, P91 Chrome-Moly Creep-Resistant Alloy Steel Seamless Pipes for Supercritical Boilers.",
    materialGroup: "Alloy Steel",
    standards: "ASTM A335, ASTM A213, ASME B36.10M",

    overview:
      "Chromium-molybdenum creep-resistant alloy steel seamless pipes engineered for supercritical boilers, heat recovery steam generators, and extreme-temperature steam lines. Manufactured to ASTM A335 and A213 standards, our alloy steel pipes deliver reliable performance at temperatures up to 650°C.",

    grades: [
      "ASTM A335 P5",
      "P9",
      "P11",
      "P22",
      "P91",
      "P92",
      "ASTM A213 T5",
      "T9",
      "T11",
      "T22",
      "T91",
    ],

    supplyForms: ["Seamless Pipe", "Heat Exchanger Tube"],

    technicalSpecs: {
      standardSpecifications: "ASTM A335, ASTM A213, ASME B36.10M",
      nominalPipeSize: '1/4" NB to 30" NB',
      outsideDiameter: "13.7 mm to 762 mm",
      wallThickness: "Sch 10 to Sch XXS",
      manufacturingMethods: "Hot Rolled Seamless, Cold Drawn Seamless",
      surfaceFinish: "Hot Finished, Pickled, Annealed",
      pipeEndConditions: "Plain End, Beveled End, Threaded",
      qualityTesting: "Radiography, Hydrostatic, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM A335 — Seamless Ferritic Alloy-Steel Pipe for High-Temperature Service",
      "ASTM A213 — Seamless Ferritic and Austenitic Alloy-Steel Boiler, Superheater, and Heat-Exchanger Tubes",
      "ASME B36.10M — Welded and Seamless Wrought Steel Pipe Dimensions",
      "ASME B31.1 — Power Piping Code",
    ],

    manufacturingType: "Seamless Hot Rolled / Cold Drawn",
    pressureRating: "Per ASME B31.1",
    tolerance: "Per ASTM A335",
    certifications: "EN 10204 3.1 & 3.2 MTC",
    industryApplications: [
      "Supercritical boiler tubes",
      "Heat recovery steam generators (HRSG)",
      "Refinery hydrotreaters and hydrocrackers",
      "Power plant steam lines",
      "Petrochemical process piping",
      "High-temperature chemical reactors",
    ],

    forms: "Seamless, Heat Exchanger Tubes",
    application: "Supercritical boilers, power plants, refinery, petrochemical",
  },

  // ============================================
  // 10. COPPER NICKEL PIPES & TUBES
  // ============================================
  {
    id: 10,
    slug: "copper-nickel-pipes-tubes-manufacturer-in-mumbai",
    oldSlug: "copper-nickel-pipes-tubes",
    image: cop,
    title: "Copper Nickel Pipes & Tubes",
    shortDescription:
      "ASTM B466, ASTM B467, DIN 86019 CuNi 90/10 (C70600) & 70/30 (C71500) Seamless & Welded Marine Seawater Pipes & Condenser Tubes.",
    materialGroup: "Copper Nickel",
    standards: "ASTM B466, ASTM B467, ASTM B111, DIN 86019, EEMUA 144, BS 2871",

    overview:
      "High-integrity marine-grade Copper Nickel pipes and condenser tubes manufactured in CuNi 90/10 (C70600) and CuNi 70/30 (C71500) alloys. Conforming to ASTM B466, DIN 86019, and EEMUA 144 standards. Specifically formulated for continuous seawater cooling loops, marine firewater networks, offshore oil platforms, and multi-stage flash desalination plants with inherent resistance to biofouling, velocity erosion, and stress corrosion cracking.",

    grades: [
      "CuNi 90/10 (C70600)",
      "CuNi 70/30 (C71500)",
      "CW352H (CuNi10Fe1Mn)",
      "CW354H (CuNi30Mn1Fe)",
      "NES 779 / NES 780",
    ],

    supplyForms: [
      "Seamless Cold Drawn Pipes",
      "EEMUA 144 Offshore Specification Pipes",
      "DIN 86019 Metric Marine Pipes",
      "Seamless Condenser & Chiller Tubes (ASTM B111)",
      "U-Bent Heat Exchanger Tubes",
      "Longitudinal Seam Welded Large Bore Pipes",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B466, ASTM B467, ASTM B111, DIN 86019, EEMUA 144",
      nominalPipeSize: '1/2" NB to 20" NB (16 mm to 508 mm OD)',
      wallThickness: "1.0 mm to 25 mm (Sch 10S, Sch 40S, 10 Bar, 14 Bar, 16 Bar, 20 Bar)",
      lengthRange: "Single Random (5-7m), Double Random (10-12m), Cut Lengths",
      pipeEndConditions: "Plain End Square Cut, Beveled for Welding",
      surfaceFinish: "Clean Annealed, Pickled, Bright Finish",
      qualityTesting: "Eddy Current Test, Hydrostatic Test, Ultrasonic, PMI, Tensile",
    },

    standardsCompliance: [
      "ASTM B466 — Seamless Copper-Nickel Pipe and Tube",
      "ASTM B467 — Welded Copper-Nickel Pipe",
      "ASTM B111 — Copper and Copper-Alloy Seamless Condenser Tubes",
      "DIN 86019 — Seamless CuNi10Fe1.6Mn Tubes for Seawater",
      "EEMUA 144 — 90/10 Copper Nickel Tubes: Seamless and Welded",
      "ASME B31.3 — Process Piping Code",
    ],

    manufacturingType: "Cold Drawn Seamless / Welded",
    pressureRating: "10 Bar / 14 Bar / 16 Bar / 20 Bar / Class 150",
    temperatureRange: "-196°C to +300°C",
    tolerance: "Per ASTM B466 / DIN 86019 / EEMUA 144",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Commercial ship piping and ballast water systems",
      "Offshore platform firewater deluge mains",
      "Desalination plant heat recovery distillers",
      "Power generation seawater steam surface condensers",
      "Subsea hydraulic and instrumentation flowlines",
    ],

    forms: "Seamless Pipes, Condenser Tubes, U-Tubes, Welded Pipes",
    application: "Seawater cooling, ship piping, desalination distillers, power condensers",
  },

  // ============================================
  // 11. BRASS PIPES & TUBES
  // ============================================
  {
    id: 11,
    slug: "brass-pipes-tubes-manufacturer-in-mumbai",
    oldSlug: "brass-pipes-tubes",
    image: brass,
    title: "Brass Pipes & Tubes",
    shortDescription:
      "Naval Brass C46400, Cartridge Brass C26000 & Arsenical Brass C26130 Seamless Heat Exchanger Tubes & Regular Sched. Plumbing Pipes.",
    materialGroup: "Brass",
    standards: "ASTM B135, ASTM B43, ASTM B111, BS 2871, IS 407, DIN 17660",

    overview:
      "Commercial and industrial brass pipes and precision condenser tubes manufactured to ASTM B43 (Red Brass) and ASTM B135 (Seamless Brass Tube). Utilizing Cartridge Brass C26000, Naval Brass C46400, and Arsenical Admiralty Brass C44300. Engineered for exceptional machinability, excellent thermal conductivity, corrosion resistance in fresh and potable waters, and high ductility for bending and expanding into tube sheets.",

    grades: [
      "Naval Brass C46400",
      "Cartridge Brass C26000 (70/30)",
      "Red Brass C23000 (85/15)",
      "Admiralty Brass C44300",
      "Free Cutting Brass C36000",
      "IS 407 / BS 2871 Part 2",
    ],

    supplyForms: [
      "Standard Weight (Sch 40) Regular Brass Pipes",
      "Extra Strong (Sch 80) Threaded Brass Pipes",
      "Seamless Heat Exchanger & Condenser Tubes",
      "Precision Thin Wall Brass Tubes",
      "Straight Lengths (3m to 6m)",
      "Coiled Brass Tubes for Instrumentation",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B135, ASTM B43, ASTM B111, IS 407, BS 2871",
      outsideDiameter: '1/8" NB to 6" NB (6.0 mm to 168.3 mm OD)',
      wallThickness: "0.5 mm to 12 mm (Regular & Extra Strong)",
      manufacturingMethods: "Extruded & Cold Drawn Seamless",
      surfaceFinish: "Bright Drawn, Annealed, Polished Brass",
      endConditions: "Plain Square Cut, Threaded NPT/BSPT",
      qualityTesting: "Eddy Current Testing, Hydrostatic Test, Pneumatic, Flare & Flattening",
    },

    standardsCompliance: [
      "ASTM B135 — Seamless Brass Tube",
      "ASTM B43 — Seamless Red Brass Pipe, Standard Sizes",
      "ASTM B111 — Copper and Copper-Alloy Seamless Condenser Tubes",
      "BS 2871 Part 2 — Copper and Copper Alloys: Tubes for General Purposes",
      "IS 407 — Brass Tubes for General Purposes",
    ],

    manufacturingType: "Cold Drawn Seamless",
    pressureRating: "Up to 50 Bar (Per ASTM B43)",
    temperatureRange: "-40°C to +180°C",
    tolerance: "Per ASTM B135 / B43",
    certifications: "EN 10204 3.1 MTC",

    industryApplications: [
      "Commercial refrigeration and air conditioning chillers",
      "Sugar mill evaporators and juice heaters",
      "Architectural railings, trims, and sanitary plumbing lines",
      "Marine engine heat exchangers and radiator cores",
      "Industrial compressed air and pneumatic control lines",
    ],

    forms: "Seamless Pipes, Heat Exchanger Tubes, Thin Wall Tubes",
    application: "HVAC chillers, sugar mill evaporators, plumbing, architectural",
  },
  {
    id: 12,
    slug: "aluminium-pipes-tubes-manufacturer-in-mumbai",
    oldSlug: "aluminium-pipes-tubes",
    image: stain,
    title: "Aluminium Pipes & Tubes Supplier – 6061-T6, 6063-T6, 5083, 6082 & More",
    shortDescription:
      "ASTM B241, ASTM B221 Alloy 6061-T6 Structural Seamless Pipes & Marine 5083-H111 Extruded Round, Square & Rectangular Tubes.",
    materialGroup: "Aluminium",
    standards: "ASTM B241, ASTM B221, ASTM B210, EN 755, DIN 1795, IS 738",

    overview:
      "Extruded seamless and drawn industrial aluminium pipes and tubes conforming to ASTM B241 and ASTM B221 specifications. Available in structural heat-treated alloy 6061-T6 (high strength-to-weight ratio), architectural smooth-finish 6063-T6, and marine-certified corrosion-resistant alloy 5083. Designed for lightweight fluid distribution, pneumatic lines, automotive driveshafts, and marine superstructure frames.",

    grades: [
      "Aluminium 6061-T6 (High Strength Structural Seamless)",
      "Aluminium 6063-T6 (Architectural & Pneumatic Tubing)",
      "Aluminium 5083-H111 (Marine Grade Salt Air Certified)",
      "Aluminium 6082-T6 (European Structural Engineering)",
      "Aluminium 7075-T6 (Aerospace High-Yield Seamless)",
    ],

    supplyForms: [
      "Extruded Seamless Round Pipes (Schedule 10S / 40S / 80S)",
      "Cold Drawn Precision Hydraulic & Pneumatic Tubes",
      "Square & Rectangular Structural Hollow Sections",
      "Heat Exchanger & Air Preheater Tubes",
      "Custom Extruded Profiles with Internal Fins",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B241, ASTM B221, EN 755, DIN 1795",
      outsideDiameter: '1/4" NB to 16" NB (13.7mm to 406.4mm OD)',
      wallThickness: "1.0mm to 30mm (Sch 5S to Sch 80S)",
      manufacturingMethods: "Hot Extruded Seamless Mandrel & Cold Drawn",
      surfaceFinish: "Mill Finish, Clear Anodized (15-20µm), Chemical Brightened",
      endConditions: "Plain Ends, Beveled Ends per ASME B16.25",
      qualityTesting: "Eddy Current Testing, Hydrostatic Pressure, Tensile, Flattening & Flaring",
    },

    chemicalComposition: [
      { grade: "Alloy 6061", Mg: "0.8 - 1.2%", Si: "0.4 - 0.8%", Cu: "0.15 - 0.40%", Cr: "0.04 - 0.35%", Al: "Remainder" },
      { grade: "Alloy 6063", Mg: "0.45 - 0.9%", Si: "0.2 - 0.6%", Fe: "≤ 0.35%", Cu: "≤ 0.10%", Al: "Remainder" },
      { grade: "Alloy 5083", Mg: "4.0 - 4.9%", Mn: "0.4 - 1.0%", Cr: "0.05 - 0.25%", Al: "Remainder" },
    ],

    mechanicalProperties: [
      { grade: "Alloy 6061-T6", tensileStrength: "≥ 310 MPa", yieldStrength: "≥ 276 MPa", elongation: "≥ 10%", hardness: "95 HB" },
      { grade: "Alloy 6063-T6", tensileStrength: "≥ 205 MPa", yieldStrength: "≥ 170 MPa", elongation: "≥ 12%", hardness: "70 HB" },
      { grade: "Alloy 5083-H111", tensileStrength: "275 - 350 MPa", yieldStrength: "≥ 125 MPa", elongation: "≥ 12%", hardness: "75 HB" },
    ],

    standardsCompliance: [
      "ASTM B241 — Aluminum and Aluminum-Alloy Seamless Pipe and Seamless Extruded Tube",
      "ASTM B221 — Aluminum and Aluminum-Alloy Extruded Bars, Rods, Wire, Profiles, and Tubes",
      "EN 755 — Aluminium and Aluminium Alloys - Extruded Rod/Bar, Tube and Profiles",
    ],

    manufacturingType: "Extruded Seamless & Cold Drawn",
    pressureRating: "Class 150 / Sch 40 Pressure Rated",
    tolerance: "Per ASTM B241 / EN 755 Dimensional Standards",
    certifications: "EN 10204 3.1 MTC, Marine Classification Available",

    industryApplications: [
      "Cryogenic liquid tank piping and LNG transfer lines",
      "High-speed passenger ferry piping, masts, and railings",
      "Automotive driveshafts, chassis frames, and compressed air circuits",
      "Solar tracker torque tubes and outdoor structural frames",
    ],

    forms: "Seamless Pipes, Hydraulic Tubes, Structural Hollow Sections",
    application: "Cryogenics, Marine Superstructures, Pneumatics, Solar Trackers",
  },
];

export default pipes;
