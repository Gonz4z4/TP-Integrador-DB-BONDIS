import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import type { Ramal, Recorrido } from '@/dominio/linea'

const Sentido = ({
  etiqueta,
  recorrido,
}: {
  etiqueta: string
  recorrido?: Recorrido
}) =>
  recorrido ? (
    <Box flex="1" minW="0">
      <Text fontSize="xs" color="fg.muted" textTransform="capitalize">
        {etiqueta}
      </Text>
      <Text>
        {recorrido.origenCorto} → {recorrido.destinoCorto}
      </Text>
    </Box>
  ) : null

const RamalesList = ({ ramales }: { ramales: Ramal[] }) => (
  <Stack gap={3}>
    <Heading size="lg">Ramales</Heading>
    {ramales.map((ramal) => (
      <Flex
        key={ramal.idRamal}
        gap={4}
        bg="bg.panel"
        borderWidth="1px"
        borderColor="border.subtle"
        borderRadius="lg"
        p={4}
        direction={{ base: 'column', md: 'row' }}
      >
        <Flex
          boxSize="9"
          borderRadius="md"
          bg="bg.emphasized"
          color="brand.fg"
          align="center"
          justify="center"
          fontWeight="bold"
          flexShrink={0}
        >
          {ramal.letra}
        </Flex>
        <Sentido etiqueta="ida" recorrido={ramal.ida} />
        <Sentido etiqueta="vuelta" recorrido={ramal.vuelta} />
      </Flex>
    ))}
  </Stack>
)

export default RamalesList
