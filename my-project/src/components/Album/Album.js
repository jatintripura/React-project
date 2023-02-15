import { Col } from "react-bootstrap";
const Album=({item})=> {
  return (
    <Col lg={3}>
<img src={item.img} alt="" className=" w-100 mb-4"/>
    </Col>

  );
}
export default Album;