function Services() {
  const items = [
    {
      title: 'Kaufmännische Verwaltung',
      points: [
        'Wirtschaftsplan & Jahresabrechnung',
        'Transparente Buchführung',
        'Rechnungsprüfung & Zahlungsverkehr',
      ],
    },
    {
      title: 'Technische Verwaltung',
      points: [
        'Regelmäßige Objektbegehungen',
        'Instandhaltung & Modernisierung',
        'Handwerkerkoordination',
      ],
    },
    {
      title: 'Organisatorische Verwaltung',
      points: [
        'Eigentümerversammlungen',
        'Protokolle & Beschlussumsetzung',
        'Rechtssichere Kommunikation',
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Leistungen</h2>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">Alle Leistungen für eine professionelle und transparente Verwaltung Ihrer Wohnungseigentümergemeinschaft.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-slate-50/50">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
