import React from "react";

// bootstrap
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";

// image
import MelaniePhoto from "../assets/images/Melanie.PNG";
import RossPhoto from "../assets/images/Ross.PNG";
import { ReactComponent as RMCLogo } from "../assets/images/RMC-logo.svg";

const Login = () => {
  return (
    <Container fluid className=" flex fullheight ">
      <Row noGutters className=" flex-center form-container">
        <Col md={6} lg={6} className=" image-holder black-background">
          <Carousel controls={false} indicators={false} interval={8000}>
            <Carousel.Item>
              <img
                className="carousel-image"
                src={RossPhoto}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src={MelaniePhoto}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={6}
          className=" text-center black-background input-container"
        >
          <RMCLogo className=" rmc-logo" />
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
            <li>
              <a href="www.google.com">Forgot password</a>
            </li>
            <li>
              <a href="www.google.com">Create an Account</a>
            </li>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
