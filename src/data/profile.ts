export const profile = {
  name: "John Owuor",
  title: "Software Developer",
  location: "Nairobi, Kenya",
  email: "owuor91@gmail.com",
  linkedin: "https://www.linkedin.com/in/john-owuor-9745a794",
  summary:
    "Ten years of software engineering experience, primarily focused on backend development with Python and native Android development with Kotlin and Java. I build systems that scale — from refugee-camp offline messaging to fintech micro-lending platforms serving informal retailers across East Africa.",
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "8+", label: "Companies" },
    { value: "3", label: "Published Apps" },
    { value: "2", label: "Languages" },
  ],
  skills: [
    "Python",
    "FastAPI",
    "Flask",
    "Kotlin",
    "Java",
    "Android",
    "Jetpack Compose",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "RabbitMQ",
    "Docker",
    "Kubernetes",
    "Microservices",
  ],
  languages: [
    { name: "English", level: "Full Professional" },
    { name: "Kiswahili", level: "Full Professional" },
  ],
  education: {
    school: "University of Nairobi",
    degree: "Bachelor of Commerce (B.Com.), Business Information Systems",
    period: "2010 – 2014",
  },
  journey: [
    {
      company: "Made by People",
      role: "Consultant Android Developer",
      period: "Jul 2025 – Nov 2025",
      duration: "5 months",
      highlight:
        "Built the NIKO Android app digitizing registration and assessment of children with disabilities — enabling assistive device issuance from UNICEF, AT4D, and Kilimanjaro Blind Trust partners, and facilitating emergency evacuation.",
      tags: ["Android", "Kotlin", "Social Impact"],
    },
    {
      company: "Twiga Foods",
      role: "Software Developer",
      period: "Nov 2019 – Jun 2025",
      duration: "5 yrs 8 mos",
      highlight:
        "Worked across the stack — porting the native Android app from Java to Kotlin and building backend microservices powering ecommerce and payments for informal retailers. Integrated digital lenders onto the loan management system for SME micro-lending.",
      tags: ["Python", "Kotlin", "Microservices", "Fintech"],
    },
    {
      company: "AkiraChix",
      role: "Mobile Development Trainer",
      period: "Apr 2019 – Nov 2024",
      duration: "5 yrs 8 mos",
      highlight:
        "Developed the Android development curriculum, teaching, mentoring, and assessing students in native Android development on a part-time basis.",
      tags: ["Teaching", "Android", "Mentorship"],
    },
    {
      company: "iHub Software Consulting",
      role: "Android Developer",
      period: "Jul 2018 – Nov 2019",
      duration: "1 yr 5 mos",
      highlight:
        "Delivered Android apps for international clients including PCI International (AfriScout) and War Child Holland (My Voice) — tools for pastoralists and humanitarian feedback collection.",
      tags: ["Android", "Humanitarian Tech"],
    },
    {
      company: "REFUNITE",
      role: "Android Developer",
      period: "Nov 2016 – Jun 2018",
      duration: "1 yr 8 mos",
      highlight:
        "Developed Relay — a peer-to-peer offline messaging app using ad-hoc P2P WiFi networks for dense populations without internet access. Piloted at Kakuma refugee camp.",
      tags: ["Android", "P2P", "Offline-First"],
    },
    {
      company: "Caytree Partners",
      role: "Software Developer",
      period: "Jun 2015 – Nov 2016",
      duration: "1 yr 6 mos",
      highlight:
        "Built the Caytree Android app — an invoicing, sales, and expense tracking platform for SMEs.",
      tags: ["Android", "SME Tools"],
    },
    {
      company: "Moringa School",
      role: "Student",
      period: "Mar 2015 – Jun 2015",
      duration: "4 months",
      highlight:
        "Intensive training in Android development, Ruby on Rails, and UX fundamentals — the launchpad for my engineering career.",
      tags: ["Android", "Ruby on Rails", "UX"],
    },
    {
      company: "OgilvyOne Africa",
      role: "Content Associate",
      period: "Apr 2014 – Mar 2015",
      duration: "1 year",
      highlight:
        "Content strategy and digital communications at one of Africa's leading advertising agencies.",
      tags: ["Content", "Digital"],
    },
  ],
  portfolio: [
    {
      name: "AfriScout",
      client: "PCI International",
      description:
        "Satellite-powered pasture mapping for pastoralists — helping communities find green grazing lands across arid regions.",
      url: "https://play.google.com/store/apps/details?id=com.pci_afriscout&hl=en",
      tags: ["Android", "Satellite Maps", "Agriculture"],
    },
    {
      name: "My Voice",
      client: "War Child Holland",
      description:
        "Humanitarian feedback tool collecting community insights on War Child activities in South Sudan.",
      url: "https://play.google.com/store/apps/details?id=org.warchildholland.ssjr4",
      tags: ["Android", "Humanitarian", "Feedback"],
    },
    {
      name: "NIKO",
      client: "Made by People / UNICEF",
      description:
        "Disability registration and assistive device management — digitizing assessment workflows for vulnerable children.",
      url: null,
      tags: ["Android", "Social Impact", "UNICEF"],
    },
    {
      name: "Relay",
      client: "REFUNITE",
      description:
        "Offline P2P messaging over ad-hoc WiFi networks — connecting communities in refugee camps without internet.",
      url: null,
      tags: ["Android", "P2P", "Offline-First"],
    },
  ],
} as const;
