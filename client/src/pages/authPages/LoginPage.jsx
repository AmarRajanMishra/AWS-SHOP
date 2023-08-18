import React, { useState } from 'react'
import axios from 'axios';
import { useAuth } from '../../components/context/auth';


function LoginPage() {
  const [auth, setAuth] = useAuth()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // request to Server
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/users/login",
        formData
      );
      if(res && res.data.success){
        setAuth({
          ...auth,
          user : res.data.user,
          token : res.data.token
        })
        localStorage.setItem('auth', JSON.stringify(res.data))
      }
      
    } catch (error) {
      console.log(error);
    }
    console.log(formData)
  };
  
  return (
    <div>
      <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          
          
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            value={formData.email}
            onChange={handleInputData}
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />
          
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            value={formData.password}
            onChange={handleInputData}
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            required
          />
          <hr />
          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms &amp; Privacy</a>.
          </p>
          <button type="submit" className="registerbtn">
            Login
          </button>
        </div>
        <div className="container signin">
          <p>
            Already have an account? <a href="#">Register</a>.
          </p>
        </div>
      </form>
    </div>
      
    </div>
  )
}

export default LoginPage