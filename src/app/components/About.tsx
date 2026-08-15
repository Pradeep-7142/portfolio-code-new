import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Database, Brain, Rocket, GraduationCap, Briefcase, Award, CheckCircle2 } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { label: 'DSA Problems Solved', value: '800+', detail: 'LeetCode & GFG' },
    { label: 'Industry Roles', value: '3', detail: '1 SDE + 2 Internships' },
    { label: 'Full-Stack Platforms', value: '4+', detail: 'Production-grade apps' },
    { label: 'Core Tech Stack', value: '15+', detail: 'Languages & Tools' },
  ];

  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Architecture',
      description: 'Building responsive React/TypeScript frontends seamlessly connected to Java/Spring Boot & Flask microservices.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Database,
      title: 'Scalable Databases & Caching',
      description: 'Architecting high-integrity schemas with PostgreSQL/MySQL, Redis caching layers, and optimized indexing.',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Brain,
      title: 'Algorithmic Problem Solving',
      description: 'Consistent competitive programmer with 640+ LeetCode & 180+ GFG solutions in data structures and graph algorithms.',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: Rocket,
      title: 'Engineering Agility & DevOps',
      description: 'Deploying containerized multi-container setups using Docker, Docker Compose, Nginx, and cloud storage (AWS S3).',
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-950/70 relative overflow-hidden" ref={ref}>
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Two-Column Story & Snapshot */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left: Snapshot Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-gray-900/90 rounded-2xl p-6 sm:p-8 border border-gray-800 backdrop-blur-xl shadow-2xl space-y-6">
                <div className="flex items-center gap-4 pb-5 border-b border-gray-800">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-[2px] shadow-lg shadow-blue-500/20">
                    <div className="w-full h-full bg-gray-900 rounded-[14px] flex items-center justify-center">
                      <Code2 className="text-blue-400" size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Developer Snapshot</h3>
                    <p className="text-xs text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Active SDE & Problem Solver
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Briefcase className="text-blue-400 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="text-gray-400 text-xs block">Current Role</span>
                      <span className="text-gray-200 font-semibold">Software Development Engineer</span>
                      <span className="text-blue-400 text-xs block">@ Beans.ai (Noida)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <GraduationCap className="text-purple-400 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="text-gray-400 text-xs block">Academics</span>
                      <span className="text-gray-200 font-semibold">B.Tech in Computer Science</span>
                      <span className="text-gray-400 text-xs block">SRMU (Final Year)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="text-amber-400 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="text-gray-400 text-xs block">Competitive Coding</span>
                      <span className="text-gray-200 font-semibold">640+ LeetCode | 180+ GFG</span>
                      <span className="text-amber-400/90 text-xs block">Institute Rank 21 (GFG)</span>
                    </div>
                  </div>
                </div>

                {/* Mini Stat Pills */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-800">
                  <div className="bg-gray-800/60 rounded-xl p-3 text-center border border-gray-700/50">
                    <div className="text-xl font-bold text-white">800+</div>
                    <div className="text-[11px] text-gray-400">DSA Solved</div>
                  </div>
                  <div className="bg-gray-800/60 rounded-xl p-3 text-center border border-gray-700/50">
                    <div className="text-xl font-bold text-blue-400">4+</div>
                    <div className="text-[11px] text-gray-400">Full-Stack Apps</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 space-y-5"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Passionate about building <span className="text-blue-400">impactful systems</span> and solving tough computational problems.
            </h3>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I’m a final-year Computer Science engineering student and currently working as a <strong className="text-white font-semibold">Software Development Engineer at Beans.ai</strong>. I specialize in designing scalable backend microservices with Java and Spring Boot, coupled with high-speed, modern React frontends.
            </p>

            <p className="text-gray-400 text-base leading-relaxed">
              Over the course of my journey, I have solved <span className="text-blue-400 font-medium">800+ algorithmic challenges</span> across LeetCode and GeeksforGeeks, which instilled a deep intuition for data structures, optimization, and clean system architecture.
            </p>

            <p className="text-gray-400 text-base leading-relaxed">
              Prior to my current role, I completed software engineering internships at <strong className="text-white font-medium">Beans.ai</strong> and <strong className="text-white font-medium">ZingHR</strong>, engineering frontend performance optimizations, large dataset virtualization, and robotic process automation tools that saved hours of manual effort.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-blue-400" />
                <span>Scalable Backend APIs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-purple-400" />
                <span>Enterprise Workflows & RBAC</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-400" />
                <span>Containerized Microservices</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative group h-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-15 group-hover:opacity-45 transition duration-300"></div>
              <div className="relative bg-gray-900/90 p-6 rounded-2xl border border-gray-800 h-full flex flex-col justify-between hover:border-gray-700 transition-colors">
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white shadow-lg mb-5`}>
                    <item.icon size={22} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
