import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import axios from "axios";

function Signup(props) {
  const [hide, setHide] = useState(true);
  const [hided, setHided] = useState(true);
  const [err, setErr] = useState("");
  const [data, setData] = useState({ name: "", email: "", password: "", confirmpass: "" });

  const toggleHide = () => setHide(!hide);
  const toggleHided = () => setHided(!hided);
  const handleInputChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    const { name, email, password, confirmpass } = data;
    if (!name || !email || !password || !confirmpass) {
      setErr("Please fill all fields");
      return;
    }
    if (password !== confirmpass) {
      setErr("Passwords do not match");
      return;
    }
    try {
      await axios.post("http://localhost:1111/user/signup", { name, email, password });
      console.log("Successfully registered");
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800">Create an Account</h1>
      <div className="mt-6">
        <label className="block text-gray-700">Name</label>
        <input 
          type="text" name="name" 
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleInputChange} 
        />

        <label className="block mt-4 text-gray-700">Email Address</label>
        <input 
          type="email" name="email"
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleInputChange} 
        />

        <label className="block mt-4 text-gray-700">Password</label>
        <div className="relative">
          <input 
            type={hide ? "password" : "text"} name="password"
            className="w-full px-4 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleInputChange} 
          />
          <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer" onClick={toggleHide}>
            {/* {hide ? <FaRegEye /> : <FaRegEyeSlash />} */}
          </span>
        </div>

        <label className="block mt-4 text-gray-700">Confirm Password</label>
        <div className="relative">
          <input 
            type={hided ? "password" : "text"} name="confirmpass"
            className="w-full px-4 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleInputChange} 
          />
          <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer" onClick={toggleHided}>
            {/* {hided ? <FaRegEye /> : <FaRegEyeSlash />} */}
          </span>
        </div>
      </div>

      {err && <p className="mt-4 text-red-500 text-sm text-center">{err}</p>}

      <button 
        className="w-full mt-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
        onClick={handleSubmit}
      >
        Signup
      </button>
      
      <p className="mt-4 text-sm text-center text-gray-600">
        Already have an account? <span className="text-blue-500 cursor-pointer" onClick={props.x}>Login</span>
      </p>
    </div>
  );
}

export default Signup;