import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

// Paleta base: Adobe Color "My Color Theme"
//   859CA6 · 68828C · 023440 · A64E1B · BF7D2C · D9C2A7 · DA9191 · 730202 · 590202 · 0D0D0D
// Las superficies intermedias (bg.subtle / panel / muted) son mezclas de
// 0D0D0D con 023440 para tener profundidad sin salirse de la paleta.
const config = defineConfig({
  globalCss: {
    'html, body': { bg: 'bg', color: 'fg' },
    '::selection': { bg: 'brand.solid', color: 'brand.contrast' },
  },
  theme: {
    tokens: {
      colors: {
        pal: {
          slate400: { value: '#859CA6' },
          slate500: { value: '#68828C' },
          abyss: { value: '#023440' },
          rust: { value: '#A64E1B' },
          ochre: { value: '#BF7D2C' },
          sand: { value: '#D9C2A7' },
          rose: { value: '#DA9191' },
          wine600: { value: '#730202' },
          wine700: { value: '#590202' },
          ink: { value: '#0D0D0D' },
        },
      },
      fonts: {
        heading: { value: 'Geist, Inter, system-ui, sans-serif' },
        body: { value: 'Inter, system-ui, sans-serif' },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT:    { value: { _light: '#F6F0E7', _dark: '{colors.pal.ink}' } },
          subtle:     { value: { _light: '#EFE6D8', _dark: '#0A1719' } },
          panel:      { value: { _light: '#FBF8F3', _dark: '#091B1F' } },
          muted:      { value: { _light: '#E8DCC9', _dark: '#06242C' } },
          emphasized: { value: { _light: '{colors.pal.sand}', _dark: '{colors.pal.abyss}' } },
        },
        fg: {
          DEFAULT:  { value: { _light: '{colors.pal.ink}', _dark: '{colors.pal.sand}' } },
          muted:    { value: { _light: '{colors.pal.abyss}', _dark: '{colors.pal.slate400}' } },
          subtle:   { value: { _light: '{colors.pal.slate500}', _dark: '{colors.pal.slate500}' } },
          inverted: { value: { _light: '{colors.pal.sand}', _dark: '{colors.pal.ink}' } },
        },
        border: {
          DEFAULT:    { value: { _light: '{colors.pal.sand}', _dark: '#17323B' } },
          muted:      { value: { _light: '#E8DCC9', _dark: '#12262C' } },
          subtle:     { value: { _light: '#EFE6D8', _dark: '#0F2127' } },
          emphasized: { value: { _light: '#C4AA88', _dark: '#2A4F5A' } },
        },
        brand: {
          solid:      { value: { _light: '{colors.pal.rust}', _dark: '{colors.pal.ochre}' } },
          contrast:   { value: { _light: '#FBF8F3', _dark: '{colors.pal.ink}' } },
          fg:         { value: { _light: '{colors.pal.rust}', _dark: '{colors.pal.ochre}' } },
          muted:      { value: { _light: '#EBD3BF', _dark: '#302313' } },
          subtle:     { value: { _light: '#F3E4D6', _dark: '#1F1810' } },
          emphasized: { value: { _light: '{colors.pal.ochre}', _dark: '{colors.pal.rust}' } },
          focusRing:  { value: { _light: '{colors.pal.rust}', _dark: '{colors.pal.ochre}' } },
        },
        nota: {
          alta:  { value: { _light: '{colors.pal.rust}', _dark: '{colors.pal.ochre}' } },
          media: { value: { _light: '{colors.pal.slate500}', _dark: '{colors.pal.slate400}' } },
          baja:  { value: { _light: '{colors.pal.wine600}', _dark: '{colors.pal.rose}' } },
        },
        peligro: {
          solid: { value: '{colors.pal.wine600}' },
          fg:    { value: { _light: '{colors.pal.wine600}', _dark: '{colors.pal.rose}' } },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
