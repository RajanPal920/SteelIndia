// src/data/productNavigationData.js
import { products } from './products.js';
import { materials } from './materials.js';
import productMaterials from './productMaterials/index.js';

export { products, materials };

// Natural SEO Suffixes requested by user (cyclically and deterministically rotated in content & route slugs)
export const SEO_KEYWORDS = [
  { text: "Manufacturer in India", slug: "manufacturer-in-india" },
  { text: "Supplier in India", slug: "supplier-in-india" },
  { text: "Stockist in India", slug: "stockist-in-india" },
  { text: "Dealer in India", slug: "dealer-in-india" },
  { text: "Exporter in India", slug: "exporter-in-india" },
  { text: "Industrial Products in India", slug: "industrial-products-in-india" },
  { text: "Wholesale Supplier in India", slug: "wholesale-supplier-in-india" }
];

export const SEO_SUFFIXES = SEO_KEYWORDS.map(k => k.text);
export const SEO_SLUG_SUFFIXES = SEO_KEYWORDS.map(k => k.slug);

/**
 * Strips any known SEO keyword suffix from a slug to extract the pure base identifier
 * e.g. "super-duplex-stainless-steel-dealer-in-india" -> "super-duplex-stainless-steel"
 *      "elbow-90degree-stockist-in-india" -> "elbow-90degree"
 *      "butt-weld-fittings-wholesale-supplier-in-india" -> "butt-weld-fittings"
 *      "304-304l-stockist-in-india" -> "304-304l"
 */
export function stripSeoSuffix(slug) {
  if (!slug) return '';
  let s = String(slug).toLowerCase().trim();
  const allSuffixes = [
    '-wholesale-supplier-in-india',
    '-industrial-products-in-india',
    '-manufacturer-in-india',
    '-manufacture-in-india',
    '-supplier-in-india',
    '-stockist-in-india',
    '-dealer-in-india',
    '-exporter-in-india',
    '-manufacturer-in-mumbai',
    '-supplier-in-mumbai',
    '-stockist-in-mumbai',
    '-manufacturers-in-india',
    '-suppliers-in-india',
    '-stockists-in-india',
    '-dealers-in-india',
    '-exporters-in-india'
  ];
  for (const suf of allSuffixes) {
    if (s.endsWith(suf)) {
      return s.slice(0, -suf.length);
    }
  }
  return s;
}

/**
 * Checks if a given slug already has a recognized SEO suffix
 */
export function hasSeoSuffix(slug) {
  if (!slug) return false;
  const s = String(slug).toLowerCase().trim();
  return SEO_SLUG_SUFFIXES.some(suf => s.endsWith(`-${suf}`));
}

/**
 * Returns the rotated SEO keyword object { text, slug } for an identifier
 */
export function getSeoKeyword(identifier, offset = 0) {
  if (!identifier) return SEO_KEYWORDS[0];
  const s = stripSeoSuffix(identifier);
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    hash = (hash << 5) - hash + s.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash + offset) % SEO_KEYWORDS.length;
  return SEO_KEYWORDS[index];
}

/**
 * Returns text suffix: e.g. "Stockist in India"
 */
export function getSeoSuffix(identifier, offset = 0) {
  return getSeoKeyword(identifier, offset).text;
}

/**
 * Returns slug suffix: e.g. "stockist-in-india"
 */
export function getSeoSlugSuffix(identifier, offset = 0) {
  return getSeoKeyword(identifier, offset).slug;
}

/**
 * Attaches the rotated SEO suffix to a base slug
 * e.g. "super-duplex-stainless-steel" -> "super-duplex-stainless-steel-dealer-in-india"
 */
export function appendSeoSuffix(baseSlug, offset = 0) {
  const base = stripSeoSuffix(baseSlug);
  return `${base}-${getSeoSlugSuffix(base, offset)}`;
}

/**
 * Canonical URL generators with rotated SEO suffixes:
 */
export function getCategoryUrl(categorySlug) {
  const base = stripSeoSuffix(categorySlug);
  return `/products/${appendSeoSuffix(base)}`;
}

export function getProductTypeUrl(categorySlug, typeSlug) {
  const catBase = stripSeoSuffix(categorySlug);
  const typeBase = stripSeoSuffix(typeSlug);
  return `/products/${catBase}/${appendSeoSuffix(typeBase)}`;
}

export function getMaterialUrl(materialSlug) {
  const base = stripSeoSuffix(materialSlug);
  return `/materials/${appendSeoSuffix(base)}`;
}

