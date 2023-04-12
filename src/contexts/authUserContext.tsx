import * as React from 'react'
import { useEffect } from 'react'
import { getCurrentUserInfo } from '../apis/user'
import { auth } from '../firebase'
import { UserType } from '../types'

const { createContext, useState } = React

interface AuthUserType {
  isAuthenticated: boolean
  setIsAuthenticated: (isAuthenticated: boolean) => void
  userToken: string
  setUserToken: (userToken: string) => void
  userInfo?: UserType
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
  const [userInfo, setUserInfo] = useState<UserType>({
    id: '',
    username: '',
    description: '',
    image: { url: '' },
    active: false
  })

  useEffect(() => {
    const getIdToken = auth.onAuthStateChanged((user) => {
      user
        ?.getIdToken(/* forceRefresh */ true)
        .then((idToken) => {
          setUserToken(idToken)
          setIsAuthenticated(true)
          console.log(idToken)
          void getCurrentUserInfo(idToken).then((res) => {
            console.log(res)
            setUserInfo(res)
          })
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
      value={{ isAuthenticated, setIsAuthenticated, userToken, setUserToken, userInfo }}
    >
      {children}
    </AuthUserContext.Provider>
  )
}
