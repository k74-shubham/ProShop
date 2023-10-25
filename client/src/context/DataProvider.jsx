import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = (props) => {
  const [account, setAccount] = useState("");
  const contextValue = { account, setAccount };
  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
