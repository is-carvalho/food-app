import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "../../styles/MenuStyle.css";
import burger11 from "../../assets/menu/burger-11.jpg";
import burger12 from "../../assets/menu/burger-12.jpg";
import burger13 from "../../assets/menu/burger-13.jpg";
import burger14 from "../../assets/menu/burger-14.jpg";
import burger15 from "../../assets/menu/burger-15.jpg";
import burger16 from "../../assets/menu/burger-16.jpg";
import burger17 from "../../assets/menu/burger-17.jpg";
import burger18 from "../../assets/menu/burger-18.jpg";

const burgers = [
  {
    name: "Clássico",
    img: burger11,
    desc: "Pão, carne 180g, queijo, alface, tomate e molho especial.",
    price: "R$ 24,90",
  },
  {
    name: "Cheddar Bacon",
    img: burger12,
    desc: "Pão, carne 180g, cheddar cremoso, bacon crocante.",
    price: "R$ 27,90",
  },
  {
    name: "Duplo Smash",
    img: burger13,
    desc: "Dois smash 100g, queijo, cebola caramelizada.",
    price: "R$ 29,90",
  },
  {
    name: "Veggie",
    img: burger14,
    desc: "Hambúrguer de grão-de-bico, queijo, salada e maionese vegana.",
    price: "R$ 26,90",
  },
  {
    name: "Barbecue",
    img: burger15,
    desc: "Pão australiano, carne 180g, queijo, onion rings, barbecue.",
    price: "R$ 28,90",
  },
  {
    name: "Blue Cheese",
    img: burger16,
    desc: "Pão, carne 180g, queijo gorgonzola, rúcula, cebola roxa.",
    price: "R$ 30,90",
  },
];

const Menu = () => (
  <div className="menu-container">
    <h1>Nosso Menu</h1>
    <CardGroup>
      {burgers.map((burger, idx) => (
        <Card key={idx} className="menu-card">
          <Card.Img variant="top" src={burger.img} alt={burger.name} />
          <Card.Body>
            <Card.Title>{burger.name}</Card.Title>
            <Card.Text>{burger.desc}</Card.Text>
            <div className="menu-price">{burger.price}</div>
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  </div>
);

export default Menu;
