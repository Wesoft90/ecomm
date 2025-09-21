import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Routes/Layout.jsx';
import ThemeContextHolder from './Components/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <ThemeContextHolder>
      <App />
    </ThemeContextHolder>
    </RouterProvider>
  </StrictMode>,

)
