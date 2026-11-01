import { Button, type ButtonProps } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

type LinkButtonProps = ButtonProps & {
  to: string
}

function LinkButton({ to, children, ...buttonProps }: LinkButtonProps) {
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
      _currentPage={{
        bg: 'var(--color-principal-hover)',
        color: 'var(--color-principal)',
      }}
      asChild
      fontSize="md"
      {...buttonProps}
    >
      <NavLink to={to} end={to === '/'}>
        {children}
      </NavLink>
    </Button>
  )
}

export default LinkButton


