import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material'
import ResponsiveAppBar from './tab/tab.tsx'
import { MainRouter } from './routes/index.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
      <ResponsiveAppBar/>
        <MainRouter /> 
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>,
)
