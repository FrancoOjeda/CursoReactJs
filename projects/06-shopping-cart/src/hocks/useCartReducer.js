import { cartReducer, cartInitialState } from '../reducers/cartReducer'
import { useReducer } from 'react'

export const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })

  const restarUno = product =>
    dispatch({
      type: 'RESTAR_UNO',
      payload: product
    })

  const removeFromCart = product =>
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product
    })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })
  return { addToCart, restarUno, removeFromCart, clearCart, state }
}
