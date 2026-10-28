export const certificateCategories = [
  {
    id: 'mtc-31-32',
    name: 'Mill Test Certificates (EN 10204 3.1 & 3.2)',
    category: 'Material Traceability',
    summary: 'Complete metallurgical and chemical composition reports issued in accordance with European Standard EN 10204 Type 3.1 (manufacturer authorized inspector) or Type 3.2 (independent third-party validated).',
    details: [
      'Heat number and lot identification stamped on product and certificate',
      'Full chemical breakdown (C, Mn, Si, P, S, Cr, Ni, Mo, Ti, N, Cu, etc.)',
      'Mechanical tensile test: Yield strength, ultimate tensile strength, elongation',
      'Hardness test (Rockwell B/C, Brinell, or Vickers values)',
      'Charpy V-Notch impact testing at ambient or cryogenic temperatures (-46°C to -196°C)'
    ],
    status: 'Demo Specification Placeholder — Client Certificates Can Be Linked Here'
  },
  {
    id: 'pmi-testing',
    name: 'Positive Material Identification (PMI)',
    category: 'Alloy Verification',
    summary: 'Non-destructive elemental spectroscopic analysis verifying grade alloy compliance prior to dispatch, preventing grade mix-ups.',
    details: [
      'Handheld X-ray Fluorescence (XRF) and Optical Emission Spectrometry (OES)',
      '100% component testing capability for critical high-nickel and duplex alloys',
      'Detection and documentation of key alloying elements (Nickel, Moly, Chrome, Cobalt)',
      'Individual piece tagging or color-coding mapped to PMI reports'
    ],
    status: 'Demo Specification Placeholder — Client Certificates Can Be Linked Here'
  },
  {
    id: 'third-party-inspection',
    name: 'Third-Party Inspection (TPI) Coordination',
    category: 'Independent Audit',
    summary: 'Facilitation of witness inspections and stage-wise audits by internationally recognized independent certifying bodies per client quality plan (QAP).',
    details: [
      'Coordination with client-nominated agencies (e.g. TUV, DNV, Bureau Veritas, SGS, Lloyds Register)',
      'Raw material verification, dimensional witness, and hydrostatic test witnessing',
      'Review and endorsement of final manufacturer test dossiers',
      'Inspection Release Certificate (IRC) endorsement prior to shipment'
    ],
    status: 'Demo Specification Placeholder — Client Certificates Can Be Linked Here'
  },
  {
    id: 'ndt-testing',
    name: 'Non-Destructive Testing (NDT)',
    category: 'Integrity Testing',
    summary: 'Comprehensive non-destructive examination procedures ensuring internal soundness and surface defect-free delivery for high-pressure service.',
    details: [
      'Ultrasonic Testing (UT) to ASTM A388 / A578 for plates, forgings, and heavy wall pipes',
      'Radiographic Testing (RT) / X-Ray for welded pipe seams and butt-weld fittings',
      'Liquid Penetrant Inspection (LPI / DPI) for surface flaw and weld joint verification',
      'Magnetic Particle Inspection (MPI) for ferromagnetic components',
      'Hydrostatic and Pneumatic proof pressure testing'
    ],
    status: 'Demo Specification Placeholder — Client Certificates Can Be Linked Here'
  },
  {
    id: 'dimensional-visual',
    name: 'Dimensional & Visual Inspection Reports',
    category: 'Geometric Compliance',
    summary: 'Pre-shipment verification of tolerances, angles, bevels, wall thickness, ovality, and surface finishes strictly adhering to ASME, DIN, or customer drawing tolerances.',
    details: [
      'Laser micrometer and calibrated gauge dimensional logs',
      'Bevel angle and root face profile verification for pipe welding',
      'Surface roughness (Ra / Rz) measurement for sanitary and pharma components',
      'Protective coating and end-cap packaging verification'
    ],
    status: 'Demo Specification Placeholder — Client Certificates Can Be Linked Here'
  },
  {
    id: 'corrosion-microstructure',
    name: 'Corrosion & Microstructure Testing',
    category: 'Metallurgical Testing',
    summary: 'Specialized metallurgical laboratory evaluations assessing intergranular corrosion susceptibility and phase balance in duplex and stainless alloys.',
    details: [
      'Intergranular Corrosion (IGC) testing to ASTM A262 Practice A, B, C, E',
      'Pitting and Crevice Corrosion testing to ASTM G48 Method A/B',
      'Ferrite content measurement (Feritscope) and metallographic phase count for duplex steels',
      'Microstructure grain size analysis to ASTM E112'
    ],
    status: 'Demo Specification Placeholder — Client Certificates Can Be Linked Here'
  }
];
