import './App.css'
import React, { useState, useEffect } from 'react'
import Card from './Card'
import Header from './Header'
import Button from './Button'

export default function App() {
  const [characters, setCharacters] = useState([])
  const [url, setUrl] = useState(
    'https://rickandmortyapi.com/api/character/?page=1'
  )
  const [currentPage, setCurrentPage] = useState('characters')

  function handleButtonClick(name) {
    setCurrentPage(name)
  }

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(resBody => setCharacters([...resBody.results]))
  }, [url])

  return (
    <div>
      <Header handleButtonClick={handleButtonClick} />
      {currentPage === 'characters' && (
        <main className="App__characters">
          {characters.map(character => {
            return <Card key={character.id} character={character} />
          })}
          <Button />
        </main>
      )}
      {currentPage === 'locations' && (
        <main className="App__characters">Locations</main>
      )}
      {currentPage === 'episodes' && (
        <main className="App__characters">Episodes</main>
      )}
    </div>
  )
}
