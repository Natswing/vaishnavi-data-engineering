

import {
  Mail,
  Moon,
  Sun,
  ArrowUpRight,
  Database,
  Code2,
  Cloud,
} from 'lucide-react'

import { FaGithub, FaLinkedin } from 'react-icons/fa6'

import { useTheme } from './hooks/useTheme'


function App() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'


const projects = [
  {
    number: "01",
    title: "Healthcare Master Data Management",
    company: "Capgemini",
    role: "Software Engineer",
    duration: "June 2025 – Present",
    category: "Professional Experience",
    description:
      "Developed backend microservices and cloud-based data processing workflows for a healthcare Master Data Management (MDM) solution to centralize and standardize patient information.",
    contributions: [
      "Built and deployed Flask-based RESTful microservices, modularizing core services with an average response time of 200ms under load.",
      "Worked with GCP Pub/Sub, Cloud Storage, Secret Manager, BigQuery and Cloud Spanner to process and persist approximately 200K daily records.",
      "Implemented Jenkins CI/CD pipelines supporting progressive deployments and 99.9% system uptime."
    ],
    stack: [
      "Python",
      "Flask",
      "REST APIs",
      "GCP",
      "Pub/Sub",
      "BigQuery",
      "Cloud Spanner",
      "Jenkins"
    ]
  },
  {
    number: "02",
    title: "Dynamic Airflow DAG Generation",
    company: "VNC Digital Services",
    role: "Data Engineer",
    duration: "Jan 2025 – June 2025",
    category: "Professional Experience",
    description:
      "Developed a Python-based API service to dynamically generate Apache Airflow DAGs and automate data pipeline scheduling and orchestration.",
    contributions: [
      "Created an API service to generate dynamic DAG definitions in Apache Airflow.",
      "Implemented scheduling capabilities to streamline data pipeline orchestration and processing workflows.",
      "Enabled automated DAG creation and scheduling through SSH, reducing developer and operations effort by at least one hour per script."
    ],
    stack: [
      "Python",
      "Apache Airflow",
      "REST APIs",
      "SSH",
      "DAG Automation",
      "Data Orchestration"
    ]
  },
  {
    number: "03",
    title: "Automated Cloud Billing & Spark Optimization",
    company: "Reliance JIO",
    role: "Data Engineering Intern",
    duration: "Oct 2024 – Dec 2024",
    category: "Professional Experience",
    description:
      "Worked on an automated invoicing system for dynamic cloud pricing, processing billing data from multiple cloud platforms.",
    contributions: [
      "Developed an automated invoicing system for dynamic cloud pricing, improving invoicing accuracy by 100%.",
      "Integrated billing data from AWS and GCP across JSON, CSV and Parquet formats.",
      "Applied Spark optimization techniques, including caching and broadcast joins, reducing processing time by 20% for daily loads of approximately 2 million records."
    ],
    stack: [
      "Python",
      "PySpark",
      "Spark SQL",
      "AWS",
      "GCP",
      "JSON",
      "CSV",
      "Parquet"
    ]
  },
  {
    number: "04",
    title: "COVID-19 Reporting Prediction System",
    company: "Personal Project",
    role: "Data Engineering Project",
    duration: "Jan 2026 – Feb 2026",
    category: "Personal Project",
    description:
      "Built a scalable data processing system using Python and Azure Data Factory to collect, process and prepare COVID-19 datasets for analytics and prediction.",
    contributions: [
      "Built modular transformation logic and optimized data workflows.",
      "Developed time-series prediction functionality.",
      "Integrated analytical outputs into dashboards for monitoring and insights."
    ],
    stack: [
      "Python",
      "Azure Data Factory",
      "SQL",
      "ETL",
      "Time-Series Prediction",
      "Data Analytics"
    ]
  }
];


  const skills = [
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'PySpark, SQL, Databricks, Kafka',
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      description: 'GCP, Azure, Microsoft Fabric',
    },
    {
      icon: Code2,
      title: 'Development',
      description: 'Python, FastAPI, React, TypeScript',
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0b0f0e] dark:text-white transition-colors duration-300">

      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold">
          Vaishnavi<span className="text-emerald-500">.</span>
        </a>

        <div className="hidden md:flex gap-8 text-sm text-slate-600 dark:text-slate-300">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-3 rounded-full border border-slate-300 dark:border-slate-700"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      <section className="max-w-6xl mx-auto px-6 pt-24 pb-32">
        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 px-4 py-2 text-sm text-emerald-600 dark:text-emerald-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Data Engineer | Cloud & Distributed Systems
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.05]">
  Engineering
  <span className="block text-emerald-500">
    Data Systems.
  </span>
