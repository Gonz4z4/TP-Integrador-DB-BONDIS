import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react'
import type { IconType } from 'react-icons'
import {
  MdChevronRight,
  MdForum,
  MdLeaderboard,
  MdTrendingUp,
} from 'react-icons/md'
import { Link as RouterLink } from 'react-router-dom'
import LineaCard from '@/components/lineas/LineaCard'
import NotaBadge from '@/components/opiniones/NotaBadge'
import OpinionCard from '@/components/opiniones/OpinionCard'
import { useCatalogo } from '@/hooks/useCatalogo'

type SeccionProps = {
  icono: IconType
  titulo: string
  to?: string
  cta?: string
}

const Seccion = ({ icono, titulo, to, cta }: SeccionProps) => (
  <Flex
    align="center"
    justify="space-between"
    pb={2}
    borderBottomWidth="1px"
    borderColor="border"
  >
    <HStack gap={3}>
      <Icon as={icono} boxSize="22px" color="brand.fg" />
      <Heading size="lg">{titulo}</Heading>
    </HStack>
    {to && (
      <Link
        asChild
        fontSize="xs"
        color="fg.muted"
        _hover={{ color: 'brand.fg', textDecoration: 'none' }}
      >
        <RouterLink to={to}>
          {cta} <Icon as={MdChevronRight} />
        </RouterLink>
      </Link>
    )}
  </Flex>
)

const Home = () => {
  const { lineas, opiniones, cargando } = useCatalogo()

  const populares = [...lineas]
    .sort((a, b) => b.cantidadOpiniones - a.cantidadOpiniones)
    .slice(0, 6)
  const ranking = lineas
    .filter((l) => l.promedio !== null)
    .sort((a, b) => (b.promedio ?? 0) - (a.promedio ?? 0))
    .slice(0, 5)
  const recientes = [...opiniones]
    .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
    .slice(0, 5)

  return (
    <>
      <Box
        borderBottomWidth="1px"
        borderColor="border"
        bgGradient="to-b"
        gradientFrom="bg.muted"
        gradientTo="bg"
      >
        <Container maxW="1200px" px={8} py={16}>
          <Stack gap={4} maxW="2xl">
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '5xl' }}
              letterSpacing="-0.03em"
            >
              Contá cómo te fue en el bondi.
            </Heading>
            <Text color="fg.muted" fontSize="lg">
              Buscá tu línea, mirá qué opinan los demás pasajeros y dejá tu nota
              para que el próximo viaje sea mejor.
            </Text>
            <Box>
              <Button asChild colorPalette="brand" fontWeight="bold">
                <RouterLink to="/lineas">Ver todas las líneas</RouterLink>
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container maxW="1200px" px={8} pt={8}>
        {cargando ? (
          <Flex justify="center" py={16}>
            <Spinner color="brand.solid" />
          </Flex>
        ) : (
          <Grid
            templateColumns={{ base: '1fr', lg: 'repeat(12, 1fr)' }}
            gap={8}
          >
            <GridItem colSpan={{ base: 1, lg: 8 }}>
              <Stack gap={10}>
                <Stack as="section" gap={4}>
                  <Seccion
                    icono={MdTrendingUp}
                    titulo="Líneas más comentadas"
                    to="/lineas"
                    cta="Ver todas"
                  />
                  <SimpleGrid columns={{ base: 1, sm: 2 }} gap={3}>
                    {populares.map((linea) => (
                      <LineaCard key={linea.idLinea} linea={linea} />
                    ))}
                  </SimpleGrid>
                </Stack>

                <Stack as="section" gap={4}>
                  <Seccion icono={MdForum} titulo="Últimas opiniones" />
                  {recientes.map((opinion) => (
                    <OpinionCard
                      key={opinion.idOpinion}
                      opinion={opinion}
                      linea={lineas.find((l) => l.idLinea === opinion.idLinea)}
                    />
                  ))}
                </Stack>
              </Stack>
            </GridItem>

            <GridItem colSpan={{ base: 1, lg: 4 }}>
              <Box
                bg="bg.panel"
                borderWidth="1px"
                borderColor="border.subtle"
                borderRadius="lg"
                p={5}
              >
                <Stack gap={4}>
                  <Seccion icono={MdLeaderboard} titulo="Mejor puntuadas" />
                  {ranking.map((linea, i) => (
                    <Flex
                      key={linea.idLinea}
                      align="center"
                      justify="space-between"
                    >
                      <HStack gap={3}>
                        <Text color="fg.muted" w="4">
                          {i + 1}
                        </Text>
                        <Link
                          asChild
                          fontWeight="bold"
                          _hover={{ color: 'brand.fg', textDecoration: 'none' }}
                        >
                          <RouterLink to={`/lineas/${linea.numero}`}>
                            Línea {linea.nombre}
                          </RouterLink>
                        </Link>
                      </HStack>
                      <NotaBadge nota={linea.promedio} />
                    </Flex>
                  ))}
                </Stack>
              </Box>
            </GridItem>
          </Grid>
        )}
      </Container>
    </>
  )
}

export default Home
