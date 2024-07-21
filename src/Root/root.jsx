import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navabr from "../components/Navabr";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navabr />}>
          <Route path="/" element={<h1>Hellow</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
