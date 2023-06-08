import React, { useEffect, useState } from "react";
import { Wrapp, Box, WrapHouse, HouseImage } from "../../styled";
import { useParams } from "react-router-dom";
import { houses } from "../../mock/mock";

const Villa = () => {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    let res = houses.filter((v) => v.name === params.id);
    setData(...res);
  }, [params.id]);
  return (
    <div>
      <Wrapp>
        <WrapHouse>
          <HouseImage src={data.urlImage} alt="image" />
          <Box>{data.name}</Box>
        </WrapHouse>
      </Wrapp>
    </div>
  );
};

export default Villa;
