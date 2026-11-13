import axios from 'axios'
import { Linea, Ramal, Recorrido } from '@/dominio/linea'
import type { Opinion } from '@/dominio/opinion'
import type { LineaDetalleDto, LineaDto, OpinionDto, RamalDto, RecorridoDto } from './dto'
import { REST_SERVER_URL } from './api'

const fallbackLineas: LineaDto[] = [
  {
    id: 1,
    numero: '004',
    jurisdiccion: 'CABA',
    camara: 'ACTA',
    promedio: 5,
    cantidadOpiniones: 1,
    ramales: [
      {
        id: 1,
        letra: 'A',
        modalidad: 'COMUN',
        recorridos: [
          {
            id: 1,
            sentido: 'IDA',
            origen: { id: 35, descripcion: 'ESTACION TERMINAL DE OMNIBUS RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)' },
            destino: { id: 2, descripcion: 'PLAZA ROMA (CIUDAD AUTONOMA DE BUENOS AIRES)' },
          },
          {
            id: 2,
            sentido: 'VUELTA',
            origen: { id: 2, descripcion: 'PLAZA ROMA (CIUDAD AUTONOMA DE BUENOS AIRES)' },
            destino: { id: 35, descripcion: 'ESTACION TERMINAL DE OMNIBUS RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)' },
          },
        ],
      },
    ],
    opiniones: [
      {
        id: 3,
        idLinea: 1,
        usuario: 'July',
        nota: 5,
        comentario: 'Un viaje hasta pilar por favor',
        fecha: '2021-06-30T00:00:00.000Z',
      },
    ],
  },
  {
    id: 19,
    numero: '106',
    jurisdiccion: 'CABA',
    camara: 'CETUBA',
    promedio: null,
    cantidadOpiniones: 0,
    ramales: [
      {
        id: 40,
        letra: 'A',
        modalidad: 'COMUN',
        recorridos: [
          {
            id: 41,
            sentido: 'IDA',
            origen: { id: 4, descripcion: 'RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)' },
            destino: { id: 15, descripcion: 'CIUDAD UNIVERSITARIA (CIUDAD AUTONOMA DE BUENOS AIRES)' },
          },
          {
            id: 42,
            sentido: 'VUELTA',
            origen: { id: 15, descripcion: 'CIUDAD UNIVERSITARIA (CIUDAD AUTONOMA DE BUENOS AIRES)' },
            destino: { id: 4, descripcion: 'RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)' },
          },
        ],
      },
    ],
  },
  {
    id: 26,
    numero: 'EBUS',
    jurisdiccion: 'CABA',
    camara: 'CETUBA',
    promedio: 2,
    cantidadOpiniones: 1,
    ramales: [
      {
        id: 49,
        letra: 'A',
        modalidad: 'COMUN',
        recorridos: [
          {
            id: 43,
            sentido: 'IDA',
            origen: { id: 13, descripcion: 'PALERMO (CIUDAD AUTONOMA DE BUENOS AIRES)' },
            destino: { id: 24, descripcion: 'CENTRO DE TRANSBORDO AREA PLAZA CONSTITUCION (CIUDAD AUTONOMA DE BUENOS AIRES)' },
          },
          {
            id: 44,
            sentido: 'VUELTA',
            origen: { id: 24, descripcion: 'CENTRO DE TRANSBORDO AREA PLAZA CONSTITUCION (CIUDAD AUTONOMA DE BUENOS AIRES)' },
            destino: { id: 13, descripcion: 'PALERMO (CIUDAD AUTONOMA DE BUENOS AIRES)' },
          },
        ],
      },
    ],
    opiniones: [
      {
        id: 2,
        idLinea: 26,
        usuario: 'Bian',
        nota: 2,
        comentario: 'Es un bondi electrico, de las peores bestias de los porteños. Si la ñ rompe el programa o la base va a estar divertido.',
        fecha: '2025-01-30T00:00:00.000Z',
      },
    ],
  },
]

