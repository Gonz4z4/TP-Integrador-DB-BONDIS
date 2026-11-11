import {
  Box,
  Button,
  Field,
  Heading,
  HStack,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { type FormEvent, useState } from 'react'
import { showToast } from '@/components/toast'
import type { Linea } from '@/dominio/linea'
import { NOTA_MAXIMA, NOTA_MINIMA } from '@/dominio/opinion'
import { getMensajeError } from '@/lib/errorHandler'
import OpinionService from '@/services/opinionService'

type OpinionFormProps = {
  linea: Linea
  onCreada: () => void
}

const NOTAS = Array.from(
  { length: NOTA_MAXIMA - NOTA_MINIMA + 1 },
  (_, i) => NOTA_MINIMA + i
)

// Los campos son las columnas de la tabla opiniones (la opinión es de la línea).
const OpinionForm = ({ linea, onCreada }: OpinionFormProps) => {
  const [usuario, setUsuario] = useState('')
  const [nota, setNota] = useState(0)
  const [comentario, setComentario] = useState('')
  const [enviando, setEnviando] = useState(false)

  const valido = usuario.trim() !== '' && nota > 0 && comentario.trim() !== ''

  const enviar = async (e: FormEvent) => {
    e.preventDefault()
    setEnviando(true)
    try {
      await OpinionService.crearOpinion({
        usuario: usuario.trim(),
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
        <Heading size="md">Dejá tu opinión sobre la {linea.nombre}</Heading>

        <Field.Root required>
          <Field.Label>Tu usuario</Field.Label>
          <Input
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            maxLength={50}
            bg="bg.subtle"
          />
        </Field.Root>

        <Field.Root required>
          <Field.Label>Nota</Field.Label>
          <HStack gap={1} wrap="wrap">
            {NOTAS.map((n) => (
              <Button
                key={n}
                type="button"
                size="xs"
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
