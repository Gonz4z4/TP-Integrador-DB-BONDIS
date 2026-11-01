import { Input, InputGroup } from '@chakra-ui/react'

function Searchbar() {
  return (
    <InputGroup maxW="15rem">
      <Input
        placeholder="Buscar por n° o cliente"
        bg="bg.panel"
        variant="outline"
        p={4}
      />
    </InputGroup>
  )
}

export default Searchbar
