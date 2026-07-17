import { motion } from 'framer-motion'
import workingImg from '../assets/about-working.jpg'
import { highlightCards } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container grid md:grid-cols-2 gap-14 items-center">
        {/* Left: workspace image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-card overflow-hidden shadow-soft-lg border border-borderc group">
            <img
              src={workingImg}
              alt="Akalya working on UI designs at her desk"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-card bg-primary/5 hidden md:block" />
        </motion.div>

        {/* Right: content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="eyebrow">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Getting to know me</h2>
          <p className="text-body leading-relaxed mb-8">
            Hello! I'm Akalya, a Computer Science Engineering student with a strong interest
            in UI/UX design and frontend development. I enjoy designing clean, user-centered
            interfaces, building responsive web applications, and continuously learning new
            technologies to improve my creativity and technical skills.
          </p>

          <div className="bg-card rounded-card-sm border border-borderc p-5 shadow-soft mb-10">
            <p className="font-heading font-semibold text-heading text-sm mb-1">
              Bachelor of Engineering, Computer Science and Engineering
            </p>
            <p className="text-sm text-body">VSB Engineering College &middot; Expected 2027 &middot; CGPA: 8.13</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlightCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-card-sm border border-borderc p-5 shadow-soft transition-shadow hover:shadow-glow"
              >
                <span className="text-2xl">{card.emoji}</span>
                <p className="mt-2 font-heading font-semibold text-sm text-heading">
                  {card.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
