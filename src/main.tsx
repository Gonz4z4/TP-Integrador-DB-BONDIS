import React from 'react'
import ReactDOM from 'react-dom/client'
import { Rutas } from './routes'
import './index.css'


const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Rutas />
    </React.StrictMode>
  )
}
