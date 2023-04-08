import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send form data to an API or service
    console.log('Form submitted:', formData);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <div className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions, please feel free to reach out to us using the contact form below:</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} required />
          </Form.Group>
          <Button variant="secondary" className="m-2" type="submit">Submit</Button>
        </Form>
      </div>
    </Container>
  );
};

export default Contact;
