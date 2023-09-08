import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useAtomValue } from 'jotai'

import { modeAtom } from '../store'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#2b2b2b',
    },
  },
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f9f9f9',
    },
  },
})

export { ThemeProvider }

export function useTheme() {
  const mode = useAtomValue(modeAtom)
  return mode === 'dark' ? darkTheme : lightTheme
}
