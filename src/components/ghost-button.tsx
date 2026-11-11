import { Button, type ButtonProps } from '@chakra-ui/react'

function GhostButton({ ...buttonProps }: ButtonProps) {
  return (
    <Button
      variant="ghost"
      w="full"
      color="fg"
      justifyContent="flex-start"
      textAlign="left"
      _hover={{ bg: 'bg.emphasized', color: 'fg' }}
      fontSize="md"
      {...buttonProps}
    />
  )
}

export { GhostButton }
