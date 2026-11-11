import { Box, Flex, HStack, Link, Stack, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import type { Linea } from '@/dominio/linea'
import type { Opinion } from '@/dominio/opinion'
import { fechaCorta } from '@/lib/fechas'
import NotaBadge from './NotaBadge'

type OpinionCardProps = {
  opinion: Opinion
  /** Si se pasa, muestra a qué línea corresponde la opinión (útil en el Home). */
  linea?: Linea
}

const OpinionCard = ({ opinion, linea }: OpinionCardProps) => (
  <Box
    bg="bg.panel"
    borderWidth="1px"
    borderColor="border.subtle"
    borderRadius="lg"
    p={5}
    _hover={{ borderColor: 'border.emphasized' }}
  >
    <Stack gap={3}>
      <Flex justify="space-between" align="flex-start" gap={4}>
        <HStack gap={3}>
          <Flex
            boxSize="10"
            borderRadius="full"
            bg="bg.emphasized"
            align="center"
            justify="center"
            fontWeight="bold"
          >
            {opinion.usuario.charAt(0).toUpperCase()}
          </Flex>
          <Box>
            <HStack gap={2} wrap="wrap">
              <Text fontWeight="bold">{opinion.usuario}</Text>
              {linea && (
                <>
                  <Text fontSize="sm" color="fg.muted">
                    opinó sobre
                  </Text>
                  <Link
                    asChild
                    color="brand.fg"
                    fontWeight="bold"
                    fontSize="sm"
                  >
                    <RouterLink to={`/lineas/${linea.numero}`}>
                      Línea {linea.nombre}
                    </RouterLink>
                  </Link>
                </>
              )}
            </HStack>
            <Text fontSize="xs" color="fg.muted">
              {fechaCorta(opinion.fecha)}
            </Text>
          </Box>
        </HStack>
        <NotaBadge nota={opinion.nota} />
      </Flex>
      <Text lineHeight="tall">{opinion.comentario}</Text>
    </Stack>
  </Box>
)

export default OpinionCard
