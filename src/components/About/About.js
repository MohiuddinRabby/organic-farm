import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import aboutImg from "../../assets/img/trans2.png";
import "./About.css";
import { Fade, Rotate } from "react-reveal";
const About = () => {
  return (
    <Container fluid="md" className="about-section py-5">
      <Row className="py-5">
        <Col md={6}>
          <Fade left>
            <Image src={aboutImg} alt="about" fluid />
          </Fade>
        </Col>
        <Col md={6}>
          <div className="about-titles">
            <Rotate>
              <h3 id="about-title-one">A Few Words About Our Farm</h3>
            </Rotate>
            <Fade right>
              <h3 id="about-title-two">ABOUT US</h3>
              <p id="about-title-three">
                Farm is made up of two certified organic properties, where our
                farmers are constantly growing organic vegetables, crops, and
                fruits of the highest quality in the US.
              </p>
              <div className="founder-msg">
                <h5 id="founder-name">Sam william</h5>
                <h6 id="team-status">Farm Founder</h6>
              </div>
            </Fade>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
