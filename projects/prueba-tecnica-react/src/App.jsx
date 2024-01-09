import { React, useState, useEffect } from 'react'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [alter, setAlter] = useState(false)
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
  }, [alter])
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    const url = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`
    setImageUrl(url)
  }, [fact])
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h1>App de gatitos</h1>{' '}
      {fact && (
        <p
          style={{
            maxWidth: '60ch',
            textAlign: 'center'
          }}
        >
          {fact}
        </p>
      )}
      {imageUrl && (
        <img
          style={{
            maxWidth: '500px'
          }}
          src={imageUrl}
          alt={`Image extracted using the first word for ${fact}`}
        />
      )}
      <button
        onClick={() => {
          setAlter(!alter)
        }}
        style={{
          padding: '10px',
          marginTop: '10px',
          backgroundColor: '#10bbc4'
        }}
      >
        Click To Change
      </button>
    </main>
  )
}