const aOpinion = (dto: OpinionDto): Opinion => ({
  idOpinion: dto.id,
  idLinea: dto.idLinea,
  usuario: dto.usuario,
  nota: dto.nota,
  comentario: dto.comentario,
  fecha: dto.fecha,
})

const aRecorrido = (dto: RecorridoDto | null | undefined): Recorrido | undefined => {
  if (!dto || !dto.origen || !dto.destino) {
    return undefined
  }

  return new Recorrido(
    dto.id ?? 0,
    dto.sentido === 'VUELTA' ? 'VUELTA' : 'IDA',
    dto.origen.descripcion,
    dto.destino.descripcion
  )
}

const aRamal = (dto: RamalDto): Ramal => {
  const recorridos = (dto.recorridos ?? [])
    .map(aRecorrido)
    .filter((recorrido): recorrido is Recorrido => recorrido !== undefined)

  return new Ramal(
    dto.id ?? 0,
    dto.letra,
    dto.modalidad ?? 'Sin modalidad',
    recorridos
  )
}

const aLinea = (dto: LineaDto) =>
  new Linea(
    dto.id,
    dto.numero,
    dto.jurisdiccion,
    dto.camara,
    (dto.ramales ?? []).map(aRamal),
    (dto.opiniones ?? []).map(aOpinion),
    {
      promedio: dto.promedio ?? null,
      cantidadOpiniones: dto.cantidadOpiniones ?? 0,
    }
  )


const coincidencia = (texto: string, valor: string) => {
  const consulta = texto.trim().toLocaleLowerCase()
  const candidato = valor.trim().toLocaleLowerCase()

  if (candidato.includes(consulta)) {
    return true
  }

  const numero = consulta.match(/(?:^|\D)(\d+)(?:\D|$)/)?.[1]
  return numero !== undefined &&
    /^\d+$/.test(candidato) &&
    numero.replace(/^0+(?=\d)/, '') === candidato.replace(/^0+(?=\d)/, '')
}
export const LineaService = {
  // GET /lineas
  async getLineas(): Promise<Linea[]> {
    try {
      const { data } = await axios.get<LineaDto[]>(`${REST_SERVER_URL}/lineas`)
      return data.map(aLinea)
    } catch {
      return fallbackLineas.map(aLinea)
    }
  },

    // GET /lineas/{id}  -> { linea, ramales, opiniones }
  async getDetalle(idLinea: number): Promise<Linea> {
    try {
      const { data } = await axios.get<LineaDetalleDto>(
        `${REST_SERVER_URL}/lineas/${idLinea}`
      )
      return aLinea({
        ...data.linea,
        ramales: data.ramales,
        opiniones: data.opiniones,
      })
    } catch (error) {
      const respaldo = fallbackLineas.find((l) => l.id === idLinea)
      if (!respaldo) {
        throw error
      }
      return aLinea(respaldo)
    }
  },

  // GET /lineas/buscar?texto={texto}
  async buscarLineas(texto: string): Promise<Linea[]> {
    const filtro = texto.trim()

    try {
      const { data } = await axios.get<LineaDto[]>(
        `${REST_SERVER_URL}/lineas/buscar`,
        { params: { texto } }
      )
      return data.map(aLinea)
    } catch (error) {
      console.error('Error al buscar líneas', error)

      const resultados = fallbackLineas.filter((linea) => {
        if (!filtro) {
          return true
        }

        return (
          coincidencia(filtro, linea.numero) ||
          coincidencia(filtro, linea.camara) ||
          (linea.ramales ?? []).some((ramal) =>
            (ramal.recorridos ?? []).some(
              (recorrido) =>
                coincidencia(filtro, recorrido.origen?.descripcion ?? '') ||
                coincidencia(filtro, recorrido.destino?.descripcion ?? '')
            )
          )
        )
      })

      return resultados.map(aLinea)
    }
  },
}

export default LineaService