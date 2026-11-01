import { Box, Flex, Heading, Separator, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { EstadoEnvio, type Envio } from '@/dominio/envio'
import { EnviosService } from '@/services/envioService'
import { PedidoPendienteService } from '@/services/pedidoPendienteService'
import { useOnInit } from '@/components/hooks'

type PedidoPendiente = Awaited<ReturnType<typeof PedidoPendienteService.getPedidosPendientes>>[number]

function Dashboard() {
  const [envios, setEnvios] = useState<Envio[]>([])
  const [pendientes, setPendientes] = useState<PedidoPendiente[]>([])

  useOnInit(() => {
    Promise.all([EnviosService.getEnvios(), PedidoPendienteService.getPedidosPendientes()])
      .then(([enviosCargados, pendientesCargados]) => {
        setEnvios(enviosCargados)
        setPendientes(pendientesCargados)
      })
  })

  const hoy = new Date()
  hoy.setHours(0, 0, 0, 0)
  const demorados = envios.filter((envio) =>
    envio.estado === EstadoEnvio.demorado ||
    (envio.estado !== EstadoEnvio.entregado && envio.fechaEstimada && envio.fechaEstimada < hoy),
  )
  const proximasEntregas = envios
    .filter((envio) => envio.estado === EstadoEnvio.enCamino && (!envio.fechaEstimada || envio.fechaEstimada >= hoy))
    .sort((a, b) => (a.fechaEstimada?.getTime() ?? 0) - (b.fechaEstimada?.getTime() ?? 0))
    .slice(0, 4)

  const metricas = [
    { etiqueta: 'Pendientes de envío', valor: pendientes.length },
    { etiqueta: 'En camino', valor: envios.filter((envio) => envio.estado === EstadoEnvio.enCamino).length },
    { etiqueta: 'Entregados', valor: envios.filter((envio) => envio.estado === EstadoEnvio.entregado).length },
    { etiqueta: 'Demorados', valor: demorados.length, alerta: true },
  ]

  return (
    <Flex minH="100vh">
      <Box as="main" flex="1" bg="bg.subtle" p={{ base: 4, md: 6 }}>
        <Stack gap={5}>
          <Heading size="3xl">Pendientes</Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, xl: 4 }} gap={3}>
            {metricas.map((metrica) => (
              <Box key={metrica.etiqueta} bg="bg.panel" borderWidth="1px" borderColor="border.subtle" rounded="md" px={4} py={3}>
                <Text fontSize="4xl" fontWeight="bold" color={metrica.alerta ? 'red.500' : 'fg'}>
                  {metrica.valor}
                </Text>
                <Text color="fg.muted">{metrica.etiqueta}</Text>
              </Box>
            ))}
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={3} alignItems="start">
            <Box bg="bg.panel" borderWidth="1px" borderColor="border.subtle" rounded="md">
              <Heading p={4}>Envíos demorados</Heading>
              <Separator />
              <Stack gap={0}>
                {demorados.length ? demorados.map((envio, index) => (
                  <Box key={envio.nSeguimiento ?? `demorado-${index}`} p={4}>
                    {index > 0 && <Separator mb={3} />}
                    <Flex justify="space-between" align="start" gap={4}>
                      <Stack gap={0} minW={0}>
                        <Text fontWeight="bold">AR-{envio.nSeguimiento ?? 'Sin número'}</Text>
                        <Text  color="fg.muted" truncate>
                          {envio.cliente ?? 'Cliente sin nombre'} · {envio.destino ?? 'Destino sin informar'}
                        </Text>
                      </Stack>
                      <Text fontWeight="semibold" color="red.500" whiteSpace="nowrap">
                        {envio.estado === EstadoEnvio.demorado ? 'Demorado' : `${envio.diasDemora} días`}
                      </Text>
                    </Flex>
                  </Box>
                )) : (
                  <Text p={5} color="fg.muted">No hay envíos demorados.</Text>
                )}
              </Stack>
            </Box>

            <Box bg="bg.panel" borderWidth="1px" borderColor="border.subtle" rounded="md">
              <Heading  p={4}>Próximas entregas</Heading>
              <Separator />
              <Stack gap={0}>
                {proximasEntregas.length ? proximasEntregas.map((envio, index) => (
                  <Box key={envio.nSeguimiento ?? `proxima-${index}`} p={4}>
                    {index > 0 && <Separator mb={3} />}
                    <Flex justify="space-between" align="start" gap={4}>
                      <Stack gap={0} minW={0}>
                        <Text fontWeight="bold">AR-{envio.nSeguimiento ?? 'Sin número'}</Text>
                        <Text fontSize="xs" color="fg.muted" truncate>
                          {envio.cliente ?? 'Cliente sin nombre'} · {envio.destino ?? 'Destino sin informar'}
                        </Text>
                      </Stack>
                      <Text color="fg.muted" whiteSpace="nowrap">{(envio.fechaEstimadaString)}</Text>
                    </Flex>
                  </Box>
                )) : (
                  <Text p={5} color="fg.muted">No hay entregas próximas.</Text>
                )}
              </Stack>
            </Box>
          </SimpleGrid>
        </Stack>
      </Box>
    </Flex>
  )
}

export default Dashboard
