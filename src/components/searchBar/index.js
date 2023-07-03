import size from "lodash/size";
import useSearch from "../../talons/useSearch";

export const Search = () => {
  const {
    register,
    handleSubmit,
    onSearch,
    searchSuggetions,
    getSuggestion,
    searchProduct,
  } = useSearch();

  return (
    <>
      <div className="relative mr-10 max-sm:order-4 max-sm:mt-4 max-sm:w-full max-sm:mr-0">
        <form onSubmit={handleSubmit(onSearch)} className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="Search"
            {...register("search")}
            onChange={(e) => getSuggestion(e)}
          />
          <button
            type="submit"
            className="p-2 ml-2 text-sm font-medium text-white bg-green-700 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </form>

        {size(searchSuggetions) > 0 && (
          <div className="absolute top-12 bg-white w-full rounded-lg text-gray-600 border-2 border-gray-300 ">
            {searchSuggetions.map((suggestion, index) => (
              <>
                <div
                  className="px-5 py-3 cursor-pointer border-b-2 last:border-b-0 hover:bg-gray-200"
                  key={index}
                  onClick={() => {
                    searchProduct(suggestion.text);
                  }}
                >
                  {suggestion.text}
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
