import { motion } from 'framer-motion'
import portrait from '../assets/akalya-portrait.jpeg'

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Ambient background shapes */}
      <div className="absolute top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="section-container grid md:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">Hello, I'm</span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] mb-4 gradient-text">
            Akalya
          </h1>
          <p className="text-lg md:text-xl font-medium text-primary mb-6">
            UI/UX Designer <span className="text-borderc mx-1">|</span> Frontend Developer
          </p>
          <p className="text-body text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            I'm a Computer Science Engineering student passionate about creating intuitive
            user interfaces and responsive web applications. I enjoy combining creativity
            and technology to build simple, meaningful digital experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-7 py-3.5 rounded-card-sm btn-gradient text-white font-semibold text-sm shadow-glow hover:-translate-y-0.5 hover:brightness-110 transition-all duration-200"
            >
              View Projects
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="px-7 py-3.5 rounded-card-sm glass text-heading font-semibold text-sm border border-borderc hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-7 py-3.5 rounded-card-sm border border-accent text-accent font-semibold text-sm hover:bg-accent/10 hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right column — signature portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-80 md:w-80 md:h-96">
            {/* Blurred blob glow behind everything */}
            <div className="absolute -top-8 -left-10 w-56 h-56 bg-primary/20 rounded-blob animate-blob blur-2xl" />
            <div className="absolute -bottom-10 -right-6 w-48 h-48 bg-primary/10 rounded-blob animate-blob blur-2xl" style={{ animationDelay: '2s' }} />

            {/* Layered rounded rectangles */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-primary/10 rounded-card rotate-3" />
            <div className="absolute inset-0 -translate-x-3 translate-y-2 bg-primary/20 rounded-card -rotate-2" />

            {/* Main photo card */}
            <div className="relative w-full h-full rounded-card overflow-hidden shadow-soft-lg border-2 border-primary/40 bg-card">
              <img
                src={portrait}
                alt="Akalya — UI/UX Designer and Frontend Developer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 shadow-glow rounded-card pointer-events-none" />
            </div>

            {/* Floating geometric elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl glass shadow-soft border border-primary/30 flex items-center justify-center text-2xl animate-float"
            >
              🎨
            </motion.div>
            <motion.div
              className="absolute top-1/2 -right-10 w-12 h-12 rounded-full bg-gradient-brand shadow-glow animate-float-slow"
              style={{ animationDelay: '1.5s' }}
            />
            <motion.div
              className="absolute -bottom-5 left-6 w-14 h-14 rounded-xl bg-gradient-brand shadow-glow-purple rotate-12 animate-float"
              style={{ animationDelay: '1s' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
