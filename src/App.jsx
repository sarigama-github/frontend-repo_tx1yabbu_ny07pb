import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Coverage from './components/Coverage'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Coverage />
      <Contact />
      <footer className="border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} WEG Verwaltung Hannover. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hover:text-slate-900">Kontakt</a>
            <a href="#" className="hover:text-slate-900">Impressum</a>
            <a href="#" className="hover:text-slate-900">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
