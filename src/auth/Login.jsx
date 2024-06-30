import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [checking, setChecking] = useState([]);
  const [valueGet, setValueGet] = useState({});
  const [error, setError] = useState(null);
  
  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:1515/data")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => setChecking(data))
      .catch((error) => setError(error.message));
  }, []);

  const inputChecking = (e) => {
    const { name, value } = e.target;
    setValueGet({
      ...valueGet,
      [name]: value
    });
  };

  const loginClick = (e) => {
    e.preventDefault();
    const data = checking.filter(user => user.email === valueGet.email && user.password === valueGet.password);
    if (data.length > 0) {
      login();
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <div className="signupbox">
        <form className="inputboxes" onSubmit={loginClick}>
          <h2>Login</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <input 
            placeholder="Email" 
            type="email" 
            onChange={inputChecking}  
            name="email" 
            value={valueGet.email || ""} 
          />
          <input 
            placeholder="Password" 
            type="password" 
            onChange={inputChecking}  
            name="password" 
            value={valueGet.password || ""} 
          />
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Login;
