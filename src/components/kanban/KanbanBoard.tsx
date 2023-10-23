import React, { useCallback, useEffect, useState } from 'react';

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectPriority } from '../../features/priority/prioritySlice';
import type { RootState } from '../../store/store';

import styles from './KanbanBoard.module.scss';
import KanbanColumn from './KanbanColumn';
import { DragEndEvent, IElement } from './models';

const COLUMNS = ['Backlog', 'In Progress', 'In Review', 'Done'];
const PRIORITIES = ['Low', 'Medium', 'High', 'Highest', 'All'];

export const DEFAULT_COLUMN = 'Backlog';

const DEFAULT_DATA_STATE: IElement[] = [
  {
    id: 'test-1',
    title: 'title-1',
    content:
      'Hello world 1 Each as a <number> between 0 and 255, a <percentage> between 0% and 100%, or the keyword none, which represent the red, green, and blue channels, respectively',
    column: 'Backlog',
    priority: 'Low',
  },
  {
    id: 'test-2',
    title: 'title-2',
    content: 'Hello world 2',
    column: 'In Progress',
    priority: 'High',
  },
  {
    id: 'test-3',
    title: 'title-3',
    content: 'Hello world 3',
    column: 'In Review',
    priority: 'Highest',
  },
  {
    id: 'test-4',
    title: 'title-4',
    content: 'Hello world 4',
    column: 'Done',
    priority: 'Medium',
  },
];

export const KanbanBoard = (): JSX.Element => {
  const [data, setData] = useState<IElement[]>(DEFAULT_DATA_STATE);
  const [filteredByPriorityData, setFilteredByPriorityData] =
    useState<IElement[]>(DEFAULT_DATA_STATE);

  const selectedPriority = useSelector(
    (state: RootState) => state.priority.curentPriority,
  );
  const dispatch = useDispatch();

  const handleOnDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      const elementId = active.id;
      const deepCopy = [...data];

      const updatedState = deepCopy.map((elm): IElement => {
        if (elm.id === elementId) {
          const column = over?.id ? String(over.id) : elm.column;

          return { ...elm, column };
        }

        return elm;
      });

      setData(updatedState);
    },
    [data, setData],
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  useEffect(() => {
    if (selectedPriority !== 'All') {
      setFilteredByPriorityData(data.filter(item => item.priority === selectedPriority));
    } else {
      setFilteredByPriorityData([...data]);
    }
  }, [data, selectedPriority]);

  return (
    <Container className={styles.wrapper}>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to={'/'}>
              <img
                src={require('../../assets/images/re-action.png')}
                alt="logo"
                className={styles.logo}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as="button">
                <i className="bi bi-layout-sidebar-inset-reverse" />
                <span className="ms-2">Add Colunm</span>
              </Nav.Link>

              <NavDropdown
                title={
                  <>
                    <i className="bi bi-exclamation-circle-fill" />
                    <span className="ms-2">Priority</span>
                  </>
                }
                id="collasible-nav-dropdown"
              >
                {PRIORITIES.map(priority => (
                  <NavDropdown.Item
                    as="button"
                    key={priority}
                    onClick={() => dispatch(selectPriority(priority))}
                  >
                    {priority}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <DndContext sensors={sensors} onDragEnd={handleOnDragEnd}>
        <Row as="ul" className={`h-100 justify-content-start ${styles.resetStyle}`}>
          {COLUMNS.map((column, columnIndex) => (
            <li
              key={`column-${columnIndex}`}
              className={`col d-flex flex-column justify-content-between me-2 p-1 ${styles.columnWrapper}`}
            >
              <KanbanColumn
                heading={column}
                elements={filteredByPriorityData.filter(elm => elm.column === column)}
                data={data}
                setData={setData}
              />
            </li>
          ))}
        </Row>
      </DndContext>
    </Container>
  );
};

export default KanbanBoard;
