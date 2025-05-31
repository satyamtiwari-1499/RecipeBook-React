import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const recipecontext = createContext();

const RecipeContext = (props) => {
  const defaultRecipes = [
    {
      id: "1",
      recipeName: "Chana Masala",
      Descr: "Spicy and tangy chickpea curry from North India.",
      chefName: "Chef Satyam",
      Ingredients: "Chana, Tomato, Onion, Ginger, Garlic, Spices",
      ImgURL:
        "https://madhurasrecipe.com/wp-content/uploads/2020/10/Chole-Masala-Marathi-Recipe.jpg",
      category: "Lunch",
    },
    {
      id: "2",
      recipeName: "Paneer Butter Masala",
      Descr: "Creamy and mildly spicy paneer curry loved across India.",
      chefName: "Chef Satyam",
      Ingredients: "Paneer, Tomato, Butter, Cream, Spices",
      ImgURL:
        "https://i0.wp.com/www.shanazrafiq.com/wp-content/uploads/2012/10/1-DSC_0040.jpg?fit=1600%2C1064&ssl=1",
      category: "Dinner",
    },
    {
      id: "3",
      recipeName: "Poha",
      Descr:
        "Light and quick Maharashtrian breakfast made from flattened rice.",
      chefName: "Chef Satyjit",
      Ingredients: "Poha, Mustard Seeds, Curry Leaves, Onion, Turmeric",
      ImgURL:
        "https://media.licdn.com/dms/image/v2/D4D12AQEf05nNGCE57Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1690367316148?e=2147483647&v=beta&t=c07BURpDz1nfIZE5gslGaHlMRiH_ZWATwjlUdwMjeXg",
      category: "Breakfast",
    },
    {
      id: "4",
      recipeName: "Rajma Masala",
      Descr: "Hearty North Indian kidney bean curry served with rice.",
      chefName: "Chef Anjali",
      Ingredients: "Rajma, Onion, Tomato, Ginger, Garlic, Spices",
      ImgURL:
        "https://blessmyfoodbypayal.com/wp-content/uploads/2016/02/IMG_20200215_143312.jpg",
      category: "Lunch",
    },
    {
      id: "5",
      recipeName: "Aloo Paratha",
      Descr: "Stuffed Indian flatbread with spicy potato filling.",
      chefName: "Chef Rahul",
      Ingredients: "Wheat Flour, Potato, Green Chili, Coriander, Spices",
      ImgURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Aloo_Paratha_also_known_as_Batatay_Jo_Phulko.jpg/960px-Aloo_Paratha_also_known_as_Batatay_Jo_Phulko.jpg",
      category: "Breakfast",
    },
    {
      id: "6",
      recipeName: "Dhokla",
      Descr: "Soft and spongy steamed savory cake from Gujarat.",
      chefName: "Chef Satyam",
      Ingredients: "Gram Flour, Yogurt, Eno, Mustard Seeds, Curry Leaves",
      ImgURL:
        "https://t4.ftcdn.net/jpg/10/41/99/53/360_F_1041995329_Y948A29Hru2TXn8JgkWMwJmIVauyQ9jq.jpg",
      category: "Snack",
    },
    {
      id: "7",
      recipeName: "Masoor Dal Tadka",
      Descr: "Simple and flavorful red lentil dal with tempering.",
      chefName: "Chef Meera",
      Ingredients: "Masoor Dal, Onion, Tomato, Garlic, Mustard Seeds, Spices",
      ImgURL:
        "https://i.ytimg.com/vi/BXFctXCcAz4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBE68NKwPNz5P1EsPrLwF2kkrFtRg",
      category: "Lunch",
    },
    {
      id: "8",
      recipeName: "Vegetable Pulao",
      Descr: "Fragrant rice cooked with mixed vegetables and spices.",
      chefName: "Chef Arjun",
      Ingredients:
        "Basmati Rice, Mixed Vegetables, Cumin, Cloves, Cinnamon, Spices",
      ImgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXh8JwS9wEk8r2un31eZJtUqoEIveNLTHibg&s",
      category: "Dinner",
    },
    {
      id: "9",
      recipeName: "Baingan Bharta",
      Descr: "Smoky mashed eggplant cooked with spices and herbs.",
      chefName: "Chef Priya",
      Ingredients: "Eggplant, Onion, Tomato, Garlic, Coriander, Spices",
      ImgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXh8JwS9wEk8r2un31eZJtUqoEIveNLTHibg&s",
      category: "Lunch",
    },
    {
      id: "10",
      recipeName: "Aloo Gobi",
      Descr: "Dry curry of potatoes and cauliflower with Indian spices.",
      chefName: "Chef Satyam",
      Ingredients: "Potato, Cauliflower, Tomato, Ginger, Spices",
      ImgURL:
        "https://vegecravings.com/wp-content/uploads/2018/07/Aloo-Gobi-Recipe-Step-By-Step-Instructions-19-500x375.jpg",
      category: "Lunch",
    },
    {
      id: "11",
      recipeName: "Palak Paneer",
      Descr: "Creamy spinach curry with soft paneer cubes.",
      chefName: "Chef Rahul",
      Ingredients: "Spinach, Paneer, Onion, Tomato, Garlic, Spices",
      ImgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTa0vMZXRWCqeT6LPG6YbA2wDxk8iisAMwQw&s",
      category: "Dinner",
    },
    {
      id: "12",
      recipeName: "Chole Masala",
      Descr: "Spicy chickpea curry with tangy tomato base.",
      chefName: "Chef Anjali",
      Ingredients: "Chickpeas, Onion, Tomato, Ginger, Garlic, Spices",
      ImgURL:
        "https://madhurasrecipe.com/wp-content/uploads/2020/10/Chole-Bhature-Marathi-Recipe.jpg",
      category: "Lunch",
    },
    {
      id: "13",
      recipeName: "Vegetable Upma",
      Descr: "South Indian semolina porridge with veggies and spices.",
      chefName: "Chef Meera",
      Ingredients:
        "Semolina, Mustard Seeds, Curry Leaves, Mixed Vegetables, Spices",
      ImgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62An25qATwuE83QS6U4uid1_fK5kigq9gMQ&s",
      category: "Breakfast",
    },
    {
      id: "14",
      recipeName: "Dal Makhani",
      Descr: "Rich creamy lentil dish slow-cooked with butter and cream.",
      chefName: "Chef Satyam",
      Ingredients: "Whole Black Lentils, Kidney Beans, Butter, Cream, Spices",
      ImgURL: "https://i.ytimg.com/vi/M7nvJN0vQ3g/maxresdefault.jpg",
      category: "Dinner",
    },
    {
      id: "15",
      recipeName: "Bhindi Masala",
      Descr: "Spiced okra cooked with onions and tomatoes.",
      chefName: "Chef Arjun",
      Ingredients: "Okra, Onion, Tomato, Mustard Seeds, Spices",
      ImgURL:
        "https://cdn3.foodviva.com/static-content/food-images/curry-recipes/stuffed-bhindi-recipe/stuffed-bhindi-recipe.jpg",
      category: "Lunch",
    },
    {
      id: "16",
      recipeName: "Methi Paratha",
      Descr: "Indian flatbread stuffed with fresh fenugreek leaves.",
      chefName: "Chef Priya",
      Ingredients: "Wheat Flour, Fenugreek Leaves, Spices",
      ImgURL:
        "https://cdn3.foodviva.com/static-content/food-images/curry-recipes/stuffed-bhindi-recipe/stuffed-bhindi-recipe.jpg",
      category: "Breakfast",
    },
    {
      id: "17",
      recipeName: "Vegetable Biryani",
      Descr: "Fragrant layered rice with mixed vegetables and spices.",
      chefName: "Chef Rahul",
      Ingredients: "Basmati Rice, Mixed Vegetables, Yogurt, Spices",
      ImgURL:
        "https://i.ytimg.com/vi/K-ovDdhJV5c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDfBw0ftlRXQBpUhNeuY5dIzyNWzw",
      category: "Dinner",
    },
    {
      id: "18",
      recipeName: "Kadhi Pakora",
      Descr: "Gram flour dumplings in tangy yogurt-based curry.",
      chefName: "Chef Meera",
      Ingredients: "Besan, Yogurt, Spices, Onion, Garlic",
      ImgURL:
        "https://i.ytimg.com/vi/DjdnEFQJ6xM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD2ifiDUdOnXN-zpJeOfq0dKWiZzw",
      category: "Lunch",
    },
    {
      id: "19",
      recipeName: "Vegetable Samosa",
      Descr: "Deep-fried pastry stuffed with spiced potatoes and peas.",
      chefName: "Chef Arjun",
      Ingredients: "Potato, Peas, Flour, Spices",
      ImgURL:
        "https://onestophalal.com/cdn/shop/articles/vegetable_samosa-1697399047300_1200x.jpg?v=1697399081",
      category: "Snack",
    },
    {
      id: "20",
      recipeName: "Paneer Tikka",
      Descr: "Grilled spicy marinated paneer cubes.",
      chefName: "Chef Satyam",
      Ingredients: "Paneer, Yogurt, Spices, Bell Pepper, Onion",
      ImgURL:
        "https://c.ndtvimg.com/2024-07/rvdidqqo_paneer-tikka_120x90_01_July_24.jpg",
      category: "Snack",
    },
    {
      id: "21",
      recipeName: "Tomato Soup",
      Descr: "Smooth and tangy tomato soup perfect for any meal.",
      chefName: "Chef Priya",
      Ingredients: "Tomato, Onion, Garlic, Cream, Spices",
      ImgURL:
        "https://www.foodandwine.com/thmb/j1vJdgrMdu64ElBpxMzmvqpyt5U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/creamy-tomato-soup-buttery-croutons-hero-02-49b419d00f854db78838a79c8df9a23f.jpg",
      category: "Snack",
    },
    {
      id: "22",
      recipeName: "Cabbage Sabzi",
      Descr: "Simple stir-fried cabbage with spices and mustard seeds.",
      chefName: "Chef Meera",
      Ingredients: "Cabbage, Mustard Seeds, Green Chili, Spices",
      ImgURL:
        "https://images.getrecipekit.com/20221128192320-cabbage-20sabzi.jpg?aspect_ratio=16:9&quality=90&",
      category: "Lunch",
    },
    {
      id: "23",
      recipeName: "Rava Kesari",
      Descr: "Sweet semolina pudding flavored with saffron and nuts.",
      chefName: "Chef Rahul",
      Ingredients: "Semolina, Sugar, Ghee, Saffron, Nuts",
      ImgURL:
        "https://cookingfromheart.com/wp-content/uploads/2017/08/Rava-Kesari-6.jpg",
      category: "Dessert",
    },
    {
      id: "24",
      recipeName: "Moong Dal Khichdi",
      Descr: "Comforting one-pot meal of rice and lentils.",
      chefName: "Chef Anjali",
      Ingredients: "Rice, Moong Dal, Ghee, Spices",
      ImgURL:
        "https://images.news18.com/ibnkhabar/uploads/2023/09/bajra-moong-dal-khichdi.jpg",
      category: "Lunch",
    },
  ];

  const [recipe, setRecipe] = useState(() => {
    const stored = localStorage.getItem("recipe");
    return stored ? JSON.parse(stored) : defaultRecipes;
  });

  const [favorite, setFavorite] = useState(() => {
    const stored = localStorage.getItem("favorite");
    return stored ? JSON.parse(stored) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("recipe", JSON.stringify(recipe));
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [recipe, favorite]);

  return (
    <recipecontext.Provider
      value={{
        recipe,
        setRecipe,
        favorite,
        setFavorite,
        searchTerm,
        setSearchTerm,
      }}
    >
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
