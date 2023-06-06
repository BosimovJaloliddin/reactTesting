import React from "react";
import { houses } from "../../utils";
import { Wrapp, Box, WrapHouse, HouseImage } from "../../styled";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapp>
      {houses.map(
        ({ id, name, hidden, pathname, urlImage }) =>
          !hidden && (
            <WrapHouse key={id} onClick={() => navigate(pathname)}>
              <HouseImage src={urlImage} alt="image" />
              <Box>{name}</Box>
            </WrapHouse>
          )
      )}
    </Wrapp>
  );
};

export default Home;
