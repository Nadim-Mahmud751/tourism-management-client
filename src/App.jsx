import React from 'react'
import "./App.css"
import { Header } from './components/header/Header'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/home/HomePage'
const App = () => {
  return (
    <>
      <MainLayout>
        <HomePage />
      </MainLayout>


    </>
  )
}

export default App