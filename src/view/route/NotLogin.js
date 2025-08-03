import { Route, Routes } from "react-router-dom"
import Login from "../screen/admin"


const Notlogin=()=>{
    return(
       <Routes>
        <Route path="/" Component={Login}/>
       </Routes>

    )

}
export default Notlogin
