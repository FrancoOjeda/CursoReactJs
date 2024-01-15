import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { useId } from 'react'
import './Cart.css'
import { useCart } from '../hocks/useCart.js'

const CartItem = ({ thumbnail, price, title, quantity, addToCart, restarUno }) => {
  const mostrarBoton = quantity <= 1 ? 'none' : 'inline'
  return (
    <li>
      <img src={thumbnail} alt='title' />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Qty: {quantity} <button onClick={addToCart}>➕</button> <button style={{ display: mostrarBoton }} onClick={() => restarUno()}>➖</button></small>
      </footer>
      <span>Subtotal: {price * quantity}</span>
    </li>

  )
}
export function Cart () {
  const { clearCart, cart, addToCart, restarUno } = useCart()
  const cartCheckBoxID = useId()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckBoxID}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckBoxID} hidden />
      <aside className='cart'>
        <ul>
          {
            cart.map(product => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product}
                restarUno={() => restarUno(product)}

              />
            ))
          }
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
