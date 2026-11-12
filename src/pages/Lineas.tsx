import {
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import LineaCard from '@/components/lineas/LineaCard'
import { showToast } from '@/components/toast'
import { getMensajeError } from '@/lib/errorHandler'
import type { Linea } from '@/dominio/linea'
import LineaService from '@/services/lineaService'

const Lineas = () => {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') ?? ''
  const camara = params.get('camara') ?? ''
  const [lineas, setLineas] = useState<Linea[]>([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    let vigente = true

    const cargarLineas = async () => {
      setCargando(true)
      try {
        const resultado = q.trim()
          ? await LineaService.buscarLineas(q.trim())
          : await LineaService.getLineas()
        if (vigente) {
          setLineas(resultado)
        }
      } catch (error) {
        if (vigente) {
          showToast(getMensajeError(error), 'error')
          setLineas([])
        }
      } finally {
        if (vigente) {
          setCargando(false)
        }
      }
    }

    const temporizador = window.setTimeout(() => {
      void cargarLineas()
    }, 800)

    return () => {
      vigente = false
      window.clearTimeout(temporizador)
    }
  }, [q])

  const cambiarParam = (clave: string, valor: string) => {
    const siguiente = new URLSearchParams(params)
    if (valor) {
      siguiente.set(clave, valor)
    } else {
      siguiente.delete(clave)
    }
    setParams(siguiente, { replace: true })
  }

  const camaras = useMemo(
    () => [...new Set(lineas.map((l) => l.camara))].sort(),
    [lineas]
  )

  const filtradas = useMemo(
    () => lineas.filter((l) => !camara || l.camara === camara),
    [lineas, camara]
  )

  return (
    <Container maxW="1200px" px={8} py={8}>
      <Stack gap={6}>
        <Heading as="h1" size="2xl">
          Líneas de colectivo
        </Heading>

        <Flex
          gap={4}
          direction={{ base: 'column', md: 'row' }}
          align={{ md: 'center' }}
        >
          <Input
            value={q}
            onChange={(e) => cambiarParam('q', e.target.value)}
            placeholder="Número de línea o lugar (ej: Retiro, 106)"
            maxW="md"
            bg="bg.panel"
            borderColor="border"
          />
          <HStack gap={2} wrap="wrap">
            <Button
              size="xs"
              colorPalette="brand"
              variant={camara ? 'outline' : 'solid'}
              onClick={() => cambiarParam('camara', '')}
            >
              Todas
            </Button>
            {camaras.map((c) => (
              <Button
                key={c}
                size="xs"
                colorPalette="brand"
                variant={camara === c ? 'solid' : 'outline'}
                onClick={() => cambiarParam('camara', c)}
              >
                {c}
              </Button>
            ))}
          </HStack>
        </Flex>

        {cargando && (
          <Flex justify="center" py={16}>
            <Spinner color="brand.solid" />
          </Flex>
        )}
        {!cargando && filtradas.length === 0 && (
          <Text color="fg.muted">No encontramos líneas con esos filtros.</Text>
        )}

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
          {filtradas.map((linea) => (
            <LineaCard key={linea.idLinea} linea={linea} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  )
}

export default Lineas
