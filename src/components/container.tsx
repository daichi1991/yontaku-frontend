import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import { SignUpForm } from './pages/SignUpForm'

export const Container: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/signin'} element={<SignIn />} />
        <Route path={'/signup/form'} element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  )
}
