import { FaRegClock } from "react-icons/fa6";
import { AiOutlineFire } from "react-icons/ai";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Recipes = ({ addRecipeQueue }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const loadRecipes = async () => {
      const res = await fetch("./recipe.json");
      const data = await res.json();
      setRecipes(data);
    };
    loadRecipes();
  }, []);
  return (
    <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.recipe_id}
          className="p-6 border border-[#28282833] rounded-2xl space-y-10"
        >
          <img className="rounded-2xl" src={recipe.image} alt="" />
          <div className="space-y-4">
            <h5 className="text-xl font-semibold text-[#282828]">
              {recipe.recipe_name}
            </h5>
            <p className="text-[#878787]">{recipe.short_description}</p>
          </div>
          <div className="space-y-4">
            <h5 className="text-lg font-medium text-[#282828]">
              Ingredients: {recipe.ingredients.length}
            </h5>
            <ul className="p-6">
              {recipe.ingredients.map((item, index) => (
                <li key={index} className="text-[#878787] list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3 text-[#282828CC]">
              <FaRegClock />
              <p>{recipe.preparing_time} minutes</p>
            </div>
            <div className="flex items-center space-x-3 text-[#282828CC]">
              <AiOutlineFire />
              <p>{recipe.calories} calories</p>
            </div>
          </div>
          <button
            onClick={()=>addRecipeQueue(recipe)}
            className="btn bg-[#0BE58A] border-none text-xl  text-black font-semibold rounded-[50px]"
          >
            Want to Cook
          </button>
        </div>
      ))}
    </div>
  );
};

Recipes.propTypes = {
  addRecipeQueue: PropTypes.func.isRequired,
};

export default Recipes;
