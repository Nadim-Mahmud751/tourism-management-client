import React from 'react'
import "./App.css"
import { Header } from './components/header/Header'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/home/HomePage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import SignupPage from './pages/signup/SignupPage'
const App = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </MainLayout>


    </>
  )
}

export default App