import React, { FC, useState } from 'react';

import { Button, Col } from 'react-bootstrap';

import styles from './DraggableElement.module.scss';
import EditTask from './EditTask';
import ElementMenu from './ElementMenu';
import { IDraggableElement } from './models';
import Draggable from './primitives/Draggable';

const colors = [
  { title: 'Low', color: 'rgb(0 128 0 / 0.5)' },
  { title: 'Medium', color: 'rgb(255 255 0 / 0.5)' },
  { title: 'High', color: 'rgb(255 69 0 / 0.5)' },
  { title: 'Highest', color: 'rgb(255 0 0 / 0.5)' },
];

const DraggableElement: FC<IDraggableElement> = ({
  card,
  data,
  setData,
  showModal,
  setShowModal,
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShowMenu = (): void => {
    setShowMenu(prev => !prev);
  };

  const priorityColor = (priority: string): string => {
    const foundColor = colors.find(item => item.title === priority);

    if (foundColor) {
      return foundColor.color;
    }

    return colors[0].color;
  };

  return (
    <>
      <EditTask showModal={showModal} setShowModal={setShowModal} />
      <Draggable id={card.id}>
        <Col
          className={styles.elementWrapper}
          style={{ backgroundColor: priorityColor(card.priority) }}
        >
          <div className={styles.titleWrapper}>
            {showMenu ? (
              <ElementMenu
                setShowMenu={setShowMenu}
                identifier={card.id}
                setShowModal={setShowModal}
                data={data}
                setData={setData}
                showMenu={showMenu}
              />
            ) : (
              <></>
            )}

            <div className={styles.cardTitle}>{card.title}</div>
            <Button
              type="button"
              variant="link"
              className={`p-0 text-dark ${styles.threeDotsButton}`}
              onClick={handleShowMenu}
            >
              <i className="bi bi-three-dots-vertical" />
            </Button>
          </div>

          <div className={styles.elementText}>{card.content}</div>
          <div className={styles.elementDate}>
            <i className="bi bi-calendar-week-fill" />
            <div className="ms-2">Ends in 30-09-23</div>
          </div>
        </Col>
      </Draggable>
    </>
  );
};

export default DraggableElement;
