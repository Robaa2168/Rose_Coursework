import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Landing.css';

const Landing = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/search');
      };
  return (
    <div>
    <Container fluid className="background d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(woi.jpg)` }}>
      <Row className="text-center">
        <Col className="bg-text">
          <h1 className="text-white mb-4">Discover Cities All Over The World</h1>
          <Button variant="primary" size="lg" onClick={handleClick}>Get started...</Button>
        </Col>
      </Row>
    </Container>
    <Container className="my-5 d-flex justify-content-center align-items-center" >
  <Row>
    <Col className="text-center">
      <p>
        Welcome to Alone World. Explore countries and their capital cities. If you have any inquiries,{' '}
        <Link to="/contact">Contact us</Link>.
      </p>
    </Col>
  </Row>
</Container>

    <footer className="bg-dark text-white py-3">
      <Container>
        <Row>
          <Col className="text-center">
            <p>© 2023 Alone World.com All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  </div>
  );
};

export default Landing;
