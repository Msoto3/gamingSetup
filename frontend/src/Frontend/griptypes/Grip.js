import { useContext } from 'react'
import DataContext from '../context/DataContext'
import { ClawItem } from './gripitems/ClawItem'
import { PalmItem } from './gripitems/PalmItem'
import {FingerItem} from './gripitems/FingerItem'
import { Link } from 'react-router-dom'

const Grip = () =>{
    const {gripType} = useContext(DataContext)
    const gripStyle = Object.keys(gripType).find(key => gripType[key]===true)
    const {username,updateSpecs} = useContext(DataContext)
    return(
        <main className='headset-container'>
            {gripStyle==='palm' &&
                <>
                    {PalmItem.map((item,key) =>{
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
            {gripStyle==='claw' &&
                <>
                    {ClawItem.map((item,key) =>{
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
            {gripStyle==='finger' &&
                <>
                    {FingerItem.map((item,key) =>{
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
            {gripStyle!=='finger' && gripStyle!=='palm' && gripStyle!=='claw' &&
                <>
                    <p><Link to='/'>Back to Home Page</Link></p>
                </>
            }
        </main>
    )
}

export default Grip