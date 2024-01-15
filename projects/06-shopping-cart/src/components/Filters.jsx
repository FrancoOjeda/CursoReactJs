import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hocks/useFilters'

export function Filters (event) {
  const { filters, setFilters } = useFilters()
  const minPriceFilterID = useId()
  const categoryFilterID = useId()
  const handleChangeMinPrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategories = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterID}>Precio a partir de:</label>
        <input type='range' id={minPriceFilterID} min='0' max='2000' onChange={handleChangeMinPrice} value={filters.minPrice} />
        <span>$ {filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterID}>Categorias</label>
        <select name='' id={categoryFilterID} onChange={handleChangeCategories}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>

        </select>
      </div>
    </section>
  )
}
