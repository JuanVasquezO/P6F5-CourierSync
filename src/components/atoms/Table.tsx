import React from 'react';

const Table = ({ headers, children }: { headers: string[], children: React.ReactNode }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="py-2 px-4 bg-blue-500 text-white">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
