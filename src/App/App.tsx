import React from "react";

import Header from "@components/Header";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
};

export default App;
