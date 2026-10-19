import Card from '../components/Card'
import SectionTitle from '../components/SectionTitle'
import { services } from '../data/content'

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle title="Layanan Kami" subtitle="Dari ide sampai produk berjalan, kami bantu di setiap tahap." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.id} icon={s.icon} title={s.title}>{s.desc}</Card>
        ))}
      </div>
    </div>
  )
}
