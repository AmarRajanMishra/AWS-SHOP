import { createContext, useContext, useEffect, useState } from 'react';

// Create Cart Context
const CartContext = createContext();


// Create Cart Context Provider

const CartContextProvider = ({children})=>{
    const [cart, setCart] = useState([])

    const setInLocalStorage = () => {
        let existingCartItem = localStorage.getItem('cart');
        if(existingCartItem) setCart(JSON.parse(existingCartItem));
    }
    useEffect(()=>{
        setInLocalStorage()
    },[setCart])
    return(
        <CartContext.Provider value={[cart, setCart]} >
            {children}
        </CartContext.Provider>
    )
}


// Custom Hooks for Cart Context
const useCart = ()=> useContext(CartContext)

export { useCart, CartContextProvider}