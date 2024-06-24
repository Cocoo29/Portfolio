import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiGithub,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <br />
        <span style={{ fontSize: "0.2em" }}>JavaScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <br />
        <span style={{ fontSize: "0.2em" }}>Node.js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <br />
        <span style={{ fontSize: "0.2em" }}>React</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <br />
        <span style={{ fontSize: "0.2em" }}>MongoDB</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <br />
        <span style={{ fontSize: "0.2em" }}>Git</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
        <br />
        <span style={{ fontSize: "0.2em" }}>GitHub</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <br />
        <span style={{ fontSize: "0.2em" }}>HTML5</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <br />
        <span style={{ fontSize: "0.2em" }}>CSS3</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <br />
        <span style={{ fontSize: "0.2em" }}>Bootstrap</span>
      </Col>
    </Row>
  );
}

export default Techstack;
