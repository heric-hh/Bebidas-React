import { z } from "zod";

export const CategoriesAPIResponseSchema = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string(),
    })
  ),
});

export const SearchFilterSchema = z.object({
  ingredient: z.string(),
  category: z.string(),
});

export const RecipesAPIResponseSchema = z.object({
  drinks: z.array(
    z.object({
      idDrink: z.string(),
      strDrink: z.string(),
      strDrinkThumb: z.string(),
    })
  ),
});
