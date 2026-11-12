import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSesion } from '@/context/sesion'

/** Si no hay sesión, manda a /ingresar y recuerda a dónde quería ir. */
const RutaProtegida = () => {
  const { usuario } = useSesion()
  const location = useLocation()

  if (!usuario) {
    return (
      <Navigate
        to="/ingresar"
        replace
        state={{ desde: `${location.pathname}${location.search}` }}
      />
    )
  }
  return <Outlet />
}

export default RutaProtegida