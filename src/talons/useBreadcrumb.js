import React from "react";
import { useNavigate } from "react-router-dom";

const useBreadcrumb = () => {
  const nav = useNavigate();
  const navigate = () => {
    nav(-1);
  };
  return { navigate };
};

export default useBreadcrumb;
