import { useContext } from 'react'
import { CartContext } from '../contexts/cart.jsx'

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('Error de lectura del contexto')
  }
  return context
}
