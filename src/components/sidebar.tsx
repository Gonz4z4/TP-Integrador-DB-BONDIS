import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import LinkButton from './link-button'

function Sidebar() {
  return (
    <Box
      as="header"
      w="14rem"
      p={4}
      borderRightWidth="1px"
      borderColor="border"
    >
      <Flex gap={3} justify="center" direction="column" align="Flex-start">
        <Flex gap={2} align="center">
          <Image
            maxW="2rem"
            src="../images/logo.png"
            alt="Logo"
            className="logo"
          />
          <Heading size="2xl">Envíos</Heading>
        </Flex>
        <Flex gap={2} direction="column" w="full" mt={4}>
          <LinkButton to="/">Dashboard</LinkButton>
          <LinkButton to="/pendientes">Pendientes</LinkButton>
          <LinkButton to="/envios">Envios</LinkButton>
          <LinkButton to="/transportistas">Transportistas</LinkButton>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Sidebar
