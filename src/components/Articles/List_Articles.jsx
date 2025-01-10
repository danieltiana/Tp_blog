import { Card, Col, Container, Row } from "react-bootstrap";
import { categories, Donnees } from "./Donnees";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function List_Articles() {
  // const [Donnee, SetDonnee] = useState(Donnees);
  const rediriger = useNavigate();
  const Redirection = (lien) => {
    rediriger(lien);
  };
  const [filtre, setFiltre] = useState("All");

  const Donnee = filtre === "All" ? Donnees : Donnees.filter((d) => d.categories.includes(filtre));

  return (
    <section className="bg-gradient-to-r from-black to-gray-900">
      <Container>
        <div data-aos="fade-down" className="p-24  mb-4 text-white rounded bg-gray-900 h-150">
          <div className="col-md-6 px-0">
            <h1 className="display-4 text-warning font-italic">Liste des blog</h1>
            <span className="absolute z-1 w-50 sm:w-100 left-20 h-40 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-5 hover:opacity-10 transition-opacity" />
            <span className="absolute z-1 w-40 sm:w-100 right-0 h-40 bg-gradient-to-r from-blue-900 to-purple-200 rounded-2xl blur-lg opacity-10 hover:opacity-10 transition-opacity" />

            <p className="lead text-secondary my-3">Vous pouvez voir la liste des blog ici. Consultez par categories</p>
            <p className="lead mb-0">
              <a className="text-secondary font-weight-bold text-decoration-none">
                LEs nouveautés et dernieres actus de jeux vidéos <br /> sont tous ici
              </a>
            </p>
          </div>
        </div>
        <div className="nav-scroller w-100 py-1 mb-2" style={{ width: "100%" }}>
          <nav className="nav d-flex align-items-center" style={{ width: "100%" }}>
            <span className="p2 btn btn-warning link-warning">Categories: </span>
            <button
              className="ms-2 mt-1 btn"
              onClick={() => {
                setFiltre("All");
              }}
            >
              Tous
            </button>
            {categories.map((categories) => (
              <>
                {categories.split(",").map((categ) => (
                  <button
                    key={categ}
                    className="ms-2 mt-1 btn"
                    onClick={() => {
                      setFiltre(categ);
                    }}
                  >
                    {categ}
                  </button>
                ))}
              </>
            ))}
          </nav>
        </div>
        <section id="articles" className="py-3">
          <Container>
            <Row>
              {Donnee.map((article) => (
                <Col key={article.id} md={4} className="mb-4">
                  <Card
                    onClick={function () {
                      Redirection(`details/${article.id}`);
                    }}
                    data-aos="slide-right"
                    className="h-100 shadow-sm  border-none shadow-sm bg-gradient-to-r from-black to-gray-900"
                  >
                    <Card.Header className="text-dark text-align-left p-0  bg-gradient-to-r from-black to-gray-900 text-align-left p-">
                      <span className="badge bg-gray-900 text-light">{article.categories ? article.categories : "Autre"}</span>
                    </Card.Header>
                    <Card.Img variant="top" className="shadow" src={article.image} style={{ objectFit: "cover", height: "250px" }} />
                    <Card.Body>
                      <Card.Title className="text-warning">{article.titre}</Card.Title>
                      <Card.Text>{`${article.descriptions.length <= 70 ? article.descriptions : article.descriptions.slice(0, 90) + "..."}`}</Card.Text>
                      <hr />
                      <small className="text-primary">
                        <button
                          onClick={function () {
                            Redirection(`details/${article.id}`);
                          }}
                        >
                          Voir plus
                        </button>
                      </small>
                      <hr />
                    </Card.Body>

                    <Card.Footer>
                      <small className="text-muted">{article.date}</small>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </Container>
    </section>
  );
}

export default List_Articles;
