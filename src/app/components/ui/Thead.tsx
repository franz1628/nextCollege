import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

const Thead: React.FC<Props> = ({ children }) => {
  return (
    <thead className="bg-gray-100">
      {children}
    </thead>
  );
};

export default Thead;
