import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nababrata Deb </span>
            from <span className="purple"> Agartala, India.</span>
            <br />I am a undergraduate B.Tech student pursuing bechelors
             degree in Electrical Engineering in NIT Agartala.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Case Study
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Collected every stone thrown at me and made myself an empire!"{" "}
          </p>
          <footer className="blockquote-footer">Nababrata</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
