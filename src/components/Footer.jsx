export default function Footer() {
  return (
    <footer className="py-8 border-t border-borderc relative">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-brand" />
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-body">
        <p><span className="gradient-text font-semibold">Akalya Murugesan</span> · Software Developer Portfolio</p>
        <p>© {new Date().getFullYear()} · Built with React, Tailwind CSS &amp; Framer Motion.</p>
      </div>
    </footer>
  )
}
