'use client'

import { useState } from 'react'

const links = [
  { href: '#sobre', label: 'Sobre mí' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#tarifas', label: 'Tarifas' },
  { href: '#testimonios', label: 'Reseñas' },
  { href: '#recursos', label: 'Recursos' },
  { href: '#redes', label: 'Redes' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav aria-label="Navegación principal" className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border px-8 flex items-center justify-between h-[60px]">
      <a className="font-bold text-[1.05rem] tracking-[-0.3px] text-[#111] no-underline" href="#inicio" aria-label="Ir al inicio — Adrián Cerón">
        Adrián Cerón
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="no-underline text-muted text-[0.9rem] transition-colors hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(prev => !prev)}
      >
        <span className="block w-6 h-0.5 bg-[#111] rounded-sm transition-all" />
        <span className="block w-6 h-0.5 bg-[#111] rounded-sm transition-all" />
        <span className="block w-6 h-0.5 bg-[#111] rounded-sm transition-all" />
      </button>

      {/* Mobile menu */}
      {open && (
        <ul id="mobile-menu" className="md:hidden absolute top-[60px] left-0 right-0 bg-white border-b border-border flex flex-col px-8 py-4 gap-5 list-none z-50">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="no-underline text-muted text-[0.9rem]"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
