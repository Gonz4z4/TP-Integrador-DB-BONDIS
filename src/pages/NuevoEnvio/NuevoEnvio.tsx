import { Button, Box, Heading, Field, Input, Card, Stack, DatePicker, Portal, HStack} from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"
import { RiArrowLeftLine } from "react-icons/ri"
import { Link } from "react-router-dom"

function NuevoEnvio() {
  return (

    <Box backgroundColor="gray.100" p={4} borderRadius="md" h='full' w='100vw'>
        <Link to='/pendientes'>
            <Button
                variant={"plain"}
                colorPalette='gray.500'
                backgroundColor='transparent'
                borderColor='transparent'
                size='md'
                justifyContent='flex-start'
            > <RiArrowLeftLine /> Volver a pendientes</Button>
        </Link>

        <Heading size='3xl'>Nuevo Envío</Heading>
        
        <Card.Root maxW='40rem' my={5}>
        <Card.Body>
        <Stack gap="4" w="35rem">
            
            <Field.Root required>
            <Field.Label>
                N° de seguimiento
            </Field.Label>
            <Input placeholder="AR-100262" variant="outline" p={5}/>
            </Field.Root>

            <Field.Root required>
            <Field.Label>
                Cliente
            </Field.Label>
            <Input placeholder="Julieta Gomez" variant="outline" p={5}/>
            </Field.Root>

            <Field.Root required>
            <Field.Label>
                Direccion 
            </Field.Label>
            <Input placeholder="Canelones, Uruguay" variant="outline" p={5}/>
            </Field.Root>

            <Field.Root required>
            <Field.Label>
                Producto 
            </Field.Label>
            <Input placeholder="Silla gamer" variant="outline" p={5}/>
            </Field.Root>

            <Field.Root required>
            <Field.Label>
                Transportista 
            </Field.Label>
            <Input placeholder="Andreani" variant="outline" p={5}/>
            </Field.Root>

            <Field.Root required>
            <Field.Label>
                Estado 
            </Field.Label>
            <Input placeholder="Preparando" variant="outline" p={5}/>
            </Field.Root>

            <DatePicker.Root maxWidth="20rem">
            <DatePicker.Label>Fecha estimada de la entrega</DatePicker.Label>
            <DatePicker.Control>
                <DatePicker.Input p={5}/>
                <DatePicker.IndicatorGroup>
                <DatePicker.Trigger bg='zinc'>
                    <LuCalendar  />
                </DatePicker.Trigger>
                </DatePicker.IndicatorGroup>
            </DatePicker.Control>
            
            <Portal>
                <DatePicker.Positioner>
                <DatePicker.Content>
                    <DatePicker.View view="day">
                    <DatePicker.ViewControl>
                        <DatePicker.PrevTrigger />
                        <HStack>
                        <DatePicker.MonthSelect />
                        <DatePicker.YearSelect />
                        </HStack>
                        <DatePicker.NextTrigger />
                    </DatePicker.ViewControl>
                    <DatePicker.DayTable />
                    </DatePicker.View>
                </DatePicker.Content>
                </DatePicker.Positioner>
            </Portal>
            
            </DatePicker.Root>

            </Stack>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
            <Button variant="outline" bg='white' borderColor='gray.200'>Cancelar</Button>
            <Button variant="solid" bg='purple'>Guardar</Button>
            </Card.Footer>
        </Card.Root>
    </Box>
  )
}

export default NuevoEnvio