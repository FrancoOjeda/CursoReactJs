import { useEffect, useState, useRef } from 'react'
export function useSearch () {
  const isFirstInput = useRef(true)

  const [search, updatetSearch] = useState('')
  const [error, setError] = useState(null)
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('no se puede buscar una pelicula vacia')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('no se puede buscar una pelicula con un numero')
      return
    }
    if (search.length > 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [search])
  return { search, updatetSearch, error }
}
