import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import Main from './Layout/Main';
import App from './App';
import './index.css'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import MyCart from './Pages/MyCart/MyCart';
import Feedback from './Pages/Feedback/Feedback';


createRoot(document.getElementById('root')).render(
  <div className='mx-52'>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main></Main>}>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/myCart' element={<MyCart></MyCart>}></Route>
            <Route path='/feedback' element={<Feedback></Feedback>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </div>
)
