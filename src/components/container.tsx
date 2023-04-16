import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RouteAuthGuard } from './RouteAuthGuard'
import { EditUserProfile } from './pages/EditUserProfile/Index'
import { Home } from './pages/Home/Index'
import { Product } from './pages/Product/Index'
import { SearchResult } from './pages/SearchResult/Index'
import { SignIn } from './pages/SignIn/Index'
import { SignUpForm } from './pages/SignUpForm/Index'

export const Container: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/signin'} element={<SignIn />} />
        <Route path={'/signup/form'} element={<SignUpForm />} />
        <Route path={'/search/result'} element={<SearchResult />} />
        <Route path={'/product'} element={<Product />} />
        <Route
          path={'/user/profile/edit'}
          element={<RouteAuthGuard component={<EditUserProfile />} />}
        />
      </Routes>
    </BrowserRouter>
  )
}
