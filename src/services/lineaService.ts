import { Linea, Ramal, Recorrido, type Sentido } from '@/dominio/linea'
import { REST_SERVER_URL } from './api'
import type { LineaDto, LineaDetalleDto, RamalDto } from './dto'
import axios from 'axios'
import type { Opinion } from '@/dominio/opinion'

const aLinea = (dto: LineaDto) =>
  new Linea(dto.id, dto.numero, dto.jurisdiccion, dto.camara, [], [], {
    promedio: dto.promedio,
    cantidadOpiniones: dto.cantidadOpiniones,
  })

 const aRamal = (r: RamalDto) =>
  new Ramal(
    r.id!,
    r.letra,
    r.modalidad ?? '',
    r.recorridos.map(
      (c) =>
        new Recorrido(
          c.id!,
          c.sentido.toUpperCase() as Sentido,
          c.origen?.descripcion ?? '',
          c.destino?.descripcion ?? ''
        )
    )
  )

export const LineaService = {
  // GET /lineas
  async getLineas(): Promise<Linea[]> {
    const { data } = await axios.get<LineaDto[]>(`${REST_SERVER_URL}/lineas`)
    return data.map(aLinea)
  },

 async getDetalle(id: number) {
  const { data } = await axios.get<LineaDetalleDto>(`${REST_SERVER_URL}/lineas/${id}`)
  return {
    ramales: data.ramales.map(aRamal),
    opiniones: data.opiniones.map(
      (o): Opinion => ({
        idOpinion: o.id!,
        idLinea: id,
        usuario: o.usuario,
        nota: o.nota,
        comentario: o.comentario,
        fecha: o.fecha,
        })
      ),
    }
  },

   // GET /lineas/buscar?texto=...
  async buscar(texto: string): Promise<number[]> {
    const { data } = await axios.get<{ id: string }[]>(
      `${REST_SERVER_URL}/lineas/buascar`,
      { params: { texto } }
    )
    return data.map((r) => Number(r.id))
  },
}

export default LineaService