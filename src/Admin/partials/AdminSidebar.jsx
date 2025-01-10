import { FaChartArea } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { MdArticle } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi";
import { AiOutlineSetting } from "react-icons/ai";
import { Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  const [ecranSize, setecranSize] = useState(window.innerWidth);

  useEffect(() => {
    const EcranSizes = () => {
      setecranSize(window.innerWidth);
    };

    window.addEventListener("resize", EcranSizes);

    return () => {
      window.removeEventListener("resize", EcranSizes);
    };
  });

  return (
    <>
      <div className="sideMobile">
        <div className="offcanvas text-light bg-primary offcanvas-start" id="Id2" aria-labelledby="staticBackdropLabel">
          <div className="sidebar-wrapper offcanvas-header">
            <h3 className="offcanvas-title" id="staticBackdropLabel">
              <div className="logo d-flex align-items-center justify-content-start">
                <a className="simple-text logo-mini mx-1">
                  <div className="logo-img">
                    <AiOutlineSetting />
                  </div>
                </a>
                <a className="simple-text">Connecté</a>
              </div>
            </h3>
            <div className="divider"></div>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <Nav>
              <ul className="list-style-type-none">
                <li>
                  <NavLink to="compte" className="nav-link text-light" activeClassName="active">
                    <p>
                      <HiUserCircle /> compte
                    </p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="articles" className="nav-link text-light" activeClassName="active">
                    <i />
                    <p>
                      <MdArticle />
                      Articles
                    </p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="utilisateurs" className="nav-link text-light" activeClassName="active">
                    <i />
                    <p>
                      <ImUsers />
                      utilisateurs
                    </p>
                  </NavLink>
                </li>
              </ul>
            </Nav>
          </div>
        </div>
      </div>
      <div className={`sidebar  ${ecranSize <= 990 ? "hidden d-none" : ""}`} style={{ zIndex: "1000" }} data-color={"blue"}>
        <div
          className="sidebar-background"
          style={{
            backgroundImage: "url('img/77kLebA.jpg')",
          }}
        />
        <div className="sidebar-wrapper">
          <div className="logo d-flex align-items-center justify-content-start">
            <a className="simple-text logo-mini mx-1">
              <div className="logo-img">
                <AiOutlineSetting />
              </div>
            </a>
            <a className="simple-text">Connecté</a>
          </div>
          <Nav>
            <li>
              <NavLink to="/admin" className="nav-link" activeClassName="active">
                <p>
                  <FaChartArea /> Dashboard
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="compte" className="nav-link" activeClassName="active">
                <p>
                  <HiUserCircle aria-setsize={2} /> compte
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="articles" className="nav-link" activeClassName="active">
                <p>
                  <MdArticle />
                  Articles
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="utilisateurs" className="nav-link" activeClassName="active">
                <p>
                  <ImUsers />
                  Abonnées
                </p>
              </NavLink>
            </li>
          </Nav>
        </div>
      </div>
    </>
  );
}
