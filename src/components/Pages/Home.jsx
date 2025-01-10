import Banner from "../Home/Baniere";
import Apropos from "../Home/Apropos";
import Home_Article from "./../Articles/Home_Article";
import Contact from "./../Home/Contact";
import Footer from "../partials/footer";
import NavigationBar from "../partials/NavigationBar";
function Home() {
  return (
    <>
      <NavigationBar />
      <Banner />
      <Apropos />
      <Home_Article />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
