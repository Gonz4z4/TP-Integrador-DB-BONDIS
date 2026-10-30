import { EstadoTransportista, Transportista } from "@/dominio/transportista"

export const transportistas: Transportista[] = [
  new Transportista(
    1,
    'Pedidos Ya',
    '5555-1234',
    'Nacional',
    EstadoTransportista.activo
  ),
  new Transportista(
    2,
    'OCA',
    '5555-5678',
    'Regional',
    EstadoTransportista.inactivo
  ),
  new Transportista(
    3,
    'Nose',
    '5555-5678',
    'Regional',
    EstadoTransportista.inactivo
  ),
]

export const TransportistaService = {

  async getTransportistas(): Promise<Transportista[]> {
    return transportistas
  },
  async getTransportistaByID(id: number): Promise<Transportista | undefined> {
    return transportistas.find(transportista => transportista.id === id)
  },
  
  editar() {

  },

  eliminar() {
    
  }
}

export default TransportistaService