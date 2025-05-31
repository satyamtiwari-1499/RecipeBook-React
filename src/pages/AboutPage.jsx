import React from "react";

const About = () => {
  return (
    <div className="min-h-screen px-6 sm:px-16 py-20 bg-amber-50 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-red-700">
          About ZaikaVerse-RecipeBook 🍴
        </h1>
        <p className="text-xl mb-10">
          Welcome to <span className="font-semibold">ZaikaVerse-RecipeBook</span> — your ultimate destination for delicious and easy-to-follow vegetarian recipes! From quick breakfast ideas to rich dinner curries, we bring you flavors from every corner of India.
        </p>

        <div className="bg-white p-8 rounded-2xl shadow-md text-left">
          <h2 className="text-2xl font-bold mb-4 text-emerald-600">👨‍🍳 Why We Built ZaikaVerse</h2>
          <p className="mb-4">
            As food lovers, we know the joy of sharing a homemade meal. ZaikaVerse-RecipeBook was created to make cooking exciting, easy, and fun for everyone — from beginners to expert home chefs.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-emerald-600">📚 What You’ll Find</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Handpicked vegetarian recipes with step-by-step guides</li>
            <li>Smart search & filter system to find recipes by name or category</li>
            <li>Option to mark your favorite dishes</li>
            <li>Beautiful recipe cards with chef name, ingredients & images</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-4 text-emerald-600"> Built with Love by Satyam</h2>
          <p>
            I'm a passionate web developer who believes great food deserves great UI! Hope this app brings joy to your kitchen journey.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-gray-600 italic">Have feedback or recipe ideas? Let's connect on LinkedIn!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
