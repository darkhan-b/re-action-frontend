import React, { useState } from 'react';

import { Form, Button, Modal } from 'react-bootstrap';

interface EditTaskProps {
  showModal: boolean;
  setShowModal: (val: boolean) => void;
}

interface INewTask {
  id: string;
  title: string;
  content: string;
  column: string;
  priority: string;
  dueDate: Date | string;
}

const EditTask = ({ showModal, setShowModal }: EditTaskProps): React.ReactElement => {
  const handleClose = (): void => setShowModal(false);
  const handleSave = (): void => {
    setShowModal(false);
    setNewTask(initialTask);
  };

  const initialTask = {
    id: Date.now().toString(),
    title: '',
    content: '',
    column: 'Backlog',
    priority: 'Low',
    dueDate: new Date().toLocaleString('ru'),
  };

  const [newTask, setNewTask] = useState<INewTask>(initialTask);

  return (
    <Modal show={showModal} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              title="title"
              name="title"
              value={newTask.title}
              onChange={e =>
                setNewTask({
                  ...newTask,
                  title: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              title="description"
              name="description"
              as="textarea"
              rows={3}
              value={newTask.content}
              onChange={e =>
                setNewTask({
                  ...newTask,
                  content: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="column">
            <Form.Label> </Form.Label>
            Colunm
            <Form.Select
              title="column"
              name="colunm"
              role="listbox"
              value={newTask.column}
              onChange={e =>
                setNewTask({
                  ...newTask,
                  column: e.target.value,
                })
              }
            >
              <option>Backlog</option>
              <option>In Progress</option>
              <option>In Review</option>
              <option>Done</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="priority">
            <Form.Label> </Form.Label>
            Priority
            <Form.Select
              title="priority"
              name="priority"
              role="listbox"
              value={newTask.priority}
              onChange={e =>
                setNewTask({
                  ...newTask,
                  priority: e.target.value,
                })
              }
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Highest</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mt-3" controlId="date">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              name="date"
              title="date"
              type="date"
              value={newTask.dueDate.toLocaleString('ru')}
              onChange={e =>
                setNewTask({
                  ...newTask,
                  dueDate: e.target.value,
                })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTask;
