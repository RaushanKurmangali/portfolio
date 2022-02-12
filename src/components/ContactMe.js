import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

const ContactMe = () => {
  return (
    <Container
      fluid
      id="contact"
      style={{
        backgroundColor: "",
        fontFamily: "Roboto",
        padding: "20px 0 50px",
        marginBottom: "250px"
      }}
    >
      <h1
        style={{
          width: "100%",
          textAlign: "center",
          marginBottom: "30px",
          color: "#db9487",
          fontWeight: "bold",
          textShadow: "1px 1px 2px #db9487"
        }}
      >
        Contact Me
      </h1>
      <Row
        style={{
            padding: "0px 5%",
          alignItems: "center",
          height: "300px",
        }}
      >
        <Col
          sm={6}
          md={3}
          lg={3}
          
          style={{ display: "flex", justifyContent: "center", height: "100%" }}
        >
          <div
            className="rounded-xl grow shadow-5"
            style={{
              backgroundColor: "white",
              width: "70%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SocialIcon url="https://twitter.com/" />
          </div>
        </Col>
        <Col
          sm={6}
          md={3}
          lg={3}
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div
            className="pa2 rounded-xl grow shadow-5"
            style={{
              backgroundColor: "white",
              width: "70%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SocialIcon url="https://www.instagram.com/" />
          </div>
        </Col>
        <Col
          sm={6}
          md={3}
          lg={3}
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div
            className="pa2 rounded-xl grow shadow-5"
            style={{
              backgroundColor: "white",
              width: "70%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SocialIcon url="https://www.linkedin.com/" />
          </div>
        </Col>
        <Col
          sm={6}
          md={3}
          lg={3}
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div
            className="pa2 rounded-xl grow shadow-5"
            style={{
              backgroundColor: "white",
              width: "70%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <SocialIcon url="https://github.com/" fgColor="#dee2e6" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
