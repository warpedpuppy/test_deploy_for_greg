import config from '../../config';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './registration-view.scss';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${config.API_URL}/users`, {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    })
      .then(response => {
        window.open('/', '_self'); // Note: '_self' in this context ensures that the page will open in the current tab. Let's try this again!
      })
      .catch(e => {
        console.log(e);
        console.log('error registering the user. Drat!')
      });
  };

  return (
    <Row className="justify-content-md-center">
      <Col md={8}>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label className="form-label">Username:</Form.Label>
            <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label className="form-label">Password:</Form.Label>
            <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label className="form-label">Email:</Form.Label>
            <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBirthday">
            <Form.Label className="form-label">Birthday:</Form.Label>
            <Form.Control type="date" value={birthday} onChange={e => setBirthday(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit}>Register</Button>
        </Form>
      </Col>
    </Row>
  );
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired
  })
};