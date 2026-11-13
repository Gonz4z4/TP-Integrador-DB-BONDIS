import {
  Box, Button, Flex, HStack, Icon, Link, Stack, Text, Textarea,
} from '@chakra-ui/react'
import { useState } from 'react'
import { MdDeleteOutline, MdEdit } from 'react-icons/md'
import { Link as RouterLink } from 'react-router-dom'
import { showToast } from '@/components/toast'
import type { Linea } from '@/dominio/linea'
import { NOTAS, type Opinion } from '@/dominio/opinion'
import { getMensajeError } from '@/lib/errorHandler'
import { fechaCorta } from '@/lib/fechas'
import NotaBadge from './NotaBadge'

type OpinionCardProps = {
  opinion: Opinion
  linea?: Linea
  onEliminar?: () => Promise<void>
  onEditar?: (nota: number, comentario: string) => Promise<void>
}

const OpinionCard = ({ opinion, linea, onEliminar, onEditar }: OpinionCardProps) => {
  const [confirmando, setConfirmando] = useState(false)
  const [eliminando, setEliminando] = useState(false)
  const [editando, setEditando] = useState(false)
  const [guardando, setGuardando] = useState(false)
  const [nota, setNota] = useState(opinion.nota)
  const [comentario, setComentario] = useState(opinion.comentario)

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

    const empezarEdicion = () => {
    setNota(opinion.nota)
    setComentario(opinion.comentario)
    setConfirmando(false)
    setEditando(true)
  }

    const guardar = async () => {
    if (!onEditar){return}
    setGuardando(true)
    try {
      await onEditar(nota, comentario.trim())
      setEditando(false)
    } catch (error) {
      showToast(getMensajeError(error), 'error')
    } finally {
      setGuardando(false)
    }
  }

  const valido = nota > 0 && comentario.trim() !== ''
  const sinCambios =
    nota === opinion.nota && comentario.trim() === opinion.comentario

  return (
  <Box
    bg="bg.panel"
    borderWidth="1px"
    borderColor="border.subtle"
    borderRadius="lg"
    p={5} _hover={{ borderColor: 'border.emphasized' }}>
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
        {!editando && <NotaBadge nota={opinion.nota} />}
      </Flex>

        {editando ? (
          <Stack gap={3}>
            <HStack gap={2}>
              {NOTAS.map((n) => (
                <Button
                  key={n}
                  type="button"
                  size="sm"
                  colorPalette="brand"
                  variant={nota === n ? 'solid' : 'outline'}
                  onClick={() => setNota(n)}
                >
                  {n}
                </Button>
              ))}
            </HStack>
            <Textarea
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              rows={4}
              bg="bg.subtle"
            />
            <HStack justify="flex-end" gap={2}>
              <Button
                size="xs"
                variant="outline"
                onClick={() => setEditando(false)}
                disabled={guardando}
              >
                Cancelar
              </Button>
              <Button
                size="xs"
                colorPalette="brand"
                onClick={guardar}
                loading={guardando}
                disabled={!valido || sinCambios}
              >
                Guardar
              </Button>
            </HStack>
          </Stack>
        ) : (
          <Text lineHeight="tall">{opinion.comentario}</Text>
        )}

        {(onEditar || onEliminar) && !editando && (
          <HStack justify="flex-end" gap={2}>
            {confirmando ? (
              <>
                <Text fontSize="sm" color="fg.muted">
                  ¿Querés eliminar tu opinión?
                </Text>
                <Button
                  size="xs"
                  variant="outline"
                  onClick={() => setConfirmando(false)}
                  disabled={eliminando}
                >
                  Cancelar
                </Button>
                <Button
                  size="xs"
                  bg="peligro.solid"
                  color="white"
                  onClick={eliminar}
                  loading={eliminando}
                >
                  Sí, eliminar
                </Button>
              </>
            ) : (
              <>
                {onEditar && (
                  <Button
                    size="xs"
                    variant="ghost"
                    color="fg.muted"
                    onClick={empezarEdicion}
                  >
                    <Icon as={MdEdit} /> Editar
                  </Button>
                )}
                {onEliminar && (
                  <Button
                    size="xs"
                    variant="ghost"
                    color="peligro.fg"
                    onClick={() => setConfirmando(true)}
                  >
                    <Icon as={MdDeleteOutline} /> Eliminar
                  </Button>
                )}
              </>
            )}
          </HStack>
        )}
      </Stack>
    </Box>
  )
}

export default OpinionCard
