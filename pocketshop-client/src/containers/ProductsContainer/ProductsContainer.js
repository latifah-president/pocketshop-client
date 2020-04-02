import React from "react";

import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./styles.css";

const products = [
  {
    name: "apple",
    price: 2.0,
    description: "first product",
    imageUrl:
      "https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1498042211.jpg"
  },
  {
    name: "watermelon",
    price: 2.0,
    description: "second product",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71ogcdh7YjL._AC_SY450_.jpg"
  },
  {
    name: "pineapple",
    price: 2.0,
    description: "third product",
    imageUrl:
      "https://i.dailymail.co.uk/i/newpix/2018/03/08/11/49FF748700000578-5476901-image-a-27_1520507605152.jpg"
  },
  {
    name: "strawberries",
    price: 4.0,
    description: "fourth product",
    imageUrl:
      "https://www.almanac.com/sites/default/files/image_nodes/strawberries-1.jpg"
  },
  {
    name: "bananas",
    price: 3.0,
    description: "fifth product",
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-320-80.jpg"
  }
];

export const ProductsContainer = () => {
  return (
    <div className="grid-cols-4">
      {products.map(product => (
        <ProductCard product={product}></ProductCard>
      ))}
    </div>
  );
};
