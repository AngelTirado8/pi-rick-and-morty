import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">404: Página no encontrada</h1>
          <p className="text-center">Lo siento, no podemos encontrar la página que está buscando.</p>
          <p className="text-center">Puede intentar volver a la página de inicio haciendo clic en el siguiente botón:</p>
          <div className="text-center">
            <Link to="/home">
              <Button variant="primary">Volver a la página de inicio</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;

