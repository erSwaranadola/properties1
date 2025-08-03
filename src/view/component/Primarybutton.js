import { Button, Col, Row } from "react-bootstrap"

const Primarybutton=({title,Width,height,margin})=>{
    return(
        <Row  className={margin}>
            <Col>
            <Button variant="outline-light" style={{width:Width,height:height}}>{title}</Button>
            </Col>
        </Row>
    )
}
export default Primarybutton