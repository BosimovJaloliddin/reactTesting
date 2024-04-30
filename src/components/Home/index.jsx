import React from "react";
import { houses } from "../../mock/mock";
import { Wrapp, Box, WrapHouse, HouseImage } from "../../styled";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const addToken = () => {
    localStorage.setItem("token", true);
  };
  return (
    <Wrapp>
      <button onClick={() => navigate(1)}>go</button>
      {houses.map(({ id, name, urlImage }) => (
        <WrapHouse key={id} onClick={() => navigate(`/${name}`)}>
          <HouseImage src={urlImage} alt="image" />
          <Box>{name}</Box>
        </WrapHouse>
      ))}
      <button onClick={addToken}>add token</button>
    </Wrapp>
  );
};

export default Home;