export function getTypeMaterialUrl(categorySlug, typeSlug, materialSlug) {
  const catBase = stripSeoSuffix(categorySlug);
  const typeBase = stripSeoSuffix(typeSlug);
  const matBase = stripSeoSuffix(materialSlug);
  return `/products/${catBase}/${appendSeoSuffix(typeBase)}/materials/${appendSeoSuffix(matBase)}`;
}

/**
 * Returns a complete natural SEO title
 */
export function getSeoTitle(primaryName, identifier, context = '') {
  const suffix = getSeoSuffix(identifier);
  if (context) {
    return `${primaryName} - ${suffix} | ${context} | Steel India Co.`;
  }
  return `${primaryName} ${suffix} | Steel India Co.`;
}

/**
 * Returns a complete natural SEO description
 */
export function getSeoDescription(primaryName, identifier, details = '') {
  const suffix = getSeoSuffix(identifier, 1);
  const detailStr = details ? `${details} ` : '';
  return `Leading ${suffix.toLowerCase()} of ${primaryName}. ${detailStr}Supplied by Steel India Co. (Chennai) Pvt. Ltd. with complete EN 10204 3.1 Mill Test Certification and pan-India dispatch.`;
}

// Mapping from product category ID to productMaterials key
export const categoryToPmKey = {
  'butt-weld-fittings': 'buttweld-fittings',
  'forged-fittings': 'forged-fittings',
  'pipes-tubes': 'pipes-tubes',
  'sheets-plates': 'sheets-plates',
  'flanges': 'flanges',
  'fasteners': 'fasteners',
  'rods-bars': 'round-bars',
  'wires': 'wires',
  'hose-pipes': 'hose-pipe',
  'perforated-sheets': 'perforated-sheet',
  'ferrule-fittings': 'ferrule-fitting',
  'circles': 'circles',
  'patta-patti': 'patta-patti',
  'coils': 'coils',
  'rings': 'rings',
  'valves': 'valves',
  'chequered-plates': 'chequered-plates'
};

/**
 * Matches any material string, ID, or grade to a canonical material object from materials.js
 */
