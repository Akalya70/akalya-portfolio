import { motion } from 'framer-motion'
import portrait from '../assets/akalya-portrait.jpeg'

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">

      <div
        className="absolute top-16 -left-24 w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >

          <span className="eyebrow">Hello, I'm</span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] mb-4 text-heading">
            Akalya <span className="gradient-text">Murugesan</span>
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
                document.getElementById('projects')?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}
              className="px-7 py-3.5 rounded-card-sm btn-gradient text-white font-semibold text-sm shadow-glow hover:-translate-y-0.5 hover:brightness-110 transition-all duration-200"
            >
              View Projects
            </a>


            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="px-7 py-3.5 rounded-card-sm bg-card text-heading font-semibold text-sm border border-borderc hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
            >
              Download Resume
            </a>


            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}
              className="px-7 py-3.5 rounded-card-sm border border-accent text-accent font-semibold text-sm hover:bg-accent/5 hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Me
            </a>


          </div>

        </motion.div>



        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative flex justify-center md:justify-end"
        >

          <div className="relative w-72 h-80 md:w-80 md:h-96">

            <div
              className="absolute -top-6 -left-8 w-48 h-48 bg-primary/15 rounded-full blur-3xl"
              aria-hidden="true"
            />


            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-primary/10 rounded-card" />


            <div className="relative w-full h-full rounded-card overflow-hidden shadow-soft-lg border border-borderc bg-card">

              <img
                src={portrait}
                alt="Akalya — UI/UX Designer and Frontend Developer"
                className="w-full h-full object-cover"
              />

            </div>



            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 glass rounded-card-sm shadow-soft-lg border border-borderc px-5 py-3.5 flex items-center gap-3"
            >

              <span className="relative flex h-2.5 w-2.5">

                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />

                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />

              </span>


              <div className="leading-tight">

                <p className="text-xs font-semibold text-heading">
                  Final-year CSE
                </p>

                <p className="text-[11px] text-body">
                  Open to opportunities
                </p>

              </div>

            </motion.div>


          </div>

        </motion.div>


      </div>

    </section>
  )
}