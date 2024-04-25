import React from "react";
import { TableProviderProps } from "../interfaces";

const Context = React.createContext({});

export function TableProvider({
  children,
}: TableProviderProps) {
  return (
    <Context.Provider
      value={{}}
    >
      {children}
    </Context.Provider>
  );
}

export function useTable() {
  return React.useContext(Context);
}