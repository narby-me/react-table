import { ReactNode } from "react";

export interface CellComponentProps<CellType> {
  children: ReactNode;
}

export type SortDirection = "asc" | "desc";

export interface SortDataProps<TModel> {
  data: TModel[];
  direction: SortDirection;
  key: keyof TModel;
}

export interface HeaderProps<TModel> {
  label: ReactNode | string;
  hidden?: boolean;
  order: number;
  sortData?: (props: SortDataProps<TModel>) => Promise<TModel[]>;
}

export interface RenderCell<TModel> {
  key: keyof TModel;
  item: TModel;
  value: TModel[keyof TModel];
}

export interface ICell<TModel> {
  key: keyof TModel;
  header: HeaderProps<TModel>;
  render: (props: RenderCell<TModel>) => JSX.Element;
}