import { useState } from 'react'
import Products from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './hocks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './contexts/cart'
function App () {
  const { filterProducts } = useFilters()
  const [products] = useState(initialProducts)

  const filteredProducs = filterProducts(products)
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducs} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
