// All content sourced directly from Saikiran Shet's resume.
// NOTE: Replace the placeholder URLs below with your real GitHub / LinkedIn /
// portfolio / per-project repository links — the resume only listed link
// labels ("LinkedIn", "Portfolio", "[GitHub]") without the actual URLs.

export const profile = {
  name: 'Saikiran Shet',
  title: 'Software Engineer · ML Systems Builder',
  location: 'Bengaluru, Karnataka',
  phone: '+91 9353315644',
  email: 'saikirankshet@gmail.com',
  linkedin: 'https://linkedin.com/in/saikiran-shet', // placeholder — update with real URL
  github: 'https://github.com/saikiran-shet', // placeholder — update with real URL
  portfolio: 'https://saikiran-shet.github.io/portf/', // placeholder — update with real URL
  tagline:
    'I build systems that turn noisy, real-world signals — starlight, medical scans, safety alerts — into something a machine, and a person, can trust.',
}

export const education = [
  {
    degree: 'Bachelor of Engineering in Computer Science',
    school: 'Ramaiah Institute of Technology, Bengaluru',
    meta: 'VTU Affiliated',
    date: 'Oct 2023 – Present',
    detail: 'CGPA: 9.10 (Until 6th Semester)',
    coursework: [
      'Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems',
      'Computer Networks', 'Automata Theory', 'Cryptography', 'AI/ML',
      'Penetration Testing', 'DevOps', 'Software Engineering',
      'Project Management', 'System Design',
    ],
  },
  {
    degree: 'Pre-University Course (PUC)',
    school: 'Saraswati PU College, Kumta',
    meta: 'KSEAB',
    date: 'Sept 2021 – April 2023',
    detail: 'Result: 98.6% · KCET Rank: 1856',
    coursework: [],
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    school: 'CVSK High School, Kumta',
    meta: 'KSEEB',
    date: 'July 2021',
    detail: 'Result: 99.68%',
    coursework: [],
  },
]

export const experience = [
  {
    role: 'Software Engineer Intern',
    org: 'Yug Yatra Retail (OPC) Pvt. Ltd.',
    date: 'Apr 2026 – May 2026',
    points: [
      'Developing and maintaining a matrimonial web platform with responsive frontend features and backend API integrations.',
      'Contributing to application performance optimization, usability improvements, and iterative feature enhancements.',
    ],
  },
  {
    role: 'Project Intern — Samsung PRISM Program',
    org: 'Samsung Research & Innovation',
    date: 'Nov 2025 – Apr 2026',
    points: [
      'Developed an AI-powered pipeline for ethical image scraping and CLIP-based image categorization for ML dataset generation.',
      'Built automated dataset generation workflows, improving dataset quality and scalability through end-to-end processing pipelines.',
    ],
  },
]

