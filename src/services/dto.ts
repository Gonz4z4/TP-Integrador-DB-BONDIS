// Contrato que debería devolver el backend (GET /lineas), ya con los joins
// de lineas -> ramales -> recorridos_sentido -> terminales resueltos.
export type RecorridoDto = {
  idRecorrido: number
  sentido: 'IDA' | 'VUELTA'
  origen: string
  destino: string
}

export type RamalDto = {
  idRamal: number
  letra: string
  modalidad: string
  recorridos: RecorridoDto[]
}

export type LineaDto = {
  idLinea: number
  numero: string
  jurisdiccion: string
  camara: string
  ramales: RamalDto[]
}
