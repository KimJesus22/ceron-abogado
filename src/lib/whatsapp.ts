const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '524561266998'

/**
 * Genera un enlace https://wa.me/ con mensaje opcional ya codificado.
 * Usar siempre esta función para mantener consistencia y facilitar
 * el cambio de número desde una sola fuente.
 */
export function waUrl(message?: string): string {
  const base = `https://wa.me/${WA_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
