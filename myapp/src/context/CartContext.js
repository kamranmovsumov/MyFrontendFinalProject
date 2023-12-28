import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
            setCartItems(JSON.parse(cartItems));
        }
    }, []);


    const addToCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart) {
            setCartItems(cartItems.map((cartItem) => cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
            );
        }
        else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
        toast.success('Product added to cart successfully')
    };

    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart.quantity === 1) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
        }
        else {
            setCartItems(cartItems.map((cartItem) => cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            )
            );
        }
        toast.success('Product deleted from cart successfully')
    };

    const removeById = (itemId) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === itemId);

        if (isItemInCart) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== itemId));
        }
    }

    const clearCart = () => {
        setCartItems([]);
        toast.success('All products deleted from cart successfully')
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const getCartLength = () => {
        return cartItems.length;
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getCartTotal, getCartLength, removeById }}>
            {children}
        </CartContext.Provider>
    )
}


export { CartContext, CartContextProvider };