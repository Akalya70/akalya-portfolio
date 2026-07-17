import { motion } from 'framer-motion'
import { projects } from '../data/content'
import cropImg from '../assets/project-crop-recommendation.jpg'
import eduImg from '../assets/project-education-system.jpg'
import sqlImg from '../assets/project-sql-agent.jpg'

const images = {
  'crop-recommendation': cropImg,
  'education-system': eduImg,
  'sql-agent': sqlImg,
}

function DeviceFrame({ src, alt, type }) {
  if (type === 'browser') {
    return (
      <div className="rounded-t-card-sm overflow-hidden border border-borderc bg-secondary shadow-soft">
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-50 border-b border-borderc">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-56 object-cover object-top transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    )
  }

  // laptop mockup
  return (
    <div className="px-3 pt-3 pb-1 rounded-t-2xl bg-slate-800">
      <div className="rounded-lg overflow-hidden border border-slate-700">
        <img
          src={src}
          alt={alt}
          className="w-full h-52 object-cover object-top transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="h-2 mt-2 mx-8 rounded-b-md bg-slate-700" />
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="eyebrow">Selected Work</span>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="bg-card rounded-card border border-borderc shadow-soft hover:shadow-glow transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <DeviceFrame src={images[project.image]} alt={project.title} type={project.mockup} />

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-semibold text-lg text-heading mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-body leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.role && (
                  <p className="text-xs font-medium text-primary mb-3">
                    Role: {project.role}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto w-full py-2.5 rounded-card-sm btn-gradient text-white text-sm font-semibold text-center hover:brightness-110 transition-all duration-200"
                >
                  View Project
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
