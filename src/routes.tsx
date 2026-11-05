import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "./components/ui/provider";

import App from "./App";
import ErrorPage from "./pages/ErrorPage.tsx";

export const Rutas = () => (
    <BrowserRouter>
        <Provider>
            <Routes>
                <Route element={<App />}>
                    <Route index element={<ErrorPage />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Provider>
    </BrowserRouter>
)