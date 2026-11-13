import { Outlet } from 'react-router-dom'

/** La aplicación se usa sin sesión por defecto durante la navegación. */
const RutaProtegida = () => <Outlet />

export default RutaProtegida