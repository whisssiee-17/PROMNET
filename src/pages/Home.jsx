import { Link } from 'react-router-dom'
import Card from '../components/Card'
import SectionTitle from '../components/SectionTitle'
import { company, services } from '../data/content'

export default function Home() {
  return (
    <>
      <section className="bg-brand-gradient text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl rounded-2xl bg-slate-950/70 px-6 py-12 text-center backdrop-blur-sm sm:px-10">
          <h1 className="text-3xl font-extrabold sm:text-5xl">{company.tagline}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/90 sm:text-lg">
            {company.name} adalah software house di Bandung yang membantu bisnis dan institusi membangun produk digital yang andal.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/layanan" className="rounded-lg bg-white px-6 py-3 font-semibold text-brand-600 hover:bg-brand-50">Lihat Layanan</Link>
            <Link to="/kontak" className="rounded-lg border border-white px-6 py-3 font-semibold hover:bg-white/10">Hubungi Kami</Link>
          </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle title="Tentang Singkat" />
        <p className="mx-auto max-w-3xl text-center leading-relaxed text-slate-600">
          Sejak 2018, kami telah menyelesaikan puluhan proyek website, aplikasi mobile, dan sistem informasi.
          Dengan tim 25 profesional, kami berkomitmen menghadirkan hasil yang rapi, tepat waktu, dan mudah dikembangkan.
        </p>
        <div className="mt-8 text-center">
          <Link to="/tentang" className="font-semibold text-brand-600 hover:underline">Selengkapnya →</Link>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle title="Layanan Unggulan" subtitle="Tiga layanan yang paling banyak dipilih klien kami." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((s) => (
              <Card key={s.id} icon={s.icon} title={s.title}>{s.desc}</Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
