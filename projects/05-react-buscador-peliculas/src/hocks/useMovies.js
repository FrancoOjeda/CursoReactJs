import { useState, useRef, useMemo, useCallback } from 'react'
// import withResults from '../mocks/with-results.json'
import { searchMovies } from '../services/movies.js'

// En react, el cuerpo del componente cambia cada vez que este se renderiza, por lo tanto,
// Es buena practica y recomendable utilizar useMemo para evitar que se ejecute codigo que
// q no deberia volver a ejecutarse a no ser que sea necesario
export const useMovies = ({ search, sort }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorSearch, setErrorSearch] = useState(null)
  const previousSearch = useRef(search)

  // useCallback es una version del useMemo que se utiliza
  // SOLO PARA RETORNAR FUNCIONES
  const getMovies = useCallback(
    async ({ search }) => {
      if (search === previousSearch.current) return

      try {
        setLoading(true)
        setErrorSearch(null)
        previousSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (e) {
        setErrorSearch(e.message)
      } finally {
        // Esto se va a ejecutar tanto en el try como en el catch
        setLoading(false)
      }
    }, [search])
  // localeCompare compara de forma local los caracteres con acento
  // El hock useMemo permite guardar un estado, y solo se ejecuta cuando cambian sus dependencias.
  // Es muy util cuando se quiere evitar realizar operaciones innecesarias
  // En este caso, si no lo usaramos, cada que cambie el input, se ejecutaria la funcion sortedMovies
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])
  return { movies: sortedMovies, getMovies, loading, errorSearch }
}
