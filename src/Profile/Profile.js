import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = ({fullName , age , bio , profession}) => {
  return (
    <div>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>fullName</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="fullName"
              defaultValue={fullName}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Age</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Age"
              defaultValue={age}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>bio</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="bio"
              defaultValue={bio}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>profession</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="profession"
              defaultValue={profession}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
};


export default Profile;