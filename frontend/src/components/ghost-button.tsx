import { Button } from "@chakra-ui/react"

function GhostButton({ ...buttonProps }) {
  return (
    <Button
      variant="ghost"
      w="full"
      color="var(--color-texto)"
      justifyContent="flex-start"
      textAlign="left"
      _hover={{
        bg: 'var(--color-principal-hover)',
        color: 'var(--color-texto)',
      }}
      fontSize="md"
      {...buttonProps}
    >
    </Button>
  )
}

export { GhostButton }