import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Github, ExternalLink, Layers, ShieldCheck, Cpu } from 'lucide-react';
import { toast } from 'sonner';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Club Management System',
      category: 'Campus Ecosystem Platform',
      icon: Layers,
      description: 'The Clubs is a full-stack club and event management platform built for universities. It centralizes club discovery, membership management, event creation with an approval workflow, attendance tracking, notifications, and analytics — including a club leaderboard and one-click PDF performance reports — with role-based access for admins, club heads, and students.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Recharts', 'Flask', 'JWT', 'PostgreSQL', 'Docker', 'Nginx', 'REST APIs'],
      github: 'https://github.com/Pradeep-7142/Club_management',
      live: '#',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    },
    {
      title: 'InvoiceIQ',
      category: 'AI B2B SaaS & Financial Copilot',
      icon: Cpu,
      description: 'InvoiceIQ is a multi-tenant B2B SaaS platform that automates invoice and expense processing using AI. It extracts data from PDFs/images via LLMs (Groq, Gemini, OpenAI), validates it with deterministic accounting rules, detects duplicates/anomalies, enforces role-based approval workflows, and offers a grounded conversational finance copilot for spend analytics and cash-flow forecasting.',
      techStack: ['Java 21', 'Spring Boot 3', 'Spring Security', 'React', 'PostgreSQL', 'Redis', 'Docker', 'LLM APIs', 'OCR', 'JWT'],
      github: 'https://github.com/Pradeep-7142/AI_invoice_Analyzer',
      live: '#',
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    },
    {
      title: 'FlowDesk',
      category: 'Enterprise Workflow Automation',
      icon: Layers,
      description: 'FlowDesk is an Enterprise Workflow Automation Platform that digitalizes internal business processes like IT procurement, approvals, and onboarding. Employees submit structured requests, managers approve them through a defined chain of command, teams collaborate via comments and file attachments, and stakeholders get real-time notifications plus analytics to spot process bottlenecks — replacing scattered email threads with one centralized system.',
      techStack: ['Java 21', 'Spring Boot 3', 'React', 'PostgreSQL', 'Redis', 'WebSockets', 'Docker', 'Prometheus', 'Grafana'],
      github: 'https://github.com/Pradeep-7142/Enterprise_Automation_Tool',
      live: '#',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    },
    {
      title: 'VeriData Platform',
      category: 'Enterprise Data Review & Approval',
      icon: ShieldCheck,
      description: 'This is a full-stack enterprise data review platform for validating incoming datasets (JSON, CSV, images) through a structured workflow: Managers upload datasets, Reviewers validate records, Approvers verify decisions, and Admins oversee the platform. Built with a Spring Boot 3 backend and React 19 frontend, it features JWT-based RBAC, Redis caching, audit logging on every write, swappable local/S3 file storage, dashboards, and reporting.',
      techStack: ['Java 21', 'Spring Boot 3', 'React 19', 'TypeScript', 'Spring Security', 'JPA/Hibernate', 'MySQL', 'Redis', 'AWS S3', 'Docker'],
      github: 'https://github.com/Pradeep-7142/dataset-approval-system',
      live: '#',
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-950/80 relative overflow-hidden" ref={ref}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
            <span>PRODUCTION-GRADE ARCHITECTURE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Scalable full-stack systems with enterprise workflows, role-based access control, AI document processing, and containerized deployments.
          </p>
        </motion.div>

        {/* 2-Column Responsive Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="group relative h-full flex flex-col"
              >
                {/* Gradient border glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-400`}></div>

                {/* Card Body */}
                <div className="relative bg-gray-900/90 rounded-3xl p-6 sm:p-8 border border-gray-800 backdrop-blur-xl h-full flex flex-col justify-between group-hover:border-gray-700 transition-all shadow-xl">
                  <div>
                    {/* Top Header Row */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-lg shrink-0`}>
                          <Icon size={22} />
                        </div>
                        <div>
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${project.badgeColor} mb-1`}>
                            {project.category}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="mb-6">
                      <div className="text-[11px] uppercase tracking-wider font-semibold text-gray-500 mb-2.5">
                        Technologies & Infrastructure
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-gray-800/90 text-gray-300 hover:text-white rounded-lg text-xs font-medium border border-gray-700/70 hover:border-gray-600 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="pt-4 border-t border-gray-800/80 flex items-center gap-4 mt-auto">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium text-sm transition-all flex-1 border border-gray-700 shadow-sm"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </motion.a>

                    <motion.a
                      href={project.live}
                      onClick={(e) => {
                        e.preventDefault();
                        toast.info(`Live demo for ${project.title} is coming soon!`);
                      }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-medium text-sm flex-1 shadow-lg shadow-black/20`}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
