// import React, { useState } from "react";
// // import "./Signup.css";
// import Login from "./Login";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const navigate= useNavigate()
//   const [warning, setwarning] = useState("")
//   let [inputvalue,setinputvalue] = useState({
//     name:"",
//     email:"",
//     mobileno:"",
//     password:""
//   })
  

//   let values=(e)=>{
//        let{name ,value}= e.target
//        setinputvalue({
//         ...inputvalue,
//         [name]:value
//        })
//   }

//   let handlesubmit =(e)=>{
  
//     e.preventDefault()
//    if(inputvalue.name===""||inputvalue.email===""||inputvalue.mobileno===""||inputvalue.password===""){
//     setwarning("Fill All Details")
//    } else{
//     setwarning("")
//     fetch("http://localhost:1515/data",{
//       method:"POST",
//       headers:{
//         "content-type":"application/json"
//       },
//       body:JSON.stringify(inputvalue)
//      })
//      setinputvalue("")
//      navigate("/Login") 
//    }
   
      
//   }
//   return (
//     <> <div className=" h-[400px] flex  justify-center ">
     
              
//              <form className="flex flex-col border w-[40%]  border-box border-black text-2xl font-semibold rounded-md " onSubmit={handlesubmit}>
//              <h3 className="text-5xl text-center font-bold underline underline-offset">SIGNUP</h3>
//               {warning && <p className="text-center m-3" style={{ color: "red" }}>{warning}</p>}
//             <input className=" border border-box border-black text-center m-3 rounded-md" placeholder="Name" onChange={values} type="text" name="name" />
//             <input className=" border border-box border-black text-center m-3 rounded-md" placeholder="Email" onChange={values} type="email" name="email"/>
//             <input className=" border border-box border-black text-center m-3 rounded-md" placeholder="Mobile Number" onChange={values} type="number" name="mobileno"/>
//             <input className=" border border-box border-black text-center m-3 rounded-md" placeholder="Password" onChange={values} type="password" name="password"/>
//             <input className=" border border-box border-black text-center m-3 max-w-[90px] mx-[250px] rounded-md" placeholder="SUBMIT"  type="Submit"/>
           
//              </form>

//         </div>
     
//     </>
//   );
// };

// export default Signup;


import React from 'react'

const Signup = () => {
  return (
    <>
       <form className='grid justify-center  gap-7 '>
          <h1 className='text-center text-3xl font-bold'>Sigup</h1>
        <input className='border border-black text-center w-[290px] rounded-xl' type="text"  placeholder="Name" />
        <input className='border border-black text-center w-[290px] rounded-xl' type="text" placeholder="Email" />
        <input className='border border-black text-center w-[290px] rounded-xl' type="text" placeholder="Mobile Number" />
        <input className='border border-black text-center w-[290px] rounded-xl' type="text"  placeholder="Password"/>
        <input className='border border-black text-center w-[290px] rounded-xl font-bold' type="Submit"  placeholder="Submit"/>
       </form>
    </>
  )
}

export default Signup