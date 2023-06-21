import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { StoreProvider } from './store/StoreProvider'
import { AppRouter } from './AppRouter'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={AppRouter} />
    </StoreProvider>
  </React.StrictMode>
)
