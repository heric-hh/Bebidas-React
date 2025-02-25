import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);
  const [searchFilters, setSearchFilters] = useState({
    ingredient: "",
    category: "",
  });

  function handleChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(searchFilters).includes("")) {
      useAppStore.setState({
        notification: {
          show: true,
          text: "Todos los campos son obligatorios",
          error: true,
        },
      });
      return;
    }
    // Consultar las recetas
    searchRecipes(searchFilters);
  };

  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const categories = useAppStore((state) => state.categories);
  const searchRecipes = useAppStore((state) => state.searchRecipes);

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <header className="flex w-100 justify-center h-screen">
        <div className="bg-primary w-1/2 flex justify-center text-white">
          <div className="flex flex-col justify-between">
            <h2 className="font-bold text-8xl text-left mx-8 my-2 uppercase tracking-tighter">
              The Cocktail DB: Busca tu receta favorita
            </h2>
            <nav className="flex gap-4 mx-8 py-8">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-green-300 uppercase" : "text-white uppercase"
                }
                to="/"
              >
                Inicio
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-green-300 uppercase" : "text-white uppercase"
                }
                to="/favoritos/"
              >
                Favoritos
              </NavLink>
            </nav>
          </div>
        </div>
        <div className="bg-black w-1/2 h-screen">
          <img src="./header.jpg" alt="header" className="object-fill h-full" />
        </div>
      </header>
      {isHome && (
        <div className="flex justify-center px-10 bg-black">
          <form
            className=" bg-primary my-32 p-10 rounded-lg shadow space-y-6 w-1/2"
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Nombre o Ingredientes
              </label>
              <input
                id="ingredient"
                type="text"
                name="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none"
                placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila Café"
                value={searchFilters.ingredient}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="category"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Categoría
              </label>
              <select
                id="category"
                name="category"
                className="p-3 w-full rounded-lg focus:outline-none"
                value={searchFilters.category}
                onChange={handleChange}
              >
                <option value="">- Seleccione -</option>
                {categories.drinks.map((category) => (
                  <option
                    key={category.strCategory}
                    value={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
              value="Buscar Recetas"
            />
          </form>
        </div>
      )}
    </>
  );
}
