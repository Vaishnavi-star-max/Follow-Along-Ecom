import React from "react";

function Login() {

  
  return (
    <>
      <div className="border-2 w-[550px]">
        <h1 className="text-3xl font-bold text-center">
          Login to your account
        </h1>

        <div className="w-7/10 h-85 m-auto mt-10 mb-10 shadow-lg">
          <label htmlFor="" className="block ml-10 mt-10">
            Email address
          </label>
          <input
            type="text"
            className="border-1 w-8/10 block m-auto h-8 rounded-md"
          />
          <label htmlFor="" className="block ml-10 mt-5">
            Password
          </label>
          <div className="flex  w-9/10 m-auto ">
            <input
              type="password"
              className="border-1 w-[88%] block m-auto h-8 rounded-tl-md rounded-bl-md"
            />
            
          </div>

          <div className="flex border-0  w-8/10 m-auto mt-5">
            <div>
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>

            <h6 className="font-semibold">Forgot your password</h6>
          </div>

          <button
           
            type="submit"
            className=" w-8/10 block m-auto bg-blue-500 rounded-m mt-5 h-8 rounded-md"
          >
            {" "}
            Submit
          </button>

          <h6 className="ml-9">Not have any account?</h6>
        </div>
      </div>
    </>
  );
}
export default Login;