import { Children, useEffect, useState } from 'react'
import { EVENTS } from './assets/const.js'
import { match } from 'path-to-regexp'
import { getCurrentPath } from './utils.js'
export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath())
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath())
    }
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  // EL metodo Children es nativo de react js, y nos permite entre otras cosas
  // mapear los children, para en este caso, obtener las rutas q vienen en las props
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type

    const isRoute = name === 'Route'
    if (!isRoute) return null

    return props
  })

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    // Usamos path-to-regexp
    // para poder detectar rutas dinamicas como por ejemplo
    // /search/quey:  ⬅ :query es una ruta dinamica
    const macherUrl = match(path, { decode: decodeURIComponent })
    const matched = macherUrl(currentPath)
    if (!matched) return false

    // Guardamos los parametros de la url que eran dinamicos
    // y que hemos extraido con path-to-regexp
    routeParams = matched.params // {query: 'Algo'}
    return true
  })?.Component
  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />
}
