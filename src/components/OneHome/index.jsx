import React from "react";
import { Wrapp, Box, WrapHouse, HouseImage } from "../../styled";
import { houses } from "../../utils";
import { useLocation } from "react-router-dom";

const Villa = () => {
  const location = useLocation();
  return (
    <div>
      <Wrapp>
        {houses.map(
          ({ id, name, pathname, urlImage }) =>
            pathname === location.pathname && (
              <WrapHouse key={id}>
                <HouseImage src={urlImage} alt="image" />
                <Box>{name}</Box>
              </WrapHouse>
            )
        )}
      </Wrapp>
    </div>
  );
};

export default Villa;
