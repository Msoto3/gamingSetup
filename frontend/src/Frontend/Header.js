import { useState, useContext, useEffect} from 'react'
import { Link} from 'react-router-dom'
import DataContext from './context/DataContext'
import axios from 'axios'


const Header = () => {
  const [clicked,setClick] = useState(false)
  const {logged,setLogged,username,setUsername,setUserSpecs} = useContext(DataContext)

  useEffect(()=>{
      axios.get("http://localhost:5000/routes/auth",{headers:{token: localStorage.getItem("token")}}).then((res)=>{
        if(res.data.error){
          setLogged(false)
        }
        else{
          setLogged(true)
          setUsername(res.data.username)
          setUserSpecs(res.data.specs)
          
        
        }
        
      })
      

  
    
    
    
    
    
    
  },[setLogged,setUserSpecs,setUsername])

  
  const reset = () =>{
      localStorage.removeItem("token")
      setUsername("")
      setLogged(false)
      setUserSpecs({})
      window.location.reload()
  }
  const handleClick = () =>{
    setClick(!clicked)
  }
  return (
    <header>
            <nav >
                <ul className={`navBar ${clicked?'responsive':''}`}>
                    <li><Link to='/'>&#127918;</Link></li>
                    {!logged ?(<li><Link to={'/signin'}>Login</Link></li>):
                    (
                      <>
                      <li><Link to={'/profile'}>{username}</Link></li>
                      <li><Link onClick={() => reset()}>Logout</Link></li>
                      </>
                      

                    )
                    }
                    
                    <li className='right' ><Link to='/mouse'>Mice</Link></li>
                    <li className='right'><Link to='/keyboard'>Keyboard</Link></li>
                    <li className='right'><Link to='/pc'>PC</Link></li>
                    <li className='right'><Link to='/monitor'>Monitors</Link></li>
                    <li className='right'><Link to='/mousepad'>MousePads</Link></li>
                    <li className='right'><Link to='/headset'>Headsets</Link></li>
                    {clicked &&
                        <li className="menu"><Link onClick={handleClick}>&#10005;</Link></li>

                    }
                    {!clicked && 
                        <li className="menu"><Link onClick={handleClick}>&#9776;</Link></li>
                    }
                    
                </ul>
                
            </nav>
            

    </header>
  )
}

export default Header