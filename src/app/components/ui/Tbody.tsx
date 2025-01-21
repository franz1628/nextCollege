import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

const Tbody: React.FC<Props> = ({ children }) => {
  return (
    <tbody className="bg-gray-100">
      {children}
    </tbody>
  );
};

export default Tbody;
