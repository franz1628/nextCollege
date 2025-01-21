import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

const Tr: React.FC<Props> = ({ children }) => {
  return (
    <tr className='bg-white'>
      {children}
    </tr>
  );
};

export default Tr;
