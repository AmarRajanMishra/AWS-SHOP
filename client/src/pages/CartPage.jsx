import React, { useEffect, useState } from "react";
import { useCart } from "../components/context/cart";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../components/context/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function CartPage() {
    const navigate = useNavigate()
    const [cart, setCart] = useCart();
    const [auth, setAuth] = useAuth();
    const [clientToken, setClientToken] = useState('')
    const [instance, setInstance] = useState(null)
    const [loading, setLoading] = useState(false)
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const openPopup = () => {
      setIsPopupOpen(true)
    }
    const closePopup = () => {
      setIsPopupOpen(false)
    }

    
//   Get Total Price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };


  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
      toast.success('Item removed successfully')
    } catch (error) {
      console.log(error);
      toast.success('Error in Item removing')
    }
  };




  // Payment Integration
  // 1. Get Token
  const getToken = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/api/v1/payment/braintree-token')
        console.log("Payment Token" , data)
        setClientToken(data?.clientToken)
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(()=>{
    getToken();
  },[auth?.token])

  // Handle Payment
  const handlePayment = async () => {
    try {
      setLoading(true)
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post('http://localhost:8080/api/v1/payment/braintree-payment', {
        nonce, 
        cart
      })
      console.log("Payment Details Data", data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <div className="mainCart">
    <div className="cartSection">
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2
                        className="text-lg font-medium text-gray-900"
                        id="slide-over-title"
                      >
                        Shopping cart
                      </h2>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                        onClick={()=>navigate('/')}
                          type="button"
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {cart?.map((p) => {
                            return (
                              <li className="flex py-6" key={p._id}>
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={p.image}
                                    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href="#">{p.title}</a>
                                      </h3>
                                      <p className="ml-4">{p.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {p.category}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty 1</p>
                                    <div className="flex">
                                      <button
                                      onClick={() => removeCartItem(p._id)}
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>Total Price : {totalPrice()}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <Link
                        onClick={openPopup}
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Checkout
                      </Link>
                    </div>
                    
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> →</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
    </div>
    <ToastContainer />
    </div>
    
  );
}

export default CartPage;
