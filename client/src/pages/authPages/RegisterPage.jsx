import React, { useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    password: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    try {
      const response = await axios.post('http://localhost:8080/api/v1/users/register', formData);
      console.log('Response:', response.data);
      toast.success(response.data && response.data.message);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error in Registration');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <label
              htmlFor="firstName"
              className={`block text-sm font-medium mb-1 ${
                formData.username ? 'label-up' : ''
              }`}
            >
              FirstName
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="lastName"
              className={`block text-sm font-medium mb-1 ${
                formData.username ? 'label-up' : ''
              }`}
            >
              LastName
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          {/* Repeat the same structure for email and password fields */}
          <div className="mb-4 relative">
            <label
              htmlFor="email"
              className={`block text-sm font-medium mb-1 ${
                formData.email ? 'label-up' : ''
              }`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="email"
              className={`block text-sm font-medium mb-1 ${
                formData.email ? 'label-up' : ''
              }`}
            >
              number
            </label>
            <input
              type="number"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className={`block text-sm font-medium mb-1 ${
                formData.password ? 'label-up' : ''
              }`}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="image"
              className={`block text-sm font-medium mb-1 ${
                formData.username ? 'label-up' : ''
              }`}
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <a
            href="#"
            className="text-blue-500 hover:text-blue-600"
          >
            Click here to log in
          </a>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default RegistrationPage;