import {
  Box,
  Button,
  Field,
  Heading,
  HStack,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { type FormEvent, useState } from 'react'
import { showToast } from '@/components/toast'
import { useSesion } from '@/context/sesion'
import type { Linea } from '@/dominio/linea'
import { getMensajeError } from '@/lib/errorHandler'
import OpinionService from '@/services/opinionService'
import {NOTAS} from '@/dominio/opinion'

type OpinionFormProps = {
  linea: Linea
  onCreada: () => void
}



// El usuario sale de la sesión: ya no se escribe en cada opinión.
const OpinionForm = ({ linea, onCreada }: OpinionFormProps) => {
  const { usuario } = useSesion()
  const [nota, setNota] = useState(0)
  const [comentario, setComentario] = useState('')
  const [enviando, setEnviando] = useState(false)

  const valido = !!usuario && nota > 0 && comentario.trim() !== ''

  const enviar = async (e: FormEvent) => {
    e.preventDefault()
    if (!usuario) {
      return
    }
    setEnviando(true)
    try {
      await OpinionService.crearOpinion({
        usuario,
        idLinea: linea.idLinea,
        nota,
        comentario: comentario.trim(),
      })
      showToast('¡Gracias por tu opinión!', 'success')
      setNota(0)
      setComentario('')
      onCreada()
    } catch (error) {
      showToast(getMensajeError(error), 'error')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <Box
      as="form"
      onSubmit={enviar}
      bg="bg.panel"
      borderWidth="1px"
      borderColor="brand.solid"
      borderRadius="lg"
      p={5}
    >
      <Stack gap={4}>
        <Stack gap={1}>
          <Heading size="md">Dejá tu opinión sobre la {linea.nombre}</Heading>
          <Text fontSize="sm" color="fg.muted">
            Vas a publicarla como <b>{usuario}</b>.
          </Text>
        </Stack>

        <Field.Root required>
          <Field.Label>Nota</Field.Label>
          <HStack w="full" justify="space-between" wrap="wrap">
            {NOTAS.map((n) => (
              <Button
                key={n}
                type="button"
                size="xl"
                minW="8"
                colorPalette="brand"
                variant={nota === n ? 'solid' : 'outline'}
                onClick={() => setNota(n)}
              >
                {n}
              </Button>
            ))}
          </HStack>
        </Field.Root>

        <Field.Root required>
          <Field.Label>Opinión</Field.Label>
          <Textarea
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            rows={4}
            bg="bg.subtle"
          />
        </Field.Root>

        <Button
          type="submit"
          colorPalette="brand"
          fontWeight="bold"
          alignSelf="flex-start"
          disabled={!valido}
          loading={enviando}
        >
          Publicar opinión
        </Button>
      </Stack>
    </Box>
  )
}

export default OpinionForm