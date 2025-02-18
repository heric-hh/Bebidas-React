import { StateCreator } from "zustand";
import {
  getCategories,
  getRecipeById,
  getRecipes,
} from "../services/RecipeServices";
import type {
  Categories,
  Drink,
  Recipe,
  Recipes,
  SearchFilter,
} from "../types";

export type RecipesSliceType = {
  categories: Categories;
  recipes: Recipes;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink["idDrink"]) => Promise<void>;
  selectedRecipe: Recipe;
  closeModal: () => void;
};

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: [],
  },
  recipes: {
    drinks: [],
  },
  fetchCategories: async () => {
    const categories = await getCategories();
    set({ categories });
  },
  searchRecipes: async (filters) => {
    const recipes = await getRecipes(filters);
    set({ recipes });
  },
  selectRecipe: async (id) => {
    const selectedRecipe = await getRecipeById(id);
    set({
      selectedRecipe,
      modal: true,
    });
  },
  selectedRecipe: {} as Recipe,
  modal: false,
  closeModal: () => set({ modal: false }),
});
