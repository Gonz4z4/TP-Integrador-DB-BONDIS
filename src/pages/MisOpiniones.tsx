import {
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import NotaBadge from '@/components/opiniones/NotaBadge'
import OpinionCard from '@/components/opiniones/OpinionCard'
import { useSesion } from '@/context/sesion'
import { useCatalogo } from '@/hooks/useCatalogo'
import { showToast } from '@/components/toast'
import { getMensajeError } from '@/lib/errorHandler'
import OpinionService from '@/services/opinionService'

const mismoUsuario = (a: string, b: string) =>
  a.trim().toLowerCase() === b.trim().toLowerCase()

const MisOpiniones = () => {
  const { usuario } = useSesion()
  const { lineas, opiniones, cargando, recargar } = useCatalogo()

  const eliminar = async (idOpinion: number) => {
    try {
        await OpinionService.eliminarOpinion(idOpinion)
        showToast('Opinión eliminada', 'success')
        await recargar()
    } catch (error) {
        showToast(getMensajeError(error), 'error')
    }
  }

  const mias = opiniones
    .filter((o) => usuario !== null && mismoUsuario(o.usuario, usuario))
    .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())

  const promedio = mias.length
    ? mias.reduce((total, o) => total + o.nota, 0) / mias.length
    : null

  return (
    <Container maxW="1200px" px={8} py={8}>
      <Stack gap={6} maxW="3xl">
        <Stack gap={2}>
          <Heading as="h1" size="2xl">
            Mis opiniones
          </Heading>
          <HStack gap={3} wrap="wrap">
            <Text color="fg.muted">
              Opiniones publicadas como <b>{usuario}</b>
            </Text>
            {promedio !== null && (
              <HStack gap={2}>
                <Text color="fg.muted" fontSize="sm">
                  Nota promedio que das:
                </Text>
                <NotaBadge nota={promedio} />
              </HStack>
            )}
          </HStack>
        </Stack>

        {cargando && (
          <Flex justify="center" py={16}>
            <Spinner color="brand.solid" />
          </Flex>
        )}

        {!cargando && mias.length === 0 && (
          <Stack gap={4} align="flex-start">
            <Text color="fg.muted">
              Todavía no opinaste sobre ninguna línea. Elegí la que tomás y
              contá cómo te fue.
            </Text>
            <Button asChild colorPalette="brand" fontWeight="bold">
              <RouterLink to="/lineas">Buscar mi línea</RouterLink>
            </Button>
          </Stack>
        )}

        {mias.map((opinion) => (
          <OpinionCard
            key={opinion.idOpinion}
            opinion={opinion}
            linea={lineas.find((l) => l.idLinea === opinion.idLinea)}
            onEliminar={() => eliminar(opinion.idOpinion)}
          />
        ))}
      </Stack>
    </Container>
  )
}

export default MisOpiniones