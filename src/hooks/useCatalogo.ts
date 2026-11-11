import { useCallback, useEffect, useState } from 'react'
import { showToast } from '@/components/toast'
import type { Linea } from '@/dominio/linea'
import type { Opinion } from '@/dominio/opinion'
import { getMensajeError } from '@/lib/errorHandler'
import LineaService from '@/services/lineaService'
import OpinionService from '@/services/opinionService'

type Estado = {
  cargando: boolean
  lineas: Linea[]
  opiniones: Opinion[]
}

/** Carga líneas + opiniones y le cuelga a cada línea sus opiniones. */
export const useCatalogo = () => {
  const [estado, setEstado] = useState<Estado>({
    cargando: true,
    lineas: [],
    opiniones: [],
  })

  const cargar = useCallback(async () => {
    try {
      const [lineas, opiniones] = await Promise.all([
        LineaService.getLineas(),
        OpinionService.getOpiniones(),
      ])
      for (const linea of lineas) {
        linea.opiniones = opiniones.filter((o) => o.idLinea === linea.idLinea)
      }
      setEstado({ cargando: false, lineas, opiniones })
    } catch (error) {
      showToast(getMensajeError(error), 'error')
      setEstado((anterior) => ({ ...anterior, cargando: false }))
    }
  }, [])

  useEffect(() => {
    cargar()
  }, [cargar])

  return { ...estado, recargar: cargar }
}
