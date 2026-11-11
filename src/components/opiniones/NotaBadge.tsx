import { Badge } from '@chakra-ui/react'

type NotaBadgeProps = {
  nota: number | null
  grande?: boolean
}

// La nota va de 1 a 10 (también acepta promedios con decimales).
const NotaBadge = ({ nota, grande = false }: NotaBadgeProps) => {
  if (nota === null) {
    return (
      <Badge bg="bg.muted" color="fg.muted">
        Sin notas
      </Badge>
    )
  }
  const color = nota >= 8 ? 'nota.alta' : nota >= 5 ? 'nota.media' : 'nota.baja'
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
      <span style={{ opacity: 0.6, fontWeight: 500 }}>/10</span>
    </Badge>
  )
}

export default NotaBadge
