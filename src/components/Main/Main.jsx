import { useState } from "react";
import Recipes from "../Recipes/Recipes";
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const addRecipeQueue = (recipe) => {
   const isExist = recipeQueue.find(existedRecipe=> existedRecipe.recipe_id === recipe.recipe_id)
   if(!isExist){
    setRecipeQueue([...recipeQueue, recipe]);
   }
   else{
    alert('This recipe already exists in the queue')
   }
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
          <Sidebar recipeQueue={recipeQueue}></Sidebar>
        </div>
      </section>
    </div>
  );
};

export default Main;
