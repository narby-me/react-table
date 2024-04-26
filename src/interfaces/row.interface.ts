import { ReactNode } from "react";

export interface RowComponentProps<RowType> {
  children: ReactNode;
  selected?: boolean;
}