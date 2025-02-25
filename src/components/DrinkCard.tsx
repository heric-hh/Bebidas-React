import { useAppStore } from "../stores/useAppStore";
import { Drink } from "../types";
type DrinkCardProps = {
  drink: Drink;
};

export default function DrinkCard({ drink }: DrinkCardProps) {
  const selectRecipe = useAppStore((state) => state.selectRecipe);
  return (
    <div className="shadow-lg">
      <div className="overflow-hidden">
        <img
          src={drink.strDrinkThumb}
          alt={"Imagen de " + drink.strDrink}
          className="hover:scale-110 transition-transform hover:rotate-2 rounded-md"
        />
      </div>
      <div className="p-5">
        <h2 className="text-2xl truncate text-white">{drink.strDrink}</h2>
        <button
          type="button"
          className="bg-primary hover:bg-green-800 transition-colors mt-5 w-full p-3 font-bold text-white text-lg rounded-md"
          onClick={() => selectRecipe(drink.idDrink)}
        >
          Ver Receta
        </button>
      </div>
    </div>
  );
}
