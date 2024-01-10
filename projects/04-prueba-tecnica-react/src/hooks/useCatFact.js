import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'
// eslint-disable-next-line space-before-function-paren
export function useCatFact({ alter }) {
  const [fact, setFact] = useState()
  const refreshRandomFact = () => {
    getRandomFact().then((newFact) => setFact(newFact))
  }
  useEffect(refreshRandomFact, [alter])
  return { fact, refreshRandomFact }
}
