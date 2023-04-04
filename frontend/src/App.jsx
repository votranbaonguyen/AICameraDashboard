import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeAlert } from './page/alert/HomeAlert'
import { Area } from './page/area/Area'
import { Login } from './page/authentication/Login'
import { CameraManage } from './page/cameraManage/CameraManage'
import { Contact } from './page/contact/Contact'
import { EmployeeManage } from './page/employeeManage/EmployeeManage'
import { Home } from './page/home/Home'
import { Setting } from './page/setting/Setting'
import { Static } from './page/static/Static'
import "./sass/Main.scss"
import { HomeTemplate } from './template/HomeTemplate'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<HomeTemplate/>}>
          <Route path='/' element={<Home />} />
          <Route path='/cameramanage' element={<CameraManage />} />
          <Route path='/alert' element={<HomeAlert />} />
          <Route path='/area' element={<Area />} />
          <Route path='/static' element={<Static />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/employees' element={<EmployeeManage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
