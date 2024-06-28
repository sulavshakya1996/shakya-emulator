import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RootLayout from './RootLayout.jsx'
import { ScreenContextProvider } from './context/ScreenContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <ScreenContextProvider>
    <RootLayout>
      <App />
    </RootLayout>
  </ScreenContextProvider>

)
