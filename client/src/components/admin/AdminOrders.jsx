
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/auth'
import axios from 'axios';
import { trusted } from 'mongoose';

function AdminOrders() {
  const [orders, setOrders] = useState([])
  const [auth, setAuth] = useAuth();
  const [status, setStatus] = useState(["Not Process", "Processing", "Shipped", "Delivered", "Cancel"])

  const getOrders = async () => {
    try {
      const { data } = await axios.get('http://localhost:8080/api/v1/orders/order-all-details')
      console.log("User Order Details",data)
      setOrders(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if(auth?.token) getOrders();
  },[auth?.token])


  const handleStatus = async (orderId, value) => {
        try {
            const { data} = await axios.put(`${process.env.PROXY_PORT}/api/v1/orders/order-status/${orderId}`, {
                status : value,
            })
            getOrders();
        } catch (error) {
            console.log(error);
        }
  }

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Your Orders</h2>
      {/* Display a list of user's orders */}
    </div>
  );
}

export default AdminOrders;
