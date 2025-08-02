import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../screen/admin"
import Admin from "../screen/admin/Admin"
import Signup from "../screen/admin/Signup"
import Addpost from "../screen/admin/Addpost"
import Preview from "../screen/admin/Preview"
import Update from "../screen/admin/Update"
import Profile from "../screen/admin/Profile"

const Routenav=()=>{
    return(
        <>
        
        <BrowserRouter>
        <h1>Header</h1>
        <Routes>
            <Route path={'/'} Component={Login}/>
            <Route path={'/admin'} Component={Admin}/>
            <Route path={'/signup'} Component={Signup}/>
            <Route path={'/addpost'} Component={Addpost}/>
            <Route path={'/preview'} Component={Preview}/>
            <Route path={'/update'} Component={Update}/>
            <Route path={'/profile'} Component={Profile}/>
            
        </Routes>
        <h1>Footer</h1>
        </BrowserRouter>
        </>
    )

}
export default Routenav