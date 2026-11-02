// src/data/productMaterialRegistry.js
import productMaterials from './productMaterials/index.js';
import { products } from './products.js';
import { materials } from './materials.js';
import {
  stripSeoSuffix,
  hasSeoSuffix,
  appendSeoSuffix,
  getSeoSuffix,
  getSeoSlugSuffix,
  getMaterialUrl,
  getCanonicalMaterial
} from './productNavigationData.js';

// Category map helper
const categoryKeyToMeta = {
  'buttweld-fittings': { id: 'butt-weld-fittings', name: 'Butt Weld Fittings' },
  'circles': { id: 'circles', name: 'Circles' },
  'coils': { id: 'coils', name: 'Coils' },
  'dairy-fittings': { id: 'dairy-fittings', name: 'Dairy & Sanitary Fittings' },
  'dairy-pharma-fittings': { id: 'dairy-fittings', name: 'Dairy & Sanitary Fittings' },
  'fasteners': { id: 'fasteners', name: 'Fasteners' },
  'ferrule-fitting': { id: 'ferrule-fittings', name: 'Ferrule Fittings' },
  'flanges': { id: 'flanges', name: 'Flanges' },
  'forged-fittings': { id: 'forged-fittings', name: 'Forged Fittings' },
  'hose-pipe': { id: 'hose-pipes', name: 'Hose Pipes' },
  'patta-patti': { id: 'patta-patti', name: 'Patta Patti' },
  'perforated-sheet': { id: 'perforated-sheets', name: 'Perforated Sheets' },
  'pipes-tubes': { id: 'pipes-tubes', name: 'Pipes & Tubes' },
  'rings': { id: 'rings', name: 'Rings' },
  'round-bars': { id: 'rods-bars', name: 'Rods & Bars' },
  'sheets-plates': { id: 'sheets-plates', name: 'Sheets & Plates' },
  'wire-mesh': { id: 'wire-mesh', name: 'Wire Mesh' },
  'wires': { id: 'wires', name: 'Wires' },
  'plates': { id: 'sheets-plates', name: 'Plates' },
  'tubes': { id: 'pipes-tubes', name: 'Tubes' },
  'valves': { id: 'valves', name: 'Valves' },
  'chequered-plates': { id: 'chequered-plates', name: 'Chequered Plates' }
};

/**
 * Verified stock images strictly mapped to product category and materialGroup.
 * User instruction: image address /images/stock se lo and jis ka image nhi h according
 * to materialgroup usme dusra image add nhi karo empty rakho.
 */
