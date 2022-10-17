import { createContext, useState } from "react"

export const CartContext = createContext({});

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);
    const [coffeeAmount, setCoffeeAmount] = useState(1);

    function addToCart(data) {
        setCart(state => [...state, data]);
    }

    return (
        <CartContext.Provider
            value={{cart, setCart, addToCart, coffeeAmount, setCoffeeAmount}}
        >
            {children}
        </CartContext.Provider>
    )
}