import React from "react";
import { pages } from "../utils";
import { Routes, Route } from "react-router-dom";

const Root = () => {
  return (
    <Routes>
      {pages.map(({ id, path, element }) => {
        return <Route key={id} path={path} element={element} />;
      })}
    </Routes>
  );
};

export default Root;
