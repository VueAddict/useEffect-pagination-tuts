import React from "react";
import Item from "./Item";

function CartPage({ items }) {
  return (
    <ul className="cartPage-items">
      {items.map((item) => (
        <li key={item.id} className="cartPage-item">
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
}

export default CartPage;
