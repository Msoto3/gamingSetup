
import { PcItems } from './PCitems/PcItems'
import { useContext } from 'react'
import DataContext from './context/DataContext'
const Pc = () => {
  const {page,setPage,username,updateSpecs} = useContext(DataContext)
  
  const handleButton = () =>{
    setPage(!page)
  }
  return (
    <main className={page?'headset-container':''}>
      {!page &&
        <div className='disclaimer'>
          <h1>Disclaimer</h1>
          <p>Note that I will be giving you two of the best prebuilt pc options, in my opinion, to purchase whether you have a budget or want the best kind of pc, and that these pc's won't outperform a pc that you can build yourself, but this is meant to be for beginners so the best possible options for the average person was made in order to not overwhelm the user with info. Just click on the button once you understand this</p>
          <button onClick={handleButton}>I UNDERSTAND</button>
        </div>

      }
      {page && PcItems.map((item,key) =>{
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

export default Pc