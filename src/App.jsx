import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./pages/AddProduct";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
