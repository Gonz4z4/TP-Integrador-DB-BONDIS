import { Envio, EstadoEnvio } from '@/dominio/envio'
import { TransportistaService } from './transportistaService'
import { PedidoPendienteService } from './pedidoPendienteService'
import type { PedidoPendiente } from '@/dominio/pedidoPendiente'
import type { Transportista } from '@/dominio/transportista'
import { getMensajeError } from '@/lib/errorHandler'
import { showToast } from '@/components/toast'

type EnvioServiceItem = {
  pedidoId: number
  transportistaId: number
  estado: EstadoEnvio
  fechaEstimada: Date
}

const datosEnvios: EnvioServiceItem[] = [
  { pedidoId: 1, 
    transportistaId: 1, 
    estado: EstadoEnvio.entregado, 
    fechaEstimada: new Date('2024-06-19') 
  },
  { pedidoId: 2, 
    transportistaId: 2, 
    estado: EstadoEnvio.enCamino, 
    fechaEstimada: new Date('2026-12-19') 
  },
]

const EnvioService = async (d: EnvioServiceItem) => {
  let pedido: PedidoPendiente | undefined
  let transportista: Transportista | undefined
  try{
    pedido = await PedidoPendienteService.getPedidoPendienteByID(d.pedidoId)
    transportista = await TransportistaService.getTransportistaByID(d.transportistaId)
  }
  catch (error) {
      const errorMessage = getMensajeError(error)
      showToast(errorMessage, 'error')
  }
  return { pedido, 
    transportista,
    estado: d.estado,
    fechaEstimada: d.fechaEstimada 
  }
}

export const EnviosService = {
  async getEnvios(): Promise<Envio[]> {
    const envios = await Promise.all(datosEnvios.map(EnvioService))
    return envios.map((envio) => Object.assign(new Envio(), envio))
  },
}

export default EnviosService