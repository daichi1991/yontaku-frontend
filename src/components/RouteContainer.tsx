import { Container } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RouteAuthGuard } from './RouteAuthGuard'
import { Dashboard } from './pages/Dashboard/Index'
import { EditUserProfile } from './pages/EditUserProfile/Index'
import { Home } from './pages/Home/Index'
import { Product } from './pages/Product/Index'
import { SearchResult } from './pages/SearchResult/Index'
import { SignIn } from './pages/SignIn/Index'
import { SignUpForm } from './pages/SignUpForm/Index'
import { UserProfile } from './pages/UserProfile/Index'

export const RouteContainer: React.FC = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/signin'} element={<SignIn />} />
          <Route path={'/signup/form'} element={<SignUpForm />} />
          <Route path={'/search/result'} element={<SearchResult />} />
          <Route path={'/product'} element={<Product />} />
          <Route path={'/user/:userId'} element={<UserProfile />} />
          <Route
            path={'/user/profile/edit'}
            element={<RouteAuthGuard component={<EditUserProfile />} />}
          />
          <Route path={'/dashboard'} element={<RouteAuthGuard component={<Dashboard />} />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}
