import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../Context/RecipeContext";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const RecipeHome = () => {
  const { recipe, setRecipe } = useContext(recipecontext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { error },
  } = useForm();

  const submitHandler = (Data) => {
    Data.id = nanoid();
    setRecipe([...recipe, Data]);
    localStorage.setItem("recipe", JSON.stringify([...recipe, Data]));
    reset();
    navigate("/recipelist");
  };

  return (
    <div className="container bg-[url(https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center min-h-screen max-w-screen flex justify-center px-4 sm:px-10">
      <div className="formContainer bg-transparent text-black pt-10 w-full max-w-3xl">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="border-2 bg-transparent rounded  outline-0 p-6 flex flex-col"
        >
          <h1 className="text-center font-black text-3xl mb-6">Create Own Recipe</h1>
          <input
            className="border-b pl-4 mb-6"
            type="text"
            {...register("recipeName")}
            placeholder="Recipe Title"
          />
          <input
            className="border-b pl-4 mb-6"
            type="text"
            {...register("Ingredients")}
            placeholder="Ingredients"
          />
          <textarea
            className="border-b pl-4 mb-6"
            {...register("Descr")}
            placeholder="Description"
          ></textarea>
          <input
            className="border-b pl-4 mb-6"
            type="url"
            {...register("ImgURL")}
            placeholder="Recipe Image"
          />
          <select
            name="Category"
            {...register("category")}
            className="border-b pl-4 mb-6"
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Launch">Launch</option>
            <option value="Dinner">Dinner</option>
          </select>
          <input
            className="border-b pl-4 mb-6"
            type="text"
            {...register("chefName")}
            placeholder="Chef of Recipe"
          />
          <button className="bg-blue-700 text-white rounded py-2 mt-4">
            Create Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecipeHome;
