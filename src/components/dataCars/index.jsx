import React, { useEffect, useState } from "react";
import { dataCars } from "../../mock/mock";

const Cars = () => {
  const [data, setData] = useState({});

  // useEffect(() => {
  //   let res = houses.filter((v) => v.name === params.id);
  //   setData(...res);
  //   console.log(res, "res");
  // }, [params.id]);

  const getCars = (e) => {
    console.log(e);
    return data.filter((v) => v.year === 2007);
  };
  return (
    <div>
      <button onClick={() => getCars()}>2007</button>
    </div>
  );
};

export default Cars;
