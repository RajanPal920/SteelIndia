// src/data/productMaterials/valves.js

// ============================================
// IMAGE IMPORTS
// ============================================
import ballValves from "../../../public/images/types/ball-valves.jpg";
import gateValves from "../../../public/images/types/gate-valves.jpg";
import globeValves from "../../../public/images/types/globe-valves.jpg";
import checkValves from "../../../public/images/types/check-valves.jpg";
import butterflyValves from "../../../public/images/types/butterfly-valves.jpg";
import needleValves from "../../../public/images/types/needle-valves.jpg";
import copperValves from "../../../public/images/stock/copper-nickel-flange-500x500.jpg";
import brassValves from "../../../public/images/stock/brass-valve.jpg";
import titaniumValves from "../../../public/images/stock/titanium-flanges.jpg";
import duplexValves from "../../../public/images/stock/duplex-steel-flanges.jpg";
import alloyValves from "../../../public/images/stock/alloy-steel-flanges.jpg";

// ============================================
// VALVES — Comprehensive Material Formulations
// ============================================
const valves = [
  // ============================================
  // 1. STAINLESS STEEL VALVES
  // ============================================
  {
    id: 1,
    slug: "stainless-steel-valves-manufacturer-in-mumbai",
    oldSlug: "stainless-steel-valves",
    image: ballValves,
    title: "Stainless Steel Valves",
    shortDescription:
      "SS 304, 304L, 316, 316L, 310S, 321, 347, 904L Industrial Ball, Gate, Globe, Check, Butterfly & Needle Valves.",
    materialGroup: "Stainless Steel",
    standards: "API 6D, API 600, API 602, ASME B16.34, BS 5351, MSS SP-72, ISO 10434",

    overview:
      "High-performance stainless steel industrial valves engineered for chemical processing, cryogenic, pharmaceutical, and offshore fluid control. Available in 2-piece, 3-piece, trunnion-mounted, floating ball, flanged gate, and high-pressure needle configurations manufactured from ASTM A182 / A351 grades CF8, CF8M, CF3, CF3M, and 904L with 100% pressure containment testing.",

    grades: [
      "SS 304 / CF8",
      "SS 304L / CF3",
      "SS 316 / CF8M",
      "SS 316L / CF3M",
      "SS 310S",
      "SS 321",
      "SS 347",
      "SS 904L",
    ],

    supplyForms: [
      "Flanged End Ball Valves",
      "Wedge Gate Valves (OS&Y)",
      "Outside Screw & Yoke Globe Valves",
      "Dual Plate & Swing Check Valves",
      "Wafer & Lug Butterfly Valves",
      "High Pressure Instrumentation Needle Valves",
    ],

    technicalSpecs: {
      standardSpecifications: "API 6D, API 600, API 602, ASME B16.34, BS 5351",
      sizeRange: '1/2" to 36" (DN15 to DN900)',
      pressureRating: "Class 150 to Class 2500 / PN 10 to PN 420",
      endConnections: "Flanged RF/RTJ, Butt Weld, Socket Weld, Threaded NPT/BSPT",
      bodyMaterial: "ASTM A351 CF8/CF8M/CF3/CF3M, ASTM A182 F304/F316/F321",
      trimMaterial: "SS 316, SS 304, Stellite Faced",
      qualityTesting: "Hydrostatic Shell & Seat, Air Seat, PMI, Dye Penetrant, Fire-Safe API 607",
    },

    standardsCompliance: [
      "API 6D — Pipeline and Piping Valves Specification",
      "API 600 — Bolted Bonnet Steel Gate Valves",
      "ASME B16.34 — Valves Flanged, Threaded, and Welding End",
      "API 607 / ISO 10497 — Fire Test for Valves",
      "BS 5351 — Steel Ball Valves for the Petroleum Industry",
      "EN 10204 3.1 & 3.2 — Inspection Documents for Metallic Products",
    ],

    manufacturingType: "Forged Body / Investment Cast Body",
    pressureRating: "150# to 2500#",
    temperatureRange: "-196°C to +550°C",
    tolerance: "Per ASME B16.34 / API 598",
    certifications: "EN 10204 3.1 & 3.2 MTC, API 6D monogram, Fire-Safe API 607",

    industryApplications: [
      "Chemical and petrochemical process piping",
      "Pharmaceutical and biotechnology facilities",
      "Oil and gas upstream, midstream, and downstream",
      "Cryogenic LNG and liquid oxygen service",
      "Desalination and industrial water treatment",
      "Thermal and nuclear power generation plants",
    ],

    forms: "Ball, Gate, Globe, Check, Butterfly, Needle Valves",
    application: "Chemical, Petrochemical & Process Fluid Control",
  },

  // ============================================
  // 2. CARBON STEEL VALVES
  // ============================================
  {
    id: 2,
    slug: "carbon-steel-valves-manufacturer-in-mumbai",
    oldSlug: "carbon-steel-valves",
    image: gateValves,
    title: "Carbon Steel Valves",
    shortDescription:
      "ASTM A105, A216 WCB, WCC, A350 LF2 High-Pressure Heavy Duty Bolted Bonnet Gate, Globe, Check & Ball Valves.",
    materialGroup: "Carbon Steel",
    standards: "API 6D, API 600, API 602, ASME B16.34, BS 1868, BS 1873",

    overview:
      "Heavy-duty industrial carbon steel valves designed for high-pressure steam, oil, natural gas, and hydrocarbon transportation. Cast from premium ASTM A216 WCB/WCC and forged from ASTM A105 / A350 LF2 (low temperature) with hardened stellite trim for maximum cavitation resistance and extended life under cyclic pressure swings.",

    grades: [
      "ASTM A216 WCB",
      "ASTM A216 WCC",
      "ASTM A105",
      "ASTM A350 LF2 (Class 1/2)",
      "ASTM A217 WC6 / WC9",
    ],

    supplyForms: [
      "Cast Steel Bolted Bonnet Gate Valves",
      "Straight & Angle Body Globe Valves",
      "Swing & Piston Lift Check Valves",
      "Forged Steel Socket Weld Gate & Globe Valves",
      "Trunnion Mounted Pipeline Ball Valves",
    ],

    technicalSpecs: {
      standardSpecifications: "API 6D, API 600, API 602, ASME B16.34, BS 1868",
      sizeRange: '1/2" to 48" (DN15 to DN1200)',
      pressureRating: "Class 150, 300, 600, 900, 1500, 2500",
      endConnections: "Flanged Raised Face (RF), RTJ, Butt Weld (BW), Socket Weld (SW)",
      bodyMaterial: "ASTM A216 WCB, ASTM A105, ASTM A350 LF2",
      trimMaterial: "API Trim 1 (13Cr), API Trim 5 (Hardfaced Stellite 6), API Trim 8",
      qualityTesting: "Hydro Shell 1.5x, Hydro Seat 1.1x, Low Pressure Air Seat, NACE MR0175",
    },

    standardsCompliance: [
      "API 600 — Bolted Bonnet Steel Gate Valves",
      "API 602 — Compact Steel Gate, Globe, and Check Valves",
      "ASME B16.34 — Pressure-Temperature Ratings for Valves",
      "API 598 — Valve Inspection and Testing",
      "NACE MR0175 / ISO 15156 — Sour Service Compliance",
    ],

    manufacturingType: "Heavy Sand Cast / Closed Die Forged",
    pressureRating: "150# to 2500# / PN 20 to PN 420",
    temperatureRange: "-46°C (LF2) to +425°C (WCB)",
    tolerance: "Per ASME B16.34",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "High-pressure hydrocarbon and crude oil pipelines",
      "Superheated boiler steam headers and feed lines",
      "Refinery cracking units and hydrotreaters",
      "Natural gas transmission and city gas distribution",
      "District heating and power plant cooling water",
    ],

    forms: "Gate, Globe, Check, Trunnion Ball Valves",
    application: "High-Pressure Hydrocarbon, Steam & Refining Infrastructure",
  },

  // ============================================
  // 3. ALLOY STEEL VALVES
  // ============================================
  {
    id: 3,
    slug: "alloy-steel-valves-manufacturer-in-mumbai",
    oldSlug: "alloy-steel-valves",
    image: globeValves,
    title: "Alloy Steel Valves",
    shortDescription:
      "ASTM A217 WC6, WC9, C12A, ASTM A182 F11, F22, F91 Chrome-Moly High-Temperature Supercritical Steam Valves.",
    materialGroup: "Alloy Steel",
    standards: "ASME B16.34, API 600, API 602, BS 1873, EN 12516",

    overview:
      "Supercritical high-temperature alloy steel valves engineered for power generation boilers, heat recovery steam generators (HRSG), and petroleum refineries. Manufactured from ASTM A217 WC6 (1.25Cr-0.5Mo), WC9 (2.25Cr-1Mo), and C12A (Grade 91) alloy formulations providing exceptional creep-rupture strength at temperatures surpassing 600°C.",

    grades: [
      "ASTM A217 WC6 (1.25Cr-0.5Mo)",
      "ASTM A217 WC9 (2.25Cr-1Mo)",
      "ASTM A217 C12A (Grade 91)",
      "ASTM A182 F11 Class 2",
      "ASTM A182 F22 Class 3",
      "ASTM A182 F91",
    ],

    supplyForms: [
      "Pressure Seal Bonnet Gate Valves",
      "High-Pressure Y-Pattern Globe Valves",
      "Tilting Disc Check Valves",
      "Forged Chrome-Moly Header Isolation Valves",
    ],

    technicalSpecs: {
      standardSpecifications: "ASME B16.34, API 600, API 602, BS 1873",
      sizeRange: '1/2" to 24" (DN15 to DN600)',
      pressureRating: "Class 600 to Class 4500",
      endConnections: "Butt Weld (BW), Socket Weld, Flanged RTJ",
      bodyMaterial: "ASTM A217 WC6/WC9/C12A, ASTM A182 F11/F22/F91",
      trimMaterial: "Full Stellite 6 / Stellite 21 Facing",
      qualityTesting: "Radiographic Testing (RT), Ultrasonic (UT), Magnetic Particle (MPI), Hydrostatic",
    },

    standardsCompliance: [
      "ASME B16.34 — High Pressure / High Temperature Valves",
      "ASME B31.1 — Power Piping Code Compliance",
      "API 598 — Valve Inspection and Pressure Testing",
    ],

    manufacturingType: "Forged Alloy / Precision Cast Chrome-Moly",
    pressureRating: "Class 600# to 4500#",
    temperatureRange: "Up to +650°C",
    tolerance: "Per ASME B16.34",
    certifications: "EN 10204 3.1 & 3.2 MTC with full High-Temp Creep Traceability",

    industryApplications: [
      "Supercritical and ultra-supercritical thermal power boilers",
      "Combined cycle power plant main steam stops and bypass lines",
      "Refinery catalytic cracking and hydroprocessing units",
      "High-temperature petrochemical synthesis reactors",
    ],

    forms: "Pressure Seal Gate, Y-Globe, Non-Return Check Valves",
    application: "Supercritical Steam, Power Boilers & High-Temperature Refining",
  },

  // ============================================
  // 4. DUPLEX STEEL VALVES
  // ============================================
  {
    id: 4,
    slug: "duplex-steel-valves-manufacturer-in-mumbai",
    oldSlug: "duplex-steel-valves",
    image: duplexValves,
    title: "Duplex Steel Valves",
    shortDescription:
      "UNS S31803, S32205 (Duplex 2205) / ASTM A995 4A, A182 F51 Seawater & Desalination Ball, Butterfly & Check Valves.",
    materialGroup: "Duplex",
    standards: "API 6D, ASME B16.34, ISO 15156, NORSOK M-630 / M-650",

    overview:
      "Corrosion-resistant duplex 2205 (UNS S31803 / S32205) stainless steel valves delivering twice the mechanical yield strength of standard austenitic grades paired with total immunity to chloride pitting and stress corrosion cracking in high-salinity seawater and sour gas platforms.",

    grades: [
      "UNS S31803 (Duplex 2205)",
      "UNS S32205",
      "ASTM A995 Gr 4A (CD3MN)",
      "ASTM A182 F51",
      "EN 1.4462",
    ],

    supplyForms: [
      "Floating & Trunnion Ball Valves",
      "Dual Plate Wafer Check Valves",
      "High-Performance Triple Offset Butterfly Valves",
      "Forged Instrumentation Needle & Manifold Valves",
    ],

    technicalSpecs: {
      standardSpecifications: "API 6D, ASME B16.34, NORSOK M-630",
      sizeRange: '1/2" to 24" (DN15 to DN600)',
      pressureRating: "Class 150 to Class 1500",
      endConnections: "Flanged RF, RTJ, Butt Weld, Hub Ends",
      bodyMaterial: "ASTM A995 4A, ASTM A182 F51 / F60",
      trimMaterial: "Solid Duplex 2205 Trim with Devlon / PEEK Inserts",
      qualityTesting: "Ferric Chloride Pitting Test ASTM G48 Method A, Microstructure E562, PMI",
    },

    standardsCompliance: [
      "NORSOK M-650 — Qualification of Manufacturers of Special Materials",
      "API 6D — Pipeline Valves Specification",
      "NACE MR0175 / ISO 15156 — Petroleum and Natural Gas Industries Sour Service",
    ],

    manufacturingType: "NORSOK Qualified Cast / Forged Duplex",
    pressureRating: "150# to 1500#",
    temperatureRange: "-50°C to +280°C",
    tolerance: "Per ASME B16.34",
    certifications: "EN 10204 3.1 & 3.2 MTC with Microstructure & Impact Test at -46°C",

    industryApplications: [
      "Seawater reverse osmosis (SWRO) desalination plants",
      "Offshore oil & gas floating production (FPSO) units",
      "Chemical tanker cargo handling systems",
      "Subsea wellhead control manifolds and risers",
    ],

    forms: "Ball, Butterfly, Check, Needle Valves",
    application: "Desalination, Offshore Marine & Chloride Brine Handling",
  },

  // ============================================
  // 5. SUPER DUPLEX STEEL VALVES
  // ============================================
  {
    id: 5,
    slug: "super-duplex-steel-valves-manufacturer-in-mumbai",
    oldSlug: "super-duplex-steel-valves",
    image: checkValves,
    title: "Super Duplex Steel Valves",
    shortDescription:
      "UNS S32750 (2507), S32760 / ASTM A995 5A, 6A, A182 F53 High PREN (>42) Subsea & Flue Gas Desulfurization Valves.",
    materialGroup: "Super Duplex",
    standards: "API 6D, ASME B16.34, NORSOK M-630 MDS D54/D55, ISO 10423",

    overview:
      "Severe service super duplex 2507 (UNS S32750 / S32760) valves engineered with a Pitting Resistance Equivalent Number (PREN) exceeding 42. Specifically tested for subsea umbilicals, deepwater sour oil wells, and aggressive marine scrubber systems subjected to continuous hydrochloric and sulfuric acid exposure.",

    grades: [
      "UNS S32750 (Alloy 2507)",
      "UNS S32760 (Zeron 100)",
      "ASTM A995 Gr 5A (CE3MN)",
      "ASTM A995 Gr 6A (CD3MWCuN)",
      "ASTM A182 F53 / F55",
    ],

    supplyForms: [
      "Top Entry Trunnion Ball Valves",
      "Subsea Non-Return Check Valves",
      "Severe Service Choke Valves",
      "Triple Offset Bi-Directional Butterfly Valves",
    ],

    technicalSpecs: {
      standardSpecifications: "API 6D, ASME B16.34, NORSOK M-630 MDS D54",
      sizeRange: '1/2" to 20" (DN15 to DN500)',
      pressureRating: "Class 150 to Class 2500 / API 5000 to API 10000",
      endConnections: "Flanged RTJ, Hub Clamp, Butt Weld",
      bodyMaterial: "ASTM A995 5A/6A, ASTM A182 F53/F55",
      trimMaterial: "Solid Super Duplex S32750 / Stellite 6 Overlay",
      qualityTesting: "ASTM G48 Method A at 50°C, Charpy V-Notch at -46°C, Ferrite 35-55%",
    },

    standardsCompliance: [
      "NORSOK M-630 MDS D54/D55 — Super Duplex Castings and Forgings",
      "API 6A / ISO 10423 — Wellhead and Christmas Tree Equipment",
      "NACE MR0175 — Sulfide Stress Cracking Resistant",
    ],

    manufacturingType: "HIP Forged / Premium NORSOK Cast Super Duplex",
    pressureRating: "Class 150# to 2500# / API 10K",
    temperatureRange: "-50°C to +300°C",
    tolerance: "Per API 6D / ASME B16.34",
    certifications: "EN 10204 3.2 Third Party Inspection with Full Traceability",

    industryApplications: [
      "Subsea manifold control and Christmas trees",
      "Deepwater sour gas extraction platforms",
      "Marine scrubbers (FGD) and chlorinated wash systems",
      "High-pressure reverse osmosis high-pressure booster systems",
    ],

    forms: "Top Entry Ball, Subsea Check, Triple Offset Butterfly Valves",
    application: "Subsea, Severe Halogen Media & Deepwater Production",
  },

  // ============================================
  // 6. NICKEL ALLOY VALVES
  // ============================================
  {
    id: 6,
    slug: "nickel-alloy-valves-manufacturer-in-mumbai",
    oldSlug: "nickel-alloy-valves",
    image: butterflyValves,
    title: "Nickel Alloy Valves",
    shortDescription:
      "Nickel 200, 201, Alloy 20 (UNS N08020) High-Integrity Caustic Evaporation & Sulfuric Acid Chemical Valves.",
    materialGroup: "Nickel",
    standards: "ASME B16.34, API 602, ASTM B462, ASTM B473, BS 5351",

    overview:
      "High-purity Nickel 200, Nickel 201, and Alloy 20 (UNS N08020) valves specifically built for caustic soda evaporators, chlor-alkali cells, and hot sulfuric acid production. Immune to stress corrosion cracking in boiling alkaline solutions and offering total chemical passivation under aggressive oxidizers.",

    grades: [
      "Nickel 200 (UNS N02200)",
      "Nickel 201 (UNS N02201)",
      "Alloy 20 (UNS N08020 / Carpenter 20)",
      "ASTM B462 / B473",
      "ASTM A351 CN7M",
    ],

    supplyForms: [
      "Flanged Chemical Ball Valves",
      "Jacketed Plug Valves for Hot Caustic",
      "Forged Alloy 20 Needle Valves",
      "Bellows Sealed Zero Emission Globe Valves",
    ],

    technicalSpecs: {
      standardSpecifications: "ASME B16.34, API 602, ASTM B462",
      sizeRange: '1/2" to 16" (DN15 to DN400)',
      pressureRating: "Class 150 to Class 600",
      endConnections: "Flanged RF, Screwed NPT, Butt Weld",
      bodyMaterial: "Nickel 200/201, Alloy 20 (CN7M / N08020)",
      trimMaterial: "Solid Nickel 200 / Alloy 20 with PTFE / Grafoil Seals",
      qualityTesting: "Helium Leak Test, Hydrostatic Shell & Seat, Micro-structure, PMI",
    },

    standardsCompliance: [
      "ASME B16.34 — Valves Standard",
      "MSS SP-42 — Class 150 Corrosion Resistant Gate, Globe, Angle and Check Valves",
      "ASTM B462 — Forged or Rolled UNS N08020 Alloy Pipe Flanges and Valves",
    ],

    manufacturingType: "Forged Nickel / Premium Corrosion Cast",
    pressureRating: "Class 150# to 600#",
    temperatureRange: "-100°C to +500°C",
    tolerance: "Per ASME B16.34",
    certifications: "EN 10204 3.1 & 3.2 MTC with full Acid Corrosion Traceability",

    industryApplications: [
      "Caustic soda chlor-alkali production and evaporation",
      "Sulfuric acid pickling and manufacturing units",
      "Synthetic organic chemicals and fiber synthesis",
      "Fluorine and chlorine generation facilities",
    ],

    forms: "Ball, Plug, Globe, Check Valves",
    application: "Caustic Soda, Sulfuric Acid & Chlor-Alkali Chemical Plants",
  },

  // ============================================
  // 7. HIGH ALLOYS VALVES (Hastelloy, Inconel, Monel)
  // ============================================
  {
    id: 7,
    slug: "high-alloys-valves-manufacturer-in-mumbai",
    oldSlug: "high-alloys-valves",
    image: needleValves,
    title: "High Alloys Valves",
    shortDescription:
      "Hastelloy C276, Inconel 625/718, Monel 400 Severe Corrosion & Extreme Acid Industrial Valves.",
    materialGroup: "High Alloys",
    standards: "ASME B16.34, API 6D, ASTM B564, ASTM B574, ASTM B164",

    overview:
      "Superalloy high-performance valves manufactured from Hastelloy C276, Inconel 625, and Monel 400. Engineered to withstand the world's most severe industrial chemical environments: wet chlorine gas, hydrofluoric acid alkylation, boiling ferric chlorides, and high-velocity marine seawater.",

    grades: [
      "Hastelloy C276 (UNS N10276 / CW12MW)",
      "Inconel 625 (UNS N06625 / CW6MC)",
      "Inconel 718 (UNS N07718)",
      "Monel 400 (UNS N04400 / M35-1)",
      "Monel K500 (UNS N05500)",
    ],

    supplyForms: [
      "Trunnion & Floating Ball Valves",
      "HF Acid Alkylation Monel Plug Valves",
      "Hastelloy C276 Bellows Sealed Globe Valves",
      "Forged Inconel 625 Needle & Manifold Valves",
    ],

    technicalSpecs: {
      standardSpecifications: "ASME B16.34, API 6D, ASTM B564",
      sizeRange: '1/2" to 20" (DN15 to DN500)',
      pressureRating: "Class 150 to Class 2500 / API 10K",
      endConnections: "Flanged RF/RTJ, Socket Weld, Threaded NPT",
      bodyMaterial: "Hastelloy C276, Inconel 625, Monel 400",
      trimMaterial: "Matching Superalloy Trim / Stellite Hardfaced",
      qualityTesting: "Helium Mass Spectrometer Leak Test, Hydro Shell 1.5x, PMI, NACE MR0175",
    },

    standardsCompliance: [
      "ASTM B564 — Nickel Alloy Forgings",
      "API 6D — Pipeline Valves",
      "NACE MR0175 / ISO 15156 — Sour Gas Resistance",
    ],

    manufacturingType: "Forged Superalloy / Vacuum Cast",
    pressureRating: "150# to 2500#",
    temperatureRange: "-196°C to +980°C",
    tolerance: "Per ASME B16.34",
    certifications: "EN 10204 3.1 & 3.2 MTC with full Chemical Traceability",

    industryApplications: [
      "Hydrofluoric (HF) acid alkylation units",
      "Wet chlorine and hydrochloric acid chemical plants",
      "Nuclear power steam generator isolation",
      "Flue gas desulfurization (FGD) scrubbers",
      "Aerospace test benches and marine propellant systems",
    ],

    forms: "Ball, Gate, Globe, Check, Needle Valves",
    application: "Wet Chlorine, HF Acid, Superalloy Marine & Offshore Systems",
  },

  // ============================================
  // 8. TITANIUM VALVES
  // ============================================
  {
    id: 8,
    slug: "titanium-valves-manufacturer-in-mumbai",
    oldSlug: "titanium-valves",
    image: titaniumValves,
    title: "Titanium Valves",
    shortDescription:
      "Titanium Grade 2 & Grade 5 Lightweight Zero-Corrosion Ball, Butterfly & Check Valves for Seawater & Bleach Plants.",
    materialGroup: "Titanium",
    standards: "ASME B16.34, API 609, ASTM B367, ASTM B381, ISO 10434",

    overview:
      "Ultra-lightweight titanium Grade 2 (commercially pure) and Grade 5 (Ti-6Al-4V) valves designed for complete immunity to ambient and hot marine seawater, hypochlorite bleaches, chlorates, and wet chlorine. Provides instant spontaneous passivation with unmatched strength-to-weight ratios.",

    grades: [
      "Titanium Grade 2 (CP Ti / UNS R50400 / ASTM B367 Gr C2)",
      "Titanium Grade 5 (Ti-6Al-4V / UNS R56400 / ASTM B367 Gr C5)",
      "Titanium Grade 7 (Ti-0.15Pd Enhanced Acid)",
      "ASTM B381 Gr F2 / F5",
    ],

    supplyForms: [
      "Wafer & Lugged Titanium Butterfly Valves",
      "2-Piece Flanged Titanium Ball Valves",
      "Titanium Dual Plate Non-Return Check Valves",
      "Titanium Instrumentation Needle Valves",
    ],

    technicalSpecs: {
      standardSpecifications: "ASME B16.34, API 609, ASTM B367, ASTM B381",
      sizeRange: '1/2" to 24" (DN15 to DN600)',
      pressureRating: "Class 150 to Class 600 / PN 10 to PN 100",
      endConnections: "Flanged RF, Wafer Type, Lugged, Screwed",
      bodyMaterial: "Titanium Gr 2 / Gr 5 / Gr 7",
      trimMaterial: "Solid Titanium Trim with PTFE / Viton Seats",
      qualityTesting: "Hydro Shell & Seat, Helium Leak Testing, PMI, Dye Penetrant Inspection",
    },

    standardsCompliance: [
      "ASTM B367 — Titanium and Titanium Alloy Castings",
      "ASTM B381 — Titanium and Titanium Alloy Forgings",
      "ASME B16.34 — Valves Flanged, Threaded and Welding End",
    ],

    manufacturingType: "Precision Vacuum Cast / Die Forged Titanium",
    pressureRating: "150# to 600#",
    temperatureRange: "-50°C to +350°C",
    tolerance: "Per ASME B16.34",
    certifications: "EN 10204 3.1 & 3.2 MTC with full Mechanical Traceability",

    industryApplications: [
      "Desalination plant brine recirculation and intake systems",
      "Chlor-alkali cell houses and sodium hypochlorite plants",
      "Marine defense, naval vessels, and offshore platforms",
      "Pulp and paper chlorine dioxide bleaching towers",
    ],

    forms: "Ball, Butterfly, Check, Needle Valves",
    application: "Seawater Desalination, Chlor-Alkali & Marine Cooling Systems",
  },

  // ============================================
  // 9. SPECIALTY ALLOYS VALVES
  // ============================================
  {
    id: 9,
    slug: "alloys-valves-manufacturer-in-mumbai",
    oldSlug: "alloys-valves",
    image: alloyValves,
    title: "Alloys Valves",
    shortDescription:
      "Alloy 20, SMO 254, Alloy 28, Tantalum, Zirconium 702 & Nitronic Extreme Environment Valves.",
    materialGroup: "Alloys",
    standards: "ASME B16.34, API 6D, ASTM B462, ASTM B550, ASTM B521",

    overview:
      "Engineered specialty alloy valves manufactured from exotic metallurgies including SMO 254 (6% Moly), Alloy 28, Zirconium 702, Tantalum, and Nitronic 50/60. Built for critical process plants handling boiling nitric acid, phosphoric acid sludge, and high-velocity erosive chemical slurries.",

    grades: [
      "SMO 254 (UNS S31254 / F44)",
      "Alloy 20 (UNS N08020 / CN7M)",
      "Alloy 28 (UNS N08028)",
      "Zirconium 702 (UNS R60702)",
      "Tantalum (UNS R05200)",
      "Nitronic 50 / 60",
    ],

    supplyForms: [
      "Flanged Full Bore Ball Valves",
      "Severe Slurry Pinch & Diaphragm Valves",
      "Zero-Leakage Bellows Sealed Globe Valves",
      "Precision Instrument Manifold Valves",
    ],

    technicalSpecs: {
      standardSpecifications: "ASME B16.34, API 6D, ASTM B462",
      sizeRange: '1/2" to 16" (DN15 to DN400)',
      pressureRating: "Class 150 to Class 1500",
      endConnections: "Flanged RF, RTJ, Butt Weld, Threaded",
      bodyMaterial: "SMO 254, Alloy 20, Zirconium 702, Tantalum",
      trimMaterial: "Solid Exotic Alloy Trim / Stellite Overlay",
      qualityTesting: "Helium Mass Spec, Radiography 100%, Hydro Shell & Seat, ASTM G48",
    },

    standardsCompliance: [
      "ASME B16.34 — Valve Pressure-Temperature Standards",
      "ASTM B462 — Forged or Rolled Alloy Flanges and Valves",
      "NACE MR0175 — Severe Chemical Service Compliance",
    ],

    manufacturingType: "Vacuum Melting / Forged & CNC Machined",
    pressureRating: "Class 150# to 1500#",
    temperatureRange: "-196°C to +600°C",
    tolerance: "Per ASME B16.34",
    certifications: "EN 10204 3.1 & 3.2 Mill Test Certificates",

    industryApplications: [
      "Urea and nitric acid fertilizer plants",
      "Phosphoric acid production and gypsum slurry handling",
      "Nuclear spent fuel reprocessing lines",
      "Semiconductor high-purity chemical etching",
    ],

    forms: "Ball, Globe, Check, Diaphragm Valves",
    application: "Nitric Acid, Phosphoric Slurry & Nuclear Chemical Processing",
  },

  // ============================================
  // 10. COPPER NICKEL VALVES
  // ============================================
  {
    id: 10,
    slug: "copper-nickel-valves-manufacturer-in-mumbai",
    oldSlug: "copper-nickel-valves",
    image: copperValves,
    title: "Copper Nickel Valves",
    shortDescription:
      "CuNi 90/10 (C70600) & CuNi 70/30 (C71500) Marine Anti-Biofouling Seawater Cooling Gate, Globe & Ball Valves.",
    materialGroup: "Copper Nickel",
    standards: "ASME B16.34, BS 2874, DIN 86019, EEMUA 145, MIL-V-1189",

    overview:
      "Marine grade copper-nickel (CuNi 90/10 and CuNi 70/30) valves specifically formulated for continuous seawater circulation, shipboard bilge/ballast, and offshore firefighting systems. Features natural resistance to marine biofouling (barnacles, algae) and superior resistance to seawater impingement turbulence.",

    grades: [
      "CuNi 90/10 (UNS C70600 / CW352H)",
      "CuNi 70/30 (UNS C71500 / CW354H)",
      "DIN 2.0872 / DIN 2.0882",
      "NES 779 / NES 780",
    ],

    supplyForms: [
      "Bronze-CuNi Flanged Gate Valves",
      "CuNi 90/10 Seawater Ball Valves",
      "Wafer Pattern Dual Plate Check Valves",
      "CuNi Storm & Bilge Overboard Discharge Valves",
    ],

    technicalSpecs: {
      standardSpecifications: "ASME B16.34, EEMUA 145, DIN 86019, BS 2874",
      sizeRange: '1/2" to 16" (DN15 to DN400)',
      pressureRating: "Class 150 / PN 10, PN 16, PN 25",
      endConnections: "Flanged EEMUA / DIN / ASME, Composite Welded Ends",
      bodyMaterial: "CuNi 90/10, CuNi 70/30, Marine Gunmetal with CuNi Trim",
      trimMaterial: "Solid CuNi 70/30 or Monel Trim with PTFE Seats",
      qualityTesting: "Hydrostatic Shell 1.5x, Hydro Seat 1.1x, PMI, Seawater Impingement Proof",
    },

    standardsCompliance: [
      "EEMUA 145 — 90/10 Copper Nickel Flanges & Valve Components",
      "DIN 86019 — Copper-Nickel Alloy Pipes and Valves for Ships",
      "BS 2874 — Specification for Copper and Copper Alloy Rods and Sections",
      "MIL-V-1189 — Valves, Gate, Globe and Check for Naval Shipboard Service",
    ],

    manufacturingType: "Forged CuNi / Precision Marine Cast",
    pressureRating: "Class 150 / PN 10 to PN 25",
    temperatureRange: "-29°C to +260°C",
    tolerance: "Per EEMUA 145 / DIN 86019",
    certifications: "EN 10204 3.1 MTC, Marine Classification Society (DNV, LR, BV, IRS)",

    industryApplications: [
      "Naval surface combatants and submarine seawater cooling",
      "Commercial cargo ship bilge and ballast systems",
      "Offshore oil platform firewater ring mains",
      "Coastal power station condenser cooling circuits",
    ],

    forms: "Ball, Gate, Globe, Check Valves",
    application: "Shipboard Marine, Seawater Cooling & Offshore Firewater",
  },

  // ============================================
  // 11. BRASS VALVES
  // ============================================
  {
    id: 11,
    slug: "brass-valves-manufacturer-in-mumbai",
    oldSlug: "brass-valves",
    image: brassValves,
    title: "Brass Valves",
    shortDescription:
      "Naval Brass (C46400), Free Cutting (C36000), Forged Brass (C37700) Ball, Gate, Check & Needle Plumbing Valves.",
    materialGroup: "Brass",
    standards: "ASTM B21, ASTM B16, ASTM B124, IS 319, EN 12165 CW617N, BS 5154",

    overview:
      "High-precision hot forged and extruded brass valves manufactured from CW617N, C36000, and C46400 (Naval Brass). Engineered for plumbing, HVAC, gas distribution, marine instrumentation, and pneumatic machinery where spark resistance, low friction, and exceptional machinability are paramount.",

    grades: [
      "Free Cutting Brass (UNS C36000 / IS 319 Gr 1)",
      "Forging Brass (UNS C37700 / EN 12165 CW617N)",
      "Naval Brass (UNS C46400 / IS 291)",
      "Lead-Free Drinking Water Brass (CW511L)",
      "High Tensile Brass (Manganese Bronze C67500)",
    ],

    supplyForms: [
      "Full Port Screwed BSP/NPT Brass Ball Valves",
      "Solid Wedge Screwed Brass Gate Valves",
      "Vertical Spring Loaded & Swing Brass Check Valves",
      "Precision Turned Miniature Needle Valves",
      "Gas Appliance Certified T-Handle Valves",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B124, ASTM B16, EN 12165, IS 319, BS 5154",
      sizeRange: '1/4" to 4" (DN8 to DN100)',
      pressureRating: "PN 16 to PN 40 / 300 to 600 WOG",
      endConnections: "Threaded Female x Female (BSPP, BSPT, NPT), Solder Ends",
      bodyMaterial: "Forged Brass CW617N / C37700, Extruded Naval Brass C46400",
      trimMaterial: "Hard Chrome Plated Brass Ball, Virgin PTFE Seats",
      qualityTesting: "100% Pneumatic Air Seat Tested at 6 Bar, Hydro Shell at 1.5x PN",
    },

    standardsCompliance: [
      "EN 12165 — Copper and Copper Alloys Wrought Products for Forging",
      "IS 319 — Free Cutting Brass Bars, Rods and Sections",
      "BS 5154 — Specification for Copper Alloy Globe, Globe Stop and Check Valves",
      "MSS SP-110 — Ball Valves Threaded, Socket-Welding, Solder Joint",
    ],

    manufacturingType: "Hot Drop Forged & CNC Precision Turned",
    pressureRating: "PN 16, PN 25, PN 40 (Up to 600 PSI)",
    temperatureRange: "-20°C to +150°C",
    tolerance: "Per ISO 228 / ANSI B1.20.1",
    certifications: "EN 10204 2.2 / 3.1 Test Certification, CE / WRAS compliant",

    industryApplications: [
      "Commercial and industrial plumbing & sanitary water lines",
      "HVAC hydronic heating and chilled water loops",
      "Pneumatic automated air systems and compressor manifolds",
      "LPG, natural gas and domestic fuel distribution",
      "Marine engine auxiliary cooling and gauge glass isolation",
    ],

    forms: "Ball, Gate, Check, Needle Valves",
    application: "Plumbing, HVAC, Pneumatic & Low-Pressure Gas/Water Distribution",
  },
  {
    id: 12,
    slug: "aluminium-valves-manufacturer-in-mumbai",
    oldSlug: "aluminium-valves",
    image: butterflyValves,
    title: "Aluminium Valves",
    shortDescription:
      "Alloy 6061-T6, A356 Cast Aluminium Lightweight Butterfly Valves, Ball Valves & Pneumatic Check Valves.",
    materialGroup: "Aluminium",
    standards: "API 609, ASME B16.34, EN 593, ISO 5211",

    overview:
      "Lightweight, corrosion-resistant industrial aluminium valves engineered from forged 6061-T6 and cast A356 aluminium alloys. Delivering up to 60% weight reduction compared to cast iron or steel valves, making them ideal for mobile road tankers, aviation refuelling lines, bulk powder pneumatic systems, and HVAC water circuits.",

    grades: [
      "Aluminium 6061-T6 (Forged & CNC Machined Body)",
      "Cast Aluminium Alloy A356 / LM25 (Die Cast Body)",
      "Anodized Aluminium Disc / Shaft",
    ],

    supplyForms: [
      "Wafer & Lug Type Butterfly Valves (DN50 to DN300)",
      "Two-Piece & Three-Piece Ball Valves (Threaded / Flanged)",
      "Pneumatic Dual Plate Check Valves",
      "Bulk Powder Butterfly Valves with Rubber Liner",
    ],

    technicalSpecs: {
      standardSpecifications: "API 609, ASME B16.34, EN 593",
      nominalSize: '1" to 12" (DN25 to DN300)',
      pressureRating: "PN10, PN16 / Class 150",
      operatingTemperature: "-30°C to +120°C",
      bodyMaterial: "Aluminium 6061-T6 / Cast LM25",
      discMaterial: "Aluminium / SS 316 / Al-Bronze",
      seatMaterial: "EPDM, NBR, Viton, PTFE",
      qualityTesting: "Hydrostatic Shell Test 1.5x, Seat Air Test 6 Bar, API 598",
    },

    industryApplications: [
      "Mobile aluminium fuel road tankers and aviation refuelling carts",
      "Pneumatic bulk conveying silos for plastic pellets, flour, and grain",
      "HVAC chilled water and condenser water balancing circuits",
      "Water desalination reverse osmosis low-pressure brine lines",
    ],

    forms: "Butterfly Valves, Ball Valves, Check Valves, Tank Bottom Valves",
    application: "Road Tankers, Aviation Refuelling, Bulk Powder Silos, HVAC",
  },
];

export default valves;

