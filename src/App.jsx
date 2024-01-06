import React, { useEffect, useState } from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import './Appstyle.css'
import Header from './Components/Header'
import Login from './Screens/Login/Login'
import Main from './Screens/Main/Main'
import { Divider, Stack } from '@mui/material'
import SideBar from './Components/SideBar'
function App() {
  const location = useLocation();
  const [isLogin,setIsLogin] = useState(true)
  useEffect(()=>{
    if (location.pathname === '/' || location.pathname == '/registration') {
      setIsLogin(true)
    }else{
      setIsLogin(false)
    }
  },[location])
  console.log(location.pathname)
  return (
    <> 
      {isLogin ? null : <Header/>}
      
      <Stack gap={1} direction='row' flex={1} padding='10px 0'>
        {isLogin ? null : <SideBar/>}

       

        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/registration' element={<Login/>}/>
          <Route path='/home' element={<Main/>}/>
          <Route path='/profile' element={<h1>profile</h1>}/>
          <Route path='/settings' element={<h1>setting</h1>}/>
          <Route path='/rating' element={<h1>reting</h1>}/>
          <Route path='/subjects' element={<h1>sujects</h1>}/>
          <Route path='/contacts' element={<h1>contacts</h1>}/>
        </Routes>
      </Stack>
      


    </>
  )
}

export default App
