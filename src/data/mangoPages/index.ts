import type { MangoPageBusiness } from "../../types/mangoPage";
import { arielAutosYMas } from "./arielAutosYMas";
import { demoCafe } from "./demoCafe";

export const mangoPages: MangoPageBusiness[] = [
  arielAutosYMas,
  demoCafe
];

export const mangoPagesBySlug = mangoPages.reduce(
  (acc, business) => {
    acc[business.slug] = business;
    return acc;
  },
  {} as Record<string, MangoPageBusiness>,
);