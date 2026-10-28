export const materials = [
  {
    id: 'stainless-steel',
    name: 'Stainless Steel',
    category: 'Ferrous Alloys',
    tagline: 'Versatile corrosion-resistant chromium-nickel steel grades for universal industrial applications.',
    grades: ['304 / 304L', '316 / 316L', '316Ti', '310 / 310S', '321 / 321H', '347 / 347H', '904L', '410', '420', '430'],
    characteristics: 'High resistance to oxidation, excellent formability, superior cryogenic toughness, and easy cleanability. Ideal for corrosive environments ranging from atmospheric exposure to chemical immersion.',
    typicalForms: ['Seamless & Welded Pipes', 'Sheets, Plates & Coils', 'Butt Weld & Forged Fittings', 'Round Bars & Wire', 'Flanges & Fasteners'],
    standards: ['ASTM A312', 'ASTM A240', 'ASTM A182', 'ASTM A276', 'DIN 1.4301 / 1.4404'],
    applications: ['Chemical Processing', 'Food & Dairy Plants', 'Architectural Cladding', 'Pharmaceutical Systems', 'Marine Hardware']
  },
  {
    id: 'carbon-steel',
    name: 'Carbon Steel',
    category: 'Heavy Engineering',
    tagline: 'High-strength structural and pressure vessel carbon steel engineered for demanding energy infrastructure.',
    grades: ['ASTM A106 Gr B/C', 'ASTM A53 Gr B', 'API 5L Gr B / X42 / X52 / X65', 'ASTM A105', 'ASTM A350 LF2 (Low Temp)', 'ASTM A516 Gr 60/70'],
    characteristics: 'Exceptional tensile strength, high pressure resistance, great weldability, and economical performance for steam, water, oil, and gas transmission lines.',
    typicalForms: ['Heavy Wall Seamless Pipes', 'Pressure Vessel Plates', 'Forged Flanges & Olets', 'Butt Weld Pipe Fittings', 'High Tensile Studs'],
    standards: ['ASTM A106', 'ASTM A105', 'ASTM A234 WPB', 'ASTM A516', 'ASME Section VIII'],
    applications: ['Oil & Gas Pipelines', 'Boiler Headers & Steam Piping', 'Power Plant Condensers', 'High Pressure Hydraulics']
  },
  {
    id: 'mild-steel',
    name: 'Mild Steel',
    category: 'Structural Steel',
    tagline: 'Ductile, highly weldable low-carbon structural steel for general engineering and construction frameworks.',
    grades: ['IS 2062 Grade E250 / E350', 'ASTM A36', 'EN 10025 S275 / S355', 'BS 4360 Gr 43A'],
    characteristics: 'High ductility, easy cold forming and flame cutting, excellent machinability, and cost-effective structural integrity for civil and mechanical projects.',
    typicalForms: ['Structural Angles & Channels', 'Plates & Chequered Sheets', 'Welded Tubes & Pipes', 'Flat Bars & Wire Mesh'],
    standards: ['IS 2062', 'ASTM A36', 'EN 10025-2', 'JIS G3101 SS400'],
    applications: ['Building Frames & Trusses', 'Industrial Storage Racks', 'Truck & Trailer Bodies', 'General Mechanical Fabrications']
  },
  {
    id: 'alloy-steel',
    name: 'Alloy Steel',
    category: 'High-Temperature & High-Stress',
    tagline: 'Chrome-molybdenum alloys formulated for high-temperature creep resistance and heavy dynamic loading.',
    grades: ['ASTM A335 P11, P22, P5, P9, P91, P92', 'ASTM A182 F11, F22, F91', 'AISI 4140', 'AISI 4340', 'EN19', 'EN24'],
    characteristics: 'Enhanced hardness, high creep-rupture strength at elevated temperatures above 500°C, and superior wear resistance under cyclic shock loads.',
    typicalForms: ['High Temp Seamless Pipes', 'Forged Flanges & Valve Bodies', 'Butt Weld Fittings', 'Quenched & Tempered Shafts'],
    standards: ['ASTM A335', 'ASTM A234 WP11/WP22/WP91', 'ASTM A182', 'DIN 1.7335 / 1.7380'],
    applications: ['Superheater & Reheater Boilers', 'Thermal Power Plants', 'Turbine Rotor Shafts', 'Heavy Transmission Gears']
  },
  {
    id: 'duplex-stainless-steel',
    name: 'Duplex Stainless Steel',
    category: 'High-Strength Corrosion Resistant',
    tagline: 'Dual-phase austenitic-ferritic microstructure delivering twice the mechanical yield strength of standard stainless.',
    grades: ['UNS S31803 (Duplex 2205)', 'UNS S32205', 'F51', 'EN 1.4462'],
    characteristics: 'Exceptional resistance to chloride stress corrosion cracking, high yield strength (~450 MPa), outstanding pitting and crevice corrosion resistance in saline fluids.',
    typicalForms: ['Process Pipes & Tubes', 'Heavy Plates', 'Forged Flanges & Outlets', 'Fittings & Pump Shafts'],
    standards: ['ASTM A790', 'ASTM A240', 'ASTM A182 F51', 'ASTM A815 WPS31803'],
    applications: ['Desalination Seawater Piping', 'Offshore Marine Platforms', 'Sour Gas Processing Refineries', 'Chemical Tankers']
  },
  {
    id: 'super-duplex-stainless-steel',
    name: 'Super Duplex Stainless Steel',
    category: 'Severe Service Alloys',
    tagline: 'High PREN (>40) super-alloys engineered for aggressive halogen environments and subsea pipelines.',
    grades: ['UNS S32750 (2507 / F53)', 'UNS S32760 (Zeron 100 / F55)', 'EN 1.4410'],
    characteristics: 'Pitting Resistance Equivalent Number (PREN) exceeding 42, remarkable mechanical toughness, high resistance to erosion-corrosion and sour gas cracking.',
    typicalForms: ['High Pressure Seamless Pipes', 'Machined Flanges', 'Forged Valves & Manifolds', 'Marine Fasteners'],
    standards: ['ASTM A790 S32750', 'ASTM A240', 'ASTM A182 F53/F55', 'NACE MR0175 / ISO 15156'],
    applications: ['Subsea Umbilicals & Flowlines', 'Flue Gas Desulfurization (FGD)', 'Aggressive Chloride Evaporators', 'Marine Defense Systems']
  },
  {
    id: 'nickel-alloys',
    name: 'Nickel Alloys',
    category: 'Specialty High-Performance',
    tagline: 'Commercially pure nickel and nickel-based formulations providing superior resistance to caustic alkalies.',
    grades: ['Nickel 200 (UNS N02200)', 'Nickel 201 (UNS N02201 - Low Carbon)', 'Alloy 20 (UNS N08020)'],
    characteristics: 'Outstanding resistance to dry halogens and molten caustic soda up to high temperatures, high thermal and electrical conductivity, magnetic properties.',
    typicalForms: ['Pipes & Tubes', 'Sheets & Plates', 'Round Bars', 'Fittings & Flanges'],
    standards: ['ASTM B160', 'ASTM B161', 'ASTM B162', 'DIN 2.4066 / 2.4068'],
    applications: ['Caustic Evaporators & Chlorine Handling', 'Synthetic Fiber Production', 'Fluorine Generation', 'Electronic Components']
  },
  {
    id: 'monel',
    name: 'Monel',
    category: 'Nickel-Copper Alloys',
    tagline: 'Premium nickel-copper solid solution alloy with extraordinary resistance to seawater and hydrofluoric acid.',
    grades: ['Monel 400 (UNS N04400)', 'Monel K500 (UNS N05500 - Precipitation Hardened)'],
    characteristics: 'Immune to chloride stress corrosion cracking, zero corrosion rate in rapidly flowing seawater, high mechanical strength retained across cryogenic to 450°C ranges.',
    typicalForms: ['Marine Propeller Shafts', 'Pipes & Heat Exchanger Tubes', 'Forged Flanges & Fasteners', 'Wire Mesh & Strainers'],
    standards: ['ASTM B164', 'ASTM B165', 'ASTM B127', 'ASTM B564 UNS N04400'],
    applications: ['Marine Propeller & Pump Shafts', 'Alkylation Units (HF Acid)', 'Offshore Splash Zone Sheathing', 'Crude Oil Distillation Towers']
  },
  {
    id: 'inconel',
    name: 'Inconel',
    category: 'Nickel-Chromium Superalloys',
    tagline: 'Oxidation-resistant austenitic nickel-chromium superalloys retaining strength at temperatures above 1000°C.',
    grades: ['Inconel 600 (UNS N06600)', 'Inconel 625 (UNS N06625)', 'Inconel 718 (UNS N07718)', 'Incoloy 800 / 825'],
    characteristics: 'Forms a thick, stable, passivating oxide layer protecting against thermal degradation, fatigue resistance, and severe pitting in oxidizing acid chemistries.',
    typicalForms: ['Pipes & Tubing', 'Round Bars & Shafts', 'Plates & Laser Blanks', 'Forged Rings & Flanges'],
    standards: ['ASTM B444', 'ASTM B443', 'ASTM B564', 'AMS 5666 / AMS 5599'],
    applications: ['Gas Turbine Blades & Combustors', 'Aerospace Jet Engine Exhausts', 'Nuclear Steam Generator Tubing', 'Deepwater Sour Gas Wells']
  },
  {
    id: 'hastelloy',
    name: 'Hastelloy',
    category: 'Nickel-Molybdenum-Chromium',
    tagline: 'The premier chemical process superalloy resisting wet chlorine, hydrochloric acid, and strong oxidizing salts.',
    grades: ['Hastelloy C276 (UNS N10276)', 'Hastelloy C22 (UNS N06022)', 'Hastelloy B2 / B3 (UNS N10665/N10675)'],
    characteristics: 'Exceptional resistance to localized corrosion, pitting, stress corrosion cracking, and both reducing and oxidizing media in highly contaminated environments.',
    typicalForms: ['Reactor Vessel Plates', 'Seamless & Welded Piping', 'Flanges & Valves', 'Instrumentation Fittings & Diaphragms'],
    standards: ['ASTM B574', 'ASTM B575', 'ASTM B622', 'DIN 2.4819'],
    applications: ['Pollution Control Scrubber Liners', 'Sulfuric & Hydrochloric Acid Production', 'Waste Incineration Vessels', 'Pharmaceutical Chemical Syntheses']
  },
  {
    id: 'titanium',
    name: 'Titanium',
    category: 'Lightweight Reactive Metals',
    tagline: 'Unmatched strength-to-weight ratio paired with total immunity to ambient saltwater corrosion.',
    grades: ['Grade 1 & 2 (Commercially Pure CP Ti)', 'Grade 5 (Ti-6Al-4V High Strength)', 'Grade 7 (Ti-0.15Pd Enhanced Acid Resistance)'],
    characteristics: 'Lightweight (45% lighter than steel) with extreme specific strength, bio-compatibility, and instantaneous spontaneous oxide passivation in marine conditions.',
    typicalForms: ['Heat Exchanger Condenser Tubes', 'Plates & Discs', 'Fasteners & Turnings', 'Seamless Pipes & Pipe Fittings'],
    standards: ['ASTM B338', 'ASTM B265', 'ASTM B348', 'ASTM B381'],
    applications: ['Power Station Seawater Coolers', 'Desalination Multi-Stage Flash Evaporators', 'Chemical Chlor-Alkali Anodes', 'Aerospace Structural Fasteners']
  },
  {
    id: 'copper-nickel',
    name: 'Copper Nickel',
    category: 'Marine Copper Alloys',
    tagline: 'Anti-fouling cupro-nickel alloys engineered for continuous seawater cooling and marine firewater piping.',
    grades: ['CuNi 90/10 (C70600)', 'CuNi 70/30 (C71500)'],
    characteristics: 'Natural resistance to marine biofouling and macro-fouling (barnacles and algae), excellent thermal conductivity, resistance to seawater impingement attack.',
    typicalForms: ['Condenser & Chiller Tubes', 'Flanges & Butt Weld Fittings', 'Pipes & Reducers', 'Heat Exchanger Tube Sheets'],
    standards: ['ASTM B111', 'ASTM B466', 'EEMUA 144 / 145 / 146', 'DIN 86019'],
    applications: ['Marine Ship Piping Systems', 'Offshore Platform Firewater Rings', 'Desalination Plant Distillers', 'Seawater Intake Screens']
  },
  {
    id: 'brass',
    name: 'Brass',
    category: 'Copper-Zinc Alloys',
    tagline: 'High-machinability copper-zinc formulations for precision valve trim, plumbing bushings, and marine components.',
    grades: ['Naval Brass (C46400)', 'Cartridge Brass (C26000)', 'High Tensile Brass / Manganese Bronze (C67500)'],
    characteristics: 'Low friction coefficient, spark-resistant properties, high aesthetic appeal, and outstanding machinability on high-speed automatic Swiss lathes.',
    typicalForms: ['Extruded Hex & Round Rods', 'Piping Bushings & Plugs', 'Precision Turned Valve Spindles', 'Sheet Blanks'],
    standards: ['ASTM B21', 'ASTM B36', 'ASTM B16', 'IS 319 Free Cutting Brass'],
    applications: ['Pneumatic & Hydraulic Plugs', 'Marine Propeller Bushings', 'Instrumentation Sensor Housings', 'Sanitary Plumbing Fittings']
  },
  {
    id: 'aluminium',
    name: 'Aluminium',
    category: 'Lightweight Structural',
    tagline: 'Corrosion-resistant marine and aerospace grade aluminum alloys combining lightweight and structural strength.',
    grades: ['Alloy 5083 (Marine Grade H111/H116)', 'Alloy 6061-T6 (Structural)', 'Alloy 6082-T6', 'Alloy 7075-T6 (High Strength)'],
    characteristics: 'One-third the density of steel, excellent cryogenic properties, high thermal dissipation, and superb weldability in marine atmospheres.',
    typicalForms: ['Plates & Chequered Tread Plates', 'Extruded Tubes & Profiles', 'Forged Flanges & Machined Blocks', 'Drawn Rods'],
    standards: ['ASTM B209', 'ASTM B221', 'EN 573-3', 'EN 485-2'],
    applications: ['High-Speed Catamaran & Ship Hulls', 'Architectural Curtin Wall Substructures', 'Cryogenic Road Tankers', 'Aerospace Fixtures']
  },
  {
    id: 'other-non-ferrous',
    name: 'Other Non-Ferrous Materials',
    tagline: 'Specialty refractory and bronze alloys custom-sourced for ultra-critical thermal, chemical, or acoustic tasks.',
    category: 'Specialty & Refractory',
    grades: ['Tantalum', 'Zirconium 702', 'Phosphor Bronze (C51000/C54400)', 'Aluminium Bronze (C95400/C63000)', 'Lead Bronze'],
    characteristics: 'Tailored metallurgical characteristics such as zero erosion under sand slurries, total immunity to fuming boiling acids, or non-sparking mechanical properties.',
    typicalForms: ['Plates & Strips', 'Custom Castings & Forgings', 'Round Bars & Sleeves', 'Custom Machined Components'],
    standards: ['ASTM B521 (Tantalum)', 'ASTM B550 (Zirconium)', 'ASTM B139 (Phosphor Bronze)', 'ASTM B150 (Alloy Bronze)'],
    applications: ['Extreme Acid Reactors', 'Nuclear Fuel Reprocessing', 'High-Load Heavy Machine Bearings', 'Offshore Heavy Mooring Bushings']
  }
];
