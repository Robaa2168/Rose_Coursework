import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div className="about">
      <Container>
        <Row>
          <Col>
            <h2>About Us</h2>
            <p>
              Capital Cities Cost of Living is a platform created to help travelers, expats, and locals get an idea of the cost of living in various capital cities around the world. Our aim is to provide up-to-date and accurate information to make your decision-making process easier, whether you are planning a vacation, a move, or just curious about different cities.
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h3>Developer Biography</h3>
            <p>
              John Doe is a software engineer with a passion for travel and exploring new cultures. He created this platform as a way to combine his love for programming and his desire to help others access valuable information about capital cities around the world. When he's not coding, you can find him planning his next adventure or discovering new cuisines.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
