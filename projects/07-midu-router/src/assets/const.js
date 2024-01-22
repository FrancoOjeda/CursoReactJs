import Search from '../pages/Search'

export const EVENTS = {
  PUSHSTATE: 'pushstate',
  POPSTATE: 'popstate'
}

export const BUTTONS = {
  PRIMARY: 0
}

export const ROUTES = [
  // Estas dos rutas no son necesarias aqui debido a que se estan pasando de forma declarativa
  // con el componente Route.jsx en App.jsx con sus props
  // {
  //   path: '/:lang',
  //   Component: LazyHomePage
  // },
  // {
  //   path: '/:lang/about',
  //   Component: LazyAboutPage
  // },
  {
    path: '/:lang/search/:query',
    Component: Search
  }
]
