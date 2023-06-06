import React, { useContext } from "react";
import { CreatList } from "../../contex";

const Navbar = () => {
  const data = useContext(CreatList);
  return (
    <div
      style={{
        padding: "2rem",
        fontSize: "24px",
        background: "black",
        color: "white",
      }}
    >
      <div>Count:{data[0].length}</div>
    </div>
  );
};

export default Navbar;
