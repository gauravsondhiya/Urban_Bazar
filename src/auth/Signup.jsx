import React, { useState } from "react";
import "./Signup.css";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate= useNavigate()
  const [warning, setwarning] = useState("")
  let [inputvalue,setinputvalue] = useState({
    name:"",
    email:"",
    mobileno:"",
    password:""
  })
  

  let values=(e)=>{
       let{name ,value}= e.target
       setinputvalue({
        ...inputvalue,
        [name]:value
       })
  }

  let handlesubmit =(e)=>{
  
    e.preventDefault()
   if(inputvalue.name===""||inputvalue.email===""||inputvalue.mobileno===""||inputvalue.password===""){
    setwarning("Fill All Details")
   } else{
    setwarning("")
    fetch("http://localhost:1515/data",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(inputvalue)
     })
     setinputvalue("")
     navigate("/Login") 
   }
   
      
  }
  return (
    <>
      <div className="signupbox">
          
             <form className="inputboxes" onSubmit={handlesubmit}>
              <h3>SIGNUP</h3>
              {warning && <p style={{ color: "red" }}>{warning}</p>}
            <input placeholder="Name" onChange={values} type="text" name="name" />
            <input placeholder="Email" onChange={values} type="email" name="email"/>
            <input placeholder="Mobile Number" onChange={values} type="number" name="mobileno"/>
            <input placeholder="Password" onChange={values} type="password" name="password"/>
            <input className="submit" placeholder="SUBMIT"  type="Submit"/>
           
             </form>
          

        </div>
     
    </>
  );
};

export default Signup;
