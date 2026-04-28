import React, { useEffect } from "react";
import "../../styles/AboutStyle.css";
import local from "../../assets/shop/e-shop.png";
import equipe from "../../assets/parallax/bg.jpg";

const About = () => {
  useEffect(() => {
    document.body.classList.add("about-page");
    return () => {
      document.body.classList.remove("about-page");
    };
  }, []);
  return (
    <div className="about-container">
      <h1>Sobre a Hamburgueria</h1>
      <p>
        Nossa história começou em 2010, quando um grupo de amigos apaixonados
        por hambúrgueres decidiu criar o melhor lugar da cidade para saborear
        receitas artesanais. Com ingredientes frescos, ambiente acolhedor e uma
        equipe dedicada, nossa hamburgueria se tornou referência em sabor e
        qualidade.
      </p>
      <div className="about-images">
        <img src={local} alt="Nosso Local" />
        <img src={equipe} alt="Nossa Equipe" />
      </div>
    </div>
  );
};

export default About;
