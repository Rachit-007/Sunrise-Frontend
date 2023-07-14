import { Link } from "react-router-dom";
import MiniCart from "../cart/mincart";
import { Search } from "../searchBar";

const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-gray-200 mb-10 fixed top-0 w-full shadow-lg z-50">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center max-sm:flex-row max-sm:p-3 max-sm:justify-between ">
        <Link to="/">
          <img
            src="https://sunrise.commercetools.com/img/logo.6528bde1.svg"
            width="130px"
          />
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center max-sm:hidden">
          <a className="mr-5 hover:text-gray-900">MEN</a>
          <a className="mr-5 hover:text-gray-900">WOMAN</a>
          <a className="mr-5 hover:text-gray-900">KIDS</a>
          <a className="mr-5 hover:text-gray-900">ACCESSORIES</a>
        </nav>
        <Search />
        <MiniCart />
        <Link to="/login">
          <div className="flex-col justify-center items-center border-0 py-1 px-3 focus:outline-none  text-gray-500 hover:text-gray-800 rounded text-base mt-4 md:mt-0 max-sm:pt-0 max-sm:mt-0 group">
            <div className="text-center flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                id="user"
              >
                <path
                  className="group-hover:fill-gray-800"
                  fill="grey"
                  fill-rule="evenodd"
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 7a7.489 7.489 0 0 1 6-3 7.489 7.489 0 0 1 6 3 7.489 7.489 0 0 1-6 3 7.489 7.489 0 0 1-6-3Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <span>My Account</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
