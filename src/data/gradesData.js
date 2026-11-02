// src/data/gradesData.js
import { materials } from './materials.js';
import { products } from './products.js';
import productMaterials from './productMaterials/index.js';
import { stripSeoSuffix, appendSeoSuffix, hasSeoSuffix, getMaterialUrl } from './productNavigationData.js';
import { getProductMaterialsForMaterial, getProductMaterialUrl } from './productMaterialRegistry.js';

/**
 * Universal slugifier for grade strings
 * Example: 'SS 304' -> 'ss-304'
 *          'SS 304L' -> 'ss-304l'
 *          'ASTM A106 Grade B' -> 'astm-a106-grade-b'
 *          'ASTM A335 P11' -> 'astm-a335-p11'
 *          'UNS S31803 (Duplex 2205)' -> 'uns-s31803-duplex-2205'
 */
export function getGradeSlug(gradeStr) {
  if (!gradeStr) return '';
  const s = String(gradeStr).trim();

  // Known specific mappings for clean SEO URLs
  const customMap = {
    'SS 304': 'ss-304',
    'SS 304L': 'ss-304l',
    'SS 316': 'ss-316',
    'SS 316L': 'ss-316l',
    'SS 316Ti': 'ss-316ti',
    'SS 310': 'ss-310',
    'SS 310S': 'ss-310s',
    'SS 321': 'ss-321',
    'SS 347': 'ss-347',
    'SS 904L': 'ss-904l',
    'SS 410': 'ss-410',
    'SS 420': 'ss-420',
    'SS 430': 'ss-430',
    '304 / 304L': '304-304l',
    '316 / 316L': '316-316l',
    '310 / 310S': '310-310s',
    '321 / 321H': '321-321h',
    '347 / 347H': '347-347h',
    'ASTM A106 Grade B': 'astm-a106-grade-b',
    'ASTM A53 Grade B': 'astm-a53-grade-b',
    'ASTM A333 Grade 6': 'astm-a333-grade-6',
    'ASTM A105': 'astm-a105',
    'ASTM A350 LF2 (Low Temp)': 'astm-a350-lf2',
    'ASTM A516 Grade 70': 'astm-a516-grade-70',
    'API 5L Grade B': 'api-5l-grade-b',
    'ASTM A335 P11': 'astm-a335-p11',
    'ASTM A335 P22': 'astm-a335-p22',
    'ASTM A335 P5': 'astm-a335-p5',
    'ASTM A335 P9': 'astm-a335-p9',
    'ASTM A335 P91': 'astm-a335-p91',
    'ASTM A182 F11': 'astm-a182-f11',
    'ASTM A182 F22': 'astm-a182-f22',
    'ASTM A182 F91': 'astm-a182-f91',
    'AISI 4140': 'aisi-4140',
    'AISI 4340': 'aisi-4340',
    'EN19': 'en19',
    'EN24': 'en24',
    'UNS S31803 (Duplex 2205)': 'uns-s31803-duplex-2205',
    'UNS S32205': 'uns-s32205',
    'F51': 'f51',
    'EN 1.4462': 'en-1-4462',
    'UNS S32750 (2507 / F53)': 'uns-s32750-super-duplex-2507',
    'UNS S32760 (Zeron 100 / F55)': 'uns-s32760-zeron-100',
    'EN 1.4410': 'en-1-4410',
    'Nickel 200 (UNS N02200)': 'nickel-200',
    'Nickel 201 (UNS N02201)': 'nickel-201',
    'Monel 400 (UNS N04400)': 'monel-400',
    'Monel K500 (UNS N05500)': 'monel-k500',
    'DIN 2.4360': 'din-2-4360',
    'Inconel 600 (UNS N06600)': 'inconel-600',
    'Inconel 601': 'inconel-601',
    'Inconel 625 (UNS N06625)': 'inconel-625',
    'Inconel 718 (UNS N07718)': 'inconel-718',
    'Incoloy 800 / 800H': 'incoloy-800',
    'Incoloy 825 (UNS N08825)': 'incoloy-825',
    'Hastelloy C276 (UNS N10276)': 'hastelloy-c276',
    'Hastelloy C22 (UNS N06022)': 'hastelloy-c22',
    'Hastelloy B2 / B3': 'hastelloy-b2',
    'Hastelloy C2000': 'hastelloy-c2000',
    'Grade 1 (CP Titanium)': 'titanium-grade-1',
    'Grade 2 (CP Titanium)': 'titanium-grade-2',
    'Grade 5 (Ti-6Al-4V)': 'titanium-grade-5',
    'Grade 7 (Ti-0.15Pd)': 'titanium-grade-7',
    'CuNi 90/10 (C70600)': 'cuni-90-10',
    'CuNi 70/30 (C71500)': 'cuni-70-30',
    'CW352H': 'cw352h',
    'CW354H': 'cw354h',
    'Naval Brass (C46400)': 'naval-brass',
    'Free Cutting Brass (C36000)': 'free-cutting-brass',
    'Cartridge Brass (C26000)': 'cartridge-brass',
    'High Tensile Brass (C67500)': 'high-tensile-brass',
    'Alloy 5083 (Marine Grade)': 'aluminium-5083',
    'Alloy 6061-T6 (Structural)': 'aluminium-6061-t6',
    'Alloy 6082-T6': 'aluminium-6082-t6',
    'Alloy 7075-T6 (High Strength)': 'aluminium-7075-t6',
    'Alloy 20': 'alloy-20',
    'Alloy 28': 'alloy-28',
    'SMO 254': 'smo-254',
    'Nimonic 75 / 80A': 'nimonic-75-80a',
    'Nitronic 50 / 60': 'nitronic-50-60',
    'Nichrome 80/20': 'nichrome-80-20',
    'Nilo 42 / 48 / 52': 'nilo-42-48-52',
    'Zirconium 702': 'zirconium-702',
    'Tantalum': 'tantalum',
    'Phosphor Bronze': 'phosphor-bronze'
  };

  if (customMap[s]) return customMap[s];

  return s
    .toLowerCase()
    .replace(/\s*\/\s*/g, '-')
    .replace(/[()]/g, '')
    .replace(/[,.]/g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Generates canonical grade URL: /materials/:materialSlug/:gradeSlug
 * e.g. /materials/stainless-steel/ss-304
 *      /materials/carbon-steel/astm-a106-grade-b
 *      /materials/alloy-steel/astm-a335-p11
 */
export function getGradeUrl(gradeStr, materialId = null) {
  const slug = getGradeSlug(gradeStr);
  let targetMatId = materialId ? stripSeoSuffix(materialId) : null;
  if (!targetMatId) {
    const matched = detailedGrades.find(g => g.slug === slug || (g.aliases && g.aliases.includes(slug)));
    if (matched) targetMatId = matched.materialId;
  }
  if (!targetMatId) targetMatId = 'stainless-steel';
  return `/materials/${targetMatId}/${slug}`;
}

/**
 * Normalized material ID resolver
 */
function normalizeMaterialId(matId) {
  if (!matId) return null;
  const s = stripSeoSuffix(matId).toLowerCase().trim();
  if (s === 'duplex-steel' || s === 'duplex') return 'duplex-stainless-steel';
  if (s === 'super-duplex' || s === 'super-duplex-steel') return 'super-duplex-stainless-steel';
  if (s === 'nickel-alloy' || s === 'nickel') return 'nickel-alloys';
  return s;
}

/**
 * Comprehensive technical profiles for core industrial grades (79 grades across 14 materials)
 */
export const detailedGrades = [
  {
    "slug": "ss-304",
    "grade": "SS 304",
    "name": "SS 304 Stainless Steel Grade",
    "materialId": "stainless-steel",
    "aliases": [
      "304",
      "304-304l",
      "ss-304",
      "ss304",
      "astm-a240-304",
      "astm-a312-tp304"
    ],
    "uns": "UNS S30400",
    "din": "DIN 1.4301 (X5CrNi18-10)",
    "tagline": "The universal 18/8 austenitic chromium-nickel stainless steel grade for atmospheric and general chemical corrosion resistance.",
    "overview": "Grade SS 304 is the most widely specified austenitic stainless steel worldwide. It provides exceptional corrosion resistance across a broad range of atmospheric environments and many corrosive media, combined with superb formability, drawability, and welding characteristics.",
    "chemicalComposition": [
      {
        "element": "Carbon (C)",
        "value": "0.08 % max"
      },
      {
        "element": "Chromium (Cr)",
        "value": "18.00 - 20.00 %"
      },
      {
        "element": "Nickel (Ni)",
        "value": "8.00 - 10.50 %"
      },
      {
        "element": "Manganese (Mn)",
        "value": "2.00 % max"
      },
      {
        "element": "Silicon (Si)",
        "value": "0.75 % max"
      },
      {
        "element": "Phosphorus (P)",
        "value": "0.045 % max"
      },
      {
        "element": "Sulfur (S)",
        "value": "0.030 % max"
      },
      {
        "element": "Nitrogen (N)",
        "value": "0.10 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "515 MPa (75 ksi)"
      },
      {
        "property": "Yield Strength 0.2% Proof (min)",
        "value": "205 MPa (30 ksi)"
      },
      {
        "property": "Elongation in 2 inches (min)",
        "value": "40 %"
      },
      {
        "property": "Hardness (Rockwell B max)",
        "value": "92 HRB"
      },
      {
        "property": "Density",
        "value": "7.93 g/cm\u00b3"
      }
    ],
    "standards": [
      "ASTM A312 / ASME SA312",
      "ASTM A240",
      "ASTM A403 WP304",
      "ASTM A182 F304",
      "ASTM A276",
      "ASTM A269"
    ],
    "supplyForms": [
      "Seamless & Welded Pipes",
      "Butt Weld Elbows, Tees & Reducers",
      "Forged Flanges",
      "Sheets & Plates",
      "Hex Fasteners",
      "Round Bars"
    ],
    "applications": [
      "Food & Dairy Processing Machinery",
      "Chemical Process Piping",
      "Architectural Railings & Cladding",
      "Kitchen & Pharmaceutical Equipment"
    ]
  },
  {
    "slug": "ss-304l",
    "grade": "SS 304L",
    "name": "SS 304L Low-Carbon Stainless Steel Grade",
    "materialId": "stainless-steel",
    "aliases": [
      "304l",
      "ss-304l",
      "ss304l",
      "astm-a240-304l",
      "astm-a312-tp304l"
    ],
    "uns": "UNS S30403",
    "din": "DIN 1.4307 (X2CrNi18-9)",
    "tagline": "Extra-low carbon modification of 304 preventing harmful carbide precipitation during heavy-section welding.",
    "overview": "SS 304L is the extra-low carbon variant (0.03% C max) of standard 304. Lower carbon content eliminates chromium carbide precipitation in the heat-affected zone (HAZ) during welding, providing complete resistance to intergranular corrosion in as-welded assemblies without post-weld heat treatment.",
    "chemicalComposition": [
      {
        "element": "Carbon (C)",
        "value": "0.030 % max"
      },
      {
        "element": "Chromium (Cr)",
        "value": "17.50 - 19.50 %"
      },
      {
        "element": "Nickel (Ni)",
        "value": "8.00 - 12.00 %"
      },
      {
        "element": "Manganese (Mn)",
        "value": "2.00 % max"
      },
      {
        "element": "Silicon (Si)",
        "value": "0.75 % max"
      },
      {
        "element": "Phosphorus (P)",
        "value": "0.045 % max"
      },
      {
        "element": "Sulfur (S)",
        "value": "0.030 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "485 MPa (70 ksi)"
      },
      {
        "property": "Yield Strength 0.2% Proof (min)",
        "value": "170 MPa (25 ksi)"
      },
      {
        "property": "Elongation in 2 inches (min)",
        "value": "40 %"
      },
      {
        "property": "Hardness (Rockwell B max)",
        "value": "90 HRB"
      }
    ],
    "standards": [
      "ASTM A312 / ASME SA312 TP304L",
      "ASTM A240 304L",
      "ASTM A403 WP304L",
      "ASTM A182 F304L",
      "EN 10088-3"
    ],
    "supplyForms": [
      "Welded Heavy Wall Pipes",
      "Welded Pipe Fittings",
      "Forged Slip-On & Blind Flanges",
      "Heavy Pressure Vessel Plates"
    ],
    "applications": [
      "Heavy Welded Tanks & Vessels",
      "Chemical Storage Tanks",
      "Brewery & Distillation Fermenters",
      "Piping Manifolds"
    ]
  },
  {
    "slug": "ss-316",
    "grade": "SS 316",
    "name": "SS 316 Marine Grade Stainless Steel",
    "materialId": "stainless-steel",
    "aliases": [
      "316",
      "316-316l",
      "ss-316",
      "ss316",
      "astm-a240-316",
      "astm-a312-tp316"
    ],
    "uns": "UNS S31600",
    "din": "DIN 1.4401 (X5CrNiMo17-12-2)",
    "tagline": "Molybdenum-bearing marine grade stainless steel offering superior pitting resistance in chloride environments.",
    "overview": "Grade SS 316 is the standard molybdenum-bearing austenitic stainless steel. The addition of 2.0% - 3.0% molybdenum provides significantly higher resistance to localized corrosion (pitting and crevice corrosion) in chloride environments compared to 304.",
    "chemicalComposition": [
      {
        "element": "Carbon (C)",
        "value": "0.08 % max"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "2.00 - 3.00 %"
      },
      {
        "element": "Chromium (Cr)",
        "value": "16.00 - 18.00 %"
      },
      {
        "element": "Nickel (Ni)",
        "value": "10.00 - 14.00 %"
      },
      {
        "element": "Manganese (Mn)",
        "value": "2.00 % max"
      },
      {
        "element": "Silicon (Si)",
        "value": "0.75 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "515 MPa (75 ksi)"
      },
      {
        "property": "Yield Strength 0.2% Proof (min)",
        "value": "205 MPa (30 ksi)"
      },
      {
        "property": "Elongation (min)",
        "value": "40 %"
      },
      {
        "property": "Hardness (Rockwell B max)",
        "value": "95 HRB"
      },
      {
        "property": "Density",
        "value": "8.00 g/cm\u00b3"
      }
    ],
    "standards": [
      "ASTM A312 / ASME SA312 TP316",
      "ASTM A240 316",
      "ASTM A403 WP316",
      "ASTM A182 F316",
      "ASTM A276"
    ],
    "supplyForms": [
      "Process Seamless & Welded Pipes",
      "Buttweld Fittings",
      "Forged Flanges",
      "Marine Fasteners",
      "Valves"
    ],
    "applications": [
      "Marine Hardware & Boat Trim",
      "Pharmaceutical Equipment",
      "Offshore Oil & Gas Piping",
      "Desalination Flash Plants"
    ]
  },
  {
    "slug": "ss-316l",
    "grade": "SS 316L",
    "name": "SS 316L Low-Carbon Marine Grade Stainless Steel",
    "materialId": "stainless-steel",
    "aliases": [
      "316l",
      "ss-316l",
      "ss316l",
      "astm-a240-316l",
      "astm-a312-tp316l"
    ],
    "uns": "UNS S31603",
    "din": "DIN 1.4404 (X2CrNiMo17-12-2)",
    "tagline": "Low-carbon marine grade stainless steel preventing weld sensitization in severe acidic and saline environments.",
    "overview": "SS 316L is the low-carbon version of 316 with carbon held to 0.030% max. It offers immunity from grain-boundary carbide precipitation in welded components, making it ideal for pharmaceutical bioreactors and critical chemical processing lines.",
    "chemicalComposition": [
      {
        "element": "Carbon (C)",
        "value": "0.030 % max"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "2.00 - 3.00 %"
      },
      {
        "element": "Chromium (Cr)",
        "value": "16.00 - 18.00 %"
      },
      {
        "element": "Nickel (Ni)",
        "value": "10.00 - 14.00 %"
      },
      {
        "element": "Manganese (Mn)",
        "value": "2.00 % max"
      },
      {
        "element": "Silicon (Si)",
        "value": "0.75 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "485 MPa (70 ksi)"
      },
      {
        "property": "Yield Strength 0.2% Proof (min)",
        "value": "170 MPa (25 ksi)"
      },
      {
        "property": "Elongation (min)",
        "value": "40 %"
      },
      {
        "property": "Hardness (Rockwell B max)",
        "value": "90 HRB"
      }
    ],
    "standards": [
      "ASTM A312 TP316L",
      "ASTM A240 316L",
      "ASTM A403 WP316L",
      "ASTM A182 F316L",
      "NACE MR0175"
    ],
    "supplyForms": [
      "Sanitary Piping",
      "Ferrule Tube Fittings",
      "Weld Neck Flanges",
      "Pressure Vessel Plates",
      "Wire Mesh"
    ],
    "applications": [
      "Pharmaceutical Cleanrooms",
      "Bio-Processing Vessels",
      "Sour Gas Handling",
      "Chemical Transport Tankers"
    ]
  },
  {
    "slug": "ss-316ti",
    "grade": "SS 316Ti",
    "name": "SS 316Ti Titanium-Stabilized Stainless Steel",
    "materialId": "stainless-steel",
    "aliases": [
      "316ti",
      "ss-316ti",
      "din-1-4571",
      "uns-s31635"
    ],
    "uns": "UNS S31635",
    "din": "DIN 1.4571 (X6CrNiMoTi17-12-2)",
    "tagline": "Titanium-stabilized modification of 316 resisting sensitization during high-temperature operations (550\u00b0C - 800\u00b0C).",
    "overview": "SS 316Ti incorporates titanium stabilization to prevent chromium carbide precipitation at high operating temperatures. Highly valued in European heavy industry, heat exchangers, and exhaust treatment.",
    "chemicalComposition": [
      {
        "element": "Titanium (Ti)",
        "value": "5 x (C+N) min to 0.70 % max"
      },
      {
        "element": "Chromium (Cr)",
        "value": "16.50 - 18.50 %"
      },
      {
        "element": "Nickel (Ni)",
        "value": "10.50 - 13.50 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "2.00 - 2.50 %"
      },
      {
        "element": "Carbon (C)",
        "value": "0.08 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "500 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "200 MPa"
      },
      {
        "property": "Elongation (min)",
        "value": "35 %"
      }
    ],
    "standards": [
      "EN 10088-3",
      "DIN 1.4571",
      "ASTM A240",
      "ASTM A312"
    ],
    "supplyForms": [
      "Heat Exchanger Tubes",
      "Process Pipes",
      "Flanges",
      "Round Bars"
    ],
    "applications": [
      "Exhaust Gas Scrubbers",
      "Industrial Boilers",
      "Chemical Distillation Columns"
    ]
  },
  {
    "slug": "ss-310",
    "grade": "SS 310",
    "name": "SS 310 / 310S Heat-Resistant Stainless Steel",
    "materialId": "stainless-steel",
    "aliases": [
      "310",
      "310s",
      "ss-310",
      "ss310",
      "310-310s",
      "uns-s31000",
      "uns-s31008"
    ],
    "uns": "UNS S31000 / UNS S31008",
    "din": "DIN 1.4841 / 1.4845",
    "tagline": "High-chromium 25Cr-20Ni heat-resistant stainless steel for continuous service up to 1150\u00b0C.",
    "overview": "Grade SS 310 combines high chromium and nickel content to deliver outstanding oxidation and scale resistance up to 1150\u00b0C in mildly cyclic conditions, alongside high creep strength.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "24.00 - 26.00 %"
      },
      {
        "element": "Nickel (Ni)",
        "value": "19.00 - 22.00 %"
      },
      {
        "element": "Carbon (C)",
        "value": "0.08 % max (310S)"
      },
      {
        "element": "Silicon (Si)",
        "value": "1.50 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "515 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "205 MPa"
      },
      {
        "property": "Max Service Temp",
        "value": "1150 \u00b0C (2100 \u00b0F)"
      }
    ],
    "standards": [
      "ASTM A312 TP310S",
      "ASTM A240",
      "ASTM A403 WP310S",
      "ASTM A182 F310"
    ],
    "supplyForms": [
      "Furnace Pipes",
      "Bends & Tees",
      "Plates",
      "Furnace Fixtures"
    ],
    "applications": [
      "Thermal Boilers",
      "Cement Kiln Burners",
      "Flare Stacks",
      "Refinery Reformers"
    ]
  },
  {
    "slug": "ss-321",
    "grade": "SS 321",
    "name": "SS 321 / 321H Titanium-Stabilized Stainless Steel",
    "materialId": "stainless-steel",
    "aliases": [
      "321",
      "321h",
      "ss-321",
      "ss321",
      "321-321h",
      "uns-s32100"
    ],
    "uns": "UNS S32100 / UNS S32109",
    "din": "DIN 1.4541 (X6CrNiTi18-10)",
    "tagline": "Titanium-stabilized steel immune to intergranular corrosion in the 427\u00b0C - 816\u00b0C temperature range.",
    "overview": "SS 321 is standard 304 stabilized by titanium (minimum 5x C content). This suppresses carbide precipitation during prolonged exposure between 427\u00b0C and 816\u00b0C, ensuring high creep-rupture performance.",
    "chemicalComposition": [
      {
        "element": "Titanium (Ti)",
        "value": "5 x (C+N) min to 0.70 % max"
      },
      {
        "element": "Chromium (Cr)",
        "value": "17.00 - 19.00 %"
      },
      {
        "element": "Nickel (Ni)",
        "value": "9.00 - 12.00 %"
      },
      {
        "element": "Carbon (C)",
        "value": "0.08 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "515 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "205 MPa"
      },
      {
        "property": "Elongation (min)",
        "value": "40 %"
      }
    ],
    "standards": [
      "ASTM A312 TP321",
      "ASTM A240",
      "ASTM A403 WP321",
      "ASTM A182 F321"
    ],
    "supplyForms": [
      "Aircraft Exhaust Ducts",
      "Superheater Pipes",
      "Bellows & Expansion Joints",
      "Flanges"
    ],
    "applications": [
      "Jet Engine Manifolds",
      "Thermal Power Steam Piping",
      "Expansion Joints"
    ]
  },
  {
    "slug": "ss-347",
    "grade": "SS 347",
    "name": "SS 347 / 347H Niobium-Stabilized Stainless Steel",
    "materialId": "stainless-steel",
    "aliases": [
      "347",
      "347h",
      "ss-347",
      "347-347h",
      "uns-s34700"
    ],
    "uns": "UNS S34700 / UNS S34709",
    "din": "DIN 1.4550",
    "tagline": "Columbium/Niobium-stabilized alloy for heavy welded fabrications in severe elevated-temperature service.",
    "overview": "SS 347 is stabilized by columbium (niobium) and tantalum. It provides high creep-rupture strength at temperatures above 538\u00b0C and resists intergranular attack in polythionic acid refinery environments.",
    "chemicalComposition": [
      {
        "element": "Columbium + Tantalum",
        "value": "10 x C min to 1.10 % max"
      },
      {
        "element": "Chromium (Cr)",
        "value": "17.00 - 19.00 %"
      },
      {
        "element": "Nickel (Ni)",
        "value": "9.00 - 13.00 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "515 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "205 MPa"
      }
    ],
    "standards": [
      "ASTM A312 TP347",
      "ASTM A240",
      "ASTM A182 F347",
      "ASTM A403 WP347"
    ],
    "supplyForms": [
      "Heavy Wall Pipes",
      "Catalytic Cracking Tubing",
      "Flanges & Fittings"
    ],
    "applications": [
      "Refinery Hydrocrackers",
      "Radiant Superheaters",
      "Waste Heat Recovery"
    ]
  },
  {
    "slug": "ss-904l",
    "grade": "SS 904L",
    "name": "SS 904L Super Austenitic Stainless Steel",
    "materialId": "stainless-steel",
    "aliases": [
      "904l",
      "ss-904l",
      "uns-n08904",
      "din-1-4539"
    ],
    "uns": "UNS N08904",
    "din": "DIN 1.4539 (X1NiCrMoCu25-20-5)",
    "tagline": "High-alloy super-austenitic stainless steel with copper addition for severe sulfuric acid and chloride resistance.",
    "overview": "Grade 904L contains 4.5% molybdenum, 25% nickel, 20% chromium, and 1.5% copper. The copper addition grants extraordinary resistance to reducing acids, especially sulfuric and phosphoric acids across all concentrations.",
    "chemicalComposition": [
      {
        "element": "Nickel (Ni)",
        "value": "23.00 - 28.00 %"
      },
      {
        "element": "Chromium (Cr)",
        "value": "19.00 - 23.00 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "4.00 - 5.00 %"
      },
      {
        "element": "Copper (Cu)",
        "value": "1.00 - 2.00 %"
      },
      {
        "element": "Carbon (C)",
        "value": "0.020 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "490 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "220 MPa"
      },
      {
        "property": "PREN Pitting Index",
        "value": ">= 36"
      }
    ],
    "standards": [
      "ASTM B677 (Pipes)",
      "ASTM A240 904L",
      "ASTM B649 (Bars)",
      "ASTM B673"
    ],
    "supplyForms": [
      "Acid Piping",
      "Flanges",
      "Buttweld Fittings",
      "Valves",
      "Filter Discs"
    ],
    "applications": [
      "Sulfuric Acid Scrubbers",
      "Phosphate Fertilizer Plants",
      "Seawater Cooling",
      "Pulp Bleaching Equipment"
    ]
  },
  {
    "slug": "ss-410",
    "grade": "SS 410",
    "name": "SS 410 Martensitic Stainless Steel",
    "materialId": "stainless-steel",
    "aliases": [
      "410",
      "ss-410",
      "uns-s41000",
      "din-1-4006"
    ],
    "uns": "UNS S41000",
    "din": "DIN 1.4006",
    "tagline": "Martensitic 12% chromium stainless steel heat-treatable to high hardness and high tensile strength.",
    "overview": "Grade 410 can be hardened by heat treatment to attain tensile strengths over 1000 MPa, combining good corrosion resistance with high strength and wear resistance in steam turbine parts and pump shafts.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "11.50 - 13.50 %"
      },
      {
        "element": "Carbon (C)",
        "value": "0.08 - 0.15 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Hardness (Hardened)",
        "value": "35 - 45 HRC"
      },
      {
        "property": "Tensile Strength",
        "value": "650 - 1050 MPa"
      }
    ],
    "standards": [
      "ASTM A276",
      "ASTM A182 F6a",
      "ASTM A240"
    ],
    "supplyForms": [
      "Forged Valve Trim",
      "Shafting Bars",
      "Fasteners",
      "Cutlery Blanks"
    ],
    "applications": [
      "Steam Turbine Buckets",
      "Pump Shafts",
      "Oil Well Valve Components"
    ]
  },
  {
    "slug": "ss-420",
    "grade": "SS 420",
    "name": "SS 420 High-Carbon Martensitic Stainless Steel",
    "materialId": "stainless-steel",
    "aliases": [
      "420",
      "ss-420",
      "uns-s42000",
      "din-1-4021"
    ],
    "uns": "UNS S42000",
    "din": "DIN 1.4021",
    "tagline": "High-carbon martensitic steel with high hardness (up to 50 HRC) and superior abrasive wear resistance.",
    "overview": "SS 420 is a higher carbon modification of 410, providing increased hardness and wear resistance when quenched and tempered. Ideal for precision surgical instruments, shears, and high-wear valve seats.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "12.00 - 14.00 %"
      },
      {
        "element": "Carbon (C)",
        "value": "0.15 - 0.40 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Hardness (Tempered)",
        "value": "50 HRC max"
      },
      {
        "property": "Tensile Strength",
        "value": "700 - 1200 MPa"
      }
    ],
    "standards": [
      "ASTM A276",
      "ASTM A240"
    ],
    "supplyForms": [
      "Turned Round Bars",
      "Valve Seats",
      "Shear Blades"
    ],
    "applications": [
      "Plastic Extruder Screws",
      "Pump Plungers",
      "Needle Valves"
    ]
  },
  {
    "slug": "ss-430",
    "grade": "SS 430",
    "name": "SS 430 Ferritic Stainless Steel",
    "materialId": "stainless-steel",
    "aliases": [
      "430",
      "ss-430",
      "uns-s43000",
      "din-1-4016"
    ],
    "uns": "UNS S43000",
    "din": "DIN 1.4016",
    "tagline": "Straight 17% chromium ferritic stainless steel offering good corrosion resistance and excellent formability.",
    "overview": "SS 430 is a popular ferritic stainless steel with 17% chromium. It combines good corrosion resistance and formability with useful mechanical properties, particularly resistance to nitric acid and sulfur gases.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "16.00 - 18.00 %"
      },
      {
        "element": "Carbon (C)",
        "value": "0.12 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "450 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "205 MPa"
      }
    ],
    "standards": [
      "ASTM A240 430",
      "ASTM A268 (Tubes)"
    ],
    "supplyForms": [
      "Bright Annealed Sheets",
      "Coils",
      "Flue Liners",
      "Appliance Panels"
    ],
    "applications": [
      "Automotive Trim Panels",
      "Nitric Acid Processing",
      "Kitchen Exhaust Hoods"
    ]
  },
  {
    "slug": "astm-a106-grade-b",
    "grade": "ASTM A106 Grade B",
    "name": "ASTM A106 Grade B Carbon Steel Pipe",
    "materialId": "carbon-steel",
    "aliases": [
      "astm-a106-gr-b-c",
      "astm-a106",
      "a106",
      "a106-gr-b",
      "a106-grade-b",
      "a106-b"
    ],
    "uns": "UNS K03006",
    "din": "DIN 17175 St 45.8",
    "tagline": "Standard seamless carbon steel pipe for high-temperature and high-pressure steam service up to 425\u00b0C.",
    "overview": "ASTM A106 Grade B is the universal workhorse seamless carbon steel pipe specification for refineries, chemical processing plants, steam generation boilers, and natural gas transmission lines.",
    "chemicalComposition": [
      {
        "element": "Carbon (C)",
        "value": "0.30 % max"
      },
      {
        "element": "Manganese (Mn)",
        "value": "0.29 - 1.06 %"
      },
      {
        "element": "Silicon (Si)",
        "value": "0.10 % min"
      },
      {
        "element": "Phosphorus (P)",
        "value": "0.035 % max"
      },
      {
        "element": "Sulfur (S)",
        "value": "0.035 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "415 MPa (60 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "240 MPa (35 ksi)"
      },
      {
        "property": "Elongation in 2 inches",
        "value": "30 % min"
      }
    ],
    "standards": [
      "ASTM A106 / ASME SA106",
      "ANSI/ASME B36.10M",
      "NACE MR0175 / ISO 15156"
    ],
    "supplyForms": [
      "Heavy Wall Seamless Pipes (Sch 40 to Sch XXS)",
      "Boiler Tubes",
      "Steam Headers"
    ],
    "applications": [
      "High Pressure Steam Piping",
      "Refinery Distillation Units",
      "Oil and Gas Pipelines",
      "Thermal Power Condensers"
    ]
  },
  {
    "slug": "astm-a53-grade-b",
    "grade": "ASTM A53 Grade B",
    "name": "ASTM A53 Grade B Carbon Steel Pipe",
    "materialId": "carbon-steel",
    "aliases": [
      "astm-a53-gr-b",
      "astm-a53",
      "a53",
      "a53-grade-b",
      "a53-gr-b",
      "a53-b"
    ],
    "uns": "UNS K03005",
    "din": "DIN 1629 St 42",
    "tagline": "Standard specification for seamless and welded black and hot-dipped galvanized carbon steel pipe.",
    "overview": "ASTM A53 Grade B covers seamless and welded black and hot-dipped galvanized carbon steel pipe in NPS 1/8 to NPS 26. Widely used for mechanical and pressure applications including transport of steam, water, gas, and air.",
    "chemicalComposition": [
      {
        "element": "Carbon (C)",
        "value": "0.30 % max"
      },
      {
        "element": "Manganese (Mn)",
        "value": "1.20 % max"
      },
      {
        "element": "Phosphorus (P)",
        "value": "0.05 % max"
      },
      {
        "element": "Sulfur (S)",
        "value": "0.045 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "415 MPa (60 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "240 MPa (35 ksi)"
      },
      {
        "property": "Elongation (min)",
        "value": "25 %"
      }
    ],
    "standards": [
      "ASTM A53 / ASME SA53",
      "ASME B36.10M"
    ],
    "supplyForms": [
      "Black & Galvanized Pipes",
      "ERW Welded Pipes",
      "Structural Piping"
    ],
    "applications": [
      "Building Chilled Water Lines",
      "Natural Gas Mains",
      "Fire Protection Sprinkler Systems",
      "Structural Steel Colums"
    ]
  },
  {
    "slug": "astm-a333-grade-6",
    "grade": "ASTM A333 Grade 6",
    "name": "ASTM A333 Grade 6 Low-Temperature Carbon Steel",
    "materialId": "carbon-steel",
    "aliases": [
      "astm-a333-gr-6",
      "astm-a333",
      "a333-grade-6",
      "a333-gr-6",
      "a333-6",
      "a333"
    ],
    "uns": "UNS K03022",
    "din": "DIN 17173 TTSt 35 N",
    "tagline": "Charpy impact-tested seamless and welded carbon steel pipe certified for sub-zero cryogenic service down to -45\u00b0C.",
    "overview": "ASTM A333 Grade 6 covers nominal seamless and welded carbon steel pipe intended for cryogenic and low-temperature service. Standardized with Charpy V-notch impact testing at -45\u00b0C (-50\u00b0F).",
    "chemicalComposition": [
      {
        "element": "Carbon (C)",
        "value": "0.30 % max"
      },
      {
        "element": "Manganese (Mn)",
        "value": "0.29 - 1.06 %"
      },
      {
        "element": "Phosphorus (P)",
        "value": "0.025 % max"
      },
      {
        "element": "Sulfur (S)",
        "value": "0.025 % max"
      },
      {
        "element": "Silicon (Si)",
        "value": "0.10 % min"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "415 MPa (60 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "240 MPa (35 ksi)"
      },
      {
        "property": "Impact Test Temp",
        "value": "-45 \u00b0C (-50 \u00b0F)"
      },
      {
        "property": "Charpy Impact Energy",
        "value": "18 J (13 ft-lbf) min"
      }
    ],
    "standards": [
      "ASTM A333 / ASME SA333 Grade 6",
      "ASTM A420 WPL6",
      "ASME B36.10M"
    ],
    "supplyForms": [
      "Low-Temperature Seamless Pipes",
      "Buttweld Fittings WPL6",
      "Process Headers"
    ],
    "applications": [
      "LPG & Cryogenic Gas Transport",
      "Refrigeration Systems",
      "Arctic Oilfields",
      "Chemical Fractionation"
    ]
  },
  {
    "slug": "astm-a105",
    "grade": "ASTM A105",
    "name": "ASTM A105 Forged Carbon Steel",
    "materialId": "carbon-steel",
    "aliases": [
      "astm-a105",
      "a105",
      "a105n",
      "a-105"
    ],
    "uns": "UNS K03504",
    "din": "DIN C22.8 / 1.0460",
    "tagline": "Standard specification for forged carbon steel piping components and flanges for ambient and higher-temperature service.",
    "overview": "ASTM A105 is the industry benchmark for forged carbon steel piping components, including flanges, socket-weld fittings, threaded fittings, and valve bodies for ASME B16.5, B16.11, and B16.47 pressure ratings.",
    "chemicalComposition": [
      {
        "element": "Carbon (C)",
        "value": "0.35 % max"
      },
      {
        "element": "Manganese (Mn)",
        "value": "0.60 - 1.05 %"
      },
      {
        "element": "Silicon (Si)",
        "value": "0.10 - 0.35 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "485 MPa (70 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "250 MPa (36 ksi)"
      },
      {
        "property": "Reduction of Area (min)",
        "value": "30 %"
      }
    ],
    "standards": [
      "ASTM A105 / ASME SA105",
      "ASME B16.5",
      "ASME B16.11",
      "MSS SP-83"
    ],
    "supplyForms": [
      "Weld Neck, Slip-On & Blind Flanges",
      "Socket Weld & Threaded Elbows",
      "Weldolets & Swages"
    ],
    "applications": [
      "Hydrocarbon Pipelines",
      "Power Station Valve Blocks",
      "High Pressure Manifolds"
    ]
  },
  {
    "slug": "astm-a350-lf2",
    "grade": "ASTM A350 LF2 (Low Temp)",
    "name": "ASTM A350 LF2 Low-Temperature Carbon Steel",
    "materialId": "carbon-steel",
    "aliases": [
      "a350-lf2",
      "astm-a350",
      "lf2",
      "a350",
      "astm-a350-lf2-low-temp"
    ],
    "uns": "UNS K03011",
    "din": "DIN 1.0566",
    "tagline": "Charpy impact-tested forged carbon steel components certified for sub-zero cryogenic service down to -46\u00b0C.",
    "overview": "ASTM A350 LF2 Class 1 is a carbon-manganese steel forging specification designed specifically for low-temperature service. Mandatory Charpy V-notch impact testing at -46\u00b0C guarantees brittle fracture resistance.",
    "chemicalComposition": [
      {
        "element": "Carbon (C)",
        "value": "0.30 % max"
      },
      {
        "element": "Manganese (Mn)",
        "value": "0.60 - 1.35 %"
      },
      {
        "element": "Silicon (Si)",
        "value": "0.15 - 0.30 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength",
        "value": "485 - 655 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "250 MPa"
      },
      {
        "property": "Charpy Impact Value",
        "value": ">= 20 J at -46 \u00b0C"
      }
    ],
    "standards": [
      "ASTM A350 / ASME SA350",
      "ASME B16.5",
      "ASME B16.11"
    ],
    "supplyForms": [
      "Low Temp Forged Flanges",
      "Socket Weld Fittings",
      "Forged Valve Bodies"
    ],
    "applications": [
      "Cryogenic Gas Processing",
      "LPG & LNG Terminals",
      "Refrigerated Storage Facilities"
    ]
  },
  {
    "slug": "astm-a516-grade-70",
    "grade": "ASTM A516 Grade 70",
    "name": "ASTM A516 Grade 70 Pressure Vessel Steel",
    "materialId": "carbon-steel",
    "aliases": [
      "a516",
      "a516-gr-70",
      "a516-70",
      "astm-a516",
      "astm-a516-gr-60-70",
      "astm-a516-grade-70"
    ],
    "uns": "UNS K02700",
    "din": "DIN 17155 HII",
    "tagline": "Premier carbon steel plate specification for industrial boilers and moderate-temperature pressure vessels.",
    "overview": "ASTM A516 Grade 70 is the premier plate steel for industrial boilers and pressure vessels. Fully killed fine-grain steel possessing superior notch toughness and weldability.",
    "chemicalComposition": [
      {
        "element": "Carbon (C)",
        "value": "0.27 % max"
      },
      {
        "element": "Manganese (Mn)",
        "value": "0.85 - 1.20 %"
      },
      {
        "element": "Silicon (Si)",
        "value": "0.15 - 0.40 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength",
        "value": "485 - 620 MPa (70 - 90 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "260 MPa (38 ksi)"
      }
    ],
    "standards": [
      "ASTM A516 / ASME SA516",
      "ASME Section VIII Div 1",
      "NACE MR0175"
    ],
    "supplyForms": [
      "Heavy Pressure Vessel Plates",
      "Rolled & Welded Pipe Shells",
      "Dished Heads"
    ],
    "applications": [
      "Boiler Drums",
      "Fractionating Columns",
      "Gas Scrubbers & Heat Exchangers"
    ]
  },
  {
    "slug": "api-5l-grade-b",
    "grade": "API 5L Grade B",
    "name": "API 5L Grade B Line Pipe Steel",
    "materialId": "carbon-steel",
    "aliases": [
      "api-5l",
      "api-5l-gr-b",
      "api-5l-b",
      "api-5l-x52",
      "api-5l-x65"
    ],
    "uns": "UNS K03014",
    "din": "DIN 17172 StE 240.7",
    "tagline": "Standard pipeline steel specification for petroleum and natural gas conveying infrastructure.",
    "overview": "API 5L Grade B covers seamless and welded steel line pipe suitable for use in conveying gas, water, and oil in the oil and natural gas industries. Available in PSL 1 and PSL 2 quality tiers.",
    "chemicalComposition": [
      {
        "element": "Carbon (C)",
        "value": "0.28 % max (PSL 1) / 0.24 % max (PSL 2)"
      },
      {
        "element": "Manganese (Mn)",
        "value": "1.20 % max"
      },
      {
        "element": "Phosphorus (P)",
        "value": "0.030 % max"
      },
      {
        "element": "Sulfur (S)",
        "value": "0.030 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "415 MPa (60.2 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "245 MPa (35.5 ksi)"
      },
      {
        "property": "Elongation (min)",
        "value": "23 %"
      }
    ],
    "standards": [
      "API Specification 5L",
      "ISO 3183",
      "ASME B36.10M"
    ],
    "supplyForms": [
      "Seamless Line Pipes",
      "ERW & LSAW Pipes",
      "Induction Bends"
    ],
    "applications": [
      "Cross-Country Hydrocarbon Pipelines",
      "Offshore Flowlines",
      "Gas Distribution Grids"
    ]
  },
  {
    "slug": "astm-a335-p11",
    "grade": "ASTM A335 P11",
    "name": "ASTM A335 P11 Chrome-Moly Alloy Pipe",
    "materialId": "alloy-steel",
    "aliases": [
      "a335-p11",
      "p11",
      "sa335-p11",
      "astm-a335-p11-p22-p5-p9-p91-p92"
    ],
    "uns": "UNS K11597",
    "din": "DIN 1.7335 (13CrMo4-5)",
    "tagline": "1.25Cr-0.5Mo high-temperature alloy steel pipe for power plant steam headers up to 550\u00b0C.",
    "overview": "ASTM A335 P11 (1.25% Chromium, 0.5% Molybdenum) is formulated for elevated-temperature service in thermal power generation and petrochemical refinery processing. Molybdenum provides creep strength, while chromium provides oxidation resistance.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "1.00 - 1.50 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "0.44 - 0.65 %"
      },
      {
        "element": "Carbon (C)",
        "value": "0.05 - 0.15 %"
      },
      {
        "element": "Manganese (Mn)",
        "value": "0.30 - 0.60 %"
      },
      {
        "element": "Silicon (Si)",
        "value": "0.50 - 1.00 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "415 MPa (60 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "205 MPa (30 ksi)"
      },
      {
        "property": "Elongation (min)",
        "value": "30 %"
      }
    ],
    "standards": [
      "ASTM A335 / ASME SA335 P11",
      "ASTM A234 WP11",
      "ASTM A182 F11"
    ],
    "supplyForms": [
      "High Temp Seamless Pipes",
      "Buttweld Fittings WP11",
      "Forged Flanges F11"
    ],
    "applications": [
      "Power Plant Steam Lines",
      "Catalytic Cracking Piping",
      "Boiler Headers"
    ]
  },
  {
    "slug": "astm-a335-p22",
    "grade": "ASTM A335 P22",
    "name": "ASTM A335 P22 Chrome-Moly Alloy Pipe",
    "materialId": "alloy-steel",
    "aliases": [
      "a335-p22",
      "p22",
      "sa335-p22"
    ],
    "uns": "UNS K21590",
    "din": "DIN 1.7380 (10CrMo9-10)",
    "tagline": "2.25Cr-1Mo alloy steel pipe engineered for superheater and reheater piping up to 590\u00b0C.",
    "overview": "ASTM A335 P22 contains 2.25% Chromium and 1% Molybdenum. The higher alloy content grants enhanced creep-rupture strength, graphitization resistance, and hydrogen attack resistance.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "1.90 - 2.60 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "0.87 - 1.13 %"
      },
      {
        "element": "Carbon (C)",
        "value": "0.05 - 0.15 %"
      },
      {
        "element": "Manganese (Mn)",
        "value": "0.30 - 0.60 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "415 MPa (60 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "205 MPa (30 ksi)"
      },
      {
        "property": "Elongation (min)",
        "value": "30 %"
      }
    ],
    "standards": [
      "ASTM A335 / ASME SA335 P22",
      "ASTM A234 WP22",
      "ASTM A182 F22"
    ],
    "supplyForms": [
      "Superheater Pipes",
      "WP22 Elbows & Tees",
      "F22 Forged Flanges"
    ],
    "applications": [
      "Supercritical Boiler Piping",
      "Hydroprocessing Reactors",
      "Thermal Power Headers"
    ]
  },
  {
    "slug": "astm-a335-p5",
    "grade": "ASTM A335 P5",
    "name": "ASTM A335 P5 5Cr-0.5Mo Alloy Steel",
    "materialId": "alloy-steel",
    "aliases": [
      "a335-p5",
      "p5",
      "sa335-p5"
    ],
    "uns": "UNS K41545",
    "din": "DIN 1.7362",
    "tagline": "5% Chromium, 0.5% Molybdenum alloy steel designed for severe sulfur corrosion and high-temperature service.",
    "overview": "ASTM A335 P5 offers outstanding resistance to high-temperature hydrogen sulfide corrosion, hydrogen embrittlement, and oxidation in crude oil distillation units and petroleum cracking furnaces.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "4.00 - 6.00 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "0.45 - 0.65 %"
      },
      {
        "element": "Carbon (C)",
        "value": "0.15 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "415 MPa (60 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "205 MPa (30 ksi)"
      }
    ],
    "standards": [
      "ASTM A335 P5",
      "ASTM A234 WP5",
      "ASTM A182 F5"
    ],
    "supplyForms": [
      "Furnace Piping",
      "WP5 Fittings",
      "F5 Flanges"
    ],
    "applications": [
      "Cracking Furnaces",
      "Sulfur Recovery Units",
      "Petrochemical Piping"
    ]
  },
  {
    "slug": "astm-a335-p9",
    "grade": "ASTM A335 P9",
    "name": "ASTM A335 P9 9Cr-1Mo Alloy Steel",
    "materialId": "alloy-steel",
    "aliases": [
      "a335-p9",
      "p9",
      "sa335-p9"
    ],
    "uns": "UNS K90941",
    "din": "DIN 1.7386",
    "tagline": "9% Chromium, 1% Molybdenum intermediate alloy steel for severe oxidation up to 650\u00b0C.",
    "overview": "ASTM A335 P9 is an intermediate chrome-moly grade delivering exceptional oxidation resistance and creep strength in high sulfur refinery feeds and furnace coils.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "8.00 - 10.00 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "0.90 - 1.10 %"
      },
      {
        "element": "Carbon (C)",
        "value": "0.15 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "415 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "205 MPa"
      }
    ],
    "standards": [
      "ASTM A335 P9",
      "ASTM A234 WP9",
      "ASTM A182 F9"
    ],
    "supplyForms": [
      "Seamless Furnace Tubes",
      "WP9 Fittings",
      "F9 Forgings"
    ],
    "applications": [
      "Delayed Coking Piping",
      "Reformer Furnace Coils",
      "High Sulfur Processing"
    ]
  },
  {
    "slug": "astm-a335-p91",
    "grade": "ASTM A335 P91",
    "name": "ASTM A335 P91 Creep-Strength Enhanced Alloy Steel",
    "materialId": "alloy-steel",
    "aliases": [
      "a335-p91",
      "p91",
      "sa335-p91"
    ],
    "uns": "UNS K91560",
    "din": "DIN 1.4903 (X10CrMoVNb9-1)",
    "tagline": "Advanced 9Cr-1Mo-V martensitic alloy steel with micro-alloyed vanadium and niobium for 600\u00b0C steam power.",
    "overview": "ASTM A335 P91 is a modified 9Cr-1Mo steel micro-alloyed with Vanadium (V) and Niobium (Nb). It provides exceptional creep rupture strength, allowing thinner pipe walls in ultra-supercritical power plants.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "8.00 - 9.50 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "0.85 - 1.05 %"
      },
      {
        "element": "Vanadium (V)",
        "value": "0.18 - 0.25 %"
      },
      {
        "element": "Niobium (Nb)",
        "value": "0.06 - 0.10 %"
      },
      {
        "element": "Nitrogen (N)",
        "value": "0.03 - 0.07 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "585 MPa (85 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "415 MPa (60 ksi)"
      },
      {
        "property": "Elongation (min)",
        "value": "20 %"
      }
    ],
    "standards": [
      "ASTM A335 P91",
      "ASTM A234 WP91",
      "ASTM A182 F91"
    ],
    "supplyForms": [
      "Ultra-Supercritical Steam Pipes",
      "WP91 Forged Bends",
      "F91 Flanges"
    ],
    "applications": [
      "Ultra-Supercritical Power Stations",
      "High Pressure Steam Headers",
      "HRSG Transition Piping"
    ]
  },
  {
    "slug": "astm-a182-f11",
    "grade": "ASTM A182 F11",
    "name": "ASTM A182 F11 Forged Alloy Steel",
    "materialId": "alloy-steel",
    "aliases": [
      "a182-f11",
      "f11",
      "f-11"
    ],
    "uns": "UNS K11572",
    "din": "DIN 1.7335",
    "tagline": "Forged 1.25Cr-0.5Mo alloy steel flanges, fittings, and valve bodies for high-temperature pressure piping.",
    "overview": "ASTM A182 F11 Class 2 is the forged companion to A335 P11 pipe, utilized for ASME B16.5 flanges, valves, and forged socket-weld fittings in thermal utilities.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "1.00 - 1.50 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "0.44 - 0.65 %"
      },
      {
        "element": "Carbon (C)",
        "value": "0.10 - 0.20 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "485 MPa (70 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "275 MPa (40 ksi)"
      }
    ],
    "standards": [
      "ASTM A182 / ASME SA182 F11",
      "ASME B16.5",
      "ASME B16.11"
    ],
    "supplyForms": [
      "Weld Neck Flanges",
      "Socket Weld Elbows & Tees",
      "Forged Valves"
    ],
    "applications": [
      "Boiler Steam Manifolds",
      "Refinery Process Lines",
      "High Pressure Valves"
    ]
  },
  {
    "slug": "astm-a182-f22",
    "grade": "ASTM A182 F22",
    "name": "ASTM A182 F22 Forged Alloy Steel",
    "materialId": "alloy-steel",
    "aliases": [
      "a182-f22",
      "f22",
      "f-22"
    ],
    "uns": "UNS K21590",
    "din": "DIN 1.7380",
    "tagline": "Forged 2.25Cr-1Mo alloy steel flanges for high pressure steam headers up to Class 2500.",
    "overview": "ASTM A182 F22 Class 3 is a normalized and tempered alloy forging specification for high-temperature steam and hydrocracking applications.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "2.00 - 2.50 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "0.87 - 1.13 %"
      },
      {
        "element": "Carbon (C)",
        "value": "0.15 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "515 MPa (75 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "310 MPa (45 ksi)"
      }
    ],
    "standards": [
      "ASTM A182 F22",
      "ASME B16.5",
      "ASME B16.47"
    ],
    "supplyForms": [
      "High Pressure Flanges",
      "Forged Valve Blocks",
      "Olets"
    ],
    "applications": [
      "Superheater Flanges",
      "Hydrocracker Piping",
      "Thermal Manifolds"
    ]
  },
  {
    "slug": "astm-a182-f91",
    "grade": "ASTM A182 F91",
    "name": "ASTM A182 F91 Forged Alloy Steel",
    "materialId": "alloy-steel",
    "aliases": [
      "a182-f91",
      "f91",
      "f-91"
    ],
    "uns": "UNS K90901",
    "din": "DIN 1.4903",
    "tagline": "High-temperature forged 9Cr-1Mo-V components for advanced ultra-supercritical thermal stations.",
    "overview": "ASTM A182 F91 forgings partner with P91 pipes, providing high tensile strength and microstructural stability under cyclic thermal stress.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "8.00 - 9.50 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "0.85 - 1.05 %"
      },
      {
        "element": "Vanadium (V)",
        "value": "0.18 - 0.25 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "585 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "415 MPa"
      }
    ],
    "standards": [
      "ASTM A182 F91",
      "ASME B16.5"
    ],
    "supplyForms": [
      "Forged Valve Bodies",
      "High Pressure Flanges",
      "Branch Outlets"
    ],
    "applications": [
      "Ultra-Supercritical Thermal Plants",
      "Main Steam Piping",
      "Heavy Valve Casings"
    ]
  },
  {
    "slug": "aisi-4140",
    "grade": "AISI 4140",
    "name": "AISI 4140 Chromium-Molybdenum Steel",
    "materialId": "alloy-steel",
    "aliases": [
      "4140",
      "sae-4140",
      "aisi4140",
      "en19-equivalent"
    ],
    "uns": "UNS G41400",
    "din": "DIN 1.7225 (42CrMo4)",
    "tagline": "Versatile chrome-moly medium carbon steel heat-treatable to high toughness, fatigue strength, and wear resistance.",
    "overview": "AISI 4140 is a versatile chromium-molybdenum alloy steel widely used in heavy machinery, downhole drilling tools, pump shafts, and high-tensile threaded studs (ASTM A193 B7).",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "0.80 - 1.10 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "0.15 - 0.25 %"
      },
      {
        "element": "Carbon (C)",
        "value": "0.38 - 0.43 %"
      },
      {
        "element": "Manganese (Mn)",
        "value": "0.75 - 1.00 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (Quenched & Tempered)",
        "value": "850 - 1000 MPa"
      },
      {
        "property": "Yield Strength",
        "value": "650 - 750 MPa"
      },
      {
        "property": "Hardness",
        "value": "28 - 32 HRC"
      }
    ],
    "standards": [
      "ASTM A29",
      "ASTM A193 Grade B7 (Studs)",
      "AISI 4140"
    ],
    "supplyForms": [
      "Turned Round Bars",
      "High Tensile Stud Bolts",
      "Shafts & Forgings"
    ],
    "applications": [
      "Oil & Gas Drill Collars",
      "Turbine Shafts",
      "Heavy Industrial Stud Bolts"
    ]
  },
  {
    "slug": "aisi-4340",
    "grade": "AISI 4340",
    "name": "AISI 4340 Nickel-Chromium-Molybdenum Steel",
    "materialId": "alloy-steel",
    "aliases": [
      "4340",
      "sae-4340",
      "aisi4340",
      "en24-equivalent"
    ],
    "uns": "UNS G43400",
    "din": "DIN 1.6511 (36CrNiMo4)",
    "tagline": "High-strength nickel-chrome-moly alloy steel known for deep hardenability and shock resistance.",
    "overview": "AISI 4340 is a heat-treatable, low-alloy steel containing nickel, chromium, and molybdenum. Known for its toughness and capability of developing high strength in heat-treated condition while retaining good fatigue strength.",
    "chemicalComposition": [
      {
        "element": "Nickel (Ni)",
        "value": "1.65 - 2.00 %"
      },
      {
        "element": "Chromium (Cr)",
        "value": "0.70 - 0.90 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "0.20 - 0.30 %"
      },
      {
        "element": "Carbon (C)",
        "value": "0.38 - 0.43 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength",
        "value": "1000 - 1200 MPa"
      },
      {
        "property": "Yield Strength",
        "value": "850 MPa min"
      },
      {
        "property": "Hardness",
        "value": "32 - 38 HRC"
      }
    ],
    "standards": [
      "ASTM A29 4340",
      "MIL-S-5000",
      "EN24 Equivalent"
    ],
    "supplyForms": [
      "Forged Rounds",
      "Aircraft Landing Gears",
      "Power Transmission Shafts"
    ],
    "applications": [
      "Aerospace Structural Parts",
      "Heavy Rotor Shafts",
      "High Dynamic Load Gears"
    ]
  },
  {
    "slug": "en19",
    "grade": "EN19",
    "name": "EN19 High-Tensile Engineering Alloy Steel",
    "materialId": "alloy-steel",
    "aliases": [
      "en-19",
      "709m40"
    ],
    "uns": "BS 970 709M40",
    "din": "DIN 1.7225",
    "tagline": "British standard 1% Cr-Mo high-tensile alloy steel delivering excellent wear and shock resistance.",
    "overview": "EN19 is a high quality, high-tensile alloy steel offering good ductility and shock resistance with excellent wear resistance. It can be supplied induction hardened or nitrided for extreme abrasive service.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "0.90 - 1.50 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "0.20 - 0.40 %"
      },
      {
        "element": "Carbon (C)",
        "value": "0.35 - 0.45 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (T condition)",
        "value": "850 - 1000 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "680 MPa"
      }
    ],
    "standards": [
      "BS 970 709M40",
      "IS 4140 equivalent"
    ],
    "supplyForms": [
      "Bright Drawn Bars",
      "Black Forged Rounds",
      "Machined Shafts"
    ],
    "applications": [
      "Crankshafts & Axles",
      "Connecting Rods",
      "High Pressure Studs"
    ]
  },
  {
    "slug": "en24",
    "grade": "EN24",
    "name": "EN24 Nickel-Chrome-Moly Alloy Steel",
    "materialId": "alloy-steel",
    "aliases": [
      "en-24",
      "817m40"
    ],
    "uns": "BS 970 817M40",
    "din": "DIN 1.6582",
    "tagline": "Popular 1.5% Ni-Cr-Mo alloy engineering steel providing high strength and toughness across heavy sections.",
    "overview": "EN24 is a nickel-chromium-molybdenum specification offering high tensile steel strength, with excellent shock resistance and resistance to wear. It retains good properties at high temperatures.",
    "chemicalComposition": [
      {
        "element": "Nickel (Ni)",
        "value": "1.30 - 1.80 %"
      },
      {
        "element": "Chromium (Cr)",
        "value": "0.90 - 1.40 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "0.20 - 0.35 %"
      },
      {
        "element": "Carbon (C)",
        "value": "0.36 - 0.44 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (V condition)",
        "value": "1000 - 1150 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "850 MPa"
      }
    ],
    "standards": [
      "BS 970 817M40",
      "AISI 4340 Equivalent"
    ],
    "supplyForms": [
      "Forged Blocks",
      "Heavy Section Bars",
      "Machined Spindles"
    ],
    "applications": [
      "Heavy Locomotive Shafts",
      "Power Transmission Gears",
      "High Stress Studs"
    ]
  },
  {
    "slug": "uns-s31803-duplex-2205",
    "grade": "UNS S31803 (Duplex 2205)",
    "name": "Duplex 2205 (UNS S31803 / S32205)",
    "materialId": "duplex-stainless-steel",
    "aliases": [
      "2205",
      "duplex-2205",
      "uns-s31803",
      "uns-s32205",
      "s31803",
      "s32205",
      "f51",
      "uns-s31803-s32205"
    ],
    "uns": "UNS S31803 / UNS S32205",
    "din": "DIN 1.4462 (X2CrNiMoN22-5-3)",
    "tagline": "Dual-phase 22% Cr austenitic-ferritic alloy delivering twice the yield strength of standard austenitic stainless steels.",
    "overview": "Duplex 2205 is the most widely utilized duplex stainless steel grade in the world. It features a balanced 50:50 austenitic-ferritic microstructure that provides extraordinary resistance to chloride stress corrosion cracking (SCC), high mechanical yield strength (~450 MPa), and outstanding pitting resistance with a PREN index of 34 - 36.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "22.00 - 23.00 %"
      },
      {
        "element": "Nickel (Ni)",
        "value": "4.50 - 6.50 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "3.00 - 3.50 %"
      },
      {
        "element": "Nitrogen (N)",
        "value": "0.14 - 0.20 %"
      },
      {
        "element": "Carbon (C)",
        "value": "0.030 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "655 MPa (95 ksi)"
      },
      {
        "property": "Yield Strength 0.2% Proof (min)",
        "value": "450 MPa (65 ksi)"
      },
      {
        "property": "Elongation in 2 inches (min)",
        "value": "25 %"
      },
      {
        "property": "PREN",
        "value": ">= 35"
      }
    ],
    "standards": [
      "ASTM A790 (Pipes)",
      "ASTM A240",
      "ASTM A815 WPS31803",
      "ASTM A182 F51/F60",
      "NACE MR0175"
    ],
    "supplyForms": [
      "High Pressure Process Pipes",
      "Forged Flanges & Valves",
      "Buttweld Fittings",
      "Heavy Plates"
    ],
    "applications": [
      "Offshore Oil & Gas Risers",
      "Desalination Reverse Osmosis",
      "Chemical Product Tankers",
      "Sour Gas Scrubbers"
    ]
  },
  {
    "slug": "uns-s32205",
    "grade": "UNS S32205",
    "name": "Duplex Stainless Steel UNS S32205",
    "materialId": "duplex-stainless-steel",
    "aliases": [
      "s32205",
      "uns-s32205",
      "f60"
    ],
    "uns": "UNS S32205",
    "din": "DIN 1.4462",
    "tagline": "Tighter chemistry restriction of 2205 with higher minimum Cr, Mo, and N for guaranteed corrosion resistance.",
    "overview": "UNS S32205 is the dual-certified enhanced specification of UNS S31803, requiring higher minimum nitrogen, molybdenum, and chromium to guarantee superior resistance to pitting and stress corrosion cracking.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "22.00 - 23.00 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "3.10 - 3.50 %"
      },
      {
        "element": "Nickel (Ni)",
        "value": "4.50 - 6.50 %"
      },
      {
        "element": "Nitrogen (N)",
        "value": "0.14 - 0.20 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "655 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "450 MPa"
      },
      {
        "property": "PREN Index",
        "value": ">= 35"
      }
    ],
    "standards": [
      "ASTM A790 S32205",
      "ASTM A240",
      "ASTM A182 F60"
    ],
    "supplyForms": [
      "Seamless Piping",
      "Flanges",
      "Plates",
      "Fasteners"
    ],
    "applications": [
      "Marine Processing Manifolds",
      "Offshore Flowlines",
      "Pulp Mill Digesters"
    ]
  },
  {
    "slug": "f51",
    "grade": "F51",
    "name": "Duplex F51 Forged Steel",
    "materialId": "duplex-stainless-steel",
    "aliases": [
      "f-51",
      "a182-f51",
      "forged-f51"
    ],
    "uns": "UNS S31803",
    "din": "DIN 1.4462",
    "tagline": "Forged duplex steel designation per ASTM A182 for flanges, valves, and high-pressure piping fittings.",
    "overview": "F51 represents the forging designation conforming to ASTM A182 for duplex stainless steel UNS S31803. Used across high-pressure valves and subsea flanges.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "21.00 - 23.00 %"
      },
      {
        "element": "Nickel (Ni)",
        "value": "4.50 - 6.50 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "2.50 - 3.50 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "620 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "450 MPa"
      }
    ],
    "standards": [
      "ASTM A182 F51",
      "ASME B16.5",
      "NORSOK M-650"
    ],
    "supplyForms": [
      "Weld Neck Flanges",
      "Blind Flanges",
      "Forged Valve Blocks"
    ],
    "applications": [
      "Subsea Wellhead Flanges",
      "Pressure Relief Valves",
      "Offshore Manifolds"
    ]
  },
  {
    "slug": "en-1-4462",
    "grade": "EN 1.4462",
    "name": "EN 1.4462 Duplex Stainless Steel",
    "materialId": "duplex-stainless-steel",
    "aliases": [
      "1-4462",
      "din-1-4462",
      "x2crnimon22-5-3"
    ],
    "uns": "EN 1.4462",
    "din": "DIN X2CrNiMoN22-5-3",
    "tagline": "European standard austenitic-ferritic stainless steel matching UNS S31803 / S32205 parameters.",
    "overview": "EN 1.4462 is the European standard designation for 2205 duplex stainless steel, widely applied in chemical plant equipment, storage tanks, and European civil offshore engineering.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "21.00 - 23.00 %"
      },
      {
        "element": "Nickel (Ni)",
        "value": "4.50 - 6.50 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "2.50 - 3.50 %"
      },
      {
        "element": "Nitrogen (N)",
        "value": "0.10 - 0.22 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength",
        "value": "650 - 880 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "450 MPa"
      }
    ],
    "standards": [
      "EN 10088-3",
      "EN 10216-5",
      "DIN 1.4462"
    ],
    "supplyForms": [
      "Seamless Tubes",
      "Sheets",
      "Fittings",
      "Rods"
    ],
    "applications": [
      "Desalination Plants",
      "Chemical Pressure Vessels",
      "Marine Propeller Shafts"
    ]
  },
  {
    "slug": "uns-s32750-super-duplex-2507",
    "grade": "UNS S32750 (2507 / F53)",
    "name": "Super Duplex 2507 (UNS S32750 / F53)",
    "materialId": "super-duplex-stainless-steel",
    "aliases": [
      "2507",
      "super-duplex-2507",
      "uns-s32750",
      "s32750",
      "f53",
      "uns-s32750-2507-f53",
      "uns-s32750-s32760"
    ],
    "uns": "UNS S32750",
    "din": "DIN 1.4410 (X2CrNiMoN25-7-4)",
    "tagline": "High PREN (>42) 25% Cr super duplex steel engineered for extreme offshore subsea halogen environments.",
    "overview": "Super Duplex 2507 is formulated with 25% chromium, 4% molybdenum, and 7% nickel. With an exceptional Pitting Resistance Equivalent Number (PREN) exceeding 42, it provides near-immunity to chloride pitting, crevice attack, and stress corrosion cracking under extreme hydrostatic pressures in offshore subsea fields.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "24.00 - 26.00 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "3.00 - 5.00 %"
      },
      {
        "element": "Nickel (Ni)",
        "value": "6.00 - 8.00 %"
      },
      {
        "element": "Nitrogen (N)",
        "value": "0.24 - 0.32 %"
      },
      {
        "element": "Carbon (C)",
        "value": "0.030 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "750 MPa (116 ksi)"
      },
      {
        "property": "Yield Strength 0.2% Proof (min)",
        "value": "550 MPa (80 ksi)"
      },
      {
        "property": "Elongation (min)",
        "value": "15 %"
      },
      {
        "property": "PREN Value",
        "value": ">= 42"
      }
    ],
    "standards": [
      "ASTM A790 S32750",
      "ASTM A240",
      "ASTM A182 F53",
      "ASTM A815 WPS32750",
      "NORSOK M-630 / M-650"
    ],
    "supplyForms": [
      "Subsea Flowlines & Risers",
      "Forged Flanges & Swivels",
      "Heavy Valves",
      "High Tensile Fasteners"
    ],
    "applications": [
      "Subsea Umbilicals & Manifolds",
      "Marine Seawater Firewater Systems",
      "FGD Utility Scrubbers",
      "High Pressure Reverse Osmosis"
    ]
  },
  {
    "slug": "uns-s32760-zeron-100",
    "grade": "UNS S32760 (Zeron 100 / F55)",
    "name": "Super Duplex Zeron 100 (UNS S32760 / F55)",
    "materialId": "super-duplex-stainless-steel",
    "aliases": [
      "zeron-100",
      "uns-s32760",
      "s32760",
      "f55",
      "zeron100"
    ],
    "uns": "UNS S32760",
    "din": "DIN 1.4501",
    "tagline": "Tungsten and copper added super duplex alloy providing outstanding resistance in aggressive hot brine.",
    "overview": "UNS S32760 (Zeron 100 / F55) contains additions of tungsten (0.5-1.0%) and copper (0.5-1.0%). These alloy additions enhance pitting and erosion-corrosion resistance in hot seawater and mining leach acids.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "24.00 - 26.00 %"
      },
      {
        "element": "Nickel (Ni)",
        "value": "6.00 - 8.00 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "3.00 - 4.00 %"
      },
      {
        "element": "Tungsten (W)",
        "value": "0.50 - 1.00 %"
      },
      {
        "element": "Copper (Cu)",
        "value": "0.50 - 1.00 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "750 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "550 MPa"
      },
      {
        "property": "PRENW Value",
        "value": ">= 42"
      }
    ],
    "standards": [
      "ASTM A790 S32760",
      "ASTM A182 F55",
      "NACE MR0175"
    ],
    "supplyForms": [
      "Pipes & Tubes",
      "Fittings",
      "Flanges",
      "Plates"
    ],
    "applications": [
      "Seawater Injection Systems",
      "Flue Gas Desulfurization Scrubbers",
      "Offshore Fire Mains"
    ]
  },
  {
    "slug": "en-1-4410",
    "grade": "EN 1.4410",
    "name": "EN 1.4410 Super Duplex Stainless Steel",
    "materialId": "super-duplex-stainless-steel",
    "aliases": [
      "1-4410",
      "din-1-4410"
    ],
    "uns": "EN 1.4410",
    "din": "DIN X2CrNiMoN25-7-4",
    "tagline": "European designation for 25Cr super duplex stainless steel for demanding marine processes.",
    "overview": "EN 1.4410 is the European standard equivalent of 2507 super duplex stainless steel, engineered for highest mechanical stress and corrosive chloride media.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "24.00 - 26.00 %"
      },
      {
        "element": "Nickel (Ni)",
        "value": "6.00 - 8.00 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "3.00 - 4.50 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength",
        "value": "730 - 930 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "530 MPa"
      }
    ],
    "standards": [
      "EN 10088-3",
      "EN 10216-5"
    ],
    "supplyForms": [
      "Process Pipes",
      "Buttweld Fittings",
      "Forged Discs"
    ],
    "applications": [
      "Marine Chemical Tankers",
      "Offshore Heat Exchangers",
      "Desalination Pressure Vessels"
    ]
  },
  {
    "slug": "nickel-200",
    "grade": "Nickel 200 (UNS N02200)",
    "name": "Nickel 200 Commercially Pure Nickel",
    "materialId": "nickel-alloys",
    "aliases": [
      "nickel-200",
      "uns-n02200",
      "n02200",
      "alloy-200"
    ],
    "uns": "UNS N02200",
    "din": "DIN 2.4066",
    "tagline": "99.6% commercially pure nickel providing outstanding resistance to caustic alkalies across all temperatures.",
    "overview": "Nickel 200 is commercially pure wrought nickel with good mechanical properties and excellent resistance to many corrosive environments, particularly caustic soda at temperatures up to and including the molten state.",
    "chemicalComposition": [
      {
        "element": "Nickel + Cobalt (Ni+Co)",
        "value": "99.00 % min"
      },
      {
        "element": "Copper (Cu)",
        "value": "0.25 % max"
      },
      {
        "element": "Iron (Fe)",
        "value": "0.40 % max"
      },
      {
        "element": "Carbon (C)",
        "value": "0.15 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "380 MPa (55 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "105 MPa (15 ksi)"
      },
      {
        "property": "Thermal Conductivity",
        "value": "70.2 W/m-K"
      }
    ],
    "standards": [
      "ASTM B160 (Bars)",
      "ASTM B161 (Pipes)",
      "ASTM B162 (Plates)",
      "ASTM B366 (Fittings)"
    ],
    "supplyForms": [
      "Seamless Pipes & Tubes",
      "Sheets & Plates",
      "Round Bars",
      "Forged Flanges"
    ],
    "applications": [
      "Caustic Soda Evaporators",
      "Chlorine Manufacture",
      "Synthetic Fiber Production",
      "Fluorine Generation"
    ]
  },
  {
    "slug": "nickel-201",
    "grade": "Nickel 201 (UNS N02201)",
    "name": "Nickel 201 Low-Carbon Nickel",
    "materialId": "nickel-alloys",
    "aliases": [
      "nickel-201",
      "uns-n02201",
      "n02201",
      "alloy-201"
    ],
    "uns": "UNS N02201",
    "din": "DIN 2.4068",
    "tagline": "Low-carbon modification of Nickel 200 preventing graphitization at temperatures above 315\u00b0C.",
    "overview": "Nickel 201 is the low-carbon version of Nickel 200 (carbon max 0.02%). It is preferred for service temperatures above 315\u00b0C (600\u00b0F) where Nickel 200 may suffer intergranular graphitization embrittlement.",
    "chemicalComposition": [
      {
        "element": "Nickel + Cobalt (Ni+Co)",
        "value": "99.00 % min"
      },
      {
        "element": "Carbon (C)",
        "value": "0.02 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "345 MPa (50 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "70 MPa (10 ksi)"
      }
    ],
    "standards": [
      "ASTM B161",
      "ASTM B162",
      "ASTM B160",
      "DIN 2.4068"
    ],
    "supplyForms": [
      "High Temperature Pipes",
      "Reactor Vessel Plates",
      "Turned Shafts"
    ],
    "applications": [
      "High Temperature Caustic Handling",
      "Molten Salt Reactors",
      "Vinyl Chloride Monomer Production"
    ]
  },
  {
    "slug": "monel-400",
    "grade": "Monel 400 (UNS N04400)",
    "name": "Monel 400 Nickel-Copper Superalloy",
    "materialId": "monel",
    "aliases": [
      "monel-400",
      "monel400",
      "uns-n04400",
      "n04400",
      "alloy-400",
      "monel-400-uns-n04400"
    ],
    "uns": "UNS N04400",
    "din": "DIN 2.4360",
    "tagline": "Solid-solution 67% Nickel - 30% Copper alloy renowned for total immunity to hydrofluoric acid and rapidly flowing seawater.",
    "overview": "Monel 400 is a ductile nickel-copper alloy resistant to a wide range of corrosive conditions. It provides high strength and toughness across temperature ranges from sub-zero to 550\u00b0C and is virtually immune to chloride-induced stress corrosion cracking in marine and chemical alkylation services.",
    "chemicalComposition": [
      {
        "element": "Nickel (Ni)",
        "value": "63.00 % min"
      },
      {
        "element": "Copper (Cu)",
        "value": "28.00 - 34.00 %"
      },
      {
        "element": "Iron (Fe)",
        "value": "2.50 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "550 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "240 MPa"
      }
    ],
    "standards": [
      "ASTM B165 (Pipes)",
      "ASTM B127 (Plates)",
      "ASTM B564",
      "ASTM B164"
    ],
    "supplyForms": [
      "Marine Propeller Shafts",
      "HF Alkylation Pipes",
      "Heat Exchanger Tubes",
      "Seawater Flanges"
    ],
    "applications": [
      "Marine Propeller & Pump Shafting",
      "Hydrofluoric Acid Alkylation Plants",
      "Crude Oil Distillation Pre-heaters"
    ]
  },
  {
    "slug": "monel-k500",
    "grade": "Monel K500 (UNS N05500)",
    "name": "Monel K500 Age-Hardenable Nickel-Copper Alloy",
    "materialId": "monel",
    "aliases": [
      "monel-k500",
      "monelk500",
      "uns-n05500",
      "n05500",
      "alloy-k500"
    ],
    "uns": "UNS N05500",
    "din": "DIN 2.4375",
    "tagline": "Precipitation-hardened nickel-copper alloy combining Monel 400 corrosion resistance with 3x higher tensile strength.",
    "overview": "Monel K-500 combines the excellent corrosion resistance of Monel 400 with the added advantages of greater strength and hardness through the addition of aluminum and titanium for precipitation age-hardening.",
    "chemicalComposition": [
      {
        "element": "Nickel (Ni)",
        "value": "63.00 % min"
      },
      {
        "element": "Copper (Cu)",
        "value": "27.00 - 33.00 %"
      },
      {
        "element": "Aluminum (Al)",
        "value": "2.30 - 3.15 %"
      },
      {
        "element": "Titanium (Ti)",
        "value": "0.35 - 0.85 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "965 MPa (140 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "690 MPa (100 ksi)"
      },
      {
        "property": "Hardness",
        "value": "28 - 35 HRC"
      }
    ],
    "standards": [
      "ASTM B865",
      "QQ-N-286",
      "BS 3076 NA18",
      "NACE MR0175"
    ],
    "supplyForms": [
      "High Tensile Pump Shafts",
      "Marine Fasteners",
      "Valve Stems",
      "Drill Collars"
    ],
    "applications": [
      "Subsea Wellhead Fasteners",
      "Non-Magnetic Drill Collars",
      "Marine Impellers & Valve Trims"
    ]
  },
  {
    "slug": "din-2-4360",
    "grade": "DIN 2.4360",
    "name": "DIN 2.4360 Nickel-Copper Alloy",
    "materialId": "monel",
    "aliases": [
      "2-4360",
      "din2-4360"
    ],
    "uns": "DIN 2.4360",
    "din": "DIN NiCu30Fe",
    "tagline": "German standard specification for Monel 400 equivalent marine and chemical alloy.",
    "overview": "DIN 2.4360 is the German DIN designation for wrought nickel-copper alloy NiCu30Fe, universally specified across European naval shipbuilding and chemical refineries.",
    "chemicalComposition": [
      {
        "element": "Nickel (Ni)",
        "value": "63.00 % min"
      },
      {
        "element": "Copper (Cu)",
        "value": "28.00 - 34.00 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength",
        "value": "450 - 650 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "180 MPa"
      }
    ],
    "standards": [
      "DIN 17743",
      "DIN 17750",
      "DIN 17751"
    ],
    "supplyForms": [
      "Seamless Pipes",
      "Sheets",
      "Flanges",
      "Round Bars"
    ],
    "applications": [
      "Naval Ship Cooling",
      "Chemical Processing",
      "Offshore Water Systems"
    ]
  },
  {
    "slug": "inconel-600",
    "grade": "Inconel 600 (UNS N06600)",
    "name": "Inconel 600 Nickel-Chromium Alloy",
    "materialId": "inconel",
    "aliases": [
      "inconel-600",
      "inconel600",
      "uns-n06600",
      "n06600",
      "alloy-600",
      "inconel-600-uns-n06600"
    ],
    "uns": "UNS N06600",
    "din": "DIN 2.4816",
    "tagline": "Standard 72% Nickel alloy resisting high-temperature oxidation, carburization, and caustic alkali corrosion.",
    "overview": "Inconel 600 is an engineering material used extensively in applications requiring resistance to corrosion and heat. The alloy contains minimum 72% nickel, making it virtually immune to chloride-ion stress-corrosion cracking and highly resistant to dry chlorine up to 550\u00b0C.",
    "chemicalComposition": [
      {
        "element": "Nickel (Ni)",
        "value": "72.00 % min"
      },
      {
        "element": "Chromium (Cr)",
        "value": "14.00 - 17.00 %"
      },
      {
        "element": "Iron (Fe)",
        "value": "6.00 - 10.00 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "550 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "240 MPa"
      }
    ],
    "standards": [
      "ASTM B167 (Pipes)",
      "ASTM B168 (Plates)",
      "ASTM B564",
      "DIN 2.4816"
    ],
    "supplyForms": [
      "Thermocouple Sheaths",
      "Furnace Retorts",
      "Piping & Flanges"
    ],
    "applications": [
      "Heat-Treating Baskets",
      "Nuclear Steam Generator Tubing",
      "Chemical Chlorination Reactors"
    ]
  },
  {
    "slug": "inconel-601",
    "grade": "Inconel 601",
    "name": "Inconel 601 High-Temperature Oxidation Resistant Alloy",
    "materialId": "inconel",
    "aliases": [
      "inconel-601",
      "inconel601",
      "uns-n06601",
      "n06601",
      "alloy-601"
    ],
    "uns": "UNS N06601",
    "din": "DIN 2.4851",
    "tagline": "Aluminum-enhanced nickel-chromium alloy offering outstanding resistance to cyclic oxidation up to 1250\u00b0C.",
    "overview": "Inconel 601 features a significant addition of aluminum (1.0-1.7%) that forms a tenacious protective oxide layer, providing outstanding resistance to high-temperature oxidation, carburization, and nitriding up to 1250\u00b0C.",
    "chemicalComposition": [
      {
        "element": "Nickel (Ni)",
        "value": "58.00 - 63.00 %"
      },
      {
        "element": "Chromium (Cr)",
        "value": "21.00 - 25.00 %"
      },
      {
        "element": "Aluminum (Al)",
        "value": "1.00 - 1.70 %"
      },
      {
        "element": "Iron (Fe)",
        "value": "Balance"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "550 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "205 MPa"
      },
      {
        "property": "Max Service Temp",
        "value": "1250 \u00b0C"
      }
    ],
    "standards": [
      "ASTM B167",
      "ASTM B168",
      "DIN 2.4851"
    ],
    "supplyForms": [
      "Furnace Radiant Tubes",
      "Thermal Baskets",
      "Heater Coils"
    ],
    "applications": [
      "Heat Treat Furnaces",
      "Petrochemical Radiant Reheaters",
      "Solid Oxide Fuel Cells"
    ]
  },
  {
    "slug": "inconel-625",
    "grade": "Inconel 625 (UNS N06625)",
    "name": "Inconel 625 Superalloy",
    "materialId": "inconel",
    "aliases": [
      "inconel-625",
      "inconel625",
      "uns-n06625",
      "n06625",
      "alloy-625",
      "inconel-625-uns-n06625"
    ],
    "uns": "UNS N06625",
    "din": "DIN 2.4856 (NiCr22Mo9Nb)",
    "tagline": "High-strength molybdenum-niobium strengthened nickel-chromium superalloy immune to chloride cracking.",
    "overview": "Inconel 625 is a solid-solution strengthened nickel-based superalloy containing 9% molybdenum and 3.6% niobium. It maintains excellent mechanical strength from cryogenic temperatures up to 982\u00b0C (1800\u00b0F) while exhibiting outstanding resistance to fatigue and oxidation.",
    "chemicalComposition": [
      {
        "element": "Nickel (Ni)",
        "value": "58.00 % min"
      },
      {
        "element": "Chromium (Cr)",
        "value": "20.00 - 23.00 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "8.00 - 10.00 %"
      },
      {
        "element": "Niobium + Tantalum (Nb+Ta)",
        "value": "3.15 - 4.15 %"
      },
      {
        "element": "Iron (Fe)",
        "value": "5.00 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "827 MPa (120 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "414 MPa (60 ksi)"
      },
      {
        "property": "Elongation (min)",
        "value": "30 %"
      }
    ],
    "standards": [
      "ASTM B444 (Pipes)",
      "ASTM B443 (Plates)",
      "ASTM B564 (Flanges)",
      "NACE MR0175"
    ],
    "supplyForms": [
      "Exhaust Ducting",
      "Forged Flanges",
      "Turbine Rings",
      "Buttweld Fittings"
    ],
    "applications": [
      "Aerospace Jet Exhausts",
      "Subsea Mooring Cables",
      "Nuclear Core Components",
      "Flare Stacks"
    ]
  },
  {
    "slug": "inconel-718",
    "grade": "Inconel 718 (UNS N07718)",
    "name": "Inconel 718 High-Strength Aerospace Superalloy",
    "materialId": "inconel",
    "aliases": [
      "inconel-718",
      "inconel718",
      "uns-n07718",
      "n07718",
      "alloy-718"
    ],
    "uns": "UNS N07718",
    "din": "DIN 2.4668",
    "tagline": "Precipitation-hardenable nickel superalloy with outstanding high yield strength up to 700\u00b0C.",
    "overview": "Inconel 718 is a precipitation-hardening nickel-chromium-iron superalloy containing niobium and molybdenum. It combines high yield strength (over 1000 MPa), good ductility, and good weldability without post-weld cracking.",
    "chemicalComposition": [
      {
        "element": "Nickel + Cobalt",
        "value": "50.00 - 55.00 %"
      },
      {
        "element": "Chromium (Cr)",
        "value": "17.00 - 21.00 %"
      },
      {
        "element": "Niobium + Tantalum",
        "value": "4.75 - 5.50 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "2.80 - 3.30 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (Aged)",
        "value": "1240 MPa (180 ksi)"
      },
      {
        "property": "Yield Strength (Aged)",
        "value": "1034 MPa (150 ksi)"
      },
      {
        "property": "Hardness",
        "value": "36 - 44 HRC"
      }
    ],
    "standards": [
      "ASTM B637",
      "AMS 5662",
      "AMS 5663",
      "NACE MR0175"
    ],
    "supplyForms": [
      "Aerospace Fasteners",
      "Turbine Discs",
      "Wellhead Mandrels"
    ],
    "applications": [
      "Aircraft Gas Turbines",
      "Rocket Motors",
      "High Pressure Subsea Fasteners"
    ]
  },
  {
    "slug": "incoloy-800",
    "grade": "Incoloy 800 / 800H",
    "name": "Incoloy 800 / 800H Nickel-Iron-Chromium Alloy",
    "materialId": "inconel",
    "aliases": [
      "incoloy-800",
      "incoloy800",
      "uns-n08800",
      "uns-n08810",
      "alloy-800"
    ],
    "uns": "UNS N08800 / UNS N08810",
    "din": "DIN 1.4876",
    "tagline": "Iron-nickel-chromium alloy formulated for high temperature strength and resistance to carburization up to 925\u00b0C.",
    "overview": "Incoloy 800 is engineered for high temperature structural applications requiring resistance to oxidation, carburization, and other elevated temperature corrosion. Incoloy 800H features controlled carbon and grain size for superior creep rupture strength.",
    "chemicalComposition": [
      {
        "element": "Nickel (Ni)",
        "value": "30.00 - 35.00 %"
      },
      {
        "element": "Chromium (Cr)",
        "value": "19.00 - 23.00 %"
      },
      {
        "element": "Iron (Fe)",
        "value": "39.50 % min"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "520 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "205 MPa"
      }
    ],
    "standards": [
      "ASTM B407 (Pipes)",
      "ASTM B409 (Plates)",
      "ASTM B564"
    ],
    "supplyForms": [
      "Steam Superheater Tubes",
      "Piping Headers",
      "Furnace Sheaths"
    ],
    "applications": [
      "Ethylene Pyrolysis Cracking",
      "Hydrocarbon Processing",
      "Nuclear Steam Generators"
    ]
  },
  {
    "slug": "incoloy-825",
    "grade": "Incoloy 825 (UNS N08825)",
    "name": "Incoloy 825 Corrosion-Resistant Alloy",
    "materialId": "inconel",
    "aliases": [
      "incoloy-825",
      "incoloy825",
      "uns-n08825",
      "n08825",
      "alloy-825"
    ],
    "uns": "UNS N08825",
    "din": "DIN 2.4858",
    "tagline": "Titanium-stabilized nickel-iron-chromium-molybdenum-copper alloy resisting both reducing and oxidizing acids.",
    "overview": "Incoloy 825 is formulated for severe corrosive environments. The nickel content prevents chloride stress-corrosion cracking; molybdenum and copper resist reducing acids like sulfuric and phosphoric acids; chromium resists oxidizing media.",
    "chemicalComposition": [
      {
        "element": "Nickel (Ni)",
        "value": "38.00 - 46.00 %"
      },
      {
        "element": "Chromium (Cr)",
        "value": "19.50 - 23.50 %"
      },
      {
        "element": "Iron (Fe)",
        "value": "22.00 % min"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "2.50 - 3.50 %"
      },
      {
        "element": "Copper (Cu)",
        "value": "1.50 - 3.00 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "586 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "241 MPa"
      }
    ],
    "standards": [
      "ASTM B423 (Pipes)",
      "ASTM B424 (Plates)",
      "ASTM B564"
    ],
    "supplyForms": [
      "Downhole Tubing",
      "Acid Scrubbing Piping",
      "Flanges & Valves"
    ],
    "applications": [
      "Sour Gas Downhole Tubing",
      "Sulfuric Acid Recovery",
      "Nuclear Fuel Reprocessing"
    ]
  },
  {
    "slug": "hastelloy-c276",
    "grade": "Hastelloy C276 (UNS N10276)",
    "name": "Hastelloy C276 Universal Chemical Superalloy",
    "materialId": "hastelloy",
    "aliases": [
      "hastelloy-c276",
      "hastelloyc276",
      "c276",
      "uns-n10276",
      "n10276",
      "alloy-c276",
      "hastelloy-c276-uns-n10276"
    ],
    "uns": "UNS N10276",
    "din": "DIN 2.4819 (NiMo16Cr15W)",
    "tagline": "The premier chemical process superalloy resisting wet chlorine gas, hypochlorite, and ferric/cupric chlorides.",
    "overview": "Hastelloy C276 is a nickel-molybdenum-chromium wrought alloy with added tungsten, considered the universal corrosion resistant alloy available today. It exhibits exceptional resistance to pitting, stress-corrosion cracking, and both oxidizing and reducing acids in heavily contaminated chemical waste streams.",
    "chemicalComposition": [
      {
        "element": "Nickel (Ni)",
        "value": "Balance (~57%)"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "15.00 - 17.00 %"
      },
      {
        "element": "Chromium (Cr)",
        "value": "14.50 - 16.50 %"
      },
      {
        "element": "Iron (Fe)",
        "value": "4.00 - 7.00 %"
      },
      {
        "element": "Tungsten (W)",
        "value": "3.00 - 4.50 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "690 MPa (100 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "283 MPa (41 ksi)"
      },
      {
        "property": "Elongation (min)",
        "value": "40 %"
      }
    ],
    "standards": [
      "ASTM B622 (Seamless Pipes)",
      "ASTM B575 (Plates)",
      "ASTM B564 (Forgings)",
      "NACE MR0175"
    ],
    "supplyForms": [
      "Reaction Vessel Piping",
      "Specialty Flanges",
      "Forged Fittings",
      "Instrumentation Diaphragms"
    ],
    "applications": [
      "FGD Scrubbers",
      "Sour Gas Wells",
      "Waste Incinerator Liners",
      "Sulfuric Acid Recovery"
    ]
  },
  {
    "slug": "hastelloy-c22",
    "grade": "Hastelloy C22 (UNS N06022)",
    "name": "Hastelloy C22 Versatile Chemical Superalloy",
    "materialId": "hastelloy",
    "aliases": [
      "hastelloy-c22",
      "hastelloyc22",
      "c22",
      "uns-n06022",
      "n06022",
      "alloy-c22"
    ],
    "uns": "UNS N06022",
    "din": "DIN 2.4602",
    "tagline": "Enhanced chromium-molybdenum nickel alloy offering higher resistance to oxidizing chemical environments than C276.",
    "overview": "Hastelloy C22 contains 22% chromium and 13% molybdenum. It provides superior resistance to oxidizing acid media, wet chlorine, and nitric acid mixtures containing chlorides.",
    "chemicalComposition": [
      {
        "element": "Nickel (Ni)",
        "value": "Balance (~56%)"
      },
      {
        "element": "Chromium (Cr)",
        "value": "20.00 - 22.50 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "12.50 - 14.50 %"
      },
      {
        "element": "Tungsten (W)",
        "value": "2.50 - 3.50 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "690 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "310 MPa"
      }
    ],
    "standards": [
      "ASTM B622",
      "ASTM B575",
      "ASTM B564"
    ],
    "supplyForms": [
      "Process Tubing",
      "Reactor Plates",
      "Custom Manifolds"
    ],
    "applications": [
      "Pharmaceutical Clean Process Lines",
      "Chlorination Systems",
      "Nuclear Waste Treatment"
    ]
  },
  {
    "slug": "hastelloy-b2",
    "grade": "Hastelloy B2 / B3",
    "name": "Hastelloy B2 / B3 Hydrochloric Acid Resistant Alloy",
    "materialId": "hastelloy",
    "aliases": [
      "hastelloy-b2",
      "hastelloy-b3",
      "uns-n10665",
      "uns-n10675"
    ],
    "uns": "UNS N10665 / UNS N10675",
    "din": "DIN 2.4617",
    "tagline": "Nickel-molybdenum alloy offering total resistance to hydrochloric acid at all concentrations and temperatures.",
    "overview": "Hastelloy B2 / B3 is specifically formulated with 28% molybdenum to withstand pure hydrochloric acid across all concentrations and boiling temperatures, as well as sulfuric, acetic, and phosphoric acids.",
    "chemicalComposition": [
      {
        "element": "Nickel (Ni)",
        "value": "Balance (~65%)"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "26.00 - 30.00 %"
      },
      {
        "element": "Iron (Fe)",
        "value": "2.00 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "760 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "350 MPa"
      }
    ],
    "standards": [
      "ASTM B622",
      "ASTM B333",
      "ASTM B564"
    ],
    "supplyForms": [
      "HCl Piping",
      "Reactor Vessels",
      "Heat Exchanger Tubes"
    ],
    "applications": [
      "Hydrochloric Acid Synthesis",
      "Alkylation Catalysts",
      "Acetic Acid Production"
    ]
  },
  {
    "slug": "hastelloy-c2000",
    "grade": "Hastelloy C2000",
    "name": "Hastelloy C2000 Copper-Added Superalloy",
    "materialId": "hastelloy",
    "aliases": [
      "hastelloy-c2000",
      "c2000",
      "uns-n06200"
    ],
    "uns": "UNS N06200",
    "din": "DIN 2.4675",
    "tagline": "Copper-modified Ni-Cr-Mo alloy providing unmatched versatility in both oxidizing and reducing acids.",
    "overview": "Hastelloy C-2000 alloy contains 1.6% copper paired with 23% chromium and 16% molybdenum, providing outstanding resistance to both oxidizing and reducing chemicals.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "23.00 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "16.00 %"
      },
      {
        "element": "Copper (Cu)",
        "value": "1.60 %"
      },
      {
        "element": "Nickel (Ni)",
        "value": "Balance"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "690 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "310 MPa"
      }
    ],
    "standards": [
      "ASTM B622",
      "ASTM B575",
      "ASTM B564"
    ],
    "supplyForms": [
      "Seamless Piping",
      "Plates",
      "Flanges"
    ],
    "applications": [
      "Mixed Acid Reactors",
      "HF & H2SO4 Processing",
      "Pharmaceutical Synthesis"
    ]
  },
  {
    "slug": "titanium-grade-1",
    "grade": "Grade 1 (CP Titanium)",
    "name": "Titanium Grade 1 Commercially Pure",
    "materialId": "titanium",
    "aliases": [
      "titanium-grade-1",
      "ti-gr-1",
      "uns-r50250",
      "grade-1"
    ],
    "uns": "UNS R50250",
    "din": "DIN 3.7025",
    "tagline": "Highest purity commercially pure titanium with maximum formability and cold drawing capability.",
    "overview": "Titanium Grade 1 is the softest and most ductile unalloyed commercially pure titanium grade. It has the highest cold-formability and exceptional resistance to marine environments.",
    "chemicalComposition": [
      {
        "element": "Titanium (Ti)",
        "value": "99.5 % min"
      },
      {
        "element": "Iron (Fe)",
        "value": "0.20 % max"
      },
      {
        "element": "Oxygen (O)",
        "value": "0.18 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "240 MPa (35 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "170 MPa (25 ksi)"
      },
      {
        "property": "Elongation (min)",
        "value": "24 %"
      }
    ],
    "standards": [
      "ASTM B265 (Plates)",
      "ASTM B338 (Tubes)",
      "ASTM B348"
    ],
    "supplyForms": [
      "Deep Drawn Plates",
      "Condenser Tubing",
      "Anode Baskets"
    ],
    "applications": [
      "Plate Heat Exchangers",
      "Chlor-Alkali Anodes",
      "Desalination Evaporators"
    ]
  },
  {
    "slug": "titanium-grade-2",
    "grade": "Grade 2 (CP Titanium)",
    "name": "Titanium Grade 2 Standard Commercial Pure",
    "materialId": "titanium",
    "aliases": [
      "titanium-grade-2",
      "ti-gr-2",
      "uns-r50400",
      "grade-2"
    ],
    "uns": "UNS R50400",
    "din": "DIN 3.7035",
    "tagline": "The industrial workhorse titanium grade balancing moderate strength with total seawater immunity.",
    "overview": "Titanium Grade 2 is the most widely utilized commercially pure titanium grade. It offers an optimal balance of moderate strength, excellent weldability, and total immunity to ambient saltwater corrosion.",
    "chemicalComposition": [
      {
        "element": "Titanium (Ti)",
        "value": "99.2 % min"
      },
      {
        "element": "Iron (Fe)",
        "value": "0.30 % max"
      },
      {
        "element": "Oxygen (O)",
        "value": "0.25 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "345 MPa (50 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "275 MPa (40 ksi)"
      },
      {
        "property": "Density",
        "value": "4.51 g/cm\u00b3"
      }
    ],
    "standards": [
      "ASTM B338 (Tubes)",
      "ASTM B348 (Bars)",
      "ASTM B265 (Plates)",
      "ASTM B381"
    ],
    "supplyForms": [
      "Power Plant Condenser Tubes",
      "Seamless Piping",
      "Flanges",
      "Plates"
    ],
    "applications": [
      "Coastal Power Station Condensers",
      "Offshore Heat Exchangers",
      "Chlorine Bleaching Equipment"
    ]
  },
  {
    "slug": "titanium-grade-5",
    "grade": "Grade 5 (Ti-6Al-4V)",
    "name": "Titanium Grade 5 (Ti-6Al-4V) High-Strength",
    "materialId": "titanium",
    "aliases": [
      "ti-6al-4v",
      "titanium-grade-5",
      "titanium-gr-5",
      "r56400",
      "grade-5-ti-6al-4v-high-strength",
      "grade-5"
    ],
    "uns": "UNS R56400",
    "din": "DIN 3.7165",
    "tagline": "The aerospace and marine alpha-beta titanium alloy combining ultra-high strength with 45% weight savings.",
    "overview": "Titanium Grade 5 is the most widely utilized titanium alloy in the world. It provides yield strengths exceeding 825 MPa at roughly half the weight of stainless steel, paired with instantaneous passivating oxide film protection in ambient seawater and chlorine gas.",
    "chemicalComposition": [
      {
        "element": "Titanium (Ti)",
        "value": "Balance (~90%)"
      },
      {
        "element": "Aluminum (Al)",
        "value": "5.50 - 6.75 %"
      },
      {
        "element": "Vanadium (V)",
        "value": "3.50 - 4.50 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "895 MPa (130 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "828 MPa (120 ksi)"
      },
      {
        "property": "Density",
        "value": "4.43 g/cm\u00b3"
      }
    ],
    "standards": [
      "ASTM B348 (Bars)",
      "ASTM B265 (Plates)",
      "ASTM B381 (Forgings)",
      "AMS 4911"
    ],
    "supplyForms": [
      "High Tensile Marine Fasteners",
      "Structural Plates",
      "Turned Shafts",
      "Forged Flanges"
    ],
    "applications": [
      "Subsea Robotics & Housings",
      "Aerospace Engine Brackets",
      "High-Speed Marine Propellers"
    ]
  },
  {
    "slug": "titanium-grade-7",
    "grade": "Grade 7 (Ti-0.15Pd)",
    "name": "Titanium Grade 7 Palladium-Enhanced Acid Resistant",
    "materialId": "titanium",
    "aliases": [
      "titanium-grade-7",
      "ti-gr-7",
      "uns-r52400",
      "grade-7"
    ],
    "uns": "UNS R52400",
    "din": "DIN 3.7235",
    "tagline": "Palladium-stabilized titanium providing superior resistance to reducing acids and crevice corrosion.",
    "overview": "Titanium Grade 7 has physical and mechanical properties equivalent to Grade 2, with the crucial addition of 0.15% Palladium. Palladium substantially enhances crevice corrosion resistance in high-temperature halides and reducing acids.",
    "chemicalComposition": [
      {
        "element": "Titanium (Ti)",
        "value": "Balance"
      },
      {
        "element": "Palladium (Pd)",
        "value": "0.12 - 0.25 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "345 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "275 MPa"
      }
    ],
    "standards": [
      "ASTM B338",
      "ASTM B348",
      "ASTM B265"
    ],
    "supplyForms": [
      "Reactor Tubes",
      "Acid Valves",
      "Flanges"
    ],
    "applications": [
      "Severe Chemical Processing",
      "Geothermal Brine Wells",
      "Hydrometallurgical Autoclaves"
    ]
  },
  {
    "slug": "cuni-90-10",
    "grade": "CuNi 90/10 (C70600)",
    "name": "Copper Nickel 90/10 (UNS C70600)",
    "materialId": "copper-nickel",
    "aliases": [
      "cuni-90-10",
      "c70600",
      "cupro-nickel-90-10",
      "cuni-90-10-c70600"
    ],
    "uns": "UNS C70600",
    "din": "DIN 2.0872 / CW352H",
    "tagline": "Anti-fouling marine piping alloy combining excellent resistance to seawater impingement with natural resistance to biofouling.",
    "overview": "Copper Nickel 90/10 is engineered specifically for marine seawater systems. It naturally discourages the attachment of barnacles, algae, and marine micro-organisms, dramatically reducing pumping head loss and cleaning maintenance in naval ships and commercial vessels.",
    "chemicalComposition": [
      {
        "element": "Copper (Cu)",
        "value": "Balance (~88%)"
      },
      {
        "element": "Nickel (Ni)",
        "value": "9.00 - 11.00 %"
      },
      {
        "element": "Iron (Fe)",
        "value": "1.00 - 1.80 %"
      },
      {
        "element": "Manganese (Mn)",
        "value": "1.00 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "290 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "105 MPa"
      }
    ],
    "standards": [
      "ASTM B466 (Seamless Pipes)",
      "EEMUA 144 / 145 / 146",
      "DIN 86019",
      "MIL-T-16420K"
    ],
    "supplyForms": [
      "Seawater Cooling Pipes",
      "Composite Flanges",
      "Saddle Bends & Reducers",
      "Chiller Tubes"
    ],
    "applications": [
      "Naval Shipyard Seawater Rings",
      "Offshore Platform Firewater Lines",
      "Desalination Flash Chambers"
    ]
  },
  {
    "slug": "cuni-70-30",
    "grade": "CuNi 70/30 (C71500)",
    "name": "Copper Nickel 70/30 (UNS C71500)",
    "materialId": "copper-nickel",
    "aliases": [
      "cuni-70-30",
      "c71500",
      "cupro-nickel-70-30"
    ],
    "uns": "UNS C71500",
    "din": "DIN 2.0882 / CW354H",
    "tagline": "High-velocity marine copper-nickel alloy resisting seawater erosion-corrosion up to 4.5 m/s.",
    "overview": "Copper Nickel 70/30 contains 30% nickel, providing significantly higher resistance to higher flow velocities, cavitation, and impingement attack compared to 90/10. Ideal for naval condenser piping.",
    "chemicalComposition": [
      {
        "element": "Copper (Cu)",
        "value": "Balance (~69%)"
      },
      {
        "element": "Nickel (Ni)",
        "value": "29.00 - 33.00 %"
      },
      {
        "element": "Iron (Fe)",
        "value": "0.40 - 1.00 %"
      },
      {
        "element": "Manganese (Mn)",
        "value": "1.00 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "360 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "125 MPa"
      }
    ],
    "standards": [
      "ASTM B466",
      "ASTM B111",
      "EEMUA 144",
      "DIN 86019"
    ],
    "supplyForms": [
      "Condenser Tubes",
      "Marine High-Velocity Pipes",
      "Forged Flanges"
    ],
    "applications": [
      "Submarine Saltwater Lines",
      "Naval Auxiliary Heat Exchangers",
      "Offshore Firewater Networks"
    ]
  },
  {
    "slug": "cw352h",
    "grade": "CW352H",
    "name": "CW352H European Marine Copper-Nickel",
    "materialId": "copper-nickel",
    "aliases": [
      "cw-352h",
      "cuni10fe1mn"
    ],
    "uns": "CW352H",
    "din": "EN CW352H (CuNi10Fe1Mn)",
    "tagline": "European standard designation for 90/10 copper-nickel shipbuilding piping systems.",
    "overview": "CW352H is the EN specification for CuNi10Fe1Mn, meeting strict European maritime and offshore engineering specifications for seawater cooling networks.",
    "chemicalComposition": [
      {
        "element": "Copper (Cu)",
        "value": "Balance"
      },
      {
        "element": "Nickel (Ni)",
        "value": "9.00 - 11.00 %"
      },
      {
        "element": "Iron (Fe)",
        "value": "1.00 - 2.00 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength",
        "value": "280 - 360 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "100 MPa"
      }
    ],
    "standards": [
      "EN 12449",
      "EN 12451",
      "DIN 86019"
    ],
    "supplyForms": [
      "European Ship Piping",
      "Tubesheets",
      "Bends"
    ],
    "applications": [
      "European Naval Shipyards",
      "Cruise Ship Chilled Water",
      "Desalination Plants"
    ]
  },
  {
    "slug": "cw354h",
    "grade": "CW354H",
    "name": "CW354H European Marine 70/30 Copper-Nickel",
    "materialId": "copper-nickel",
    "aliases": [
      "cw-354h",
      "cuni30mn1fe"
    ],
    "uns": "CW354H",
    "din": "EN CW354H (CuNi30Mn1Fe)",
    "tagline": "European standard 70/30 copper-nickel alloy for high-pressure marine condensers.",
    "overview": "CW354H is the European equivalent of C71500, delivering high mechanical integrity and corrosion-erosion resistance in demanding marine heat exchange.",
    "chemicalComposition": [
      {
        "element": "Copper (Cu)",
        "value": "Balance"
      },
      {
        "element": "Nickel (Ni)",
        "value": "30.00 - 32.00 %"
      },
      {
        "element": "Iron (Fe)",
        "value": "0.40 - 1.00 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength",
        "value": "360 - 480 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "120 MPa"
      }
    ],
    "standards": [
      "EN 12449",
      "EN 12451"
    ],
    "supplyForms": [
      "Heat Exchanger Tubes",
      "Machined Flanges",
      "Fittings"
    ],
    "applications": [
      "Offshore Oil Rigs",
      "Naval Vessels",
      "Seawater Desalination"
    ]
  },
  {
    "slug": "naval-brass",
    "grade": "Naval Brass (C46400)",
    "name": "Naval Brass C46400",
    "materialId": "brass",
    "aliases": [
      "naval-brass",
      "c46400",
      "is-291"
    ],
    "uns": "UNS C46400",
    "din": "DIN 2.0530 (CuZn39Sn1)",
    "tagline": "Tin-inhibited copper-zinc alloy resisting dezincification in marine seawater environments.",
    "overview": "Naval Brass C46400 contains roughly 60% copper, 39.2% zinc, and 0.8% tin. The addition of tin provides superior resistance to dezincification in marine atmospheres and seawater.",
    "chemicalComposition": [
      {
        "element": "Copper (Cu)",
        "value": "59.00 - 62.00 %"
      },
      {
        "element": "Tin (Sn)",
        "value": "0.50 - 1.00 %"
      },
      {
        "element": "Zinc (Zn)",
        "value": "Balance"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "450 MPa (65 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "170 MPa (25 ksi)"
      }
    ],
    "standards": [
      "ASTM B21",
      "ASTM B171",
      "IS 291"
    ],
    "supplyForms": [
      "Shaft Rods",
      "Marine Bushings",
      "Tube Sheets",
      "Fasteners"
    ],
    "applications": [
      "Marine Propeller Shaft Bushings",
      "Condenser Tube Sheets",
      "Seawater Hardware"
    ]
  },
  {
    "slug": "free-cutting-brass",
    "grade": "Free Cutting Brass (C36000)",
    "name": "Free Cutting Brass C36000",
    "materialId": "brass",
    "aliases": [
      "free-cutting-brass",
      "c36000",
      "is-319-gr-1"
    ],
    "uns": "UNS C36000",
    "din": "DIN 2.0401 (CuZn39Pb3)",
    "tagline": "The machinability benchmark (100% index) for precision turned components, bushings, and plumbing valve trim.",
    "overview": "Free Cutting Brass C36000 is the standard benchmark for high-speed automated machining (100% machinability rating). Lead dispersion creates broken chip action and low tool wear.",
    "chemicalComposition": [
      {
        "element": "Copper (Cu)",
        "value": "60.00 - 63.00 %"
      },
      {
        "element": "Lead (Pb)",
        "value": "2.50 - 3.70 %"
      },
      {
        "element": "Zinc (Zn)",
        "value": "Balance"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Machinability Rating",
        "value": "100 % (Standard Benchmark)"
      },
      {
        "property": "Tensile Strength",
        "value": "390 - 470 MPa"
      }
    ],
    "standards": [
      "ASTM B16",
      "IS 319 Grade 1",
      "BS 2874 CZ121"
    ],
    "supplyForms": [
      "Hexagonal & Round Rods",
      "Plumbing Bushings",
      "Precision Turned Parts"
    ],
    "applications": [
      "Pneumatic Fittings",
      "Valve Spindles",
      "Electrical Terminals",
      "Sanitary Plugs"
    ]
  },
  {
    "slug": "cartridge-brass",
    "grade": "Cartridge Brass (C26000)",
    "name": "Cartridge Brass 70/30 (UNS C26000)",
    "materialId": "brass",
    "aliases": [
      "cartridge-brass",
      "c26000",
      "brass-70-30"
    ],
    "uns": "UNS C26000",
    "din": "DIN 2.0265 (CuZn30)",
    "tagline": "Optimal 70/30 copper-zinc composition offering the highest ductility and deep-drawing capacity.",
    "overview": "Cartridge Brass C26000 has the optimum combination of strength and ductility among the copper-zinc alloys, making it exceptional for deep drawing, stamping, and tube spinning.",
    "chemicalComposition": [
      {
        "element": "Copper (Cu)",
        "value": "68.50 - 71.50 %"
      },
      {
        "element": "Zinc (Zn)",
        "value": "Balance (~30%)"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength",
        "value": "310 - 450 MPa"
      },
      {
        "property": "Elongation (Annealed)",
        "value": ">= 60 %"
      }
    ],
    "standards": [
      "ASTM B36",
      "ASTM B135"
    ],
    "supplyForms": [
      "Deep Drawn Strips",
      "Sheets & Blanks",
      "Seamless Tubing"
    ],
    "applications": [
      "Ammunition Casings",
      "Heat Exchanger Tubes",
      "Automotive Radiator Cores"
    ]
  },
  {
    "slug": "high-tensile-brass",
    "grade": "High Tensile Brass (C67500)",
    "name": "High Tensile Brass / Manganese Bronze (C67500)",
    "materialId": "brass",
    "aliases": [
      "high-tensile-brass",
      "c67500",
      "manganese-bronze"
    ],
    "uns": "UNS C67500",
    "din": "DIN 2.0592",
    "tagline": "Manganese-alloyed high-strength brass with superior wear and heavy bearing load capability.",
    "overview": "High Tensile Brass C67500 (Manganese Bronze) incorporates manganese and iron to provide high mechanical strength equivalent to mild steel combined with excellent corrosion resistance.",
    "chemicalComposition": [
      {
        "element": "Copper (Cu)",
        "value": "57.00 - 60.00 %"
      },
      {
        "element": "Iron (Fe)",
        "value": "0.80 - 2.00 %"
      },
      {
        "element": "Manganese (Mn)",
        "value": "0.05 - 0.50 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "515 MPa (75 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "240 MPa (35 ksi)"
      }
    ],
    "standards": [
      "ASTM B138",
      "BS 2874 CZ114"
    ],
    "supplyForms": [
      "Heavy Extruded Bars",
      "Wear Plates",
      "Shaft Turnings"
    ],
    "applications": [
      "Heavy-Duty Bearings",
      "Valve Stems",
      "Marine Shafts & Fasteners"
    ]
  },
  {
    "slug": "aluminium-5083",
    "grade": "Alloy 5083 (Marine Grade)",
    "name": "Aluminium 5083 Marine Grade Alloy",
    "materialId": "aluminium",
    "aliases": [
      "aluminium-5083",
      "alloy-5083",
      "al-5083",
      "5083-h111",
      "5083-h116"
    ],
    "uns": "UNS A95083",
    "din": "DIN 3.3547 (AlMg4.5Mn0.7)",
    "tagline": "The premier marine grade aluminum alloy renowned for superior strength after welding in seawater.",
    "overview": "Aluminium Alloy 5083 is renowned for exceptional performance in extreme marine environments. Alloyed with magnesium and manganese, it maintains excellent strength retention after welding and provides superior resistance to seawater attack.",
    "chemicalComposition": [
      {
        "element": "Magnesium (Mg)",
        "value": "4.00 - 4.90 %"
      },
      {
        "element": "Manganese (Mn)",
        "value": "0.40 - 1.00 %"
      },
      {
        "element": "Chromium (Cr)",
        "value": "0.05 - 0.25 %"
      },
      {
        "element": "Aluminium (Al)",
        "value": "Balance"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (H116/H321)",
        "value": "305 MPa min"
      },
      {
        "property": "Yield Strength (min)",
        "value": "215 MPa"
      },
      {
        "property": "Density",
        "value": "2.66 g/cm\u00b3"
      }
    ],
    "standards": [
      "ASTM B209",
      "EN 573-3",
      "EN 485-2",
      "DNV / Lloyd's Certified"
    ],
    "supplyForms": [
      "Marine Tread Plates",
      "Heavy Ship Plates",
      "Extruded Structural Profiles"
    ],
    "applications": [
      "Catamaran & Fast Patrol Boat Hulls",
      "Cryogenic Pressure Vessels",
      "LNG Tank Liners"
    ]
  },
  {
    "slug": "aluminium-6061-t6",
    "grade": "Alloy 6061-T6 (Structural)",
    "name": "Aluminium 6061-T6 Structural Alloy",
    "materialId": "aluminium",
    "aliases": [
      "aluminium-6061",
      "alloy-6061",
      "6061-t6",
      "al-6061"
    ],
    "uns": "UNS A96061",
    "din": "DIN 3.3211 (AlMg1SiCu)",
    "tagline": "Precipitation-hardened structural aluminum alloy balancing high strength, corrosion resistance, and machinability.",
    "overview": "Aluminium 6061-T6 is the most versatile of the heat-treatable aluminum alloys. It provides medium-to-high strength, good toughness, corrosion resistance, and excellent weldability across transport and architectural applications.",
    "chemicalComposition": [
      {
        "element": "Magnesium (Mg)",
        "value": "0.80 - 1.20 %"
      },
      {
        "element": "Silicon (Si)",
        "value": "0.40 - 0.80 %"
      },
      {
        "element": "Copper (Cu)",
        "value": "0.15 - 0.40 %"
      },
      {
        "element": "Chromium (Cr)",
        "value": "0.04 - 0.35 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "290 MPa (42 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "240 MPa (35 ksi)"
      },
      {
        "property": "Hardness",
        "value": "95 HB"
      }
    ],
    "standards": [
      "ASTM B221 (Extrusions)",
      "ASTM B209 (Plates)",
      "AMS 4027"
    ],
    "supplyForms": [
      "Extruded Pipes & Tubes",
      "Machined Discs & Circles",
      "Structural Beams"
    ],
    "applications": [
      "Architectural Frameworks",
      "Bicycle Frames",
      "Aerospace Fixtures",
      "Railcar Substructures"
    ]
  },
  {
    "slug": "aluminium-6082-t6",
    "grade": "Alloy 6082-T6",
    "name": "Aluminium 6082-T6 High-Stress Structural Alloy",
    "materialId": "aluminium",
    "aliases": [
      "aluminium-6082",
      "alloy-6082",
      "6082-t6",
      "al-6082"
    ],
    "uns": "EN AW-6082",
    "din": "DIN 3.2315 (AlSi1MgMn)",
    "tagline": "Highest strength alloy in the 6000 series, replacing 6061 in high-stress structural engineering.",
    "overview": "Aluminium 6082 is a medium strength structural alloy with excellent corrosion resistance. Known as a structural alloy, 6082 has replaced 6061 in many European engineering applications due to its higher mechanical strength.",
    "chemicalComposition": [
      {
        "element": "Silicon (Si)",
        "value": "0.70 - 1.30 %"
      },
      {
        "element": "Manganese (Mn)",
        "value": "0.40 - 1.00 %"
      },
      {
        "element": "Magnesium (Mg)",
        "value": "0.60 - 1.20 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "310 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "260 MPa"
      }
    ],
    "standards": [
      "EN 755-2",
      "EN 573-3",
      "ASTM B221 equivalent"
    ],
    "supplyForms": [
      "Extruded Tubes",
      "Structural Rods",
      "Plates"
    ],
    "applications": [
      "Bridge Trusses",
      "Cranes & Transport Equipment",
      "Beer Barrels"
    ]
  },
  {
    "slug": "aluminium-7075-t6",
    "grade": "Alloy 7075-T6 (High Strength)",
    "name": "Aluminium 7075-T6 Aerospace High-Strength Alloy",
    "materialId": "aluminium",
    "aliases": [
      "aluminium-7075",
      "alloy-7075",
      "7075-t6",
      "al-7075"
    ],
    "uns": "UNS A97075",
    "din": "DIN 3.4365 (AlZn5.5MgCu)",
    "tagline": "Zinc-alloyed aerospace aluminum delivering high yield strength comparable to many structural steels.",
    "overview": "Aluminium 7075-T6 is one of the highest strength aluminum alloys available. Alloyed primarily with zinc (5.1-6.1%), it delivers tensile strengths exceeding 500 MPa, making it the primary material for critical aerospace structural airframes.",
    "chemicalComposition": [
      {
        "element": "Zinc (Zn)",
        "value": "5.10 - 6.10 %"
      },
      {
        "element": "Magnesium (Mg)",
        "value": "2.10 - 2.90 %"
      },
      {
        "element": "Copper (Cu)",
        "value": "1.20 - 2.00 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "570 MPa (83 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "505 MPa (73 ksi)"
      },
      {
        "property": "Hardness",
        "value": "150 HB"
      }
    ],
    "standards": [
      "ASTM B209",
      "AMS 4045",
      "MIL-A-22771"
    ],
    "supplyForms": [
      "Aerospace Spar Plates",
      "Precision Machined Billet Bars"
    ],
    "applications": [
      "Aircraft Fuselage Bulkheads",
      "High Stress Defense Equipment",
      "Precision Tooling Molds"
    ]
  },
  {
    "slug": "alloy-20",
    "grade": "Alloy 20",
    "name": "Alloy 20 (Carpenter 20 / UNS N08020)",
    "materialId": "alloys",
    "aliases": [
      "alloy-20",
      "carpenter-20",
      "uns-n08020",
      "n08020",
      "20cb-3"
    ],
    "uns": "UNS N08020",
    "din": "DIN 2.4660",
    "tagline": "Nickel-iron-chromium austenitic alloy engineered specifically to resist sulfuric acid boiling and pitting.",
    "overview": "Alloy 20 was formulated for maximum resistance to sulfuric acid attack across all concentrations up to boiling. Also contains niobium to prevent intergranular sensitization during welding.",
    "chemicalComposition": [
      {
        "element": "Nickel (Ni)",
        "value": "32.00 - 38.00 %"
      },
      {
        "element": "Chromium (Cr)",
        "value": "19.00 - 21.00 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "2.00 - 3.00 %"
      },
      {
        "element": "Copper (Cu)",
        "value": "3.00 - 4.00 %"
      },
      {
        "element": "Niobium (Nb)",
        "value": "8 x C to 1.00 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "550 MPa (80 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "240 MPa (35 ksi)"
      }
    ],
    "standards": [
      "ASTM B729 (Pipes)",
      "ASTM B463 (Plates)",
      "ASTM B462 (Flanges)"
    ],
    "supplyForms": [
      "Acid Piping",
      "Flanges & Valves",
      "Pickling Baskets"
    ],
    "applications": [
      "Sulfuric Acid Pickling Tanks",
      "Chemical Synthesis Mixers",
      "Synthetic Rubber Production"
    ]
  },
  {
    "slug": "alloy-28",
    "grade": "Alloy 28",
    "name": "Alloy 28 (Sanicro 28 / UNS N08028)",
    "materialId": "alloys",
    "aliases": [
      "alloy-28",
      "sanicro-28",
      "uns-n08028",
      "n08028",
      "1-4563"
    ],
    "uns": "UNS N08028",
    "din": "DIN 1.4563",
    "tagline": "High-alloy austenitic stainless steel designed for phosphoric and sour oilfield acid corrosion.",
    "overview": "Alloy 28 provides superior resistance to phosphoric acid contaminated with fluorides and chlorides, as well as sour downhole deep gas wells.",
    "chemicalComposition": [
      {
        "element": "Nickel (Ni)",
        "value": "30.00 - 32.00 %"
      },
      {
        "element": "Chromium (Cr)",
        "value": "26.00 - 28.00 %"
      },
      {
        "element": "Molybdenum (Mo)",
        "value": "3.00 - 4.00 %"
      },
      {
        "element": "Copper (Cu)",
        "value": "0.60 - 1.40 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "500 MPa"
      },
      {
        "property": "Yield Strength (min)",
        "value": "215 MPa"
      }
    ],
    "standards": [
      "ASTM B668",
      "ASTM B709",
      "NACE MR0175"
    ],
    "supplyForms": [
      "Seamless Downhole Tubing",
      "Evaporator Tubes",
      "Plates"
    ],
    "applications": [
      "Phosphoric Acid Evaporators",
      "Sour Gas Wells",
      "Nuclear Fuel Reprocessing"
    ]
  },
  {
    "slug": "smo-254",
    "grade": "SMO 254",
    "name": "SMO 254 6% Moly Super Austenitic Stainless Steel",
    "materialId": "alloys",
    "aliases": [
      "smo-254",
      "smo254",
      "uns-s31254",
      "f44",
      "1-4547"
    ],
    "uns": "UNS S31254",
    "din": "DIN 1.4547",
    "tagline": "6% Molybdenum super austenitic steel with PREN >= 43 for extreme chloride seawater service.",
    "overview": "SMO 254 (UNS S31254 / F44) is a 6% molybdenum super austenitic alloy offering high impact toughness with resistance to chloride pitting and crevice corrosion equivalent to nickel alloys.",
    "chemicalComposition": [
      {
        "element": "Molybdenum (Mo)",
        "value": "6.00 - 6.50 %"
      },
      {
        "element": "Chromium (Cr)",
        "value": "19.50 - 20.50 %"
      },
      {
        "element": "Nickel (Ni)",
        "value": "17.50 - 18.50 %"
      },
      {
        "element": "Nitrogen (N)",
        "value": "0.18 - 0.25 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "650 MPa (94 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "300 MPa (44 ksi)"
      },
      {
        "property": "PREN Index",
        "value": ">= 43"
      }
    ],
    "standards": [
      "ASTM A312",
      "ASTM A240",
      "ASTM A182 F44",
      "NORSOK M-650"
    ],
    "supplyForms": [
      "Seawater Process Pipes",
      "Forged Flanges F44",
      "Buttweld Fittings"
    ],
    "applications": [
      "Offshore Seawater Firewater Lines",
      "Pulp Bleaching Filters",
      "Desalination Evaporators"
    ]
  },
  {
    "slug": "nimonic-75-80a",
    "grade": "Nimonic 75 / 80A",
    "name": "Nimonic 75 / 80A Superalloy",
    "materialId": "alloys",
    "aliases": [
      "nimonic-75",
      "nimonic-80a",
      "nimonic",
      "uns-n06075"
    ],
    "uns": "UNS N06075 / UNS N07080",
    "din": "DIN 2.4952",
    "tagline": "Titanium-aluminum strengthened nickel alloy for gas turbine blades and high creep environments.",
    "overview": "Nimonic alloys feature titanium and aluminum additions for high creep-rupture strength up to 815\u00b0C, designed for gas turbine components and internal combustion exhaust valves.",
    "chemicalComposition": [
      {
        "element": "Nickel (Ni)",
        "value": "Balance (~75%)"
      },
      {
        "element": "Chromium (Cr)",
        "value": "18.00 - 21.00 %"
      },
      {
        "element": "Titanium (Ti)",
        "value": "1.80 - 2.70 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength",
        "value": "1000 - 1200 MPa"
      },
      {
        "property": "Max Service Temp",
        "value": "815 \u00b0C"
      }
    ],
    "standards": [
      "BS HR1",
      "BS HR601",
      "ASTM B637 equivalent"
    ],
    "supplyForms": [
      "Turbine Blades",
      "Forged Discs",
      "High Temp Fasteners"
    ],
    "applications": [
      "Aero Engine Combustion Chambers",
      "Gas Turbine Rotor Blades",
      "Nuclear Springs"
    ]
  },
  {
    "slug": "nitronic-50-60",
    "grade": "Nitronic 50 / 60",
    "name": "Nitronic 50 / 60 Nitrogen-Strengthened Stainless",
    "materialId": "alloys",
    "aliases": [
      "nitronic-50",
      "nitronic-60",
      "uns-s20910",
      "uns-s21800"
    ],
    "uns": "UNS S20910 / UNS S21800",
    "din": "DIN 1.4565",
    "tagline": "Nitrogen-strengthened austenitic alloy providing double the yield strength of 316 with zero galling.",
    "overview": "Nitronic 50 and 60 are nitrogen-strengthened austenitic steels. Nitronic 60 features remarkable metal-to-metal anti-galling and wear resistance, while Nitronic 50 provides high strength in marine pump shafts.",
    "chemicalComposition": [
      {
        "element": "Chromium (Cr)",
        "value": "16.00 - 22.00 %"
      },
      {
        "element": "Manganese (Mn)",
        "value": "4.00 - 8.00 %"
      },
      {
        "element": "Silicon (Si)",
        "value": "3.50 - 4.50 % (Nitronic 60)"
      },
      {
        "element": "Nitrogen (N)",
        "value": "0.13 - 0.30 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "690 MPa"
      },
      {
        "property": "Anti-Galling Threshold",
        "value": "Superior to all austenitic steels"
      }
    ],
    "standards": [
      "ASTM A276",
      "ASTM A193 B8S",
      "ASTM A479"
    ],
    "supplyForms": [
      "Valve Stems",
      "Turned Shafts",
      "Fasteners"
    ],
    "applications": [
      "High Cycle Valve Stems",
      "Marine Pump Shafting",
      "Downhole Oil Tools"
    ]
  },
  {
    "slug": "nichrome-80-20",
    "grade": "Nichrome 80/20",
    "name": "Nichrome 80/20 Resistance Alloy",
    "materialId": "alloys",
    "aliases": [
      "nichrome",
      "nichrome-80",
      "uns-n06003"
    ],
    "uns": "UNS N06003",
    "din": "DIN 2.4869",
    "tagline": "80% Nickel - 20% Chromium electrical resistance alloy for industrial heating elements up to 1200\u00b0C.",
    "overview": "Nichrome 80/20 is the ideal electrical resistance wire and strip material. It maintains high electrical resistivity and a tenacious chromium oxide layer preventing oxidation at 1200\u00b0C.",
    "chemicalComposition": [
      {
        "element": "Nickel (Ni)",
        "value": "Balance (~78-80%)"
      },
      {
        "element": "Chromium (Cr)",
        "value": "19.00 - 21.00 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Electrical Resistivity",
        "value": "1.09 \u00b5\u03a9\u00b7m at 20\u00b0C"
      },
      {
        "property": "Max Continuous Temp",
        "value": "1200 \u00b0C"
      }
    ],
    "standards": [
      "ASTM B344",
      "DIN 17470"
    ],
    "supplyForms": [
      "Heating Wire Coils",
      "Resistance Ribbons",
      "Furnace Elements"
    ],
    "applications": [
      "Industrial Heat Treatment Kilns",
      "Domestic Heating Appliances",
      "Precision Wire Resistors"
    ]
  },
  {
    "slug": "nilo-42-48-52",
    "grade": "Nilo 42 / 48 / 52",
    "name": "Nilo 42 / 48 / 52 Controlled Expansion Alloys",
    "materialId": "alloys",
    "aliases": [
      "nilo-42",
      "nilo-48",
      "nilo-52",
      "invar-equivalent"
    ],
    "uns": "UNS K94200 / UNS N14052",
    "din": "DIN 1.3917",
    "tagline": "Controlled thermal expansion nickel-iron alloys for glass-to-metal sealing and precision metrology.",
    "overview": "Nilo controlled-expansion alloys match the thermal expansion characteristics of borosilicate glasses and ceramics, preventing joint fracture across thermal cycling in electronics.",
    "chemicalComposition": [
      {
        "element": "Nickel (Ni)",
        "value": "42.00 - 52.00 %"
      },
      {
        "element": "Iron (Fe)",
        "value": "Balance"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Coefficient of Thermal Expansion",
        "value": "Strictly controlled matching glass"
      },
      {
        "property": "Tensile Strength",
        "value": "490 - 550 MPa"
      }
    ],
    "standards": [
      "ASTM F30",
      "DIN 17745"
    ],
    "supplyForms": [
      "Drawn Wires",
      "Sealing Strips",
      "Machined Rings"
    ],
    "applications": [
      "Glass-to-Metal Hermetic Seals",
      "Thermostat Bi-metal Rods",
      "Semiconductor Lead Frames"
    ]
  },
  {
    "slug": "zirconium-702",
    "grade": "Zirconium 702",
    "name": "Zirconium 702 (UNS R60702)",
    "materialId": "alloys",
    "aliases": [
      "zirconium-702",
      "zr-702",
      "uns-r60702"
    ],
    "uns": "UNS R60702",
    "din": "DIN 3.7025 equivalent",
    "tagline": "Unalloyed reactive zirconium offering near-total immunity to hydrochloric and nitric acid at all concentrations.",
    "overview": "Zirconium 702 is a commercially pure reactive metal offering exceptional resistance to aggressive hydrochloric, sulfuric, and organic acids, even above the boiling point.",
    "chemicalComposition": [
      {
        "element": "Zirconium + Hafnium",
        "value": "99.2 % min"
      },
      {
        "element": "Hafnium (Hf)",
        "value": "4.5 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "380 MPa (55 ksi)"
      },
      {
        "property": "Yield Strength (min)",
        "value": "205 MPa (30 ksi)"
      }
    ],
    "standards": [
      "ASTM B523 (Tubes)",
      "ASTM B550 (Bars)",
      "ASTM B551 (Plates)"
    ],
    "supplyForms": [
      "Reactor Piping",
      "Heat Exchanger Bundles",
      "Valves"
    ],
    "applications": [
      "Hydrochloric Acid Scrubbing",
      "Formic & Acetic Acid Manufacture",
      "Urea Synthesizers"
    ]
  },
  {
    "slug": "tantalum",
    "grade": "Tantalum",
    "name": "Tantalum (UNS R05200)",
    "materialId": "alloys",
    "aliases": [
      "tantalum",
      "ta-unalloyed",
      "uns-r05200"
    ],
    "uns": "UNS R05200",
    "din": "DIN 2.4502",
    "tagline": "Refractory metal exhibiting ultimate corrosion inertness comparable to glass in severe boiling acids.",
    "overview": "Tantalum forms a dense, self-healing oxide surface film (Ta2O5) that gives it corrosion resistance comparable to glass. It remains completely inert in boiling hydrochloric, nitric, and sulfuric acids.",
    "chemicalComposition": [
      {
        "element": "Tantalum (Ta)",
        "value": "99.95 % min"
      },
      {
        "element": "Niobium (Nb)",
        "value": "0.05 % max"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (min)",
        "value": "205 MPa (30 ksi)"
      },
      {
        "property": "Density",
        "value": "16.6 g/cm\u00b3"
      },
      {
        "property": "Melting Point",
        "value": "2996 \u00b0C"
      }
    ],
    "standards": [
      "ASTM B521 (Tubes)",
      "ASTM B708 (Plates)",
      "ASTM B365 (Rods)"
    ],
    "supplyForms": [
      "Bayonet Heaters",
      "Thermocouple Pockets",
      "Patch Discs"
    ],
    "applications": [
      "Boiling Acid Evaporators",
      "Pharmaceutical Synthesizers",
      "Severe Chemical Linings"
    ]
  },
  {
    "slug": "phosphor-bronze",
    "grade": "Phosphor Bronze",
    "name": "Phosphor Bronze (UNS C51000 / PB1)",
    "materialId": "alloys",
    "aliases": [
      "phosphor-bronze",
      "c51000",
      "pb1"
    ],
    "uns": "UNS C51000",
    "din": "DIN 2.1020 (CuSn6)",
    "tagline": "Tin-bronze alloy deoxidized with phosphorus, providing superior fatigue endurance and low friction wear.",
    "overview": "Phosphor Bronze contains 5% tin and 0.03-0.35% phosphorus. Phosphorus increases wear resistance and stiffness, producing an alloy with high fatigue strength and resistance to marine bio-corrosion.",
    "chemicalComposition": [
      {
        "element": "Copper (Cu)",
        "value": "Balance (~95%)"
      },
      {
        "element": "Tin (Sn)",
        "value": "4.20 - 5.80 %"
      },
      {
        "element": "Phosphorus (P)",
        "value": "0.03 - 0.35 %"
      }
    ],
    "mechanicalProperties": [
      {
        "property": "Tensile Strength (Spring Temper)",
        "value": "550 - 690 MPa"
      },
      {
        "property": "Electrical Conductivity",
        "value": "15 % IACS"
      }
    ],
    "standards": [
      "ASTM B103 (Plates)",
      "ASTM B139 (Rods)",
      "BS 2870 PB102"
    ],
    "supplyForms": [
      "Spring Strips",
      "Turned Bushings",
      "Woven Filter Wire Mesh"
    ],
    "applications": [
      "Heavy Duty Sleeve Bushings",
      "Electrical Relay Contacts",
      "Marine Instrument Springs"
    ]
  }
];

/**
 * Returns all grades belonging strictly to a given material
 */
export function getGradesForMaterial(materialId) {
  const normMat = normalizeMaterialId(materialId);
  return detailedGrades.filter(g => g.materialId === normMat);
}

/**
 * Universal Grade Resolver
 * Returns a complete, fully formed grade object for any slug or grade string.
 * Supports exact match, alias match, or dynamically generated profiles from parent material.
 */
export function getGradeBySlug(gradeSlug, materialSlug = null) {
  if (!gradeSlug) return null;
  const s = stripSeoSuffix(String(gradeSlug).toLowerCase().trim());
  const cleanMat = normalizeMaterialId(materialSlug);

  // 1. Direct slug match in detailedGrades
  let found = detailedGrades.find(g => {
    if (cleanMat && g.materialId !== cleanMat) return false;
    return g.slug === s || stripSeoSuffix(g.slug) === s;
  });
  if (found) return found;

  // 1b. Direct slug match without material constraint
  found = detailedGrades.find(g => g.slug === s || stripSeoSuffix(g.slug) === s);
  if (found) return found;

  // 2. Alias match
  found = detailedGrades.find(g => {
    if (cleanMat && g.materialId !== cleanMat) return false;
    return g.aliases && g.aliases.some(a => stripSeoSuffix(a) === s);
  });
  if (found) return found;

  // 2b. Alias match without material constraint
  found = detailedGrades.find(g => g.aliases && g.aliases.some(a => stripSeoSuffix(a) === s));
  if (found) return found;

  // 3. Normalized slug matching (e.g. 304 -> ss-304)
  found = detailedGrades.find(g => {
    if (cleanMat && g.materialId !== cleanMat) return false;
    const norm = g.slug.replace(/[^a-z0-9]/g, '');
    const cleanS = s.replace(/[^a-z0-9]/g, '');
    return norm === cleanS || norm.includes(cleanS) || cleanS.includes(norm);
  });
  if (found) return found;

  // 4. Look up in materials.js to construct dynamic profile if not explicitly detailed
  let parentMat = cleanMat ? materials.find(m => m.id === cleanMat || stripSeoSuffix(m.id) === cleanMat) : null;
  let matchingGradeStr = null;

  if (parentMat && parentMat.grades) {
    matchingGradeStr = parentMat.grades.find(g => {
      const gSlug = stripSeoSuffix(getGradeSlug(g));
      return gSlug === s || g.toLowerCase().includes(s);
    });
  }

  if (!matchingGradeStr) {
    for (const m of materials) {
      const match = m.grades && m.grades.find(g => {
        const gSlug = stripSeoSuffix(getGradeSlug(g));
        return gSlug === s || g.toLowerCase().includes(s);
      });
      if (match) {
        parentMat = m;
        matchingGradeStr = match;
        break;
      }
    }
  }

  if (parentMat && matchingGradeStr) {
    const slug = getGradeSlug(matchingGradeStr);
    return {
      slug: slug,
      grade: matchingGradeStr,
      name: `${matchingGradeStr} ${parentMat.name}`,
      materialId: parentMat.id,
      parentMaterial: parentMat,
      aliases: [s, slug],
      uns: 'Standard Industrial Designation',
      din: 'European / DIN Equivalent Available',
      tagline: parentMat.tagline,
      overview: `${matchingGradeStr} is a certified industrial alloy within the ${parentMat.name} family, supplied in accordance with international ASTM, ASME, DIN, and EN specifications with complete mill test certification.`,
      chemicalComposition: [
        { element: 'Base Chemistry', value: parentMat.category },
        { element: 'Certified Analysis', value: 'Conforms to mill test certification standards' }
      ],
      mechanicalProperties: [
        { property: 'Certification', value: 'EN 10204 Type 3.1 / 3.2 Mill Certificate' },
        { property: 'Inspection', value: '100% PMI and Hydrostatically / Ultrasonically Tested' }
      ],
      standards: parentMat.standards || ['ASTM Standard Specifications'],
      supplyForms: parentMat.typicalForms || ['Pipes & Tubes', 'Fittings', 'Flanges', 'Plates & Bars'],
      applications: parentMat.applications || ['Industrial Piping', 'Pressure Vessels', 'Chemical & Mechanical Processing']
    };
  }

  return null;
}

/**
 * Returns all product items from productMaterials and product types from products.js
 * that are actually associated with a given grade in existing data.
 */
export function getProductsForGrade(gradeSlug, materialId) {
  const gObj = getGradeBySlug(gradeSlug, materialId);
  const targetMatId = gObj ? gObj.materialId : (materialId ? normalizeMaterialId(materialId) : null);
  const gradeQuery = gObj ? gObj.grade.toLowerCase() : String(gradeSlug).toLowerCase();
  const cleanGradeNum = gradeQuery.replace(/[^a-z0-9]/g, '');

  // 1. Match from productMaterials (items with real photos and exact associations)
  const allMatItems = targetMatId ? getProductMaterialsForMaterial(targetMatId) : [];
  
  const matchedProductMaterials = allMatItems.filter(item => {
    if (!item.grades || item.grades.length === 0) return true; // generic product in this material
    return item.grades.some(g => {
      const gLow = g.toLowerCase();
      const gClean = gLow.replace(/[^a-z0-9]/g, '');
      return gLow.includes(gradeQuery) || gradeQuery.includes(gLow) || gClean.includes(cleanGradeNum) || cleanGradeNum.includes(gClean);
    });
  });

  // If filtered products found, use them; if none explicitly matched, supply all products in this material family
  const finalProductItems = matchedProductMaterials.length > 0 ? matchedProductMaterials : allMatItems;

  // 2. Match relevant categories and types from products.js
  const availableCategories = [];
  products.forEach(cat => {
    if (!cat.types) return;
    const matchingTypes = cat.types.filter(t => {
      const mats = t.materials || cat.materials || [];
      const matStr = mats.join(' ').toLowerCase();
      if (targetMatId) {
        return matStr.includes(targetMatId.replace(/-/g, ' ')) || matStr.includes('stainless') || matStr.includes('steel');
      }
      return true;
    });

    if (matchingTypes.length > 0) {
      availableCategories.push({
        category: cat,
        types: matchingTypes
      });
    }
  });

  return {
    productMaterials: finalProductItems,
    productCategories: availableCategories
  };
}
