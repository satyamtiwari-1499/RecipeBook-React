import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../Context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateRecipe = () => {
  const { id } = useParams();
  const { recipe, setRecipe } = useContext(recipecontext);

  const Rec = recipe.find((r) => r.id == id);

  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ImgURL: Rec.ImgURL,
      recipeName: Rec.recipeName,
      Ingredients: Rec.Ingredients,
      Descr: Rec.Descr,
      chefName: Rec.chefName,
      category: Rec.category,  
    },
  });

  const submitHandler = (updatedData) => {
    const i = recipe.findIndex((r) => r.id == id);
    const copyRecipe = [...recipe];
    copyRecipe[i] = { ...Rec, ...updatedData };
    setRecipe(copyRecipe);
    localStorage.setItem("recipe", JSON.stringify(copyRecipe));
    reset();
    toast.success("Recipe Updated Successfully");
    Navigate("/recipelist");
  };

  return (
    <div className="container min-h-screen max-w-screen flex justify-center px-4 sm:px-10">
      <div className="formContainer h-full w-full max-w-3xl bg-white text-black pt-10 flex items-start justify-center">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="border-2 w-full bg-transparent rounded p-6 flex flex-col"
        >
          <h1 className="text-center font-black text-3xl mb-6">Update Recipe</h1>
          <input
            className="border-b pl-4"
            type="text"
            {...register("recipeName")}
            placeholder="Recipe Title"
          />
          <br />
          <input
            className="border-b pl-4"
            type="text"
            {...register("Ingredients")}
            placeholder="Ingredients"
          />
          <br />
          <textarea
            className="border-b pl-4"
            {...register("Descr")}
            placeholder="Description"
          ></textarea>
          <br />
          <input
            className="border-b pl-4"
            type="url"
            {...register("ImgURL")}
            placeholder="Recipe Image"
          />
          <br />
          <select
            name="Category"
            {...register("category")}
            className="border-b pl-4"
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Launch">Launch</option>
            <option value="Dinner">Dinner</option>
          </select>
          <br />
          <input
            className="border-b pl-4"
            type="text"
            {...register("chefName")}
            placeholder="Chef of Recipe"
          />
          <button className="bg-green-700 text-white rounded mt-4 py-2">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateRecipe;