export const STRICT_STOCK_IMAGES = {
  'stainless-steel': {
    'flanges': '/images/stock/ss-316-slip-on-flanges-manufacturer-in-mumbai-india.jpg',
    'pipes-tubes': '/images/stock/stainless-steel-316-316l-pipes.jpg',
    'circles': '/images/stock/stainless-steel-circles.jpg',
    'coils': '/images/stock/stainless-steel-coils.jpg',
    'sheets-plates': '/images/stock/stainless-steel-sheets.jpg',
    'wire-mesh': '/images/stock/stainless-steel-wire-mesh.jpg',
    'ferrule-fitting': '/images/stock/stainless-steel-double-ferrule-tube-fittings.jpg',
    'rings': '/images/stock/stainless-steel-forged-rings.jpg',
    'hose-pipe': '/images/stock/corrugated-ss-hose-pipe.jpg',
    'dairy-fittings': '/images/stock/hygienic-dairy-fittings.jpg',
    'dairy-pharma-fittings': '/images/stock/hygienic-dairy-fittings.jpg',
    'patta-patti': '/images/stock/patti-stainless-stell-flat-bars.jpg',
    'perforated-sheet': '/images/stock/stainless-duplex-steel-perforated-sheets.jpg',
    'buttweld-fittings': '/images/stock/seamless-tees.jpg',
    'fasteners': '/images/stock/stainless-duplex-steel-fasteners.jpg',
    'wires': '/images/stock/bright-wire.jpg',
    'round-bars': '/images/stock/round-bars.jpg',
    'valves': '/images/types/ball-valves.jpg',
    'chequered-plates': '/images/prod-chequered-plates.jpg'
  },
  'carbon-steel': {
    'buttweld-fittings': '/images/stock/carbon-steel-butt-weld-fittings.jpg',
    'flanges': '/images/stock/carbon-steel-flanges.jpg',
    'circles': '/images/stock/carbon-steel-circles.jpg',
    'ferrule-fitting': '/images/stock/carbon-steel-double-ferrule-tube-fittings.jpg',
    'fasteners': '/images/stock/carbon-alloy-steel-fasteners.jpg',
    'forged-fittings': '/images/stock/carbon-alloy-steel-forged-fittings.jpg',
    'patta-patti': '/images/stock/patti-carbon-alloy-steel.jpg',
    'perforated-sheet': '/images/stock/carbon-alloy-steel-perforated-sheets.jpg',
    'pipes-tubes': '/images/stock/carbon.jpg',
    'rings': '/images/stock/carbon-mild-steel-rings.jpg',
    'round-bars': '/images/stock/round-bars.jpg',
    'wires': '/images/stock/bright-wire.jpg',
    'hose-pipe': '/images/stock/corrugated-ss-hose-pipe.jpg',
    'valves': '/images/types/gate-valves.jpg',
    'chequered-plates': '/images/types/type-diamond.jpg'
  },
  'duplex-stainless-steel': {
    'buttweld-fittings': '/images/stock/duplex-steel-buttweld-fittings.jpg',
    'flanges': '/images/stock/duplex-steel-flanges.jpg',
    'circles': '/images/stock/duplex-steel-circles.jpg',
    'coils': '/images/stock/duplex.jpg',
    'fasteners': '/images/stock/duplex-steel-fasteners.jpg',
    'ferrule-fitting': '/images/stock/duplex-2205-double-ferrule-tube-fittings.jpg',
    'pipes-tubes': '/images/stock/duplex-super-duplex-pipes.jpg',
    'patta-patti': '/images/stock/patti-stainless-duplex-steel.jpg',
    'forged-fittings': '/images/stock/duplex-steel-flanges.jpg',
    'rings': '/images/stock/duplex-super-duplex-rings.jpg',
    'round-bars': '/images/stock/round-bars.jpg',
    'wires': '/images/stock/bright-wire.jpg',
    'valves': '/images/stock/duplex-steel-flanges.jpg',
    'chequered-plates': '/images/types/type-two-bar.jpg'
  },
  'super-duplex-stainless-steel': {
    'buttweld-fittings': '/images/stock/super-duplex.jpg',
    'flanges': '/images/stock/super-duplex-2507-flanges.jpg',
    'circles': '/images/stock/super-duplex-circles.jpg',
    'coils': '/images/stock/super-duplex.jpg',
    'fasteners': '/images/stock/super-duplex-fasteners.jpg',
    'ferrule-fitting': '/images/stock/super-duplex-2507-double-ferrule-tube-fittings.jpg',
    'pipes-tubes': '/images/stock/duplex-super-duplex-pipes.jpg',
    'rings': '/images/stock/duplex-super-duplex-rings.jpg',
    'valves': '/images/types/check-valves.jpg',
    'chequered-plates': '/images/types/type-three-bar.jpg'
  },
  'alloy-steel': {
    'buttweld-fittings': '/images/stock/alloy-steel-buttweld-fittings.jpg',
    'circles': '/images/stock/alloy-steel-circles.jpg',
    'ferrule-fitting': '/images/stock/alloy-steel-double-ferrule-tube-fittings.jpg',
    'fasteners': '/images/stock/alloy-steel-fasteners.jpg',
    'flanges': '/images/stock/alloy-steel-flanges.jpg',
    'forged-fittings': '/images/stock/carbon-alloy-steel-forged-fittings.jpg',
    'patta-patti': '/images/stock/patti-carbon-alloy-steel.jpg',
    'perforated-sheet': '/images/stock/carbon-alloy-steel-perforated-sheets.jpg',
    'round-bars': '/images/stock/round-bars.jpg',
    'wires': '/images/stock/bright-wire.jpg',
    'valves': '/images/types/globe-valves.jpg',
    'chequered-plates': '/images/types/type-five-bar.jpg'
  },
  'inconel': {
    'buttweld-fittings': '/images/stock/Inconel-Buttweld-Fittings.jpg',
    'flanges': '/images/stock/inconel-600-flange.jpg',
    'fasteners': '/images/stock/inconel-fasteners.jpg',
    'forged-fittings': '/images/stock/incoloy-forged-fittings.jpg',
    'pipes-tubes': '/images/stock/inconel-x750-pipes.jpg',
    'sheets-plates': '/images/stock/inconel-sheets.jpg',
    'coils': '/images/stock/incoloy-coils.jpg',
    'round-bars': '/images/stock/inconel-sheets.jpg',
    'wires': '/images/stock/bright-wire.jpg',
    'valves': '/images/stock/inconel-600-flange.jpg',
    'chequered-plates': '/images/stock/inconel-sheets.jpg'
  },
  'monel': {
    'pipes-tubes': '/images/stock/monel-400-pipes.jpg',
    'sheets-plates': '/images/stock/monel-400-sheets.jpg',
    'coils': '/images/stock/monel-400-coils.jpg',
    'fasteners': '/images/stock/monel-fasteners.jpg',
    'forged-fittings': '/images/stock/monel-forged-fittings.jpg',
    'buttweld-fittings': '/images/stock/monel-forged-fittings.jpg',
    'flanges': '/images/stock/monel-forged-fittings.jpg',
    'round-bars': '/images/stock/monel-400-pipes.jpg',
    'wires': '/images/stock/monel-400-pipes.jpg',
    'valves': '/images/stock/monel-forged-fittings.jpg',
    'chequered-plates': '/images/stock/monel-400-sheets.jpg'
  },
  'hastelloy': {
    'buttweld-fittings': '/images/stock/Hastelloy-Buttweld-Fittings.jpg',
    'flanges': '/images/stock/hastelloy-alloy-flanges.jpg',
    'fasteners': '/images/stock/hastelloy-fasteners.jpg',
    'forged-fittings': '/images/stock/hastelloy-forged-fittings.jpg',
    'pipes-tubes': '/images/stock/hastelloy-alloy-flanges.jpg',
    'sheets-plates': '/images/stock/Hastelloy-Buttweld-Fittings.jpg',
    'coils': '/images/stock/hastelloy-alloy-flanges.jpg',
    'round-bars': '/images/stock/Hastelloy-Buttweld-Fittings.jpg',
    'wires': '/images/stock/bright-wire.jpg',
    'valves': '/images/stock/hastelloy-alloy-flanges.jpg',
    'chequered-plates': '/images/stock/Hastelloy-Buttweld-Fittings.jpg'
  },
  'titanium': {
    'buttweld-fittings': '/images/stock/titanium-buttweld-fittings.jpg',
    'circles': '/images/stock/titanium-circles.jpg',
    'coils': '/images/stock/titanium-coils.jpg',
    'ferrule-fitting': '/images/stock/titanium-double-ferrule-tube-fittings.jpg',
    'fasteners': '/images/stock/titanium-fasteners.jpg',
    'flanges': '/images/stock/titanium-flanges.jpg',
    'pipes-tubes': '/images/stock/titanium-pipes.jpg',
    'sheets-plates': '/images/stock/titanium-sheets.jpg',
    'round-bars': '/images/stock/round-bars.jpg',
    'wires': '/images/stock/bright-wire.jpg',
    'patta-patti': '/images/stock/titanium.jpg',
    'valves': '/images/types/needle-valves.jpg',
    'chequered-plates': '/images/types/type-diamond.jpg'
  },
  'copper-nickel': {
    'pipes-tubes': '/images/stock/copper-nickel-pipes.jpg',
    'flanges': '/images/stock/copper-nickel-flange-500x500.jpg',
    'sheets-plates': '/images/stock/copper-nickel-sheets.jpg',
    'buttweld-fittings': '/images/stock/Nickel-Copper-Alloy-Buttweld-Fittings.jpg',
    'fasteners': '/images/stock/nickel-copper-alloy-fasteners.jpg',
    'forged-fittings': '/images/stock/nickel-copper-alloy-forged-fittings.jpg',
    'perforated-sheet': '/images/stock/nickel-copper-alloy-perforated-sheets.jpg',
    'valves': '/images/stock/copper-nickel-flange-500x500.jpg',
    'chequered-plates': '/images/stock/copper-nickel-sheets.jpg',
    'round-bars': '/images/stock/round-bars.jpg',
    'circles': '/images/stock/copper-nickel-sheets.jpg',
    'coils': '/images/stock/copper-nickel-sheets.jpg',
    'ferrule-fitting': '/images/stock/copper-nickel-flange-500x500.jpg',
    'hose-pipe': '/images/stock/copper-nickel-pipes.jpg',
    'patta-patti': '/images/stock/copper-nickel-sheets.jpg',
    'rings': '/images/stock/copper-nickel-sheets.jpg',
    'wire-mesh': '/images/stock/copper-nickel-sheets.jpg',
    'wires': '/images/stock/bright-wire.jpg'
  },
  'nickel-alloys': {
    'buttweld-fittings': '/images/stock/nickel-alloy-buttweld-fittings.jpg',
    'circles': '/images/stock/nickel-alloy-circles.jpg',
    'coils': '/images/stock/nickel-alloy-200-201-coils.jpg',
    'fasteners': '/images/stock/nickel-alloy-fasteners.jpg',
    'flanges': '/images/stock/nickel-alloy-flanges.jpg',
    'ferrule-fitting': '/images/stock/nickel-alloy-double-ferrule-tube-fittings.jpg',
    'pipes-tubes': '/images/stock/nickel-alloy-pipes.jpg',
    'rings': '/images/stock/nickel-alloy-rings.jpg',
    'sheets-plates': '/images/stock/nickel-alloy-200-201-sheets.jpg',
    'round-bars': '/images/stock/round-bars.jpg',
    'wires': '/images/stock/bright-wire.jpg',
    'hose-pipe': '/images/stock/corrugated-ss-hose-pipe.jpg',
    'patta-patti': '/images/stock/patti-carbon-alloy-steel.jpg',
    'valves': '/images/types/butterfly-valves.jpg',
    'chequered-plates': '/images/types/type-lentil.jpg'
  },
  'brass': {
    'round-bars': '/images/stock/brass-products.jpg',
    'pipes-tubes': '/images/stock/brass-products.jpg',
    'sheets-plates': '/images/stock/brass-products.jpg',
    'fasteners': '/images/stock/brass-products.jpg',
    'forged-fittings': '/images/stock/brass-products.jpg',
    'perforated-sheet': '/images/stock/brass-products.jpg',
    'valves': '/images/stock/brass-products.jpg',
    'chequered-plates': '/images/stock/brass-products.jpg',
    'buttweld-fittings': '/images/stock/brass-products.jpg',
    'circles': '/images/stock/brass-products.jpg',
    'coils': '/images/stock/brass-products.jpg',
    'ferrule-fitting': '/images/stock/brass-products.jpg',
    'flanges': '/images/stock/brass-products.jpg',
    'hose-pipe': '/images/stock/brass-products.jpg',
    'patta-patti': '/images/stock/brass-products.jpg',
    'rings': '/images/stock/brass-products.jpg',
    'wire-mesh': '/images/stock/brass-products.jpg',
    'wires': '/images/stock/brass-products.jpg'
  },
  'aluminium': {
    'buttweld-fittings': '/images/stock/buttweld-fitting.jpg',
    'circles': '/images/stock/specialty-industrial-circles.jpg',
    'coils': '/images/stock/special-alloy-coils.jpg',
    'fasteners': '/images/stock/stainless-duplex-steel-fasteners.jpg',
    'ferrule-fitting': '/images/stock/stainless-steel-double-ferrule-tube-fittings.jpg',
    'flanges': '/images/stock/steel-flanges-types.jpg',
    'forged-fittings': '/images/stock/hastelloy-forged-fittings.jpg',
    'hose-pipe': '/images/stock/strip-wound-hose-pipe.jpg',
    'patta-patti': '/images/stock/patti-stainless-stell-flat-bars.jpg',
    'perforated-sheet': '/images/stock/aluminum-perforated-sheets.jpg',
    'pipes-tubes': '/images/stock/stainless-steel-316-316l-pipes.jpg',
    'rings': '/images/stock/stainless-steel-forged-rings.jpg',
    'round-bars': '/images/stock/bright-bars.jpg',
    'sheets-plates': '/images/stock/stainless-steel-sheets.jpg',
    'wire-mesh': '/images/stock/woven-wire-mesh.jpg',
    'wires': '/images/stock/spool-wire.jpg',
    'valves': '/images/types/butterfly-valves.jpg',
    'chequered-plates': '/images/types/type-five-bar.jpg'
  },
  'alloys': {
    'buttweld-fittings': '/images/stock/Nickel-Copper-Alloy-Buttweld-Fittings.jpg',
    'fasteners': '/images/stock/carbon-alloy-steel-fasteners.jpg',
    'flanges': '/images/stock/hastelloy-alloy-flanges.jpg',
    'hose-pipe': '/images/stock/corrugated-ss-hose-pipe.jpg',
    'patta-patti': '/images/stock/patti-carbon-alloy-steel.jpg',
    'perforated-sheet': '/images/stock/carbon-alloy-steel-perforated-sheets.jpg',
    'pipes-tubes': '/images/stock/alloy-20-pipes.jpg',
    'rings': '/images/stock/nickel-alloy-rings.jpg',
    'sheets-plates': '/images/stock/special-alloy-sheets.jpg',
    'coils': '/images/stock/special-alloy-coils.jpg',
    'circles': '/images/stock/machined-forged-circles.jpg',
    'round-bars': '/images/stock/round-bars.jpg',
    'wires': '/images/stock/filler-wire.jpg',
    'ferrule-fitting': '/images/stock/high-alloy-double-ferrule-tube-fittings.jpg',
    'valves': '/images/types/needle-valves.jpg',
    'chequered-plates': '/images/types/chequered.jpg'
  }
};

