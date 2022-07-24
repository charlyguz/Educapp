import { UseTimeAgoMessages } from '@vueuse/core'

export const SPANISH_MESSAGES: UseTimeAgoMessages = {
  justNow: 'justo ahora',
  past: (n) => (n.match(/\d/) ? `hace ${n}` : n),
  future: (n) => (n.match(/\d/) ? `dentro de ${n}` : n),
  month: (n, past) =>
    n === 1
      ? past
        ? 'mes pasado'
        : 'siguiente mes'
      : `${n} mes${n > 1 ? 'es' : ''}`,
  year: (n, past) =>
    n === 1
      ? past
        ? 'año pasado'
        : 'siguiente año'
      : `${n} año${n > 1 ? 's' : ''}`,
  day: (n, past) =>
    n === 1 ? (past ? 'ayer' : 'mañana') : `${n} día${n > 1 ? 's' : ''}`,
  week: (n, past) =>
    n === 1
      ? past
        ? 'semana pasada'
        : 'siguiente semana'
      : `${n} semana${n > 1 ? 's' : ''}`,
  hour: (n) => `${n} hora${n > 1 ? 's' : ''}`,
  minute: (n) => `${n} minuto${n > 1 ? 's' : ''}`,
  second: (n) => `${n} segundo${n > 1 ? 's' : ''}`,
}
