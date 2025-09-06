import React, { useEffect, useState, useMemo } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Menu, X, Download } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ sections = [], resume }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  const [theme, setTheme] = useState(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    return stored || 'cyber'
  })

  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    root.classList.remove('theme-cyber', 'theme-matrix')
    body.classList.remove('theme-cyber', 'theme-matrix')
    if (theme === 'matrix') {
      root.classList.add('theme-matrix')
      body.classList.add('theme-matrix')
    } else {
      root.classList.add('theme-cyber')
      body.classList.add('theme-cyber')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'matrix' ? 'cyber' : 'matrix'))

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 10)
      const dh = document.documentElement.scrollHeight - window.innerHeight
      const ratio = dh > 0 ? (y / dh) : 0
      setProgress(Math.min(100, Math.max(0, ratio * 100)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items = useMemo(() => sections.map(s => ({ key: s, label: s.charAt(0).toUpperCase() + s.slice(1) })), [sections])

  return (
    <header className={`navbar fade-in ${scrolled ? 'scrolled' : ''}`}>
      <div className="scroll-progress" style={{ width: progress + '%' }} />
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Glowing AD Logo */}
        <a href="#" className="text-2xl font-extrabold tracking-widest text-cyber-neon glow-text select-none">
          AD
        </a>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-1">
          {items.map(it => (
            <ScrollLink
              key={it.key}
              to={it.key}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onSetActive={() => setActive(it.key)}
              className={
                "px-3 py-2 rounded-lg cursor-pointer transition border " +
                (active === it.key
                  ? "text-white border-cyber-neon bg-cyber-neon/10"
                  : "text-gray-300 hover:text-cyber-neon border-transparent hover:border-cyber-neon/40 hover:bg-cyber-neon/5")
              }>
              {it.label}
            </ScrollLink>
          ))}
          {resume && (
            <a
              href={resume}
              download
              className="ml-2 px-3 py-2 rounded-lg border border-cyber-neon text-cyber-neon hover:bg-cyber-neon hover:text-black transition flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          )}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="rounded-xl px-3 py-2 border border-cyber-neon/30 hover:border-cyber-neon/60 text-cyber-neon transition">
            {theme === 'matrix' ? 'MATRIX' : 'CYBER'}
          </button>

          {/* Mobile menu */}
          <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-lg border border-cyber-neon/30">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden px-4 pb-4">
            <div className="grid gap-2">
              {items.map(it => (
                <ScrollLink
                  key={it.key}
                  to={it.key}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onSetActive={() => setActive(it.key)}
                  onClick={() => setOpen(false)}
                  className={
                    "px-3 py-2 rounded-lg border " +
                    (active === it.key
                      ? "text-cyber-neon border-cyber-neon bg-cyber-neon/10"
                      : "text-gray-300 hover:text-cyber-neon border-cyber-neon/30")
                  }>
                  {it.label}
                </ScrollLink>
              ))}
              {resume && (
                <a href={resume} download onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg border border-cyber-neon/30 text-cyber-neon">
                  <div className="flex items-center gap-2"><Download className="w-4 h-4"/><span>Resume</span></div>
                </a>
              )}
              <button onClick={() => { toggleTheme(); setOpen(false) }} className="px-3 py-2 rounded-lg border border-cyber-neon/30 text-cyber-neon">
                Switch to {theme === 'matrix' ? 'Cyber' : 'Matrix'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
