
import Login from "./components/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Protected from "./components/Protected";
import Profile from "./components/Profile";

function App() {
 

  return (
    
     
       
        <BrowserRouter>
          <Routes>
          
          <Route path="/compadmin" element={<Login/>} />
          
            <Route path="/Profile" element={<Protected Component={Profile}/>} />

          </Routes>
         
        </BrowserRouter>
     
   
  );
}

export default App;
