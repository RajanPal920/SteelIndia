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
    ],
    types: [
      {
        id: 'elbow-90',
        name: '90° Long Radius Elbow',
        image: '/images/types/elbow-90.jpg',
        specs: {
          standards: 'ASME B16.9, ASTM A234, EN 10253',
          sizes: '1/2" NB to 48" NB',
          schedules: 'SCH 10 to SCH XXS',
          radius: 'Long Radius (1.5D)',
          endConnection: 'Beveled Ends'
        },
        materials: ['Carbon Steel A234 WPB', 'Stainless Steel 316L', 'Alloy Steel WP22', 'Duplex 2205'],
        applications: ['High-pressure steam lines', 'Oil & Gas refineries', 'Chemical process piping'],
        features: ['Smooth bore for minimal turbulence', 'High pressure bearing capacity', 'Precision beveled for welding']
      },
      {
        id: 'elbow-90-short',
        name: '90° Short Radius Elbow',
        image: '/images/types/elbow-90-short.jpg',
        specs: {
          standards: 'ASME B16.9, ASTM A234',
          sizes: '1/2" NB to 24" NB',
          schedules: 'SCH 40 to SCH XXS',
          radius: 'Short Radius (1.0D)',
          endConnection: 'Beveled Ends'
        },
        materials: ['Carbon Steel A234 WPC', 'Stainless Steel 304/L', 'Alloy Steel WP11'],
        applications: ['Space-constrained piping systems', 'Low-pressure fluid flow'],
        features: ['Compact footprint', 'Good for tight installations', 'Cost-effective for low pressure']
      },
      {
        id: 'elbow-45',
        name: '45° Elbow',
        image: '/images/types/elbow-45.jpg',
        specs: {
          standards: 'ASME B16.9, EN 10253',
          sizes: '1/2" NB to 48" NB',
          schedules: 'SCH 5S to SCH XXS',
          radius: 'Long Radius',
          endConnection: 'Beveled Ends'
        },
        materials: ['Stainless Steel 321', 'Carbon Steel A106', 'Duplex 2507'],
        applications: ['Gravity flow systems', 'Drainage lines', 'Process piping'],
        features: ['Gentle flow deflection', 'Less pressure drop than 90°', 'Excellent for slurry lines']
      },
      {
        id: 'elbow-180',
        name: '180° Return Bend',
        image: '/images/types/elbow-180.jpg',
        specs: {
          standards: 'ASME B16.9, MSS SP-43',
          sizes: '1/2" NB to 24" NB',
          schedules: 'SCH 40 to XXS',
          radius: 'Long & Short Radius',
          endConnection: 'Beveled Ends'
        },
        materials: ['Carbon Steel A234', 'Stainless Steel 304', 'Alloy Steel WP91'],
        applications: ['Heat exchangers', 'Boiler tube systems', 'Furnace piping'],
        features: ['Complete 180° reversal of flow', 'High thermal stress resistance', 'Single piece construction']
      },
      {
        id: 'tee-equal',
        name: 'Equal Tee',
        image: '/images/types/tee-equal.jpg',
        specs: {
          standards: 'ASME B16.9, DIN 2615',
          sizes: '1/2" NB to 48" NB',
          schedules: 'SCH 10 to SCH XXS',
          connection: 'Beveled Ends',
          branchSize: 'Same as Main Run'
        },
        materials: ['Carbon Steel A234 WPB', 'Stainless Steel 316L', 'Inconel 625'],
        applications: ['Flow distribution', 'Pipeline branch connections', 'Manifold systems'],
        features: ['Smooth intersection', 'Uniform wall thickness', 'High-pressure integrity']
      },
      {
        id: 'tee-reducing',
        name: 'Reducing Tee',
        image: '/images/types/tee-reducing.jpg',
        specs: {
          standards: 'ASME B16.9',
          sizes: '1/2" x 1/4" to 48" x 24"',
          schedules: 'SCH 40 to XXS',
          connection: 'Beveled Ends',
          branchSize: 'Smaller than Main Run'
        },
        materials: ['Carbon Steel A234 WPC', 'Stainless Steel 304L', 'Duplex 2205'],
        applications: ['Flow diversion to smaller lines', 'Process piping', 'Instrument connections'],
        features: ['Gradual reduction to prevent turbulence', 'Precision machined ends']
      },
      {
        id: 'reducer-concentric',
        name: 'Concentric Reducer',
        image: '/images/types/reducer-concentric.jpg',
        specs: {
          standards: 'ASME B16.9, MSS SP-43',
          sizes: '1/2" to 48" NB',
          schedules: 'SCH 10 to SCH XXS',
          endConnection: 'Beveled Ends',
          type: 'Concentric (Centered)'
        },
        materials: ['Carbon Steel A234', 'Stainless Steel 316L', 'Alloy Steel WP11'],
        applications: ['Vertical piping drops', 'Steam lines', 'Corrosive fluid handling'],
        features: ['Maintains centerline axis', 'Smooth flow transition', 'Prevents cavitation']
      },
      {
        id: 'reducer-eccentric',
        name: 'Eccentric Reducer',
        image: '/images/types/reducer-eccentric.jpg',
        specs: {
          standards: 'ASME B16.9',
          sizes: '1/2" to 48" NB',
          schedules: 'SCH 40 to XXS',
          endConnection: 'Beveled Ends',
          type: 'Eccentric (Offset)'
        },
        materials: ['Carbon Steel A234 WPB', 'Stainless Steel 304', 'Duplex 2507'],
        applications: ['Horizontal liquid lines (prevents air pockets)', 'Sludge lines', 'Pump suction lines'],
        features: ['Flat bottom for liquid drainage', 'Prevents air accumulation', 'Smooth flow on one side']
      },
      {
        id: 'cap',
        name: 'End Cap',
        image: '/images/types/cap.jpg',
        specs: {
          standards: 'ASME B16.9',
          sizes: '1/2" to 48" NB',
          schedules: 'SCH 10 to XXS',
          endConnection: 'Beveled Ends / Threaded',
          shapes: 'Spherical / Dished'
        },
        materials: ['Stainless Steel 304', 'Carbon Steel A234', 'Nickel 200'],
        applications: ['Pipe line termination', 'High pressure sealing', 'Tank nozzles'],
        features: ['High pressure resistance', 'Excellent sealing capability', 'Uniform stress distribution']
      },
      {
        id: 'stub-end',
        name: 'Stub End',
        image: '/images/types/stub-end.jpg',
        specs: {
          standards: 'ASME B16.9, MSS SP-43',
          sizes: '1/2" to 24" NB',
          schedules: 'SCH 10 to SCH 80',
          endConnection: 'Butt Weld to Lap Joint Flange',
          length: 'Short & Long Pattern'
        },
        materials: ['Carbon Steel A234', 'Stainless Steel 316L', 'Alloy Steel WP91'],
        applications: ['Lap joint flange assemblies', 'Frequent dismantling joints', 'Low-pressure systems'],
        features: ['Economical flange solution', 'Easy alignment', 'No weld to flange face']
      },
      {
        id: 'cross',
        name: 'Cross (4-Way)',
        image: '/images/types/cross.jpg',
        specs: {
          standards: 'ASME B16.9',
          sizes: '1/4" to 24" NB',
          schedules: 'SCH 40 to XXS',
          endConnection: 'Beveled Ends',
          connection: 'Four identical size branches'
        },
        materials: ['Carbon Steel A234', 'Stainless Steel 304', 'Duplex 2205'],
        applications: ['Multi-directional flow', 'Manifolds', 'Complex fluid distribution'],
        features: ['Four-way junction', 'Uniform flow distribution', 'High structural strength']
      },
      {
        id: 'lateral',
        name: 'Lateral Tee',
        image: '/images/types/lateral-tee.jpg',
        specs: {
          standards: 'ASME B16.9, MSS SP-43',
          sizes: '1" to 24" NB',
          schedules: 'SCH 10 to XXS',
          endConnection: 'Beveled Ends',
          angle: '45° Angle Branch'
        },
        materials: ['Carbon Steel A234 WPB', 'Stainless Steel 316L', 'Alloy Steel WP22'],
        applications: ['Smooth branch flow', 'High velocity fluids', 'Slurry pipelines'],
        features: ['Better flow dynamics than standard Tee', 'Reduces erosion', '45-degree branch diversion']
      }
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
    ],
    types: [
      {
        id: 'elbow-90-sw', name: '90° Socket Weld Elbow', image: '/images/types/elbow-90-sw.jpg',
        specs: { standards: 'ASME B16.11', sizes: '1/8" to 4" NB', pressure: '3000 / 6000 LBS', connection: 'Socket Weld' },
        materials: ['A105', 'F316', 'F22'], applications: ['High pressure hydraulic lines', 'Steam lines'], features: ['High strength', 'Deep socket for welding', 'Compact design']
      },
      {
        id: 'elbow-45-sw', name: '45° Socket Weld Elbow', image: '/images/types/elbow-45-sw.jpg',
        specs: { standards: 'ASME B16.11', sizes: '1/8" to 4" NB', pressure: '2000 / 3000 LBS', connection: 'Socket Weld' },
        materials: ['A105', 'F304', 'F11'], applications: ['Flow diversion', 'Instrumentation lines'], features: ['Smooth 45 degree flow', 'Excellent for tight spaces']
      },
      {
        id: 'tee-sw', name: 'Socket Weld Tee', image: '/images/types/tee-sw.jpg',
        specs: { standards: 'ASME B16.11', sizes: '1/8" to 4" NB', pressure: '3000 / 6000 LBS', connection: 'Socket Weld' },
        materials: ['A105', 'F316L', 'F91'], applications: ['Branch connections', 'High pressure manifolds'], features: ['Precision bore', 'High pressure rating', 'Vibration resistant']
      },
      {
        id: 'coupling-full', name: 'Full Coupling', image: '/images/types/coupling-full.jpg',
        specs: { standards: 'ASME B16.11', sizes: '1/8" to 4" NB', pressure: '3000 / 6000 LBS', connection: 'Socket Weld / Threaded' },
        materials: ['A105', 'F316', 'F51'], applications: ['Joining two pipes', 'Extensions'], features: ['Full length threading/socket', 'Strong joint', 'Easy installation']
      },
      {
        id: 'coupling-half', name: 'Half Coupling', image: '/images/types/coupling-half.jpg',
        specs: { standards: 'ASME B16.11', sizes: '1/8" to 4" NB', pressure: '3000 LBS', connection: 'Socket Weld / Threaded' },
        materials: ['A105', 'F304L'], applications: ['Instrument connections', 'Small branch outlets'], features: ['One end for pipe weld', 'Compact size', 'Cost effective']
      },
      {
        id: 'union', name: 'Threaded Union', image: '/images/types/union.jpg',
        specs: { standards: 'ASME B16.11', sizes: '1/8" to 4" NB', pressure: '3000 LBS', connection: 'Threaded (NPT/BSP)' },
        materials: ['A105', 'F316L', 'Brass'], applications: ['Frequent dismantling', 'Maintenance points', 'Water lines'], features: ['Three-piece design', 'Leak-proof seal', 'No pipe rotation required']
      },
      {
        id: 'hex-nipple', name: 'Hex Nipple', image: '/images/types/hex-nipple.jpg',
        specs: { standards: 'ASME B16.11', sizes: '1/8" to 4" NB', pressure: '3000 LBS', connection: 'Threaded (NPT/BSP)' },
        materials: ['A105', 'F304', 'F316'], applications: ['Connecting two female threads', 'Close pipe extensions'], features: ['Hex center for wrench', 'Precision threads', 'High pressure seal']
      },
      {
        id: 'swage-nipple', name: 'Swage Nipple', image: '/images/types/swage-nipple.jpg',
        specs: { standards: 'MSS SP-95', sizes: '1/4" to 4" NB', pressure: '3000 / 6000 LBS', connection: 'Threaded / Plain End / Beveled' },
        materials: ['A105', 'F316', 'Duplex'], applications: ['Pipe size transition', 'Instrumentation hookups'], features: ['Concentric or eccentric design', 'Smooth transition', 'High strength']
      },
      {
        id: 'hex-bushing', name: 'Hex Bushing', image: '/images/types/hex-bushing.jpg',
        specs: { standards: 'ASME B16.11', sizes: '1/8" to 4" NB', pressure: '3000 / 6000 LBS', connection: 'Threaded (M x F)' },
        materials: ['A105', 'F316L'], applications: ['Thread size reduction', 'Gauge installation'], features: ['Male to female threads', 'Hex head for easy installation', 'Compact']
      },
      {
        id: 'hex-plug', name: 'Hex Plug', image: '/images/types/hex-plug.jpg',
        specs: { standards: 'ASME B16.11', sizes: '1/8" to 4" NB', pressure: '3000 / 6000 LBS', connection: 'Threaded (Male)' },
        materials: ['A105', 'F304'], applications: ['Temporary sealing', 'Pressure testing', 'Blank off ports'], features: ['Hex head for wrench', 'Leak-proof thread', 'High pressure seal']
      },
      {
        id: 'weldolet', name: 'Weldolet', image: '/images/types/weldolet.jpg',
        specs: { standards: 'MSS SP-97', sizes: '1/2" to 24" NB', pressure: 'Class 3000 / 6000', connection: 'Butt Weld (Branch)' },
        materials: ['A105', 'F316', 'WP22'], applications: ['High pressure branch outlets', 'Mainline pipe connections'], features: ['Reinforced branch', 'Butt weld connection', 'Excellent fatigue resistance']
      },
      {
        id: 'sockolet', name: 'Sockolet', image: '/images/types/sockolet.jpg',
        specs: { standards: 'MSS SP-97', sizes: '1/2" to 6" NB', pressure: 'Class 3000 / 6000', connection: 'Socket Weld (Branch)' },
        materials: ['A105', 'F316L'], applications: ['Branch outlets', 'Small size connections'], features: ['Socket weld design', 'Easy installation', 'High pressure']
      },
      {
        id: 'threadolet', name: 'Threadolet', image: '/images/types/threadolet.jpg',
        specs: { standards: 'MSS SP-97', sizes: '1/2" to 6" NB', pressure: 'Class 3000', connection: 'Threaded (Branch)' },
        materials: ['A105', 'F304'], applications: ['Instrumentation connections', 'Small branch lines'], features: ['Threaded branch', 'No welding required for branch', 'Quick install']
      },
      {
        id: 'elbolet', name: 'Elbolet', image: '/images/types/elbolet.jpg',
        specs: { standards: 'MSS SP-97', sizes: '1/2" to 2" NB', pressure: 'Class 3000 / 6000', connection: 'Socket Weld / Threaded' },
        materials: ['A105', 'F316'], applications: ['Instrument hookups at elbows', 'Branch at 90 degree turn'], features: ['Fits directly on elbow', 'Space saving', 'Reinforced branch']
      }
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
    ],
    types: [
      {
        id: 'seamless', name: 'Seamless Pipes', image: '/images/types/seamless.jpg',
        specs: { standards: 'ASTM A106, A312, A335', sizes: '1/8" to 24" NB', schedules: 'SCH 10 to XXS', method: 'Hot Rolled / Cold Drawn' },
        materials: ['Carbon Steel A106 Gr B', 'SS 316L', 'Alloy Steel P11'], applications: ['High pressure fluids', 'High temp steam'], features: ['No weld seam', 'Uniform strength', 'High pressure capacity']
      },
      {
        id: 'erw', name: 'ERW (Electric Resistance Welded)', image: '/images/types/erw.jpg',
        specs: { standards: 'ASTM A53, A135, API 5L', sizes: '1/2" to 24" NB', schedules: 'SCH 10 to SCH 40', method: 'Electric Resistance Welding' },
        materials: ['Carbon Steel A53', 'SS 304', 'GI'], applications: ['Water lines', 'Low pressure piping', 'Structural'], features: ['Cost effective', 'Fast production', 'Good dimensional accuracy']
      },
      {
        id: 'efw', name: 'EFW (Electric Fusion Welded)', image: '/images/types/efw.jpg',
        specs: { standards: 'ASTM A358, A671, A672', sizes: '12" to 48" NB', schedules: 'SCH 5S to XXS', method: 'Electric Fusion Welding' },
        materials: ['SS 304/316', 'Carbon Steel A671'], applications: ['Large diameter piping', 'Chemical plants'], features: ['Large diameter capability', 'High quality weld', 'Excellent surface finish']
      },
      {
        id: 'saw', name: 'SAW (Submerged Arc Welded)', image: '/images/types/saw.jpg',
        specs: { standards: 'ASTM A671, A672, API 5L', sizes: '16" to 100" NB', schedules: 'Custom / Heavy Wall', method: 'Submerged Arc Welding' },
        materials: ['Carbon Steel A672', 'SS 316'], applications: ['Cross-country pipelines', 'High pressure water', 'Oil & gas'], features: ['Deep weld penetration', 'High deposition rate', 'For heavy wall thickness']
      },
      {
        id: 'cdw', name: 'Cold Drawn Tubes', image: '/images/types/cdw.jpg',
        specs: { standards: 'ASTM A179, A213', sizes: '6mm OD to 150mm OD', schedules: 'Custom Wall', method: 'Cold Drawing' },
        materials: ['Carbon Steel A179', 'SS 304', 'SS 316L'], applications: ['Heat exchangers', 'Boilers', 'Precision instruments'], features: ['Tight tolerances', 'Smooth surface', 'High strength']
      },
      {
        id: 'heat-exchanger', name: 'Heat Exchanger Tubes', image: '/images/types/heat-exchanger.jpg',
        specs: { standards: 'ASTM A213, A249, A269', sizes: '1/4" to 4" OD', schedules: 'BWG 10 to BWG 22', method: 'Seamless / Welded' },
        materials: ['SS 304/316L', 'Duplex 2205', 'Inconel 600'], applications: ['Shell & tube exchangers', 'Condensers'], features: ['High thermal conductivity', 'Corrosion resistance', 'Precision dimensions']
      },
      {
        id: 'boiler', name: 'Boiler Tubes', image: '/images/types/boiler.jpg',
        specs: { standards: 'ASTM A192, A210', sizes: '1" to 6" OD', schedules: 'Heavy Wall', method: 'Seamless' },
        materials: ['Carbon Steel A192', 'Alloy Steel T11', 'T22'], applications: ['High pressure boilers', 'Superheaters'], features: ['High temperature resistance', 'High pressure capability', 'Creep resistant']
      },
      {
        id: 'square', name: 'Square Hollow Sections (SHS)', image: '/images/types/square.jpg',
        specs: { standards: 'EN 10219, ASTM A500', sizes: '10x10mm to 400x400mm', thickness: '1.2mm to 20mm', method: 'ERW / Seamless' },
        materials: ['Mild Steel IS 2062', 'SS 304', 'Galvanized'], applications: ['Structural frames', 'Architectural designs', 'Machinery frames'], features: ['High torsional rigidity', 'Uniform appearance', 'Easy fabrication']
      },
      {
        id: 'rectangular', name: 'Rectangular Hollow Sections (RHS)', image: '/images/types/rectangular.jpg',
        specs: { standards: 'EN 10219, ASTM A500', sizes: '20x10mm to 400x200mm', thickness: '1.2mm to 20mm', method: 'ERW' },
        materials: ['Mild Steel IS 2062', 'SS 316', 'Aluminium'], applications: ['Structural beams', 'Frames', 'Handrails'], features: ['Better bending strength', 'Aesthetic design', 'Lightweight']
      },
      {
        id: 'round', name: 'Round Tubes', image: '/images/types/round.jpg',
        specs: { standards: 'ASTM A513, EN 10305', sizes: '6mm OD to 200mm OD', thickness: '0.8mm to 10mm', method: 'Seamless / Welded' },
        materials: ['Carbon Steel', 'SS 304', 'Brass'], applications: ['Furniture', 'Automotive parts', 'Fluid lines'], features: ['Smooth finish', 'Easy bending', 'Good flow characteristics']
      },
      {
        id: 'instrumentation', name: 'Instrumentation Tubes', image: '/images/types/instrumentation.jpg',
        specs: { standards: 'ASTM A269, A213', sizes: '1/16" to 1" OD', thickness: '0.5mm to 2mm', method: 'Seamless / Welded' },
        materials: ['SS 316L', 'Duplex 2205', 'Inconel 625'], applications: ['Control panels', 'Analytical sampling', 'Hydraulic lines'], features: ['High precision', 'Clean inner bore', 'Zero leakage']
      }
    ],
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
    ],
    types: [
      {
        id: 'hot-rolled', name: 'Hot Rolled (HR) Sheets', image: '/images/types/hot-rolled.jpg',
        specs: { standards: 'ASTM A1011, IS 2062', thickness: '1.5mm to 25mm', finish: 'Mill Scale / Pickled', width: '1250mm to 2500mm' },
        materials: ['Carbon Steel', 'Mild Steel'], applications: ['Structural fabrication', 'Automotive chassis'], features: ['Lower cost', 'Good formability', 'Larger thickness available']
      },
      {
        id: 'cold-rolled', name: 'Cold Rolled (CR) Sheets', image: '/images/types/cold-rolled.jpg',
        specs: { standards: 'ASTM A1008', thickness: '0.4mm to 3.0mm', finish: '2B / BA / Matte', width: '600mm to 1500mm' },
        materials: ['Carbon Steel CRCA', 'SS 304'], applications: ['Automotive panels', 'Appliances', 'Furniture'], features: ['Smooth surface', 'Tight tolerances', 'Better paintability']
      },
      {
        id: 'boiler-quality', name: 'Boiler Quality (BQ) Plates', image: '/images/types/boiler-quality.jpg',
        specs: { standards: 'ASTM A516, EN 10028', thickness: '5mm to 150mm', grade: 'Gr 60, 70', testing: 'UT Tested' },
        materials: ['Carbon Steel A516 Gr 70', 'Alloy Steel'], applications: ['Pressure vessels', 'Boilers', 'Storage tanks'], features: ['High temperature strength', 'Impact tested', 'Ultrasonic tested']
      },
      {
        id: 'chequered', name: 'Chequered / Tear Drop Plates', image: '/images/types/chequered.jpg',
        specs: { standards: 'ASTM A786, IS 3502', thickness: '2.5mm to 12mm', pattern: 'Tear Drop / Diamond', width: '1250mm' },
        materials: ['Carbon Steel', 'SS 304', 'Galvanized'], applications: ['Flooring', 'Stair treads', 'Vehicle bodies'], features: ['Anti-slip surface', 'High durability', 'Aesthetic look']
      },
      {
        id: 'shipbuilding', name: 'Shipbuilding Plates', image: '/images/types/shipbuilding.jpg',
        specs: { standards: 'ABS, DNV, LR, IRS', thickness: '5mm to 50mm', grade: 'Grade A, B, D, E', testing: 'Impact Tested' },
        materials: ['Carbon Steel', 'HSLA Steel'], applications: ['Hull construction', 'Marine structures'], features: ['Corrosion resistance', 'High strength', 'Weldable']
      },
      {
        id: 'pressure-vessel', name: 'Pressure Vessel Plates', image: '/images/types/pressure-vessel.jpg',
        specs: { standards: 'ASTM A516, A537', thickness: '6mm to 200mm', testing: 'UT, Impact', grade: 'Gr 70, Cl 1/2' },
        materials: ['Carbon Steel', 'Alloy Steel'], applications: ['Reactors', 'Columns', 'Heavy vessels'], features: ['High tensile strength', 'Excellent toughness', 'Hydrogen induced cracking resistant']
      },
      {
        id: 'wear-resistant', name: 'Wear Resistant Plates', image: '/images/types/wear-resistant.jpg',
        specs: { standards: 'EN 10025, Hardox equivalent', hardness: '400, 450, 500 HB', thickness: '3mm to 100mm' },
        materials: ['Quenched & Tempered Steel'], applications: ['Dump truck bodies', 'Crushers', 'Mining equipment'], features: ['High abrasion resistance', 'Longer service life', 'High hardness']
      },
      {
        id: 'clad-plates', name: 'Clad Plates (Explosion Bonded)', image: '/images/types/clad-plates.jpg',
        specs: { standards: 'ASTM A263, A264, A265', thickness: 'Base 10mm + Clad 2mm', bonding: 'Explosion Bonded' },
        materials: ['Carbon Steel + SS 316L', 'Carbon Steel + Nickel'], applications: ['Chemical vessels', 'Desalination plants'], features: ['Cost-effective corrosion resistance', 'High bond strength', 'Combines strength & corrosion resistance']
      }
    ],
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
    ],
    types: [
      {
        id: 'weld-neck', name: 'Weld Neck Flanges (WN)', image: '/images/types/weld-neck.jpg',
        specs: { standards: 'ASME B16.5, B16.47', sizes: '1/2" to 48" NB', pressure: 'Class 150 to 2500', facing: 'RF / RTJ' },
        materials: ['A105', 'F316L', 'F22'], applications: ['High pressure piping', 'Critical process lines'], features: ['Tapered hub for stress distribution', 'Butt weld connection', 'High pressure capability']
      },
      {
        id: 'slip-on', name: 'Slip-On Flanges (SO)', image: '/images/types/slip-on.jpg',
        specs: { standards: 'ASME B16.5', sizes: '1/2" to 24" NB', pressure: 'Class 150 to 900', facing: 'RF / FF' },
        materials: ['A105', 'F304', 'F11'], applications: ['Low pressure lines', 'Water pipelines'], features: ['Easy alignment', 'Lower cost', 'Two fillet welds']
      },
      {
        id: 'blind', name: 'Blind Flanges (BL)', image: '/images/types/blind.jpg',
        specs: { standards: 'ASME B16.5, B16.47', sizes: '1/2" to 48" NB', pressure: 'Class 150 to 2500', facing: 'RF / FF / RTJ' },
        materials: ['A105', 'F316', 'F51'], applications: ['Pipe line closure', 'Manhole covers', 'Pressure testing'], features: ['Complete sealing', 'High pressure resistance', 'No bore']
      },
      {
        id: 'socket-weld', name: 'Socket Weld Flanges (SW)', image: '/images/types/socket-weld.jpg',
        specs: { standards: 'ASME B16.5', sizes: '1/2" to 4" NB', pressure: 'Class 150 to 1500', facing: 'RF / FF' },
        materials: ['A105', 'F316L'], applications: ['Small diameter high pressure', 'Instrumentation lines'], features: ['Socket weld connection', 'Good for small sizes', 'High pressure']
      },
      {
        id: 'lap-joint', name: 'Lap Joint Flanges (LJ)', image: '/images/types/lap-joint.jpg',
        specs: { standards: 'ASME B16.5', sizes: '1/2" to 24" NB', pressure: 'Class 150 to 900', facing: 'FF' },
        materials: ['A105', 'F304'], applications: ['Frequent dismantling', 'Low pressure systems'], features: ['Used with stub end', 'Easy rotation', 'No weld to flange']
      },
      {
        id: 'threaded', name: 'Threaded Flanges', image: '/images/types/threaded.jpg',
        specs: { standards: 'ASME B16.5', sizes: '1/2" to 24" NB', pressure: 'Class 150 to 900', facing: 'RF / FF' },
        materials: ['A105', 'F316'], applications: ['Low pressure small lines', 'No welding required'], features: ['Threaded connection', 'Easy installation', 'No welding']
      },
      {
        id: 'long-weld-neck', name: 'Long Weld Neck Flanges (LWN)', image: '/images/types/long-weld-neck.jpg',
        specs: { standards: 'ASME B16.5', sizes: '1/2" to 24" NB', pressure: 'Class 150 to 2500', facing: 'RF / RTJ' },
        materials: ['A105', 'F316L', 'F91'], applications: ['Vessel nozzles', 'Column connections'], features: ['Extended neck', 'Used as nozzle', 'High pressure']
      },
      {
        id: 'orifice', name: 'Orifice Flanges', image: '/images/types/orifice.jpg',
        specs: { standards: 'ASME B16.36', sizes: '1" to 24" NB', pressure: 'Class 300 to 2500', facing: 'RF / RTJ' },
        materials: ['A105', 'F316'], applications: ['Flow measurement', 'Orifice plate installation'], features: ['Jack screw holes', 'Pressure taps', 'Precise flow measurement']
      },
      {
        id: 'spectacle-blind', name: 'Spectacle Blind Flanges', image: '/images/types/spectacle-blind.jpg',
        specs: { standards: 'ASME B16.48', sizes: '1/2" to 24" NB', pressure: 'Class 150 to 2500', facing: 'RF / RTJ' },
        materials: ['A105', 'F316'], applications: ['Positive isolation', 'Maintenance shutdowns'], features: ['Two-piece design', 'Easy switching', 'Visual isolation']
      },
      {
        id: 'reducing', name: 'Reducing Flanges', image: '/images/types/reducing.jpg',
        specs: { standards: 'ASME B16.5', sizes: '1/2" to 24" NB', pressure: 'Class 150 to 900', facing: 'RF / FF' },
        materials: ['A105', 'F304'], applications: ['Pipe size transition', 'Equipment connections'], features: ['Reduced bore', 'Size transition', 'Various sizes']
      },
      {
        id: 'tongue-groove', name: 'Tongue & Groove Flanges', image: '/images/types/tongue-groove.jpg',
        specs: { standards: 'ASME B16.5', sizes: '1/2" to 24" NB', pressure: 'Class 150 to 2500', facing: 'Tongue / Groove' },
        materials: ['A105', 'F316L'], applications: ['High pressure sealing', 'Toxic fluid lines'], features: ['Better gasket retention', 'High pressure seal', 'Prevents gasket blowout']
      },
      {
        id: 'plate', name: 'Plate / Flat Flanges', image: '/images/types/plate.jpg',
        specs: { standards: 'ASME B16.5, DIN', sizes: '1/2" to 48" NB', pressure: 'Class 150 to 300', facing: 'FF' },
        materials: ['A105', 'SS 304'], applications: ['Low pressure lines', 'Duct connections'], features: ['Economical', 'Simple design', 'Easy fabrication']
      }
    ],
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
    ],
    types: [
      {
        id: 'stud-bolts', name: 'Continuous Thread Stud Bolts', image: '/images/types/stud-bolts.jpg',
        specs: { standards: 'ASTM A193 B7', sizes: 'M6 to M100', length: 'Up to 3000mm', thread: 'Fully Threaded' },
        materials: ['Alloy Steel B7', 'SS 316'], applications: ['Flanged joints', 'High pressure bolting'], features: ['Full threading', 'High tensile strength', 'Uniform clamping']
      },
      {
        id: 'tap-bolts', name: 'Tap Bolts', image: '/images/types/tap-bolts.jpg',
        specs: { standards: 'ASME B18.2.1', sizes: '1/4" to 4"', length: 'Up to 500mm', thread: 'Partially Threaded' },
        materials: ['Carbon Steel', 'SS 304'], applications: ['Structural connections', 'General fastening'], features: ['Hex head', 'Partially threaded', 'General purpose']
      },
      {
        id: 'hex-bolts', name: 'Heavy Hex Bolts', image: '/images/types/hex-bolts.jpg',
        specs: { standards: 'ASTM A325, A490', sizes: '1/2" to 4"', length: 'Up to 1000mm', thread: 'Partially Threaded' },
        materials: ['Carbon Steel', 'Alloy Steel'], applications: ['Structural steel', 'Heavy machinery'], features: ['Heavy hex head', 'High strength', 'Structural bolting']
      },
      {
        id: 'hex-screws', name: 'Hex Head Cap Screws', image: '/images/types/hex-screws.jpg',
        specs: { standards: 'DIN 933, ISO 4014', sizes: 'M6 to M64', length: 'Up to 500mm', thread: 'Fully Threaded' },
        materials: ['SS 304', 'SS 316', 'Carbon Steel'], applications: ['Machinery', 'Automotive'], features: ['Fully threaded', 'Hex head', 'Versatile']
      },
      {
        id: 'hex-nuts', name: 'Heavy Hex Nuts', image: '/images/types/hex-nuts.jpg',
        specs: { standards: 'ASTM A194 2H', sizes: 'M6 to M100', grade: '2H, 8, 8M', thread: 'Metric / UNC' },
        materials: ['Carbon Steel', 'SS 316'], applications: ['Flanged joints', 'Structural'], features: ['Heavy hex', 'High strength', 'Matches stud bolts']
      },
      {
        id: 'nyloc-nuts', name: 'Nyloc / Nylon Insert Nuts', image: '/images/types/nyloc-nuts.jpg',
        specs: { standards: 'DIN 985, ISO 7040', sizes: 'M6 to M36', grade: '8, 10', thread: 'Metric' },
        materials: ['Carbon Steel', 'SS 304'], applications: ['Vibration prone joints', 'Automotive'], features: ['Nylon insert', 'Vibration resistant', 'Reusable']
      },
      {
        id: 'dome-nuts', name: 'Dome / Cap Nuts', image: '/images/types/dome-nuts.jpg',
        specs: { standards: 'DIN 1587', sizes: 'M6 to M36', grade: '8', thread: 'Metric' },
        materials: ['SS 304', 'Brass'], applications: ['Aesthetic fastening', 'Safety covers'], features: ['Domed top', 'No sharp edges', 'Protective cover']
      },
      {
        id: 'plain-washers', name: 'Plain Washers', image: '/images/types/plain-washers.jpg',
        specs: { standards: 'DIN 125, ISO 7089', sizes: 'M6 to M100', thickness: '1mm to 10mm', finish: 'Zinc / HDG' },
        materials: ['Carbon Steel', 'SS 304'], applications: ['Load distribution', 'Surface protection'], features: ['Flat surface', 'Load distribution', 'Prevents galling']
      },
      {
        id: 'spring-washers', name: 'Spring / Lock Washers', image: '/images/types/spring-washers.jpg',
        specs: { standards: 'DIN 127', sizes: 'M6 to M64', type: 'Split Spring', finish: 'Zinc' },
        materials: ['Spring Steel', 'SS 304'], applications: ['Vibration prone joints', 'Locking'], features: ['Spring action', 'Prevents loosening', 'Vibration resistance']
      },
      {
        id: 'anchor-bolts', name: 'Anchor Bolts', image: '/images/types/anchor-bolts.jpg',
        specs: { standards: 'Custom / IS 5624', sizes: 'M12 to M64', length: 'Up to 2000mm', type: 'J / L / Plate' },
        materials: ['Carbon Steel', 'SS 304'], applications: ['Foundation anchoring', 'Structural base plates'], features: ['J or L bend', 'Heavy duty', 'Foundation anchoring']
      },
      {
        id: 'u-bolts', name: 'U-Bolts', image: '/images/types/u-bolts.jpg',
        specs: { standards: 'Custom', sizes: '1/4" to 2"', length: 'Up to 500mm', type: 'Round / Square' },
        materials: ['Carbon Steel', 'SS 316'], applications: ['Pipe support', 'Automotive suspension'], features: ['U shape', 'Pipe clamping', 'Easy installation']
      }
    ],
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
    ],
    types: [
      {
        id: 'round-bars', name: 'Round Bars', image: '/images/types/round-bars.jpg',
        specs: { standards: 'ASTM A276, A479', sizes: '3mm to 350mm', length: '3 to 6m', tolerance: 'h9 / h11' },
        materials: ['SS 304', 'SS 316L', 'EN8'], applications: ['Shafts', 'Machined components'], features: ['Precision diameter', 'Smooth surface', 'Wide size range']
      },
      {
        id: 'hex-bars', name: 'Hexagonal Bars', image: '/images/types/hex-bars.jpg',
        specs: { standards: 'ASTM A276', sizes: '5mm to 100mm AF', length: '3 to 6m', tolerance: 'h11' },
        materials: ['SS 304', 'SS 316', 'Carbon Steel'], applications: ['Fasteners', 'Nuts & bolts', 'Machined parts'], features: ['Hex profile', 'Easy to grip', 'Good for turning']
      },
      {
        id: 'square-bars', name: 'Square Bars', image: '/images/types/square-bars.jpg',
        specs: { standards: 'ASTM A276', sizes: '5mm to 150mm', length: '3 to 6m', tolerance: 'h11' },
        materials: ['SS 304', 'SS 316L'], applications: ['Keys', 'Structural', 'Machinery'], features: ['Square cross section', 'Uniform corners', 'Versatile']
      },
      {
        id: 'flat-bars', name: 'Flat Bars', image: '/images/types/flat-bars.jpg',
        specs: { standards: 'ASTM A276', sizes: '12x3mm to 150x20mm', length: '3 to 6m', tolerance: 'h11' },
        materials: ['SS 304', 'SS 316', 'MS'], applications: ['Fabrication', 'Supports', 'Frames'], features: ['Rectangular section', 'Easy welding', 'Good for fabrication']
      },
      {
        id: 'bright-bars', name: 'Bright Drawn Bars', image: '/images/types/bright-bars.jpg',
        specs: { standards: 'EN 10088-3', sizes: '3mm to 100mm', length: '3 to 6m', tolerance: 'h9' },
        materials: ['SS 303', 'SS 304', 'EN8'], applications: ['CNC machining', 'Precision parts'], features: ['Tight tolerances', 'Smooth finish', 'Excellent machinability']
      },
      {
        id: 'black-bars', name: 'Black / Hot Rolled Bars', image: '/images/types/black-bars.jpg',
        specs: { standards: 'ASTM A276', sizes: '20mm to 350mm', length: '3 to 6m', tolerance: 'Mill' },
        materials: ['SS 304', 'Carbon Steel'], applications: ['Heavy machining', 'Forging stock'], features: ['Hot rolled', 'Mill scale', 'Economical']
      },
      {
        id: 'forged-bars', name: 'Forged Bars', image: '/images/types/forged-bars.jpg',
        specs: { standards: 'ASTM A182', sizes: '50mm to 500mm', length: 'Up to 6m', tolerance: 'Rough' },
        materials: ['A105', 'F316', 'F22'], applications: ['Forging', 'Heavy components'], features: ['Forged structure', 'High integrity', 'Heavy sections']
      },
      {
        id: 'peeled-bars', name: 'Peeled & Turned Bars', image: '/images/types/peeled-bars.jpg',
        specs: { standards: 'ASTM A276', sizes: '20mm to 200mm', length: '3 to 6m', tolerance: 'h11' },
        materials: ['SS 304', 'SS 316L'], applications: ['Precision shafts', 'Machined parts'], features: ['Peeled surface', 'Turned finish', 'Good straightness']
      },
      {
        id: 'centerless-ground', name: 'Centerless Ground Bars', image: '/images/types/centerless-ground.jpg',
        specs: { standards: 'ASTM A276', sizes: '3mm to 100mm', length: '3 to 6m', tolerance: 'h9 / h8' },
        materials: ['SS 304', 'SS 316', 'Tool Steel'], applications: ['Precision shafts', 'Pins', 'Spindles'], features: ['Centerless ground', 'Tight tolerance', 'Mirror finish']
      },
      {
        id: 'angle-bars', name: 'Angle Bars', image: '/images/types/angle-bars.jpg',
        specs: { standards: 'IS 2062, ASTM A36', sizes: '25x25x3mm to 200x200x20mm', length: '6m', tolerance: 'Mill' },
        materials: ['MS', 'SS 304'], applications: ['Structural frames', 'Supports', 'Fabrication'], features: ['L shaped', 'Structural strength', 'Easy welding']
      }
    ],
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
    ],
    types: [
      {
        id: 'spring-wire', name: 'Spring Steel Wire', image: '/images/types/spring-wire.jpg',
        specs: { standards: 'ASTM A313, DIN 17224', sizes: '0.2mm to 12mm', temper: 'Spring / Full Hard', surface: 'Bright' },
        materials: ['SS 302', 'SS 304', 'Spring Steel'], applications: ['Springs', 'Retaining rings'], features: ['High tensile', 'Spring temper', 'Fatigue resistant']
      },
      {
        id: 'welding-wire', name: 'MIG / TIG Welding Wire', image: '/images/types/welding-wire.jpg',
        specs: { standards: 'AWS A5.9, ER308L', sizes: '0.8mm to 1.6mm', packaging: 'Spool / Drum', surface: 'Copper Coated' },
        materials: ['ER308L', 'ER316L', 'ER309L'], applications: ['MIG welding', 'TIG welding'], features: ['Consistent arc', 'Low spatter', 'Smooth feed']
      },
      {
        id: 'cold-heading', name: 'Cold Heading Wire', image: '/images/types/cold-heading.jpg',
        specs: { standards: 'ASTM A580', sizes: '1mm to 12mm', temper: 'Soft Annealed', surface: 'Soap Coated' },
        materials: ['SS 304', 'SS 316', 'Carbon Steel'], applications: ['Fastener manufacturing', 'Rivets'], features: ['Good formability', 'Soft annealed', 'Crack resistant']
      },
      {
        id: 'filler-wire', name: 'Filler Wire', image: '/images/types/filler-wire.jpg',
        specs: { standards: 'AWS A5.9', sizes: '1.6mm to 4mm', packaging: 'Coil / Spool', surface: 'Bright' },
        materials: ['ER308L', 'ER316L', 'Inconel 625'], applications: ['TIG welding', 'Repair welding'], features: ['Clean surface', 'Consistent composition', 'Low spatter']
      },
      {
        id: 'baling-wire', name: 'Baling Wire', image: '/images/types/baling-wire.jpg',
        specs: { standards: 'Commercial', sizes: '1.2mm to 4mm', temper: 'Soft / Annealed', surface: 'Galvanized' },
        materials: ['MS', 'Galvanized Steel'], applications: ['Baling', 'Tying', 'Packaging'], features: ['Flexible', 'Galvanized', 'Economical']
      },
      {
        id: 'galvanized-wire', name: 'Galvanized Wire', image: '/images/types/galvanized-wire.jpg',
        specs: { standards: 'ASTM A641', sizes: '0.5mm to 6mm', coating: 'Zinc', surface: 'Galvanized' },
        materials: ['MS Galvanized'], applications: ['Fencing', 'Agriculture', 'Construction'], features: ['Corrosion resistant', 'Zinc coated', 'Durable']
      },
      {
        id: 'barbed-wire', name: 'Barbed Wire', image: '/images/types/barbed-wire.jpg',
        specs: { standards: 'IS 278', sizes: '1.6mm to 2.5mm', type: 'Single / Double Barb', coating: 'Zinc' },
        materials: ['Galvanized Steel'], applications: ['Fencing', 'Security', 'Agriculture'], features: ['Barbed', 'Security', 'Corrosion resistant']
      },
      {
        id: 'wire-rope', name: 'Wire Rope', image: '/images/types/wire-rope.jpg',
        specs: { standards: 'IS 2266, ASTM A1023', sizes: '1mm to 50mm', construction: '6x7, 6x19, 6x37', core: 'Fiber / Steel' },
        materials: ['SS 304', 'SS 316', 'Galvanized Steel'], applications: ['Cranes', 'Lifting', 'Suspension'], features: ['High strength', 'Flexible', 'Load bearing']
      }
    ],
  },
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
    ],
    types: [
      {
        id: 'braided-hose', name: 'Braided Flexible Hoses', image: '/images/types/braided-hose.jpg',
        specs: { standards: 'BS 6501, ISO 10380', sizes: '1/4" to 12" NB', pressure: 'Up to 250 Bar', temp: '-200°C to 600°C' },
        materials: ['SS 304', 'SS 316L'], applications: ['Steam lines', 'Vibration isolation'], features: ['Wire braided', 'High pressure', 'Flexible']
      },
      {
        id: 'corrugated-hose', name: 'Corrugated Flexible Hoses', image: '/images/types/corrugated-hose.jpg',
        specs: { standards: 'ISO 10380', sizes: '1/4" to 12" NB', pressure: 'Up to 100 Bar', temp: '-200°C to 600°C' },
        materials: ['SS 304', 'SS 316L'], applications: ['Exhaust', 'Thermal expansion'], features: ['Corrugated core', 'Flexible', 'Thermal expansion']
      },
      {
        id: 'ptfe-hose', name: 'PTFE Lined Hoses', image: '/images/types/ptfe-hose.jpg',
        specs: { standards: 'SAE 100R14', sizes: '1/4" to 4" NB', pressure: 'Up to 100 Bar', temp: '-70°C to 260°C' },
        materials: ['PTFE Liner', 'SS Braid'], applications: ['Chemical transfer', 'Pharma'], features: ['Chemical resistant', 'Non-stick', 'Smooth bore']
      },
      {
        id: 'rubber-hose', name: 'Rubber Hose Pipes', image: '/images/types/rubber-hose.jpg',
        specs: { standards: 'IS 444, SAE J20', sizes: '1/4" to 6" NB', pressure: 'Up to 20 Bar', temp: '-30°C to 120°C' },
        materials: ['EPDM', 'Nitrile Rubber'], applications: ['Water lines', 'Air lines', 'Coolant'], features: ['Flexible', 'Economical', 'Good for water/air']
      },
      {
        id: 'ss-hose', name: 'SS Corrugated Hoses', image: '/images/types/ss-hose.jpg',
        specs: { standards: 'ISO 10380', sizes: '1/4" to 12" NB', pressure: 'Up to 250 Bar', temp: '-200°C to 600°C' },
        materials: ['SS 304', 'SS 316L'], applications: ['Steam', 'High temp', 'Cryogenic'], features: ['All stainless', 'High temp', 'Corrosion resistant']
      },
      {
        id: 'composite-hose', name: 'Composite Hoses', image: '/images/types/composite-hose.jpg',
        specs: { standards: 'EN 13765', sizes: '1" to 8" NB', pressure: 'Up to 25 Bar', temp: '-30°C to 100°C' },
        materials: ['Composite / Polymer'], applications: ['Petroleum transfer', 'Loading arms'], features: ['Lightweight', 'Chemical resistant', 'Flexible']
      }
    ],
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
    ],
    types: [
      {
        id: 'round-hole', name: 'Round Hole Perforated', image: '/images/types/round-hole.jpg',
        specs: { standards: 'DIN 24041', thickness: '0.4mm to 12.0mm', holeDiameter: '0.5mm to 100mm', openArea: '10% to 70%' },
        materials: ['SS 304', 'SS 316L', 'Carbon Steel', 'GI', 'Aluminium'],
        applications: ['Acoustic silencers', 'Grading screens', 'Filters'],
        features: ['Staggered 60°/45°', 'Inline pattern', 'High open area']
      },
      {
        id: 'square-hole', name: 'Square Hole Perforated', image: '/images/types/square-hole.jpg',
        specs: { standards: 'DIN 24041', thickness: '0.4mm to 12.0mm', holeSize: '1mm to 50mm', openArea: '10% to 60%' },
        materials: ['SS 304', 'SS 316L', 'Carbon Steel', 'GI'],
        applications: ['Drying trays', 'Architectural cladding', 'Ventilation'],
        features: ['Square grid', 'Rigid structure', 'Uniform airflow']
      },
      {
        id: 'slotted-hole', name: 'Slotted / Oblong Hole', image: '/images/types/slotted-hole.jpg',
        specs: { standards: 'ISO 7806', thickness: '0.5mm to 10.0mm', slotSize: 'Custom', openArea: '15% to 70%' },
        materials: ['SS 304', 'SS 316L', 'Aluminium'],
        applications: ['Grain dryer decks', 'Separation screens', 'Sunshades'],
        features: ['Oblong slots', 'High open area', 'Directional flow']
      },
      {
        id: 'hexagonal-hole', name: 'Hexagonal Hole Perforated', image: '/images/types/hexagonal-hole.jpg',
        specs: { standards: 'ISO 7806', thickness: '0.5mm to 8.0mm', holeSize: '2mm to 40mm', openArea: '20% to 70%' },
        materials: ['SS 304', 'SS 316L', 'Carbon Steel'],
        applications: ['Centrifuge baskets', 'Acoustic panels', 'Decorative facades'],
        features: ['Hex grid', 'Maximum open area', 'Lightweight']
      },
      {
        id: 'decorative', name: 'Decorative Perforated', image: '/images/types/decorative.jpg',
        specs: { standards: 'DIN 24041', thickness: '0.4mm to 6.0mm', holePattern: 'Embossed / Custom', openArea: '10% to 50%' },
        materials: ['SS 304', 'SS 316L', 'Brass', 'Copper', 'Aluminium'],
        applications: ['Architectural facades', 'Sunshades', 'Interior design'],
        features: ['Embossed patterns', 'Aesthetic finish', 'Custom designs']
      }
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
      configurations: 'Male/Female Connectors, Union Elbows, Union Tees, Bulkhead Unions, Reducers',
      connections: 'Tube Compression to NPT, BSPT, BSPP, SAE / MS threads'
    },
    materials: ['Stainless Steel 316 / 316L', 'Duplex 2205', 'Monel 400', 'Inconel 625', 'Hastelloy C276', 'Brass'],
    applications: ['Instrumentation & Control Panels', 'Analytical Sampling Shelters', 'Hydraulic Test Benches', 'Compressed Natural Gas (CNG) Dispensers'],
    features: [
      'Precision double-ferrule mechanical grip resisting high vibration and pressure pulses',
      'Silver-plated nut threads preventing galling during repeated re-assembly',
      'Zero torque transfer to the tubing during installation pull-up',
      'Helium leak tested with leak rates lower than 1 x 10^-9 std cc/sec'
    ],
    types: [
      {
        id: 'tube-connectors', name: 'Tube to Tube Connectors', image: '/images/types/tube-connectors.jpg',
        specs: { sizes: '1/16" to 2" OD', pressure: 'Up to 15,000 PSI', connection: 'Tube Compression' },
        materials: ['SS 316', 'SS 316L', 'Brass'],
        applications: ['Instrumentation lines', 'Sampling systems'],
        features: ['Double ferrule', 'Zero leakage', 'Vibration resistant']
      },
      {
        id: 'male-connectors', name: 'Male Connectors (NPT/BSP)', image: '/images/types/male-connectors.jpg',
        specs: { sizes: '1/16" to 2" OD', pressure: 'Up to 10,000 PSI', connection: 'NPT / BSPT / BSPP' },
        materials: ['SS 316', 'SS 316L', 'Duplex 2205'],
        applications: ['Control panels', 'Hydraulic benches'],
        features: ['Male thread', 'Silver-plated threads', 'High pressure']
      },
      {
        id: 'female-connectors', name: 'Female Connectors', image: '/images/types/female-connectors.jpg',
        specs: { sizes: '1/16" to 2" OD', pressure: 'Up to 10,000 PSI', connection: 'NPT / BSPT / BSPP Female' },
        materials: ['SS 316', 'SS 316L', 'Monel 400'],
        applications: ['Analytical shelters', 'CNG dispensers'],
        features: ['Female thread', 'Zero torque transfer', 'Helium leak tested']
      },
      {
        id: 'union-elbows', name: 'Union Elbows', image: '/images/types/union-elbows.jpg',
        specs: { sizes: '1/16" to 1" OD', pressure: 'Up to 10,000 PSI', angle: '90° / 45°' },
        materials: ['SS 316', 'SS 316L', 'Inconel 625'],
        applications: ['Piping direction change', 'Instrumentation'],
        features: ['90°/45° bend', 'Double ferrule', 'Compact']
      },
      {
        id: 'union-tees', name: 'Union Tees', image: '/images/types/union-tees.jpg',
        specs: { sizes: '1/16" to 1" OD', pressure: 'Up to 10,000 PSI', configuration: 'Equal / Reducing' },
        materials: ['SS 316', 'SS 316L', 'Hastelloy C276'],
        applications: ['Flow branching', 'Sampling systems'],
        features: ['Equal/reducing', 'Double ferrule', 'High purity']
      },
      {
        id: 'bulkhead-unions', name: 'Bulkhead Unions', image: '/images/types/bulkhead-unions.jpg',
        specs: { sizes: '1/16" to 1" OD', pressure: 'Up to 10,000 PSI', mounting: 'Panel mount' },
        materials: ['SS 316', 'SS 316L'],
        applications: ['Panel pass-through', 'Enclosure entries'],
        features: ['Panel mount', 'Leak tight', 'Vibration resistant']
      }
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
    ],
    types: [
      {
        id: 'laser-cut', name: 'Laser Cut Circles', image: '/images/types/laser-cut.jpg',
        specs: { diameters: '50mm to 3000mm', thickness: '0.8mm to 25mm', edge: 'Smooth, deburred' },
        materials: ['SS 304', 'SS 316L', 'Carbon Steel', 'Aluminium'],
        applications: ['Vessel heads', 'Blind covers', 'Cookware blanks'],
        features: ['Fiber laser', 'High precision', 'Narrow HAZ']
      },
      {
        id: 'waterjet-cut', name: 'Waterjet Cut Circles', image: '/images/types/waterjet-cut.jpg',
        specs: { diameters: '50mm to 3000mm', thickness: '1mm to 80mm', edge: 'No HAZ' },
        materials: ['SS 304', 'SS 316L', 'Duplex 2205', 'Inconel 625', 'Titanium'],
        applications: ['Thick vessel circles', 'Baffles', 'Manhole covers'],
        features: ['No HAZ', 'Cold cutting', 'Precision abrasive']
      },
      {
        id: 'plasma-cut', name: 'Plasma Cut Circles', image: '/images/types/plasma-cut.jpg',
        specs: { diameters: '100mm to 3000mm', thickness: '3mm to 50mm', edge: 'Beveled option' },
        materials: ['Carbon Steel A516', 'SS 304', 'SS 316L'],
        applications: ['Tank bottoms', 'Centrifuge bases', 'Structural blanks'],
        features: ['HD plasma', 'Fast cutting', 'Beveled edges']
      },
      {
        id: 'sheared', name: 'Sheared / Stamped Circles', image: '/images/types/sheared.jpg',
        specs: { diameters: '50mm to 1000mm', thickness: '0.8mm to 6mm', edge: 'Deburred' },
        materials: ['SS 304', 'Carbon Steel', 'Aluminium'],
        applications: ['Cookware blanks', 'Gaskets', 'Light blanks'],
        features: ['Economical', 'High volume', 'Deburred edges']
      },
      {
        id: 'dished-ends', name: 'Dished Ends / Vessel Heads', image: '/images/types/dished-ends.jpg',
        specs: { diameters: '200mm to 3000mm', thickness: '2mm to 40mm', profile: 'Torispherical / Ellipsoidal' },
        materials: ['SS 304', 'SS 316L', 'Carbon Steel A516', 'Duplex 2205'],
        applications: ['Pressure vessels', 'Reactors', 'Storage tanks'],
        features: ['Torispherical', 'Ellipsoidal', 'Ready for dishing']
      },
      {
        id: 'baffle-plates', name: 'Heat Exchanger Baffles', image: '/images/types/baffle-plates.jpg',
        specs: { diameters: '100mm to 2000mm', thickness: '3mm to 30mm', holes: 'Custom tube layout' },
        materials: ['SS 304', 'SS 316L', 'Duplex 2205', 'Titanium'],
        applications: ['Shell & tube exchangers', 'Condensers', 'Coolers'],
        features: ['Precision tube holes', 'Concentric', 'No HAZ option']
      }
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
    ],
    types: [
      {
        id: 'slit-strips', name: 'Slit Strips', image: '/images/types/slit-strips.jpg',
        specs: { thickness: '1mm to 12mm', width: '12mm to 150mm', edge: 'Slit / Deburred' },
        materials: ['SS 304', 'SS 316L', 'Mild Steel', 'Copper'],
        applications: ['Grating crossbars', 'Clamps', 'Trims'],
        features: ['Straight camber', 'Deburred edge', 'Coil or length']
      },
      {
        id: 'flat-bars', name: 'Flat Bars (Patta)', image: '/images/types/flat-bars.jpg',
        specs: { thickness: '3mm to 12mm', width: '20mm to 150mm', length: '3m to 6m' },
        materials: ['SS 201', 'SS 304', 'SS 316L', 'Carbon Steel'],
        applications: ['Structural fabrication', 'Pipe supports', 'Grating'],
        features: ['Cold bend 90°/180°', 'Uniform edge', 'High ductility']
      },
      {
        id: 'earthing-strips', name: 'Earthing Strips', image: '/images/types/earthing-strips.jpg',
        specs: { thickness: '2mm to 12mm', width: '12mm to 100mm', standard: 'IS 2062 / ASTM A240' },
        materials: ['GI', 'SS 304', 'Copper', 'Mild Steel'],
        applications: ['Electrical earthing', 'Grounding flats', 'Substations'],
        features: ['Corrosion resistant', 'Straight camber', 'Bendable']
      },
      {
        id: 'edging-strips', name: 'Edging Strips', image: '/images/types/edging-strips.jpg',
        specs: { thickness: '1mm to 6mm', width: '12mm to 60mm', edge: 'Rounded / Deburred' },
        materials: ['SS 304', 'SS 316L', 'Brass', 'Aluminium'],
        applications: ['Architectural trims', 'Edge protection', 'Decor'],
        features: ['Rounded edge', 'Aesthetic finish', 'Easy install']
      },
      {
        id: 'packing-strips', name: 'Packing Strips', image: '/images/types/packing-strips.jpg',
        specs: { thickness: '1mm to 8mm', width: '12mm to 80mm', length: 'Coil / 3-6m' },
        materials: ['Mild Steel', 'SS 304', 'GI'],
        applications: ['Packing shims', 'Gap filling', 'Industrial packing'],
        features: ['Uniform thickness', 'Waterproof packing', 'Economical']
      }
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
    ],
    types: [
      {
        id: 'hot-rolled-coils', name: 'Hot Rolled (HR) Coils', image: '/images/types/hot-rolled-coils.jpg',
        specs: { thickness: '2mm to 16mm', width: '600mm to 2000mm', surface: 'HR / Pickled' },
        materials: ['Carbon Steel', 'SS 304', 'SS 316L'],
        applications: ['Structural forming', 'Tube mills', 'Heavy stamping'],
        features: ['HR finish', 'Heavy gauge', 'Uniform crown-free']
      },
      {
        id: 'cold-rolled-coils', name: 'Cold Rolled (CR) Coils', image: '/images/types/cold-rolled-coils.jpg',
        specs: { thickness: '0.3mm to 3mm', width: '10mm to 1250mm', surface: '2B / BA / No.4' },
        materials: ['SS 304', 'SS 316L', 'CRCA'],
        applications: ['Stamping', 'HVAC ducting', 'Cable trays'],
        features: ['Smooth surface', 'Tight tolerance', 'PVC film option']
      },
      {
        id: 'hrap-coils', name: 'HRAP (Annealed & Pickled) Coils', image: '/images/types/hrap-coils.jpg',
        specs: { thickness: '2mm to 12mm', width: '600mm to 2000mm', surface: 'No.1 HRAP' },
        materials: ['SS 304', 'SS 316L', 'Duplex 2205'],
        applications: ['Tube mills', 'Heavy fabrication', 'Exhaust components'],
        features: ['Annealed & pickled', 'Scale-free', 'Formable']
      },
      {
        id: 'slit-coils', name: 'Precision Slit Coils', image: '/images/types/slit-coils.jpg',
        specs: { thickness: '0.3mm to 6mm', width: '10mm to 600mm', edge: 'Burr-free slit' },
        materials: ['SS 304', 'SS 316L', 'CRCA', 'GI'],
        applications: ['Press lines', 'Roll forming', 'Tube mills'],
        features: ['Burr-free slit', 'Custom width', 'Crown-free']
      },
      {
        id: 'galvanized-coils', name: 'Galvanized (GI) Coils', image: '/images/types/galvanized-coils.jpg',
        specs: { thickness: '0.3mm to 4mm', width: '10mm to 1250mm', coating: 'Z120–Z275' },
        materials: ['GI Steel', 'CRCA GI'],
        applications: ['HVAC ducting', 'Cable trays', 'Roofing'],
        features: ['Zinc coated', 'Corrosion resistant', 'Formable']
      }
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
    ],
    types: [
      {
        id: 'forged-rings', name: 'Seamless Forged Rolled Rings', image: '/images/types/forged-rings.jpg',
        specs: { od: '100mm to 3500mm', height: '15mm to 600mm', standard: 'ASTM A182 / A105' },
        materials: ['SS F304/L', 'SS F316/L', 'Carbon A105', 'Alloy 4140'],
        applications: ['Bearing races', 'Gear blanks', 'Flanges'],
        features: ['Seamless grain flow', 'UT tested', 'High toughness']
      },
      {
        id: 'profile-cut', name: 'Profile Cut Rings', image: '/images/types/profile-cut.jpg',
        specs: { od: '100mm to 3000mm', height: '5mm to 300mm', method: 'Waterjet / Plasma' },
        materials: ['SS 304', 'SS 316L', 'Duplex 2205', 'Carbon Steel'],
        applications: ['Flanges', 'Seals', 'Structural rings'],
        features: ['No HAZ option', 'Precision profile', 'Concentric']
      },
      {
        id: 'bearing-races', name: 'Bearing Races', image: '/images/types/bearing-races.jpg',
        specs: { od: '100mm to 2000mm', height: '15mm to 200mm', finish: 'Machined' },
        materials: ['Alloy 4140', 'Alloy 4340', 'SS F316/L', 'Duplex F51'],
        applications: ['Slewing rings', 'Rotating equipment', 'Heavy bearings'],
        features: ['Grain flow', 'Machined', 'Fatigue resistant']
      },
      {
        id: 'gear-blanks', name: 'Gear Blanks', image: '/images/types/gear-blanks.jpg',
        specs: { od: '150mm to 2500mm', height: '20mm to 400mm', finish: 'Proof machined' },
        materials: ['Alloy 4140', 'EN24', 'SS F316/L', 'Carbon A105'],
        applications: ['Heavy gears', 'Pinions', 'Transmission parts'],
        features: ['Proof machined', 'UT tested', 'Zero defects']
      },
      {
        id: 'ring-gaskets', name: 'Ring Joint Gaskets (BX/RX)', image: '/images/types/ring-gaskets.jpg',
        specs: { od: '50mm to 500mm', height: '10mm to 50mm', standard: 'API 6A / ASME B16.20' },
        materials: ['SS F304/L', 'SS F316/L', 'Duplex F51', 'Inconel 625'],
        applications: ['Subsea wellheads', 'High-pressure flanges', 'Oil & gas'],
        features: ['BX/RX profile', 'High pressure', 'Leak tight']
      },
      {
        id: 'flange-rings', name: 'Flange Rings', image: '/images/types/flange-rings.jpg',
        specs: { od: '100mm to 3500mm', height: '20mm to 600mm', finish: 'Rough / CNC' },
        materials: ['Carbon A105', 'SS F316/L', 'Alloy F11/F22', 'Duplex F51'],
        applications: ['Vessel flanges', 'Shell flanges', 'Piping'],
        features: ['CNC finish', 'UT tested', 'Custom sizes']
      }
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
    ],
    types: [
      {
        id: 'ball-valves', name: 'Ball Valves', image: '/images/types/ball-valves.jpg',
        specs: { sizes: '1/4" to 48"', pressure: 'Class 150–1500', bore: 'Full / Reduced' },
        materials: ['SS CF8M', 'Carbon WCB', 'Duplex CD4MCu'],
        applications: ['Oil & gas', 'Chemical plants', 'Pharma'],
        features: ['Full bore', 'Fire-safe API 607', 'Anti-blowout stem']
      },
      {
        id: 'gate-valves', name: 'Gate Valves', image: '/images/types/gate-valves.jpg',
        specs: { sizes: '1/2" to 48"', pressure: 'Class 150–1500', standard: 'API 600 / 602' },
        materials: ['SS CF8', 'Carbon WCB', 'Alloy WC6'],
        applications: ['Pipelines', 'Power plants', 'Water systems'],
        features: ['Rising/non-rising stem', 'Fire-safe', 'API 600']
      },
      {
        id: 'globe-valves', name: 'Globe Valves', image: '/images/types/globe-valves.jpg',
        specs: { sizes: '1/2" to 24"', pressure: 'Class 150–1500', standard: 'BS 1868' },
        materials: ['SS CF8M', 'Carbon WCB', 'Alloy WC9'],
        applications: ['Flow regulation', 'Chemical plants', 'Steam lines'],
        features: ['Throttling', 'Fire-safe', 'Renewable seat']
      },
      {
        id: 'check-valves', name: 'Check / Non-Return Valves', image: '/images/types/check-valves.jpg',
        specs: { sizes: '1/2" to 36"', pressure: 'Class 150–1500', type: 'Swing / Lift / Dual' },
        materials: ['SS CF8M', 'Carbon WCB', 'Duplex CD4MCu'],
        applications: ['Pump discharge', 'Pipelines', 'Power plants'],
        features: ['Non-return', 'Swing/lift', 'Fire-safe']
      },
      {
        id: 'butterfly-valves', name: 'Butterfly Valves', image: '/images/types/butterfly-valves.jpg',
        specs: { sizes: '2" to 48"', pressure: 'Class 150 / PN10–PN25', type: 'Wafer / Lug / Flanged' },
        materials: ['SS CF8M', 'Carbon WCB', 'Duplex CE8MN'],
        applications: ['HVAC', 'Water treatment', 'Chemical plants'],
        features: ['Wafer/lug', 'Compact', 'Actuator ready']
      },
      {
        id: 'needle-valves', name: 'Needle Valves', image: '/images/types/needle-valves.jpg',
        specs: { sizes: '1/8" to 2"', pressure: 'Up to 10,000 PSI', connection: 'NPT / BSP / SW' },
        materials: ['SS 316', 'SS 316L', 'Brass'],
        applications: ['Instrumentation', 'Sampling', 'Hydraulics'],
        features: ['Fine control', 'High pressure', 'Precision needle']
      }
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
    materials: [
      'Carbon Steel IS 2062 / ASTM A36',
      'Stainless Steel 304, 316',
      'Galvanized (GI) Chequered Sheets',
      'Mild Steel Hot Rolled'
    ],
    applications: [
      'Industrial Flooring & Mezzanine Decks',
      'Staircase Treads & Walkways',
      'Truck & Trailer Flooring',
      'Ship Deck Plating'
    ],
    features: [
      'Uniform raised pattern height providing consistent anti-slip performance',
      'Superior flatness and clean sheared edges for easy fabrication',
      'Available pre-painted or hot-dip galvanized for outdoor applications',
      'Cut-to-size service available for custom platform dimensions'
    ],
    types: [
      {
        id: 'tear-drop',
        name: 'Tear Drop Pattern',
        shortDesc: 'Raised tear-drop shaped studs arranged in a staggered pattern for all-direction anti-slip grip.',
        longDesc: 'The most widely used chequered plate pattern, featuring raised tear-drop shaped studs set in alternating rows. Provides excellent anti-slip performance in all directions and is ideal for general industrial flooring, walkways, and staircase treads.',
        image: '/images/type-tear-drop.jpg',
        specs: {
          baseThickness: '2.5mm to 12mm',
          patternHeight: '0.8mm to 1.5mm raised above base',
          standardWidths: '1250mm, 1500mm, 2000mm',
          standardLengths: '2500mm, 3000mm, 6000mm',
          standards: 'IS 3502, ASTM A786'
        },
        materials: ['Carbon Steel IS 2062', 'ASTM A36', 'Stainless Steel 304 / 316', 'Galvanized (GI)'],
        applications: [
          'General industrial flooring',
          'Walkways and platforms',
          'Staircase treads',
          'Vehicle bodies and ramps'
        ],
        features: [
          'Best all-direction slip resistance',
          'Most economical and readily available pattern',
          'Easy to weld, cut, and fabricate',
          'Available in hot-dip galvanized finish'
        ]
      },
      {
        id: 'diamond',
        name: 'Diamond Pattern',
        shortDesc: 'Raised diamond-shaped studs offering high traction with a distinctive decorative appearance.',
        longDesc: 'Chequered plates with raised diamond-shaped projections arranged diagonally. Combines strong anti-slip performance with an attractive appearance, commonly used where both function and aesthetics matter.',
        image: '/images/type-diamond.jpg',
        specs: {
          baseThickness: '2.5mm to 10mm',
          patternHeight: '0.8mm to 1.2mm raised above base',
          standardWidths: '1250mm, 1500mm',
          standardLengths: '2500mm, 3000mm, 6000mm',
          standards: 'ASTM A786, BS 4360'
        },
        materials: ['Carbon Steel IS 2062', 'ASTM A36', 'Stainless Steel 304 / 316'],
        applications: [
          'Decorative flooring',
          'Commercial and industrial platforms',
          'Machine bases and covers',
          'Tool boxes and equipment panels'
        ],
        features: [
          'Attractive diamond aesthetic',
          'Good multi-directional grip',
          'Suitable for light to medium duty',
          'Available in stainless steel for hygienic environments'
        ]
      },
      {
        id: 'lentil',
        name: 'Lentil Pattern',
        shortDesc: 'Raised lentil (oval) shaped studs providing smooth, comfortable anti-slip traction.',
        longDesc: 'Chequered plates with raised lentil or oval shaped projections. The rounded pattern offers comfortable underfoot traction and is often preferred in Europe and for pedestrian-heavy areas.',
        image: '/images/type-lentil.jpg',
        specs: {
          baseThickness: '2.5mm to 10mm',
          patternHeight: '0.8mm to 1.2mm raised above base',
          standardWidths: '1250mm, 1500mm, 2000mm',
          standardLengths: '2500mm, 3000mm, 6000mm',
          standards: 'BS 4360, ASTM A786'
        },
        materials: ['Carbon Steel IS 2062', 'ASTM A36', 'Stainless Steel 304 / 316', 'Galvanized (GI)'],
        applications: [
          'Pedestrian walkways',
          'Public access flooring',
          'Staircase treads',
          'Architectural and decorative panels'
        ],
        features: [
          'Comfortable underfoot grip',
          'Less abrasive than tear-drop',
          'Popular European standard pattern',
          'Good drainage characteristics'
        ]
      },
      {
        id: 'two-bar',
        name: 'Two-Bar Pattern',
        shortDesc: 'Two raised parallel bars per repeat unit for directional anti-slip grip.',
        longDesc: 'Chequered plates featuring two raised bars arranged in a repeating pattern. Provides strong grip in one primary direction, making it suitable for ramps and directional walkways.',
        image: '/images/type-two-bar.jpg',
        specs: {
          baseThickness: '2.5mm to 8mm',
          patternHeight: '0.8mm to 1.2mm raised above base',
          standardWidths: '1250mm, 1500mm',
          standardLengths: '2500mm, 3000mm, 6000mm',
          standards: 'ASTM A786'
        },
        materials: ['Carbon Steel IS 2062', 'ASTM A36', 'Mild Steel Hot Rolled'],
        applications: [
          'Ramps and inclined surfaces',
          'Directional walkways',
          'Light industrial flooring',
          'Trailer and truck beds'
        ],
        features: [
          'Strong directional grip',
          'Cost-effective pattern',
          'Easy fabrication and welding',
          'Good for ramp applications'
        ]
      },
      {
        id: 'three-bar',
        name: 'Three-Bar Pattern',
        shortDesc: 'Three raised parallel bars per repeat unit for enhanced anti-slip in high-traffic areas.',
        longDesc: 'Chequered plates with three raised bars per repeating unit, offering greater surface contact and slip resistance than two-bar. Suited for heavier traffic and industrial environments.',
        image: '/images/type-three-bar.jpg',
        specs: {
          baseThickness: '3mm to 10mm',
          patternHeight: '0.8mm to 1.5mm raised above base',
          standardWidths: '1250mm, 1500mm, 2000mm',
          standardLengths: '2500mm, 3000mm, 6000mm',
          standards: 'ASTM A786, BS 4360'
        },
        materials: ['Carbon Steel IS 2062', 'ASTM A36', 'Stainless Steel 304 / 316', 'Galvanized (GI)'],
        applications: [
          'Heavy traffic walkways',
          'Industrial platforms',
          'Staircase treads',
          'Loading docks and ramps'
        ],
        features: [
          'Higher grip density than two-bar',
          'Suitable for heavier foot traffic',
          'Good wear resistance',
          'Available in galvanized finish'
        ]
      },
      {
        id: 'five-bar',
        name: 'Five-Bar (Quintet) Pattern',
        shortDesc: 'Five raised bars per repeat unit for maximum traction and heavy-duty anti-slip performance.',
        longDesc: 'Chequered plates with five raised bars arranged in each repeating unit, delivering the highest stud density and anti-slip performance among bar patterns. Ideal for heavy industrial, offshore, and high-safety environments.',
        image: '/images/type-five-bar.jpg',
        specs: {
          baseThickness: '3mm to 12mm',
          patternHeight: '1.0mm to 1.5mm raised above base',
          standardWidths: '1250mm, 1500mm, 2000mm',
          standardLengths: '2500mm, 3000mm, 6000mm',
          standards: 'ASTM A786, BS 4360, IS 3502'
        },
        materials: ['Carbon Steel IS 2062', 'ASTM A36', 'Stainless Steel 304 / 316', 'Galvanized (GI)', 'Mild Steel Hot Rolled'],
        applications: [
          'Heavy industrial flooring',
          'Offshore and marine decks',
          'High-safety walkways',
          'Mining and plant platforms'
        ],
        features: [
          'Maximum anti-slip performance',
          'Heavy-duty load bearing',
          'Suitable for wet and oily environments',
          'Excellent for offshore and marine use'
        ]
      }
    ]
  }
];