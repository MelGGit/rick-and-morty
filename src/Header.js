import './Header.css'
import { useState } from 'react'

export default function Header({ handleButtonClick }) {
  const [clicked, setClicked] = useState('characters')

  const buttons = ['characters', 'locations', 'episodes']

  function handleClick(name) {
    handleButtonClick(name)
    setClicked(name)
  }

  return (
    <header className="Header">
      <nav className="Header__nav">
        {buttons.map(button => {
          return (
            <button
              className={
                clicked === button
                  ? 'Header__navButton Header__navClicked'
                  : 'Header__navButton'
              }
              onClick={() => handleClick(button)}
            >
              {button.replace(/^./, button[0].toUpperCase())}
            </button>
          )
        })}
      </nav>
    </header>
  )
}
