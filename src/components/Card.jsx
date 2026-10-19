export default function Card({ icon, title, subtitle, children }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {icon && <div className="mb-3 text-3xl">{icon}</div>}
      {subtitle && <span className="mb-2 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600">{subtitle}</span>}
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{children}</p>
    </div>
  )
}
