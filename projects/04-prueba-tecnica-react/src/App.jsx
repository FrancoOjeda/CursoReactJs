import { React, useState } from 'react'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

// eslint-disable-next-line space-before-function-paren
export function App() {
  const [alter, setAlter] = useState(false)
  const { fact, refreshRandomFact } = useCatFact({ alter })
  const { imageUrl } = useCatImage({ fact })
  const handleClick = async () => {
    refreshRandomFact()
  }

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
      <div>
        <button
          onClick={() => {
            setAlter(!alter)
          }}
          style={{
            padding: '10px',
            margin: '10px',
            backgroundColor: '#10bbc4'
          }}
        >
          Click To Change
        </button>
        <button onClick={handleClick}>Get New Fact</button>
      </div>
    </main>
  )
}
