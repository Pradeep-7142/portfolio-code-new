import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Software Development Engineer',
      company: 'Beans.ai | Noida',
      period: 'May 2026 – Present',
      type: 'Full-time',
      responsibilities: [
        'Working on Data Ops and QA to improve data quality, reliability, and pipeline efficiency.',
        'Building automated validation and monitoring tools for data workflows.',
        'Collaborating with cross-functional teams to detect, resolve, and prevent data issues.',
        'Using React, JavaScript, Python, SQL, and automation techniques to streamline quality checks.',
      ],
      gradient: 'from-green-500 to-cyan-500',
    },
    {
      title: 'Software Developer Intern',
      company: 'Beans.ai | Noida',
      period: 'May 2025 – Aug 2025',
      type: 'Internship',
      responsibilities: [
        'Built and improved React-based web features with sorting, drag-and-drop, and optimized table handling for better user experience.',
        'Improved frontend performance using virtualization techniques to efficiently manage large datasets.',
        'Migrated and optimized 20+ MUI components from v4 to v5, improving scalability and UI consistency.',
        'Worked with React.js, JavaScript, Material UI, React DnD, React Window, Git, and GitHub.',
      ],
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'RPA Intern',
      company: 'ZingHR | Mumbai',
      period: 'May 2024 – Aug 2024',
      type: 'Internship',
      responsibilities: [
        'Developed automation workflows for employee data processing, reducing manual work and improving efficiency.',
        'Built monitoring and error-tracking systems to simplify debugging and issue resolution.',
        'Implemented PAN and Aadhaar validation checks to improve data accuracy and validation processes.',
        'Worked with Python, Selenium, PyAutoGUI, and Microsoft Excel for automation tasks.',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 w-full">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative group"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${exp.gradient} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300`}></div>
                    <div className="relative bg-gray-900 p-6 rounded-lg border border-gray-700">
                      <div className={`w-full h-1 bg-gradient-to-r ${exp.gradient} rounded-full mb-4`}></div>

                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                          <p className="text-blue-400 font-semibold">{exp.company}</p>
                        </div>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-400 mb-4">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>

                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-gray-400 flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className={`w-12 h-12 bg-gradient-to-r ${exp.gradient} rounded-full flex items-center justify-center border-4 border-gray-800 shadow-lg`}
                  >
                    <Briefcase className="text-white" size={20} />
                  </motion.div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
