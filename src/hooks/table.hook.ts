import { useCallback, useEffect, useMemo, useState } from "react";
import { ICellExtended, TRowModelExtension, TableData, TableQuery, UseTableProps, UseTableValues } from "../interfaces";

export function useTable<TModel extends TRowModelExtension>({
  fetch,
  columns,
}: UseTableProps<TModel>): UseTableValues<TModel> {
  const [data, setData] = useState<TableData<TModel>>();
  const [query, setQuery] = useState<TableQuery<TModel>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const _columns = useMemo<ICellExtended<TModel>[]>(() => {
    return columns.map((column) => ({
      ...column,
      header: {
        ...column.header,
        sort: {
          direction: query.sort?.[column.key],
        },
      },
    }));
  }, [columns]);

  const refetch = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    const result = await fetch(query);
    setData(result);
    setIsLoading(false);
  }, [query]);

  useEffect(() => {
    refetch();
  }, [query]);

  return {
    columns: _columns,
    isLoading,
    data,
    refetch,
    setQuery,
  };
}