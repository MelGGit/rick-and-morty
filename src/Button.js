import './Button.css'
import { useState } from 'react'

export default function Button() {
  const [visibility, setVisibility] = useState('hidden')

  const image = {
    visibility: visibility,
  }

  window.addEventListener('scroll', handleScroll)
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className="BtnBackTop" onClick={scrollTop}>
      <svg
        style={image}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
      >
        <title>circle-up</title>
        <path d="M0 16c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16-16 7.163-16 16zM29 16c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13z"></path>
        <path d="M22.086 20.914l2.829-2.829-8.914-8.914-8.914 8.914 2.828 2.828 6.086-6.086z"></path>
      </svg>
    </a>
  )

  function handleScroll() {
    let y = window.scrollY
    if (y > 100) {
      setVisibility('visible')
    } else {
      setVisibility('hidden')
    }
  }

  function scrollTop(event) {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
