import { AbsoluteCenter, Box, Heading, Image, Text } from '@chakra-ui/react'
import LinkButton from '@/components/link-button'
import errorImg from '../../images/errorPage.png'

const ErrorPage = () => {
  return (
    <Box position="relative" h="100vh" w="100vw" bg="bg.subtle">
      <AbsoluteCenter>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={10}
          p={12}
          bg="bg.panel"
          borderWidth="1px"
          borderColor="border"
          borderRadius="md"
          color="fg"
        >
          <Image src={errorImg} alt="icono error" />
          <Heading fontSize={{ base: '5xl', md: '8xl' }}>ERROR 404</Heading>
          <Text fontSize={{ base: 'xl', md: '2xl' }} textAlign="center">
            Este bondi no pasa por acá: la página que buscás no existe.
          </Text>
          <LinkButton
            to="/"
            size="lg"
            fontSize="xl"
            px={8}
            justifyContent="center"
            variant="solid"
            colorPalette="brand"
          >
            Volver al inicio
          </LinkButton>
        </Box>
      </AbsoluteCenter>
    </Box>
  )
}

export default ErrorPage
