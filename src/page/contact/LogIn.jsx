import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";


const LogIn = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const user = {
    email: "suriyamuthukumarasamy@gmail.com",
    password: "1234567",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === user.email && password === user.password) {
      login();
      navigate("/home");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-danger mt-3 w-100">
              Submit
            </button>
          </form>

          <div className="mt-4 text-center">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const userObject = jwtDecode(credentialResponse.credential);
                console.log("Google user info:", userObject);
                login();
                navigate("/home");
              }}
              onError={() => {
                console.log("Google login failed");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
