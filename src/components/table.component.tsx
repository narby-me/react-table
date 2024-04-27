import React, { useMemo } from "react";
import { TRowModelExtension, TableProps } from "../interfaces";
import { useTableConfig } from "../providers";

export function Table<TModel extends TRowModelExtension>({ columns, data }: TableProps<TModel>) {
  const {
    TableComponent,
    RowComponent,
    CellComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    render,
  } = useTableConfig<TModel>();
  const _columns = useMemo(
    () => columns
      .filter((column) => !column.header.hidden)
      .sort((a, b) => a.header.order - b.header.order)
    , [columns],
  );

  return (
    <TableComponent>
      <HeaderComponent>
        <RowComponent>
          {_columns.map((column, index) => (
            <CellComponent
              key={index}
              asHeader={true}
              direction={column.header.sort?.direction}
              actions={<span />}
              prefix={<span />}
            >
              {column.header.label}
            </CellComponent>
          ))}
        </RowComponent>
      </HeaderComponent>
      <BodyComponent>
        {data?.data.map((row) => (
          <RowComponent key={row.id}>
            {_columns
              .map((column, index) => (
                <CellComponent
                  asHeader={false}
                  key={index}
                >
                  {
                    typeof column.render === "string"
                      ? render[column.render]({ key: column.key, item: row, value: row[column.key] })
                      : column.render({ key: column.key, item: row, value: row[column.key] })
                  }
                </CellComponent>
              ))
            }
          </RowComponent>
        ))}
      </BodyComponent>
      <FooterComponent>
        Footer
      </FooterComponent>
    </TableComponent>
  );
}