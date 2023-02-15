import { Container, Row } from "react-bootstrap";


import { useEffect, useState } from "react";
import Album from "../Album/Album";
import SectionHeading from "../ScetionHeading/SectionHeading";
import "./Albums.css";
const Alubums = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    fetch("../../data/Albums.json")
      .then((res) => res.json())
      .then((data) => setAlbums(data));
      }, []);
  return (
    <section className="albums py-5">
      <Container>
        <SectionHeading heading="Some Moments"/>
        <Row>
        {albums.map(item=> (
            <Album key={item.id} item={item}></Album>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Alubums;
