import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'
import { Rutas } from './routes'

const irA = (ruta: string) => window.history.pushState({}, '', ruta)

describe('App Component', () => {
  afterEach(() => {
    cleanup()
    irA('/')
  })

  test('la aplicación levanta correctamente (smoke test)', async () => {
    render(<Rutas />)

    expect(
      await screen.findByRole('heading', {
        name: 'Contá cómo te fue en el bondi.',
      })
    ).toBeTruthy()
  })

  test('el listado de líneas carga las líneas del mock', async () => {
    irA('/lineas')
    render(<Rutas />)

    expect(await screen.findByText('Plaza Roma', { exact: false })).toBeTruthy()
  })

  test('el detalle de una línea muestra sus opiniones', async () => {
    irA('/lineas/004')
    render(<Rutas />)

    expect(await screen.findByRole('heading', { name: 'Línea 4' })).toBeTruthy()
    expect(
      await screen.findByText('Un viaje hasta pilar por favor')
    ).toBeTruthy()
  })

  test('una línea inexistente muestra el 404', async () => {
    irA('/lineas/999')
    render(<Rutas />)

    expect(await screen.findByText('ERROR 404')).toBeTruthy()
  })
})
