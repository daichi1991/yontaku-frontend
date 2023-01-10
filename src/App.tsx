import { ThemeProvider } from '@emotion/react'
import { Container } from './components/container'
import { AuthUserProvider } from './contexts/authUserContext'
import { theme } from './styles/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthUserProvider>
        <Container />
      </AuthUserProvider>
    </ThemeProvider>
  )
}

export default App
