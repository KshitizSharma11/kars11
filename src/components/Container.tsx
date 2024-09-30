import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className=' mx-10 my-10 p-4'>
      {children}
    </div>
  );
};

export default Container;
