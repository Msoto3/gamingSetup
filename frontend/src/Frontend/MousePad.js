import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'

const MousePad = () => {
  const {padType,setPadType} = useContext(DataContext) 
  const handlePad = (type) =>{
    const updatedPad = {}
    Object.keys(padType).forEach(key =>{
      updatedPad[key] = key.toString()===type
    })
    setPadType(updatedPad)
  }
  
  return (
    <main className='padChoice'>
      <div>
        <p>Allows for fast aim and reaction time. Usually designed with a smooth texture to prevent friction. Primarily designed to give effortless glide</p>
        <button><Link onClick={() => handlePad("speed")} to='/mousepad/pad'>Speed Pad</Link></button>
      </div>
      <div>
        <p>focus on precision and accuracy, and usually have a rough texture</p>
        <button><Link onClick={() => handlePad("control")} to='/mousepad/pad'>Control Pad</Link></button>
      </div>
      <div>
        <p>Designed to give the middle postion of a control pad and speed pad</p>
        <button><Link onClick={() => handlePad("hybrid")} to='/mousepad/pad'>Hybrid Pad</Link></button>
      </div>
    </main>
  )
}

export default MousePad