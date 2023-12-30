import { createContext, useState } from "react";
import axios from "axios";

const DataContext = createContext({})

export const DataProvider = ({children}) =>{
    const [padType,setPadType] = useState({
        speed:false,
        control:false,
        hybrid:false
      })
    const [gripType,setGripType] = useState({
        palm:false,
        claw:false,
        finger:false
    })
    const [userSpecs,setUserSpecs] = useState({})

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [logged,setLogged] = useState(false)
    const [page,setPage] = useState(false)
    const [kbm,setKbm] = useState(false)

    const updateSpecs = async(type,title,username) =>{
        try {
          const response = await axios.put("http://localhost:5000/routes/specs", { title:title,username:username,type:type},{headers:{token:localStorage.getItem("token")}})
          
          
          if(title==null){
            setUserSpecs((prevSpecs)=>({
              ...prevSpecs,
              [type]:response.data
            }))
            alert("ITEM REMOVED")
          }
          else{
            setUserSpecs((prevSpecs)=>({
              ...prevSpecs,
              [type]:response.data
            }))
            alert("ITEM ADDED")
          }
          
          
        } catch (error) {
          return
        }
    
      }

    

    

    return(
        <DataContext.Provider value={{
            padType,setPadType,page,setPage,gripType,setGripType,kbm,setKbm,logged,setLogged,username,setUsername,password,setPassword,updateSpecs,
            userSpecs,setUserSpecs
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext