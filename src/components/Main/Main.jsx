import { useState } from "react";
import Recipes from "../Recipes/Recipes";
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  // Add recipe
  const addRecipeQueue = (recipe) => {
    const isExist = recipeQueue.find(
      (existedRecipe) => existedRecipe.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("This recipe already exists in the queue");
    }
  };
  // Prepared recipe
  const handleRemoveRecipe = (id) => {
    const removedRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);
    const updatedQueue = recipeQueue.filter(
      (recipe) => recipe.recipe_id !== id
    );
    setPreparedRecipe([...preparedRecipe, removedRecipe]);
    setRecipeQueue(updatedQueue);
  };
  // Total time calories
  const calculateTotalTimeCalories = (time, calories) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
  };
  return (
    <div className="px-6 mb-24">
      {/* Our recipe section */}
      <section>
        {/* Text part */}
        <div className="text-center mb-12 space-y-6">
          <h2 className="text-[40px] font-semibold">Our Recipes</h2>
          <p className="text-[#150B2B99]">
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget <br />
            urna volutpat curabitur elementum mauris aenean neque.
          </p>
        </div>
        {/* Recipes Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Recipes addRecipeQueue={addRecipeQueue}></Recipes>
          <Sidebar
            recipeQueue={recipeQueue}
            handleRemoveRecipe={handleRemoveRecipe}
            preparedRecipe={preparedRecipe}
            calculateTotalTimeCalories={calculateTotalTimeCalories}
            totalTime={totalTime}
            totalCalories={totalCalories}
          ></Sidebar>
        </div>
      </section>
    </div>
  );
};

export default Main;
