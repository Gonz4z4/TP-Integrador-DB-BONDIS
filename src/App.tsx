import { Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import { Toaster } from './components/ui/toaster'

const App = () => (
  <Flex direction="column" minH="100vh" w="100%">
    <Header />
    <Box as="main" flex="1" w="full">
      <Outlet />
    </Box>
    <Footer />
    <Toaster />
  </Flex>
)

export default App
