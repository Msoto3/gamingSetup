import React from 'react'
import { HeadItems } from './headsetItems/HeadItems'
import { useContext } from 'react'
import DataContext from './context/DataContext'

const Headset = () => {
  const {username,updateSpecs} = useContext(DataContext)
  return (
    <main className='headset-container'>
      {HeadItems.map((item,index) =>{
        return(
          <div key={index} className='card'>
            <img src={item.picture} alt='nopic'/>
            <div className='container'>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <a href={item.link} target='_blank' rel="noreferrer">Link</a>
              {username && 
              <button className='itemAdd' style={{margin:'10px', cursor:'pointer'}} onClick={()=> updateSpecs(item.type,item.title,username)}>Add Item</button>
              }
            </div>
          </div>

        )
      })}
      

    </main>
    
  )
}

export default Headset