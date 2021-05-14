import './Header.css'
import { useState } from 'react'

export default function Header({ handleButtonClick }) {
  const [clicked, setClicked] = useState('characters')

  // function aktuellen seitennamen übergeben

  function handleClick(name) {
    handleButtonClick(name)
    setClicked(name)
  }

  return (
    <header className="Header">
      <nav className="Header__nav">
        <button
          className={
            clicked === 'characters'
              ? 'Header__navButton Header__navClicked'
              : 'Header__navButton'
          }
          onClick={() => handleClick('characters')}
        >
          Characters
        </button>
        <button
          className={
            clicked === 'locations'
              ? 'Header__navButton Header__navClicked'
              : 'Header__navButton'
          }
          onClick={() => handleClick('locations')}
        >
          Locations
        </button>
        <button
          className={
            clicked === 'episodes'
              ? 'Header__navButton Header__navClicked'
              : 'Header__navButton'
          }
          onClick={() => handleClick('episodes')}
        >
          Episodes
        </button>
      </nav>
    </header>
  )
}
