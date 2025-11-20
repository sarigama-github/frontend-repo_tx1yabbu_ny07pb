import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState({ state: 'idle' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone') || undefined,
      subject: form.get('subject'),
      message: form.get('message'),
      city: form.get('city') || undefined,
      consent: form.get('consent') === 'on',
    }

    if (!payload.consent) {
      setStatus({ state: 'error', message: 'Bitte stimmen Sie der Datenverarbeitung zu.' })
      return
    }

    try {
      setStatus({ state: 'submitting' })
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.detail || data.message || 'Fehler beim Senden')
      setStatus({ state: 'success', message: 'Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Kontakt</h2>
            <p className="mt-3 text-slate-700">Schildern Sie uns kurz Ihr Anliegen – wir melden uns in der Regel innerhalb von 24 Stunden.</p>
            <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-sm">
              DSGVO-Hinweis: Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-slate-50/50">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-slate-300 shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">E-Mail</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-slate-300 shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Telefon (optional)</label>
                <input name="phone" className="mt-1 w-full rounded-md border-slate-300 shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Stadt/Ort (optional)</label>
                <input name="city" className="mt-1 w-full rounded-md border-slate-300 shadow-sm" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Betreff</label>
                <input name="subject" required className="mt-1 w-full rounded-md border-slate-300 shadow-sm" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Nachricht</label>
                <textarea name="message" rows={5} required className="mt-1 w-full rounded-md border-slate-300 shadow-sm" />
              </div>
              <div className="sm:col-span-2 flex items-start gap-2">
                <input id="consent" name="consent" type="checkbox" className="mt-1" />
                <label htmlFor="consent" className="text-sm text-slate-700">Ich stimme der Verarbeitung meiner Daten gemäß DSGVO zu.</label>
              </div>
            </div>

            <button disabled={status.state==='submitting'} className="mt-6 inline-flex items-center px-5 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 disabled:opacity-60">
              {status.state==='submitting' ? 'Senden…' : 'Nachricht senden'}
            </button>

            {status.state !== 'idle' && (
              <p className={`mt-3 text-sm ${status.state==='error' ? 'text-red-600' : 'text-green-700'}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
