import {
  Badge, Box, Container, Flex, Grid, GridItem, Heading, HStack, Spinner, Stack, Text} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import RamalesList from '@/components/lineas/RamalesList'
import NotaBadge from '@/components/opiniones/NotaBadge'
import OpinionCard from '@/components/opiniones/OpinionCard'
import OpinionForm from '@/components/opiniones/OpinionForm'
import { useCatalogo } from '@/hooks/useCatalogo'
import ErrorPage from './ErrorPage'
import { showToast } from '@/components/toast'
import { useSesion } from '@/context/sesion'
import { getMensajeError } from '@/lib/errorHandler'
import OpinionService from '@/services/opinionService'
import type { Opinion } from '@/dominio/opinion'
import { useEffect, useState } from 'react'
import type { Ramal } from '@/dominio/linea'
import LineaService from '@/services/lineaService'

const LineaDetalle = () => {
  const { numero } = useParams()
  const { lineas, cargando, recargar } = useCatalogo()
  const { usuario } = useSesion()

  const linea = lineas.find((l) => l.numero === numero)
  const idLinea = linea?.idLinea

  const [ramalesDetalle, setRamalesDetalle] = useState<Ramal[] | null>(null)

  useEffect(() => {
  if (idLinea === undefined) {
    return
  }
  let vigente = true
  LineaService.getDetalle(idLinea)
    .then((detalle) => {
      if (vigente) {
        setRamalesDetalle(detalle.ramales)
      }
    })
    .catch((error) => showToast(getMensajeError(error), 'error'))
  return () => {
    vigente = false
  }
}, [idLinea])

  const eliminar = async (idOpinion: number) => {
    try {
      await OpinionService.eliminarOpinion(idOpinion)
      showToast('Opinión eliminada', 'success')
      await recargar()
    } catch (error) {
      showToast(getMensajeError(error), 'error')
    }
  }

  const editar = async (opinion: Opinion, nota: number, comentario: string) => {
  await OpinionService.editarOpinion(opinion.idOpinion, {
    usuario: opinion.usuario,
    nota,
    comentario,
  })
  showToast('Opinión actualizada', 'success')
  await recargar()
}

  if (cargando) {
    return (
      <Flex justify="center" py={24}>
        <Spinner color="brand.solid" />
      </Flex>
    )
  }

  if (!linea) { return <ErrorPage /> }

  const ramales = ramalesDetalle ?? linea.ramales
  const modalidades = [...new Set(ramales.map((r) => r.modalidad))]
  const opiniones = [...linea.opiniones].sort(
    (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  )
  const cantidad = linea.cantidadOpiniones

  const primerRecorrido = ramales[0]?.ida ?? ramales[0]?.vuelta
  const desde = primerRecorrido?.origenCorto ?? ''
  const hasta = primerRecorrido?.destinoCorto ?? ''

  return (
    <>
      <Box bg="bg.subtle" borderBottomWidth="1px" borderColor="border">
        <Container maxW="1200px" px={8} py={10}>
          <Flex
            gap={6}
            align="center"
            direction={{ base: 'column', md: 'row' }}
          >
            <Flex
              boxSize="28"
              borderRadius="lg"
              bg="brand.solid"
              color="brand.contrast"
              align="center"
              justify="center"
              fontFamily="heading"
              fontWeight="extrabold"
              fontSize={linea.nombre.length > 3 ? '3xl' : '6xl'}
              flexShrink={0}
            >
              {linea.nombre}
            </Flex>
            <Stack gap={3} flex="1">
              <HStack gap={2} wrap="wrap">
                <Badge bg="bg.emphasized" color="fg">
                  {linea.camara}
                </Badge>
                <Badge bg="bg.muted" color="fg.muted">
                  {linea.jurisdiccion}
                </Badge>
                {modalidades.map((m) => (
                  <Badge key={m} bg="bg.muted" color="fg.muted">
                    {m}
                  </Badge>
                ))}
              </HStack>
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '5xl' }}
                letterSpacing="-0.03em"
              >
                Línea {linea.nombre}
              </Heading>
              {(desde || hasta) && (
                <Text color="fg.muted" fontSize="lg">
                  {desde} → {hasta}
                </Text>
              )}
              <HStack gap={3}>
                <NotaBadge nota={linea.promedio} grande />
                <Text color="fg.muted" fontSize="sm">
                  {cantidad} opinion{cantidad === 1 ? '' : 'es'}
                </Text>
              </HStack>
            </Stack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="1200px" px={8} pt={8}>
        <Grid templateColumns={{ base: '1fr', lg: 'repeat(12, 1fr)' }} gap={8}>
          <GridItem colSpan={{ base: 1, lg: 7 }}>
            <Stack gap={10}>
              {ramales.length > 0 && (
                <RamalesList ramales={ramales} />
              )}
              <Stack gap={4}>
                <Heading size="lg">Opiniones</Heading>
                {opiniones.length === 0 && (
                  <Text color="fg.muted">
                    Todavía nadie opinó sobre esta línea. ¡Sé el primero!
                  </Text>
                )}
                {opiniones.map((opinion) => (
                  <OpinionCard key={opinion.idOpinion} opinion={opinion} 
                  onEliminar={ opinion.usuario === usuario ?
                    () => eliminar(opinion.idOpinion) : undefined}
                  onEditar={opinion.usuario === usuario ? (n, c) => editar(opinion, n, c) : undefined}
                  />
                ))}
              </Stack>
            </Stack>
          </GridItem>

          <GridItem colSpan={{ base: 1, lg: 5 }}>
            <OpinionForm linea={linea} onCreada={recargar} />
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}

export default LineaDetalle
