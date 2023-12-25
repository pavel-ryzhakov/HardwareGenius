import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import Configurator from "./pages/configurator/Configurator";
import Account from "./pages/account/Account";
import Cart from "./pages/cart/Cart";
import Product from "./pages/product/Product";
import Registration from "./pages/registration/Registration";
import NoPage from "./pages/no_page/NoPage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog/*" element={<Catalog />} />
          <Route path="configurator" element={<Configurator />} />
          <Route path="account" element={<Account />} />
          <Route path="cart" element={<Cart />} />
          {/* <Route path="product" element={<Product />} /> */}
          <Route path="registration" element={<Registration />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
