import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Database, Brain, Rocket } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Building responsive frontend applications with React and scalable backend APIs using Java and Spring Boot',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Strong knowledge of SQL databases with experience in MySQL, PostgreSQL, and basic MongoDB',
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Solved 500+ problems on LeetCode and 170+ on GeeksforGeeks across multiple topics and platforms',
    },
    {
      icon: Rocket,
      title: 'Quick Learner',
      description: 'Always eager to learn new technologies and frameworks',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-gray-800 rounded-lg p-8 border border-gray-700">
                <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                  <Code2 size={120} className="text-blue-400 opacity-50" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I’m a final-year B.Tech CSE student at Shri Ramswaroop Memorial University and currently working as a Software Development Engineer at Beans.ai. I enjoy solving real-world problems through code and have a strong foundation in Java, JavaScript, React, MySQL, and PostgreSQL.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I have solved 500+ problems on LeetCode and 170+ on GeeksforGeeks, which helped me build strong problem-solving and logical thinking skills. I also completed internships at ZingHR and Beans.ai during my second year, gaining early industry experience. Along with academics, I completed a professional certificate from Coursera to improve my technical skills further.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I love learning new technologies, building useful applications, and turning ideas into practical solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-gray-800 p-6 rounded-lg border border-gray-700 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
