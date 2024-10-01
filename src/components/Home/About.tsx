import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">Anees Nazeer</span> and I'm
              from <span className="yellow">Kerala, India.</span>
              <br />
              <br />
              I hold a degree in Computer Application.
              <br />
              <br />
              As a <b className="yellow">Full-Stack</b> developer, I thrive on
              tackling new challenges and continuously expanding my skillset.
              <br />
              <br />I am proficient in <b className="yellow">JavaScript</b> and
              its ecosystems, including React JS, Node JS, and{" "}
              <b className="yellow">Solidity</b>.
              <br />
              <br />I have a passion for working with{" "}
              <b className="yellow">Node JS, MongoDB</b>, and{" "}
              <i>
                <b className="yellow">
                  modern JavaScript libraries and frameworks
                </b>
              </i>
              , such as{" "}
              <i>
                <b className="yellow">React JS</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="yellow">Next JS</b>
              </i>
              .
              <br />
              <br />
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AneesNazeer"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/AneesNazeer"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <RiTwitterXFill />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anees-nazeer-099ab6225/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_._j_o_h_n_w_i_c_k_._/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
