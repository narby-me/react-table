import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './table.component';
import { TableProvider } from '../providers';
import { ICellExtended, TableData } from '../interfaces';

describe('Table', () => {
  const mockColumns: ICellExtended<any>[] = [
    { header: { label: 'Column 1', order: 1, hidden: false }, key: 'field1' },
    { header: { label: 'Column 2', order: 2, hidden: false }, key: 'field2' },
  ];
  const mockData: TableData<any> = {
    totalPages: 1,
    currentPage: 1,
    pageSize: 10,
    data: [{ id: '1', field1: 'data1', field2: 'data2' }],
  };

  test('renders table headers', () => {
    render(
      <TableProvider render={{}}>
        <Table columns={mockColumns} data={mockData} />
      </TableProvider>
    );

    const header1 = screen.getByText('Column 1');
    const header2 = screen.getByText('Column 2');

    expect(header1).toBeInTheDocument();
    expect(header2).toBeInTheDocument();
  });

  test('renders table data', () => {
    render(
      <TableProvider render={{}}>
        <Table columns={mockColumns} data={mockData} />
      </TableProvider>
    );

    const data1 = screen.getByText('data1');
    const data2 = screen.getByText('data2');

    expect(data1).toBeInTheDocument();
    expect(data2).toBeInTheDocument();
  });
});