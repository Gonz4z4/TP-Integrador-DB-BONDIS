// Tabla opiniones: id_opinion, usuario, id_linea, nota, comentario, fecha
export type Opinion = {
  idOpinion: number
  usuario: string
  idLinea: number
  nota: number
  comentario: string
  fecha: string
}

export type NuevaOpinion = Pick<
  Opinion,
  'usuario' | 'idLinea' | 'nota' | 'comentario'
>

export const NOTA_MINIMA = 1
export const NOTA_MAXIMA = 5
