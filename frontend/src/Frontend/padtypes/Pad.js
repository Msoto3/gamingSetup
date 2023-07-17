import React from 'react'
import { useContext } from 'react'
import DataContext from '../context/DataContext'
import { ControlItems } from './padItems/ControlItems'
import {HybridItems} from './padItems/HybridItems'
import { SpeedItems } from './padItems/SpeedItems'
import { Link } from 'react-router-dom'
const ControlPad = () => {
  const {padType,username,updateSpecs} = useContext(DataContext)
  const typeOfPad =  Object.keys(padType).find(key => padType[key]===true)
  return (
    <main className='headset-container'>
      {typeOfPad==='control' &&
        <>
          {ControlItems.map((item,key) =>{
            return(
              <div key={key} className='card'>
                <img style={{width:'100%'}} src={item.img} alt='nopic' />
                <div className='container'>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                  <a href={item.link} target='_blank' rel="noreferrer" >Link</a>
                  {username && <button className='itemAdd' style={{margin:'10px', cursor:'pointer'}} onClick={()=> updateSpecs(item.type,item.name,username)}>Add Item</button>}
                </div>
              </div>

            )
          })}
          
         
        </>
        
        
      }
      {typeOfPad==='hybrid' &&
      <>
        {HybridItems.map((item,key) =>{
            return(
              <div key={key} className='card'>
                <img style={{width:'100%'}} src={item.img} alt='nopic' />
                <div className='container'>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                  <a href={item.link} target='_blank' rel="noreferrer" >Link</a>
                  {username && <button className='itemAdd' style={{margin:'10px', cursor:'pointer'}} onClick={()=> updateSpecs(item.type,item.name,username)}>Add Item</button>}
                </div>

              </div>

            )
            
        })}
        
      
      </>
      
      
    }
     {typeOfPad==='speed' &&
      <>
        {SpeedItems.map((item,key) =>{
          return(
            <div key={key} className='card'>
              <img style={{width:'100%'}} src={item.img} alt='nopic' />
              <div className='container'>
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
                <a href={item.link} target='_blank' rel="noreferrer" >Link</a>
                {username && <button className='itemAdd' style={{margin:'10px', cursor:'pointer'}} onClick={()=> updateSpecs(item.type,item.name,username)}>Add Item</button>}
              </div>

            </div>

          )
        })}

        
       
      </>
      
      
    }
      {
        typeOfPad!=='control' && typeOfPad!=='hybrid' && typeOfPad!=='speed' &&
        <>
          <p><Link to='/'>Back to Home Page</Link></p>
        </>
      }
    </main>
  )
}

export default ControlPad