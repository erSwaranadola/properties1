import { Col, Image, Row } from 'react-bootstrap'

const Primaryimage=({width1})=>{
    
    return(
        <Row>
            <Col style={{backgroundColor:'#000'}}>
            
            <Image src={require('../assets/image/banner.jpg')  } style={{width:width1,opacity:.5}}/>
            </Col>
        </Row>

    )
}
export default Primaryimage