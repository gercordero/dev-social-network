import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Aux from "../Aux/Aux";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Footer from "./Footer/Footer";
import Register from "../Auth/Register";
import Login from "../Auth/Login";

const layout = () => (
  <Router>
    <Aux>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <div className="container">
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
      <Footer />
    </Aux>
  </Router>
);

export default layout;
