import { Col, Row } from "react-bootstrap";


const PrimaryInput = ({ Title,inputtype,placeholder,require,labelrequire }) => {
  return (
    <>
    <Row>
      <Col>
      {labelrequire?
      <div>
        <label>
          {Title}
          <label style={{color:'red'}}>{require?"*":""}</label>
        </label>
        </div>
:""
}
      </Col>
      </Row>
    <Row>
      <Col>
      <div>
        <input type={inputtype} placeholder={placeholder}/>
        </div>
      </Col>
      </Row>
    </>
  );
};

export default PrimaryInput
