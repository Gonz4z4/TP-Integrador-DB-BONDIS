export type LineaDto = {
  id: number
  numero: string
  jurisdiccion: string
  camara: string
  promedio?: number | null
  cantidadOpiniones?: number
}

export type TerminalDto = {
  id: number | null
  descripcion: string
}

export type RecorridoDto = {
  id: number | null
  sentido: string
  origen: TerminalDto | null
  destino: TerminalDto | null
}

export type RamalDto = {
  id: number | null
  letra: string
  modalidad: string | null
  recorridos: RecorridoDto[]
}

export type OpinionDto = {
  id: number
  idLinea: number
  usuario: string
  nota: number
  comentario: string
  fecha: string
}

export type LineaDetalleDto = {
  linea: LineaDto
  ramales: RamalDto[]
  opiniones: OpinionDto[]
}