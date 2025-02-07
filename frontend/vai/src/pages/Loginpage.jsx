import React, { useState } from "react";
import Login from "../component/Login"
import Signup from '../component/signup'


function Loginpage() {
   const [sign,setSign]= useState(true)
    const handleClick=()=>{
        setSign(!sign)
        console.log(sign)
    }


 
  return (
    <div>
         {sign?<Login x={handleClick}/>: <Signup x={handleClick}/>}
         
    </div>
    
    
  );
}






export default Loginpage;