import { Box, Container, Flex, Text } from '@chakra-ui/react'

const Footer = () => (
  <Box
    as="footer"
    bg="bg.subtle"
    borderTopWidth="1px"
    borderColor="border"
    mt={16}
  >
    <Container maxW="1200px" px={8} py={8}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        gap={2}
      >
        <Text fontFamily="heading" fontWeight="bold">
          BONDIAR
        </Text>
        <Text fontSize="xs" color="fg.muted">
          TP Integrador · Bases de Datos · UNSAM · Datos de recorridos de CABA
        </Text>
      </Flex>
    </Container>
  </Box>
)

export default Footer
