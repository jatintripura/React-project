import React from 'react';
import { Col } from 'react-bootstrap';
import SubImg from '../../img/photo.jpg';
import './SubheaderImg.css';
const SubHeaderImg = () => {
    return (
        <Col lg={5}>
<img className='img-heading' src={SubImg} alt="" />
        </Col>
    );
};

export default SubHeaderImg;