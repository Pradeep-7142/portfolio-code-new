import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Pradeep-7142', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/pradeep-kumar-693418292', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:pradeep080805@gmail.com', label: 'Email' },
  ];

  const coreTech = [
    'Java 21',
    'Spring Boot 3',
    'React',
    'TypeScript',
    'Python',
    'PostgreSQL',
    'Redis',
    'Docker',
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-purple-600/15 to-pink-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Hero Content */}
          <div className="w-full lg:w-3/5 text-left flex flex-col justify-center">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex"
            >
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gray-900/90 border border-gray-700/80 text-xs font-medium text-gray-300 shadow-lg shadow-black/20 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-gray-200 font-semibold">SDE @ Beans.ai</span>
                <span className="text-gray-500">•</span>
                <span className="text-blue-400">Open to New Opportunities</span>
              </div>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-500 bg-clip-text text-transparent">
                  Pradeep Kumar
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-gray-300">
                Software Engineer | Full-Stack & Backend Systems Developer
              </p>
            </motion.div>

            {/* Narrative Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mb-6"
            >
              Final-year Computer Science engineer crafting resilient backend architectures, AI-driven automation workflows, and high-performance React frontends. Passionate about solving complex algorithms and shipping production-grade applications.
            </motion.p>

            {/* Core Tech Quick Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <div className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2.5">
                Primary Technologies
              </div>
              <div className="flex flex-wrap gap-2">
                {coreTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-800/80 text-gray-300 border border-gray-700/60 shadow-sm hover:border-blue-500/50 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl border border-gray-700 bg-gray-900/80 hover:bg-gray-800 text-gray-200 font-semibold hover:text-white transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Download size={18} className="text-purple-400" />
                <span>Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 text-gray-400"
            >
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">Connect:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-xl bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-blue-400 border border-gray-700/80 shadow-md transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Profile Card */}
          <div className="w-full lg:w-2/5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group w-full max-w-sm"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-700/80 shadow-2xl p-3">
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 aspect-[4/5] max-h-[380px]">
                  <img
                    src="/pradeep.png"
                    alt="Pradeep Kumar"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
