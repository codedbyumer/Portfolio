export const personalInfo = {
  name: 'Muhammad Umer',
  initials: 'MU',               
  tagline: 'I build things people love.',
  description: 'I craft clean, functional web apps — from pixel-perfect frontends to working backends. I love turning ideas into real, usable products.',
  about: "Hey — I'm Muhammad Umer, a CS student at University of Gujrat doing my BS in IT (7th semester, 3.7 CGPA). I'm passionate about building real-world projects — from full-stack web apps to AI-powered tools. Currently looking for opportunities to grow and contribute.",
  location: 'Gujranwala, Pakistan',   
  email: 'iamumer222@gmail.com',
  phone: '+92 327 8638832',
  linkedin: 'https://www.linkedin.com/in/iammuhmmadumer/',  
  github: 'https://github.com/codedbyumer',
  cvUrl: '/Muhammad Umer CV.pdf',          
  availableForWork: true,
}
export const stats = [
  { icon: '📦', number: 4, suffix: '+', label: 'Projects Completed' },
  { icon: '⭐', number: 3, suffix: '.7', label: 'CGPA / 4.0' },
  { icon: '🔥', number: 7, suffix: 'th', label: 'Semester Running' },
]
export const typingRoles = [
  'MERN Stack Developer',
  'Frontend Developer',
  'React Developer',
  'BS IT Student',
  'Problem Solver',
  'Project Builder',
  'Open Source Contributor',
]
export const skillBars = [
  { name: 'React / Vite', percent: 78 },
  { name: 'HTML & CSS', percent: 85 },
  { name: 'JavaScript', percent: 75 },
  { name: 'Node.js / Express', percent: 65 },
  { name: 'OOP', percent: 65 },
  { name: 'DSA', percent: 65 },
]

export const skillCategories = [
  {
    icon: '⚡',
    title: 'Frontend',
    tags: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    icon: '🔧',
    title: 'Backend',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT Auth'],
  },
  {
    icon: '🛠',
    title: 'Tools & AI',
    tags: ['Git', 'GitHub', 'GROQ AI', 'Vercel', 'VS Code', 'Figma'],
  },
]

export const projects = [
  {
    emoji: '🎵',
    title: 'Spotify Clone',
    description:
      'A fully functional music player built with pure HTML, CSS & JavaScript. Features multiple playlists, live seekbar, volume control, real-time song timer, and a responsive hamburger sidebar. Songs load dynamically via fetch() from folder structure.',
    category: 'frontend',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Fetch API'],
    liveUrl: '',
    githubUrl: 'https://github.com/codedbyumer/spotify-clone',
  },
  {
    emoji: '📄',
    title: 'ATS Resume Builder',
    description:
      'A full-stack AI-powered resume builder with step-by-step form (Personal → Experience → Education → Skills → Projects → Certifications), live PDF preview, 3 resume templates, ATS score checker, and a Job Description Matcher — all powered by Gemini AI.',
    category: 'fullstack',
    stack: ['React', 'Node.js', 'MongoDB', 'GROQ AI', 'Tailwind CSS'],
    liveUrl: '',
    githubUrl: 'https://github.com/codedbyumer/ats-resume-builder',
  },
  {
    emoji: '🎤',
    title: 'Interview Prep Platform',
    description:
      'AI-driven interview practice platform built for Pakistani developers. Select your field (MERN, Python, DSA, etc.) and difficulty, then answer timed questions with instant Gemini AI feedback, scoring, and weak area detection. Includes progress tracking with visual charts.',
    category: 'fullstack',
    stack: ['React', 'Node.js', 'MongoDB', 'GROQ AI', 'Tailwind CSS'],
    liveUrl: '',
    githubUrl: 'https://github.com/codedbyumer/interview-prep-platform',
  },
  {
    emoji: '📚',
    title: 'StudyFlow',
    description:
      'A student productivity dashboard with rich note-taking (tagged notes, live editor), task manager with priority levels & due dates, weekly study insights with charts, a Cyber Tips section, and a study streak tracker — all in a clean dark UI.',
    category: 'frontend',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Recharts'],
    liveUrl: 'https://study-flow-knukkj59m-codedbyumers-projects.vercel.app/',
    githubUrl: 'https://github.com/codedbyumer/StudyFlow',
  },
]
export const experience = [
  
{
    date: '2023 — Present',
    role: 'BS Information Technology (7th Semester)',
    company: 'University of Gujrat',
    location: 'Gujrat, Pakistan',
    emoji: '🎓',
    color: 'var(--green)',
    description: 'Currently in 7th semester with a CGPA of 3.7/4.0. Focused on web development, software engineering, and building real-world projects alongside coursework.',
  },
  {
    date: '2024 — Present',
    role: 'Self-taught Developer',
    company: 'Personal Projects',
    location: 'Gujranwala, Pakistan',
    emoji: '💻',
    color: 'var(--accent)',
    description: 'Built 4+ full-stack and frontend projects including a Spotify clone, ATS resume builder, interview prep platform, and a student productivity app. Focused on learning by building.',
  },

]


export const testimonials = [

  {
    text: "Exceptional full-stack developer. Built our entire SaaS platform from scratch — clean architecture, beautiful UI, and shipped ahead of schedule. Umer thinks like a product person, not just an engineer.",
    name: 'Ahmad Raza',
    role: 'Founder at Mian Brothers',
    initials: 'AR',
    gradient: 'linear-gradient(135deg, #06b6d4, #7c6dfa)',
  },

]

// EmailJS config — get free keys at emailjs.com
export const emailjsConfig = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY',
}