</h1>

          <p className="mt-8 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl">
            Hi, I'm Vaishnavi. I build data-driven solutions
            using distributed processing, cloud technologies
            and modern engineering practices.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

  <a
    href="#projects"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-colors"
  >
    Explore Projects <ArrowUpRight size={18} />
  </a>

  <a
    href="#contact"
    className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-emerald-500 transition-colors"
  >
    Get in Touch
  </a>

  
  <a
    href="/vaishnavi_resume.pdf"
    download="Vaishnavi_Resume.pdf"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-slate-950 transition-colors"
  >
    Download Resume
    <ArrowUpRight size={18} />
  </a>


</div>

          
<div className="flex gap-6 mt-12">
  <a
    href="https://github.com/Natswing"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  >
    <FaGithub
      size={22}
      className="text-slate-500 hover:text-emerald-500 transition-colors"
    />
  </a>

  <a
    href="https://www.linkedin.com/in/vaishnavi-90ba66217/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin
      size={22}
      className="text-slate-500 hover:text-emerald-500 transition-colors"
    />
  </a>

  <a href="mailto:singhvaishnavi832@gmail.com" aria-label="Email">
    <Mail
      size={22}
      className="text-slate-500 hover:text-emerald-500 transition-colors"
    />
  </a>
</div>


        </div>
      </section>

      

<section
  id="about"
  className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-200 dark:border-slate-800"
