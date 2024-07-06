import { useCallback, useState } from "react";
import Navbar from "./Navabr";

const App = () => {
  const [count, setCount] = useState(0);

  const title = useCallback((res) => {
    console.log(res);
    return { title: "Home" };
  }, []);

  console.log("App");
  return (
    <div style={{ maxWidth: "1240px", margin: "auto" }}>
      <div>
        <Navbar data={title} />
        <h1>{count}</h1>
        <button
          style={{ width: "100px", height: "40px" }}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          style={{ width: "100px", height: "40px" }}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default App;
