import z from "zod";
import {
  CategoriesAPIResponseSchema,
  DrinkSchema,
  RecipeAPIResponseSchema,
  RecipesAPIResponseSchema,
  SearchFilterSchema,
} from "../utils/recipes-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>;
export type Recipes = z.infer<typeof RecipesAPIResponseSchema>;
export type Drink = z.infer<typeof DrinkSchema>;
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>;
