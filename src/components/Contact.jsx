import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiGithub } from 'react-icons/fi'
import { contactInfo } from '../data/content'

const icons = {
  mail: FiMail,
  phone: FiPhone,
  github: FiGithub,
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="eyebrow">Let's Connect</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">Get In Touch</h2>
          <p className="text-body max-w-xl mx-auto">
            Have an opportunity or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((item, i) => {
            const Icon = icons[item.icon]
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.icon === 'github' ? '_blank' : undefined}
                rel={item.icon === 'github' ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-card rounded-card border border-borderc p-7 shadow-soft hover:shadow-glow transition-shadow duration-300 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-brand flex items-center justify-center text-white text-xl shadow-glow">
                  <Icon />
                </div>
                <h3 className="font-heading font-semibold text-heading mb-1.5">
                  {item.label}
                </h3>
                <p className="text-sm text-body break-all">{item.value}</p>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
