import { Badge } from '@chakra-ui/react'
import { NOTA_MAXIMA } from '@/dominio/opinion'

type NotaBadgeProps = {
  nota: number | null
  grande?: boolean
}

// La nota va de 1 a 5 (también acepta promedios con decimales).
const NotaBadge = ({ nota, grande = false }: NotaBadgeProps) => {
  if (nota === null) {
    return (
      <Badge bg="bg.muted" color="fg.muted">
        Sin notas
      </Badge>
    )
  }
  const color =
    nota >= NOTA_MAXIMA * 0.8
      ? 'nota.alta'
      : nota >= NOTA_MAXIMA * 0.5
        ? 'nota.media'
        : 'nota.baja'
  return (
    <Badge
      bg="bg.muted"
      color={color}
      borderWidth="1px"
      borderColor={color}
      borderRadius="md"
      px={2}
      fontSize={grande ? 'xl' : 'sm'}
      fontWeight="bold"
    >
      {Number.isInteger(nota) ? nota : nota.toFixed(1)}
      <span style={{ opacity: 0.6, fontWeight: 500 }}>/{NOTA_MAXIMA}</span>
    </Badge>
  )
}

export default NotaBadge
