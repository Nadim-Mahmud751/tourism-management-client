import React from 'react'
import "./App.css"
import { Header } from './components/header/Header'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/home/HomePage'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </MainLayout>


    </>
  )
}

export default App