import { Col, Row } from "react-bootstrap";


const PrimaryInput = ({ Title,inputtype,placeholder,require,labelrequire,labelcolor,margin,width }) => {
  return (
    <>
    <Row className={margin}>
      <Col>
      {labelrequire?
      <div>
        <label style={{color:labelcolor}}>
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
        <input style={{width:width}}type={inputtype} placeholder={placeholder}/>
        </div>
      </Col>
      </Row>
    </>
  );
};

export default PrimaryInput
