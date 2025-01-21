import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

const Td: React.FC<Props> = ({ children }) => {
  return (
    <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">
      {children}
    </td>
  );
};

export default Td;
