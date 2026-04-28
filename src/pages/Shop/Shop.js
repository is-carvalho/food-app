import React from "react";
import "../../styles/ShopStyle.css";
import shop from "../../assets/shop/e-shop.png";

const Shop = () => (
  <div className="shop-container">
    <h1>Compras</h1>
    <p>
      Em breve, nossa loja online estará disponível para você pedir seus
      hambúrgueres favoritos com toda comodidade!
    </p>
    <img src={shop} alt="Loja Online" />
  </div>
);

export default Shop;
