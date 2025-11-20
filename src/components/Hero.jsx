function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-blue-100" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">Professionelle WEG-Verwaltung in der Region Hannover</h1>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">Zuverlässig, transparent und nah – wir kümmern uns um Ihre Gemeinschaftseigentumsverwaltung mit klarer Kommunikation, regelmäßiger Betreuung und rechtssicherer Abwicklung.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700">Kostenloses Erstgespräch</a>
              <a href="#services" className="inline-flex items-center px-5 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-white">Unsere Leistungen</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-slate-600">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500" /><span>Direkt erreichbar</span></div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500" /><span>Regionale Expertise</span></div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500" /><span>DSGVO-konform</span></div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 border border-slate-200 shadow-inner overflow-hidden">
              <div className="h-full w-full grid grid-cols-2 gap-2 p-2">
                <div className="rounded-xl bg-white shadow border border-slate-200" />
                <div className="rounded-xl bg-white shadow border border-slate-200" />
                <div className="rounded-xl bg-white shadow border border-slate-200" />
                <div className="rounded-xl bg-white shadow border border-slate-200" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow border border-slate-200 p-4">
              <p className="text-sm text-slate-600">Verwaltung für WEGs in Hannover Stadt und Region</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
