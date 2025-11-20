function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Über uns</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Als engagierte WEG-Verwalter in der Region Hannover legen wir Wert auf persönliche Betreuung, schnelle Erreichbarkeit und transparente Prozesse. Wir begleiten Ihre Gemeinschaft zuverlässig in allen kaufmännischen, technischen und organisatorischen Themen.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-slate-700">
              <li className="flex items-center gap-2"><span className="h-2 w-2 bg-blue-600 rounded-full" />Erfahrung in Hannover Stadt & Region</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 bg-blue-600 rounded-full" />Klare, rechtssichere Abwicklung</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 bg-blue-600 rounded-full" />Transparente Abrechnungen</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 bg-blue-600 rounded-full" />Digitale Kommunikation</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-100 p-8 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-28 rounded-xl bg-white border border-slate-200 shadow-sm" />
              <div className="h-28 rounded-xl bg-white border border-slate-200 shadow-sm" />
              <div className="h-28 rounded-xl bg-white border border-slate-200 shadow-sm" />
              <div className="h-28 rounded-xl bg-white border border-slate-200 shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
