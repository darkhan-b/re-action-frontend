import React, { useEffect, useRef } from 'react';

import { Button, ButtonGroup } from 'react-bootstrap';

import styles from './ElementMenu.module.scss';
import { IElement } from './models';

interface ElementMenuProps {
  setShowMenu: (value: React.SetStateAction<boolean>) => void;
  identifier: string;
  setShowModal: (value: React.SetStateAction<boolean>) => void;
  data: IElement[];
  setData: React.Dispatch<React.SetStateAction<IElement[]>>;
  showMenu: boolean;
}

const ElementMenu = ({
  setShowMenu,
  identifier,
  setShowModal,
  data,
  setData,
  showMenu,
}: ElementMenuProps): JSX.Element => {
  const handleEdit = (): void => {
    setShowMenu(false);
    setShowModal(true);
  };

  const handleDelete = (): void => {
    const newData = data.filter(item => item.id !== identifier);

    setData(newData);
    setShowMenu(false);
  };

  // This ref will be connected to ButtonGroup
  const buttonGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (event: MouseEvent): void => {
      // If ButtonGroup is open and the clicked target is not within ButtonGroup,
      // then close ButtonGroup
      const target = event.target as
        | HTMLDivElement
        | HTMLInputElement
        | HTMLParagraphElement
        | HTMLButtonElement
        | HTMLHeadingElement
        | Node;

      // Check that we've clicked outside of the ButtonGroup container and that it is open
      if (
        showMenu &&
        buttonGroupRef.current &&
        !buttonGroupRef.current.contains(target)
      ) {
        setShowMenu(false);
        event.stopPropagation();
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [showMenu, setShowMenu]);

  return (
    <ButtonGroup vertical ref={buttonGroupRef} className={styles.elementMenuWrapper}>
      <Button type="button" variant="light" className="text-start" onClick={handleEdit}>
        Edit
      </Button>
      <div className={styles.divider} />
      <Button type="button" variant="light" className="text-start" onClick={handleDelete}>
        Delete
      </Button>
    </ButtonGroup>
  );
};

export default ElementMenu;
