import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import Home from "./Home.jsx";
import React from "react";
import Contact from "./Contact";
import About from "./About.jsx";
import Login from "./Login.js";
import Register from "./Register.js";
import Reset from "./Reset.js";
import Dashboard from "./Dashboard.js";
import ErrorPage from "./Error-page.jsx";
import * as PropTypes from "prop-types";
import { createBrowserHistory } from "history";
import Service from "./Services";
import Layout from "./components/Layout";

function Redirect(props) {
    return null;
}

Redirect.propTypes = {to: PropTypes.string};
export default function App() {
  return (

    <Routes>

        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} > </Route>
        <Route path="contact" element={<Contact />} > </Route>
        <Route path="services" element={<Service />} > </Route>
        <Route path="register" element={<Register />} > </Route>
        <Route path="login" element={<Login />} ></Route>
        <Route path="reset" element={<Reset />} > </Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="/*" element={<ErrorPage />} ></Route>
    </Routes>


  );
}



