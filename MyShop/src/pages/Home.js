import React from "react";
import { useState } from "react";
import { useLocalStorage } from "../hooks/UseLocalStorage";
import { IoIosCloseCircle } from "react-icons/io";
import Cart from "../components/Cart";

const Home = ({ products }) => {
  const [storageList, setStorageList] = useLocalStorage("storageList", []);
  const [productClicked, setProductClicked] = useState(false);
  const [addProduct, setAddProduct] = useState(false);
  const [buttonName, setButtonName] = useState("Add to Cart");
  const [cartName, setCartName] = useState(
    `${storageList.length ? `Cart (${storageList.length})` : "Cart"}`
  );
  const [productTitle, setProductTitle] = useState("Title");

  const OpenProductSection = (title) => {
    setProductClicked(true);
    setProductTitle(title);
  };

  const CloseProductSection = () => {
    setProductClicked(false);
    setAddProduct(false);
    setButtonName("Add to Cart");
  };

  const SendProductToCart = () => {
    storageList.push(productTitle);
    setStorageList(storageList);
    setAddProduct(true);
    setButtonName("Added");
    setCartName(`Cart (${storageList.length})`);
  };

  const ClearStorageList = () => {
    setStorageList([]);
    setCartName("Cart");
  };

  return (
    <div className="home-container">
      <Cart
        storageList={storageList}
        cartName={cartName}
        clearStorageList={ClearStorageList}
      />

      <section className={`products-section ${productClicked ? "hide" : ""} `}>
        {products.map((product, index) => (
          <div
            className="product"
            key={index}
            onClick={() => OpenProductSection(product.title)}
          >
            <img src={product.img} alt="Product" />
            <div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className={`addProduct-section ${productClicked ? "show" : ""}`}>
        <img src="/images/add-product.png" alt="Add Product" />
        <div className="addProduct-container">
          <div className="info-container">
            <span className="addProduct-title">{productTitle}</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
          <div className="addProduct-button">
            <div
              className={`button ${addProduct ? "switch" : ""}`}
              onClick={SendProductToCart}
            >
              {buttonName}
            </div>
          </div>
        </div>
        <div className="close-section" onClick={CloseProductSection}>
          <IoIosCloseCircle size={25} />
        </div>
      </section>
    </div>
  );
};

export default Home;