export function getCanonicalMaterial(strOrSlug) {
  if (!strOrSlug) return null;
  const s = stripSeoSuffix(String(strOrSlug).toLowerCase().trim());

  // 1. Direct id match
  const byId = materials.find(m => m.id === s || m.id.replace(/-/g, '') === s.replace(/-/g, ''));
  if (byId) return byId;

  // 2. Keyword & Grade matching
  const cleaned = s.replace(/[-_]/g, ' ');

  if (cleaned.includes('super duplex') || cleaned.includes('2507') || cleaned.includes('f53') || cleaned.includes('f55') || cleaned.includes('s32750')) {
    return materials.find(m => m.id === 'super-duplex-stainless-steel');
  }
  if (cleaned.includes('duplex') || cleaned.includes('2205') || cleaned.includes('f51') || cleaned.includes('s31803') || cleaned.includes('s32205')) {
    return materials.find(m => m.id === 'duplex-stainless-steel');
  }
  if (
    cleaned.includes('stainless') ||
    cleaned.includes('ss ') ||
    cleaned.includes('304') ||
    cleaned.includes('316') ||
    cleaned.includes('321') ||
    cleaned.includes('310') ||
    cleaned.includes('347') ||
    cleaned.includes('904l') ||
    cleaned.includes('410') ||
    cleaned.includes('420') ||
    cleaned.includes('430') ||
    cleaned.includes('cf8') ||
    cleaned.includes('cf3m') ||
    cleaned.includes('f304') ||
    cleaned.includes('f316')
  ) {
    return materials.find(m => m.id === 'stainless-steel');
  }
  if (
    cleaned.includes('mild steel') ||
    cleaned.includes('is 2062') ||
    cleaned.includes('a36') ||
    cleaned.includes('e250') ||
    cleaned.includes('e350')
  ) {
    return materials.find(m => m.id === 'carbon-steel');
  }
  if (
    cleaned.includes('carbon') ||
    cleaned.includes('a106') ||
    cleaned.includes('a105') ||
    cleaned.includes('a53') ||
    cleaned.includes('a234 wpb') ||
    cleaned.includes('a234 wpc') ||
    cleaned.includes('wcb') ||
    cleaned.includes('wcc') ||
    cleaned.includes('en8') ||
    cleaned.includes('en9') ||
    cleaned.includes('1018') ||
    cleaned.includes('1045') ||
    cleaned.includes('c45') ||
    cleaned.includes('a516') ||
    cleaned.includes('a350') ||
    cleaned.includes('crca')
  ) {
    return materials.find(m => m.id === 'carbon-steel');
  }
  if (
    cleaned.includes('alloy steel') ||
    cleaned.includes('p11') ||
    cleaned.includes('p22') ||
    cleaned.includes('p91') ||
    cleaned.includes('p92') ||
    cleaned.includes('p5') ||
    cleaned.includes('p9') ||
    cleaned.includes('wp11') ||
    cleaned.includes('wp22') ||
    cleaned.includes('wp91') ||
    cleaned.includes('f11') ||
    cleaned.includes('f22') ||
    cleaned.includes('f91') ||
    cleaned.includes('wc6') ||
    cleaned.includes('wc9') ||
    cleaned.includes('4140') ||
    cleaned.includes('4340') ||
    cleaned.includes('en19') ||
    cleaned.includes('en24') ||
    cleaned.includes('b7') ||
    cleaned.includes('b16') ||
    cleaned.includes('l7')
  ) {
    return materials.find(m => m.id === 'alloy-steel');
  }
  if (cleaned.includes('monel') || cleaned.includes('n04400') || cleaned.includes('k500')) {
    return materials.find(m => m.id === 'monel');
  }
  if (
    cleaned.includes('inconel') ||
    cleaned.includes('incoloy') ||
    cleaned.includes('600') ||
    cleaned.includes('625') ||
    cleaned.includes('718') ||
    cleaned.includes('800') ||
    cleaned.includes('825')
  ) {
    return materials.find(m => m.id === 'inconel');
  }
  if (
    cleaned.includes('hastelloy') ||
    cleaned.includes('c276') ||
    cleaned.includes('c22') ||
    cleaned.includes('b2') ||
    cleaned.includes('b3')
  ) {
    return materials.find(m => m.id === 'hastelloy');
  }
  if (cleaned.includes('titanium') || cleaned.includes('ti 6al') || cleaned.includes('cp ti')) {
    return materials.find(m => m.id === 'titanium');
  }
  if (
    cleaned.includes('copper nickel') ||
    cleaned.includes('cupro') ||
    cleaned.includes('cuni') ||
    cleaned.includes('90/10') ||
    cleaned.includes('70/30') ||
    cleaned.includes('c70600') ||
    cleaned.includes('c71500')
  ) {
    return materials.find(m => m.id === 'copper-nickel');
  }
  if (
    cleaned.includes('brass') ||
    cleaned.includes('c46400') ||
    cleaned.includes('c26000') ||
    cleaned.includes('c67500')
  ) {
    return materials.find(m => m.id === 'brass');
  }
  if (
    cleaned.includes('aluminium') ||
    cleaned.includes('aluminum') ||
    cleaned.includes('5083') ||
    cleaned.includes('6061') ||
    cleaned.includes('6082') ||
    cleaned.includes('7075')
  ) {
    return materials.find(m => m.id === 'aluminium');
  }
  if (
    cleaned.includes('nickel') ||
    cleaned.includes('nickel alloy') ||
    cleaned.includes('n02200') ||
    cleaned.includes('n02201')
  ) {
    return materials.find(m => m.id === 'nickel-alloys');
  }
  if (
    cleaned.includes('high alloy') ||
    cleaned.includes('alloys') ||
    cleaned.includes('special alloy') ||
    cleaned.includes('specialty alloy') ||
    cleaned.includes('nimonic') ||
    cleaned.includes('nitronic') ||
    cleaned.includes('nichrome') ||
    cleaned.includes('nilo') ||
    cleaned.includes('zirconium') ||
    cleaned.includes('tantalum') ||
    cleaned.includes('alloy 20') ||
    cleaned.includes('smo 254')
  ) {
    return materials.find(m => m.id === 'alloys');
  }
  if (
    cleaned.includes('alloys') ||
    cleaned.includes('special alloy') ||
    cleaned.includes('specialty alloy') ||
    cleaned.includes('other-non-ferrous')
  ) {
    return materials.find(m => m.id === 'alloys');
  }
  if (
    cleaned.includes('nickel') ||
    cleaned.includes('nimonic') ||
    cleaned.includes('nichrome') ||
    cleaned.includes('n02200') ||
    cleaned.includes('n02201')
  ) {
    return materials.find(m => m.id === 'nickel-alloys');
  }

  return materials.find(m => m.id === 'alloys') || materials[0];
}

/**
 * Gets category by id or slug
 */
export function getCategory(categorySlug) {
  if (!categorySlug) return null;
  const s = stripSeoSuffix(String(categorySlug).toLowerCase().trim());
  return (
    products.find(p => p.id === s || p.id.replace(/-/g, '') === s.replace(/-/g, '')) || null
  );
}

