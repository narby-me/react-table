import React, { Context, FunctionComponent } from "react";
import { CellComponentProps, ContextType, TableComponentProps, TableProps, TableProviderProps } from "../interfaces";
import { RowComponentProps } from "../interfaces/row.interface";

function Table<TableType>(props: TableComponentProps<TableType>) {
  return <table {...props} />;
}

function Row<RowType>(props: RowComponentProps<RowType>) {
  return <tr {...props} />;
}

function Cell<CellType>(props: CellComponentProps<CellType>) {
  return <td {...props} />;
}

const INITIAL_STATE: ContextType<any, any, any> = {
  TableComponent: Table,
  RowComponent: Row,
  CellComponent: Cell
};

const Context = React.createContext<ContextType<any, any, any>>(INITIAL_STATE);

export function TableProvider<
  TableType = HTMLTableElement,
  RowType = HTMLTableRowElement,
  CellType = HTMLTableCellElement,
>({
  children,
  TableComponent,
  CellComponent,
  RowComponent,
}: TableProviderProps<TableType, RowType, CellType>) {
  return (
    <Context.Provider
      value={{
        TableComponent,
        CellComponent,
        RowComponent
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useTableConfig<
  TableType = HTMLTableElement,
  RowType = HTMLTableRowElement,
  CellType = HTMLTableCellElement,
>(): ContextType<TableType, RowType, CellType> {
  return React.useContext<ContextType<TableType, RowType, CellType>>(Context);
}