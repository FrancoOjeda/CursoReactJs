import { useEffect, useState } from 'react'
// eslint-disable-next-line space-before-function-paren
export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return
    const threeFirstWord = fact.split(' ', 3).join(' ')
    const url = `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red`
    setImageUrl(url)
  }, [fact])

  return { imageUrl }
}
