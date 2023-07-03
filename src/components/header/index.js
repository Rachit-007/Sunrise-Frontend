import { Link } from "react-router-dom";
import { Search } from "../searchBar";

const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-gray-200 mb-10 fixed top-0 w-full shadow-lg z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center max-sm:flex-row max-sm:p-3 max-sm:justify-between ">
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
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 max-sm:pt-0 max-sm:mt-0">
          Sign Up
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
