import { AiOutlineAreaChart } from "react-icons/ai";
import { FcRules } from "react-icons/fc";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { FaRss } from "react-icons/fa";
import { AiFillBug } from "react-icons/ai";

import { Card, Col, Container, Row, Tooltip } from "react-bootstrap";
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function Dashboard() {
  const data = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: "Page E",
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: "Page F",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className=" text-warning">
                        <FcRules />
                      </i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Articles</p>
                      <Card.Title as="h4">10</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Listes
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="ight-3 text-success">
                        <BsFillEnvelopeAtFill />
                      </i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Emails</p>
                      <Card.Title as="h4">15000</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Voir la boite
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="text-primary">
                        <FaRss />
                      </i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Abonnées</p>
                      <Card.Title as="h4">23</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  Dernier heures
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="s-favourite-28 text-danger">
                        <AiFillBug />
                      </i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers icon-warning">
                      <p className="card-category">Bugs</p>
                      <Card.Title as="h4">5</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1 text-danger"></i>
                  Logs aujourd{"'"}hui
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Resumé </Card.Title>
                <p className="card-category"></p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours" style={{ minHeight: "60Vh" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                      width={500}
                      height={400}
                      data={data}
                      margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                      }}
                    >
                      <CartesianGrid stroke="#f5f5f5" />
                      <XAxis dataKey="name" scale="band" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </Card.Body>
              <Card.Footer>
                <hr />{" "}
                <div className="stats">
                  <i className="fas fa-history text-xl">
                    <AiOutlineAreaChart />
                  </i>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
