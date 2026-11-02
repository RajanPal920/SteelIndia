// src/data/productMaterials/circles.js

import stain from "../../../public/images/stock/stainless-steel-circles.jpg";
import mach from "../../../public/images/stock/machined-forged-circles.jpg";
import ind from "../../../public/images/stock/specialty-industrial-circles.jpg";
import carbon from "../../../public/images/stock/carbon-steel-circles.jpg";
import alloy from "../../../public/images/stock/alloy-steel-circles.jpg";
import duplex from "../../../public/images/stock/duplex-steel-circles.jpg";
import superDuplex from "../../../public/images/stock/super-duplex-circles.jpg";
import nickel from "../../../public/images/stock/nickel-alloy-circles.jpg";
import titanium from "../../../public/images/stock/titanium-circles.jpg";
import copperSheets from "../../../public/images/stock/copper-nickel-sheets.jpg";
import brass from "../../../public/images/stock/brass-circles.jpg";


const circles = [
  {
    id: 1,
    slug: "stainless-steel-circles-manufacturer-in-mumbai",
    oldSlug: "stainless-steel-circles",
    image: stain,
    title: "Stainless Steel Circles",
    shortDescription:
      "ASTM A240 / A480 Gr 304, 304L, 316, 316L, 310S, 317L, 321, 347, 904L, Dual Certified Alloys.",
    materialGroup: "Stainless Steel",
    standards:
      "ASTM A240 / A480 Gr 304, 304L, 316, 316L, 310S, 317L, 321, 347, 904L",
    forms: "Cold Rolled, Hot Rolled, Dual Certified",
    application:
      "Pressure vessels, cookware, fabrication, and engineering applications",
  },
  {
    id: 2,
    slug: "carbon-steel-circles-manufacturer-in-mumbai",
    oldSlug: "carbon-steel-circles",
    image: carbon,
    title: "Carbon Steel Circles",
    shortDescription:
      "ASTM A105, A350 LF2 Class 1/2, ASTM A516 Gr 70 Normalized Carbon Steel Circles for Pressure Vessels.",
    materialGroup: "Carbon Steel",
    standards: "ASTM A105, A350 LF2 Class 1/2, ASTM A516 Gr 70",
    forms: "Hot Rolled, Normalized, Annealed",
    application: "Pressure vessels, storage tanks, industrial fabrication",
  },
  {
    id: 3,
    slug: "alloy-steel-circles-manufacturer-in-mumbai",
    oldSlug: "alloy-steel-circles",
    image: alloy,
    title: "Alloy Steel Circles",
    shortDescription:
      "SAE 4140, 4340, ASTM A387 Gr 11/22, ASTM A182 F11/F22 Chrome-Moly High-Temperature Circles.",
    materialGroup: "Alloy Steel",
    standards: "SAE 4140, 4340, ASTM A387 Gr 11/22, ASTM A182 F11/F22",
    forms: "Forged, Hot Rolled, Heat Treated",
    application: "Steam boilers, refinery hydrotreaters, power plant equipment",
  },
  {
    id: 4,
    slug: "duplex-steel-circles-manufacturer-in-mumbai",
    oldSlug: "duplex-steel-circles",
    image: duplex,
    title: "Duplex Steel Circles",
    shortDescription:
      "ASTM A240 UNS S31803 / S32205 (2205) Duplex Steel Circles with Superior Chloride Stress Corrosion Resistance.",
    materialGroup: "Duplex",
    standards: "ASTM A240 UNS S31803 / S32205 (2205)",
    forms: "Hot Rolled, Solution Annealed",
    application: "Offshore platforms, desalination plants, chemical processing",
  },
  {
    id: 5,
    slug: "super-duplex-circles-manufacturer-in-mumbai",
    oldSlug: "super-duplex-circles",
    image: superDuplex,
    title: "Super Duplex Circles",
    shortDescription:
      "ASTM A240 UNS S32750 (2507) / S32760 Super Duplex Circles for Subsea Oilfields and Seawater Systems.",
    materialGroup: "Super Duplex",
    standards: "ASTM A240 UNS S32750 (2507) / S32760",
    forms: "Hot Rolled, Solution Annealed",
    application: "Subsea oilfields, seawater systems, chemical plants",
  },
  {
    id: 6,
    slug: "nickel-alloy-circles-manufacturer-in-mumbai",
    oldSlug: "nickel-alloy-circles",
    image: nickel,
    title: "Nickel Alloy Circles",
    shortDescription:
      "Nickel 200/201, Monel 400/K500, Inconel 600/625/718, Incoloy 800/825, Hastelloy C276 High-Performance Circles.",
    materialGroup: "Nickel Alloy",
    standards:
      "Nickel 200/201, Monel 400/K500, Inconel 600/625/718, Incoloy 800/825, Hastelloy C276",
    forms: "Hot Rolled, Forged, Solution Annealed",
    application: "Chemical reactors, marine engineering, nuclear applications",
  },
  {
    id: 7,
    slug: "titanium-circles-manufacturer-in-mumbai",
    oldSlug: "titanium-circles",
    image: titanium,
    title: "Titanium Circles",
    shortDescription:
      "ASTM B265 Gr 1, Gr 2, Gr 5 (Ti-6Al-4V), Gr 7 High-Strength-to-Weight Corrosion-Immune Titanium Circles.",
    materialGroup: "Titanium",
    standards: "ASTM B265 Gr 1, Gr 2, Gr 5 (Ti-6Al-4V), Gr 7",
    forms: "Cold Rolled, Hot Rolled, Annealed",
    application: "Aerospace, marine, chemical processing, medical implants",
  },
  {
    id: 8,
    slug: "machined-forged-circles-manufacturer-in-mumbai",
    oldSlug: "machined-forged-circles",
    image: mach,
    title: "Machined & Forged Circles",
    shortDescription:
      "ASTM A105, A350 LF2 Class 1/2, Carbon Steel C45, Alloy Steel SAE 4140/4340, Seamless Blind Flange Blocks & Dynamic Rotating Discs.",
    materialGroup: "Forged Discs",
    standards:
      "ASTM A105, A350 LF2 Class 1/2, Carbon Steel C45, Alloy Steel SAE 4140/4340",
    forms: "Seamless Blind Flange Blocks, Dynamic Rotating Discs",
    application: "Flanges, rings, heavy engineering, and industrial equipment",
  },
  {
    id: 9,
    slug: "specialty-industrial-circles-manufacturer-in-mumbai",
    oldSlug: "specialty-industrial-circles",
    image: ind,
    title: "Specialty Industrial Circles",
    shortDescription:
      "Monel 400/K500, Inconel 600/625/718, Hastelloy C276, Duplex F51/UNS S31803, Super Duplex S32750, Titanium Grade 2/5.",
    materialGroup: "High Alloy Disks",
    standards:
      "Monel 400/K500, Inconel 600/625/718, Hastelloy C276, Duplex F51/UNS S31803, Super Duplex S32750, Titanium Grade 2/5",
    forms: "High Alloy Disks",
    application: "Demanding industrial applications across various industries",
  },
  {
    id: 10,
    slug: "copper-nickel-circles-manufacturer-in-mumbai",
    oldSlug: "copper-nickel-circles",
    image: copperSheets,
    title: "Copper Nickel Circles",
    shortDescription:
      "ASTM B171, ASTM B122 CuNi 90/10 (C70600) & 70/30 (C71500) Marine Anti-Biofouling Tube Sheet & Flange Blanks.",
    materialGroup: "Copper Nickel",
    standards: "ASTM B171, ASTM B122, ASME SB171, EEMUA 144, DIN 86019, BS 2875",

    overview:
      "High-reliability marine-grade copper nickel circles and disc blanks conforming to ASTM B171 and ASTM B122 standards in alloys CuNi 90/10 (UNS C70600) and CuNi 70/30 (UNS C71500). Specifically engineered for seawater condenser tube sheets, multi-stage flash desalination evaporators, marine heat exchanger baffles, and offshore blind flanges with exceptional resistance to micro-fouling, impingement attack, and pitting in high-velocity seawater.",

    grades: [
      "CuNi 90/10 (UNS C70600 / CW352H)",
      "CuNi 70/30 (UNS C71500 / CW354H)",
      "DIN 2.0872 (CuNi10Fe1Mn)",
      "DIN 2.0882 (CuNi30Mn1Fe)",
      "CN 102 / CN 107 (BS 2875)",
    ],

    supplyForms: [
      "Heavy Gauge Condenser Tube Sheet Circles",
      "Precision Waterjet Cut Circles",
      "CNC Machine-Turned & Drilled Blanks",
      "Cold Rolled Precision Stamped Circles",
      "Blind Flange & Spacer Discs",
      "Heat Exchanger Baffle Circles",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B171, ASTM B122, ASME SB171, EEMUA 144",
      diameterRange: "50mm to 2000mm (2 inch to 80 inch)",
      thicknessRange: "1.0mm to 120mm",
      temperConditions: "O61 (Annealed), H04 (Hard), As-Rolled (M20)",
      surfaceFinish: "Descaled, Pickled Clean Mill Finish, Machine Faced",
      cuttingMethods: "Waterjet Cutting, CNC Turning, Plasma Cut & Machined",
      edgeCondition: "Deburred, Machine Chamfered / Beveled, Smooth Turned",
      qualityTesting: "PMI, Ultrasonic (ASTM A578 Level II), Tensile, Hardness, Dye Penetrant",
    },

    chemicalComposition: [
      { grade: "CuNi 90/10 (C70600)", Cu: "Rem (86.5-90.5%)", Ni: "9.0-11.0%", Fe: "1.0-1.8%", Mn: "≤ 1.0%", Pb: "≤ 0.02%", Zn: "≤ 0.50%" },
      { grade: "CuNi 70/30 (C71500)", Cu: "Rem (65.0-70.0%)", Ni: "29.0-33.0%", Fe: "0.4-1.0%", Mn: "≤ 1.0%", Pb: "≤ 0.02%", Zn: "≤ 0.50%" },
    ],

    mechanicalProperties: [
      { grade: "CuNi 90/10 (C70600)", tensileStrength: "275 - 420 MPa", yieldStrength: "≥ 105 MPa", elongation: "≥ 30%", hardness: "65 - 80 HRB" },
      { grade: "CuNi 70/30 (C71500)", tensileStrength: "360 - 550 MPa", yieldStrength: "≥ 125 MPa", elongation: "≥ 30%", hardness: "70 - 88 HRB" },
    ],

    standardsCompliance: [
      "ASTM B171 / B171M — Copper-Alloy Plate and Sheet for Pressure Vessels and Condensers",
      "ASTM B122 / B122M — Copper-Nickel-Tin Alloy, Copper-Nickel-Zinc Alloy Plate, Sheet, and Strip",
      "EEMUA Publication 144 — Tubesheet and Flange Specifications for Marine Piping Systems",
      "DIN 86019 — Copper-Nickel-Alloy Piping and Tubesheet Components",
    ],

    manufacturingType: "Hot Rolled & Machine Finished / Cold Stamped Blanks",
    tolerance: "±0.2mm on diameter, ±0.05mm on thickness per ASTM B171",
    certifications: "EN 10204 3.1 Mill Test Certificate, DNV-GL & Lloyd's Marine Approved",

    industryApplications: [
      "Marine condenser tube sheets and naval vessel chiller systems",
      "Desalination plant multi-stage flash (MSF) evaporators",
      "Offshore oil & gas seawater intake and firewater pumping systems",
      "Shipbuilding seawater hull discharge covers and blind discs",
    ],

    forms: "Hot Rolled, Waterjet Cut, Annealed Tube Sheet Blanks",
    application: "Marine heat exchangers, condenser tube sheets, ship cooling",
  },
  {
    id: 11,
    slug: "brass-circles-manufacturer-in-mumbai",
    oldSlug: "brass-circles",
    image: brass,
    title: "Brass Circles",
    shortDescription:
      "ASTM B36, ASTM B21 Naval Brass C46400, C26000 & Free Cutting Brass Precision Machine & Blanking Circles.",
    materialGroup: "Brass",
    standards: "ASTM B36, ASTM B21, ASTM B19, IS 319, BS 2874, EN 12165",

    overview:
      "Precision industrial brass circles, disc blanks, and stamped discs manufactured in accordance with ASTM B36, ASTM B21, and IS 319 specifications. Available in premium Naval Brass C46400 (inhibited against dezincification), Cartridge Brass 70/30 C26000 (superior deep-drawing ductility), and Free Cutting Brass C36000. Specifically suited for CNC turned components, marine propeller gland blanks, non-sparking safety tools, electrical switchgear contacts, pressure gauge diaphragms, and decorative metal spinning.",

    grades: [
      "Naval Brass (UNS C46400 / IS 291)",
      "Cartridge Brass 70/30 (UNS C26000)",
      "Free Cutting Brass (UNS C36000 / IS 319 Gr 1)",
      "High Tensile Brass / Manganese Bronze (UNS C67500)",
      "Admiralty Brass (UNS C44300)",
      "Lead-Free Eco Machining Brass (UNS C27450)",
    ],

    supplyForms: [
      "Cold Rolled Precision Stamped Circles",
      "Hot Rolled Heavy Gauge Machined Discs",
      "Precision Waterjet / Laser Cut Discs",
      "CNC Machine-Turned & Face-Ground Blanks",
      "Deep Drawing Grade Cartridge Brass Discs",
      "Polished / Mirror Finish Decorative Discs",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B36, ASTM B21, ASTM B19, IS 319, ASME SB36",
      diameterRange: "25mm to 1200mm (1 inch to 48 inch)",
      thicknessRange: "0.5mm to 100mm",
      temperConditions: "O60 (Soft Annealed), 1/4 Hard (H01), 1/2 Hard (H02), Hard (H04)",
      surfaceFinish: "Clean Mill Finish, Bright Annealed, Fine Machine Turned, Buffed Mirror Finish",
      cuttingMethods: "Circle Shearing, CNC Stamping, Waterjet Cut, CNC Lathe Parting",
      edgeCondition: "Deburred, Radiused Edge, Smooth Turned, As-Blanked",
      qualityTesting: "PMI Spectroscopy, Tensile Strength, Hardness (HRB/HV), Dimensional CMM Inspection, Non-Sparking Verification",
    },

    chemicalComposition: [
      { grade: "Naval Brass (C46400)", Cu: "59.0-62.0%", Sn: "0.5-1.0%", Pb: "≤ 0.20%", Fe: "≤ 0.10%", Zn: "Remainder" },
      { grade: "Cartridge Brass (C26000)", Cu: "68.5-71.5%", Pb: "≤ 0.05%", Fe: "≤ 0.05%", Zn: "Remainder" },
      { grade: "Free Cutting (C36000)", Cu: "60.0-63.0%", Pb: "2.5-3.7%", Fe: "≤ 0.35%", Zn: "Remainder" },
      { grade: "High Tensile (C67500)", Cu: "57.0-60.0%", Mn: "0.05-0.50%", Fe: "0.8-1.4%", Sn: "0.5-1.5%", Zn: "Remainder" },
    ],

    mechanicalProperties: [
      { grade: "Naval Brass (C46400)", tensileStrength: "380 - 550 MPa", yieldStrength: "150 - 310 MPa", elongation: "30 - 45%", hardness: "65 - 85 HRB" },
      { grade: "Cartridge Brass (C26000)", tensileStrength: "310 - 450 MPa", yieldStrength: "105 - 240 MPa", elongation: "40 - 65%", hardness: "55 - 75 HRB" },
      { grade: "Free Cutting (C36000)", tensileStrength: "340 - 480 MPa", yieldStrength: "140 - 310 MPa", elongation: "15 - 25%", hardness: "60 - 80 HRB" },
      { grade: "High Tensile (C67500)", tensileStrength: "450 - 650 MPa", yieldStrength: "220 - 410 MPa", elongation: "20 - 35%", hardness: "80 - 95 HRB" },
    ],

    standardsCompliance: [
      "ASTM B36 / B36M — Standard Specification for Brass Plate, Sheet, Strip, and Rolled Bar",
      "ASTM B21 / B21M — Standard Specification for Naval Brass Rod, Bar, and Shapes",
      "ASTM B19 — Standard Specification for Cartridge Brass Sheet, Strip, Plate, and Discs",
      "IS 319 — Free Cutting Brass Bars and Circles Specification",
      "EN 12165 / BS 2874 — Copper and Copper Alloy Products",
    ],

    manufacturingType: "Cold Rolled & Annealed / Hot Forged Discs",
    tolerance: "±0.1mm on diameter, ±0.05mm on thickness per ASTM B36",
    certifications: "EN 10204 3.1 MTC, RoHS Compliant, ATEX Spark-Free Verification",

    industryApplications: [
      "Marine propeller gland packing discs, marine valve discs, and stern tube covers",
      "Deep drawn cartridge shells, hollowware blanks, and musical instrument components",
      "Non-sparking ATEX explosive zone tool discs and electrical contact plates",
      "Pressure gauge diaphragms, sanitary valve blanks, and architectural trim discs",
    ],

    forms: "Cold Rolled, Stamped Blanks, CNC Machined Discs",
    application: "Instrumentation, marine hardware, decorative trim, electrical components",
  },
  {
    id: 12,
    slug: "aluminium-circles-manufacturer-in-mumbai",
    oldSlug: "aluminium-circles",
    image: ind,
    title: "Aluminium Circles",
    shortDescription:
      "ASTM B209, IS 737 Grade 1050, 1100, 3003, 5052 & 6061 Deep-Drawing and CNC Spinning Aluminium Circles.",
    materialGroup: "Aluminium",
    standards: "ASTM B209, ASME SB209, IS 737, EN 573-3, EN 485",

    overview:
      "Commercial and aerospace-grade aluminium circles, discs, and spinning blanks conforming to ASTM B209 and IS 737 standards. Manufactured from soft annealed O-temper alloys 1050, 1100, 3003, and marine-grade 5052 / 6061. Engineered for extreme deep-drawing, metal spinning, lighting reflector stamping, and pressure cookware fabrication with burr-free cut edges.",

    grades: [
      "Aluminium 1050 (99.5% Commercial Purity)",
      "Aluminium 1100 (Deep Drawing Grade)",
      "Alloy 3003-O (Manganese Alloyed Formability)",
      "Alloy 5052-H32 (Marine Corrosion Resistant)",
      "Alloy 6061-T6 (Structural Machined Discs)",
    ],

    supplyForms: [
      "Cold Rolled Deep Drawing Discs",
      "Soft Annealed (O-Temper) Spinning Circles",
      "Precision Stamped Lighting Reflector Blanks",
      "CNC Machine-Turned Flange Blanks",
      "Anodizing Quality Surface Blanks",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B209, IS 737, EN 485, ASME SB209",
      diameterRange: "50mm to 1500mm (2 inch to 60 inch)",
      thicknessRange: "0.4mm to 12.0mm",
      temperConditions: "O (Soft Annealed), H12, H14, H24, T6",
      surfaceFinish: "Mill Bright, Anodizing Quality, Degreased Clean",
      cuttingMethods: "Circle Shearing, Stamping Press, CNC Waterjet",
      edgeCondition: "Smooth Deburred, Clean Sheared, Burr-Free",
      qualityTesting: "PMI Spectroscopy, Tensile, Elongation (Erichsen Cupping Test)",
    },

    chemicalComposition: [
      { grade: "Alloy 1050", Al: "≥ 99.5%", Fe: "≤ 0.40%", Si: "≤ 0.25%", Cu: "≤ 0.05%", Zn: "≤ 0.07%" },
      { grade: "Alloy 3003", Mn: "1.0 - 1.5%", Cu: "0.05 - 0.20%", Fe: "≤ 0.70%", Si: "≤ 0.60%", Al: "Remainder" },
      { grade: "Alloy 5052", Mg: "2.2 - 2.8%", Cr: "0.15 - 0.35%", Fe: "≤ 0.40%", Si: "≤ 0.25%", Al: "Remainder" },
    ],

    mechanicalProperties: [
      { grade: "Alloy 1050-O", tensileStrength: "65 - 95 MPa", yieldStrength: "≥ 25 MPa", elongation: "≥ 35%", hardness: "20 HB" },
      { grade: "Alloy 3003-O", tensileStrength: "95 - 135 MPa", yieldStrength: "≥ 35 MPa", elongation: "≥ 30%", hardness: "28 HB" },
      { grade: "Alloy 5052-O", tensileStrength: "170 - 215 MPa", yieldStrength: "≥ 65 MPa", elongation: "≥ 25%", hardness: "45 HB" },
    ],

    standardsCompliance: [
      "ASTM B209 — Standard Specification for Aluminum and Aluminum-Alloy Sheet and Plate",
      "IS 737 — Wrought Aluminium and Aluminium Alloy Sheet and Strip for General Engineering",
      "EN 485 — Aluminium and Aluminium Alloys - Sheet, Strip and Plate",
    ],

    manufacturingType: "Cold Rolled & Blanked / Annealed",
    tolerance: "±0.15mm on diameter, ±0.03mm on thickness",
    certifications: "EN 10204 3.1 MTC, RoHS & Food Contact Safe",

    industryApplications: [
      "Deep drawn cookware, pressure cooker bases, and catering utensils",
      "High-bay LED lighting reflectors and traffic road sign discs",
      "Chemical storage tank dished ends and sight glass blind discs",
      "Automotive ventilation duct flanges and aerospace spin forming",
    ],

    forms: "Cold Rolled, Stamped Blanks, CNC Machined Discs",
    application: "Cookware, Deep Drawing, Lighting Reflectors, Chemical Vessels",
  },
];

export default circles;
