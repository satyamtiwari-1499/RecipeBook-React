import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../Context/RecipeContext";
import { toast } from "react-toastify";

const RecipeSingle = () => {

  const { id } = useParams();
  const Navigate = useNavigate();

  const { recipe, setRecipe } = useContext(recipecontext);

  const findRecipe = recipe.find((r) => r.id == id);

  const deleteHandler = ()=>{
    const filteredRec = recipe.filter((r)=>r.id != id)
    setRecipe(filteredRec)
    localStorage.setItem("recipe",JSON.stringify(filteredRec))
    toast.success("Recipe Deleted Sucessfully")
    Navigate("/recipelist")
  }
  
  


  return (
    <div className="min-h-screen bg-white py-10 px-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Recipe Details
      </h1>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl w-full items-center justify-center">
        <div className="w-full lg:w-1/2">
          <img
            src={findRecipe.ImgURL}
            alt={findRecipe.recipeName}
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-blue-800">
            {findRecipe.recipeName}
          </h2>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Ingredients:</span>{" "}
            {findRecipe.Ingredients}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Category:</span>{" "}
            {findRecipe.category}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Chef:</span> {findRecipe.chefName}
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            {findRecipe.Descr}
          </p>

          <div className="flex gap-6 mt-4">
          <Link to={`/updaterecipe/${findRecipe.id}`} 
          className="bg-green-800 text-white px-4 py-2 rounded ">
          Update</Link>

            <button
              onClick={deleteHandler}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeSingle;
