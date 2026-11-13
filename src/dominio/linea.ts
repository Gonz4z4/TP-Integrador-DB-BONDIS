import { limpiarLugar } from '@/lib/lugares'
import type { Opinion } from './opinion'

export type Sentido = 'IDA' | 'VUELTA'

export class Recorrido {
  constructor(
    public idRecorrido: number,
    public sentido: Sentido,
    public origen: string,
    public destino: string
  ) {}

  get origenCorto() {
    return limpiarLugar(this.origen)
  }

  get destinoCorto() {
    return limpiarLugar(this.destino)
  }
}

export class Ramal {
  constructor(
    public idRamal: number,
    public letra: string,
    public modalidad: string,
    public recorridos: Recorrido[] = []
  ) {}

  get ida() {
    return this.recorridos.find((r) => r.sentido === 'IDA')
  }

  get vuelta() {
    return this.recorridos.find((r) => r.sentido === 'VUELTA')
  }
}

export class Linea {
  constructor(
    public idLinea: number,
    public numero: string,
    public jurisdiccion: string,
    public camara: string,
    public ramales: Ramal[] = [],
    public opiniones: Opinion[] = [],
    private readonly resumen?: {
      promedio: number | null
      cantidadOpiniones: number
    }
  ) {}

  /** "004" -> "4"; "EBUS" -> "EBUS" */
  get nombre() {
    return /^\d+$/.test(this.numero) ? String(Number(this.numero)) : this.numero
  }

  get modalidades() {
    return [...new Set(this.ramales.map((r) => r.modalidad))]
  }

  get cantidadOpiniones() {
    return this.resumen?.cantidadOpiniones ?? this.opiniones.length
  }

  /** Promedio de notas (1 a 5) o null si todavía no hay opiniones. */
  get promedio(): number | null {
    if (this.resumen) {
      return this.resumen.promedio
    }
    if (!this.opiniones.length) {
      return null
    }
    const suma = this.opiniones.reduce((total, o) => total + o.nota, 0)
    return suma / this.opiniones.length
  }

  /** Punta a punta del primer ramal, para mostrar en tarjetas. */
  get extremos() {
    const primero = this.ramales[0]
    const recorrido = primero?.ida ?? primero?.vuelta
    return {
      desde: recorrido?.origenCorto ?? '',
      hasta: recorrido?.destinoCorto ?? '',
    }
  }

  /** Busca por número de línea o por cualquier terminal de sus recorridos. */
  coincideCon(texto: string) {
    const t = texto.trim().toLowerCase()
    if (!t) {
      return true
    }
    if (
      this.numero.toLowerCase().includes(t) ||
      this.nombre.toLowerCase() === t
    ) {
      return true
    }
    return this.ramales.some((ramal) =>
      ramal.recorridos.some(
        (r) =>
          r.origenCorto.toLowerCase().includes(t) ||
          r.destinoCorto.toLowerCase().includes(t)
      )
    )
  }
}
