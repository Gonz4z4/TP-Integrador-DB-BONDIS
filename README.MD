# BONDIAR

Opiniones de líneas de colectivo de CABA (estilo Letterboxd): buscás tu línea,
ves sus ramales y recorridos, y dejás tu nota de 1 a 10 con un comentario.

## INTEGRANTES

- Arias Gonzalo
- Nava Bianca
- Gomez Julieta
- Gomez Alan
- Koritko Mauro

## Stack

React 19 · Vite · TypeScript · Chakra UI v3 · React Router · Axios · Vitest · Biome · pnpm (Node 24, ver `.nvmrc`)

## Correr

```bash
pnpm install
cp .env.example .env   # VITE_USE_MOCK=true usa datos de prueba
pnpm dev
```

Otros scripts: `pnpm test`, `pnpm lint`, `pnpm format`, `pnpm typecheck`, `pnpm build`.

## Estructura

```
src/
├── theme/system.ts        paleta de colores y tokens de Chakra
├── dominio/               Linea, Ramal, Recorrido, Opinion (+ tests)
├── services/              lineaService, opinionService, api (axios), dto
├── data/                  mock.ts (generado desde el SQL) y mockApi.ts
├── hooks/useCatalogo.ts   carga líneas + opiniones
├── components/
│   ├── layout/            Header, Footer
│   ├── lineas/            LineaCard, RamalesList
│   ├── opiniones/         OpinionCard, OpinionForm, NotaBadge
│   └── ui/                snippets de Chakra (provider, toaster, color-mode...)
├── pages/                 Home, Lineas, LineaDetalle, ErrorPage
└── lib/                   errorHandler, lugares, fechas
```

Rutas: `/` · `/lineas` · `/lineas/:numero` (ej: `/lineas/004`, `/lineas/EBUS`).

## Base de datos

Se usa el modelo normalizado de `documentacion/database/DB_BONDIAR_NORMAL.sql`
(`lineas`, `terminales`, `ramales`, `recorridos_sentido`, `opiniones`).
Una opinión pertenece a una **línea** (`opiniones.id_linea`).

## Conectar el backend

Poner `VITE_USE_MOCK=false` y `VITE_API_URL` en `.env`. Endpoints esperados
(JSON en camelCase, ver `src/services/dto.ts`):

| Método | Ruta | Respuesta / cuerpo |
| ------ | ---- | ------------------ |
| GET | `/lineas` | `LineaDto[]`: línea con `ramales[]` y cada ramal con `recorridos[]` (`origen` y `destino` ya como texto de la terminal) |
| GET | `/opiniones` | `{ idOpinion, usuario, idLinea, nota, comentario, fecha }[]` |
| POST | `/opiniones` | recibe `{ usuario, idLinea, nota, comentario }`, la `fecha` la pone el backend |

Los errores 4xx deberían traer `{ message }`: `getMensajeError` lo muestra en un toast.
Sugerencia para la DB: `CHECK (nota BETWEEN 1 AND 10)` en `opiniones`.

## Paleta

`#859CA6` `#68828C` `#023440` `#A64E1B` `#BF7D2C` `#D9C2A7` `#DA9191` `#730202` `#590202` `#0D0D0D`
(Adobe Color "My Color Theme"). Tema oscuro fijo; colores de marca vía `colorPalette="brand"`.
