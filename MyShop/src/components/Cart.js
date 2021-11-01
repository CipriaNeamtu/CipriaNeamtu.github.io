import React from "react";
import { TiContacts } from "react-icons/ti";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "@mui/material";

const Cart = ({ storageList, cartName, clearStorageList }) => {
  return (
    <section className="cart-section">
      <div className="cart-info">
        <div>
          <div className="icon">
            <TiContacts size={30} />
            <span className="cart-title">Contact</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="icon">
          <AiOutlineShoppingCart size={30} />
          <span className="cart-title">{cartName}</span>
        </div>
        <div className="cart">
          <div className={`product-in-cart ${storageList ? "show" : ""}`}>
            {storageList.map((storedProduct, index) => (
              <div className="product-added" key={index}>
                <span>24</span>
                {storedProduct}
              </div>
            ))}
          </div>
          <p className={`cart-message ${storageList.length > 0 ? "hide" : ""}`}>
            Cart is empty
          </p>
        </div>
        <div className="clear-btn">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => clearStorageList()}
          >
            Clear
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
