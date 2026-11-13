import axios from 'axios'
import { afterEach, describe, expect, test, vi } from 'vitest'
import LineaService from './lineaService'

describe('LineaService', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('busca líneas en el backend usando el parámetro texto', async () => {
    const lineas = [
      {
        id: 1,
        numero: '106',
        jurisdiccion: 'Nacional',
        camara: 'Grupo DOTA',
        promedio: null,
        cantidadOpiniones: 0,
      },
    ]
    const get = vi.spyOn(axios, 'get').mockResolvedValue({ data: lineas })

    const resultado = await LineaService.buscarLineas('Retiro')

    expect(get).toHaveBeenCalledWith('http://localhost:8080/lineas/buscar', {
      params: { texto: 'Retiro' },
    })
    expect(resultado[0]).toMatchObject({
      idLinea: 1,
      numero: '106',
      camara: 'Grupo DOTA',
    })
  })

  test('usa métricas vacías cuando el backend no las incluye', async () => {
    const lineas = [
      {
        id: 1,
        numero: '106',
        jurisdiccion: 'Nacional',
        camara: 'Grupo DOTA',
      },
    ]
    vi.spyOn(axios, 'get').mockResolvedValue({ data: lineas })

    const resultado = await LineaService.buscarLineas('Retiro')

    expect(resultado[0].promedio).toBeNull()
    expect(resultado[0].cantidadOpiniones).toBe(0)
  })

  test('normaliza ceros iniciales y registra el error al usar el respaldo', async () => {
    const error = new Error('Backend no disponible')
    vi.spyOn(axios, 'get').mockRejectedValue(error)
    const errorLog = vi.spyOn(console, 'error').mockImplementation(() => {})

    const resultado = await LineaService.buscarLineas('4')

    expect(resultado.map((linea) => linea.numero)).toContain('004')
    expect(errorLog).toHaveBeenCalledWith('Error al buscar líneas', error)
  })

  test('acepta el prefijo línea en la búsqueda numérica de respaldo', async () => {
    vi.spyOn(axios, 'get').mockRejectedValue(new Error('Backend no disponible'))
    vi.spyOn(console, 'error').mockImplementation(() => {})

    const resultado = await LineaService.buscarLineas('Línea 4')

    expect(resultado.map((linea) => linea.numero)).toContain('004')
  })
})
