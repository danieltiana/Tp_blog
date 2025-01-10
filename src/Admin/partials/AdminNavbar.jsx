import { RiAdminFill } from "react-icons/ri";
import { RiSideBarFill } from "react-icons/ri";
import { AiOutlinePoweroff } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <Navbar bg="dark" expand="lg" className="sticky-top">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button variant="dark" className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2">
            <RiAdminFill />
          </Button>
          <Navbar.Brand href="#home" onClick={(e) => e.preventDefault()} className="mr-2">
            BlogAdmin
          </Navbar.Brand>
        </div>
        <div className="ms-auto d-lg-none">
          <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#Id2" aria-controls="Id2">
            <RiSideBarFill />
          </button>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2 ms-2 text-secondary">
            <AiOutlineAppstore />
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse id="basic-navbar-nav w-100">
          <Nav className="nav mr-auto" navbar></Nav>
          <Nav className="ms-auto" navbar>
            <Nav.Item className="ms-auto">
              <Nav.Link className="m-0" href="#pablo" onClick={(e) => e.preventDefault()}>
                <Link to={"/"}>
                  <span className="no-icon text-danger">
                    <AiOutlinePoweroff />
                  </span>
                  <span className="d-lg-none">Se deconnecter</span>
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
