import Header from "./Frontend/Header";
import { Route, Routes} from 'react-router-dom';
import Sign from "./Frontend/Sign";
import Signup from "./Frontend/Signup";
import Monitor from "./Frontend/Monitor";
import Home from "./Frontend/Home";
import Keyboard from './Frontend/Keyboard'
import Pc from './Frontend/Pc'
import Mouse from './Frontend/Mouse'
import MousePad from './Frontend/MousePad'
import Headset from "./Frontend/Headset";
import Pad from "./Frontend/padtypes/Pad"
import Grip from "./Frontend/griptypes/Grip";
import Profile from "./Frontend/Profile";
import { DataProvider } from "./Frontend/context/DataContext";
function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Routes>

          <Route  path='/' element={<Home />} />
          <Route path="/signin" element={<Sign />} />
          <Route path="/signup" element={<Signup />} />
          <Route  path="/profile" element={<Profile />} />
          <Route  path='/mouse' element={<Mouse />} />
          <Route   path='/monitor' element={<Monitor />} />
          <Route   path='/pc' element={<Pc />} />
          <Route   exact path='/mousepad' element={<MousePad />} />
          <Route  path='/keyboard' element={<Keyboard />} />
          <Route   path='/headset' element={<Headset />} />
          <Route  path="/mousepad/pad" element={<Pad />} />
          <Route  path="/mouse/grip" element={<Grip />} />
          
        </Routes>

      </DataProvider>
      
      
     
      
      
    </div>
  );
}

export default App;
