import React from "react";
import reactDom from "react-dom";

const portal = document.getElementById("portal");

const Modal = (props) => {
  const { open, setOpenPortal } = props;
  return reactDom.createPortal(
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        inset: 0,
        background: "rgba(0, 0, 0, 0.55)",
      }}
    >
      <button onClick={() => setOpenPortal(!open)}>Clode Modal</button>
    </div>,
    portal
  );
};

export default Modal;
