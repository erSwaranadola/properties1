import { Col, Row } from "react-bootstrap"

const Primarytext=({title,size,textcolor})=>{
    return(
        <Row>
            <Col>
            <h3 style={{fontSize:size, color:textcolor}}>{title}</h3>
            </Col>
        </Row>
    )
}
export default Primarytext