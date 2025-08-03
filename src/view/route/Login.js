import { Col, Row } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import Admin from "../screen/admin/Admin"
import Addpost from "../screen/admin/Addpost"
import Preview from "../screen/admin/Preview"
import Update from "../screen/admin/Update"
import Profile from "../screen/admin/Profile"

const Login=()=>{
    return(
        <>
        
        <Row>

        </Row>
        <Row>
                <Col style={{flex:1}}>
                 <h1>Header</h1>
       
                </Col>
                <Col style={{flex:9}}>
                <Row>
<Col>
 <Routes>
            <Route path={'/'} Component={Admin}/>
                <Route path={'/addpost'} Component={Addpost}/>
            <Route path={'/preview'} Component={Preview}/>
            <Route path={'/update'} Component={Update}/>
            <Route path={'/profile'} Component={Profile}/>
            
        </Routes>
</Col>

                </Row>
                <Row>

                    <Col>
                        <p>Footer</p>
                    </Col>
                </Row>
                
                </Col>
        </Row>
        </>

    )
}
export default Login