import { describe, expect, test } from 'vitest'
import { Linea, Ramal, Recorrido } from './linea'
import type { Opinion } from './opinion'

const opinion = (idOpinion: number, nota: number): Opinion => ({
  idOpinion,
  usuario: 'test',
  idLinea: 1,
  nota,
  comentario: '-',
  fecha: '2026-01-01T00:00:00',
})

const linea = () =>
  new Linea(1, '004', 'CABA', 'ACTA', [
    new Ramal(1, 'A', 'COMUN', [
      new Recorrido(
        1,
        'IDA',
        'LOMAS DEL MIRADOR (PARTIDO DE LA MATANZA - PROVINCIA DE BUENOS AIRES)',
        'PLAZA ROMA (CIUDAD AUTONOMA DE BUENOS AIRES)'
      ),
    ]),
  ])

describe('Linea', () => {
  test('nombre saca los ceros a la izquierda', () => {
    expect(linea().nombre).toBe('4')
    expect(new Linea(26, 'EBUS', 'CABA', 'CETUBA').nombre).toBe('EBUS')
  })

  test('promedio es null sin opiniones y el promedio simple con opiniones', () => {
    const l = linea()
    expect(l.promedio).toBeNull()
    l.opiniones = [opinion(1, 10), opinion(2, 5)]
    expect(l.promedio).toBe(7.5)
  })

  test('usa promedio y cantidad de opiniones enviados por el backend', () => {
    const l = new Linea(1, '004', 'CABA', 'ACTA', [], [], {
      promedio: 5,
      cantidadOpiniones: 1,
    })

    expect(l.promedio).toBe(5)
    expect(l.cantidadOpiniones).toBe(1)
  })

  test('mantiene null como promedio cuando el backend no tiene opiniones', () => {
    const l = new Linea(2, '007', 'CABA', 'CETUBA', [], [], {
      promedio: null,
      cantidadOpiniones: 0,
    })

    expect(l.promedio).toBeNull()
    expect(l.cantidadOpiniones).toBe(0)
  })

  test('extremos limpia los nombres de las terminales', () => {
    expect(linea().extremos).toEqual({
      desde: 'Lomas del Mirador',
      hasta: 'Plaza Roma',
    })
  })

  test('coincideCon busca por número y por terminal', () => {
    const l = linea()
    expect(l.coincideCon('4')).toBe(true)
    expect(l.coincideCon('plaza roma')).toBe(true)
    expect(l.coincideCon('retiro')).toBe(false)
    expect(l.coincideCon('')).toBe(true)
  })
})
