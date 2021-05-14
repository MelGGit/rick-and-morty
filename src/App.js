import './App.css'
import React, { useState, useEffect } from 'react'
import Card from './Card'
import Header from './Header'

export default function App() {
  const [characters, setCharacters] = useState([])
  const [url, setUrl] = useState(
    'https://rickandmortyapi.com/api/character/?page=1'
  )
  const [clickedB1, setClickedB1] = useState(true)
  const [clickedB2, setclickedB2] = useState(false)
  const [clickedB3, setclickedB3] = useState(false)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(resBody => setCharacters([...resBody.results]))
  }, [url])

  return (
    <div>
      <Header setButton={handleButtonClick} />
      <main
        className={
          clickedB1 ? 'App__characters' : 'App__characters App__hidden'
        }
      >
        {characters.map(character => {
          return <Card key={character.id} character={character} />
        })}
      </main>
      <main
        className={
          clickedB2 ? 'App__characters' : 'App__characters App__hidden'
        }
      >
        Locations
      </main>
      <main
        className={
          clickedB3 ? 'App__characters' : 'App__characters App__hidden'
        }
      >
        Episodes
      </main>
    </div>
  )

  function handleButtonClick(event) {
    setClickedB1(event.target.name === 'character' ? true : false)
    setclickedB2(event.target.name === 'locations' ? true : false)
    setclickedB3(event.target.name === 'episodes' ? true : false)
  }
}
