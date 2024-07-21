/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container } from "./style";
import { Outlet } from "react-router-dom";

const Navabr = () => {
  return (
    <Container>
      <ul
        style={{
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          listStyle: "none",



        }}
      >
        <li>
          <a href="#">Home</a>
        </li>{" "}
        <li>
          <a href="#">News</a>
        </li>{" "}
        <li>
          <a href="#">Exam</a>
        </li>{" "}
        <li>
          <a href="#">Course</a>
        </li>{" "}
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default Navabr;
