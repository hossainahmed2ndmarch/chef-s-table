import PropTypes from "prop-types";

const Sidebar = ({ recipeQueue }) => {
  console.log(recipeQueue);
  return (
    <div className="border border-[#28282833] rounded-2xl">
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
                <td>{item.preparing_time}</td>
                <td>{item.calories}</td>
                <td>
                  <button className="btn bg-[#0BE58A] border-none text-[#150B2B] text-lg font-semibold px-2 py-1 md:px-6 md:py-2  rounded-[50px]">
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h5 className="text-2xl text-[#282828] font-semibold text-center mt-8">
        Currently cooking: 02
      </h5>
      <div className="divider mx-16"></div>
      <div className="grid grid-cols-3 gap-6 p-6">
        <div className="space-y-4">
          <p className="text-[#878787]">Name</p>
          <li className="text-[#878787] list-decimal">Chicken Caesar Salad</li>
        </div>
        <div className="space-y-4">
          <p className="text-[#878787]">Time</p>
          <li className="text-[#878787] list-none">20 minutes</li>
          <p className="text-[#878787]">Total Time = 45 minutes</p>
        </div>
        <div className="space-y-4">
          <p className="text-[#878787]">Calories</p>
          <li className="text-[#878787] list-none">400 calories</li>
          <p className="text-[#878787]">Total Calories = 1050 calories</p>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  recipeQueue: PropTypes.array.isRequired,
};

export default Sidebar;
