import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../styles/ContactStyle.css";

const Contact = () => {
  useEffect(() => {
    document.body.classList.add("contact-page");
    return () => {
      document.body.classList.remove("contact-page");
    };
  }, []);
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <div className="contact-container">
      <h1>Contato</h1>
      <Form onSubmit={handleSubmit} className="contact-form">
        <Form.Group controlId="formNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formMensagem">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="contact-btn">
          Enviar
        </Button>
        {enviado && (
          <div className="contact-success">Mensagem enviada com sucesso!</div>
        )}
      </Form>
    </div>
  );
};

export default Contact;
