import React, { FC, useMemo, useState } from 'react';

import { Badge, Button, Row } from 'react-bootstrap';

import DraggableElement from './DraggableElement';
import styles from './KanbanColumn.module.scss';
import { IElement } from './models';
import Droppable from './primitives/Droppable';

interface IColumn {
  heading: string;
  elements: IElement[];
  data: IElement[];
  setData: React.Dispatch<React.SetStateAction<IElement[]>>;
}

const KanbanColumn: FC<IColumn> = ({ heading, elements, data, setData }) => {
  const columnIdentifier = useMemo(() => heading, [heading]);

  const amounts = useMemo(
    () => data.filter(elm => elm.column === columnIdentifier).length,
    [data, columnIdentifier],
  );

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleEdit = (): void => {
    setShowModal(true);
  };

  return (
    <>
      <div
        className={`d-flex flex-row justify-content-between align-items-center p-2 ${styles.columnHeaderWrapper}`}
      >
        <div className="d-flex flex-row justify-content-start align-items-center">
          <Badge bg="dark" pill>
            {amounts}
          </Badge>
          <div className="fw-bold ms-2">{heading}</div>
        </div>
        <button type="button" className="btn-close" aria-label="Закрыть"></button>
      </div>
      <div className="d-flex flex-column flex-grow-1">
        <Droppable id={columnIdentifier}>
          <Row>
            {elements.map((elm, elmIndex) => (
              <DraggableElement
                key={`draggable-element-${elmIndex}-${columnIdentifier}`}
                card={elm}
                data={data}
                setData={setData}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            ))}
            <div className={`${styles.dropPlaceholder}`} />
          </Row>
        </Droppable>
      </div>
      <Button variant="dark" type="button" className="p-2" onClick={handleEdit}>
        <i className="bi bi-plus-circle" />
        <span className="ms-2 text-light">Add Task</span>
      </Button>
    </>
  );
};

export default KanbanColumn;
