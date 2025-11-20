import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">WEG</div>
            <div>
              <div className="text-slate-900 font-semibold leading-tight">WEG Verwaltung</div>
              <div className="text-xs text-slate-500 leading-tight">Region Hannover</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#services" className="hover:text-blue-600">Leistungen</a>
            <a href="#about" className="hover:text-blue-600">Über uns</a>
            <a href="#coverage" className="hover:text-blue-600">Region</a>
            <a href="#contact" className="hover:text-blue-600">Kontakt</a>
          </nav>

          <a href="#contact" className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium shadow-sm hover:bg-blue-700">Angebot anfragen</a>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-300 text-slate-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <span className="sr-only">Menü</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/80">
          <div className="px-4 py-3 grid gap-2 text-slate-700">
            <a onClick={() => setOpen(false)} href="#services" className="py-2">Leistungen</a>
            <a onClick={() => setOpen(false)} href="#about" className="py-2">Über uns</a>
            <a onClick={() => setOpen(false)} href="#coverage" className="py-2">Region</a>
            <a onClick={() => setOpen(false)} href="#contact" className="py-2">Kontakt</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
