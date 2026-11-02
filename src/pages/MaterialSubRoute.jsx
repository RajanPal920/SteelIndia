// src/pages/MaterialSubRoute.jsx
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import GradeDetail from './GradeDetail';
import ProductMaterialDetail from './ProductMaterialDetail';
import { getGradeBySlug } from '../data/gradesData';
import { getProductMaterialBySlug } from '../data/productMaterialRegistry';

/**
 * Smart dispatcher that routes /materials/:materialSlug/:slug
 * to either GradeDetail (for alloy grades like 304, 316, 2205)
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

  // Fallback: If neither, try GradeDetail which handles 404/redirect to material page
  return <GradeDetail />;
}

