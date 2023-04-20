import { ThemeProvider } from '@emotion/react'
import { RouteContainer } from './components/RouteContainer'
import { AuthUserProvider } from './contexts/authUserContext'
import { MediaQueryProvider } from './contexts/mediaQueryContext'
import { theme } from './styles/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MediaQueryProvider>
        <AuthUserProvider>
          <RouteContainer />
        </AuthUserProvider>
      </MediaQueryProvider>
    </ThemeProvider>
  )
}

export default App
