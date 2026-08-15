import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Server, Monitor, Database, Wrench, Cpu } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      category: 'Languages',
      description: 'Core programming and database query languages.',
      icon: Code2,
      skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
      gradient: 'from-blue-500 to-indigo-500',
      badgeColor: 'text-blue-400 border-blue-500/20 bg-blue-500/10',
    },
    {
      category: 'Backend',
      description: 'Frameworks and protocols for scalable backend services.',
      icon: Server,
      skills: ['Spring Boot', 'Spring Security', 'Hibernate/JPA', 'Flask', 'REST APIs', 'WebSockets'],
      gradient: 'from-purple-500 to-pink-500',
      badgeColor: 'text-purple-400 border-purple-500/20 bg-purple-500/10',
    },
    {
      category: 'Frontend',
      description: 'Modern libraries and tools for interactive web UI.',
      icon: Monitor,
      skills: ['React', 'Tailwind CSS', 'HTML/CSS', 'Vite'],
      gradient: 'from-cyan-500 to-blue-500',
      badgeColor: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/10',
    },
    {
      category: 'Databases & Caching',
      description: 'Data storage, caching layers, and persistence engines.',
      icon: Database,
      skills: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB'],
      gradient: 'from-emerald-500 to-teal-500',
      badgeColor: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10',
    },
    {
      category: 'DevOps & Tools',
      description: 'Containerization, cloud storage, reverse proxy, and tools.',
      icon: Wrench,
      skills: ['Docker', 'AWS S3', 'Git/GitHub', 'Postman', 'Nginx'],
      gradient: 'from-amber-500 to-orange-500',
      badgeColor: 'text-amber-400 border-amber-500/20 bg-amber-500/10',
    },
    {
      category: 'CS Fundamentals',
      description: 'Algorithmic paradigms and software engineering foundations.',
      icon: Cpu,
      skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS'],
      gradient: 'from-rose-500 to-red-500',
      badgeColor: 'text-rose-400 border-rose-500/20 bg-rose-500/10',
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-900 relative overflow-hidden" ref={ref}>
      {/* Subtle Glow backdrop */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 mb-3">
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Categorized core competencies honed through production projects, algorithmic problem-solving, and professional software engineering.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative h-full"
              >
                {/* Glowing border backdrop */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-300`}></div>

                {/* Card Interior */}
                <div className="relative flex h-full flex-col justify-between bg-gray-900/90 border border-gray-800 rounded-3xl p-6 sm:p-7 shadow-xl backdrop-blur-xl group-hover:border-gray-700 transition-all">
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3.5">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-lg shadow-black/30 shrink-0`}>
                          <Icon size={22} />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{category.category}</h3>
                          <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{category.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Skills Pills Container */}
                  <div className="flex flex-wrap gap-2.5 pt-4 border-t border-gray-800/80">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-gray-700/80 bg-gray-800/80 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-200 shadow-sm hover:border-blue-500/50 hover:bg-gray-800 hover:text-white transition-all cursor-default"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`}></span>
                        {skill}
                      </motion.span>
                    ))}
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

export default Skills;
