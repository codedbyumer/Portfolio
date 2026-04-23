// ============================================================
//  PORTFOLIO CONFIG — Edit all your info here!
//  No need to touch any component files.
// ============================================================

export const personalInfo = {
  name: 'Alex Morgan',
  initials: 'AM',
  tagline: 'I build things people love.',
  description:
    'I craft exceptional digital experiences — from pixel-perfect interfaces to robust backends. Turning complex problems into elegant, scalable solutions.',
  about:
    "Hey — I'm Alex. A Full Stack Developer based in San Francisco, obsessed with building products that are fast, beautiful, and delightfully intuitive. I've shipped products used by thousands of users at startups and enterprises alike. When I'm not coding, I'm exploring design systems, contributing to open source, or mentoring junior devs.",
  location: 'San Francisco, CA',
  email: 'alex@morgan.dev',
  phone: '+1 (415) 555-0190',
  linkedin: 'https://linkedin.com/in/alexmorgan',
  github: 'https://github.com/alexmorgan',
  twitter: 'https://twitter.com/alexmorgan',
  cvUrl: '/alex-morgan-cv.pdf',
  yearsExperience: 5,
  availableForWork: true,
}

export const typingRoles = [
  'Full Stack Developer',
  'React Expert',
  'UI/UX Creator',
  'Problem Solver',
  'Open Source Contributor',
]

export const skillBars = [
  { name: 'React / Next.js', percent: 95 },
  { name: 'TypeScript', percent: 90 },
  { name: 'Node.js / Express', percent: 88 },
  { name: 'UI/UX Design', percent: 82 },
]

export const skillCategories = [
  {
    icon: '⚡',
    title: 'Frontend',
    tags: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
  },
  {
    icon: '🔧',
    title: 'Backend',
    tags: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'GraphQL', 'REST APIs'],
  },
  {
    icon: '🛠',
    title: 'Tools & DevOps',
    tags: ['Git', 'GitHub', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code'],
  },
]

export const projects = [
  {
    emoji: '🛒',
    title: 'ShopFlow',
    description:
      'E-commerce platform with real-time inventory, AI recommendations, and lightning checkout. 99.9% uptime serving 100K+ users.',
    category: 'fullstack',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    liveUrl: 'https://shopflow.demo',
    githubUrl: 'https://github.com/alexmorgan/shopflow',
  },
  {
    emoji: '📊',
    title: 'DataViz Pro',
    description:
      'Interactive analytics dashboard with 30+ chart types, custom reporting, and real-time data streaming.',
    category: 'frontend',
    stack: ['React', 'D3.js', 'TypeScript', 'WebSockets'],
    liveUrl: 'https://dataviz.demo',
    githubUrl: 'https://github.com/alexmorgan/dataviz',
  },
  {
    emoji: '🤖',
    title: 'AI Chat Studio',
    description:
      'Full-featured AI chat interface with conversation threading, model switching, and export capabilities.',
    category: 'fullstack',
    stack: ['Next.js', 'OpenAI API', 'Supabase', 'Tailwind'],
    liveUrl: 'https://aichat.demo',
    githubUrl: 'https://github.com/alexmorgan/aichat',
  },
  {
    emoji: '🎨',
    title: 'Designify',
    description:
      'Design system & component library with 100+ components, dark mode support, and Figma plugin.',
    category: 'ui',
    stack: ['React', 'Storybook', 'Figma API', 'TypeScript'],
    liveUrl: 'https://designify.demo',
    githubUrl: 'https://github.com/alexmorgan/designify',
  },
  {
    emoji: '🏠',
    title: 'RealEstate Pro',
    description:
      'Property listing platform with map integration, virtual tours, and mortgage calculator.',
    category: 'fullstack',
    stack: ['Next.js', 'Mapbox', 'PostgreSQL', 'AWS S3'],
    liveUrl: 'https://realestate.demo',
    githubUrl: 'https://github.com/alexmorgan/realestate',
  },
  {
    emoji: '💜',
    title: 'Pulse Social',
    description:
      'Real-time social platform with live feeds, stories, and end-to-end encrypted messaging.',
    category: 'fullstack',
    stack: ['React', 'Socket.io', 'Firebase', 'Node.js'],
    liveUrl: 'https://pulse.demo',
    githubUrl: 'https://github.com/alexmorgan/pulse',
  },
]

export const experience = [
  {
    date: '2022 — Present',
    role: 'Senior Full Stack Engineer',
    company: 'Stripe',
    location: 'San Francisco, CA',
    emoji: '🏢',
    color: 'var(--accent)',
    description:
      'Led development of core payment infrastructure serving 50M+ transactions. Rebuilt the merchant dashboard in React, reducing load time by 60%. Mentored a team of 4 junior engineers.',
  },
  {
    date: '2020 — 2022',
    role: 'Frontend Engineer',
    company: 'Y Combinator Startup',
    location: 'Remote',
    emoji: '🚀',
    color: 'var(--accent3)',
    description:
      'Built the entire frontend from scratch using React and TypeScript. Implemented a real-time collaboration feature used by 10,000+ daily active users. Shipped 3 major product launches.',
  },
  {
    date: '2019 — 2020',
    role: 'Freelance Developer & Designer',
    company: 'Self-employed',
    location: 'Worldwide',
    emoji: '💼',
    color: 'var(--accent2)',
    description:
      'Delivered 30+ client projects across e-commerce, SaaS, and portfolio websites. Developed a reputation for clean code, fast delivery, and exceptional design quality.',
  },
  {
    date: '2015 — 2019',
    role: 'B.S. Computer Science',
    company: 'MIT',
    location: 'Cambridge, MA',
    emoji: '🎓',
    color: 'var(--green)',
    description:
      'Graduated with Honors. Specialization in Human-Computer Interaction and Distributed Systems. Won 2 hackathons. Co-founded the university Web Dev Club.',
  },
]

export const stats = [
  { icon: '📦', number: 80, suffix: '+', label: 'Projects Completed' },
  { icon: '😊', number: 50, suffix: '+', label: 'Happy Clients' },
  { icon: '⭐', number: 5, suffix: '+', label: 'Years Experience' },
  { icon: '🔥', number: 1200, suffix: '+', label: 'GitHub Contributions' },
]

export const testimonials = [
  {
    text: "Alex delivered our product redesign in record time and the quality was absolutely stunning. The attention to detail, the animations, the performance — everything was beyond our expectations. Our user engagement went up 40%.",
    name: 'Sarah Richardson',
    role: 'CPO at Nexus AI',
    initials: 'SR',
    gradient: 'linear-gradient(135deg, #7c6dfa, #a855f7)',
  },
  {
    text: "Exceptional full-stack developer. Built our entire SaaS platform from scratch — clean architecture, beautiful UI, and shipped ahead of schedule. Alex thinks like a product person, not just an engineer.",
    name: 'James Keller',
    role: 'Founder at Launchpad',
    initials: 'JK',
    gradient: 'linear-gradient(135deg, #06b6d4, #7c6dfa)',
  },
  {
    text: "We've worked with many developers, but Alex stands out. The code quality is impeccable, communication is top-tier, and the creative problem solving is something rare. Will definitely hire again.",
    name: 'Maria Lopes',
    role: 'VP Engineering at FlowBase',
    initials: 'ML',
    gradient: 'linear-gradient(135deg, #10d97a, #06b6d4)',
  },
]

// EmailJS config — get free keys at emailjs.com
export const emailjsConfig = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY',
}
