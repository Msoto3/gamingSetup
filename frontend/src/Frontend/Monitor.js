import React from 'react'
import {MonitorItems} from './monitorItems/MonitorItems'
import { useContext } from 'react'
import DataContext from './context/DataContext'
const Monitor = () => {
  const {username,updateSpecs} = useContext(DataContext)
  return (
    <main className='headset-container'>
      {MonitorItems.map((item,index) =>{
        return(
          <div key={index} className='card'>
            <img src={item.img} alt='nopic'/>
            <div className='container'>
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              <a href={item.link} target='_blank' rel="noreferrer">Link</a>
              {username && <button className='itemAdd' style={{margin:'10px', cursor:'pointer'}} onClick={()=> updateSpecs(item.type,item.name,username)}>Add Item</button>}
            </div>
          </div>
        )
      })}

    </main>
  )
}

export default Monitor