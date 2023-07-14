import { FC } from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import { ThemeProvider, useTheme } from './ui/theme'
import AppRouter from './AppRouter'

const App: FC = () => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
