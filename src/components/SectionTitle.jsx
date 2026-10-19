export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-2 max-w-2xl text-slate-600">{subtitle}</p>}
    </div>
  )
}
