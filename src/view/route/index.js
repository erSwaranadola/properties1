import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import {  Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import Notlogin from "./NotLogin"

const Routenav=()=>{

    const [data,SetData] = useState("")

    // useEffect(()=>{
    //     SetData("gggg")

    // },[])

    
    return(
        <>
         
    <Container fluid style={{margin:0,padding:0}}>
        <Routes>
            <Route path="/"  Component={Notlogin}/>

        </Routes>
    </Container>
       
       
        
        </>
    )

}
export default Routenav