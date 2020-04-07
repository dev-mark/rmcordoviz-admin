import React from "react";

// bootstrap
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

// image
import RMClogo from "../assets/images/RMC-Logo.png";

const Login = () => {
  return (
    <Container fluid className=" flex fullheight ">
      <Row noGutters className=" flex-center form-container">
        <Col md={6} lg={6} className=" image-holder">
          asd
        </Col>
        <Col xs={12} md={6} lg={6} className=" text-center">
          <img src={RMClogo} alt="RMC logo" className=" image my-4" />
          <Form>
            <Form.Group className=" flex">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="form-input flex-center"
              />
            </Form.Group>
            <Form.Group className="flex">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                type="password"
                placeholder="Password"
                className="form-input flex-center"
              />
            </Form.Group>
            <button type="submit" className=" form-buttons gold-background">
              Login
            </button>
            <hr className="hr-white" />
            <a href="www.google.com">Create an Account</a>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
