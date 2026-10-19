import { Link } from 'react-router-dom'
import { company, navLinks, socials } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-white">{company.name}</h3>
          <p className="mt-2 text-sm">{company.tagline}</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Menu</h4>
          <ul className="mt-2 space-y-1 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Ikuti Kami</h4>
          <ul className="mt-2 space-y-1 text-sm">
            {socials.map((s) => (
              <li key={s.name}><a href={s.url} target="_blank" rel="noreferrer" className="hover:text-white">{s.name}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-slate-800 py-4 text-center text-xs">
        © {new Date().getFullYear()} {company.name}. Website fiktif untuk tugas kuliah.
      </p>
    </footer>
  )
}
