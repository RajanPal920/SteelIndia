// src/pages/MaterialSubRoute.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import GradeDetail from './GradeDetail';
import ProductMaterialDetail from './ProductMaterialDetail';
import { getGradeBySlug } from '../data/gradesData';
import { getProductMaterialBySlug } from '../data/productMaterialRegistry';

/**
 * Smart dispatcher that routes /materials/:materialSlug/:slug
 * to either GradeDetail (for alloy grades like ss-304, astm-a106-grade-b)
 * or ProductMaterialDetail (for product items from productMaterials)
 */
export default function MaterialSubRoute() {
  const { materialSlug, material, gradeSlug, slug, productSlug } = useParams();
  const mSlug = materialSlug || material;
  const targetSlug = gradeSlug || productSlug || slug;

  // 1. Check if it's a Grade
  const isGrade = getGradeBySlug(targetSlug, mSlug);
  if (isGrade) {
    return <GradeDetail />;
  }

  // 2. Check if it's a Product Material
  const isProduct = getProductMaterialBySlug(targetSlug, mSlug);
  if (isProduct) {
    return <ProductMaterialDetail />;
  }

  // Fallback: GradeDetail will handle 404 / Not Found state
  return <GradeDetail />;
}
