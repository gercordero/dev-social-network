import React from "react";
import Aux from "../Aux/Aux";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Footer from "./Footer/Footer";

const layout = () => (
  <Aux>
    <Navbar />
    <Landing />
    <Footer />
  </Aux>
);

export default layout;
