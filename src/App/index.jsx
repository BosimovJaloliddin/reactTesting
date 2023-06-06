import React, { useReducer } from "react";

const App = () => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "black":
        return (state = action.type);
      case "yellow":
        return (state = action.type);
      case "green":
        return (state = action.type);
      default:
        return "red";
    }
  }, "white");
  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          border: "1px solid black",
          margin: "2rem",
          background: `${state}`,
        }}
      ></div>
      <button
        onClick={() => dispatch({ type: "black" })}
        style={{ marginLeft: "1rem", padding: "20px" }}
      >
        black
      </button>
      <button
        onClick={() => dispatch({ type: "yellow" })}
        style={{ marginLeft: "1rem", padding: "20px" }}
      >
        yellow
      </button>
      <button
        onClick={() => dispatch({ type: "green" })}
        style={{ marginLeft: "1rem", padding: "20px" }}
      >
        green
      </button>
    </div>
  );
};

export default App;
