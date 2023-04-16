import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthUserContext } from '../contexts/authUserContext'

interface Props {
  component: React.ReactNode
}

export const RouteAuthGuard: React.FC<Props> = (props: Props) => {
  const { component } = props
  const { isAuthenticated, userToken } = useContext(AuthUserContext)

  if (!isAuthenticated) {
    return <div>Loading...</div>
  }

  if (userToken === '') {
    return <Navigate to={'/signin'} state={{ from: useLocation() }} replace={false} />
  }

  return <>{component}</>
}
