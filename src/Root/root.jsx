import React from "react";
import { houses } from "../utils";
import { Routes, Route } from "react-router-dom";

const Root = () => {
  return (
    <Routes>
      {houses.map(({ id, pathname, element }) => {
        return <Route key={id} path={pathname} element={element} />;
      })}
    </Routes>
  );
};

export default Root;