/**
 * Gets product type with flexible slug matching (e.g. elbow-90-degree -> elbow-90)
 */
export function getProductType(categorySlug, typeSlug) {
  const category = getCategory(categorySlug);
  if (!category || !category.types) return null;
  const s = stripSeoSuffix(String(typeSlug).toLowerCase().trim());

  // 1. Exact ID match
  let t = category.types.find(x => x.id === s);
  if (t) return t;

  // 2. Slug alias matching (e.g. elbow-90-degree -> elbow-90)
  const normS = s
    .replace(/-degree/g, '')
    .replace(/-deg/g, '')
    .replace(/-type/g, '');

  t = category.types.find(
    x => x.id === normS || x.id.replace(/-/g, '') === normS.replace(/-/g, '')
  );
  if (t) return t;

  // 3. Prefix/Contains matching
  t = category.types.find(x => normS.startsWith(x.id) || x.id.startsWith(normS));
  return t || null;
}

/**
 * Returns canonical materials supported by a specific product type
 */
export function getTypeMaterials(categorySlug, typeSlug) {
  const category = getCategory(categorySlug);
  if (!category) return [];
  const type = getProductType(categorySlug, typeSlug);

  const rawList =
    type && type.materials && type.materials.length > 0
      ? type.materials
      : category.materials || [];

  const matched = new Map();

  rawList.forEach(rm => {
    const mat = getCanonicalMaterial(rm);
    if (mat && !matched.has(mat.id)) {
      matched.set(mat.id, mat);
    }
  });

  // If no materials matched, fallback to category materials
  if (matched.size === 0 && category.materials) {
    category.materials.forEach(rm => {
      const mat = getCanonicalMaterial(rm);
      if (mat && !matched.has(mat.id)) {
        matched.set(mat.id, mat);
      }
    });
  }

  return Array.from(matched.values());
}

/**
 * Returns full combination data for /products/:categorySlug/:typeSlug/materials/:materialSlug
 */
export function getTypeMaterialCombination(categorySlug, typeSlug, materialSlug) {
  const category = getCategory(categorySlug);
  if (!category) return null;

  const type = getProductType(categorySlug, typeSlug);
  if (!type) return null;

  const material = getCanonicalMaterial(materialSlug);
  if (!material) return null;

  // Check if type supports this material
  const availableMaterials = getTypeMaterials(categorySlug, type.id);
  const isSupported = availableMaterials.some(m => m.id === material.id);

  // Look up material data from productMaterials if available
  const pmKey = categoryToPmKey[category.id];
  const pmDataList = pmKey ? productMaterials[pmKey] : null;

  let pmEntry = null;
  if (Array.isArray(pmDataList)) {
    pmEntry = pmDataList.find(item => {
      const groupMatch = getCanonicalMaterial(item.materialGroup || item.title);
      return groupMatch && groupMatch.id === material.id;
    });
  }

  // Combine grades
  let grades = [];
  if (pmEntry && pmEntry.grades && pmEntry.grades.length > 0) {
    grades = pmEntry.grades;
  } else if (material.grades && material.grades.length > 0) {
    grades = material.grades;
  }

  // Combine technical specifications
  const specs = {
    ...(type.specs || {}),
    ...(pmEntry?.technicalSpecs || {})
  };

  // Combine standards compliance
  const standardsCompliance = pmEntry?.standardsCompliance || [
    type.specs?.standards || category.specs?.standards || 'ASME / ASTM Standards'
  ];

  // Best image (type specific or material specific)
  const image = pmEntry?.image || type.image || category.image;

  return {
    category,
    type,
    material,
    isSupported,
    availableMaterials,
    grades,
    specs,
    standardsCompliance,
    image,
    applications: pmEntry?.industryApplications || type.applications || category.applications,
    features: pmEntry?.features || type.features || category.features,
    overview: pmEntry?.overview || type.longDesc || category.longDesc
  };
}

/**
 * Material-wise product data filtering (Requirement 7)
 * Returns only categories and product types supporting the specified material
 */
export function getFilteredProductsForMaterial(materialSlug) {
  const targetMat = getCanonicalMaterial(materialSlug);
  if (!targetMat) return [];

  const results = [];

  products.forEach(category => {
    if (!category.types || category.types.length === 0) return;

    // Filter only types that support this material
    const matchingTypes = category.types.filter(type => {
      const typeMats = getTypeMaterials(category.id, type.id);
      return typeMats.some(m => m.id === targetMat.id);
    });

    if (matchingTypes.length > 0) {
      results.push({
        category,
        types: matchingTypes
      });
    }
  });

  return results;
}

