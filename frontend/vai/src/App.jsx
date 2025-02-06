import { use, useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Loginpage from './pages/Loginpage'
import Navbar from './pages/Navbar'
import Login from './component/Login'


function App() {
 const [count,setCount]=useState(0)
return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Loginpage/>}/>
    </Routes>
    </BrowserRouter>
)
}

export default App
