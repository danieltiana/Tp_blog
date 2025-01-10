import Aos from "aos";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Apropos() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  });
  return (
    <section id="about" className="p-5 bg-gradient-to-r text-secondary from-black to-gray-900 flex items-center" style={{ minHeight: "100vh" }}>
      <Container>
        <Row data-aos="fade-down" className="justify-content-center mt-5">
          <Col md={8} className="text-justify">
            <h2 className="mb-4 text-center font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text text-5xl">A propos</h2>
            <p className="">Ce site destiné pour la publiccation de blog de jeu video, nous sommes heueux de vous informer les nouveautés de ju video</p>
            <p className=" mt-3">
              Depuis 19566 nous sommes heureux de vous informer. Veuillexz nous abonner <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quas voluptatibus aperiam eius quam voluptates repellendus non ipsam pariatur! Fuga, consequuntur! Ea maxime facilis officia
              ut, rerum repellendus quisquam velit.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Apropos;
