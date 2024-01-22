import { lazy, Suspense } from 'react'

import './App.css'
import { Router } from './Router.jsx'
import { ROUTES } from './assets/const.js'
import Page404 from './pages/404.jsx'
import { Route } from './Route.jsx'

// import HomePage from '../pages/Home'
// import About from '../pages/About'

// import HomePage from './pages/Home.jsx'
// import About from './pages/About.jsx' ➡ Esto es una importacion estatica

// Cuando hacemos importaciones estaticas, siempre que se cargue este archivo, todas las importaciones se realizan
// Al momento de la carga. Esto afecta el rendimiento de la web
// Para evitar este comportamiento, usamos el metodo lazy de react js, que nos permite
// importar un componente de forma dinámica
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))
const LazyHomePage = lazy(() => import('./pages/Home.jsx'))

function App () {
  // Por otro lado, si hacemos una importacion dinamica, react da un error porque
  // tarda en encontrar el componente que se importa dinamicamente, y para evitar esto,
  // Le avisamos a react con el componente 'Suspense' que hay parte de la UI que no esta disponible desde el principio

  // El atributo fallback nos permite elegir que mostrar mientras cargamos los archivos con lazy loading
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={ROUTES} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
