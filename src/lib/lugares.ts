const MINUSCULAS = new Set(['y', 'e', 'de', 'del', 'la', 'las', 'los', 'el'])

/** "PLAZA ROMA (CIUDAD AUTONOMA DE BUENOS AIRES)" -> "Plaza Roma" */
export const limpiarLugar = (texto = '') =>
  texto
    .replace(/\s*\(.*\)\s*$/, '')
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((palabra, i) =>
      i > 0 && MINUSCULAS.has(palabra)
        ? palabra
        : palabra.charAt(0).toUpperCase() + palabra.slice(1)
    )
    .join(' ')
