import React from "react";
import { useState } from "react";
import Navigation from "../Navigation/Nav";
import Products from "../Products/Products";
import products from "../db/data";
import Sidebar from "../Sidebar/Sidebar";
import Card from "./Card";
import "../index.css";

export default function ProductsGrid() {
  const [selected, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = [...products]; // Create a new array to avoid mutating the original one

    if (query) {
      filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())|| product.tags.includes(query.toLowerCase())
      );
    }

    if (selected) {
      filteredProducts = filteredProducts.filter((product) => {
        return product.tags.includes(selected.toLowerCase());
      });
    }
    return (
      <div className="d-flex flex-wrap">
        {filteredProducts.map(
          ({
            id,
            name,
            users,
            ratings,
            prepareTime,
            cookTime,
            servings,
            tags,
            img,
          }) => (
            <Card
              id={id}
              name={name}
              prepareTime={prepareTime}
              cookTime={cookTime}
              ratings={ratings}
              users={users}
              tags={tags}
              servings={servings}
              img={img}
            />
          )
        )}
      </div>
    );
  }

  const result = filteredData(products, selected, query);

  return (
    <div>
      <Navigation query={query} handleInputChange={handleInputChange} />
      <div>
        <Sidebar handleChange={handleChange} />
        <Products result={result} />
      </div>
    </div>
  );
}
