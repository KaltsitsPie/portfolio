import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section className="main-container">
      <Container className="home-section" id="home">
        {/* <Particle /> */}
        {/* <Container className="home-content bg-info"> */}
          {/* <Row>
            <Col md={7} className="home-header bg-success"> */}
              <h1 className="heading m-0 p-0 text-white">
                Hi Hi Hi!{" "}
              </h1>

              <h1 className="heading-name text-white">
                I'M
                <strong> Yanchen Zhou </strong>
              </h1>

              {/* <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div> */}
            {/* </Col>
          </Row> */}
        {/* </Container> */}
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
