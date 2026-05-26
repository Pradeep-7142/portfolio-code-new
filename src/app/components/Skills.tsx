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
      description: 'Programming languages I am comfortable with.',
      icon: Code2,
      skills: ['Java', 'JavaScript', 'Python', 'SQL'],
    },
    {
      category: 'Backend',
      description: 'Technologies I use to build robust backend systems.',
      icon: Server,
      skills: ['Spring Boot', 'REST APIs', 'Hibernate/JPA'],
    },
    {
      category: 'Frontend',
      description: 'Technologies I use to build modern user interfaces.',
      icon: Monitor,
      skills: ['React', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      category: 'Databases',
      description: 'Databases I work with for storing and managing data.',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: 'Tools',
      description: 'Tools and platforms that boost my productivity.',
      icon: Wrench,
      skills: ['Git/GitHub', 'Postman'],
    },
    {
      category: 'CS Fundamentals',
      description: 'Core computer science concepts I am strong at.',
      icon: Cpu,
      skills: ['Data Structures', 'Algorithms', 'OOP'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative h-full"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative flex h-full flex-col justify-between bg-gray-800 border border-gray-700 rounded-3xl p-6 shadow-2xl shadow-black/20 min-h-[18rem]">
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                        <p className="text-sm text-gray-400">{category.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span key={skill} className="inline-flex items-center rounded-full border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-gray-200 shadow-sm shadow-black/10">
                        {skill}
                      </span>
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
