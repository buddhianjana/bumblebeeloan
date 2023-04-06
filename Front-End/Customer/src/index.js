import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandinPage } from "./pages/LandingPage";
import { ProductList } from "./pages/ProductList";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { NotFound } from "./pages/NotFound";
import { BaseURLPath } from "./utilities/constants";
import { CheckOut } from "./pages/CheckOut/CheckOut";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path={BaseURLPath} element={<App strPortalDivId="div-portal" />}>
        <Route index element={<LandinPage />} />
        <Route path="productlist/:listId" element={<ProductList />} />
        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>

  //</React.StrictMode>
);
