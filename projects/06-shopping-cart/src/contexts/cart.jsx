import { createContext } from 'react'
import { useCartReducer } from '../hocks/useCartReducer'
export const CartContext = createContext()

export function CartProvider ({ children }) {
  const { addToCart, restarUno, removeFromCart, clearCart, state } = useCartReducer()

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
        restarUno
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
