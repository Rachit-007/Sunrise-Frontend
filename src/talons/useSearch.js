import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { GET_SUGGETION } from "../graphql/suggetions";
import debounce from "lodash/debounce";

const useSearch = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [searchSuggetions, setSearchSuggesions] = useState([]);
  const [getSuggestedKeywords, { data: suggestions, loading }] =
    useLazyQuery(GET_SUGGETION);
  const nav = useNavigate();

  /**
   * calls a function that will set the search parameters
   * @param {string} data
   *
   */
  const onSearch = (data) => {
    searchProduct(data.search);
  };

  /**
   * it will call the function after 600ms
   */
  const getSuggestion = debounce((e) => {
    handleChange(e.target.value);
  }, 600);

  /**
   *
   * this function will get the suggestion when user types in the search bar
   * @param {string} value
   */
  const handleChange = (value) => {
    if (value === "") {
      setSearchSuggesions(null);
    } else {
      getSuggestedKeywords({ variables: { searchKeywords: value } });
    }
  };

  /**
   *
   * this function will set the search parameteres and empty the suggestions
   * @param {string} search
   */
  const searchProduct = (search) => {
    setSearchSuggesions(null);
    setValue("search", search);
    nav(`/product?search=${search}`);
  };

  /**
   * it will set the state variable
   */
  useEffect(() => {
    if (suggestions) {
      setSearchSuggesions(suggestions.suggest);
    }
  }, [suggestions]);

  return {
    register,
    handleSubmit,
    onSearch,
    searchSuggetions,
    getSuggestion,
    searchProduct,
  };
};

export default useSearch;
