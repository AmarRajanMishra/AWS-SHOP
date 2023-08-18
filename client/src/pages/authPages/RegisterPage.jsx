import React, { useState } from "react";
import "./authStyle.css";
import axios from "axios";

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    password: "",
    image: "",
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
        "http://localhost:8080/api/v1/users/register",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            value={formData.firstName}
            onChange={handleInputData}
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            id="firstName"
            required
          />
          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            value={formData.lastName}
            onChange={handleInputData}
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            id="lastName"
            required
          />
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
          <label htmlFor="number">
            <b>Mobile No. </b>
          </label>
          <input
            value={formData.number}
            onChange={handleInputData}
            type="text"
            placeholder="Enter Number"
            name="number"
            id="number"
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
          <label htmlFor="image">
            <b>Image URL</b>
          </label>
          <input
            value={formData.image}
            onChange={handleInputData}
            type="text"
            placeholder="Enter Image URL"
            name="image"
            id="image"
            required
          />

          <hr />
          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms &amp; Privacy</a>.
          </p>
          <button type="submit" className="registerbtn">
            Register
          </button>
        </div>
        <div className="container signin">
          <p>
            Already have an account? <a href="#">Sign in</a>.
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
