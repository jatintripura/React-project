import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
  const Banner = () => {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    fetch("../../data/Slider.json")
      .then((res) => res.json())
      .then((data) => setSlider(data));
  }, []);
  return (
    
    <Carousel className="my-slider">
        {slider.map((item) => (
          <Carousel.Item key ={item.id}>
            <img  className=" d-flex w-100"  src={item.img} alt="First slide" />
            <Carousel.Caption className="py-1">
              <h3>{item.subheading}</h3>
              <h1>{item.heading}</h1>
              <p>{item.text}</p>
              <Button className="banner-btn">{item.button}</Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    
  );
};
export default Banner;
