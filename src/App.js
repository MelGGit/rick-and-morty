import './App.css'
import React, { useState, useEffect } from 'react'
import Card from './Card'

export default function App() {
  const [characters, setCharacters] = useState([])
  const [url, setUrl] = useState(
    'https://rickandmortyapi.com/api/character/?page=1'
  )

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(resBody => setCharacters([...resBody.results]))
  }, [url])

  return (
    <main className="App__characters">
      {characters.map(character => {
        return <Card character={character} />
      })}
    </main>
  )
}
