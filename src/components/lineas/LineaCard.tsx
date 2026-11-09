import { Badge, Box, Flex, HStack, Link, Stack, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import type { Linea } from '@/dominio/linea'
import NotaBadge from '../opiniones/NotaBadge'

const LineaCard = ({ linea }: { linea: Linea }) => {
  const { desde, hasta } = linea.extremos
  const cantidad = linea.cantidadOpiniones
  return (
    <Link asChild _hover={{ textDecoration: 'none' }}>
      <RouterLink to={`/lineas/${linea.numero}`}>
        <Box
          role="group"
          bg="bg.panel"
          borderWidth="1px"
          borderColor="border.subtle"
          borderRadius="lg"
          p={4}
          h="full"
          transition="all 0.15s"
          _hover={{ borderColor: 'border.emphasized', bg: 'bg.muted' }}
        >
          <Flex gap={4} align="center">
            <Flex
              minW="16"
              h="16"
              px={2}
              borderRadius="md"
              bg="brand.solid"
              color="brand.contrast"
              align="center"
              justify="center"
              fontFamily="heading"
              fontWeight="extrabold"
              fontSize={linea.nombre.length > 3 ? 'lg' : '3xl'}
            >
              {linea.nombre}
            </Flex>
            <Stack gap={1} flex="1" minW="0">
              <Text
                fontWeight="semibold"
                lineClamp={1}
                _groupHover={{ color: 'brand.fg' }}
              >
                {desde} → {hasta}
              </Text>
              <HStack gap={2} wrap="wrap">
                <Badge bg="bg.emphasized" color="fg">
                  {linea.camara}
                </Badge>
                <Text fontSize="xs" color="fg.muted">
                  {linea.ramales.length} ramal
                  {linea.ramales.length === 1 ? '' : 'es'}
                </Text>
                {linea.modalidades.includes('EXPRESO') && (
                  <Badge bg="brand.muted" color="brand.fg">
                    Expreso
                  </Badge>
                )}
              </HStack>
            </Stack>
            <Stack gap={1} align="flex-end">
              <NotaBadge nota={linea.promedio} />
              <Text fontSize="2xs" color="fg.muted">
                {cantidad} opinion{cantidad === 1 ? '' : 'es'}
              </Text>
            </Stack>
          </Flex>
        </Box>
      </RouterLink>
    </Link>
  )
}

export default LineaCard
