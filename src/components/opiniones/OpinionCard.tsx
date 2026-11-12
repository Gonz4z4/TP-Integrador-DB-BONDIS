import { Box, Button, Flex, HStack, Link, Stack, Text, Icon } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import type { Linea } from '@/dominio/linea'
import type { Opinion } from '@/dominio/opinion'
import { fechaCorta } from '@/lib/fechas'
import NotaBadge from './NotaBadge'
import { MdDeleteOutline } from 'react-icons/md'
import { useState } from 'react'

type OpinionCardProps = {
  opinion: Opinion
  /** Si se pasa, muestra a qué línea corresponde la opinión (útil en el Home). */
  linea?: Linea
  onEliminar?: () => Promise<void>
}

const OpinionCard = ({ opinion, linea, onEliminar }: OpinionCardProps) => {

  const [confirmando, setConfirmando] = useState(false)
  const [eliminando, setEliminando] = useState(false)

  const eliminar = async () => {
    if (!onEliminar) {
      return
    }
    setEliminando(true)
    try {
      await onEliminar()
    } finally {
      setEliminando(false)
      setConfirmando(false)
    }
  }

  return (
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
      {onEliminar &&(
        <HStack justify="flex-end" gap={2}>
          {confirmando ? (
            <>
              <Text fontSize="sm" color="fg.muted">
                ¿Querés eliminar tu opinión?
              </Text>
              <Button size="xs" variant="outline" onClick={() => setConfirmando(false)} disabled={eliminando}>
                Cancelar
              </Button>
              <Button size="xs" bg="peligro.solid" color="white" onClick={eliminar} loading={eliminando}>
                Sí, eliminar
              </Button>
            </>
          ) : (
            <Button size="xs" variant="ghost" color="peligro.fg" onClick={() => setConfirmando(true)}>
              <Icon as={MdDeleteOutline}/> Eliminar
            </Button> 
          )}
        </HStack>
      )}
    </Stack>
  </Box>
  )
}

export default OpinionCard
