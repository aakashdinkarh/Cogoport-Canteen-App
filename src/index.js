import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import ShopInterface from "./aakash-components/ShopInterface.js";
import { GlobalStyle } from "./GlobalStyles.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<ShopInterface />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