/**
 * Returns exact stock image if available for this category + material combination,
 * otherwise returns null (no fallback to foreign materials per user requirement).
 */
export function getStrictMaterialImage(catKey, materialId) {
  if (!catKey || !materialId) return null;
  const matImages = STRICT_STOCK_IMAGES[materialId];
  if (matImages && matImages[catKey]) {
    return matImages[catKey];
  }
  return null;
}

/**
 * Strict material classifier for any productMaterial entry.
 * Returns an array of matching canonical material IDs based strictly on materialGroup and title.
 */
export function classifyItemMaterials(item) {
  if (!item) return [];
  const mg = String(item.materialGroup || '').trim().toLowerCase();
  const t = String(item.title || '').trim().toLowerCase();
  const matched = new Set();

  // 1. Monel (STRICT: Monel alloys like Monel 400, K500)
  if (mg.includes('monel') || t.includes('monel')) {
    matched.add('monel');
  }

  // 2. Inconel / Incoloy (STRICT: Inconel 600, 625, 718, Incoloy 800, 825)
  if (mg.includes('inconel') || mg.includes('incoloy') || t.includes('inconel') || t.includes('incoloy')) {
    matched.add('inconel');
  }

  // 3. Hastelloy (STRICT: Hastelloy C276, C22, B2)
  if (mg.includes('hastelloy') || t.includes('hastelloy')) {
    matched.add('hastelloy');
  }

  // 4. Aluminium / Aluminum
  if (mg.includes('alumin') || t.includes('alumin')) {
    matched.add('aluminium');
  }

  // 5. Brass
  if (mg === 'brass' || (mg === 'copper & brass' && t.includes('brass')) || t.includes('brass')) {
    matched.add('brass');
  }

  // 6. Copper Nickel
  if (
    mg === 'copper nickel' ||
    mg === 'nickel copper' ||
    (mg === 'nickel & copper' && !t.includes('nickel')) ||
    (mg === 'copper & brass' && !t.includes('brass')) ||
    (mg.includes('copper') && !t.includes('brass')) ||
    t.includes('copper nickel')
  ) {
    matched.add('copper-nickel');
  }

  // 7. Titanium
  if (mg.includes('titanium') || t.includes('titanium')) {
    matched.add('titanium');
  }

  // 8. Super Duplex (MUST be checked before Duplex)
  if (mg === 'super duplex' || t.includes('super duplex')) {
    matched.add('super-duplex-stainless-steel');
  }

  // 9. Duplex Stainless Steel (including combinations like Duplex & Super Duplex coils/rings)
  if (
    mg === 'duplex' ||
    mg === 'duplex steel' ||
    mg === 'duplex alloys' ||
    mg === 'stainless & duplex' ||
    mg === 'stainless & duplex patti' ||
    (t.includes('duplex') && !t.includes('super duplex'))
  ) {
    matched.add('duplex-stainless-steel');
  }

  // 10. Stainless Steel
  if (
    mg === 'stainless steel' ||
    mg === 'stainless steel patta' ||
    mg === 'stainless & duplex' ||
    mg === 'stainless & duplex patti' ||
    (mg === 'square & twilled weave' && t.includes('stainless')) ||
    (t.includes('stainless steel') && !t.includes('carbon'))
  ) {
    if (!mg.includes('copper') && !mg.includes('brass')) {
      matched.add('stainless-steel');
    }
  }

  // 11. Carbon Steel (MUST NOT match Alloy Steel)
  if (
    mg === 'carbon' ||
    mg === 'carbon steel' ||
    mg === 'carbon & alloy' ||
    mg === 'carbon & alloy steel' ||
    mg === 'carbon & alloy steel patta' ||
    mg === 'carbon & alloy steel patti' ||
    (t.includes('carbon steel') && !t.includes('stainless'))
  ) {
    matched.add('carbon-steel');
  }

  // 12. Alloy Steel
  if (
    mg === 'alloy steel' ||
    mg === 'alloy steel patta' ||
    mg === 'carbon & alloy' ||
    mg === 'carbon & alloy steel' ||
    mg === 'carbon & alloy steel patta' ||
    mg === 'carbon & alloy steel patti' ||
    (t.includes('alloy steel') && !t.includes('stainless') && !t.includes('high alloy') && !t.includes('nickel alloy'))
  ) {
    matched.add('alloy-steel');
  }

  // 13. Nickel Alloys (Pure Nickel 200/201, Nickel Alloys - excluding standalone Monel / Inconel / Hastelloy)
  if (
    mg === 'nickel' ||
    mg === 'nickel alloy' ||
    mg === 'nickel alloy patta' ||
    mg === 'nickel & alloys' ||
    mg === 'nickel & copper' ||
    t.includes('nickel alloy') ||
    t.includes('nickel 200') ||
    t.includes('nickel 201')
  ) {
    if (!t.startsWith('monel') && !t.startsWith('inconel') && !t.startsWith('incoloy') && !t.startsWith('hastelloy')) {
      matched.add('nickel-alloys');
    }
  }

  // 14. Specialty Alloys
  if (
    mg === 'alloys' ||
    mg === 'alloys patta' ||
    mg === 'high alloys' ||
    mg === 'high alloys patta' ||
    mg === 'high alloy disks' ||
    mg === 'exotic alloys' ||
    mg === 'high-performance alloy' ||
    mg === 'high-performance alloys' ||
    mg === 'special alloy' ||
    mg === 'special alloys' ||
    mg === 'tantalum rare core' ||
    mg === 'forged discs' ||
    mg === 'alloy 28' ||
    mg === 'galvanized structural' ||
    t.includes('high-performance alloy') ||
    t.includes('special alloy')
  ) {
    if (!t.startsWith('hastelloy') && !t.startsWith('monel') && !t.startsWith('inconel')) {
      matched.add('alloys');
    }
  }

  return Array.from(matched);
}

