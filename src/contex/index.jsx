import React, { createContext, useState } from "react";

export const CreatList = createContext();

const ContectList = ({ children }) => {
  const [state, setState] = useState([
    { id: 1, name: "John", username: "j_doe" },
    { id: 2, name: "Jane", username: "j_smith" },
    { id: 3, name: "Mark", username: "mark100" },
    { id: 4, name: "Sarah", username: "sarah_l" },
    { id: 5, name: "David", username: "davey88" },
    { id: 6, name: "Emily", username: "emily_w" },
    { id: 7, name: "Michael", username: "mike_j" },
    { id: 8, name: "Grace", username: "grace11" },
    { id: 9, name: "Alex", username: "alex_1999" },
    { id: 10, name: "Olivia", username: "olivia_m" },
  ]);
  return (
    <CreatList.Provider value={[state, setState]}>
      {children}
    </CreatList.Provider>
  );
};

export default ContectList;
