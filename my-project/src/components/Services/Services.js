import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SectionHeading from "../ScetionHeading/SectionHeading";

import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const[services,setServices]=useState([]);
  useEffect(()=>{
    fetch('../../data/Services.json')
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[])
  return (
    <section className="services-area mb-5">
      <Container>
       <SectionHeading heading="My Services"/>
        <Row>
          {
            services.map((item)=>(
            <Service key={item.id} item={item}></Service>))
          }
        </Row>
      </Container>
    </section>
  );
};
export default Services;
