import './App.css'
import { Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/sidebar'
import { showToast } from './components/toast'
import { Toaster } from './components/ui/toaster'
import { getMensajeError } from './lib/errorHandler'

const App = () => {
  const probarErrorHandler = () => {
    try {
      throw new Error('Error de prueba')
    } catch (error) {
      showToast(getMensajeError(error), 'error')
    }
  } 
  

  return (
      <Flex w="100vw" minH="100vh">
        <Sidebar />
        <Box w="100%" flex="1">
          <Outlet />
          {/*BOTON DE ERROR DE PRUEBA PARA PROBAR EL ERROR HANDLER*/}
        <button type="button" onClick={probarErrorHandler}>
            Probar errorHandler
          </button>
        </Box>
      <Toaster />
      </Flex>      
  )
}

export default App
