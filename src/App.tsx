import { ThemeProvider } from '@emotion/react'
import { Container } from './components/container'
import { AuthUserProvider } from './contexts/authUserContext'
import { MediaQueryProvider } from './contexts/mediaQueryContext'
import { theme } from './styles/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MediaQueryProvider>
        <AuthUserProvider>
          <Container />
        </AuthUserProvider>
      </MediaQueryProvider>
    </ThemeProvider>
  )
}

export default App
