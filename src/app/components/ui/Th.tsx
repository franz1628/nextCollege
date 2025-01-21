import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

const Th: React.FC<Props> = ({ children }) => {
  return (
    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-300">
      {children}
    </th>
  );
};

export default Th;
