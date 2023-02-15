import Col from "react-bootstrap/Col";
import "./Service.css";

const Service = ({item }) => {
  return (
    <Col lg={4}>
      <div className="single-services">
        <img src={item.img} alt="" className="w-100 mb-2" />
        <h3 className="mx-2">{item.heading}</h3>
        <h5 className="mx-2">{item.price}</h5>
        <p className="mx-2">{item.text}</p>
        <button className="btn btn-primary m-2">Book Now</button>
      </div>
    </Col>
  );
};
export default Service;
