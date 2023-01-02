import { ThemeProvider } from '@emotion/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { SignIn } from './components/pages/SignIn'
import { SignUpForm } from './components/pages/SignUpForm'
import { theme } from './styles/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/signin'} element={<SignIn />} />
          <Route path={'/signup/form'} element={<SignUpForm />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