>
  <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">

    {/* Left Column */}
    <div>
      <p className="text-emerald-500 text-sm font-semibold uppercase tracking-widest">
        01 / Introduction
      </p>

      <h2 className="text-4xl font-bold mt-8 leading-tight">
        Engineering
        <span className="block text-emerald-500">
          with data.
        </span>
      </h2>
    </div>

    {/* Right Column */}
    <div>
      <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
        I'm a Data Engineer focused on building reliable data
        pipelines, scalable data processing workflows and
        cloud-based solutions.
      </p>

      <p className="mt-7 leading-relaxed text-slate-600 dark:text-slate-400">
        With a foundation in software engineering, I work
        across data processing, backend development and
        distributed systems. My technical experience includes
        PySpark, SQL, Databricks, Kafka, Python and cloud
        platforms including GCP and Azure.
      </p>

      
      <p className="mt-7 leading-relaxed text-slate-600 dark:text-slate-400">
        In my professional experience, I have worked on healthcare
        Master Data Management (MDM), backend API development and
        cloud-based data processing workflows. I have also handled
        production incidents during hypercare, performed root cause
        analysis and implemented enhancements to improve data
        retrieval and system reliability.
      </p>


      <p className="mt-7 leading-relaxed text-slate-600 dark:text-slate-400">
        I enjoy solving engineering problems involving data
        transformation, pipeline reliability and system
        scalability. My approach combines practical
        problem-solving with clean, maintainable engineering
        practices.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-5 border-y border-slate-200 dark:border-slate-800 py-6">
        <div>
          <p className="text-2xl font-bold text-emerald-500">
            PySpark
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Distributed Data Processing
          </p>
        </div>

        <div>
          <p className="text-2xl font-bold text-emerald-500">
            GCP & Azure
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Cloud Data Platforms
          </p>
        </div>
      </div>


      {/* Areas of Focus */}
      <div className="mt-12">
        <p className="text-emerald-500 text-sm font-semibold uppercase tracking-widest mb-5">
          Areas of Focus
        </p>

        <div className="flex flex-wrap gap-3">
          {[
            'Data Pipelines',
            'Distributed Processing',
            'Cloud Data Engineering',
            'Data Validation',
            'Backend Systems',
            'ETL / ELT',
          ].map((item) => (
            <span
              key={item}
              className="px-5 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-300 hover:border-emerald-500 hover:text-emerald-500 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-200 dark:border-slate-800">
        <p className="text-emerald-500 text-sm font-semibold uppercase tracking-widest">
          Technical Expertise
        </p>
        <h2 className="text-3xl font-bold mt-4">Technology Stack</h2>

        <div className="grid sm:grid-cols-3 gap-5 mt-10">
          {skills.map((skill) => {
            const Icon = skill.icon

            return (
              <div key={skill.title} className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                <Icon className="text-emerald-500" size={28} />
                <h3 className="font-semibold text-lg mt-5">
                  {skill.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  {skill.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      

{/* PROJECTS SECTION */}
<section
  id="projects"
  className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-200 dark:border-slate-800"
>
  {/* Header */}
  <div>
    <p className="text-emerald-500 text-sm font-semibold uppercase tracking-widest">
      03 / ENGINEERING WORK
    </p>

    <h2 className="text-4xl font-bold mt-5">
      Featured Projects
    </h2>

    <p className="mt-4 max-w-2xl leading-relaxed text-slate-600 dark:text-slate-400">
      Real-world engineering experience building cloud-based
      data systems, scalable processing workflows and
      automated data pipelines.
    </p>
  </div>

  {/* Professional Experience */}
  <div className="mt-14">
    <div className="flex items-center gap-3 mb-7">
      <span className="w-2 h-2 rounded-full bg-emerald-500" />
      <h3 className="text-xl font-semibold">
        Professional Experience
      </h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.filter(p => p.category === "Professional Experience").map((project) => (
        <article
          key={project.number}
          className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-7 hover:border-emerald-500/60 transition-all duration-300"
        >
          <div className="flex justify-between items-center gap-3">
            <span className="text-sm font-semibold text-emerald-500">
              EXPERIENCE / {project.number}
            </span>

            <span className="text-xs text-slate-500">
              {project.duration}
            </span>
          </div>

          <div className="mt-6">
            <span className="text-xs px-3 py-1 rounded-full border border-emerald-500/30 text-emerald-500">
              {project.category}
            </span>

            <h3 className="text-2xl font-bold mt-5 leading-snug group-hover:text-emerald-500 transition-colors">
              {project.title}
            </h3>

            <div className="mt-2 text-sm text-emerald-500">
              {project.role} · {project.company}
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {project.description}
            </p>
          </div>

          <div className="mt-7">
            <h4 className="text-sm font-semibold mb-4">
              Key Contributions
            </h4>

            <ul className="space-y-3">
              {project.contributions.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                >
                  <span className="text-emerald-500 mt-1 shrink-0">
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 pt-6 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Technologies
            </h4>

            <div className="flex flex-wrap gap-2">
              {project.stack.map(technology => (
                <span
                  key={technology}
                  className="px-3 py-1.5 rounded-full text-xs border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>

  {/* Personal Projects */}
  <div className="mt-20">
    <div className="flex items-center gap-3 mb-7">
      <span className="w-2 h-2 rounded-full bg-slate-400" />
      <h3 className="text-xl font-semibold">
        Personal Projects
      </h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.filter(p => p.category === "Personal Project").map((project) => (
        <article
  key={project.number}
  style={
    project.number === "03"
      ? {
          gridColumn: "1 / -1",
          width: "50%",
          justifySelf: "center",
        }
      : undefined
  }
  className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-7 hover:border-emerald-500/60 transition-all duration-300"
>
          <span className="text-sm font-semibold text-emerald-500">
            PROJECT / {project.number}
          </span>

          <p className="text-xs text-slate-500 mt-5">
            {project.duration}
          </p>

          <h3 className="text-2xl font-bold mt-3">
            {project.title}
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.description}
          </p>

          <div className="mt-7">
            <h4 className="text-sm font-semibold mb-3">
              Implementation
            </h4>

            <ul className="space-y-3">
              {project.contributions.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                >
                  <span className="text-emerald-500">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 pt-6 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Technologies
            </h4>

            <div className="flex flex-wrap gap-2">
              {project.stack.map(technology => (
                <span
                  key={technology}
                  className="px-3 py-1.5 rounded-full text-xs border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-3xl font-bold">Let's Connect.</h2>
        <p className="mt-4 text-slate-500 dark:text-slate-400">
          Have an interesting data engineering opportunity?
          Let's connect.
        </p>
      </section>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Vaishnavi. Built with React & TypeScript.
      </footer>

    </main>
  )
}

export default App
