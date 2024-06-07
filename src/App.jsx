import React from 'react'
import "./App.css"
import { Header } from './components/header/Header'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/home/HomePage'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import SignupPage from './pages/signup/SignupPage'
import PageNotFound from './pages/page-not-found/PageNotFound'
import { routes } from './routes/routes'
const App = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          {
            routes.map((item, index) =>
              <Route key={index} path={item.path} element={item.element} />

            )
          }
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </MainLayout>


    </>
  )
}

export default App