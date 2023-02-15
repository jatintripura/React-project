import React from "react";
import { Container, Row } from "react-bootstrap";
import SubHeaderImg from "../SubheaderImg/SubHeaderImg";
import SubHeaderText from "../SubHeaderText/SubHeaderText";
import "./SubHeaderTextImg.css";

const SubHeaderTextImg = () => {
  return (
    <section className="sub-header-text-img">
      <Container>
        <Row className="about-area">
            <SubHeaderImg/>
            <SubHeaderText/>
        </Row>
      </Container>
    </section>
  );
};

export default SubHeaderTextImg;
