import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hocks/useCart.js'

export default function Products ({ products }) {
  const { addToCart, cart, removeFromCart } = useCart()
  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <main className='products'>
      <ul className='listProducts'>
        {products.map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} srcset='' />
              <div><strong>{product.title} - ${product.price}</strong></div>
              <div>
                <button style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}>
                  {isProductInCart
                    ? <RemoveFromCartIcon />
                    : <AddToCartIcon />}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
