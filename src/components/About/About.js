import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "../About/TechStack";
import Aboutcard from "../About/AboutCard";
import laptopImg from "../../Assets/about.webp";
import Toolstack from "../About/Toolstacks";

function About() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            Qui suis-<strong className="purple">JE </strong>?
                        </h1>
                        <Aboutcard />
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img src={laptopImg} alt="about" className="img-fluid" />
                    </Col>
                </Row>
                <h1 className="project-heading">
                    Mes <strong className="purple">Compétences</strong> Professionnelles
                </h1>

                <Techstack />

                <h1 className="project-heading">
                    Les <strong className="purple">Outils</strong> que j'utilise
                </h1>
                <Toolstack />

            </Container>
        </Container>
    );
}

export default About;
