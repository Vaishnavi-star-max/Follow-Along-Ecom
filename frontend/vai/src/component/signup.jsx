import React from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";

function Signup(props) {
  let [hided,sethided]=useState(true);
  let [hide, sethide] = useState(true);
  const [err,setErr]=useState("")

  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    conformPass:"" 
  })
  
  const handlehide = () => {
    sethide(!hide);
  };

  const handlehided = () => {
    sethided(!hided);
  };

  const handleForm=(e)=>{
    setFormData({...FormData,[e.target.name]:e.target.value})
  }

   const handleSubmit=()=>{
      
    const[name,email,password,conformPass]=formData
    if(!name || !email || !password || !conformPass){
       setErr("all feilds are required")
    }
    if(password!==conformPass){
      setErr("passwords are not same")
    }
     
   }

  
  return (
    <>
      <div className="border-2 w-[500px] mt-10 ml-15">
        <h1 className="text-3xl font-bold text-center">Create an Account</h1>

        <div className="w-7/10 h-120 m-auto mt-10 mb-10 shadow-lg">
          <label htmlFor="" className="block ml-10 mt-10">
            Name
          </label>
          <input
            type="text"
            className="border-1 w-8/10 block m-auto h-8 rounded-md"
            onChange={handleForm}
            name="name"
          />
          <label htmlFor="" className="block ml-10 mt-10">
            Email address
          </label>
          <input
            type="text"
            className="border-1 w-8/10 block m-auto h-8 rounded-md"
            onChange={handleForm}
            name="email"
          />
          <label htmlFor="" className="block ml-10 mt-5 ">
            Password
          </label>
          <div className="flex  w-8/10 m-auto">
            <input
              type={hide ? "password" : "text"}
              className="border-1 w-[140%] block m-auto h-8 rounded-md rounded-bl-md"
            onChange={handleForm}
            name="password"
           />

            {/* {hide ? (
              <FaRegEye
                className=" w-[12%] h-5 mt-1 ml-1"
                onClick={handlehide}
              />
            ) : (
              <FaRegEyeSlash
                className="w-[12%] h-5 mt-1 ml-1"
                onClick={handlehide}
              />
            )} */}
          </div>

          <label htmlFor="" className="block ml-10 mt-5 ">
            Conform Password
          </label>
          <div className="flex  w-8/10 m-auto">
            <input
              type={hided ? "password" : "text"}
              className="border-1 w-[140%] block m-auto h-8 rounded-md rounded-bl-md"
              onChange={handleForm}
              name="conformPass"
           />

            {/* {hided ? (
              <FaRegEye
                className="w-[12%] h-5 mt-1 ml-1"
                onClick={handlehided}
              />
            ) : (
              <FaRegEyeSlash
                className="w-[12%] h-5 mt-1 ml-1"
                onClick={handlehided}
              />
            )} */}
          </div>

          <div className="flex m-auto mt-5  w-[80%]  justify-between ">
            <div className="flex  w-[48%]">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
              <p className="text-red-600">{err}</p>      
              </div>

            {/* <h6 className="font-semibold text-blue-700">Forgot password</h6> */}
          </div>
        

          <button
            type="submit"
            className=" w-8/10 block m-auto bg-blue-500 rounded-m mt-5 h-8 rounded-md"
            onClick={handleSubmit}
          >
            {" "}

          
            Signup
          </button>

          <h6 onClick={props.x} className="ml-9">
            Already have an account
          </h6>
        </div>
      </div>
    </>
  );
}
export default Signup;
