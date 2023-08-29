import React from "react";
import DropIn from "braintree-web-drop-in-react";

function PaymentForm({
  onClose,
  clientToken,
  auth,
  instance,
  loading,
  cart,
  setInstance,
  handlePayment,
}) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <button
          className="absolute top-2 right-2 text-gray-500 cursor-pointer"
          onClick={onClose}
        >
          X
        </button>
        {/* DropIn component */}
        {
          clientToken && auth?.token && cart?.length && (
            <>
              <DropIn
              options={{
                authorization : clientToken,
                paypal : {
                  flow : "vault"
                }
              }}
              onInstance={(instance)=> setInstance(instance)}
              />
              <button 
              onClick={handlePayment}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md disabled:opacity-50">
                {loading ? "Proccessing...": "Make Payment"}
              </button>
            </>
          )
        }
        
      </div>
    </section>
  );
}

export default PaymentForm;
