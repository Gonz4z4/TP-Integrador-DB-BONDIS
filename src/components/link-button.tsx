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
      color="fg"
      justifyContent="flex-start"
      textAlign="left"
      _hover={{ bg: 'bg.emphasized', color: 'fg' }}
      _currentPage={{ bg: 'bg.muted', color: 'brand.fg' }}
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
