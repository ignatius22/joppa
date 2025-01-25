import React, { createContext, useState } from "react";

// Create Context
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [someProp, setSomeProp] = useState("Some value");

  return (
    <AppContext.Provider value={{ someProp, setSomeProp }}>
      {children}
    </AppContext.Provider>
  );
};
