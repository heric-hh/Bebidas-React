import z from "zod";
import {
  CategoriesAPIResponseSchema,
  RecipesAPIResponseSchema,
  SearchFilterSchema,
} from "../utils/recipes-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>;
export type Recipes = z.infer<typeof RecipesAPIResponseSchema>;
