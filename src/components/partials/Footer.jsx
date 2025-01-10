import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className=" bg-gradient-to-r from-black to-gray-900 text-light p-4">
      <Container className="p-5">
        <footer className="container">
          <div className="row">
            <div className="col-6 col-md">
              <h5>Naviguer</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <Link className="link-secondary" to="/">
                    Accueil
                  </Link>
                </li>
                <li>
                  <a className="link-secondary" href="/articles">
                    Articles
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#contact">
                    Nous contacter
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Articles</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="link-secondary" href="#">
                    far-cry 5
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    Gta 6: noouveua!
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    Poursuite Maj
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Nous conatcer</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="link-secondary" href="#">
                    email: lorem@.com
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    Adresse: Adresse@img
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    Gaming
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>A propos</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="link-secondary" href="#">
                    Equipes
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    Blog: GamesBlog
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#about">
                    A propos
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-5 text-center">
              <h2>
                <span className="text-primary">{"<"} Games</span>Blog {"/>"}
                <br />
                (c)2024
              </h2>
            </div>
          </div>
        </footer>
      </Container>
    </section>
  );
}
