import { ReactNode } from "react";

export type SortDirection = "asc" | "desc";

export type CellType = {
  asHeader: true;
  direction?: SortDirection;
  prefix: ReactNode;
  actions: ReactNode;
} | {
  asHeader: false;
};

export type CellComponentProps = {
  children: ReactNode;
} & CellType;

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

export type ExtendedHeaderProps = {
  sort?: {
    direction?: SortDirection;
  };
};

export interface RenderCell<TModel> {
  key: keyof TModel;
  item: TModel;
  value: TModel[keyof TModel];
}

export interface ICell<TModel> {
  key: keyof TModel;
  header: HeaderProps<TModel>;
  render: string | ((props: RenderCell<TModel>) => JSX.Element);
}

export interface ICellExtended<TModel> extends ICell<TModel> {
  header: HeaderProps<TModel> & ExtendedHeaderProps;
}