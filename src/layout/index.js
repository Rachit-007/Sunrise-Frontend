import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Signup from "../components/signup";
import ProductDescription from "../components/product/productDescription";
import ProductListing from "../components/product/productListing";
import Login from "../components/login";

const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/product" element={<ProductListing />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product/:id" element={<ProductDescription />}></Route>
        <Route path="/" element={<Navigate replace to="/product" />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
