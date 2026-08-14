import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Club Management System',
      description: 'A full-stack platform designed to simplify club operations, event management, and student engagement within universities and organizations.',
      techStack: ['React.js', 'Flask', 'PostgreSQL', 'Tailwind CSS', 'JWT', 'Material UI'],
      github: 'https://github.com/pkumar064/The_Clubs',
      live: '#',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'InvoiceIQ',
      description: 'InvoiceIQ is a multi-tenant B2B SaaS platform (Java/Spring Boot + React) that automates invoice and expense processing using AI. It extracts data from PDFs/images via LLMs (Groq, Gemini, OpenAI), validates it with deterministic accounting rules, detects duplicates/anomalies, enforces role-based approval workflows, and offers a grounded conversational finance copilot for spend analytics and cash-flow forecasting.',
      techStack: ['Java', 'Spring Boot', 'Spring Security', 'React', 'PostgreSQL', 'Redis', 'Docker', 'LLM APIs', 'OCR', 'JWT'],
      github: 'https://github.com/Pradeep-7142/AI_invoice_Analyzer',
      live: '#',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'FlowDesk',
      description: 'FlowDesk is an Enterprise Workflow Automation Platform that digitalizes internal business processes like IT procurement, approvals, and onboarding. Employees submit structured requests, managers approve them through a defined chain of command, teams collaborate via comments and file attachments, and stakeholders get real-time notifications plus analytics to spot process bottlenecks — replacing scattered email threads and paperwork with one centralized system (React/Vite frontend, Java Spring Boot backend).',
      techStack: ['Java 21', 'Spring Boot 3', 'React', 'PostgreSQL', 'Redis', 'WebSockets', 'Docker', 'Prometheus', 'Grafana'],
      github: 'https://github.com/Pradeep-7142/Enterprise_Automation_Tool',
      live: '#',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'VeriData Platform',
      description: 'This is a full-stack enterprise data review platform for validating incoming datasets (JSON, CSV, images) through a structured workflow: Managers upload datasets, Reviewers validate records, Approvers verify decisions, and Admins oversee the platform. Built with a Spring Boot 3 (Java 21) backend and React 19/TypeScript frontend, it features JWT-based RBAC, Redis caching, audit logging on every write, swappable local/S3 file storage, dashboards, notifications, and reporting—deployed via Docker Compose to mirror a production setup.',
      techStack: ['Java 21', 'Spring Boot', 'React', 'TypeScript', 'Spring Security', 'JPA/Hibernate', 'MySQL', 'Redis', 'AWS S3', 'Docker'],
      github: 'https://github.com/Pradeep-7142/dataset-approval-system',
      live: '#',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my backend development skills and problem-solving abilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300`}></div>
              <div className="relative bg-gray-800 rounded-lg p-6 border border-gray-700 h-full flex flex-col">
                <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-4`}></div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-500 transition-all">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex-1 justify-center"
                  >
                    <Github size={18} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    onClick={(e) => {
                      e.preventDefault();
                      toast.info('demo is arriveing soon');
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg flex-1 justify-center`}
                  >
                    <ExternalLink size={18} />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
