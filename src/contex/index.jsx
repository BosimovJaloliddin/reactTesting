import React, { createContext, useState } from "react";
export const StudentList = createContext();

const ContextList = ({ children }) => {
  const [state, setState] = useState([
    { id: 1, name: "Ali" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Ali" },
    { id: 4, name: "Ali" },
    { id: 5, name: "Ali" },
    { id: 6, name: "Ali" },
    { id: 7, name: "Ali" },
    { id: 8, name: "Ali" },
    { id: 9, name: "Ali" },
    { id: 10, name: "Ali" },
  ]);
  return (
    <StudentList.Provider value={[state, setState]}>
      {children}
    </StudentList.Provider>
  );
};

export default ContextList;
