import { memo } from "react";

const Navbar = (props) => {
  console.log("Navbar");
  return (
    <div>
      <h1>Navbar {props?.data("props")?.title}</h1>
    </div>
  );
};
export default memo(Navbar);
