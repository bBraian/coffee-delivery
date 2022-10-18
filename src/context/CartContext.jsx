import { createContext, useState } from "react"

export const CartContext = createContext({});

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    function addToCart(data, counter) {
        data = {...data, amount: counter}
        setCart(state => [...state, data]);
    }

    return (
        <CartContext.Provider
            value={{cart, setCart, addToCart }}
        >
            {children}
        </CartContext.Provider>
    )
}