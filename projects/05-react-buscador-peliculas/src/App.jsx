import { useCallback, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hocks/useMovies'
import { useSearch } from './hocks/useSearch'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { search, updatetSearch, error } = useSearch()
  const { movies, getMovies, loading, errorSearch } = useMovies({ search, sort })
  const debouncedGetMovies = useCallback(debounce(search => {
    getMovies({ search })
  }, 300), [])
  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
  }
  const handleChange = (e) => {
    const newSearch = e.target.value
    if (newSearch.startsWith(' ')) return
    updatetSearch(newSearch)
    debouncedGetMovies(newSearch)
  }
  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <>
      <div className='page'>
        <header><h1>Buscador de Peliculas</h1>
          <form className='form' action='' onSubmit={handleSubmit}>
            <input style={{ border: '1px solid', borderColor: error ? 'red' : 'transparent' }} value={search} onChange={handleChange} name='query' placeholder='Avengers' type='text' />
            <input type='checkbox' onChange={handleSort} checked={sort} />
            <button type='submit'>Buscar</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error} </p>}
        </header>
        <main>
          {loading && <p>Cargando...</p>}
          {errorSearch && <p>{errorSearch}</p>}
          <Movies movies={movies} />
        </main>
      </div>
    </>
  )
}

export default App
