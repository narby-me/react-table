import { Dispatch, FunctionComponent, ReactNode, SetStateAction } from "react";
import { CellComponentProps, ICell, ICellExtended, RenderCell, SortDirection } from "./cell.interface";
import { RowComponentProps, TRowModelExtension } from "./row.interface";
import { HeaderComponentProps } from "./header.interface";
import { BodyComponentProps } from "./body.interface";
import { FooterComponentProps } from "./footer.interface";

export interface TableComponentProps {
  children: ReactNode;
}

export interface TableProviderProps<TModel> {
  children: ReactNode;
  TableComponent?: FunctionComponent<TableComponentProps>;
  RowComponent?: FunctionComponent<RowComponentProps>;
  CellComponent?: FunctionComponent<CellComponentProps>;
  HeaderComponent?: FunctionComponent<HeaderComponentProps>;
  BodyComponent?: FunctionComponent<BodyComponentProps>;
  FooterComponent?: FunctionComponent<FooterComponentProps>;
  render?: Record<string, (props: RenderCell<TModel>) => JSX.Element>;
}

export type ContextType<TModel> = {
  TableComponent: FunctionComponent<TableComponentProps>;
  RowComponent: FunctionComponent<RowComponentProps>;
  CellComponent: FunctionComponent<CellComponentProps>;
  HeaderComponent: FunctionComponent<HeaderComponentProps>;
  BodyComponent: FunctionComponent<BodyComponentProps>;
  FooterComponent: FunctionComponent<FooterComponentProps>;
  render: Record<string, (props: RenderCell<TModel>) => JSX.Element>;
};

export interface TableQuery<TModel extends TRowModelExtension> {
  page?: number;
  pageSize?: number;
  sort?: Record<keyof TModel, SortDirection>;
}

export interface TableData<TModel extends TRowModelExtension> {
  totalPages: number;
  currentPage: number;
  pageSize: number;
  totalRows?: number;
  data: TModel[];
}

export interface UseTableProps<TModel extends TRowModelExtension> {
  fetch: (query: TableQuery<TModel>) => Promise<TableData<TModel>>;
  columns: ICell<TModel>[];
}

export interface UseTableValues<TModel extends TRowModelExtension> {
  data?: TableData<TModel>;
  isLoading: boolean;
  columns: ICell<TModel>[];
  refetch: () => Promise<void>;
  setQuery: Dispatch<SetStateAction<TableQuery<TModel>>>;
}

export interface TableProps<TModel extends TRowModelExtension> {
  columns: ICellExtended<TModel>[];
  data: TableData<TModel>;
}
