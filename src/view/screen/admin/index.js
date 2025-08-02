import PrimaryInput from "../../component/PrimaryInput"

const Login=()=>{
    return(
        <>
        <PrimaryInput 
            Title="UserName" 
            inputtype={'text'} 
            placeholder={"Enter Name"} 
            require={true} 
            labelrequire={true}
            /> 
        
        <PrimaryInput 
        Title="Email" 
        inputtype={'Email'} 
        placeholder={"Enter EMail"} 
        require={true} 
        labelrequire={true}/> 
        
        <PrimaryInput 
        Title="Password" 
        inputtype={'password'}
         placeholder={"Enter Password"} 
         require={true} 
         labelrequire={true}/> 
        </>
    )

        }
        export default Login