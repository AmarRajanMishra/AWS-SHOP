import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/auth'
import axios from 'axios';

function UserOrders() {
  const [orders, setOrders] = useState([])
  const [auth, setAuth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get('http://localhost:8080/api/v1/orders/order-details')
      console.log("User Order Details",data)
      setOrders(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if(auth?.token) getOrders();
  },[auth?.token])

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Your Orders</h2>
      {/* Display a list of user's orders */}
    </div>
  );
}

export default UserOrders;
