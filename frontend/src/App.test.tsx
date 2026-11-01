import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { Rutas } from './routes'

describe('App Component', () => {
  test('la aplicación levanta correctamente (smoke test)', () => {
    render(<Rutas />)

    expect(screen.getByRole('heading', { name: 'Resumen' })).toBeTruthy()
  })
})
