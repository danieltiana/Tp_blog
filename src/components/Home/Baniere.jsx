import Aos from "aos";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Banner() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  return (
    <div className="banner py-5 bg-transparent bg-gradient-to-r from-black to-gray-900 bg-opacity-50 ">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <span className="absolute z-1 w-50 sm:w-100 left-0 h-40 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-10 hover:opacity-20 transition-opacity" />

            <h1 className="display-4 fw-bold" data-aos="fade-right">
              <span className="text-primary">{"<"}Games</span>Blog{"/>"}
            </h1>

            <p className="text-light opacity-70 mb-3" data-aos="fade-left">
              <span>
                Decouvrir les nouveautés, des articles de jeux videos <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, est molestiae aperiam ab incidunt reiciendis,
                praesentium quisquam tempore esse sed aspernatur iusto! Est vel rem assumenda, id laborum expedita eius.
              </span>
            </p>
          </Col>
          <Col md={6}>
            <img data-aos="fade-up" src="img/312123.jpg" alt="Blog Banner" className="img-fluid rounded shadow" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
