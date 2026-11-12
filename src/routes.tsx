import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import RutaProtegida from './components/RutaProtegida'
import { Provider } from './components/ui/provider'
import { SesionProvider } from './context/sesion'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Ingresar from './pages/Ingresar'
import LineaDetalle from './pages/LineaDetalle'
import Lineas from './pages/Lineas'
import MisOpiniones from './pages/MisOpiniones'

export const Rutas = () => (
  <BrowserRouter>
    <Provider defaultTheme="light">
      <SesionProvider>
        <Routes>
          <Route path="ingresar" element={<Ingresar />} />
          <Route element={<RutaProtegida />}>
            <Route element={<App />}>
              <Route index element={<Home />} />
              <Route path="lineas" element={<Lineas />} />
              <Route path="lineas/:numero" element={<LineaDetalle />} />
              <Route path="mis-opiniones" element={<MisOpiniones />} />
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </SesionProvider>
    </Provider>
  </BrowserRouter>
)