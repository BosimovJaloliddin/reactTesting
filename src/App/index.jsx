import React from "react";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import ContectList from "../contex";

const Root = () => {
  return (
    <ContectList>
      <Navbar />
      <Home />
    </ContectList>
  );
};

export default Root;
