import * as React from 'react'

const { createContext, useState } = React

interface AuthUserType {
  isAuthenticated: boolean
  setIsAuthenticated: (isAuthenticated: boolean) => void
}

export const AuthUserContext = createContext<AuthUserType>({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) => {}
})

export const AuthUserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  return (
    <AuthUserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthUserContext.Provider>
  )
}
