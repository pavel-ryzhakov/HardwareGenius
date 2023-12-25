import "./Catalog.scss";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ProductCard from "../../components/catalog/product/product_card/ProductCard.jsx";
import ManufacturerFilter from "./ManufacturerFilter.jsx";
import Search from "../../components/catalog/Search";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const [queryParams, setQueryParams] = useState(
    new URLSearchParams(location.search)
  );

  useEffect(() => {
    setQueryParams(new URLSearchParams(location.search));
  }, [location.search]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://localhost:7294/api/catalog?${queryParams.toString()}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, [queryParams]);

  return (
    <div className="catalog">
      <div className="left-menu">
        <div class="search-panel">
          <Search />
        </div>
        <div className="price-panel">
          <form>
            <p for="min-price">Цена</p>
            <div className="s-p">
              <input type="text" id="min-price" name="min-price" />
              <input type="text" id="max-price" name="max-price" />
            </div>
          </form>
          <div class="slide-container">
            <input type="range" min="1" max="100" value="50" class="sliderr" />
          </div>
          <div class="button-container">
            <button class="button cancel">Сбросить</button>
            <button class="button confirm">Применить</button>
          </div>
        </div>

        <div className="manufacturer-filter">
          <ManufacturerFilter products={products} />
        </div>
      </div>
      <div className="central-container">
        <div class="top-panel">
          <div class="sort-filter-container">
            <p>Цена</p>
            <i class="fa fa-angle-up" aria-hidden="true"></i>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </div>
          <div class="right-container">
            <div class="pagination-panel">
              <p></p>
              <select name="" id="" class="form-control">
                <option value="">20</option>
                <option value="">50</option>
                <option value="">все</option>
              </select>
            </div>
            <div className="pag-img">
              <i class="fa fa-th-list" aria-hidden="true"></i>
              <i class="fa fa-th-large" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
