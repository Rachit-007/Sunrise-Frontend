import React from "react";
import { useNavigate } from "react-router-dom";

const useBreadcrumb = () => {
  const nav = useNavigate();

  /**
   * function i responsible to navigate to one page backwards
   */
  const navigate = () => {
    nav(-1);
  };

  return { navigate };
};

export default useBreadcrumb;
