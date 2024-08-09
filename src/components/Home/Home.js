import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Education from "./Education.js";

function Home() {
  return (
    <section className="main-container">
      <Container className="home-section" id="home">
        <h1 className="heading m-0 p-0 text-white">
          Hi Hi Hi!{" "}
        </h1>

        <h1 className="heading-name text-white">
          I'M
          <strong> Yanchen Zhou </strong>
        </h1>
      </Container>
      <Education />
    </section>
  );
}

export default Home;
