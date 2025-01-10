import { Card, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Donnees } from "./Donnees";
import "./../../assets/css/details.css";
import Home_Article from "./Home_Article";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const DetailArticle = Donnees.find((item) => item.id === parseInt(id));
  if (!DetailArticle) {
    return (
      <Container>
        <div className="flex items-center" style={{ height: "100vh" }}>
          <h2 className="text-center mb-5 font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text text-5xl">Article introuvable</h2>
          &nbsp;&nbsp;
          <button
            className="btn btn-warning"
            onClick={() => {
              navigate(-1);
            }}
          >
            Retour
          </button>
        </div>
      </Container>
    );
  }
  return (
    <section className="py-5 bg-transparent bg-gradient-to-r from-black to-gray-900 bg-opacity-50 opacity-0 transition-opacity-duration-1000 ease-out opacity-100">
      <Container>
        <Row>
          <button
            className="btn btn-warning mt-2"
            onClick={() => {
              navigate(-1);
            }}
          >
            Retour
          </button>
          <Card className="h-100 shadow-sm bg-gray-900 rounded text-light" style={{ marginTop: "55px" }}>
            <Card.Header className="text-dark text-align-left p-0 bg-transparent mt-5 mx-5">
              <span className="badge bg-secondary text-light">categorie : {DetailArticle.categories}</span>
            </Card.Header>
            <Card.Body className="">
              <div>
                <Card.Img variant="top" className="border m-2 bg-dark" style={{ height: "60vh", objectFit: "cover" }} src={`../../${DetailArticle.image}`} />
              </div>
              <Card.Title className="rounded border shadow p-3 text-center text-warning text-2xl">{DetailArticle.titre}</Card.Title>
              <Card.Text className="p-5">{DetailArticle.descriptions}</Card.Text>
              <small className="text-muted"></small>
            </Card.Body>
            <Card.Footer className="mx-5 small text-secondary">
              <span>Publié le </span>
              {DetailArticle.date}
            </Card.Footer>
          </Card>
        </Row>
        <center>
          <div className="gap-6">
            <Link to={"articles"} className="btn group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl relative text-align-center">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-60 hover:opacity-100 transition-opacity" />
              <span className="relative text-white font-medium ">Voir tous les articles</span>
            </Link>
          </div>
        </center>
        <Row></Row>;
      </Container>
      <h2 data-aos="fade-down" className="text-center mb-5 font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text text-5xl">
        Vous pourez aimer aussi
      </h2>
      <Home_Article></Home_Article>
    </section>
  );
}
