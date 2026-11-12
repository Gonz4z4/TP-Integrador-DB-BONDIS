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
import { useSearchParams } from 'react-router-dom'
import LineaCard from '@/components/lineas/LineaCard'
import { useCatalogo } from '@/hooks/useCatalogo'
import { useEffect, useMemo, useState } from 'react'
import LineaService from '@/services/lineaService'

const Lineas = () => {
  const { lineas, cargando } = useCatalogo()
  const [params, setParams] = useSearchParams()
  const q = params.get('q') ?? ''
  const camara = params.get('camara') ?? ''
  const [idsBackend, setIdsBackend] = useState<Set<number>>(new Set())

  useEffect(() => {
    const texto = q.trim()
    if (!texto) {
      setIdsBackend(new Set())
      return
    }
    let vigente = true
    const timer = setTimeout(async () => {
      try {
        const ids = await LineaService.buscar(texto)
        if (vigente) {setIdsBackend(new Set(ids))}
      } catch (e) {
        console.error('Error en la búsqueda', e)
        if (vigente) { setIdsBackend(new Set()) }
      }
    }, 300)
    return () => {
      vigente = false
      clearTimeout(timer)
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
    () =>
      lineas.filter(
        (l) =>
          (!camara || l.camara === camara) &&
          (l.coincideCon(q) || idsBackend.has(l.idLinea))
      ),
    [lineas, q, camara, idsBackend]
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
            placeholder="Busca la línea o una palabra clave..."
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
