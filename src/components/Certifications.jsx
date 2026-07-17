import { motion } from 'framer-motion'
import { certifications } from '../data/content'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-secondary/60">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="eyebrow">Verified Learning</span>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Certifications</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-card rounded-card border border-borderc p-7 shadow-soft hover:shadow-glow transition-shadow duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-brand flex items-center justify-center text-2xl shadow-glow">
                {cert.emoji}
              </div>
              <h3 className="font-heading font-semibold text-heading mb-1.5">
                {cert.title}
              </h3>
              <p className="text-sm text-body">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
