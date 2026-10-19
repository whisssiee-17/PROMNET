import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { company, socials } from '../data/content'

const validate = ({ name, email, message }) => {
  const e = {}
  if (!name.trim()) e.name = 'Nama wajib diisi.'
  if (!email.trim()) e.email = 'Email wajib diisi.'
  else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = 'Format email tidak valid.'
  if (!message.trim()) e.message = 'Pesan wajib diisi.'
  else if (message.trim().length < 10) e.message = 'Pesan minimal 10 karakter.'
  return e
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setSent(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length === 0) {
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    }
  }

  const inputClass = (field) =>
    `mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400 ${
      errors[field] ? 'border-red-400' : 'border-slate-300'
    }`

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle title="Hubungi Kami" subtitle="Ceritakan kebutuhan Anda, kami akan membalas dalam 1×24 jam." />
      <div className="grid gap-10 md:grid-cols-2">
        <form onSubmit={handleSubmit} noValidate className="space-y-4 rounded-xl border border-slate-200 bg-white p-6">
          {sent && <p className="rounded-lg bg-green-50 p-3 text-sm text-green-700">Pesan berhasil dikirim. Terima kasih!</p>}
          {[
            { name: 'name', label: 'Nama', type: 'text' },
            { name: 'email', label: 'Email', type: 'email' },
          ].map((f) => (
            <div key={f.name}>
              <label htmlFor={f.name} className="text-sm font-medium">{f.label}</label>
              <input id={f.name} name={f.name} type={f.type} value={form[f.name]} onChange={handleChange} className={inputClass(f.name)} />
              {errors[f.name] && <p className="mt-1 text-xs text-red-500">{errors[f.name]}</p>}
            </div>
          ))}
          <div>
            <label htmlFor="message" className="text-sm font-medium">Pesan</label>
            <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} className={inputClass('message')} />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>
          <button type="submit" className="w-full rounded-lg bg-brand-600 py-2.5 font-semibold text-white hover:bg-brand-700">Kirim Pesan</button>
        </form>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900">Alamat</h3>
            <p className="text-slate-600">{company.address}</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Email & Telepon</h3>
            <p className="text-slate-600">{company.email}</p>
            <p className="text-slate-600">{company.phone}</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Media Sosial</h3>
            <div className="mt-2 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="rounded-full border border-brand-200 px-4 py-1.5 text-sm text-brand-600 hover:bg-brand-50">{s.name}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
