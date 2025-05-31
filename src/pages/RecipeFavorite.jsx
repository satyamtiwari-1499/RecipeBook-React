import React, { useContext } from 'react'
import { recipecontext } from '../Context/RecipeContext';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const RecipeFavorite = () => {
    

  const { recipe, setRecipe, favorite, setFavorite } = useContext(recipecontext);

  return (
    <div className="containerDetail min-h-screen w-screen relative flex flex-wrap items-start justify-center gap-4 pt-30 px-4 sm:px-8">
      <h1 className="absolute top-10 flex gap-5 left-[17%] sm:left-[40%] text-black font-black text-3xl sm:text-4xl">
        Your Favourite <FaStar color='red'/>
      </h1>
      {favorite.map((elem) => (
        <div
          key={elem.id}
          className="h-[360px] w-[90vw] border  max-w-[300px] sm:w-[300px] relative  overflow-hidden shadow-2xl text-center rounded-2xl"
        >
          <img
            className="h-54 w-full rounded-t-2xl hover:scale-90 object-cover"
            src={elem.ImgURL}
            alt=""
          />
          <h1 className="text-lg sm:text-xl font-bold mt-5">Recipe - {elem.recipeName}</h1>
          <h1 className="text-lg sm:text-xl font-bold">Category - {elem.category}</h1>
          <h1 className="text-lg sm:text-xl font-bold">Chef - {elem.chefName}</h1>
           <Link
            to={`/recipesingle/${elem.id}`}
            className="bg-red-800 active:bg-black absolute left-0 bottom-0 w-full px-4 py-1 rounded text-white text-xl"
          >
            Details
          </Link>
        </div>
        
      ))}
    </div>
  )
}

export default RecipeFavorite
