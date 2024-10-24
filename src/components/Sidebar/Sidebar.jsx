import PropTypes from "prop-types";

const Sidebar = ({
  recipeQueue,
  handleRemoveRecipe,
  preparedRecipe,
  calculateTotalTimeCalories,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="border border-[#28282833] rounded-2xl space-y-8">
      <h5 className="text-2xl text-[#282828] font-semibold text-center mt-8">
        Want to cook: {recipeQueue.length}
      </h5>
      <div className="divider mx-16"></div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((item, index) => (
              <tr key={index} className="hover text-[#878787]">
                <th>{index + 1}</th>
                <td>{item.recipe_name}</td>
                <td>{item.preparing_time} minutes</td>
                <td>{item.calories} calories</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemoveRecipe(item.recipe_id),
                        calculateTotalTimeCalories(
                          item.preparing_time,
                          item.calories
                        );
                    }}
                    className="btn bg-[#0BE58A] border-none text-[#150B2B] text-lg font-medium px-2 py-1 md:px-4 md:py-2  rounded-[50px]"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h5 className="text-2xl text-[#282828] font-semibold text-center mt-8">
        Currently cooking: {preparedRecipe.length}
      </h5>
      <div className="divider mx-16"></div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {preparedRecipe.map((item, index) => (
              <tr key={index} className="hover text-[#878787]">
                <th>{index + 1}</th>
                <td>{item.recipe_name}</td>
                <td>{item.preparing_time} minutes</td>
                <td>{item.calories} calories</td>
              </tr>
            ))}
            <tr className="text-[#878787]">
              <td></td>
              <td></td>
              <td>Total Time = {totalTime} minutes</td>
              <td>Total Calories = {totalCalories} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  recipeQueue: PropTypes.array.isRequired,
  handleRemoveRecipe: PropTypes.func.isRequired,
  calculateTotalTimeCalories: PropTypes.func.isRequired,
  preparedRecipe: PropTypes.array.isRequired,
  totalTime: PropTypes.number.isRequired,
  totalCalories: PropTypes.number.isRequired,
};

export default Sidebar;
