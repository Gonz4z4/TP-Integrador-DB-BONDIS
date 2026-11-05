import './App.css'
import { Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { Toaster } from './components/ui/toaster'

const App = () => {
  
  

  return (
      <Flex w="100vw" minH="100vh">
        <Box w="100%" flex="1">
          <Outlet />
        </Box>
      <Toaster />
      </Flex>      
  )
}

export default App
