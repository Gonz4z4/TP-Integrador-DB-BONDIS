import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { Provider } from './components/ui/provider'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import LineaDetalle from './pages/LineaDetalle'
import Lineas from './pages/Lineas'

export const Rutas = () => (
  <BrowserRouter>
    <Provider defaultTheme="light">
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="lineas" element={<Lineas />} />
          <Route path="lineas/:numero" element={<LineaDetalle />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Provider>
  </BrowserRouter>
)
