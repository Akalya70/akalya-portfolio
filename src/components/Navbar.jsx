import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { navLinks } from '../data/content'

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)

      const sections = navLinks.map((l) => document.getElementById(l.id))
      const scrollPos = window.scrollY + window.innerHeight * 0.3

      let current = 'home'
      sections.forEach((sec) => {
        if (sec && sec.offsetTop <= scrollPos) {
          current = sec.id
        }
      })
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-soft border-b border-borderc' : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between py-4">
        <button
          onClick={() => handleClick('home')}
          className="font-heading font-bold text-xl gradient-text tracking-tight"
        >
          Akalya
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <button
                onClick={() => handleClick(link.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  active === link.id ? 'text-primary' : 'text-body hover:text-primary'
                }`}
              >
                {link.label}
              </button>
              {active === link.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-gradient-brand"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-heading transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-heading transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-heading transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-borderc px-6 pb-4 flex flex-col gap-3"
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className={`text-sm font-medium py-1 ${active === link.id ? 'text-primary' : 'text-body'}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  )
}
