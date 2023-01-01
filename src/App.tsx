import { ThemeProvider } from '@emotion/react'
import { Top } from './components/pages/top'
import { theme } from './styles/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Top />
    </ThemeProvider>
  )
}

export default App
