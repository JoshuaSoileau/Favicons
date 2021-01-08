import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AppContext = React.createContext({
  data: {},
  setData: () => {},
});

export const AppProvider = ({ children }) => {
  const [data, setData] = useLocalStorage("some-key", {});

  return (
    <AppContext.Provider
      value={{
        ...data,
        setData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);

  if (context === undefined || context === null) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return context;
};
