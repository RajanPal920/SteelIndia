// src/data/gradesData.js
import { materials } from './materials.js';
import { products } from './products.js';
import { stripSeoSuffix, appendSeoSuffix, hasSeoSuffix } from './productNavigationData.js';

/**
 * Universal slugifier for grade strings
 * Example: '304 / 304L' -> '304-304l'
 *          'ASTM A106 Gr B/C' -> 'astm-a106-gr-b-c'
 *          'UNS S31803 (Duplex 2205)' -> 'uns-s31803-duplex-2205'
 */
export function getGradeSlug(gradeStr) {
  if (!gradeStr) return '';
  return String(gradeStr)
    .toLowerCase()
    .replace(/\s*\/\s*/g, '-')
    .replace(/[()]/g, '')
    .replace(/[,.]/g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Generates canonical grade URL with rotated SEO keywords in the route
 * e.g. /materials/stainless-steel/304-304l-stockist-in-india
 */
export function getGradeUrl(gradeStr, materialId = null) {
  const rawSlug = getGradeSlug(gradeStr);
  const baseSlug = stripSeoSuffix(rawSlug);
  const fullGradeSlug = appendSeoSuffix(baseSlug);

  if (materialId) {
    const matBase = stripSeoSuffix(materialId);
    return `/materials/${matBase}/${fullGradeSlug}`;
  }
  // Try to find material for this grade if not provided
  const matchedMat = materials.find(m =>
    m.grades.some(g => stripSeoSuffix(getGradeSlug(g)) === baseSlug || g.toLowerCase().includes(baseSlug))
  );
  if (matchedMat) {
    return `/materials/${matchedMat.id}/${fullGradeSlug}`;
  }
  return `/grades/${fullGradeSlug}`;
}

/**
 * Comprehensive technical profiles for core industrial grades
 */
export const detailedGrades = [
  // --- STAINLESS STEEL GRADES ---
  {
    slug: '304-304l',
    grade: '304 / 304L',
    name: 'Stainless Steel 304 / 304L',
    materialId: 'stainless-steel',
    aliases: ['304', '304l', 'ss-304', 'ss304', 'ss-304l', '304-304l', 'astm-a240-304', 'astm-a312-tp304'],
    uns: 'UNS S30400 / UNS S30403',
    din: 'DIN 1.4301 / 1.4307 (X2CrNi18-9)',
    tagline: 'The universal 18/8 austenitic chromium-nickel stainless steel grade for atmospheric and chemical corrosion resistance.',
    overview: 'Grade 304 is the most versatile and widely utilized austenitic stainless steel in the piping and structural industry. Grade 304L represents its low-carbon modification (max 0.03% C) engineered specifically to eliminate carbide precipitation during welding, providing exceptional intergranular corrosion resistance in as-welded assemblies without post-weld annealing.',
    chemicalComposition: [
      { element: 'Carbon (C)', value: '0.08 max (304) / 0.030 max (304L)' },
      { element: 'Chromium (Cr)', value: '17.50 - 19.50 %' },
      { element: 'Nickel (Ni)', value: '8.00 - 10.50 %' },
      { element: 'Manganese (Mn)', value: '2.00 % max' },
      { element: 'Silicon (Si)', value: '0.75 % max' },
      { element: 'Phosphorus (P)', value: '0.045 % max' },
      { element: 'Sulfur (S)', value: '0.030 % max' },
      { element: 'Nitrogen (N)', value: '0.10 % max' }
    ],
    mechanicalProperties: [
      { property: 'Tensile Strength (min)', value: '515 MPa (75 ksi) [304] / 485 MPa (70 ksi) [304L]' },
      { property: 'Yield Strength 0.2% Proof (min)', value: '205 MPa (30 ksi) [304] / 170 MPa (25 ksi) [304L]' },
      { property: 'Elongation in 2 inches (min)', value: '40 %' },
      { property: 'Hardness (Rockwell B max)', value: '92 HRB / 201 HB max' },
      { property: 'Density', value: '7.93 g/cm³' }
    ],
    standards: ['ASTM A312 / ASME SA312 (Pipes)', 'ASTM A240 (Plates/Sheets)', 'ASTM A403 (Buttweld Fittings)', 'ASTM A182 (Forged Flanges & Fittings)', 'ASTM A276 (Bars)', 'ASTM A269 (Tubing)'],
    supplyForms: ['Seamless & Welded Pipes', 'Butt Weld Elbows, Tees & Reducers', 'Forged Slip-On, Weld Neck & Blind Flanges', 'Sheets, Plates & Coils', 'Hex Bolts, Nuts & Studs', 'Round & Square Bars'],
    applications: ['Food & Dairy Processing Machinery', 'Chemical & Petrochemical Piping', 'Brewery & Distillation Vessels', 'Architectural Railings & Cladding', 'Kitchen & Pharmaceutical Equipment']
  },
  {
    slug: '316-316l',
    grade: '316 / 316L',
    name: 'Stainless Steel 316 / 316L',
    materialId: 'stainless-steel',
    aliases: ['316', '316l', 'ss-316', 'ss316', 'ss-316l', '316-316l', 'astm-a240-316', 'astm-a312-tp316'],
    uns: 'UNS S31600 / UNS S31603',
    din: 'DIN 1.4401 / 1.4404 (X2CrNiMo17-12-2)',
    tagline: 'Molybdenum-bearing marine grade stainless steel offering superior resistance to chlorides and pitting corrosion.',
    overview: 'Grade 316 is the standard molybdenum-bearing grade, second in importance to 304 amongst the austenitic stainless steels. The 2.0% to 3.0% molybdenum addition gives 316 significantly better overall corrosion resistant properties than Grade 304, particularly much higher resistance to pitting and crevice corrosion in chloride environments. Grade 316L is the low-carbon variant optimal for heavy welded sections.',
    chemicalComposition: [
      { element: 'Carbon (C)', value: '0.08 max (316) / 0.030 max (316L)' },
      { element: 'Molybdenum (Mo)', value: '2.00 - 3.00 %' },
      { element: 'Chromium (Cr)', value: '16.00 - 18.00 %' },
      { element: 'Nickel (Ni)', value: '10.00 - 14.00 %' },
      { element: 'Manganese (Mn)', value: '2.00 % max' },
      { element: 'Silicon (Si)', value: '0.75 % max' },
      { element: 'Phosphorus (P)', value: '0.045 % max' },
      { element: 'Sulfur (S)', value: '0.030 % max' }
    ],
    mechanicalProperties: [
      { property: 'Tensile Strength (min)', value: '515 MPa (75 ksi) [316] / 485 MPa (70 ksi) [316L]' },
      { property: 'Yield Strength 0.2% Proof (min)', value: '205 MPa (30 ksi) [316] / 170 MPa (25 ksi) [316L]' },
      { property: 'Elongation in 2 inches (min)', value: '40 %' },
      { property: 'Hardness (Rockwell B max)', value: '95 HRB / 217 HB max' },
      { property: 'Density', value: '8.00 g/cm³' }
    ],
    standards: ['ASTM A312 / ASME SA312', 'ASTM A240', 'ASTM A403 WP316L', 'ASTM A182 F316L', 'ASTM A276', 'ASTM A269', 'NACE MR0175'],
    supplyForms: ['Process Seamless & Welded Pipes', 'Buttweld Pipe Fittings', 'High Pressure Forged Flanges', 'Pressure Vessel Plates', 'Marine Fasteners', 'Instrumentation Tubing'],
    applications: ['Marine Hardware & Offshore Platforms', 'Pharmaceutical Formulation Facilities', 'Desalination Multi-stage Flash Plants', 'Chemical Acid Processing Pipelines', 'Pulp and Paper Digesters']
  },
  {
    slug: '316ti',
    grade: '316Ti',
    name: 'Stainless Steel 316Ti',
    materialId: 'stainless-steel',
    aliases: ['316ti', 'ss-316ti', 'din-1-4571', 'uns-s31635'],
    uns: 'UNS S31635',
    din: 'DIN 1.4571 (X6CrNiMoTi17-12-2)',
    tagline: 'Titanium-stabilized modification of 316 resisting sensitization during prolonged elevated temperature exposure.',
    overview: 'Grade 316Ti contains a small addition of titanium (typically 5x [C + N]). This titanium addition prevents sensitization and intergranular carbide precipitation when operating continuously between 550°C and 800°C, ensuring structural durability in high-heat industrial exhaust and boiler services.',
    chemicalComposition: [
      { element: 'Titanium (Ti)', value: '5 x (C+N) min to 0.70 % max' },
      { element: 'Chromium (Cr)', value: '16.50 - 18.50 %' },
      { element: 'Nickel (Ni)', value: '10.50 - 13.50 %' },
      { element: 'Molybdenum (Mo)', value: '2.00 - 2.50 %' },
      { element: 'Carbon (C)', value: '0.08 % max' }
    ],
    mechanicalProperties: [
      { property: 'Tensile Strength (min)', value: '500 MPa' },
      { property: 'Yield Strength (min)', value: '200 MPa' },
      { property: 'Elongation (min)', value: '35 %' }
    ],
    standards: ['EN 10088-3', 'DIN 1.4571', 'ASTM A240', 'ASTM A312'],
    supplyForms: ['Seamless Heat Exchanger Tubes', 'Pipes', 'Fittings', 'Flanges', 'Round Bars'],
    applications: ['Exhaust Gas Scrubber Systems', 'Power Station Boilers', 'Chemical Distillation Columns']
  },
  {
    slug: '310-310s',
    grade: '310 / 310S',
    name: 'Stainless Steel 310 / 310S',
    materialId: 'stainless-steel',
    aliases: ['310', '310s', 'ss-310', 'ss310', '310-310s', 'uns-s31000', 'uns-s31008'],
    uns: 'UNS S31000 / UNS S31008',
    din: 'DIN 1.4841 / 1.4845',
    tagline: 'High-chromium, high-nickel heat-resistant stainless steel for continuous operation up to 1150°C.',
    overview: 'Grade 310 is a 25% chromium and 20% nickel austenitic stainless steel engineered for elevated temperature oxidation and scaling resistance. 310S is the low-carbon version that minimizes embrittlement and carbide precipitation during cyclic thermal exposure in radiant furnace tubes and incinerators.',
    chemicalComposition: [
      { element: 'Chromium (Cr)', value: '24.00 - 26.00 %' },
      { element: 'Nickel (Ni)', value: '19.00 - 22.00 %' },
      { element: 'Carbon (C)', value: '0.08 % max (310S)' },
      { element: 'Silicon (Si)', value: '1.50 % max' }
    ],
    mechanicalProperties: [
      { property: 'Tensile Strength (min)', value: '515 MPa' },
      { property: 'Yield Strength (min)', value: '205 MPa' },
      { property: 'Max Service Temp (in air)', value: '1150 °C (2100 °F)' }
    ],
    standards: ['ASTM A312 TP310S', 'ASTM A240', 'ASTM A403 WP310S', 'ASTM A182 F310'],
    supplyForms: ['High Temp Furnace Pipes', 'Bends & Tees', 'Plates', 'Flanges', 'Furnace Fixtures'],
    applications: ['Thermal Fluid Boilers', 'Cement Kiln Burners', 'Flare Stacks & Radiant Tubes', 'Refinery Reformers']
  },
  {
    slug: '321-321h',
    grade: '321 / 321H',
    name: 'Stainless Steel 321 / 321H',
    materialId: 'stainless-steel',
    aliases: ['321', '321h', 'ss-321', 'ss321', '321-321h', 'uns-s32100'],
    uns: 'UNS S32100 / UNS S32109',
    din: 'DIN 1.4541 (X6CrNiTi18-10)',
    tagline: 'Titanium-stabilized austenitic steel immune to intergranular corrosion in the 427°C - 816°C carbide precipitation range.',
    overview: 'Grade 321 is fundamentally standard 304 stabilized by the addition of titanium (minimum 5x C content). This suppresses chromium carbide formation when exposed to welding temperatures or operating ranges between 427°C and 816°C, ensuring high creep and stress-rupture properties.',
    chemicalComposition: [
      { element: 'Titanium (Ti)', value: '5 x (C+N) min to 0.70 % max' },
      { element: 'Chromium (Cr)', value: '17.00 - 19.00 %' },
      { element: 'Nickel (Ni)', value: '9.00 - 12.00 %' },
      { element: 'Carbon (C)', value: '0.08 % max (0.04-0.10 % for 321H)' }
    ],
    mechanicalProperties: [
      { property: 'Tensile Strength (min)', value: '515 MPa' },
      { property: 'Yield Strength (min)', value: '205 MPa' },
      { property: 'Elongation (min)', value: '40 %' }
    ],
    standards: ['ASTM A312 TP321', 'ASTM A240', 'ASTM A403 WP321', 'ASTM A182 F321'],
    supplyForms: ['Aircraft Exhaust Ducts', 'Boiler Superheater Pipes', 'Expansion Joints & Bellows', 'Flanges & Fittings'],
    applications: ['Jet Engine Manifolds', 'Thermal Power Steam Piping', 'Chemical Expansion Joints']
  },
  {
    slug: '347-347h',
    grade: '347 / 347H',
    name: 'Stainless Steel 347 / 347H',
    materialId: 'stainless-steel',
    aliases: ['347', '347h', 'ss-347', '347-347h', 'uns-s34700'],
    uns: 'UNS S34700 / UNS S34709',
    din: 'DIN 1.4550',
    tagline: 'Niobium/Columbium-stabilized alloy for heavy wall welded fabrications in severe elevated-temperature cyclic service.',
    overview: 'Grade 347 is an austenitic chromium steel stabilized by additions of columbium and tantalum (Nb + Ta >= 10x C). It has excellent creep-rupture strength at temperatures above 538°C and resists intergranular attack in polythionic acid environments encountered in oil refineries.',
    chemicalComposition: [
      { element: 'Columbium + Tantalum', value: '10 x C min to 1.10 % max' },
      { element: 'Chromium (Cr)', value: '17.00 - 19.00 %' },
      { element: 'Nickel (Ni)', value: '9.00 - 13.00 %' }
    ],
    mechanicalProperties: [
      { property: 'Tensile Strength (min)', value: '515 MPa' },
      { property: 'Yield Strength (min)', value: '205 MPa' }
    ],
    standards: ['ASTM A312 TP347', 'ASTM A240', 'ASTM A182 F347', 'ASTM A403 WP347'],
    supplyForms: ['Heavy Wall Pipes', 'Catalytic Cracking Tubing', 'Flanges & Olets'],
    applications: ['Refinery Hydrocrackers', 'Radiant Superheaters', 'Nuclear Waste Heat Recovery']
  },
  {
    slug: '904l',
    grade: '904L',
    name: 'Stainless Steel 904L',
    materialId: 'stainless-steel',
    aliases: ['904l', 'ss-904l', 'uns-n08904', 'din-1-4539'],
    uns: 'UNS N08904',
    din: 'DIN 1.4539 (X1NiCrMoCu25-20-5)',
    tagline: 'High-alloy austenitic stainless steel with copper addition engineered for severe sulfuric and phosphoric acid service.',
    overview: 'Grade 904L is a high-alloy, non-stabilized austenitic stainless steel containing 4.5% molybdenum, 25% nickel, 20% chromium, and 1.5% copper. The copper addition grants extraordinary resistance to reducing acids, especially sulfuric, phosphoric, and organic acids across all concentrations.',
    chemicalComposition: [
      { element: 'Nickel (Ni)', value: '23.00 - 28.00 %' },
      { element: 'Chromium (Cr)', value: '19.00 - 23.00 %' },
      { element: 'Molybdenum (Mo)', value: '4.00 - 5.00 %' },
      { element: 'Copper (Cu)', value: '1.00 - 2.00 %' },
      { element: 'Carbon (C)', value: '0.020 % max' }
    ],
    mechanicalProperties: [
      { property: 'Tensile Strength (min)', value: '490 MPa' },
      { property: 'Yield Strength (min)', value: '220 MPa' },
      { property: 'PREN Pitting Index', value: '>= 36' }
    ],
    standards: ['ASTM B677 (Seamless Pipes)', 'ASTM A240 904L', 'ASTM B649 (Bars)', 'ASTM B673'],
    supplyForms: ['Seamless Acid Piping', 'Flanges', 'Butt Weld Fittings', 'Piping Valves', 'Filter Discs'],
    applications: ['Sulfuric Acid Scrubbers', 'Phosphate Fertilizer Plants', 'Seawater Cooling Systems', 'Pulp Bleaching Equipment']
  },
  {
    slug: '410',
    grade: '410',
    name: 'Stainless Steel 410',
    materialId: 'stainless-steel',
    aliases: ['410', 'ss-410', 'uns-s41000', 'din-1-4006'],
    uns: 'UNS S41000',
    din: 'DIN 1.4006',
    tagline: 'Martensitic 12% chromium stainless steel heat-treatable to high hardness and high mechanical strength.',
    overview: 'Grade 410 is the basic general purpose martensitic stainless steel. It can be hardened by heat treatment to attain tensile strengths over 1000 MPa, combining good corrosion resistance with high strength and wear resistance in steam turbine parts and pump shafts.',
    chemicalComposition: [
      { element: 'Chromium (Cr)', value: '11.50 - 13.50 %' },
      { element: 'Carbon (C)', value: '0.08 - 0.15 %' }
    ],
    mechanicalProperties: [
      { property: 'Hardness (Hardened)', value: '35 - 45 HRC' },
      { property: 'Tensile Strength', value: '650 - 1050 MPa' }
    ],
    standards: ['ASTM A276', 'ASTM A182 F6a', 'ASTM A240'],
    supplyForms: ['Forged Valve Trim', 'Shafting Bars', 'Fasteners', 'Cutlery Blanks'],
    applications: ['Steam Turbine Buckets', 'Pump Shafts & Impellers', 'Oil Well Valve Components']
  },
  {
    slug: '420',
    grade: '420',
    name: 'Stainless Steel 420',
    materialId: 'stainless-steel',
    aliases: ['420', 'ss-420', 'uns-s42000', 'din-1-4021'],
    uns: 'UNS S42000',
    din: 'DIN 1.4021',
    tagline: 'High carbon martensitic steel with exceptional edge retention, high hardness (up to 50 HRC), and wear resistance.',
    overview: 'Grade 420 is a higher carbon modification of 410, providing increased hardness and wear resistance when quenched and tempered. Ideal for precision surgical instruments, shears, and high-wear valve seats.',
    chemicalComposition: [
      { element: 'Chromium (Cr)', value: '12.00 - 14.00 %' },
      { element: 'Carbon (C)', value: '0.15 - 0.40 %' }
    ],
    mechanicalProperties: [
      { property: 'Hardness (Tempered)', value: '50 HRC max' },
      { property: 'Tensile Strength', value: '700 - 1200 MPa' }
    ],
    standards: ['ASTM A276', 'ASTM A240'],
    supplyForms: ['Turned Round Bars', 'Valve Seats', 'Shear Blades'],
    applications: ['Plastic Extruder Screws', 'Pump Plungers', 'Needle Valves']
  },
  {
    slug: '430',
    grade: '430',
    name: 'Stainless Steel 430',
    materialId: 'stainless-steel',
    aliases: ['430', 'ss-430', 'uns-s43000', 'din-1-4016'],
    uns: 'UNS S43000',
    din: 'DIN 1.4016',
    tagline: 'Non-hardenable straight chromium ferritic stainless steel offering good corrosion resistance and formability.',
    overview: 'Grade 430 is a popular ferritic stainless steel with 17% chromium. It combines good corrosion resistance and formability with useful mechanical properties, particularly resistance to nitric acid and sulfur gases at moderate temperatures.',
    chemicalComposition: [
      { element: 'Chromium (Cr)', value: '16.00 - 18.00 %' },
      { element: 'Carbon (C)', value: '0.12 % max' }
    ],
    mechanicalProperties: [
      { property: 'Tensile Strength (min)', value: '450 MPa' },
      { property: 'Yield Strength (min)', value: '205 MPa' }
    ],
    standards: ['ASTM A240 430', 'ASTM A268 (Tubes)'],
    supplyForms: ['Bright Annealed Sheets', 'Coils', 'Flue Liners', 'Appliance Panels'],
    applications: ['Automotive Trim Panels', 'Nitric Acid Processing', 'Kitchen Exhaust Hoods']
  },

  // --- CARBON STEEL GRADES ---
  {
    slug: 'astm-a106-gr-b-c',
    grade: 'ASTM A106 Gr B/C',
    name: 'Carbon Steel ASTM A106 Grade B / C',
    materialId: 'carbon-steel',
    aliases: ['astm-a106', 'a106', 'a106-gr-b', 'a106-gr-c', 'a106-b', 'a106-c', 'astm-a106-gr-b-c'],
    uns: 'UNS K03006',
    din: 'DIN 17175 St 45.8',
    tagline: 'Standard specification for seamless carbon steel nominal pipe for high-temperature service up to 425°C.',
    overview: 'ASTM A106 Grade B is the universal workhorse seamless carbon steel pipe specification for refineries, chemical processing plants, steam generation boilers, and natural gas transmission lines. Engineered specifically for high-temperature and bending/flanging applications, fully killed with fine grain practice.',
    chemicalComposition: [
      { element: 'Carbon (C)', value: '0.30 % max (Gr B) / 0.35 % max (Gr C)' },
      { element: 'Manganese (Mn)', value: '0.29 - 1.06 % (Gr B)' },
      { element: 'Silicon (Si)', value: '0.10 % min' },
      { element: 'Phosphorus (P)', value: '0.035 % max' },
      { element: 'Sulfur (S)', value: '0.035 % max' }
    ],
    mechanicalProperties: [
      { property: 'Tensile Strength (min)', value: '415 MPa (60 ksi) [Gr B] / 485 MPa (70 ksi) [Gr C]' },
      { property: 'Yield Strength (min)', value: '240 MPa (35 ksi) [Gr B] / 275 MPa (40 ksi) [Gr C]' },
      { property: 'Elongation in 2 inches', value: '30 % min' }
    ],
    standards: ['ASTM A106 / ASME SA106', 'ANSI/ASME B36.10M', 'NACE MR0175 / ISO 15156'],
    supplyForms: ['Heavy Wall Seamless Pipes (Sch 40 to Sch XXS)', 'Boiler Tubes', 'Steam Piping Headers'],
    applications: ['High Pressure Steam Piping', 'Refinery Distillation Units', 'Oil and Gas Pipelines', 'Thermal Power Condensers']
  },
  {
    slug: 'astm-a105',
    grade: 'ASTM A105',
    name: 'Carbon Steel ASTM A105',
    materialId: 'carbon-steel',
    aliases: ['astm-a105', 'a105', 'a105n', 'a-105'],
    uns: 'UNS K03504',
    din: 'DIN C22.8 / 1.0460',
    tagline: 'Standard specification for forged carbon steel piping components and flanges for ambient and higher-temperature service.',
    overview: 'ASTM A105 is the industry benchmark for forged carbon steel piping components, including flanges, forged socket-weld and threaded fittings (elbows, couplings, unions, tees), and valve bodies for ASME B16.5, B16.11, and B16.47 pressure ratings from Class 150 to Class 2500.',
    chemicalComposition: [
      { element: 'Carbon (C)', value: '0.35 % max' },
      { element: 'Manganese (Mn)', value: '0.60 - 1.05 %' },
      { element: 'Silicon (Si)', value: '0.10 - 0.35 %' }
    ],
    mechanicalProperties: [
      { property: 'Tensile Strength (min)', value: '485 MPa (70 ksi)' },
      { property: 'Yield Strength (min)', value: '250 MPa (36 ksi)' },
      { property: 'Reduction of Area (min)', value: '30 %' }
    ],
    standards: ['ASTM A105 / ASME SA105', 'ASME B16.5 (Flanges)', 'ASME B16.11 (Forged Fittings)', 'MSS SP-83'],
    supplyForms: ['Weld Neck, Slip-On & Blind Flanges', 'Socket Weld & Threaded Elbows & Tees', 'Swage Nipples & Weldolets'],
    applications: ['Hydrocarbon Pipelines', 'Power Station Valve Blocks', 'High Pressure Manifolds']
  },
  {
    slug: 'astm-a350-lf2-low-temp',
    grade: 'ASTM A350 LF2 (Low Temp)',
    name: 'Low-Temp Carbon Steel ASTM A350 LF2',
    materialId: 'carbon-steel',
    aliases: ['a350-lf2', 'astm-a350', 'lf2', 'a350', 'astm-a350-lf2-low-temp'],
    uns: 'UNS K03011',
    din: 'DIN 1.0566',
    tagline: 'Charpy V-Notch impact-tested forged carbon steel components certified for sub-zero cryogenic service down to -46°C.',
    overview: 'ASTM A350 LF2 Class 1 is a carbon-manganese steel forging specification designed specifically for low-temperature service. Mandatory Charpy V-notch impact testing at -46°C (-50°F) guarantees brittle fracture resistance in cryogenic gas processing, Arctic installations, and refrigerated LPG terminals.',
    chemicalComposition: [
      { element: 'Carbon (C)', value: '0.30 % max' },
      { element: 'Manganese (Mn)', value: '0.60 - 1.35 %' },
      { element: 'Silicon (Si)', value: '0.15 - 0.30 %' }
    ],
    mechanicalProperties: [
      { property: 'Tensile Strength', value: '485 - 655 MPa' },
      { property: 'Yield Strength (min)', value: '250 MPa' },
      { property: 'Charpy Impact Value', value: '>= 20 J at -46 °C' }
    ],
    standards: ['ASTM A350 / ASME SA350', 'ASME B16.5', 'ASME B16.11'],
    supplyForms: ['Low Temp Forged Flanges', 'Socket Weld Fittings', 'Forged Valve Bodies'],
    applications: ['Cryogenic Gas Processing Plants', 'LPG & LNG Terminals', 'Refrigerated Storage Facilities']
  },
  {
    slug: 'astm-a516-gr-60-70',
    grade: 'ASTM A516 Gr 60/70',
    name: 'Carbon Steel ASTM A516 Grade 60 / 70',
    materialId: 'carbon-steel',
    aliases: ['a516', 'a516-gr-70', 'a516-70', 'astm-a516', 'astm-a516-gr-60-70'],
    uns: 'UNS K02700',
    din: 'DIN 17155 HII',
    tagline: 'Standard specification for pressure vessel carbon steel plates intended primarily for moderate and lower-temperature service.',
    overview: 'ASTM A516 Grade 70 is the premier plate steel for industrial boilers and pressure vessels. Fully killed fine-grain steel possessing superior notch toughness and weldability, making it the industry standard for chemical reactors, separators, and heat exchangers.',
    chemicalComposition: [
      { element: 'Carbon (C)', value: '0.27 % max' },
      { element: 'Manganese (Mn)', value: '0.85 - 1.20 %' },
      { element: 'Silicon (Si)', value: '0.15 - 0.40 %' }
    ],
    mechanicalProperties: [
      { property: 'Tensile Strength', value: '485 - 620 MPa (70 - 90 ksi)' },
      { property: 'Yield Strength (min)', value: '260 MPa (38 ksi)' }
    ],
    standards: ['ASTM A516 / ASME SA516', 'ASME Section VIII Div 1', 'NACE MR0103 / MR0175'],
    supplyForms: ['Heavy Pressure Vessel Plates', 'Rolled & Welded Pipe Shells', 'Dished Heads'],
    applications: ['Boiler Drums', 'Fractionating Columns', 'Gas Scrubbers & Heat Exchangers']
  },

  // --- DUPLEX & SUPER DUPLEX GRADES ---
  {
    slug: 'uns-s31803-duplex-2205',
    grade: 'UNS S31803 (Duplex 2205)',
    name: 'Duplex Stainless Steel 2205 (UNS S31803 / S32205)',
    materialId: 'duplex-stainless-steel',
    aliases: ['2205', 'duplex-2205', 'uns-s31803', 'uns-s32205', 's31803', 's32205', 'f51', 'uns-s31803-duplex-2205'],
    uns: 'UNS S31803 / UNS S32205',
    din: 'DIN 1.4462 (X2CrNiMoN22-5-3)',
    tagline: 'Dual-phase 22% Cr austenitic-ferritic alloy delivering twice the yield strength of standard austenitic stainless steels.',
    overview: 'Duplex 2205 (UNS S31803 / S32205) is the most widely utilized duplex stainless steel grade in the world. It features a balanced 50:50 austenitic-ferritic microstructure that provides extraordinary resistance to chloride stress corrosion cracking (SCC), high mechanical yield strength (~450 MPa), and outstanding pitting resistance with a PREN index of 34 - 36.',
    chemicalComposition: [
      { element: 'Chromium (Cr)', value: '22.00 - 23.00 %' },
      { element: 'Nickel (Ni)', value: '4.50 - 6.50 %' },
      { element: 'Molybdenum (Mo)', value: '3.00 - 3.50 %' },
      { element: 'Nitrogen (N)', value: '0.14 - 0.20 %' },
      { element: 'Carbon (C)', value: '0.030 % max' }
    ],
    mechanicalProperties: [
      { property: 'Tensile Strength (min)', value: '655 MPa (95 ksi)' },
      { property: 'Yield Strength 0.2% Proof (min)', value: '450 MPa (65 ksi)' },
      { property: 'Elongation in 2 inches (min)', value: '25 %' },
      { property: 'PREN (Pitting Resistance Equivalent)', value: '>= 35' }
    ],
    standards: ['ASTM A790 / ASME SA790 (Pipes)', 'ASTM A240 (Plates)', 'ASTM A815 WPS31803 (Fittings)', 'ASTM A182 F51/F60 (Flanges)', 'NACE MR0175 / ISO 15156'],
    supplyForms: ['High Pressure Process Pipes', 'Forged Flanges & Valve Bodies', 'Buttweld Fittings', 'Heavy Plates', 'Fasteners'],
    applications: ['Offshore Oil & Gas Production Riser Pipes', 'Desalination Reverse Osmosis Piping', 'Chemical Product Tankers', 'Sour Gas Scrubbers']
  },
  {
    slug: 'uns-s32750-2507-f53',
    grade: 'UNS S32750 (2507 / F53)',
    name: 'Super Duplex Stainless Steel 2507 (UNS S32750)',
    materialId: 'super-duplex-stainless-steel',
    aliases: ['2507', 'super-duplex-2507', 'uns-s32750', 's32750', 'f53', 'uns-s32750-2507-f53'],
    uns: 'UNS S32750',
    din: 'DIN 1.4410 (X2CrNiMoN25-7-4)',
    tagline: 'High PREN (>42) 25% Cr super duplex steel engineered for extreme offshore subsea halogen environments.',
    overview: 'Super Duplex 2507 is formulated with 25% chromium, 4% molybdenum, and 7% nickel. With an exceptional Pitting Resistance Equivalent Number (PREN) exceeding 42, it provides near-immunity to chloride pitting, crevice attack, and stress corrosion cracking under extreme hydrostatic pressures in offshore subsea fields.',
    chemicalComposition: [
      { element: 'Chromium (Cr)', value: '24.00 - 26.00 %' },
      { element: 'Molybdenum (Mo)', value: '3.00 - 5.00 %' },
      { element: 'Nickel (Ni)', value: '6.00 - 8.00 %' },
      { element: 'Nitrogen (N)', value: '0.24 - 0.32 %' },
      { element: 'Carbon (C)', value: '0.030 % max' }
    ],
    mechanicalProperties: [
      { property: 'Tensile Strength (min)', value: '750 MPa (116 ksi)' },
      { property: 'Yield Strength 0.2% Proof (min)', value: '550 MPa (80 ksi)' },
      { property: 'Elongation in 2 inches (min)', value: '15 %' },
      { property: 'PREN Value', value: '>= 42' }
    ],
    standards: ['ASTM A790 S32750', 'ASTM A240', 'ASTM A182 F53', 'ASTM A815 WPS32750', 'NORSOK M-630 / M-650'],
    supplyForms: ['Subsea Flowlines & Risers', 'Forged Flanges & Swivels', 'Heavy Valves', 'High Tensile Fasteners'],
    applications: ['Subsea Umbilicals & Manifolds', 'Marine Seawater Firewater Systems', 'FGD Utility Scrubbers', 'High Pressure Reverse Osmosis']
  },

  // --- NICKEL & SPECIALTY HIGH ALLOYS ---
  {
    slug: 'inconel-625-uns-n06625',
    grade: 'Inconel 625 (UNS N06625)',
    name: 'Inconel 625 (UNS N06625)',
    materialId: 'inconel',
    aliases: ['inconel-625', 'inconel625', 'uns-n06625', 'n06625', 'alloy-625', 'inconel-625-uns-n06625'],
    uns: 'UNS N06625',
    din: 'DIN 2.4856 (NiCr22Mo9Nb)',
    tagline: 'High-strength molybdenum-niobium strengthened nickel-chromium superalloy immune to chloride cracking.',
    overview: 'Inconel 625 is a solid-solution strengthened nickel-based superalloy containing 9% molybdenum and 3.6% niobium. It maintains excellent mechanical strength from cryogenic temperatures up to 982°C (1800°F) while exhibiting outstanding resistance to fatigue and oxidation in marine and aerospace environments.',
    chemicalComposition: [
      { element: 'Nickel (Ni)', value: '58.00 % min' },
      { element: 'Chromium (Cr)', value: '20.00 - 23.00 %' },
      { element: 'Molybdenum (Mo)', value: '8.00 - 10.00 %' },
      { element: 'Niobium + Tantalum (Nb+Ta)', value: '3.15 - 4.15 %' },
      { element: 'Iron (Fe)', value: '5.00 % max' }
    ],
    mechanicalProperties: [
      { property: 'Tensile Strength (min)', value: '827 MPa (120 ksi)' },
      { property: 'Yield Strength (min)', value: '414 MPa (60 ksi)' },
      { property: 'Elongation (min)', value: '30 %' }
    ],
    standards: ['ASTM B444 (Pipes/Tubes)', 'ASTM B443 (Plates)', 'ASTM B564 (Flanges/Forgings)', 'NACE MR0175 / AMS 5666'],
    supplyForms: ['Exhaust Ducting & Pipes', 'Forged Flanges', 'Turbine Rings', 'Buttweld Fittings', 'High Temperature Fasteners'],
    applications: ['Aerospace Jet Engine Exhausts', 'Subsea Mooring Cables', 'Nuclear Reactor Core Components', 'Flare Stacks']
  },
  {
    slug: 'inconel-600-uns-n06600',
    grade: 'Inconel 600 (UNS N06600)',
    name: 'Inconel 600 (UNS N06600)',
    materialId: 'inconel',
    aliases: ['inconel-600', 'inconel600', 'uns-n06600', 'n06600', 'alloy-600', 'inconel-600-uns-n06600'],
    uns: 'UNS N06600',
    din: 'DIN 2.4816',
    tagline: 'Standard 72% Nickel alloy resisting high-temperature oxidation, carburization, and caustic alkali corrosion.',
    overview: 'Inconel 600 is an engineering material used extensively in applications requiring resistance to corrosion and heat. The alloy contains minimum 72% nickel, making it virtually immune to chloride-ion stress-corrosion cracking and highly resistant to dry chlorine up to 550°C.',
    chemicalComposition: [
      { element: 'Nickel (Ni)', value: '72.00 % min' },
      { element: 'Chromium (Cr)', value: '14.00 - 17.00 %' },
      { element: 'Iron (Fe)', value: '6.00 - 10.00 %' }
    ],
    mechanicalProperties: [
      { property: 'Tensile Strength (min)', value: '550 MPa' },
      { property: 'Yield Strength (min)', value: '240 MPa' }
    ],
    standards: ['ASTM B167 (Pipes)', 'ASTM B168 (Plates)', 'ASTM B564'],
    supplyForms: ['Thermocouple Sheaths', 'Furnace Retorts', 'Piping & Flanges'],
    applications: ['Heat-Treating Baskets', 'Nuclear Steam Generator Tubing', 'Chemical Chlorination Reactors']
  },
  {
    slug: 'hastelloy-c276-uns-n10276',
    grade: 'Hastelloy C276 (UNS N10276)',
    name: 'Hastelloy C276 (UNS N10276)',
    materialId: 'hastelloy',
    aliases: ['hastelloy-c276', 'hastelloyc276', 'c276', 'uns-n10276', 'n10276', 'alloy-c276', 'hastelloy-c276-uns-n10276'],
    uns: 'UNS N10276',
    din: 'DIN 2.4819 (NiMo16Cr15W)',
    tagline: 'The premier chemical process superalloy resisting wet chlorine gas, hypochlorite, and ferric/cupric chlorides.',
    overview: 'Hastelloy C276 is a nickel-molybdenum-chromium wrought alloy with added tungsten, considered the universal corrosion resistant alloy available today. It exhibits exceptional resistance to pitting, stress-corrosion cracking, and both oxidizing and reducing acids in heavily contaminated chemical waste streams.',
    chemicalComposition: [
      { element: 'Nickel (Ni)', value: 'Balance (~57%)' },
      { element: 'Molybdenum (Mo)', value: '15.00 - 17.00 %' },
      { element: 'Chromium (Cr)', value: '14.50 - 16.50 %' },
      { element: 'Iron (Fe)', value: '4.00 - 7.00 %' },
      { element: 'Tungsten (W)', value: '3.00 - 4.50 %' },
      { element: 'Cobalt (Co)', value: '2.50 % max' }
    ],
    mechanicalProperties: [
      { property: 'Tensile Strength (min)', value: '690 MPa (100 ksi)' },
      { property: 'Yield Strength (min)', value: '283 MPa (41 ksi)' },
      { property: 'Elongation in 2 inches (min)', value: '40 %' }
    ],
    standards: ['ASTM B622 (Seamless Pipes)', 'ASTM B575 (Plates)', 'ASTM B564 (Forgings)', 'NACE MR0175'],
    supplyForms: ['Reaction Vessel Piping', 'Specialty Flanges', 'Forged Fittings', 'Instrumentation Diaphragms'],
    applications: ['Flue Gas Desulfurization (FGD) Scrubbers', 'Sour Gas Wells', 'Waste Incinerator Liners', 'Sulfuric Acid Recovery Units']
  },
  {
    slug: 'monel-400-uns-n04400',
    grade: 'Monel 400 (UNS N04400)',
    name: 'Monel 400 (UNS N04400)',
    materialId: 'monel',
    aliases: ['monel-400', 'monel400', 'uns-n04400', 'n04400', 'alloy-400', 'monel-400-uns-n04400'],
    uns: 'UNS N04400',
    din: 'DIN 2.4360',
    tagline: 'Solid-solution 67% Nickel - 30% Copper alloy renowned for total immunity to hydrofluoric acid and rapidly flowing seawater.',
    overview: 'Monel 400 is a ductile nickel-copper alloy resistant to a wide range of corrosive conditions. It provides high strength and toughness across temperature ranges from sub-zero to 550°C and is virtually immune to chloride-induced stress corrosion cracking in marine and chemical alkylation services.',
    chemicalComposition: [
      { element: 'Nickel (Ni)', value: '63.00 % min' },
      { element: 'Copper (Cu)', value: '28.00 - 34.00 %' },
      { element: 'Iron (Fe)', value: '2.50 % max' }
    ],
    mechanicalProperties: [
      { property: 'Tensile Strength (min)', value: '550 MPa' },
      { property: 'Yield Strength (min)', value: '240 MPa' }
    ],
    standards: ['ASTM B165 (Pipes)', 'ASTM B127 (Plates)', 'ASTM B564', 'ASTM B164'],
    supplyForms: ['Marine Propeller Shafts', 'HF Alkylation Pipes', 'Heat Exchanger Tubes', 'Seawater Flanges'],
    applications: ['Marine Propeller & Pump Shafting', 'Hydrofluoric Acid Alkylation Plants', 'Crude Oil Distillation Pre-heaters']
  },
  {
    slug: 'cuni-90-10-c70600',
    grade: 'CuNi 90/10 (C70600)',
    name: 'Copper Nickel 90/10 (UNS C70600)',
    materialId: 'copper-nickel',
    aliases: ['cuni-90-10', 'c70600', 'cupro-nickel-90-10', 'cuni-90-10-c70600'],
    uns: 'UNS C70600',
    din: 'DIN 2.0872 / CW352H',
    tagline: 'Anti-fouling marine piping alloy combining excellent resistance to seawater impingement with natural resistance to biofouling.',
    overview: 'Copper Nickel 90/10 is engineered specifically for marine seawater systems. It naturally discourages the attachment of barnacles, algae, and marine micro-organisms, dramatically reducing pumping head loss and cleaning maintenance in naval ships and commercial vessels.',
    chemicalComposition: [
      { element: 'Copper (Cu)', value: 'Balance (~88%)' },
      { element: 'Nickel (Ni)', value: '9.00 - 11.00 %' },
      { element: 'Iron (Fe)', value: '1.00 - 1.80 %' },
      { element: 'Manganese (Mn)', value: '1.00 % max' }
    ],
    mechanicalProperties: [
      { property: 'Tensile Strength (min)', value: '290 MPa' },
      { property: 'Yield Strength (min)', value: '105 MPa' }
    ],
    standards: ['ASTM B466 (Seamless Pipes)', 'EEMUA 144 / 145 / 146', 'DIN 86019', 'MIL-T-16420K'],
    supplyForms: ['Seawater Cooling Pipes', 'Composite Flanges', 'Saddle Bends & Reducers', 'Chiller Tubes'],
    applications: ['Naval Shipyard Seawater Rings', 'Offshore Platform Firewater Lines', 'Desalination Flash Chambers']
  },
  {
    slug: 'grade-5-ti-6al-4v-high-strength',
    grade: 'Grade 5 (Ti-6Al-4V High Strength)',
    name: 'Titanium Grade 5 (Ti-6Al-4V / UNS R56400)',
    materialId: 'titanium',
    aliases: ['ti-6al-4v', 'titanium-grade-5', 'titanium-gr-5', 'r56400', 'grade-5-ti-6al-4v-high-strength'],
    uns: 'UNS R56400',
    din: 'DIN 3.7165',
    tagline: 'The aerospace and marine alpha-beta titanium alloy combining ultra-high strength with 45% weight savings.',
    overview: 'Titanium Grade 5 is the most widely utilized titanium alloy in the world. It provides yield strengths exceeding 825 MPa at roughly half the weight of stainless steel, paired with instantaneous passivating oxide film protection in ambient seawater and chlorine gas.',
    chemicalComposition: [
      { element: 'Titanium (Ti)', value: 'Balance (~90%)' },
      { element: 'Aluminum (Al)', value: '5.50 - 6.75 %' },
      { element: 'Vanadium (V)', value: '3.50 - 4.50 %' }
    ],
    mechanicalProperties: [
      { property: 'Tensile Strength (min)', value: '895 MPa (130 ksi)' },
      { property: 'Yield Strength (min)', value: '828 MPa (120 ksi)' },
      { property: 'Density', value: '4.43 g/cm³' }
    ],
    standards: ['ASTM B348 (Bars)', 'ASTM B265 (Plates)', 'ASTM B381 (Forgings)', 'AMS 4911'],
    supplyForms: ['High Tensile Marine Fasteners', 'Structural Plates', 'Turned Shafts', 'Forged Flanges'],
    applications: ['Subsea Robotics & Housings', 'Aerospace Engine Brackets', 'High-Speed Marine Propellers']
  }
];

/**
 * Universal Grade Resolver
 * Returns a complete, fully formed grade object for any slug or grade string.
 * Supports exact match, alias match, or dynamically generated profiles from parent material.
 */
export function getGradeBySlug(gradeSlug, materialSlug = null) {
  if (!gradeSlug) return null;
  const s = stripSeoSuffix(String(gradeSlug).toLowerCase().trim());
  const cleanMat = materialSlug ? stripSeoSuffix(materialSlug) : null;

  // 1. Direct slug match in detailedGrades
  let found = detailedGrades.find(g => g.slug === s || stripSeoSuffix(g.slug) === s);
  if (found) return found;

  // 2. Alias match
  found = detailedGrades.find(g => g.aliases && g.aliases.some(a => stripSeoSuffix(a) === s));
  if (found) return found;

  // 3. Normalized slug matching (e.g. 304 -> 304-304l)
  found = detailedGrades.find(g => {
    const norm = g.slug.replace(/[^a-z0-9]/g, '');
    const cleanS = s.replace(/[^a-z0-9]/g, '');
    return norm.includes(cleanS) || cleanS.includes(norm);
  });
  if (found) return found;

  // 4. Look up in materials.js to construct dynamic profile if not explicitly detailed
  let parentMat = cleanMat ? materials.find(m => m.id === cleanMat || stripSeoSuffix(m.id) === cleanMat) : null;
  let matchingGradeStr = null;

  if (parentMat) {
    matchingGradeStr = parentMat.grades.find(g => {
      const gSlug = stripSeoSuffix(getGradeSlug(g));
      return gSlug === s || g.toLowerCase().includes(s);
    });
  }

  // If not found yet, scan all materials
  if (!matchingGradeStr) {
    for (const m of materials) {
      const match = m.grades.find(g => {
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
      name: `${parentMat.name} ${matchingGradeStr}`,
      materialId: parentMat.id,
      parentMaterial: parentMat,
      aliases: [s, slug],
      uns: 'Standard Industrial UNS Designation',
      din: 'European / DIN Equivalent Available',
      tagline: parentMat.tagline,
      overview: `${matchingGradeStr} is an engineered industrial grade within the ${parentMat.name} alloy family. Manufactured to strict metallurgical tolerances conforming to international ASTM, ASME, DIN, and EN specifications with complete mill test certification.`,
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
 * Returns all product categories & types that supply a given grade
 */
export function getProductsForGrade(gradeSlug, materialId) {
  const gObj = getGradeBySlug(gradeSlug, materialId);
  const targetMatId = gObj ? gObj.materialId : materialId;

  const results = [];
  products.forEach(cat => {
    if (!cat.types) return;
    const matchingTypes = cat.types.filter(t => {
      // Check if type or category supports this material
      const mats = t.materials || cat.materials || [];
      const matStr = mats.join(' ').toLowerCase();
      if (targetMatId) {
        return matStr.includes(targetMatId.replace(/-/g, ' ')) || matStr.includes('stainless') || matStr.includes('steel');
      }
      return true;
    });

    if (matchingTypes.length > 0) {
      results.push({
        category: cat,
        types: matchingTypes
      });
    }
  });

  return results;
}

