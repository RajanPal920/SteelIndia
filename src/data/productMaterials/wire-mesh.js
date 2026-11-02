// src/data/productMaterials/wireMesh.js

// ============================================
// IMAGE IMPORTS — Only these 6 images
// ============================================
import woven from "../../../public/images/stock/woven-wire-mesh.jpg";
import weld from "../../../public/images/stock/welded-wire-mesh.jpg";
import crim from "../../../public/images/stock/crimped-wire-mesh.jpg";
import chain from "../../../public/images/stock/chain-link-mesh.jpg";
import stain from "../../../public/images/stock/stainless-steel-wire-mesh.jpg";
import hex from "../../../public/images/stock/hexagonal-wire-netting.jpg";
import cuniImg from "../../../public/images/stock/copper-nickel-sheets.jpg";
import brass from "../../../public/images/stock/brass-wiremesh.jpg";

// ============================================
// WIRE MESH — 9 Products
// ============================================
const wireMesh = [
  // ============================================
  // 1. WOVEN WIRE MESH
  // ============================================
  {
    id: 1,
    slug: "woven-wire-mesh-manufacturer-in-mumbai",
    oldSlug: "woven-wire-mesh",
    image: woven,
    title: "Woven Wire Mesh",
    shortDescription:
      "Plain Weave, Twilled Weave, Plain Dutch Weave, Twilled Dutch Weave, Reverse Dutch Weave (1 Mesh to 635 Mesh).",
    materialGroup: "Woven Screens",
    standards: "ASTM E2016, ASTM E11, ISO 9044, DIN 4189, BS 410, ASME B36.10M",

    overview:
      "Precision woven wire mesh manufactured from high-quality stainless steel, carbon steel, and non-ferrous wires. Available in Plain Weave, Twilled Weave, Plain Dutch Weave, Twilled Dutch Weave, and Reverse Dutch Weave configurations ranging from 1 Mesh to 635 Mesh. Engineered for filtration, screening, sieving, and industrial processing applications with superior accuracy and durability.",

    grades: [
      "SS 304",
      "SS 304L",
      "SS 316",
      "SS 316L",
      "SS 310S",
      "SS 321",
      "SS 347",
      "SS 904L",
      "Carbon Steel",
      "Galvanized Steel",
      "Brass",
      "Copper",
      "Monel",
      "Nickel",
    ],

    supplyForms: [
      "Plain Weave Mesh",
      "Twilled Weave Mesh",
      "Plain Dutch Weave Mesh",
      "Twilled Dutch Weave Mesh",
      "Reverse Dutch Weave Mesh",
      "Micron Filter Cloth",
      "Sieve Screens",
      "Wire Gauze",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM E2016, ASTM E11, ISO 9044, DIN 4189, BS 410, ASME B36.10M",
      meshCount: "1 Mesh to 635 Mesh",
      wireDiameter: "0.020 mm to 5.0 mm",
      apertureSize: "0.020 mm to 25.4 mm",
      rollWidth: "0.5 m to 2.0 m",
      rollLength: "10 m to 50 m (Custom Cut Lengths Available)",
      materialGrades: "SS 304/316/316L, CS, GI, Brass, Copper, Monel, Nickel",
      surfaceFinish: "Plain, Pickled, Passivated, Polished, Galvanized",
      manufacturingMethods: "Plain Weave, Twilled Weave, Dutch Weave",
      qualityTesting: "Mesh Count, Aperture Size, Tensile, Dimensional",
    },

    standardsCompliance: [
      "ASTM E2016 — Industrial Woven Wire Cloth",
      "ASTM E11 — Woven Wire Test Sieve Cloth and Test Sieves",
      "ISO 9044 — Industrial Woven Wire Cloth",
      "DIN 4189 — Woven Wire Cloth",
      "BS 410 — Test Sieves",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Woven / Plain Weave / Twilled Weave / Dutch Weave",
    pressureRating: "N/A (Filtration)",
    temperatureRange: "-196°C to +800°C",
    tolerance: "Per ASTM E2016 / ISO 9044",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Filtration and separation equipment",
      "Screening and sieving",
      "Security fencing and partitions",
      "Industrial processing and sieving",
      "Chemical and petrochemical processing",
      "Food, beverage, and pharmaceutical",
    ],

    forms: "1 Mesh to 635 Mesh",
    application:
      "Filtration, screening, sieving, security fencing, and industrial processing",
  },

  // ============================================
  // 2. WELDED WIRE MESH
  // ============================================
  {
    id: 2,
    slug: "welded-wire-mesh-manufacturer-in-mumbai",
    oldSlug: "welded-wire-mesh",
    image: weld,
    title: "Welded Wire Mesh",
    shortDescription:
      "Square Openings, Rectangular Slots, Heavy-Gauge Concrete Reinforcement Sheets, Coated/Galvanized Weld Grid Rolls.",
    materialGroup: "Welded Matrix",
    standards: "ASTM A185, ASTM A497, ASTM A1064, BS 4483, EN 10080, IS 1566",

    overview:
      "Heavy-duty welded wire mesh manufactured from high-quality carbon steel, stainless steel, and galvanized wires. Available in Square Openings, Rectangular Slots, and Heavy-Gauge Concrete Reinforcement configurations. Engineered for construction reinforcement, fencing, cages, partitions, and industrial applications with superior strength and durability.",

    grades: [
      "Mild Steel (MS)",
      "High Tensile Steel (HT)",
      "Galvanized Iron (GI)",
      "PVC Coated",
      "SS 304",
      "SS 316",
      "SS 316L",
    ],

    supplyForms: [
      "Square Opening Mesh",
      "Rectangular Slot Mesh",
      "Concrete Reinforcement Sheets",
      "Coated Weld Grid Rolls",
      "Galvanized Weld Grid Rolls",
      "Heavy-Gauge Panels",
      "Welded Mesh Rolls",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A185, ASTM A497, ASTM A1064, BS 4483, EN 10080, IS 1566",
      wireDiameter: "1.0 mm to 12.0 mm",
      meshOpening: "6 mm to 300 mm",
      rollWidth: "0.5 m to 2.5 m",
      rollLength: "10 m to 50 m (Custom Cut Lengths Available)",
      panelSize: "1 m x 2 m, 1.2 m x 2.4 m, 2 m x 3 m (Custom Sizes Available)",
      materialGrades: "MS, HT, GI, PVC Coated, SS 304/316/316L",
      surfaceFinish: "Plain, Galvanized, PVC Coated, Epoxy Coated",
      manufacturingMethods: "Welded, Galvanized, PVC Coated",
      qualityTesting: "Tensile, Weld Strength, Dimensional, Coating Thickness",
    },

    standardsCompliance: [
      "ASTM A185 — Steel Welded Wire Reinforcement, Plain, for Concrete",
      "ASTM A497 — Steel Welded Wire Reinforcement, Deformed, for Concrete",
      "ASTM A1064 — Carbon-Steel Wire and Welded Wire Reinforcement",
      "BS 4483 — Steel Fabric for the Reinforcement of Concrete",
      "EN 10080 — Steel for the Reinforcement of Concrete",
      "IS 1566 — Hard Drawn Steel Wire Fabric for Concrete Reinforcement",
    ],

    manufacturingType: "Welded / Galvanized / PVC Coated",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-29°C to +400°C",
    tolerance: "Per ASTM A185 / BS 4483",
    certifications: "EN 10204 3.1 MTC",

    industryApplications: [
      "Concrete reinforcement and construction",
      "Fencing and security enclosures",
      "Cages and partitions",
      "Industrial flooring and grating",
      "Agricultural and poultry farming",
      "Material handling and storage",
    ],

    forms: "Coated/Galvanized Weld Grid Rolls",
    application:
      "Construction reinforcement, fencing, cages, partitions, and industrial applications",
  },

  // ============================================
  // 3. CRIMPED WIRE MESH
  // ============================================
  {
    id: 3,
    slug: "crimped-wire-mesh-manufacturer-in-mumbai",
    oldSlug: "crimped-wire-mesh",
    image: crim,
    title: "Crimped Wire Mesh",
    shortDescription:
      "Plain Crimped, Intermediate Crimped, Lock Crimped, Flat Top Crimped (Heavy Structural Stone & Aggregate Vibrating Screens).",
    materialGroup: "Crimped Screens",
    standards: "ASTM E2016, ISO 9044, DIN 4189, BS 410, IS 460",

    overview:
      "Heavy-duty crimped wire mesh manufactured from high-carbon steel, manganese steel, and stainless steel wires. Available in Plain Crimped, Intermediate Crimped, Lock Crimped, and Flat Top Crimped configurations. Engineered for mining, quarrying, stone crushing, and screening applications with superior strength and wear resistance.",

    grades: [
      "High Carbon Steel",
      "Manganese Steel",
      "Spring Steel",
      "SS 304",
      "SS 316",
      "SS 316L",
      "Galvanized Steel",
    ],

    supplyForms: [
      "Plain Crimped Mesh",
      "Intermediate Crimped Mesh",
      "Lock Crimped Mesh",
      "Flat Top Crimped Mesh",
      "Vibrating Screen Panels",
      "Heavy Structural Screens",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM E2016, ISO 9044, DIN 4189, BS 410, IS 460",
      wireDiameter: "1.0 mm to 12.0 mm",
      meshOpening: "2 mm to 100 mm",
      panelWidth: "0.5 m to 2.5 m",
      panelLength: "1 m to 6 m (Custom Cut Lengths Available)",
      materialGrades: "High Carbon Steel, Manganese, Spring Steel, SS 304/316",
      surfaceFinish: "Plain, Galvanized, Painted, Epoxy Coated",
      manufacturingMethods: "Crimped, Woven, Locked",
      qualityTesting: "Tensile, Wear Resistance, Dimensional, Aperture Size",
    },

    standardsCompliance: [
      "ASTM E2016 — Industrial Woven Wire Cloth",
      "ISO 9044 — Industrial Woven Wire Cloth",
      "DIN 4189 — Woven Wire Cloth",
      "BS 410 — Test Sieves",
      "IS 460 — Specification for Test Sieves",
    ],

    manufacturingType: "Crimped / Woven / Locked",
    pressureRating: "N/A (Screening)",
    temperatureRange: "-29°C to +600°C",
    tolerance: "Per ASTM E2016 / ISO 9044",
    certifications: "EN 10204 3.1 MTC",

    industryApplications: [
      "Mining and quarrying",
      "Stone crushing and screening",
      "Aggregate processing",
      "Coal preparation plants",
      "Vibrating screen decks",
      "Industrial sieving and sizing",
    ],

    forms: "Heavy Structural Stone & Aggregate Vibrating Screens",
    application:
      "Mining, quarrying, stone crushing, and screening applications",
  },

  // ============================================
  // 4. CHAIN LINK MESH
  // ============================================
  {
    id: 4,
    slug: "chain-link-mesh-manufacturer-in-mumbai",
    oldSlug: "chain-link-mesh",
    image: chain,
    title: "Chain Link Mesh",
    shortDescription:
      "Galvanized Iron (GI), PVC Coated Core, Heavy-Duty Perimeter Fencing Coils, High-Security Enclosure Matrices, Knuckled & Twisted Edge Finishes.",
    materialGroup: "Interlocking Diamond",
    standards: "ASTM A392, ASTM A491, ASTM A817, BS 1722, EN 10223, IS 2721",

    overview:
      "Heavy-duty chain link mesh manufactured from Galvanized Iron (GI) and PVC Coated Core wires. Available in Heavy-Duty Perimeter Fencing Coils, High-Security Enclosure Matrices, and Knuckled & Twisted Edge Finishes. Engineered for perimeter fencing, sports grounds, industrial security, agricultural, and residential applications with superior strength and weather resistance.",

    grades: [
      "Galvanized Iron (GI)",
      "PVC Coated Core",
      "Hot-Dip Galvanized",
      "Electro-Galvanized",
      "SS 304",
      "SS 316",
    ],

    supplyForms: [
      "Heavy-Duty Perimeter Fencing Coils",
      "High-Security Enclosure Matrices",
      "Knuckled Edge Finishes",
      "Twisted Edge Finishes",
      "Chain Link Rolls",
      "Chain Link Panels",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A392, ASTM A491, ASTM A817, BS 1722, EN 10223, IS 2721",
      wireDiameter: "1.5 mm to 5.0 mm",
      meshOpening: "25 mm to 100 mm",
      rollWidth: "0.9 m to 3.0 m",
      rollLength: "10 m to 50 m (Custom Cut Lengths Available)",
      materialGrades: "GI, PVC Coated, HDG, Electro-Galvanized, SS 304/316",
      surfaceFinish: "Galvanized, PVC Coated, Epoxy Coated, Powder Coated",
      manufacturingMethods: "Woven, Galvanized, PVC Coated",
      qualityTesting: "Tensile, Coating Thickness, Dimensional, Mesh Size",
    },

    standardsCompliance: [
      "ASTM A392 — Zinc-Coated Steel Chain-Link Fence Fabric",
      "ASTM A491 — Aluminum-Coated Steel Chain-Link Fence Fabric",
      "ASTM A817 — Metallic-Coated Steel Wire for Chain-Link Fence Fabric",
      "BS 1722 — Fences",
      "EN 10223 — Steel Wire and Wire Products for Fencing",
      "IS 2721 — Galvanized Steel Chain Link Fence Fabric",
    ],

    manufacturingType: "Woven / Galvanized / PVC Coated",
    pressureRating: "N/A (Fencing)",
    temperatureRange: "-29°C to +200°C",
    tolerance: "Per ASTM A392 / BS 1722",
    certifications: "EN 10204 3.1 MTC",

    industryApplications: [
      "Perimeter fencing and security",
      "Sports grounds and playgrounds",
      "Industrial security enclosures",
      "Agricultural and farm fencing",
      "Residential and commercial fencing",
      "Highway and railway fencing",
    ],

    forms:
      "Heavy-Duty Perimeter Fencing Coils, High-Security Enclosure Matrices, Knuckled & Twisted Edge Finishes",
    application:
      "Perimeter fencing, sports grounds, industrial security, agricultural, and residential applications",
  },

  // ============================================
  // 5. STAINLESS STEEL WIRE MESH
  // ============================================
  {
    id: 5,
    slug: "stainless-steel-wire-mesh-manufacturer-in-mumbai",
    oldSlug: "stainless-steel-wire-mesh",
    image: stain,
    title: "Stainless Steel Wire Mesh",
    shortDescription:
      "SS 304, 304L, 316, 316L, 904L, High-Density Micron Filter Cloth, Fine Chemical Screening Sieve Runs, Corrosive Resistant Industrial Wire Gauzes.",
    materialGroup: "Stainless Steel",
    standards: "ASTM A240, ASTM A276, ASTM E2016, ISO 9044, DIN 4189, BS 410",

    overview:
      "Premium stainless steel wire mesh manufactured from SS 304, 304L, 316, 316L, and 904L grades. Available in High-Density Micron Filter Cloth, Fine Chemical Screening Sieve Runs, and Corrosive Resistant Industrial Wire Gauzes. Engineered for filtration, food processing, pharmaceutical, and chemical industries with superior corrosion resistance and durability.",

    grades: [
      "SS 304",
      "SS 304L",
      "SS 316",
      "SS 316L",
      "SS 317L",
      "SS 321",
      "SS 347",
      "SS 904L",
    ],

    supplyForms: [
      "High-Density Micron Filter Cloth",
      "Fine Chemical Screening Sieve Runs",
      "Corrosive Resistant Industrial Wire Gauzes",
      "Square Weave Mesh",
      "Twilled Weave Mesh",
      "Dutch Weave Mesh",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A240, ASTM A276, ASTM E2016, ISO 9044, DIN 4189, BS 410",
      meshCount: "1 Mesh to 635 Mesh",
      wireDiameter: "0.020 mm to 2.0 mm",
      apertureSize: "0.020 mm to 25.4 mm",
      rollWidth: "0.5 m to 2.0 m",
      rollLength: "10 m to 50 m (Custom Cut Lengths Available)",
      materialGrades: "SS 304/304L/316/316L/317L/321/347/904L",
      surfaceFinish: "Plain, Pickled, Passivated, Polished",
      manufacturingMethods: "Woven, Plain Weave, Twilled Weave, Dutch Weave",
      qualityTesting: "PMI, Mesh Count, Aperture Size, Tensile, Dimensional",
    },

    standardsCompliance: [
      "ASTM A240 — Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip",
      "ASTM A276 — Stainless Steel Bars and Shapes",
      "ASTM E2016 — Industrial Woven Wire Cloth",
      "ISO 9044 — Industrial Woven Wire Cloth",
      "DIN 4189 — Woven Wire Cloth",
      "BS 410 — Test Sieves",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Woven / Plain Weave / Twilled Weave / Dutch Weave",
    pressureRating: "N/A (Filtration)",
    temperatureRange: "-196°C to +800°C",
    tolerance: "Per ASTM E2016 / ISO 9044",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Filtration and separation equipment",
      "Food processing and dairy",
      "Pharmaceutical and biotech",
      "Chemical and petrochemical",
      "Water treatment and desalination",
      "High-purity semiconductor",
    ],

    forms:
      "High-Density Micron Filter Cloth, Fine Chemical Screening Sieve Runs, Corrosive Resistant Industrial Wire Gauzes",
    application:
      "Filtration, food processing, pharmaceutical, and chemical industries",
  },

  // ============================================
  // 6. HEXAGONAL WIRE NETTING
  // ============================================
  {
    id: 6,
    slug: "hexagonal-wire-netting-manufacturer-in-mumbai",
    oldSlug: "hexagonal-wire-netting",
    image: hex,
    title: "Hexagonal Wire Netting",
    shortDescription:
      "Normal Twist Netting, Reverse Twist, Heavy-Gauge Earth Gabion Boxes, Pipeline Thermal Insulation Wrap Mesh.",
    materialGroup: "Hexagonal Twist",
    standards: "ASTM A975, ASTM A974, BS 1485, EN 10223-3, IS 2781",

    overview:
      "Heavy-duty hexagonal wire netting manufactured from galvanized, PVC coated, and stainless steel wires. Available in Normal Twist Netting, Reverse Twist, Heavy-Gauge Earth Gabion Boxes, and Pipeline Thermal Insulation Wrap Mesh. Engineered for poultry fencing, agriculture, insulation support, gabions, and erosion control with superior strength and weather resistance.",

    grades: [
      "Galvanized Iron (GI)",
      "PVC Coated",
      "Hot-Dip Galvanized",
      "Electro-Galvanized",
      "SS 304",
      "SS 316",
    ],

    supplyForms: [
      "Normal Twist Netting",
      "Reverse Twist Netting",
      "Heavy-Gauge Earth Gabion Boxes",
      "Pipeline Thermal Insulation Wrap Mesh",
      "Hexagonal Wire Rolls",
      "Gabion Mattresses",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A975, ASTM A974, BS 1485, EN 10223-3, IS 2781",
      wireDiameter: "0.5 mm to 4.0 mm",
      meshOpening: "12 mm to 100 mm",
      rollWidth: "0.5 m to 2.0 m",
      rollLength: "10 m to 50 m (Custom Cut Lengths Available)",
      gabionBoxSize:
        "1 x 1 x 1 m, 2 x 1 x 1 m, 3 x 1 x 1 m (Custom Sizes Available)",
      materialGrades: "GI, PVC Coated, HDG, Electro-Galvanized, SS 304/316",
      surfaceFinish: "Galvanized, PVC Coated, Zinc-Aluminum Coated",
      manufacturingMethods: "Hexagonal Weave, Twisted, Galvanized, PVC Coated",
      qualityTesting: "Tensile, Coating Thickness, Dimensional, Mesh Size",
    },

    standardsCompliance: [
      "ASTM A975 — Double-Twisted Hexagonal Mesh Gabions and Revet Mattresses",
      "ASTM A974 — Welded Wire Fabric Gabions and Gabion Mattresses",
      "BS 1485 — Galvanized Steel Wire for Fencing",
      "EN 10223-3 — Steel Wire and Wire Products for Fencing — Hexagonal Wire Netting",
      "IS 2781 — Galvanized Steel Wire for Fencing",
    ],

    manufacturingType: "Hexagonal Weave / Twisted / Galvanized / PVC Coated",
    pressureRating: "N/A (Fencing)",
    temperatureRange: "-29°C to +200°C",
    tolerance: "Per ASTM A975 / BS 1485",
    certifications: "EN 10204 3.1 MTC",

    industryApplications: [
      "Poultry fencing and agriculture",
      "Insulation support and cladding",
      "Gabions and erosion control",
      "Retaining walls and slope protection",
      "Marine and riverbank protection",
      "Highway and railway fencing",
    ],

    forms:
      "Heavy-Gauge Earth Gabion Boxes, Pipeline Thermal Insulation Wrap Mesh",
    application:
      "Poultry fencing, agriculture, insulation support, gabions, and erosion control",
  },

  // ============================================
  // 7. DUTCH WEAVE WIRE MESH
  // ============================================
  {
    id: 7,
    slug: "dutch-weave-wire-mesh-manufacturer-in-mumbai",
    oldSlug: "dutch-weave-wire-mesh",
    image: woven,
    title: "Dutch Weave Wire Mesh",
    shortDescription:
      "Plain Dutch Weave, Twilled Dutch Weave, Reverse Dutch Weave, Five-Heddle Weave for High-Pressure Filtration & Polymer Processing.",
    materialGroup: "Dutch Weave",
    standards: "ASTM E2016, ISO 9044, DIN 4189, BS 410, IS 460",

    overview:
      "Precision Dutch weave wire mesh manufactured from stainless steel, Monel, and specialty alloys. Available in Plain Dutch Weave, Twilled Dutch Weave, Reverse Dutch Weave, and Five-Heddle Weave configurations. Engineered for high-pressure filtration, polymer processing, and hydraulic applications with superior strength and micron retention.",

    grades: [
      "SS 304",
      "SS 316",
      "SS 316L",
      "SS 904L",
      "Monel 400",
      "Nickel 200",
      "Hastelloy C276",
    ],

    supplyForms: [
      "Plain Dutch Weave Mesh",
      "Twilled Dutch Weave Mesh",
      "Reverse Dutch Weave Mesh",
      "Five-Heddle Weave Mesh",
      "High-Pressure Filter Cloth",
      "Polymer Filter Screens",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM E2016, ISO 9044, DIN 4189, BS 410, IS 460",
      meshCount: "8 Mesh to 400 Mesh",
      wireDiameter: "0.025 mm to 1.0 mm",
      apertureSize: "0.015 mm to 2.0 mm",
      rollWidth: "0.5 m to 1.5 m",
      rollLength: "10 m to 30 m (Custom Cut Lengths Available)",
      materialGrades:
        "SS 304/316/316L/904L, Monel 400, Nickel 200, Hastelloy C276",
      surfaceFinish: "Plain, Pickled, Passivated, Polished",
      manufacturingMethods: "Dutch Weave, Plain Weave, Twilled Weave",
      qualityTesting: "PMI, Mesh Count, Aperture Size, Tensile, Dimensional",
    },

    standardsCompliance: [
      "ASTM E2016 — Industrial Woven Wire Cloth",
      "ISO 9044 — Industrial Woven Wire Cloth",
      "DIN 4189 — Woven Wire Cloth",
      "BS 410 — Test Sieves",
      "IS 460 — Specification for Test Sieves",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Dutch Weave / Plain Weave / Twilled Weave",
    pressureRating: "N/A (Filtration)",
    temperatureRange: "-196°C to +800°C",
    tolerance: "Per ASTM E2016 / ISO 9044",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "High-pressure filtration",
      "Polymer processing and extrusion",
      "Hydraulic and fuel filtration",
      "Chemical and petrochemical",
      "Pharmaceutical and biotech",
      "Water treatment and desalination",
    ],

    forms: "Plain Dutch Weave, Twilled Dutch Weave, Reverse Dutch Weave",
    application:
      "High-pressure filtration, polymer processing, and hydraulic applications",
  },

  // ============================================
  // 8. GABION WIRE MESH
  // ============================================
  {
    id: 8,
    slug: "gabion-wire-mesh-manufacturer-in-mumbai",
    oldSlug: "gabion-wire-mesh",
    image: hex,
    title: "Gabion Wire Mesh",
    shortDescription:
      "Heavy-Gauge Double-Twist Hexagonal Gabion Boxes, Revet Mattresses, PVC Coated & Galvanized for Erosion Control & Retaining Walls.",
    materialGroup: "Gabion Mesh",
    standards: "ASTM A975, ASTM A974, EN 10223-3, BS 1485, IS 16014",

    overview:
      "Heavy-duty gabion wire mesh manufactured from galvanized, PVC coated, and zinc-aluminum coated wires. Available in Heavy-Gauge Double-Twist Hexagonal Gabion Boxes and Revet Mattresses. Engineered for erosion control, retaining walls, slope protection, and marine applications with superior strength and durability.",

    grades: [
      "Hot-Dip Galvanized",
      "Zinc-Aluminum Coated (Galfan)",
      "PVC Coated",
      "Electro-Galvanized",
      "SS 304",
      "SS 316",
    ],

    supplyForms: [
      "Gabion Boxes",
      "Revet Mattresses",
      "Gabion Baskets",
      "Gabion Mattresses",
      "Custom Fabricated Gabions",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A975, ASTM A974, EN 10223-3, BS 1485, IS 16014",
      wireDiameter: "2.0 mm to 4.0 mm",
      meshOpening: "60 mm x 80 mm, 80 mm x 100 mm, 100 mm x 120 mm",
      gabionBoxSize:
        "1 x 1 x 1 m, 2 x 1 x 1 m, 3 x 1 x 1 m (Custom Sizes Available)",
      materialGrades: "HDG, Galfan, PVC Coated, Electro-Galvanized, SS 304/316",
      surfaceFinish: "Galvanized, PVC Coated, Zinc-Aluminum Coated",
      manufacturingMethods: "Double-Twist Hexagonal Weave, Galvanized",
      qualityTesting: "Tensile, Coating Thickness, Dimensional, Mesh Size",
    },

    standardsCompliance: [
      "ASTM A975 — Double-Twisted Hexagonal Mesh Gabions and Revet Mattresses",
      "ASTM A974 — Welded Wire Fabric Gabions and Gabion Mattresses",
      "EN 10223-3 — Steel Wire and Wire Products for Fencing — Hexagonal Wire Netting",
      "BS 1485 — Galvanized Steel Wire for Fencing",
      "IS 16014 — Gabions and Revet Mattresses",
    ],

    manufacturingType: "Double-Twist Hexagonal Weave / Galvanized / PVC Coated",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-29°C to +200°C",
    tolerance: "Per ASTM A975 / EN 10223-3",
    certifications: "EN 10204 3.1 MTC",

    industryApplications: [
      "Erosion control and slope protection",
      "Retaining walls and embankments",
      "Riverbank and shoreline protection",
      "Marine and coastal defense",
      "Highway and railway infrastructure",
      "Landscaping and architectural",
    ],

    forms: "Heavy-Gauge Double-Twist Hexagonal Gabion Boxes",
    application:
      "Erosion control, retaining walls, slope protection, and marine applications",
  },

  // ============================================
  // 9. PVC COATED WIRE MESH
  // ============================================
  {
    id: 9,
    slug: "pvc-coated-wire-mesh-manufacturer-in-mumbai",
    oldSlug: "pvc-coated-wire-mesh",
    image: weld,
    title: "PVC Coated Wire Mesh",
    shortDescription:
      "Green, Black, Grey PVC Coated Welded & Chain Link Mesh for Fencing, Gardening, Poultry & Animal Enclosures.",
    materialGroup: "PVC Coated",
    standards: "ASTM A392, ASTM A491, BS 1722, EN 10223, IS 2721",

    overview:
      "Weather-resistant PVC coated wire mesh manufactured from galvanized core wires with green, black, grey, and other colored PVC coatings. Available in Welded, Chain Link, and Hexagonal configurations. Engineered for fencing, gardening, poultry, and animal enclosures with superior weather resistance and long service life.",

    grades: [
      "Galvanized Iron (GI) Core",
      "Hot-Dip Galvanized Core",
      "Electro-Galvanized Core",
      "SS 304 Core",
    ],

    supplyForms: [
      "PVC Coated Welded Mesh",
      "PVC Coated Chain Link Mesh",
      "PVC Coated Hexagonal Mesh",
      "PVC Coated Garden Mesh",
      "PVC Coated Poultry Mesh",
      "PVC Coated Rolls & Panels",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A392, ASTM A491, BS 1722, EN 10223, IS 2721",
      wireDiameter: "1.0 mm to 5.0 mm",
      meshOpening: "12 mm to 100 mm",
      rollWidth: "0.9 m to 2.0 m",
      rollLength: "10 m to 50 m (Custom Cut Lengths Available)",
      pvcColors: "Green, Black, Grey, Blue, White, Custom Colors",
      materialGrades: "GI Core, HDG Core, Electro-Galvanized Core, SS 304 Core",
      surfaceFinish: "PVC Coated, Powder Coated",
      manufacturingMethods: "Welded, Woven, PVC Coated",
      qualityTesting: "Tensile, Coating Thickness, Dimensional, Mesh Size",
    },

    standardsCompliance: [
      "ASTM A392 — Zinc-Coated Steel Chain-Link Fence Fabric",
      "ASTM A491 — Aluminum-Coated Steel Chain-Link Fence Fabric",
      "BS 1722 — Fences",
      "EN 10223 — Steel Wire and Wire Products for Fencing",
      "IS 2721 — Galvanized Steel Chain Link Fence Fabric",
    ],

    manufacturingType: "Welded / Woven / PVC Coated",
    pressureRating: "N/A (Fencing)",
    temperatureRange: "-29°C to +200°C",
    tolerance: "Per ASTM A392 / BS 1722",
    certifications: "EN 10204 3.1 MTC",

    industryApplications: [
      "Fencing and security enclosures",
      "Gardening and landscaping",
      "Poultry and animal enclosures",
      "Agricultural and farm fencing",
      "Residential and commercial fencing",
      "Highway and railway fencing",
    ],

    forms: "PVC Coated Welded & Chain Link Mesh",
    application: "Fencing, gardening, poultry & animal enclosures",
  },

  // ============================================
  // 10. COPPER NICKEL WIRE MESH
  // ============================================
  {
    id: 10,
    slug: "copper-nickel-wire-mesh-manufacturer-in-mumbai",
    oldSlug: "copper-nickel-wire-mesh",
    image: cuniImg,
    title: "Copper Nickel Wire Mesh",
    shortDescription:
      "CuNi 90/10 (C70600) & 70/30 (C71500) Woven Seawater Intake Screens, Demister Pads & Anti-Fouling Filter Mesh.",
    materialGroup: "Copper Nickel",
    standards: "ASTM B206, ASTM E2016, DIN 17670, ISO 9044, EEMUA 144",

    overview:
      "Marine-grade Copper Nickel woven wire cloth and filter mesh manufactured from drawn CuNi 90/10 (C70600) and CuNi 70/30 (C71500) wire. Specifically engineered for seawater filtration, offshore seawater intake strainers, desiccant support screens, and marine biofouling prevention barriers where standard stainless steels suffer severe crevice corrosion.",

    grades: [
      "CuNi 90/10 (C70600)",
      "CuNi 70/30 (C71500)",
      "CW352H",
      "CW354H",
      "DIN 2.0872 / 2.0882",
    ],

    supplyForms: [
      "Plain Woven Wire Mesh (2 Mesh to 200 Mesh)",
      "Twilled Weave Fine Filtration Cloth",
      "Marine Seawater Strainer Baskets & Inserts",
      "Demister & Mist Eliminator Mesh Rolls",
      "Anti-Biofouling Seawater Cage Panels",
      "Slit Ribbon Strips & Circular Filter Discs",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B206, ASTM E2016, DIN 17670, ISO 9044",
      meshRange: "2 Mesh to 250 Mesh (Aperture: 0.06 mm to 10 mm)",
      wireDiameter: "0.05 mm to 2.5 mm",
      rollWidth: "0.9 m, 1.0 m, 1.2 m, 1.5 m (Custom widths available)",
      rollLength: "15 m, 30 m rolls or precision laser-cut panels",
      weavePatterns: "Plain Weave, Twilled Weave, Dutch Weave",
      qualityTesting: "PMI, Aperture Uniformity, Tensile, Wire Diameter Micron Test",
    },

    standardsCompliance: [
      "ASTM B206 — Copper-Nickel-Zinc Alloy and Copper-Nickel Wire",
      "ASTM E2016 — Industrial Woven Wire Cloth",
      "ISO 9044 — Industrial Woven Wire Cloth — Technical Requirements and Testing",
      "DIN 17670 — Copper and Copper Alloy Sheet and Strip",
      "EEMUA 144 — 90/10 Copper Nickel Specifications",
    ],

    manufacturingType: "Precision Loom Woven / Annealed",
    pressureRating: "N/A (Filtration & Screening)",
    temperatureRange: "-196°C to +300°C",
    tolerance: "Per ASTM E2016 / ISO 9044",
    certifications: "EN 10204 3.1 MTC",

    industryApplications: [
      "Offshore oil platform seawater intake filters",
      "Desalination plant coarse & fine debris screening",
      "Shipboard ballast water filtration systems",
      "Marine biofouling prevention screens & cages",
      "Chemical plant brine and acid process strainers",
    ],

    forms: "Woven Wire Cloth, Strainer Cylinders, Filter Discs, Demister Rolls",
    application: "Seawater filtration, offshore intake screens, biofouling barriers",
  },

  // ============================================
  // 11. BRASS WIRE MESH
  // ============================================
  {
    id: 11,
    slug: "brass-wire-mesh-manufacturer-in-mumbai",
    oldSlug: "brass-wire-mesh",
    image: brass,
    title: "Brass Wire Mesh",
    shortDescription:
      "Cartridge Brass C26000 (70/30) & Low Brass C24000 (80/20) Precision Woven Wire Cloth for Fuel Filtration, EMI Shielding & Sifting.",
    materialGroup: "Brass",
    standards: "ASTM E2016, ASTM B134, ASTM E11, ISO 9044, IS 2405, DIN 4189",

    overview:
      "Precision woven brass wire cloth manufactured from Cartridge Brass C26000 (70% Cu / 30% Zn) and Low Brass C24000 (80% Cu / 20% Zn). Features excellent electrical conductivity, spark resistance, anti-magnetic properties, and superior malleability. Extensively utilized in industrial liquid filtration, petroleum fuel sieving, test sieves (ASTM E11), EMI/RFI electronic shielding, and decorative architectural grilles.",

    grades: [
      "Cartridge Brass C26000 (70/30)",
      "Low Brass C24000 (80/20)",
      "Red Brass C23000 (85/15)",
      "Yellow Brass C27000 (65/35)",
      "Phosphor Bronze C51000",
      "IS 2405 Woven Wire Cloth",
    ],

    supplyForms: [
      "Plain Weave Brass Mesh (1 Mesh to 200 Mesh)",
      "Twilled Weave Fine Sieve Cloth (Up to 325 Mesh)",
      "Dutch Weave High-Pressure Micron Filtration Cloth",
      "ASTM E11 Certified Laboratory Test Sieves",
      "EMI / RFI Shielding Gasket Strip Mesh",
      "Architectural Cabinet & Partition Grilles",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM E2016, ASTM B134, ASTM E11, ISO 9044, IS 2405",
      meshRange: "1 Mesh to 325 Mesh (Aperture: 0.04 mm to 20 mm)",
      wireDiameter: "0.03 mm to 2.0 mm",
      rollWidth: "0.914 m (36\"), 1.0 m, 1.22 m (48\"), 1.5 m",
      rollLength: "15 m to 30 m rolls or sheared circular discs",
      surfaceFinish: "Natural Golden Brass Finish, Degreased, Clean Annealed",
      qualityTesting: "PMI, Aperture Size Verification, Tensile, Wire Diameter Micrometry",
    },

    standardsCompliance: [
      "ASTM E2016 — Industrial Woven Wire Cloth",
      "ASTM B134 — Brass Wire",
      "ASTM E11 — Woven Wire Test Sieve Cloth and Test Sieves",
      "ISO 9044 — Industrial Woven Wire Cloth",
      "IS 2405 — Specification for Industrial Sieves and Wire Cloth",
    ],

    manufacturingType: "Precision Loom Woven",
    pressureRating: "N/A (Screening & Shielding)",
    temperatureRange: "-40°C to +150°C",
    tolerance: "Per ASTM E2016 / ISO 9044",
    certifications: "EN 10204 3.1 MTC",

    industryApplications: [
      "Petroleum fuel, aviation kerosene, and diesel filtration",
      "Laboratory analytical particle testing and grain sifting",
      "EMI, RFI, and EMP electronic radio frequency shielding",
      "Extruder screen packs for rubber, polymer, and plastic processing",
      "Architectural decorative radiator covers, cabinets, and infills",
    ],

    forms: "Plain Woven Mesh, Twilled Weave, Filter Discs, Laboratory Sieves",
    application: "Fuel filtration, test sieves, EMI shielding, extruder screens",
  },
  {
    id: 12,
    slug: "aluminium-wire-mesh-manufacturer-in-mumbai",
    oldSlug: "aluminium-wire-mesh",
    image: woven,
    title: "Aluminium Wire Mesh",
    shortDescription:
      "Alloy 5052, 5056 & 6061 Lightweight Rust-Proof Woven Insect Screening, Filter Cloth & Expanded Mesh.",
    materialGroup: "Aluminium",
    standards: "ASTM E2016, ISO 9044, ASTM B211",

    overview:
      "Lightweight, 100% rust-proof industrial aluminium woven wire mesh and insect screening manufactured from marine-grade magnesium-aluminium alloy 5052 and 5056. Providing one-third the weight of stainless steel mesh with excellent atmospheric durability, ideal for window screens, aerospace air intake guards, automotive grilles, and light particulate screening.",

    grades: [
      "Alloy 5052 (Marine Insect & Filter Wire Cloth)",
      "Alloy 5056 (High Shear Industrial Mesh)",
      "Alloy 6061-T6 (Structural Woven Screens)",
      "Pure Aluminium 1050 / 1100 (Battery Anode Mesh)",
    ],

    supplyForms: [
      "Square Plain Weave Wire Cloth (2 mesh to 200 mesh)",
      "Standard Insect Screening Rolls (18x16 mesh, 18x14 mesh)",
      "Slit Filter Disc Blanks & Pleated Cylinders",
      "Epoxy Powder-Coated / Charcoal Coated Mesh",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM E2016, ISO 9044",
      meshCount: "2 mesh to 200 mesh (Aperture 0.074mm to 11.0mm)",
      wireDiameter: "0.15mm to 2.0mm",
      rollWidth: "0.9m, 1.0m, 1.2m, 1.5m (up to 2.0m)",
      surfaceFinish: "Bright Mill Finish, Charcoal Coated, Epoxy Powder Coated",
      weavingPattern: "Plain Weave, Twilled Weave, Crimped Screen",
    },

    industryApplications: [
      "Marine vessel and coastal residential window fly insect screens",
      "Aerospace turbine air intake debris grilles and ventilation covers",
      "Automotive front bumper radiator protective grilles",
      "Chemical powder separation and paint filtration sieves",
    ],

    forms: "Plain Weave Cloth, Insect Screens, Pleated Filter Elements",
    application: "Insect Screens, Air Intake Guards, Aerospace Ventilation, Sifting",
  },
];

export default wireMesh;