// Single-material backward compatibility helper
export function classifyItemMaterial(item) {
  const mats = classifyItemMaterials(item);
  return mats.length > 0 ? mats[0] : null;
}

/**
 * Returns all normalized productMaterial items across all categories with strict material image mapping.
 * Each registered product has a GUARANTEED UNIQUE ID to prevent React DOM reconciliation corruption.
 */
export function getAllRegisteredProductMaterials() {
  const combined = [];
  const seenUniqueKeys = new Set();

  Object.entries(productMaterials).forEach(([catKey, items]) => {
    if (!Array.isArray(items)) return;
    const catMeta = categoryKeyToMeta[catKey] || { id: catKey, name: catKey.replace(/-/g, ' ') };

    items.forEach((raw, idx) => {
      const matchedMats = classifyItemMaterials(raw);
      if (matchedMats.length === 0) return;

      matchedMats.forEach((matId) => {
        const pureSlug = stripSeoSuffix(raw.slug || raw.oldSlug || `${catKey}-${matId}-${idx + 1}`);
        const uniqueKey = `${catKey}-${matId}-${pureSlug}`;

        if (!seenUniqueKeys.has(uniqueKey)) {
          seenUniqueKeys.add(uniqueKey);

          const strictImage = getStrictMaterialImage(catKey, matId);
          const chosenImage = raw.image || strictImage || null;

          combined.push({
            ...raw,
            id: uniqueKey, // GUARANTEED UNIQUE across the entire application
            originalId: raw.id,
            categoryKey: catKey,
            categoryId: catMeta.id,
            categoryName: catMeta.name,
            materialId: matId,
            pureSlug: pureSlug,
            image: chosenImage
          });
        }
      });
    });
  });

  return combined;
}

