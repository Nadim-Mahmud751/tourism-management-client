import React from 'react'
import { AuthContextProvider } from './AuthContext'

export const ContextProvider = ({ children }) => {
  return (
    <AuthContextProvider>{children}</AuthContextProvider>
  )
}
