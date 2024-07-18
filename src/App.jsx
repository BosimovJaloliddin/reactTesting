import { Suspense, lazy, useState } from "react";

const Modal = lazy(() => import("./components/Modal"));
// import Modal from "./components/Modal";

const App = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <label>
        Search albums:
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Modal query={query} />
      </Suspense>
    </>
  );
};

export default App;

// function Loading() {
//   return <h2>🌀 Loading...</h2>;
// }