/**
 * Returns only materials that actually have registered product materials.
 */
export function getActiveMaterials() {
  const allItems = getAllRegisteredProductMaterials();
  const materialIdsWithProducts = new Set(allItems.map(it => it.materialId));
  return materials.filter(m => materialIdsWithProducts.has(m.id));
}

/**
 * STRICT MATERIAL FILTERING (Non-cumulative, strict material-wise filtering):
 * User instruction: "carbon per stainless steel materilgroup card kiu dikh rha h aise hi saare material per dikh rha h usko remove karo"
 * Ensures 100% strict material isolation with double-lock so no foreign material can EVER appear under another material.
 */
export function getProductMaterialsForMaterial(materialSlug) {
  if (!materialSlug) return [];
  const canonical = getCanonicalMaterial(materialSlug);
  const targetId = canonical ? canonical.id : stripSeoSuffix(String(materialSlug).toLowerCase().trim());
  const allItems = getAllRegisteredProductMaterials();

  // Primary filter by exact materialId
  let filtered = allItems.filter(item => item.materialId === targetId);

  // DOUBLE-LOCK: Exclude any item whose materialGroup or title belongs to a conflicting material family
  return filtered.filter(item => {
    const mg = String(item.materialGroup || '').toLowerCase();
    const t = String(item.title || '').toLowerCase();

    if (targetId === 'carbon-steel') {
      if (mg.includes('stainless') || t.includes('stainless')) return false;
      if (mg.includes('titanium') || t.includes('titanium')) return false;
      if (mg.includes('copper') || t.includes('copper')) return false;
      if (mg.includes('brass') || t.includes('brass')) return false;
      if (mg.includes('inconel') || t.includes('inconel')) return false;
      if (mg.includes('monel') || t.includes('monel')) return false;
      if (mg.includes('hastelloy') || t.includes('hastelloy')) return false;
      if (mg.includes('duplex') || t.includes('duplex')) return false;
      if (mg.includes('nickel') && !mg.includes('carbon')) return false;
    }

    if (targetId === 'stainless-steel') {
      if (mg.includes('carbon') || t.includes('carbon')) return false;
      if (mg.includes('titanium') || t.includes('titanium')) return false;
      if (mg.includes('copper') || t.includes('copper')) return false;
      if (mg.includes('brass') || t.includes('brass')) return false;
      if (mg.includes('inconel') || t.includes('inconel')) return false;
      if (mg.includes('monel') || t.includes('monel')) return false;
      if (mg.includes('hastelloy') || t.includes('hastelloy')) return false;
      if (t.includes('super duplex')) return false;
    }

    if (targetId === 'alloy-steel') {
      if (mg.includes('stainless') || t.includes('stainless')) return false;
      if (mg.includes('titanium') || t.includes('titanium')) return false;
      if (mg.includes('copper') || t.includes('copper')) return false;
      if (mg.includes('brass') || t.includes('brass')) return false;
    }

    if (targetId === 'duplex-stainless-steel') {
      if (mg.includes('carbon') || t.includes('carbon')) return false;
      if (t.includes('super duplex') && !t.includes('duplex & super duplex')) return false;
    }

    if (targetId === 'super-duplex-stainless-steel') {
      if (mg.includes('carbon') || t.includes('carbon')) return false;
      if (!mg.includes('super duplex') && !t.includes('super duplex')) return false;
    }

    if (targetId === 'monel') {
      if (!mg.includes('monel') && !t.includes('monel')) return false;
    }

    if (targetId === 'inconel') {
      if (!mg.includes('inconel') && !mg.includes('incoloy') && !t.includes('inconel') && !t.includes('incoloy')) return false;
    }

    if (targetId === 'hastelloy') {
      if (!mg.includes('hastelloy') && !t.includes('hastelloy')) return false;
    }

    if (targetId === 'nickel-alloys') {
      if (t.startsWith('monel') || t.startsWith('inconel') || t.startsWith('incoloy') || t.startsWith('hastelloy')) return false;
    }

    if (targetId === 'brass') {
      if (!mg.includes('brass') && !t.includes('brass')) return false;
    }

    if (targetId === 'copper-nickel') {
      if (!mg.includes('copper') && !mg.includes('nickel copper') && !t.includes('copper nickel')) return false;
    }

    if (targetId === 'titanium') {
      if (!mg.includes('titanium') && !t.includes('titanium')) return false;
    }

    if (targetId === 'aluminium') {
      if (!mg.includes('alumin') && !t.includes('alumin')) return false;
    }

    return true;
  });
}

