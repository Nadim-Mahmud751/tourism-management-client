import React from 'react'
import "./App.css"
import MainLayout from './layout/MainLayout'
import {  Route, Routes } from 'react-router-dom'

import PageNotFound from './pages/page-not-found/PageNotFound'
import { routes } from './routes/routes'
import { ContextProvider } from './context/ContextProvider'

const App = () => {
  return (
    <ContextProvider>
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


    </ContextProvider>
  )
}

export default App