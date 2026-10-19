import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navLinks, company } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition ${
      isActive ? 'bg-brand-600 text-white' : 'text-slate-600 hover:bg-brand-50 hover:text-brand-600'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold text-brand-600">{company.name}</Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.to}><NavLink to={l.to} className={linkClass}>{l.label}</NavLink></li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-2xl md:hidden"
          aria-label="Buka menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={linkClass} onClick={() => setOpen(false)}>{l.label}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <div className="h-0.5 bg-brand-gradient" />
    </header>
  )
}
