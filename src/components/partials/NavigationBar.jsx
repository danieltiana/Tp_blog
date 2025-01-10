import { RiAdminFill } from "react-icons/ri";
import { AiFillInfoCircle } from "react-icons/ai";
import { BsGridFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function NavigationBar() {
  const [Scrolls, setScrolls] = useState(false);
  const [ecranSize, setecranSize] = useState(window.innerWidth);

  useEffect(() => {
    Aos.init({
      duration: 900,
      easing: "ease-in-out",
    });
    const EcranSizes = () => {
      setecranSize(window.innerWidth);
    };

    console.log(ecranSize);
    const Onscrolls = () => {
      if (window.scrollY >= 180) {
        setScrolls(true);
      } else {
        setScrolls(false);
      }
    };

    window.addEventListener("resize", EcranSizes);
    window.addEventListener("scroll", Onscrolls);
    return () => {
      window.removeEventListener("scroll", Onscrolls);
      window.removeEventListener("resize", EcranSizes);
    };
  });

  return (
    <Navbar
      data-aos={`${Scrolls == true ? "fade-down" : ""}`}
      className={` ${
        Scrolls == true
          ? "fixed-top  shadow glow backdrop-blur-transparent nabvar-dark text-light bg-gradient-to-r from-black to-gray-900 border-b z-1  transition-opacity fade-in transition-duration-1000"
          : " bg-gradient-to-r from-black to-gray-900 bg-opacity-50"
      } `}
    >
      <div className={`${Scrolls == true ? "container block-sm" : "block w-100"}`}>
        <Nav className={`flex justify-center ${Scrolls == true && ecranSize <= 641 ? "d-none" : ""}`}>
          <div className={`font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text ${Scrolls == true ? "text-2xl" : "text-5xl p-3 h1"}`}>
            <span className="bg-blue">{"< Games"}</span>
            <span>{"Blog/>"}</span>
          </div>
        </Nav>
        {Scrolls == false && (
          <>
            {/* <div className="absolute -inset  animate-glow bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-5 blur-2xl group-hover:opacity-10 transition-opacity" /> */}
            <div className="absolute -top-20 -right-0 w-100 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-2xl animate-glow" />
            {/* <div className="absolute -bottom-10 -left-0 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-2xl animate-pulse delay-700" /> */}
          </>
        )}

        <Nav data-aos={`${Scrolls == true ? "fade-down" : "fade-down"}`} className="">
          <div className="max-w-100 mx-auto px-4 bg-transparent">
            <div className="flex justify-between h-20">
              <div className="flex items-center gap-12">
                <div className="flex gap-8">
                  <ul className="nav justify-content-center  ">
                    <li className="nav-item">
                      <Link className="nav-link active" to={"/"} aria-current="page">
                        <span className="text-xl">
                          <AiFillHome />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-10 hover:opacity-30 transition-opacity" />
                        &nbsp; Acceuil
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/articles"}>
                        <span className="text-xl">
                          <BsGridFill />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-10 hover:opacity-30 transition-opacity" />
                        &nbsp;Articles
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/#about">
                        <span className="text-xl">
                          <AiFillInfoCircle />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-10 hover:opacity-30 transition-opacity" /> &nbsp;A propos
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/connexion">
                        <span className="text-xl">
                          <RiAdminFill />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-10 hover:opacity-30 transition-opacity" /> &nbsp;Connexino
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Nav>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
