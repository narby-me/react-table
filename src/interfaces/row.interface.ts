import { ReactNode } from "react";

export interface TRowModelExtension {
  id: number | string;
}

export interface RowComponentProps {
  children: ReactNode;
  selected?: boolean;
}