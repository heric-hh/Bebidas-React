import { StateCreator } from "zustand";
import { Recipe } from "../types";
// import { set } from "zod";

export type FavoritesSliceType = {
  favorites: Recipe[];
  addFavorites: (recipe: Recipe) => void;
  recipeExist: (id: Recipe["idDrink"]) => boolean;
  loadFavorites: () => void;
};

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (
  set,
  get
) => ({
  favorites: [],
  addFavorites: (recipe) => {
    if (get().recipeExist(recipe.idDrink)) {
      set({
        favorites: [
          ...get().favorites.filter(
            (drink) => drink.idDrink !== recipe.idDrink
          ),
        ],
      });
    } else {
      set({
        favorites: [...get().favorites, recipe],
      });
    }
    localStorage.setItem("favorites", JSON.stringify(get().favorites));
  },
  recipeExist: (id) => {
    return get().favorites.some((drink) => drink.idDrink === id);
  },
  loadFavorites: () => {
    const dataStorage = localStorage.getItem("favorites");
    set({
      favorites: dataStorage ? JSON.parse(dataStorage) : [],
    });
  },
});
