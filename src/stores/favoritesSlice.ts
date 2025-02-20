import { StateCreator } from "zustand";
import { Recipe } from "../types";
import {
  createNotificationSlice,
  NotificationSliceType,
} from "./notificationSlice";
// import { set } from "zod";

export type FavoritesSliceType = {
  favorites: Recipe[];
  addFavorites: (recipe: Recipe) => void;
  recipeExist: (id: Recipe["idDrink"]) => boolean;
  loadFavorites: () => void;
};

export const createFavoritesSlice: StateCreator<
  FavoritesSliceType & NotificationSliceType,
  [],
  [],
  FavoritesSliceType
> = (set, get, api) => ({
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
      createNotificationSlice(set, get, api).showNotification({
        text: "Receta eliminada de favoritos",
        error: true,
      });
    } else {
      set({
        favorites: [...get().favorites, recipe],
      });
      createNotificationSlice(set, get, api).showNotification({
        text: "Se agregó a favoritos",
        error: false,
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
