import React, { useContext, useEffect, useRef, useState } from "react";
import { recipecontext } from "../Context/RecipeContext";
import { Link } from "react-router-dom";
import { FaHeart, FaSearch, FaStar } from "react-icons/fa";

const RecipeList = () => {
  const { recipe, favorite, setFavorite, searchTerm, setSearchTerm } = useContext(recipecontext);
  const inputRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") inputRef.current?.focus();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredRecipe = recipe.filter((r) =>
    r.recipeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFavorite = (item) => {
    const isAlreadyFav = favorite.some((fav) => fav.id === item.id);
    if (isAlreadyFav) {
      setFavorite(favorite.filter((fav) => fav.id !== item.id));
    } else {
      setFavorite([...favorite, item]);
    }
  };

  return (
    <div className="min-h-screen w-screen px-4 sm:px-10 pt-24 flex flex-wrap justify-center gap-6 relative">
      <div className="w-full flex flex-col md:flex-row items-center justify-between mb-8">
        <h1 className="text-4xl font-black text-black text-center md:text-left flex-1">
          Recipe List
        </h1>
        <label className="flex border rounded-2xl items-center px-3 mt-4 md:mt-0 max-w-md w-full">
          <input
            ref={inputRef}
            type="text"
            name="searchBox"
            className="outline-none text-xl flex-grow py-2 rounded-l-2xl"
            placeholder="Search Recipes"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch size={20} />
        </label>
      </div>

      {filteredRecipe.map((elem) => (
        <div
          onDoubleClickCapture={() => toggleFavorite(elem)}
          key={elem.id}
          className="w-[290px] h-[360px] border rounded-2xl shadow-2xl overflow-hidden text-center relative flex flex-col"
        >
          <img
            src={elem.ImgURL}
            alt={elem.recipeName}
            className="w-full h-48 object-cover rounded-t-2xl hover:scale-90 transition-transform duration-300"
          />
          <div className="p-4 flex-grow">
            <h1 className="font-bold text-xl mb-2">Recipe - {elem.recipeName}</h1>
            <h2 className="font-bold text-lg">Category - {elem.category}</h2>
            <h2 className="font-bold text-lg">Chef - {elem.chefName}</h2>
          </div>
          <button className="absolute top-0 left-0 bg-emerald-300 border border-emerald-400 px-4 py-1 rounded text-white text-xl">
            {favorite.some((fav) => fav.id === elem.id) ? (
              <FaStar color="red" size={30} />
            ) : (
              <FaStar color="white" size={30} />
            )}
          </button>
          <Link
            to={`/recipesingle/${elem.id}`}
            className="absolute bottom-0 left-0 w-full bg-red-800 active:bg-black rounded-b-2xl py-1 text-white text-xl"
          >
            Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
