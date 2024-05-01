import React, { Context } from "react";
import { BodyComponentProps, CellComponentProps, ContextType, FooterComponentProps, HeaderComponentProps, TableComponentProps, TableProviderProps } from "../interfaces";
import { RowComponentProps } from "../interfaces/row.interface";

function Table(props: TableComponentProps) {
  return <table {...props} />;
}

function Row(props: RowComponentProps) {
  return <tr {...props} />;
}

function Cell(props: CellComponentProps) {
  return <td>{props.children}</td>;
}

function Header(props: HeaderComponentProps) {
  return <thead {...props} />
}

function Body(props: BodyComponentProps) {
  return <tbody {...props} />
}

function Footer(props: FooterComponentProps) {
  return <tfoot {...props} />;
}

const INITIAL_STATE: ContextType<any> = {
  TableComponent: Table,
  RowComponent: Row,
  CellComponent: Cell,
  HeaderComponent: Header,
  BodyComponent: Body,
  FooterComponent: Footer,
  render: {},
};

const Context = React.createContext<ContextType<any>>(INITIAL_STATE);

export function TableProvider<TModel>({
  children,
  render = {},
  TableComponent = Table,
  CellComponent = Cell,
  RowComponent = Row,
  HeaderComponent = Header,
  BodyComponent = Body,
  FooterComponent = Footer,
}: TableProviderProps<TModel>) {
  return (
    <Context.Provider
      value={{
        TableComponent,
        CellComponent,
        RowComponent,
        HeaderComponent,
        BodyComponent,
        FooterComponent,
        render,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useTableConfig<TModel>(): ContextType<TModel> {
  return React.useContext<ContextType<TModel>>(Context);
}