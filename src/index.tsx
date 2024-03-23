import React from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { QueryClientProvider } from '@tanstack/react-query'

import { Envs } from './constants/envs'
import { AppRoutes } from './app-routes'
import { configureAppStore } from './redux'

import { queryClient } from './hooks/api/query-client'

const enablingMocking = async (): Promise<unknown> => {
  if (process.env.NODE_ENV !== Envs.DEVELOPMENT) {
    return
  }

  const { worker } = await import('./mocks')
  return worker.start({ onUnhandledRequest: 'bypass' })
}

const store = configureAppStore()
const root: Root = createRoot(document.getElementById('root') as HTMLElement)
enablingMocking().then(() => {
  root.render(
    <React.StrictMode>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </ReduxProvider>
    </React.StrictMode>
  )
})
