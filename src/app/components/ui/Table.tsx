import React, { ReactNode } from 'react';

interface TableProps {
  children: ReactNode
}

const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        {children}
      </table>
    </div>
  );
};

export default Table;
