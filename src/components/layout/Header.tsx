import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Input,
  Text,
} from '@chakra-ui/react'
import { type FormEvent, useState } from 'react'
import { MdDirectionsBus, MdSearch } from 'react-icons/md'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import LinkButton from '@/components/link-button'
import { InputGroup } from '@/components/ui/input-group'
import { ColorModeButton } from '@/components/ui/color-mode'

const Header = () => {
  const [busqueda, setBusqueda] = useState('')
  const navigate = useNavigate()

  const buscar = (e: FormEvent) => {
    e.preventDefault()
    const q = busqueda.trim()
    navigate(q ? `/lineas?q=${encodeURIComponent(q)}` : '/lineas')
  }

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      bg="bg/95"
      backdropFilter="blur(12px)"
      borderBottomWidth="1px"
      borderColor="border"
    >
      <Container maxW="1200px" px={8}>
        <Flex h="16" align="center" justify="space-between" gap={6}>
          <HStack gap={6}>
            <RouterLink to="/">
              <HStack gap={2}>
                <Icon as={MdDirectionsBus} boxSize="26px" color="brand.solid" />
                <Text
                  fontFamily="heading"
                  fontSize="xl"
                  fontWeight="bold"
                  letterSpacing="-0.02em"
                >
                  BONDIAR
                </Text>
              </HStack>
            </RouterLink>
            <HStack as="nav" gap={1} display={{ base: 'none', md: 'flex' }}>
              <LinkButton to="/" w="auto" size="sm">
                Inicio
              </LinkButton>
              <LinkButton to="/lineas" w="auto" size="sm">
                Líneas
              </LinkButton>
            </HStack>
          </HStack>

          <HStack gap={3}>
            <Box as="form" onSubmit={buscar} display={{ base: 'none', sm: 'block' }}>
              <InputGroup w="15rem" startElement={<Icon as={MdSearch} color="fg.muted" />}>
                <Input
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  placeholder="Buscar línea o lugar..."
                  size="sm"
                  bg="bg.panel"
                  borderColor="border"
                />
              </InputGroup>
            </Box>

            <ColorModeButton color="fg.muted" _hover={{ bg: 'bg.emphasized', color: 'fg' }} />

            <Button asChild colorPalette="brand" size="sm" fontWeight="bold">
              <RouterLink to="/lineas">Opinar</RouterLink>
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
