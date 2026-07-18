import { motion } from 'framer-motion'
import { FiAward, FiCheckCircle } from 'react-icons/fi'
import { certifications } from '../data/content'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="eyebrow">Verified Learning</span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading">Certifications</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-card rounded-card border border-borderc p-7 shadow-soft hover:shadow-glow transition-shadow duration-300"
            >
              <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl">
                <FiAward />
              </div>
              <h3 className="font-heading font-semibold text-heading mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-body leading-relaxed mb-4">{cert.description}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                <FiCheckCircle />
                {cert.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}