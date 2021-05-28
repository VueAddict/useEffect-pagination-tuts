import React from "react";

function Item({ item, children }) {
  return (
    <div className="item">
      <div className="item-left">
          <div className="item-image" />
          <div className="item-title">
              {item.name}
          </div>
          <div className="item-description">
              {item.description}
          </div>
      </div>
      <div className="item-right">
        <div className="item-price">
            ${item.price}
        </div>
        {/* <button className="item-addToCart"  onClick={onAddToCart}>
            Add to Cart
        </button> */}
        {children}
      </div>
    </div>
  );
}

export default Item;
