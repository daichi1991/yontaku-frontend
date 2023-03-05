import { ThemeProvider } from '@emotion/react'
import { theme } from '../src/styles/theme'

export const withMuiTheme = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [withMuiTheme]
