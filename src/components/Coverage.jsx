function Coverage() {
  const areas = ['Hannover', 'Laatzen', 'Langenhagen', 'Garbsen', 'Seelze', 'Isernhagen', 'Ronnenberg', 'Hemmingen', 'Lehrte', 'Sehnde', 'Burgwedel']

  return (
    <section id="coverage" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Region Hannover</h2>
            <p className="mt-4 text-slate-700">Wir betreuen Wohnungseigentümergemeinschaften in Hannover und im direkten Umland – zuverlässig und persönlich vor Ort.</p>
            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 text-slate-700">
              {areas.map(a => (
                <li key={a} className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-blue-600 rounded-full" />{a}</li>
              ))}
            </ul>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 border border-slate-200 shadow-inner" />
        </div>
      </div>
    </section>
  )
}

export default Coverage
