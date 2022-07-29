 import { useContext } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import {AuthContext} from "./context/AuthContext"
function App() {
  const {auth}=useContext(AuthContext)
  console.log(auth);
   return (
    <>
        {
          auth===false?<LoginPage/>: <HomePage/>
        }
       
    </>
     
  );
}

export default App;
