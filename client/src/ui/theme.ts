import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useMode } from '../store'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

export { ThemeProvider }

export function useTheme() {
  const [mode] = useMode()
  return mode === 'dark' ? darkTheme : lightTheme
}
