import Card from '../components/Card'
import SectionTitle from '../components/SectionTitle'
import { projects, clients } from '../data/content'

export default function Portfolio() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-16">
      <section>
        <SectionTitle title="Proyek Kami" subtitle="Beberapa karya yang telah kami selesaikan." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.id} title={p.title} subtitle={p.category}>{p.desc}</Card>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Klien Kami" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((c) => (
            <div key={c} className="rounded-lg border border-slate-200 bg-white p-4 text-center text-sm font-semibold text-slate-500">{c}</div>
          ))}
        </div>
      </section>
    </div>
  )
}
