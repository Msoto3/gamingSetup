import { KeyboardItems } from './keyboardItems/KeyboardItems'
import { useContext } from 'react'
import DataContext from './context/DataContext'

const Keyboard = () => {
  const {kbm,setKbm,username,updateSpecs} = useContext(DataContext)
  
  const handleButton = () =>{
    setKbm(!kbm)
  }
  return (
    <main className={kbm?'headset-container':''}>
      {!kbm &&
        <div className='disclaimer'>
          <h1>Disclaimer</h1>
          <p>Note that I will be giving you the best possible options for each important keyboard size for beginners.</p>
          <button onClick={handleButton}>I UNDERSTAND</button>
        </div>

      }
      {kbm && KeyboardItems.map((item,key) =>{
        return(
          <div key={key} className='card'>
            <img src={item.img} alt='nopic'/>
            <div className='container'>
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              <a href={item.link} target='_blank' rel="noreferrer">Link</a>
              {username && <button className='itemAdd' style={{margin:'10px', cursor:'pointer'}} onClick={()=> updateSpecs(item.type,item.name,username)}>Add Item</button>}
            </div>
          </div>

        )
      })

      }

    </main>
  )
}

export default Keyboard