import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
import imgPath2 from "../../img/image2.JPG";
import imgPath1 from "../../img/image1.JPG";
import "./Home.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <section className="page-section">
            <div className="container">
                <div className="text-center mb-3">
                    <h2 className="section-heading text-uppercase text-white pb-4">Education</h2>
                </div>
                <ul className="timeline mt-3">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={imgPath1} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="text-white">2019-2023</h4>
                                <h4 className="subheading text-white">University Of Electronic Science And Technology Of China</h4>
                            </div>
                            <div className="timeline-body"><p className="text-white timeline-text">Major: Software Engineering</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={imgPath2} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="text-white">2024-2025</h4>
                                <h4 className="subheading text-white">University of Southern California</h4>
                            </div>
                            <div className="timeline-body"><p className="text-white timeline-text">Master in Computer Science</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image timeline-image-last">
               
               
                            <h4>
                            <br />
                                Experience
                                <br />
                                My Life...
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

      {/* <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container> */}
    </Container>
  );
}
export default Home2;
