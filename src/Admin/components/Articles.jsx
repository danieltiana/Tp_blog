// import { TbListDetails } from "react-icons/tb";
import { BsFillTrashFill } from "react-icons/bs";
import { AiTwotoneEdit } from "react-icons/ai";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Donnees } from "../../components/Articles/Donnees";
import { MdArticle } from "react-icons/md";

export default function Admin_Article() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card className="card-stats">
            <Card.Body>
              <Row>
                <Col xs="6">
                  <div className=" icon-big text-center icon-warning">
                    <i className="text-primary">
                      <MdArticle />
                    </i>
                  </div>
                </Col>
                <Col xs="6">
                  <div className="numbers">
                    <Card.Title as="h4">Tous les articles</Card.Title>
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <hr></hr>
              <div className="stats">
                <i className="far fa-clock-o mr-1"></i>
                Liste Total: {Donnees.length}
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <Row>
        {" "}
        <div className="table-responsive">
          <table className="table table-sm table-hover">
            <thead>
              <tr className="table-dark">
                {/* <th scope="col">#</th> */}
                <th scope="col">Titre</th>
                <th scope="col">Description</th>
                <th scope="col">Categories</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {Donnees.map((liste) => (
                <tr key={liste.id}>
                  {/* <th scope="row">{liste.id}</th> */}
                  <td>{liste.titre}</td>
                  <td>{liste.descriptions.slice(0, 50) + "..."}</td>
                  <td>{liste.categories}</td>
                  <td>
                    <span>{/* <TbListDetails /> */}</span>
                    <span className="text-primary">
                      <AiTwotoneEdit />
                    </span>
                    <span className="text-danger">
                      <BsFillTrashFill />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Card.Footer>
            <div className="stats">
              <i className="far fa-clock-o mr-1"></i>
              <b>Liste Total: {Donnees.length}</b>
            </div>
          </Card.Footer>
        </div>
      </Row>
    </Container>
  );
}
