import { StateCreator } from "zustand";
import { getCategories } from "../services/RecipeServices";

type Category = {};

export type RecipesSliceType = {
  categories: Category[];
  fetchCategories: () => Promise<void>;
};

export const createRecipesSlice: StateCreator<RecipesSliceType> = () => ({
  categories: [],
  fetchCategories: async () => {
    getCategories();
  },
});
