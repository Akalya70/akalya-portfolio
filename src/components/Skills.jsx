import { motion } from 'framer-motion'
import { FiCode, FiServer, FiDatabase, FiTool, FiPenTool } from 'react-icons/fi'
import { skillGroups } from '../data/content'

const icons = {
  code: FiCode,
  server: FiServer,
  database: FiDatabase,
  tool: FiTool,
  design: FiPenTool,
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/60">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="eyebrow">What I Work With</span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading">Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon]
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-card rounded-card border border-borderc p-6 shadow-soft hover:shadow-glow transition-shadow duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg mb-4">
                  <Icon />
                </div>
                <h3 className="font-heading font-semibold text-heading mb-4 pb-3 border-b border-borderc">
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}