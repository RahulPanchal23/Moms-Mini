import React, { useState, useEffect } from "react";
import Card from "../sComponents/Card";
import { CAKEDATA } from "../data/cake";
import Navbar from "./Navbar";
import axios from "axios";

function Products() {
  const [Data, setData] = useState(CAKEDATA);
  useEffect(() => {
    axios.get("items").then(r => setData(r.data));
  }, []);
  const Cards = () => {
    return (
      <div className="allCards">
        {Data.map(card => (
          <Card
            name={card.name}
            price={card.price}
            key={card.key}
            img={card.img}
          />
        ))}
      </div>
    );
  };
  return (
    <>
      <div className="productsContainer">
        <div className="products">
          <h2 className="titleProducts">All Products</h2>
          <Cards />
        </div>
      </div>
    </>
  );
}

export default Products;
