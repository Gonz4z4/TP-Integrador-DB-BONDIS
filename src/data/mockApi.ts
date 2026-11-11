import type { Opinion } from '@/dominio/opinion'
import type { LineaDto } from '@/services/dto'
import {
  lineasMock,
  opinionesMock,
  ramalesMock,
  recorridosMock,
  terminalesMock,
} from './mock'

const terminales = new Map(terminalesMock)

/** Arma lo mismo que devolvería el backend: lineas con ramales y recorridos. */
export const lineasDtoMock = (): LineaDto[] =>
  lineasMock.map(([idLinea, numero, jurisdiccion, camara]) => ({
    idLinea,
    numero,
    jurisdiccion,
    camara,
    ramales: ramalesMock
      .filter(([, lineaId]) => lineaId === idLinea)
      .map(([idRamal, , letra, modalidad]) => ({
        idRamal,
        letra,
        modalidad,
        recorridos: recorridosMock
          .filter(([, ramalId]) => ramalId === idRamal)
          .map(([idRecorrido, , sentido, origenId, destinoId]) => ({
            idRecorrido,
            sentido,
            origen: terminales.get(origenId) ?? '',
            destino: terminales.get(destinoId) ?? '',
          })),
      })),
  }))

// Estado en memoria para poder "publicar" opiniones sin backend.
export const opinionesEnMemoria: Opinion[] = opinionesMock.map(
  ([idOpinion, usuario, idLinea, nota, comentario, fecha]) => ({
    idOpinion,
    usuario,
    idLinea,
    nota,
    comentario,
    fecha,
  })
)
