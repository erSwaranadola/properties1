import { Col, Image, Row } from "react-bootstrap"
import Primarybutton from "../../component/Primarybutton"
import PrimaryInput from "../../component/PrimaryInput"
import Primarytext from "../../component/Primarytext"
import Primaryimage from "../../component/Primaryimage"
import img1 from '../../assets/image/banner.jpg'

const Login=()=>{
    return(
        <>
        <Row >
            <Col>
                    <Primaryimage  width1={"100%"}/>

                    <div style={{position:'absolute',top:"20%",left:"20%",backgroundColor:''}}>

                        
    <Primarytext title={"Login user"} size={25} textcolor={'white'}/>
        <Primarytext title={"Pls enter you Email and password"} size={15} textcolor={"#FE988C"}/>

        

        <PrimaryInput 
            Title="UserName" 
            inputtype={'text'} 
            placeholder={"Enter Name"} 
            require={true} 
            labelrequire={true}
            labelcolor={'white'}
            margin={'mt-2'}
            width={250}
            /> 
        
        <PrimaryInput 
        Title="Email" 
        inputtype={'Email'} 
        placeholder={"Enter EMail"} 
        require={true} 
        labelrequire={true}
         labelcolor={'white'}
         margin={'mt-2'}
         width={250}
        /> 
        
        <PrimaryInput 
        Title="Password" 
        inputtype={'password'}
         placeholder={"Enter Password"} 
         require={true} 
         labelrequire={true}
          labelcolor={'white'}
          margin={'mt-2'}
          width={250}
         /> 
         <Primarybutton title={"Log in"} Width={180} margin={'mt-2'}
         
         />

                    </div>
            </Col>
        </Row>
       
        </>
    )

        }
        export default Login