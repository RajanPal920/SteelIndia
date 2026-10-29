export const products = [
  {
    id: 'butt-weld-fittings',
    name: 'Butt Weld Fittings',
    tag: 'Fittings & Piping',
    shortDesc: 'Seamless & welded pipe fittings engineered for high pressure piping systems.',
    longDesc: 'Our butt weld fittings are precision-manufactured for critical industrial fluid flow systems. Available in long radius elbows, short radius elbows, equal tees, reducing tees, concentric reducers, eccentric reducers, stub ends, and pipe caps across standard and high-yield wall thicknesses.',
    image: '/images/prod-butt-weld-fittings.jpg',
    specs: {
      standards: 'ASME B16.9, MSS SP-43, DIN 2605, EN 10253',
      sizes: '1/2" NB to 48" NB (Seamless up to 24", Welded up to 48")',
      schedules: 'SCH 5S, 10S, 40S, 80S, 160, XS, XXS',
      types: 'Elbows (45°, 90°, 180°), Tees (Equal & Unequal), Reducers, Stub Ends, End Caps',
      endConnection: 'Beveled Ends (ANSI B16.25), Plain Ends',
    },
    materials: ['Stainless Steel 304/304L, 316/316L, 321, 310S', 'Carbon Steel A234 WPB / WPC', 'Alloy Steel WP11, WP22, WP91', 'Duplex 2205 & Super Duplex 2507', 'Inconel 625, Monel 400, Hastelloy C276'],
    applications: ['Oil & Gas Refineries', 'Chemical Processing Plants', 'Power Generation Stations', 'Marine Piping Networks'],
    features: [
      'Smooth internal contour minimizing pressure drop and turbulence',
      '100% radiographic inspection available upon customer specification',
      'Full material traceability with EN 10204 3.1 Mill Test Certification',
      'Precision beveled ends ready for immediate orbital and manual welding'
    ]
  },
  {
    id: 'forged-fittings',
    name: 'Forged Fittings',
    tag: 'High Pressure Fittings',
    shortDesc: 'Heavy-duty forged high-pressure threaded and socket weld piping components.',
    longDesc: 'Designed to handle severe pressure and extreme temperature conditions, our high-integrity forged fittings include elbows, tees, couplings, unions, nipples, plugs, bushes, and branch outlet fittings (Weldolet, Sockolet, Threadolet).',
    image: '/images/prod-forged-fittings.jpg',
    specs: {
      standards: 'ASME B16.11, BS 3799, MSS-SP-79/83/95/97',
      sizes: '1/8" NB to 4" NB',
      pressureRatings: '2000 LBS, 3000 LBS, 6000 LBS, 9000 LBS',
      types: 'Socket Weld (SW) & Screwed / Threaded (NPT, BSPT, BSPP)',
      items: 'Elbows 90°/45°, Tees, Couplings, Half Couplings, Unions, Hex Bushings, Hex Plugs, Swage Nipples'
    },
    materials: ['Stainless Steel F304/304L, F316/316L, F321, F347', 'Carbon Steel ASTM A105 / A105N, A350 LF2', 'Alloy Steel ASTM A182 F11, F22, F91', 'Duplex F51, Super Duplex F53/F55', 'Nickel Alloys & Titanium'],
    applications: ['High-Pressure Hydraulic Lines', 'Steam Pipelines', 'Offshore Platforms', 'Petrochemical Processing'],
    features: [
      'High mechanical density achieved through precision die-forging',
      'Accurate CNC-machined threads (NPT/BSPT) ensuring leak-free connections',
      'Hydrostatically and dimensionally verified for extreme pressure duty',
      'Available with high-yield Charpy V-notch low-temperature impact testing'
    ]
  },
  {
    id: 'pipes-tubes',
    name: 'Pipes & Tubes',
    tag: 'Tubular Products',
    shortDesc: 'Seamless and welded stainless, carbon, alloy, and exotic tubing in all standard schedules.',
    longDesc: 'A comprehensive line of industrial seamless and welded pipes and tubes tailored for heat exchangers, condensers, boilers, structural frameworks, and general piping infrastructure.',
    image: '/images/prod-pipes-tubes.jpg',
    specs: {
      standards: 'ASTM A312, A213, A269, A106, A53, A333, API 5L, EN 10216',
      sizes: '1/8" NB to 36" NB (Pipes); 6mm OD to 150mm OD (Tubes)',
      schedules: 'SCH 5S to SCH XXS, custom wall thicknesses up to 50mm',
      forms: 'Seamless, ERW, EFW, SAW, Round, Square, Rectangular',
      finishes: 'Pickled & Passivated, Mill Finish, Annealed, Mirror Polished (Grit 320 / 600)'
    },
    materials: ['Stainless Steel 304, 304L, 316, 316L, 316Ti, 310S, 321, 347, 904L', 'Carbon Steel A106 Gr B, A53 Gr B, A333 Gr 6', 'Alloy Steel P11, P22, P91', 'Duplex S31803 / S32205, Super Duplex S32750', 'Inconel 600/625, Monel 400'],
    applications: ['Oil & Gas Pipelines', 'Heat Exchangers & Boilers', 'Structural Fabrication', 'Food & Beverage Conveyance'],
    features: [
      'Consistent wall thickness and uniform concentricity',
      'Eddy-current, ultrasonic, and hydrostatic testing to ASTM specifications',
      'Smooth inner surface minimizing boundary layer resistance',
      'Supplied in standard 6-meter random lengths or precision cut-to-length'
    ]
  },
  {
    id: 'sheets-plates',
    name: 'Sheets & Plates',
    tag: 'Flat Products',
    shortDesc: 'Hot rolled and cold rolled stainless, carbon, and special alloy plates cut to size.',
    longDesc: 'High-flatness steel sheets, heavy industrial plates, and precision coils cut to custom dimensions. Ideal for pressure vessel fabrication, tank building, structural engineering, and marine shipbuilding.',
    image: '/images/prod-sheets-plates.jpg',
    specs: {
      standards: 'ASTM A240, ASME SA240, ASTM A516, EN 10028, IS 2062',
      thickness: '0.5mm to 100mm (Cold Rolled & Hot Rolled)',
      widths: '1000mm, 1250mm, 1500mm, 2000mm, up to 3000mm custom widths',
      lengths: '2000mm, 2500mm, 3000mm, 6000mm, cut-to-size',
      surfaceFinishes: '2B, No. 1 (HRAP), BA (Bright Annealed), No. 4 Hairline, Chequered / Tear Drop'
    },
    materials: ['Stainless Steel 304/304L, 316/316L, 310S, 321, 904L', 'Carbon Steel ASTM A516 Gr 60/70 (Boiler Quality), A36', 'Duplex 2205, Super Duplex 2507', 'Nickel 200, Inconel 625, Hastelloy C276', 'Titanium Gr 2 / Gr 5'],
    applications: ['Pressure Vessels & Reactors', 'Cryogenic Storage Tanks', 'Shipbuilding & Marine Structures', 'Heavy Industrial Machinery'],
    features: [
      'Ultrasonically tested to ASTM A435 / A578 Level II specifications',
      'Plasma, laser, and waterjet profile cutting capabilities available',
      'Superior flatness tolerance and surface integrity',
      'Complete heat number stencil and mill certification traceability'
    ]
  },
  {
    id: 'flanges',
    name: 'Flanges',
    tag: 'Piping Connections',
    shortDesc: 'Forged steel flanges in all standard ratings, facings, and custom bore diameters.',
    longDesc: 'Precision-forged industrial pipe flanges engineered to join pipes, valves, pumps, and other piping components. Available in all standard ANSI/ASME, DIN, and EN pressure ratings.',
    image: '/images/prod-flanges.jpg',
    specs: {
      standards: 'ASME B16.5, ASME B16.47 Series A & B, DIN 2501, EN 1092-1',
      sizes: '1/2" NB to 48" NB',
      pressureClasses: 'Class 150, 300, 600, 900, 1500, 2500 LBS; PN6 to PN100',
      types: 'Weld Neck (WN), Slip-On (SO), Blind (BL), Socket Weld (SW), Lap Joint (LJ), Threaded',
      facingTypes: 'Raised Face (RF), Flat Face (FF), Ring Type Joint (RTJ)'
    },
    materials: ['Stainless Steel ASTM A182 F304/L, F316/L, F321, F310, F347', 'Carbon Steel ASTM A105, A350 LF2', 'Alloy Steel ASTM A182 F11, F22, F91', 'Duplex ASTM A182 F51 / F53 / F55', 'Monel, Inconel, Hastelloy & Titanium'],
    applications: ['Process Plant Piping', 'Pipeline Valves & Meters Connection', 'Desalination Systems', 'Refinery Turnarounds'],
    features: [
      'Serrated phonographic or concentric finish on gasket contact faces (125-250 AARH)',
      'Precision bolt-hole concentricity for effortless on-site alignment',
      'Grain flow optimization through closed-die and open-die forging',
      'Supplied with magnetic particle and dye-penetrant inspection verification'
    ]
  },
  {
    id: 'fasteners',
    name: 'Fasteners',
    tag: 'Hardware & Bolting',
    shortDesc: 'Industrial stud bolts, hex bolts, heavy nuts, and washers for high tensile joints.',
    longDesc: 'High-strength industrial fastening solutions designed for critical flanged joints, structural assemblies, and extreme temperature operations in offshore and process environments.',
    image: '/images/prod-fasteners.jpg',
    specs: {
      standards: 'ASTM A193, A194, A320, DIN 933, DIN 934, ISO 4014, ASME B18.2.1',
      sizes: 'M6 to M100; 1/4" to 4" Diameter',
      lengths: '10mm up to 3000mm fully threaded or standard shank lengths',
      types: 'Stud Bolts, Heavy Hex Bolts, Hex Head Screws, Hex Nuts, Nyloc Nuts, Plain & Spring Washers',
      coatings: 'Zinc Plated, Hot Dip Galvanized (HDG), PTFE / Teflon Coated, Cadmium Plated'
    },
    materials: ['Stainless Steel A2-70, A4-70, A4-80 (SS 304, SS 316)', 'Alloy Steel ASTM A193 B7 / B7M, B16', 'Low Temp Alloy ASTM A320 L7 / L7M', 'Duplex & Super Duplex (UNS S31803 / S32750)', 'Monel 400, Inconel 718, Hastelloy'],
    applications: ['High-Pressure Flanged Joints', 'Structural Steel Framing', 'Subsea Installations', 'Turbine Casings'],
    features: [
      'High yield and tensile strength with certified Charpy impact testing',
      'PTFE / Xylan coatings for exceptional salt spray corrosion resistance',
      'Accurate rolled threads for enhanced fatigue resistance',
      'Color-coded or stamped grade marks on every bolt head and nut face'
    ]
  },
  {
    id: 'rods-bars',
    name: 'Rods & Bars',
    tag: 'Long Products',
    shortDesc: 'High-precision round, hex, flat, and square steel bars in diverse alloys.',
    longDesc: 'Bright drawn, peeled, turned, and ground solid steel bars suitable for precision CNC machining, pump shafts, valves, automotive components, and structural pins.',
    image: '/images/prod-rods-bars.jpg',
    specs: {
      standards: 'ASTM A276, ASTM A479, DIN 1013, EN 10088-3',
      diameters: '3mm to 350mm (Bright Bars & Black Forged Bars)',
      lengths: '1 meter to 6 meters random or precision cut pieces',
      shapes: 'Round Bars, Hexagonal Bars, Square Bars, Flat Bars, Angle Bars',
      conditions: 'Annealed, Solution Treated, Cold Drawn, Centerless Ground (h9, h11 tolerances)'
    },
    materials: ['Stainless Steel 304, 304L, 316, 316L, 310, 321, 410, 420, 431, 17-4PH', 'Carbon Steel EN8, EN9, 1018, 1045', 'Alloy Steel EN19, EN24, 4140, 4340', 'Duplex 2205, Super Duplex 2507', 'Titanium Gr 2 / Gr 5, Inconel 718'],
    applications: ['Precision CNC Turned Components', 'Pump & Motor Shafts', 'Automotive Axles & Studs', 'Aerospace Fasteners'],
    features: [
      'Tight diameter tolerances and high straightness control',
      '100% surface eddy current and ultrasonic defect inspection',
      'Homogeneous microstructure ideal for high-speed machining',
      'Excellent weldability and response to specialized heat treatments'
    ]
  },
  {
    id: 'wires',
    name: 'Wires',
    tag: 'Drawn Products',
    shortDesc: 'Bright annealed, spring, and welding stainless steel wires in custom spool sizes.',
    longDesc: 'Industrial grade drawn steel wires engineered for cold heading, springs, wire mesh manufacturing, tying, and MIG/TIG welding consumables across demanding environments.',
    image: '/images/prod-wires.jpg',
    specs: {
      standards: 'ASTM A313, ASTM A580, AWS A5.9, DIN 17224',
      diameterRange: '0.10mm to 12.00mm',
      packaging: 'DIN Spools (SD300, BS60), Wooden Drums, Coils from 25kg to 500kg',
      tempers: 'Soft Annealed, 1/4 Hard, 1/2 Hard, Full Hard / Spring Temper',
      surfaces: 'Bright Finish, Matte / Soap Coated, Electrolytic Polished'
    },
    materials: ['Stainless Steel 304, 304L, 316, 316L, 302, 310, 314, 430', 'Welding Grades ER308L, ER309L, ER316L', 'Inconel 625 & Monel 400 Wires'],
    applications: ['Spring Manufacturing', 'Cold Heading Fastener Wire', 'Industrial Conveyor Belts', 'Welding Electrodes & Filler Wire'],
    features: [
      'Uniform tensile strength and elongation along the entire spool length',
      'Controlled cast and helix for trouble-free automatic payoff machines',
      'High resistance to pitting and stress corrosion cracking',
      'Purity in chemical composition minimizing spatter during welding'
    ]
  },
  // {
  //   id: 'dairy-pharma-fittings',
  //   name: 'Dairy & Pharma Fittings',
  //   tag: 'Sanitary Fittings',
  //   shortDesc: 'Hygienic tri-clamp and SMS/DIN fittings with electro-polished sanitary finishes.',
  //   longDesc: 'Ultra-hygienic stainless steel sanitary fittings, valves, and tube components certified for food processing, brewery, dairy, biotechnology, and sterile pharmaceutical installations.',
  //   image: '/images/prod-dairy-pharma-fittings.jpg',
  //   specs: {
  //     standards: '3-A Sanitary Standards, ASME BPE, DIN 11851, SMS 1145, ISO 2852',
  //     sizes: '1/2" OD to 6" OD',
  //     connections: 'Tri-Clamp (TC), SMS Union, DIN Union, IDF, Bevel Seat, Welded',
  //     surfaceRoughness: 'Ra < 0.4 µm (Mechanical Polish & Electro-Polish)',
  //     items: 'Sanitary Clamps, TC Ferrules, TC Bends, TC Tees, Sight Glasses, Sampling Valves, End Caps'
  //   },
  //   materials: ['Stainless Steel 316L (Low Carbon Sanitary Grade)', 'Stainless Steel 304 / 304L', 'Hastelloy C22 (Special Sterile Applications)', 'FDA-compliant EPDM, Silicone, PTFE & Viton Gaskets'],
  //   applications: ['Pharmaceutical Formulation Plants', 'Dairy Processing & Milk Chilling', 'Breweries & Beverage Bottling', 'Cosmetic Production'],
  //   features: [
  //     'Crevice-free sterile interior surfaces preventing bacterial colonization',
  //     'Electro-polished surface Ra values measured and documented with profilometer reports',
  //     'Quick disassembly tri-clamp design for clean-in-place (CIP) and steam-in-place (SIP)',
  //     'Material test reports confirming delta ferrite content and sulfur limits'
  //   ]
  // },
  {
    id: 'hose-pipes',
    name: 'Hose Pipes',
    tag: 'Flexible Conveyance',
    shortDesc: 'Corrugated stainless steel flexible hose assemblies with protective outer braiding.',
    longDesc: 'High-pressure flexible metallic hoses manufactured from corrugated stainless steel with single or double stainless steel wire braid. Designed to absorb thermal expansion, vibration, and piping misalignment.',
    image: '/images/prod-hose-pipes.jpg',
    specs: {
      standards: 'BS 6501 Part 1, ISO 10380',
      sizes: '1/4" NB to 12" NB',
      pressureRange: 'Vacuum up to 250 Bar (depending on diameter and braid plies)',
      temperatureRange: '-200°C to +600°C',
      endFittings: 'Flanged Ends, Camlock Couplings, Male/Female Threaded Nipple, BSP/NPT Unions, Triclamp'
    },
    materials: ['Inner Tube: SS 304, SS 316L Corrugated Core', 'Outer Braid: SS 304 / SS 316 High-Tensile Wire Braid', 'End Fittings: Carbon Steel, Stainless Steel 304/316'],
    applications: ['Steam and Cryogenic Liquid Lines', 'Compressor Vibration Isolation', 'Chemical Transfer Loading Arms', 'Furnace Exhaust Flexibility'],
    features: [
      'High flexibility absorbing continuous reciprocal motion and pump vibration',
      'Full fire resistance and extreme temperature performance',
      '100% pneumatic underwater bubble leak tested and hydrostatic tested',
      'Custom assembly lengths manufactured with certified TIG welded end fittings'
    ]
  },
  {
    id: 'wire-mesh',
    name: 'Wire Mesh',
    tag: 'Screening & Filtration',
    shortDesc: 'Precision woven wire cloth and mesh screens for industrial separation and grading.',
    longDesc: 'Industrial woven wire cloth and heavy-duty screening mesh manufactured in square mesh, Dutch weave, and twill weave patterns for filtration, particle separation, and architectural screens.',
    image: '/images/prod-wire-mesh.jpg',
    specs: {
      standards: 'ASTM E2016, ISO 9044, DIN 4189',
      meshCounts: '1 Mesh per inch up to 500 Mesh per inch (Micro-pore Dutch weaves down to 5 microns)',
      wireDiameters: '0.025mm to 3.0mm',
      weaveTypes: 'Plain Weave, Twill Weave, Plain Dutch Weave, Twill Dutch Weave, Reverse Dutch',
      rollDimensions: 'Standard 1m, 1.22m, 1.5m widths x 30m length rolls or cut-to-shape discs'
    },
    materials: ['Stainless Steel 304, 304L, 316, 316L, 310', 'Monel 400', 'Inconel 600', 'Hastelloy C276', 'Brass & Phosphor Bronze'],
    applications: ['Chemical Filtration & Catalytic Beds', 'Oil & Gas Sand Screens', 'Flour Mills & Food Screening', 'Extruder Screen Packs'],
    features: [
      'Precise aperture consistency ensuring reliable micron retention ratings',
      'High resistance to acidic, caustic, and high-temperature operating fluids',
      'Firm weave stability resisting distortion under differential pressure',
      'Available in full rolls, slit ribbons, and multi-layer sintered discs'
    ]
  },
  {
    id: 'perforated-sheets',
    name: 'Perforated Sheets',
    tag: 'Perforated Screens',
    shortDesc: 'Precision stamped sheets with circular, square, slotted, and decorative hole patterns.',
    longDesc: 'Industrial perforated steel and alloy sheets engineered through precision CNC punching presses. Used extensively in acoustic damping, drying trays, architectural claddings, and grading screens.',
    image: '/images/prod-perforated-sheets.jpg',
    specs: {
      standards: 'DIN 24041, ISO 7806',
      thickness: '0.4mm to 12.0mm',
      holePatterns: 'Round (Staggered 60°/45°, Inline), Square, Slotted / Oblong, Hexagonal, Embossed',
      holeDiameters: '0.5mm to 100mm with customizable pitch and open area percentages (10% to 70%)',
      sheetSizes: '1000x2000mm, 1250x2500mm, 1500x3000mm, cut strips and framed panels'
    },
    materials: ['Stainless Steel 304, 304L, 316, 316L', 'Carbon Steel CRCA / Hot Rolled', 'Galvanized Iron (GI)', 'Aluminium 1050 / 5052 / 6061', 'Brass & Copper'],
    applications: ['Acoustic Enclosures & Silencers', 'Centrifuge Baskets & Separation Screens', 'Architectural Facades & Sunshades', 'Grain Dryer Decks'],
    features: [
      'Clean burr-free punches with smooth perimeter margins',
      'Controlled open area percentage calibrated for airflow or filtration',
      'Sheet roller leveled after punching to eliminate residual stress curvature',
      'Fabrication services including shearing, bending, and framing available'
    ]
  },
  {
    id: 'ferrule-fittings',
    name: 'Ferrule Fittings',
    tag: 'Instrumentation',
    shortDesc: 'Double ferrule instrumentation tube fittings for high-purity and high-pressure lines.',
    longDesc: 'Twin ferrule compression tube fittings engineered for instrumentation lines, analytical sampling systems, chromatography, and high-pressure gas distribution requiring zero-leakage reliability.',
    image: '/images/prod-ferrule-fittings.jpg',
    specs: {
      standards: 'Compatible with standard Swagelok / Parker A-LOK instrumentation designs',
      sizes: '1/16" to 2" OD; 2mm to 38mm Metric OD',
      pressureRating: 'Up to 15,000 PSI (1034 Bar) working pressure',
      configurations: 'Male/Female Connectors, Union Elbows, Union Tees, Crosses, Bulkhead Unions, Reducers',
      connections: 'Tube Compression to NPT, BSPT, BSPP, SAE / MS threads'
    },
    materials: ['Stainless Steel 316 / 316L', 'Duplex 2205', 'Monel 400', 'Inconel 625', 'Hastelloy C276', 'Brass'],
    applications: ['Instrumentation & Control Panels', 'Analytical Sampling Shelters', 'Hydraulic Test Benches', 'Compressed Natural Gas (CNG) Dispensers'],
    features: [
      'Precision double-ferrule mechanical grip resisting high vibration and pressure pulses',
      'Silver-plated nut threads preventing galling during repeated re-assembly',
      'Zero torque transfer to the tubing during installation pull-up',
      'Helium leak tested with leak rates lower than 1 x 10^-9 std cc/sec'
    ]
  },
  {
    id: 'circles',
    name: 'Circles',
    tag: 'Fabricated Blanks',
    shortDesc: 'Laser, plasma, and waterjet cut circular blanks for vessel heads and blind closures.',
    longDesc: 'Precision-cut circular steel discs and blanks produced from certified stainless steel and high-nickel alloy plates. Used for dished end forming, tank bottoms, blind flanges, and circular cookware blanks.',
    image: '/images/prod-circles.jpg',
    specs: {
      standards: 'ASTM A240, ASME SA240, DIN EN 10028',
      diameters: '50mm to 3000mm diameter',
      thickness: '0.8mm to 80mm',
      cuttingMethods: 'High-Definition Plasma, Fiber Laser, Precision Abrasive Waterjet, Sheared / Stamped',
      edgeConditions: 'Deburred, CNC Beveled for Welding, Machine Turn Edges'
    },
    materials: ['Stainless Steel 304, 304L, 316, 316L, 310S, 321', 'Duplex 2205 & Super Duplex 2507', 'Carbon Steel A516 Gr 70', 'Inconel 625, Hastelloy C276, Titanium'],
    applications: ['Dished Ends & Torispherical Vessel Heads', 'Heat Exchanger Baffles', 'Manhole Blind Covers', 'Industrial Centrifuge Bases'],
    features: [
      'Accurate concentricity and smooth edge finishes ready for dishing and spinning',
      'No heat affected zone (HAZ) options with waterjet cutting',
      'Full plate trace stencil preserved and documented on every cut piece',
      'Ultrasonic flaw detection available for thick section vessel circles'
    ]
  },

  {
    id: 'patta-patti',
    name: 'Patta Patti',
    tag: 'Slit Strips & Flats',
    shortDesc: 'Cold sheared and slit steel flats, strips, and patta patti for structural engineering.',
    longDesc: 'Narrow-width stainless steel and alloy slit strips (commonly called patta patti or flat bar strips) supplied with slit, deburred, or rounded edges for engineering fabrication, earthing, clamps, and architectural trims.',
    image: '/images/prod-patta-patti.jpg',
    specs: {
      standards: 'ASTM A240, ASTM A276, IS 2062',
      thickness: '1.0mm to 12.0mm',
      widths: '12mm to 150mm',
      lengths: 'Standard 3 to 6-meter lengths or continuous coil strips',
      edges: 'Slit Edge, Deburred Mill Edge, Sheared Edge, Hot Rolled & Pickled'
    },
    materials: ['Stainless Steel 201, 304, 304L, 316, 316L, 310', 'Mild Steel & Carbon Steel', 'Copper & Brass Strips'],
    applications: ['Electrical Earthing & Grounding Flats', 'Industrial Pipe Support Clamps & Saddles', 'Fabricated Grating Crossbars', 'Architectural Profiles & Trims'],
    features: [
      'Straight camber control for easy jig placement in welding jigs',
      'Uniform edge finish preventing cuts during handling and installation',
      'High ductility supporting 90° and 180° cold bend tests without cracking',
      'Supplied in bundles wrapped with protective waterproof industrial packaging'
    ]
  },

  {
    id: 'coils',
    name: 'Coils',
    tag: 'Coiled Steel',
    shortDesc: 'Hot rolled, cold rolled, and precision slit steel coils in prime industrial grades.',
    longDesc: 'Prime industrial steel coils in master widths and precision custom slit widths. Supplied in hot rolled annealed & pickled (HRAP) and cold rolled (CR) finishes for roll forming, stampings, and tube mills.',
    image: '/images/prod-coils.jpg',
    specs: {
      standards: 'ASTM A240, EN 10088-2, JIS G4305',
      thicknessRange: '0.3mm to 16.0mm',
      widthRange: '10mm to 2000mm (Master coils & Slit coils down to 10mm width)',
      coilInnerDiameter: '508mm / 610mm standard ID',
      coilWeights: '500kg up to 25 Metric Tons',
      surfaces: '2B, BA, No. 1 (HRAP), No. 4 with PVC protective film'
    },
    materials: ['Stainless Steel 304, 304L, 316, 316L, 321, 310S, 430, 409', 'Carbon Steel CRCA & HR Pickled & Oiled', 'Duplex 2205 Coils'],
    applications: ['Automated Stamping & Press Lines', 'Continuous Welded Tube Mills', 'Cable Trays & HVAC Ducting', 'Automotive Exhaust Components'],
    features: [
      'Crown-free uniform gauge thickness across the entire coil width',
      'Burr-free slit edges with minimal slit-edge burr height',
      'Available with laser-guaranteed PE / PVC surface protective films',
      'Export seaworthy steel strapped eye-to-sky or eye-to-wall packing'
    ]
  },
  {
    id: 'rings',
    name: 'Rings',
    tag: 'Forged & Cut Rings',
    shortDesc: 'Seamless forged rolled rings and plasma-cut rings for seals, gears, and flanges.',
    longDesc: 'Heavy-duty seamless rolled rings and precision profile-cut steel rings designed for high mechanical fatigue resistance in rotating equipment, bearing races, gear blanks, and pressure seals.',
    image: '/images/prod-rings.jpg',
    specs: {
      standards: 'ASTM A182, ASTM A105, DIN 17440',
      outerDiameter: '100mm to 3500mm OD',
      heightThickness: '15mm to 600mm face height',
      methods: 'Seamless Forged Rolled Rings, CNC Waterjet Profile Cut, Plasma Cut',
      finishes: 'Rough Machined, Semi-Finished with machining allowance, Precision CNC Finished'
    },
    materials: ['Stainless Steel F304/L, F316/L, F321, F347', 'Carbon Steel A105, A350 LF2', 'Alloy Steel 4140, 4340, EN24, F11, F22', 'Duplex F51, Super Duplex F53/F55', 'Inconel 625, Monel 400'],
    applications: ['Bearing Races & Slewing Rings', 'Heavy Gear Blanks & Pinions', 'High-Pressure Vessel Shell Flanges', 'Subsea Wellhead Ring Gaskets (BX/RX)'],
    features: [
      'Continuous radial and tangential metallurgical grain flow providing superior toughness',
      'Free from porosity, shrinkage voids, and internal centerline segregation',
      'Fully ultrasonic tested to ASTM A388 standards with zero defect tolerance',
      'Proof machined for instant mounting onto final CNC finish-turning chucks'
    ]
  },

  {
    id: 'valves',
    name: 'Valves',
    tag: 'Flow Control',
    shortDesc: 'Industrial ball, gate, globe, check, and butterfly valves in stainless and carbon steel.',
    longDesc: 'A comprehensive range of industrial valves for flow isolation, regulation, and control across process piping, oil and gas, chemical, and pharmaceutical systems. Available in cast and forged body construction across standard pressure classes.',
    image: '/images/prod-dairy-pharma-fittings.jpg',
    specs: {
      standards: 'API 600, API 602, API 608, ASME B16.34, BS 1868',
      sizes: '1/4" NB to 48" NB',
      pressureClasses: 'Class 150, 300, 600, 900, 1500 LBS; PN10 to PN250',
      types: 'Ball Valves, Gate Valves, Globe Valves, Check Valves, Butterfly Valves, Needle Valves',
      endConnections: 'Flanged (RF/RTJ), Butt Weld, Socket Weld, Threaded (NPT/BSPT)'
    },
    materials: ['Stainless Steel CF8 (304), CF8M (316), CF3M (316L)', 'Carbon Steel WCB, WCC, LCB', 'Alloy Steel WC6, WC9, C12A', 'Duplex CD4MCu, Super Duplex CE8MN'],
    applications: ['Oil & Gas Pipelines', 'Chemical Processing Plants', 'Pharmaceutical & Food Industry', 'Power Generation Systems'],
    features: [
      'Full bore and reduced bore configurations for flexible flow control',
      'Anti-blowout stem design ensuring safe operation under pressure',
      'Fire-safe designs certified to API 607 / API 6FA',
      'Available with extended bonnet, jacketed body, and cryogenic trim options'
    ]
  },

  {
    id: 'chequered-plates',
    name: 'Chequered Plates',
    tag: 'Anti-Slip Flooring',
    shortDesc: 'Hot rolled raised pattern chequered / tear-drop floor plates for anti-slip applications.',
    longDesc: 'Industrial chequered steel plates with raised tear-drop, diamond, or lentil raised patterns manufactured from hot rolled carbon steel and stainless steel. Widely used for flooring, staircase treads, platforms, and vehicle bodies.',
    image: '/images/prod-chequered-plates.jpg',
    specs: {
      standards: 'IS 3502, BS 4360, ASTM A786',
      thickness: '2.5mm to 12mm base metal thickness',
      widths: '1250mm, 1500mm, 2000mm',
      lengths: '2500mm, 3000mm, 6000mm or custom cut',
      patterns: 'Tear Drop / Lentil, Diamond, Two-Bar, Three-Bar, Five-Bar (Quintet)'
    },
    materials: ['Carbon Steel IS 2062 / ASTM A36', 'Stainless Steel 304, 316', 'Galvanized (GI) Chequered Sheets', 'Mild Steel Hot Rolled'],
    applications: ['Industrial Flooring & Mezzanine Decks', 'Staircase Treads & Walkways', 'Truck & Trailer Flooring', 'Ship Deck Plating'],
    features: [
      'Uniform raised pattern height providing consistent anti-slip performance',
      'Superior flatness and clean sheared edges for easy fabrication',
      'Available pre-painted or hot-dip galvanized for outdoor applications',
      'Cut-to-size service available for custom platform dimensions'
    ]
  }
];