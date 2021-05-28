import React from "react";
import { items } from "../data/db";
import CartPage from "./CartPage";
import ItemPage from "./ItemPage";

function Content({ tab, onAddToCart, cart }) {
  switch (tab) {
    case "items":
      return <ItemPage onAddToCart={onAddToCart} items={items} />;
    case "cart":
      return <CartPage items={cart} />
    default:
      return null;
  }
}

export default Content;
