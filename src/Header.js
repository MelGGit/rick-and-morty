import './Header.css'
import { useState } from 'react'

export default function Header({ setButton }) {
  const [b1, setB1] = useState('clicked')
  const [b2, setB2] = useState('')
  const [b3, setB3] = useState('')

  return (
    <header className="Header">
      <nav className="Header__nav">
        <button
          className={
            b1 ? 'Header__navButton Header__navClicked' : 'Header__navButton'
          }
          name="characters"
          onClick={handleB1Click}
        >
          Characters
        </button>
        <button
          className={
            b2 ? 'Header__navButton Header__navClicked' : 'Header__navButton'
          }
          name="locations"
          onClick={handleB2Click}
        >
          Locations
        </button>
        <button
          className={
            b3 ? 'Header__navButton Header__navClicked' : 'Header__navButton'
          }
          name="episodes"
          onClick={handleB3Click}
        >
          Episodes
        </button>
      </nav>
    </header>
  )

  function handleB1Click(event) {
    setB1('clicked')
    setB2('')
    setB3('')
    setButton(event)
  }

  function handleB2Click(event) {
    setB1('')
    setB2('clicked')
    setB3('')
    setButton(event)
  }

  function handleB3Click(event) {
    setB1('')
    setB2('')
    setB3('clicked')
    setButton(event)
  }
}
