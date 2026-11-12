import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

const CLAVE = 'bondiar.usuario'
export const USUARIO_MAX = 50 // misma longitud que opiniones.usuario en la base

const leerGuardado = () => {
  try {
    return localStorage.getItem(CLAVE)
  } catch {
    return null
  }
}

const guardar = (usuario: string | null) => {
  try {
    if (usuario) {
      localStorage.setItem(CLAVE, usuario)
    } else {
      localStorage.removeItem(CLAVE)
    }
  } catch {
    // Sin storage la sesión dura mientras la pestaña siga abierta.
  }
}

type SesionContextValue = {
  /** Nombre de quien ingresó, o null si no hay sesión. */
  usuario: string | null
  ingresar: (nombre: string) => void
  salir: () => void
}

const SesionContext = createContext<SesionContextValue | null>(null)

export const SesionProvider = ({ children }: { children: ReactNode }) => {
  const [usuario, setUsuario] = useState<string | null>(leerGuardado)

  const ingresar = useCallback((nombre: string) => {
    const limpio = nombre.trim().slice(0, USUARIO_MAX)
    if (!limpio) {
      return
    }
    guardar(limpio)
    setUsuario(limpio)
  }, [])

  const salir = useCallback(() => {
    guardar(null)
    setUsuario(null)
  }, [])

  const value = useMemo(
    () => ({ usuario, ingresar, salir }),
    [usuario, ingresar, salir]
  )

  return <SesionContext.Provider value={value}>{children}</SesionContext.Provider>
}

export const useSesion = () => {
  const ctx = useContext(SesionContext)
  if (!ctx) {
    throw new Error('useSesion tiene que usarse dentro de <SesionProvider>')
  }
  return ctx
}