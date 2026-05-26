import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  // Intro content replaced with static heading, subtitle and description

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Pradeep-7142', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/pradeep-kumar-693418292', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:pradeep080805@gmial.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>

      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          <div className="md:w-3/4 w-full text-left flex flex-col justify-center md:py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Pradeep Kumar
              </h1>
              <h3 className="text-lg md:text-xl text-blue-400 mb-3">
                Software Engineer | Java & React Developer | Problem Solver
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg text-gray-400 max-w-3xl mb-6"
            >
              Final-year Computer Science student and Software Development Engineer with experience in building scalable backend systems, modern web applications, and solving real-world problems through code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-6"
            >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-purple-500 text-white rounded-full font-semibold hover:bg-purple-500/10 transition-all flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={26} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div className="md:w-1/4 w-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="w-full h-72 md:h-[22rem] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 relative transform transition-all duration-500 hover:scale-105"
            >
              <img src="/pradeep.png" alt="Pradeep Kumar" className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent mix-blend-multiply pointer-events-none"></div>
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-3xl pointer-events-none"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
