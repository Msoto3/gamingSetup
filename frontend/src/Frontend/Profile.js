import { useContext,useEffect } from 'react'
import DataContext from './context/DataContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MonitorItems } from './monitorItems/MonitorItems';
import { KeyboardItems } from './keyboardItems/KeyboardItems'
import { PcItems } from './PCitems/PcItems'
import { HeadItems } from './headsetItems/HeadItems'
import { ClawItem } from './griptypes/gripitems/ClawItem';
import { PalmItem } from './griptypes/gripitems/PalmItem';
import { FingerItem } from './griptypes/gripitems/FingerItem';
import { ControlItems } from './padtypes/padItems/ControlItems';
import { SpeedItems } from './padtypes/padItems/SpeedItems';
import { HybridItems } from './padtypes/padItems/HybridItems';



const Profile = () => {
  const {userSpecs,updateSpecs,username,setUserSpecs} = useContext(DataContext)
  const navigate = useNavigate()
  let link = ""
  useEffect(()=>{
    if(!localStorage.getItem("token")) {
      navigate('/')
    }
    else{
     
      axios.get("https://gamesetup-api.onrender.com/routes/getSpecs",username).then((res)=>{
            setUserSpecs(res.data)
      })
    }
  },[navigate,username,setUserSpecs])
  
 

  return (
    
    <div className='card' style={{width:'50%',margin:'0 auto'}}>
        
        <h1 style={{textAlign:'center', marginTop:'10px'}}>Profile:{username}</h1>
        {Object.entries(userSpecs).map(([key,value]) =>{
          if(key==="headset"){
            const findTitle = HeadItems.find(headset => headset.title===value)
            link = findTitle? findTitle.link:""
          }
          else if(key==="monitor"){
            const findTitle = MonitorItems.find(monitor => monitor.name===value)
            link = findTitle? findTitle.link:""

          }
          else if(key==="pc"){
            const findTitle = PcItems.find(pc => pc.name===value)
            link = findTitle? findTitle.link:""

          }
          else if(key==="keyboard"){
            const findTitle = KeyboardItems.find(keyboard => keyboard.name===value)
            link = findTitle? findTitle.link:""

          }
          else if(key==="mousepad"){
            const findTitle = (ControlItems.find(mousepad => mousepad.name===value ))?(ControlItems.find(mousepad => mousepad.name===value )):
            (SpeedItems.find(mousepad => mousepad.name===value ))?(SpeedItems.find(mousepad => mousepad.name===value )):
            (HybridItems.find(mousepad => mousepad.name===value ))?(HybridItems.find(mousepad => mousepad.name===value )):false

            link = findTitle?findTitle.link:""

          }
          else if(key==="mouse"){
            const findTitle = (PalmItem.find(mouse => mouse.name===value))?(PalmItem.find(mouse => mouse.name===value)):
            (ClawItem.find(mouse => mouse.name===value))?(ClawItem.find(mouse => mouse.name===value)):
            (FingerItem.find(mouse => mouse.name===value))?(FingerItem.find(mouse => mouse.name===value)):false

            link = findTitle?findTitle.link:""
          }
         
          return(
            value!=null && 
              <div className='container' style={{borderTop:'solid black 5px',textAlign:'center'}} key={key}>
                <h2>{key.toUpperCase()}</h2>
                <a href={link} target='_blank' rel="noreferrer"><p>{value}</p></a>
                
                <button className='itemDelete' onClick={()=>updateSpecs(key,null,username)}>Remove</button>
              </div>
            
            
            
            

          )
          

        })
        }
        

        
        
    </div>
  )
}

export default Profile