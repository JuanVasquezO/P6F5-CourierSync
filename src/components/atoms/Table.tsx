// src/components/atoms/Table.tsx
import React from 'react';

export type Column<Row> = {
  header: string;
  accessor: keyof Row;
};

type TableProps<Row extends Record<string, any>> = {
  columns: Column<Row>[];
  data: Row[];
  className?: string;
};

function Table<Row extends Record<string, any>>({
  columns,
  data,
  className = '',
}: TableProps<Row>) {
  return (
    <table className={`w-full border-collapse ${className}`}>
      <thead>
        <tr>
          {columns.map((col, idx) => (
            <th key={idx} className="py-2 px-4 bg-blue-500 text-white">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIdx) => (
          <tr key={rowIdx} className="border-b">
            {columns.map((col, colIdx) => (
              <td key={colIdx} className="py-2 px-4">
                {row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
