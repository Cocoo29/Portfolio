import React, { Suspense, lazy } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import homeLogo from "../../Assets/home-main-1.webp";

const Home2 = lazy(() => import("./Home2"));
const Type = lazy(() => import("./Type"));

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Bienvenue sur mon Portfolio!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h1>
                            <h1 className="heading-name">
                                Je suis
                                <strong className="main-name"> Coralie Coquelet</strong>
                            </h1>
                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Suspense fallback={<div>Loading...</div>}>
                                    <Type />
                                </Suspense>
                            </div>
                        </Col>
                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: "450px" }}
                                width="450"
                                height="450"
                                loading="lazy"
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Suspense fallback={<div>Loading...</div>}>
                <Home2 />
            </Suspense>
        </section>
    );
}

export default Home;
