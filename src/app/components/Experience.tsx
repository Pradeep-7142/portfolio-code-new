import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Software Development Engineer',
      company: 'Beans.ai',
      location: 'Noida, India',
      period: 'May 2026 – Present',
      type: 'Full-time',
      isCurrent: true,
      technologies: ['React', 'JavaScript', 'Python', 'SQL', 'Data Ops', 'QA Automation', 'CI/CD'],
      responsibilities: [
        'Working on Data Ops and QA to improve data quality, reliability, and pipeline efficiency.',
        'Building automated validation and monitoring tools for data workflows.',
        'Collaborating with cross-functional teams to detect, resolve, and prevent data issues.',
        'Using React, JavaScript, Python, SQL, and automation techniques to streamline quality checks.',
      ],
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      nodeColor: 'bg-emerald-500 shadow-emerald-500/40',
      typeBadge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    },
    {
      title: 'Software Developer Intern',
      company: 'Beans.ai',
      location: 'Noida, India',
      period: 'May 2025 – Aug 2025',
      type: 'Internship',
      isCurrent: false,
      technologies: ['React.js', 'JavaScript', 'Material UI v5', 'React DnD', 'React Window', 'Git'],
      responsibilities: [
        'Built and improved React-based web features with sorting, drag-and-drop, and optimized table handling for better user experience.',
        'Improved frontend performance using virtualization techniques to efficiently manage large datasets.',
        'Migrated and optimized 20+ MUI components from v4 to v5, improving scalability and UI consistency.',
        'Worked with React.js, JavaScript, Material UI, React DnD, React Window, Git, and GitHub.',
      ],
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      nodeColor: 'bg-blue-500 shadow-blue-500/40',
      typeBadge: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    },
    {
      title: 'RPA Intern',
      company: 'ZingHR',
      location: 'Mumbai, India',
      period: 'May 2024 – Aug 2024',
      type: 'Internship',
      isCurrent: false,
      technologies: ['Python', 'Selenium', 'PyAutoGUI', 'Regex', 'Data Validation', 'Excel Automation'],
      responsibilities: [
        'Developed automation workflows for employee data processing, reducing manual work and improving efficiency.',
        'Built monitoring and error-tracking systems to simplify debugging and issue resolution.',
        'Implemented PAN and Aadhaar validation checks to improve data accuracy and validation processes.',
        'Worked with Python, Selenium, PyAutoGUI, and Microsoft Excel for automation tasks.',
      ],
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      nodeColor: 'bg-purple-500 shadow-purple-500/40',
      typeBadge: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gray-900 relative overflow-hidden" ref={ref}>
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
            <span>CAREER JOURNEY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Work <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Professional track record of building production systems, automating operations, and optimizing application workflows.
          </p>
        </motion.div>

        {/* Scalable Left-Connected Career Timeline */}
        <div className="relative pl-6 sm:pl-10 md:pl-12">
          {/* Continuous Glowing Left Track */}
          <div className="absolute left-[11px] sm:left-[19px] md:left-[23px] top-4 bottom-4 w-1 bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-600 rounded-full opacity-60"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.period}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline Pulsing Node */}
                <div className="absolute -left-[29px] sm:-left-[37px] md:-left-[41px] top-6 z-20 flex items-center justify-center">
                  <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full ${exp.nodeColor} flex items-center justify-center border-4 border-gray-900 shadow-lg group-hover:scale-125 transition-transform duration-300`}>
                    {exp.isCurrent ? (
                      <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-white"></span>
                    )}
                  </div>
                </div>

                {/* Experience Card */}
                <div className="relative">
                  {/* Glowing border backdrop on hover */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${exp.gradient} rounded-3xl blur opacity-15 group-hover:opacity-50 transition duration-400`}></div>

                  <div className="relative bg-gray-950/90 rounded-3xl p-6 sm:p-8 border border-gray-800 backdrop-blur-xl shadow-xl group-hover:border-gray-700 transition-all">
                    {/* Header: Title, Company, Badges, Period */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-5 border-b border-gray-800/80">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5 mb-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {exp.title}
                          </h3>
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${exp.typeBadge}`}>
                            {exp.type}
                          </span>
                          {exp.isCurrent && (
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                              Current Role
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                          <div className="flex items-center gap-1.5 font-semibold text-gray-200">
                            <Building2 size={16} className="text-blue-400" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-400 text-xs sm:text-sm">
                            <MapPin size={14} className="text-emerald-400" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Period Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-900 border border-gray-800 text-xs font-medium text-gray-300 shrink-0 self-start">
                        <Calendar size={14} className="text-purple-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <div className="py-5">
                      <div className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-3">
                        Key Responsibilities & Impact
                      </div>
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-gray-300 text-sm sm:text-base leading-relaxed flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-1" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Technologies Footer */}
                    <div className="pt-4 border-t border-gray-800/80 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-gray-400 mr-2">Key Tech:</span>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-gray-900 text-gray-300 rounded-lg text-xs font-medium border border-gray-800 shadow-sm hover:border-blue-500/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
