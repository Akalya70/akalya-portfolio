export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const highlightCards = [
  { emoji: '🎨', label: 'UI/UX Design' },
  { emoji: '💻', label: 'Frontend Development' },
  { emoji: '🤖', label: 'AI Projects' },
  { emoji: '📚', label: 'Continuous Learning' },
]

export const skillGroups = [
  {
    title: 'UI/UX',
    emoji: '🎨',
    color: 'from-primary to-indigo-400',
    items: ['Figma', 'Wireframing', 'Prototyping', 'User Flow', 'Responsive Design'],
  },
  {
    title: 'Frontend',
    emoji: '💻',
    color: 'from-indigo-400 to-primary',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    emoji: '⚙️',
    color: 'from-primary to-primary-dark',
    items: ['Java', 'Spring Boot', 'MySQL', 'SQL'],
  },
  {
    title: 'AI',
    emoji: '🤖',
    color: 'from-primary-dark to-indigo-400',
    items: ['Gemini AI'],
  },
]

export const projects = [
  {
    id: 'crop-recommendation',
    title: 'Crop Recommendation System',
    image: 'crop-recommendation',
    mockup: 'laptop',
    description:
      'An AI-powered web application that recommends suitable crops based on soil and weather conditions.',
    role: 'Full Stack Developer',
    tech: ['HTML', 'CSS', 'Spring Boot', 'MySQL', 'Gemini AI'],
    github: 'https://github.com/Akalya70',
  },
  {
    id: 'unified-education-system',
    title: 'Unified Education System',
    image: 'education-system',
    mockup: 'browser',
    description:
      'A centralized platform that allows students to manage attendance, assignments, marks, and academic information through one dashboard.',
    role: null,
    tech: ['HTML', 'CSS', 'JavaScript', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/Akalya70',
  },
  {
    id: 'ai-sql-query-agent',
    title: 'AI SQL Query Agent',
    image: 'sql-agent',
    mockup: 'laptop',
    description:
      'An AI-powered application that converts natural language questions into SQL queries using Gemini AI, making database interaction simple for beginners.',
    role: null,
    tech: ['HTML', 'CSS', 'JavaScript', 'Spring Boot', 'Gemini AI', 'MySQL'],
    github: 'https://github.com/Akalya70',
  },
]

export const certifications = [
  {
    title: 'Oracle Database Foundations',
    issuer: 'Oracle',
    emoji: '🗄️',
  },
  {
    title: 'Microsoft Azure AI Fundamentals',
    issuer: 'Microsoft',
    emoji: '☁️',
  },
  {
    title: 'Infosys Springboard Java Foundation',
    issuer: 'Infosys Springboard',
    emoji: '☕',
  },
  {
    title: 'Cyber Security Certification',
    issuer: 'NASSCOM FutureSkills Prime',
    emoji: '🔐',
  },
]

export const contactInfo = [
  {
    icon: 'mail',
    label: 'Email',
    value: 'akalyamurugesan007@gmail.com',
    href: 'mailto:akalyamurugesan007@gmail.com',
  },
  {
    icon: 'phone',
    label: 'Phone',
    value: '9345312277',
    href: 'tel:+919345312277',
  },
  {
    icon: 'github',
    label: 'GitHub',
    value: 'github.com/Akalya70',
    href: 'https://github.com/Akalya70',
  },
]
