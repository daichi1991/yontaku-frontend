import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      light: '#80cbc4',
      main: '#009688',
      dark: '#004d40',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ffcc80',
      main: '#ff9800',
      dark: '#f57c00',
      contrastText: '#000'
    }
  }
})