export const projects = [
  {
    title: 'Neural Decomposition of Stellar Activity for Improved Exoplanet Detection',
    tag: 'ML / SIGNAL PROCESSING',
    stack: ['Python', 'PyTorch', 'Transformer Encoder', 'Signal Processing'],
    points: [
      'Engineered a PyTorch-based decomposition pipeline for Kepler light-curve analysis, separating stellar noise from planetary transit signals using a patch-embedding Transformer encoder.',
      'Designed custom physics-regularized loss functions to improve disentanglement and transit-detection accuracy under class-imbalanced data conditions.',
    ],
    github: 'https://github.com/saikiranshet/stellar-decomposition', // placeholder
    featured: true,
  },
  {
    title: 'Digital Twin 3D Lung Reconstruction from 2D Medical Imaging for Disease Prediction',
    tag: 'COMPUTER VISION / HEALTH',
    stack: ['Python', 'PyTorch', 'Computer Vision', '3D Reconstruction'],
    points: [
      'Built an AI-driven medical imaging pipeline that reconstructs 3D lung digital twins from 2D scans to support predictive disease monitoring.',
      'Implemented deep learning models for feature extraction and volumetric reconstruction, enabling clinician-friendly visualization of lung structure.',
    ],
    github: 'https://github.com/saikiranshet/lung-digital-twin', // placeholder
    featured: true,
  },
  {
    title: 'Women Safety Application — Echo Her',
    tag: 'MOBILE / SAFETY',
    stack: ['Flutter', 'Dart', 'Firebase', 'Real-Time Location APIs'],
    points: [
      'Developed a Flutter-based mobile safety application featuring silent SOS alerts and real-time location sharing with trusted contacts.',
      'Implemented secure in-app audio/video evidence capture with background recording for emergency situations.',
    ],
    github: 'https://github.com/saikiranshet/echo-her', // placeholder
    featured: false,
  },
  {
    title: 'Distributed Academic Evaluation System',
    tag: 'DISTRIBUTED SYSTEMS',
    stack: ['Python', 'SQLite', 'Asyncio', 'Google Drive API', 'CI/CD'],
    points: [
      'Building a distributed automated evaluation platform using asynchronous worker processes to grade submissions at scale.',
      'Integrated Google Drive polling for submission ingestion and CI/CD workflows for continuous testing and deployment.',
    ],
    github: 'https://github.com/saikiranshet/distributed-eval-system', // placeholder
    featured: false,
    ongoing: true,
  },
  {
    title: 'Secure Distributed Health Record Exchange Platform',
    tag: 'BLOCKCHAIN / HEALTH',
    stack: ['Blockchain', 'HL7', 'Python', 'OTP-Based Authentication'],
    points: [
      'Developed a blockchain-enabled EHR platform enabling secure, consent-driven sharing of patient records across hospitals.',
      'Implemented HL7-compliant interoperability and OTP-based access control to safeguard sensitive healthcare data exchange.',
    ],
    github: 'https://github.com/saikiranshet/health-record-exchange', // placeholder
    featured: false,
  },
]

export const skills = {
  Languages: ['Python', 'Java', 'C', 'JavaScript', 'SQL'],
  'Web & Frameworks': ['HTML5', 'CSS3', 'AngularJS', 'Flutter', 'PyTorch'],
  Databases: ['MySQL', 'MongoDB'],
  'DevOps & Tools': ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Ansible', 'GitHub Actions', 'CI/CD', 'Postman', 'SonarQube'],
  'Security & Systems': ['Linux', 'Unix Shell Scripting', 'Penetration Testing', 'Nmap', 'Wireshark'],
  Design: ['Figma (UI/UX)', 'Blender'],
  Core: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'System Design', 'AI/ML', 'Deep Learning', 'Full Stack Development', 'Software Engineering', 'Cloud Computing'],
}

export const achievements = [
  {
    title: 'Smart India Hackathon (SIH) 2025',
    detail: 'Selected among Top 30 teams from college external rounds.',
  },
  {
    title: 'AIT Tech Exhibition',
    detail: 'Presented the Medical EHR Secure Exchange project.',
  },
  {
    title: 'AWS Community Day',
    detail: 'Participated in AWS Community Day Bangalore and AWS Student Community Day Chennai, gaining cloud and AI exposure.',
  },
  {
    title: "Microsoft Developer's Day",
    detail: 'Explored Azure cloud and enterprise development tools.',
  },
]

export const leadership = [
  {
    role: 'Hosting Team Member',
    org: 'ACM RIT Hackathons — Hackventure, Code Golf',
    detail: 'Contributed as a hosting team member for flagship ACM RIT hackathons.',
  },
  {
    role: 'Former NSS RIT Wing Leader',
    org: 'National Service Scheme, RIT',
    detail: 'Led a wing within the National Service Scheme at RIT.',
  },
  {
    role: 'Former Member, Studio RIT',
    org: 'Editing Club',
    detail: 'Contributed to the college editing and media production club.',
  },
  {
    role: 'Active Member, Music Club RIT',
    org: 'Music Club',
    detail: 'Musician — Flute, Guitar, Singing.',
  },
  {
    role: 'Member, ACM RIT',
    org: 'Association for Computing Machinery — RIT Chapter',
    detail: 'Active technical community member.',
  },
]

export const certifications = [
  'Generative AI with Azure — CloudThat, conducted at MSRIT',
  'Cloud Computing — NPTEL Certification',
  'System Design — Scholar Hat Certification',
]
