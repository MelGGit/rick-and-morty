import './Card.css'
import { useState, useEffect } from 'react'

export default function Card({ character }) {
  const [episodes, setEpisodes] = useState({})
  const [active, setActive] = useState(false)

  useEffect(() => {
    fetch(character.episode[0])
      .then(res => res.json())
      .then(resBody => setEpisodes(resBody))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const style = {
    fill: active ? 'blue' : 'black',
  }

  return (
    <div
      className="Card__outerContainer"
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      // onMouseEnter={handleMouseEnter}
    >
      <section className="Card">
        <h2 className="Card__name">{character.name}</h2>
        <img className="Card__img" src={character.image} alt="" />
        <p className="Card__info">
          {character.name} is a character who debutet in the episode{' '}
          {episodes.name} which was realeased on {episodes.air_date}. This
          character's species is {character.species} and gender{' '}
          {character.gender}.
        </p>
        <h3 className="Card__factsHeading">Some quick facts:</h3>
        <ul className="Card__factsList">
          <li className="Card__fact">Status: {character.status}</li>
          <li className="Card__fact">Origin: {character.origin.name}</li>
          <li className="Card__fact">
            Current location: {character.location.name}
          </li>
        </ul>
        <button className="Card__bookmark" onClick={handleClick}>
          <svg
            style={style}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 32 32"
            className="Card__bookmarkImg"
          >
            <title>bookmark</title>
            <path d="M6 0v32l10-10 10 10v-32z"></path>
          </svg>
        </button>
      </section>
    </div>
  )

  function handleClick(event) {
    setActive(!active)
  }

  function handleMouseMove(event) {
    // let xHelper = event.clientX > 710 ? event.clientX - 580 : event.clientX

    let sizeContainer = event.currentTarget.getBoundingClientRect()
    let xAxis
    let yAxis
    // if (window.innerWidth <= 1135) {
    //   xAxis = (document.documentElement.clientWidth / 2 - event.clientX) / 10
    //   yAxis = ((sizeContainer.height + 300) / 2 - event.clientY) / 10
    // } else {
    //   xAxis = (document.documentElement.clientWidth / 2 - event.clientX) / 10
    //   yAxis = (sizeContainer.height / 2 - event.clientY / 3) / 10
    // }

    xAxis = (sizeContainer.width / 2 - (event.pageX - sizeContainer.left)) / 10
    yAxis =
      (sizeContainer.height / 2 -
        (event.pageY - sizeContainer.top - window.pageYOffset)) /
      10

    // console.log(`clientY ${yAxis}`)
    // console.log(`clientX ${xAxis}`)
    // console.log(window.innerWidth)
    // console.log('height', document.documentElement.clientHeight)
    // console.log('width', document.documentElement.clientWidth)
    // console.log(event.clientX - sizeContainer.left)
    // console.log(event.clientY - sizeContainer.top)
    // console.log(sizeContainer)
    // console.log(sizeContainer.width / 2 - (event.pageX - sizeContainer.left))
    // console.log(
    //   sizeContainer.height / 2 -
    //     (event.pageY - sizeContainer.top - window.pageYOffset)
    // )

    event.currentTarget.querySelector(
      'section'
    ).style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
  }

  function handleMouseOut(event) {
    event.currentTarget.querySelector(
      'section'
    ).style.transform = `rotateY(0deg) rotateX(0deg)`
    // event.currentTarget.querySelector('section').style.transition =
    //   'all 0.5s ease'
  }

  // function handleMouseEnter(event) {
  //   event.currentTarget.querySelector('section').style.transition = 'none'
  // }
}
