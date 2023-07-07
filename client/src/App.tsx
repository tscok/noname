import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'

import { ThemeProvider, useTheme } from './ui/theme'
import AppRouter from './AppRouter'

const App: FC = () => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  )
}

export default App
