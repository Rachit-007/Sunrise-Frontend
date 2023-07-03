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

  const onSearch = (data) => {
    searchProduct(data.search);
  };

  const getSuggestion = debounce((e) => {
    handleChange(e.target.value);
  }, 300);

  const handleChange = (value) => {
    if (value === "") {
      setSearchSuggesions(null);
    } else {
      getSuggestedKeywords({ variables: { searchKeywords: value } });
    }
  };

  const searchProduct = (search) => {
    setSearchSuggesions(null);
    setValue("search", search);
    nav(`/product?search=${search}`);
  };

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
