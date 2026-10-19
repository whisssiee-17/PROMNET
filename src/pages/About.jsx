import Card from '../components/Card'
import SectionTitle from '../components/SectionTitle'
import { history, vision, missions, team } from '../data/content'

export default function About() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-16">
      <section>
        <SectionTitle title="Sejarah Kami" />
        <ol className="mx-auto max-w-3xl space-y-4 border-l-2 border-brand-200 pl-6">
          {history.map((h) => (
            <li key={h.year}>
              <span className="font-bold text-brand-600">{h.year}</span>
              <p className="text-slate-600">{h.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl bg-brand-600 text-white">
          <div className="h-2 bg-brand-gradient" />
          <div className="p-6">
          <h3 className="text-xl font-bold">Visi</h3>
          <p className="mt-2 text-brand-100">{vision}</p>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h3 className="text-xl font-bold text-slate-900">Misi</h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-slate-600">
            {missions.map((m, i) => <li key={i}>{m}</li>)}
          </ul>
        </div>
      </section>

      <section>
        <SectionTitle title="Tim Kami" subtitle="Orang-orang di balik setiap proyek." />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t) => (
            <div key={t.id} className="rounded-xl border border-slate-200 bg-white p-6 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 text-2xl font-bold text-brand-600">
                {t.name.split(' ').map((w) => w[0]).join('')}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{t.name}</h3>
              <p className="text-sm text-slate-500">{t.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
