import React, { FC, ReactNode } from 'react';

import { useDroppable } from '@dnd-kit/core';

interface IDroppable {
  id: string;
  children: ReactNode;
}

const Droppable: FC<IDroppable> = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`flex-grow-1 ${isOver ? 'opacity-50' : 'opacity-100'}`}
    >
      {children}
    </div>
  );
};

export default Droppable;
