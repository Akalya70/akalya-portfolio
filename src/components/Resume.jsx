import { motion } from 'framer-motion'
import { FiFileText, FiDownload } from 'react-icons/fi'

export default function Resume() {
  return (
    <section id="resume" className="py-24 md:py-32 bg-secondary/60">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-card rounded-card border border-borderc shadow-soft hover:shadow-glow transition-shadow duration-300 p-8 md:p-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
        >
          <div className="w-16 h-16 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl">
            <FiFileText />
          </div>
          <div className="flex-1">
            <h3 className="font-heading font-semibold text-xl text-heading mb-1.5">My Resume</h3>
            <p className="text-sm text-body leading-relaxed">
              A quick overview of my education, skills, and experience — ready to download.
            </p>
          </div>
          
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-card-sm btn-gradient text-white font-semibold text-sm shadow-glow hover:-translate-y-0.5 hover:brightness-110 transition-all duration-200"
          >
            <FiDownload />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}