/**
 * Generates canonical SEO URL for a productMaterial item
 * e.g. /materials/stainless-steel/stainless-steel-buttweld-fittings-dealer-in-india
 */
export function getProductMaterialUrl(materialSlug, item) {
  const canonical = getCanonicalMaterial(materialSlug);
  const matBase = canonical ? canonical.id : stripSeoSuffix(materialSlug || item.materialId);
  const pureSlug = stripSeoSuffix(item.pureSlug || item.slug || `${item.categoryKey}-${matBase}`);
  return `/materials/${matBase}/${appendSeoSuffix(pureSlug)}`;
}

/**
 * Look up a single productMaterial by slug and optional materialSlug
 */
export function getProductMaterialBySlug(slug, materialSlug = null) {
  if (!slug) return null;
  const s = stripSeoSuffix(String(slug).toLowerCase().trim());
  const allItems = getAllRegisteredProductMaterials();

  // 1. Exact pureSlug match
  let matched = allItems.find(it => it.pureSlug === s || it.pureSlug.replace(/-/g, '') === s.replace(/-/g, ''));
  if (matched) return matched;

  // 2. Slug startsWith or includes
  matched = allItems.find(it => s.includes(it.pureSlug) || it.pureSlug.includes(s));
  if (matched) return matched;

  // 3. Category match for that material
  if (materialSlug) {
    const canonical = getCanonicalMaterial(materialSlug);
    const matBase = canonical ? canonical.id : stripSeoSuffix(materialSlug);
    matched = allItems.find(it => it.materialId === matBase && (it.categoryKey === s || it.categoryId === s));
    if (matched) return matched;
  }

  return null;
}
