import { ThemeProvider } from '@emotion/react'
import { addDecorator } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { MediaQueryProvider } from '../src/contexts/mediaQueryContext'
import { theme } from '../src/styles/theme'

addDecorator((storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>)

export const withMuiTheme = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <MediaQueryProvider>
        <Story />
      </MediaQueryProvider>
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
