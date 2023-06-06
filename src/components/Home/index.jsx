import React, { useContext } from "react";
import { CreatList } from "../../contex";

const Home = () => {
  const [state, setState] = useContext(CreatList);
  const onDelete = (id) => {
    let res = state.filter((v) => v.id !== id);
    setState(res);
  };
  return (
    <div>
      <h1>Count:{state.length}</h1>
      {state.map((v) => (
        <h1 key={v.id}>
          {v.id}-{v.name} <button onClick={() => onDelete(v.id)}>delete</button>
        </h1>
      ))}
    </div>
  );
};

export default Home;
