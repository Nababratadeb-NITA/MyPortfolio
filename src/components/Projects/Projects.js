import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/project1.png";
import bitsOfCode from "../../Assets/Projects/project2.png";
import reel from "../../Assets/Projects/project3.jpeg";

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
              description="Modern website which made with mordern technology for E-Cell club of our collage."
              link="https://github.com/nababrata12/E-Cell"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reel}
              isBlog={false}
              title= "Reel Downloader"
              description="Modern mobile app which made with React-Native for downloading  the tranding reels on instagram."
              link="https://github.com/nababrata12/Reel-saver"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
