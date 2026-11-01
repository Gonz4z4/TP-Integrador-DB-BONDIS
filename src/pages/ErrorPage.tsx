import LinkButton from "@/components/link-button"
import { AbsoluteCenter, Box, Heading, Image, Text } from "@chakra-ui/react"


const ErrorPage = () => {
    return (
        <Box position="relative" h="100vh" w="100vw" bg="bg.muted" borderRadius="md">
        <AbsoluteCenter>
                <Box display="flex" flexDirection="column" alignItems="center" gap={10} p={12} bg="bg.emphasized" borderRadius="md" color="fg">
                    <Image src="../images/errorPage.png" alt="icono error" />
                    <Heading fontSize={{ base: "5xl", md: "8xl" }}>ERROR 404</Heading>
                    <Text fontSize={{ base: "xl", md: "2xl" }} textAlign="center">La página que buscás no se encuentra disponible.</Text>
                    <LinkButton to="/" size="lg" fontSize="xl" px={8} justifyContent="center" variant="solid" bg="var(--color-principal)" color="white">
                    Volver al Dashboard
                    </LinkButton>
                    
            </Box>
        </AbsoluteCenter>
        </Box>
    )
}

export default ErrorPage