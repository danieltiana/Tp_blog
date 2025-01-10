import AdminNavbar from "../partials/AdminNavbar";
import AdminSidebar from "../partials/AdminSidebar";
import "./../Assets/css/admin.css";
import "../Assets/css/demo.css";

import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
export default function AdminLayout() {
  return (
    <>
      <div className="wrapper">
        <div className="main-panel">
          <AdminNavbar />
          <div className="content">
            <Container>
              <Outlet></Outlet>
            </Container>
          </div>
        </div>
        <AdminSidebar />
      </div>
    </>
  );
}
