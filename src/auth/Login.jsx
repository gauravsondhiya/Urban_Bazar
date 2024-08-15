// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "./AuthContext";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const { login } = useContext(AuthContext);
//   const [checking, setChecking] = useState([]);
//   const [valueGet, setValueGet] = useState({});
//   const [error, setError] = useState(null);
  
//   let navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:1515/data")
//       .then(res => res.json())
//       .then((data) => setChecking(data))
//       .catch(error => setError("error"));
//   }, []);

//   const inputChecking = (e) => {
//     const { name, value } = e.target;
//     setValueGet({
//       ...valueGet,
//       [name]: value
//     });
//   };

//   const loginClick = (e) => {
//     e.preventDefault();
//     const data = checking.filter(user => user.email === valueGet.email && user.password === valueGet.password);
//     if (data.length > 0) {
//       login();
//       navigate("/");
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <>
//       <div className=" h-[400px] flex  justify-center ">
//         <form className="flex flex-col border w-[40%] border-black text-2xl font-semibold rounded-md " onSubmit={loginClick}>
//           <h2 className="text-5xl text-center font-bold underline underline-offset">Login</h2>
//           {error && <p className="text-center m-3"  style={{ color: "red" }}>{error}</p>}
//           <input  className=" border  border-black text-center m-3 rounded-md"
//             placeholder="Email" 
//             type="email" 
//             onChange={inputChecking}  
//             name="email" 
//             value={valueGet.email || ""} 
//           />
//           <input className=" border  border-black text-center m-3 rounded-md"
//             placeholder="Password" 
//             type="password" 
//             onChange={inputChecking}  
//             name="password" 
//             value={valueGet.password || ""} 
//           />
//           <input className=" border border-black text-center m-3 max-w-[90px] mx-[250px] rounded-md" type="submit" value="Submit" />
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;

import React from 'react'

const Login = () => {
  return (
    <>
       <form className='grid justify-center  gap-7 '>
          <h1 className='text-center text-3xl font-bold'>Login</h1>
        <input className='border border-black text-center w-[290px] rounded-xl' type="text" placeholder="Email" />
        <input className='border border-black text-center w-[290px] rounded-xl' type="text"  placeholder="Password"/>
        <input className='border border-black text-center w-[290px] rounded-xl font-bold hover:bg-red-400 ' type="Submit"  placeholder="Submit"/>
       </form>
    </>
  )
}

export default Login