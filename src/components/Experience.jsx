import { motion } from 'framer-motion'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="eyebrow">Where I've Learned</span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading">Professional Experience</h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline rail */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-borderc hidden sm:block" aria-hidden="true" />

          <div className="space-y-8">
            {experience.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="relative sm:pl-16"
              >
                {/* Timeline node */}
                <div className="hidden sm:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-card border border-borderc items-center justify-center shadow-soft">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>

                <div className="bg-card rounded-card border border-borderc p-7 shadow-soft hover:shadow-glow transition-shadow duration-300">
                  <h3 className="font-heading font-semibold text-lg text-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed mb-5">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}