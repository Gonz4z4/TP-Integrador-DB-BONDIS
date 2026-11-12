import {
  Flex,
  Box,
  Button,
  Field,
  Heading,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import { type FormEvent, useState } from 'react'
import { MdDirectionsBus } from 'react-icons/md'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { ColorModeButton } from '@/components/ui/color-mode'
import { USUARIO_MAX, useSesion } from '@/context/sesion'

const Ingresar = () => {
  const { usuario, ingresar } = useSesion()
  const [nombre, setNombre] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const destino = (location.state as { desde?: string } | null)?.desde ?? '/'

  if (usuario) {
    return <Navigate to={destino} replace />
  }

  const enviar = (e: FormEvent) => {
    e.preventDefault()
    if (!nombre.trim()) {
      return
    }
    ingresar(nombre)
    navigate(destino, { replace: true })
  }

  return (
    <Flex position="relative" minH="100vh" align="center"
      justify="center" bg="bg.subtle" px={4} >
        
        <Box position="absolute" top={4} right={4}>
          <ColorModeButton color="fg.muted" />
        </Box>
      
        <Box
          as="form"
          onSubmit={enviar}
          w="full"
          maxW="md"
          bg="bg.panel"
          borderWidth="1px"
          borderColor="brand.solid"
          borderRadius="lg"
          p={{ base: 6, md: 8 }}
        >
          <Stack gap={7}>
            <HStack gap={2}>
              <Icon as={MdDirectionsBus} boxSize="30px" color="brand.solid" />
              <Text
                fontFamily="heading"
                fontSize="2xl"
                fontWeight="bold"
                letterSpacing="-0.02em"
              >
                BONDIAR
              </Text>
            </HStack>

            
              <Heading
                as="h1"
                fontSize={{ base: '2xl', md: '3xl' }}
                letterSpacing="-0.03em"
              >
                ¿Quién viaja hoy?
              </Heading>
              

            <Field.Root required>
              <Field.Label>Tu usuario</Field.Label>
              <Input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                maxLength={USUARIO_MAX}
                autoFocus
                autoComplete="username"
                bg="bg.subtle"
              />
            </Field.Root>

            <Button
              type="submit"
              colorPalette="brand"
              fontWeight="bold"
              disabled={!nombre.trim()}
            >
              Entrar
            </Button>
          </Stack>
        </Box>
    </Flex>
  )
}

export default Ingresar