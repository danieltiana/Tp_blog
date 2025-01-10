import { Outlet } from "react-router-dom";
import NavigationBar from "./../partials/NavigationBar";
import Footer from "../partials/footer";

export default function Articles() {
  return (
    <>
      <NavigationBar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}
