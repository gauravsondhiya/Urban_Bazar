// import React, { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../auth/AuthContext";
// import { useSelector } from "react-redux";
// const Header = () => {

//   const { isAuth, logout } = useContext(AuthContext);

//   let navigate = useNavigate();

//   let loginclickme = () => {
//     if (isAuth) {
//       navigate("/Login")
//       logout()

//     } else {
//       navigate("/Login");
//     }
//   };

//   let sigupclickme = () => {
//     navigate("/Signup")
//   }
//   const cartitem = useSelector((store) => store.cart.items)
//   return (
//     <div className="flex  justify-around m-2 border border-box border-black p-5 text-2xl rounded-xl">
//       <div className="font-bold text-3xl " >
//         <Link  to="/">Urban Bazaar</Link>
//       </div>

//       <div className="flex gap-5 ">
//         <input className="border border-black h-10 w-[450px] text-center rounded-md" placeholder="What are you looking for?" />
//         <button className="border border-black h-9 w-[100px] rounded-lg">Search</button>
//       </div>
//       <div className="flex gap-10 underline underline-offset-2  m-2">
//         <Link to="">Home</Link>
//         
//         <button  onClick={loginclickme}>{isAuth ? "Logout" : "Login"}</button>
//         <button  onClick={sigupclickme}>Signup</button>
//         {/* <Link to="/Signup">Signup</Link>
//         //  <Link to="/Login">Login</Link>  */}

//       </div>

//     </div>
//   );
// };

// export default Header;
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { isAuth, logout } = useContext(AuthContext);

  let navigate = useNavigate();

  let loginclickme = () => {
    if (isAuth) {
      navigate("/Login")
      logout()

    } else {
      navigate("/Login");
    }
  };

  let sigupclickme = () => {
    navigate("/Signup")
  }
  const cartitem = useSelector((store) => store.cart.items)
  return (
    <nav className=" border border-box border-black m-2 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand Name */}
          <div className="flex-shrink-0">

            <Link className="text-2xl font-bold" to="/">Urban Bazaar</Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-grow ml-4">
            <input
              type="text"
              placeholder="Search..."
              className="border border-box border-black px-3 py-2 rounded-l-md w-full"
            />
            <button className="ml-2 border border-box border-black px-4 py-2 rounded-r-md hover:bg-red-400">Search</button>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-4 ml-4">

            <Link className="hover:bg-red-400 px-3 py-2 rounded-md text-xl font-medium" to="">Home</Link>

            <Link className="hover:bg-red-400 px-3 py-2 rounded-md text-xl font-medium" to="/Cart">{`Cart:${cartitem.length}`}</Link>

            <button className="hover:bg-red-400 px-3 py-2 rounded-md text-xl font-medium" onClick={loginclickme}>{isAuth ? "Logout" : "Login"}</button>
            <button className="hover:bg-red-400 px-3 py-2 rounded-md text-xl font-medium" onClick={sigupclickme}>Signup</button>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-red-400"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

            <Link className="block hover:bg-red-400 px-3 py-2 rounded-md text-base font-medium" to="">Home</Link>

            <Link className="block hover:bg-red-400 px-3 py-2 rounded-md text-base font-medium" to="/Cart">{`Cart:${cartitem.length}`}</Link>

            <button className="block hover:bg-red-400 px-3 py-2 rounded-md text-base font-medium" onClick={loginclickme}>{isAuth ? "Logout" : "Login"}</button>
            <button className="block hover:bg-red-400 px-3 py-2 rounded-md text-base font-medium" onClick={sigupclickme}>Signup</button>
            <div className="px-3 py-2">
              <input
                type="text"
                placeholder="Search..."
                className="border border-box border-black px-3 py-2 rounded-l-md w-full"
              />
              <button className="bg-red-400 px-4 py-2 rounded-r-md w-full mt-2">Search</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
