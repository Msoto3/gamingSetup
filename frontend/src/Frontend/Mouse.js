import React from 'react'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'
import { useContext } from 'react'
import palm from './pics/palm-grip-edited.jpg'
import finger from './pics/fingertip-grip-edited.jpg'
import claw from './pics/claw-grip-edited.jpg'

const Mouse = () => {
  const {gripType,setGripType} = useContext(DataContext)
  const handleGrip = (type) =>{
    const updateGrip = {}
    Object.keys(gripType).forEach(key =>{
      updateGrip[key] = key.toString()===type
    })
    setGripType(updateGrip)
  }
  return (
    <main className='padChoice'>
      <div>
        <img style={{width:'50%'}} src={palm} alt='palm' />
        <p>You might consider using a palm grip if you want greater control over your mouse but don’t need the quick responsiveness demanded by some action games.</p>
        <button><Link onClick={() => handleGrip("palm")} to='/mouse/grip'>Palm Grip</Link></button>
      </div>
      <div>
        <img style={{width:'50%'}} src={claw} alt='claw' />
        <p>You might use a claw grip if you’re seeking a balance between speed and accuracy, and you tend to make short, fast-twitch mouse movements with minimal range of motion.</p>
        <button><Link onClick={() => handleGrip("claw")} to='/mouse/grip'>Claw Grip</Link></button>
      </div>
      <div>
        <img style={{width:'50%'}} src={finger} alt='finger' />
        <p>You might consider using a fingertip grip when you want to prioritize speed over control, and if the game you play doesn't need accuracy.</p>
        <button><Link onClick={() => handleGrip("finger")} to='/mouse/grip'>Finger Grip</Link></button>
      </div>
    </main>
  )
}

export default Mouse