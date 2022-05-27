import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/project1.png";
import bitsOfCode from "../../Assets/Projects/project2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="RN-App Showcase"
              description="Modern website to showcase your own nft marketplace Build and Deploy a fully responsive Modern application with Modern design, animations."
              link="https://github.com/nababrata12/NftApp-Showcase"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title= "Illuminate E-Cell"
              description="Its a website which made with mordern technology for E-Cell club of our collage."
              link="https://github.com/nababrata12/E-Cell"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
