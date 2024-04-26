import React, { useMemo } from "react";
import { TableProps } from "../interfaces";
import { useTableConfig } from "../providers";

export function Table<TModel>(props: TableProps<TModel>) {
  const { TableComponent } = useTableConfig();
  const [data, setData] = React.useState<TModel[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { columns, fetch } = props;

  const dispatch = useMemo(async () => {
    setIsLoading(true);
    const { data } = await fetch({});
    setData(data);
    setIsLoading(false);
  }, [fetch]);

  return (
    <TableComponent>
      hola
    </TableComponent>
  );
}