import { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [openPortal, setOpenPortal] = useState(false);
  return (
    <div
      style={{
        maxWidth: "1240px",
        margin: "100px auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {openPortal ? (
        <Modal open={openPortal} setOpenPortal={setOpenPortal} />
      ) : null}
      <button onClick={() => setOpenPortal(!openPortal)}>Open Modal</button>
    </div>
  );
};

export default App;
