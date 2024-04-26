import { FunctionComponent, ReactNode } from "react";
import { CellComponentProps, ICell } from "./cell.interface";
import { RowComponentProps } from "./row.interface";

export interface TableComponentProps<TableType> {
  children: ReactNode;
}

export interface TableProviderProps<TableType, RowType, CellType> {
  children: ReactNode;
  TableComponent: FunctionComponent<TableComponentProps<TableType>>;
  RowComponent: FunctionComponent<RowComponentProps<RowType>>;
  CellComponent: FunctionComponent<CellComponentProps<CellType>>;
}

export type ContextType<TableType, RowType, CellType> = {
  TableComponent: FunctionComponent<TableComponentProps<TableType>>;
  RowComponent: FunctionComponent<RowComponentProps<RowType>>;
  CellComponent: FunctionComponent<CellComponentProps<CellType>>;
};

export interface TableQuery<TModel> {
  take?: number;
  skip?: number;
}

export interface TableData<TModel> {
  total: number;
  data: TModel[];
}

export interface TableProps<TModel> {
  fetch: (query: TableQuery<TModel>) => Promise<TableData<TModel>>;
  columns: ICell<TModel>[];
}
