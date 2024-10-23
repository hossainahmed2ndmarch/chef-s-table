import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import kitchenImage from "../../assets/kitchen.jpg";

const Header = () => {
  return (
    <header className="mt-6 px-6">
      {/* Navbar */}
      <nav className="mb-12">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost lg:hidden text-[#150B2BB3]"
              >
                <RxHamburgerMenu />
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="text-[#150B2BB3]">Home</a>
                </li>
                <li>
                  <a className="text-[#150B2BB3]">Recipes</a>
                </li>
                <li>
                  <a className="text-[#150B2BB3]">About</a>
                </li>
                <li>
                  <a className="text-[#150B2BB3]">Search</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-[32px] font-bold">
              Recipe Calories
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="text-[#150B2BB3]">Home</a>
              </li>
              <li>
                <a className="text-[#150B2BB3]">Recipes</a>
              </li>
              <li>
                <a className="text-[#150B2BB3]">About</a>
              </li>
              <li>
                <a className="text-[#150B2BB3]">Search</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end space-x-4">
            <label className="hidden input rounded-[50px] bg-[#150B2B0D] md:flex items-center gap-2 text-2xl text-[#150B2BB3]">
              <IoSearch />
              <input
                type="text"
                className="grow text-base"
                placeholder="Search"
              />
            </label>
            <a className="btn bg-[#0BE58A] p-2 h-12 w-12 rounded-full text-2xl text-[#150B2B]">
              <CgProfile />
            </a>
          </div>
        </div>
      </nav>
      {/* Banner */}
      <section
        className="bg-cover bg-center p-32 mb-24 rounded-3xl"
        style={{
          backgroundImage: `linear-gradient(rgba(21, 11, 43, 0.9), rgba(21, 11, 43, 0)),url(${kitchenImage})`,
        }}
      >
        <div className="text-center space-y-10">
          <h1 className="text-[52px] text-white font-bold">
            Discover an exceptional cooking <br />
            class tailored for you!
          </h1>
          <p className="text-lg text-white">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding <br />
            problems to become an exceptionally well world-class Programmer.
          </p>
          <div className="space-x-8">
            <button className="btn bg-[#0BE58A] border-none text-xl  text-black font-semibold rounded-[50px]">
              Explore Now
            </button>
            <button className="btn bg-transparent hover:bg-[#0BE58A] border-2 hover:border-none text-xl text-white hover:text-black font-semibold rounded-[50px]">
              Our Feedback
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

Header.propTypes = {};

export default Header;
