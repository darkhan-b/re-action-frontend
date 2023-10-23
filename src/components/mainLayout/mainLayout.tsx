import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export const MainLayout = (): JSX.Element => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};
