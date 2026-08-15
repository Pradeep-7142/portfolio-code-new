import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart, ArrowUp, Terminal, Share2 } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Pradeep-7142', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/pradeep-kumar-693418292', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:pradeep080805@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Profiles', href: '#profiles' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand & Bio */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-base shadow-lg shadow-blue-500/20">
                <span>PK</span>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent tracking-tight">
                Pradeep Kumar
              </span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 max-w-sm">
              Software Development Engineer passionate about building high-concurrency backend microservices, resilient data platforms, and intuitive interfaces.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Full-time Roles</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h3 className="text-sm uppercase tracking-wider font-bold text-white mb-4 flex items-center gap-2">
              <Terminal size={16} className="text-blue-400" />
              <span>Navigation</span>
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {quickLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-3">
            <h3 className="text-sm uppercase tracking-wider font-bold text-white mb-4 flex items-center gap-2">
              <Share2 size={16} className="text-purple-400" />
              <span>Social Connectivity</span>
            </h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 bg-gray-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-xl flex items-center justify-center text-gray-300 hover:text-white border border-gray-800 hover:border-transparent transition-all shadow-md"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-gray-500">
              Response time: typically within 24 hours.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800/80 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p className="flex items-center gap-1.5">
            Designed & Engineered with <Heart className="text-red-500" size={14} fill="currentColor" /> by Pradeep Kumar
          </p>
          <div className="flex items-center gap-6">
            <p>&copy; {new Date().getFullYear()} Pradeep Kumar. All rights reserved.</p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
