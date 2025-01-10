import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";

import List_Articles from "./components/Articles/List_Articles";
import Articles from "./components/Pages/Articles";
import Details from "./components/Articles/Details";
import AdminLayout from "./Admin/layout/AdminLayout";
import Dashboard from "./Admin/components/Dashboard";
import Admin_Article from "./Admin/components/Articles";
import Connexion from "./components/Home/Connexion";

function App() {
  return (
    <>
      <BrowserRouter basename="/Tp_blog">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="connexion" element={<Connexion />} />
          <Route path="/articles" element={<Articles />}>
            <Route path="/articles" element={<List_Articles />} />
            <Route path="/articles/details/:id" element={<Details />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/articles" element={<Admin_Article></Admin_Article>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
