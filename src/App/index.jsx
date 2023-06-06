import React from "react";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import ContextList from "../contex";

const App = () => {
  return (
    <ContextList>
      <Navbar />
      <Home />
    </ContextList>
  );
};

export default App;
