import React from 'react'
import img from './pics/alienware-Hpaq-kBcYHk-unsplash.jpg'

const Home = () => {
  return (
    <main className='home'>
        <h1>Welcome</h1>
        <p>Customize a personal pc set up with the suggestions I've handpicked.</p>
        <p>This is meant to be for the general people as the suggestions will fit perfectly for the majority, so you aren't endlessly scrolling the internet for what to choose.</p>
        <img src={img} alt='pc' />
    </main>
  )
}

export default Home