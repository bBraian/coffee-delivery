import { createContext, useState } from "react"

export const CartContext = createContext({});

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    function addToCart(data, counter) {
        data = {...data, amount: counter}
        setCart(state => [...state, data]);
    }

    function removeCoffee(coffeeId) {
        var index = cart.findIndex(x => x.id === coffeeId);
        var cartList = [...cart];
        cartList.splice(index, 1);
        setCart(cartList)
    }

    return (
        <CartContext.Provider
            value={{cart, setCart, addToCart, removeCoffee }}
        >
            {children}
        </CartContext.Provider>
    )
}