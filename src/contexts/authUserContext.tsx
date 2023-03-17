import * as React from 'react'
import { useEffect } from 'react'
import { auth } from '../firebase'

const { createContext, useState } = React

interface AuthUserType {
  isAuthenticated: boolean
  setIsAuthenticated: (isAuthenticated: boolean) => void
  userToken: string
  setUserToken: (userToken: string) => void
}

export const AuthUserContext = createContext<AuthUserType>({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) => {},
  userToken: '',
  setUserToken: (userToken) => {}
})

export const AuthUserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [userToken, setUserToken] = useState<string>('')

  useEffect(() => {
    const getIdToken = auth.onAuthStateChanged((user) => {
      user
        ?.getIdToken(/* forceRefresh */ true)
        .then((idToken) => {
          setUserToken(idToken)
          setIsAuthenticated(true)
          console.log(idToken)
        })
        .catch((error) => {
          console.error(error)
        })
    })
    return () => {
      getIdToken()
    }
  }, [])

  return (
    <AuthUserContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, userToken, setUserToken }}
    >
      {children}
    </AuthUserContext.Provider>
  )
}
