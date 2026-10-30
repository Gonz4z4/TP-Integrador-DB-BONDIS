import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "./components/ui/provider";
import Dashboard from './pages/dashboard'
import { Envios } from './pages/Envios.tsx'
import NuevoEnvio from './pages/NuevoEnvio'
import Pendientes from './pages/Pendientes'
import Transportistas from './pages/Transportistas'
import NuevoTransportista from './pages/NuevoTransportista.tsx'
import EditarTransportista from './pages/EditarTransportista.tsx'
import App from "./App";
import ErrorPage from "./pages/ErrorPage.tsx";

export const Rutas = () => (
    <BrowserRouter>
        <Provider>
            <Routes>
                <Route element={<App />}>
                    <Route index element={<Dashboard />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Provider>
    </BrowserRouter>
)