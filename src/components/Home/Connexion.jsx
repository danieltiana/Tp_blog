import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Connexion() {
  return (
    <section>
      <Container>
        <Row className="mt-24">
          <Col md={5}>
            <h2 className="text-center mb-5 font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text text-5xl">Connexion</h2>
          </Col>
          <Col md={5}>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" name="formId1" id="formId1" placeholder="" />
              <label>Identifiant</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" name="formId1" id="formId1" placeholder="" />
              <label>Mot de passe</label>
            </div>
            <Link to="/admin" className="btn btn-warning">
              Connexion
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
