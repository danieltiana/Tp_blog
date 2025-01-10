import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  const [data, setData] = useState({ userName: "", email: "", message: "" });
  const handleChange = (event) => {
    setData((prevData) => {
      console.log(event.target.value);
      return { ...prevData, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.send("service_qjqufnq", "template_fwyufut", data).then((response) => {
      console.log(response.text);
      alert("Message envoyé");
    });
  };

  useEffect(() => {
    emailjs.init({
      publicKey: "K8YjG7EYwOpOvzpnx",
    });
  });
  return (
    <section id="contact" className="bg-gradient-to-r from-black to-gray-900">
      <Container>
        <Row className="justify-content-center py-5 shadow rounded">
          <Col md={6}>
            <h2 className="text-center mb-4 text-center font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text text-5xl">Nous contacter</h2>
            <form action="" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Nom</Form.Label>
                <Form.Control className="bg-gray-900 focus:bg-dark transition-opacity" type="text" value={data.userName} name="userName" onChange={handleChange} placeholder="Entrer  votre nom" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control className="bg-gray-900" type="email" value={data.email} name="email" onChange={handleChange} placeholder="Entrer votre email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control className="bg-gray-900" as="textarea" rows={3} name="message" value={data.message} onChange={handleChange} placeholder="Votre message" />
              </Form.Group>

              <div className="text-center">
                <div className="gap-6">
                  <Button type="submit" className="btn group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl relative text-align-center">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-60 hover:opacity-100 transition-opacity" />
                    <span className="relative text-white font-medium">Envoyer le message</span>
                  </Button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
