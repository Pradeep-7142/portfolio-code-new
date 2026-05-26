import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Download, FileText, Eye } from 'lucide-react';

const resumeUrl = '/resume.pdf';
const resumeFilename = 'resume.pdf';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="resume" className="py-20 bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-gray-900 rounded-lg p-8 md:p-12 border border-gray-700">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
                  <FileText size={40} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Download My Resume
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Get a comprehensive overview of my skills, experience, projects, and achievements.
                  Available in PDF format for easy viewing and printing.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-purple-400 mb-2">2+</div>
                  <div className="text-sm text-gray-400">Internships</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-pink-400 mb-2">5+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={resumeUrl}
                  download={resumeFilename}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-3"
                  aria-label="Download resume PDF"
                >
                  <Download size={20} />
                  Download PDF
                </motion.a>
                <motion.a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-500 text-white rounded-lg font-semibold hover:bg-purple-500/10 transition-all flex items-center justify-center gap-3"
                  aria-label="Preview resume PDF"
                >
                  <Eye size={20} />
                  Preview Resume
                </motion.a>
              </div>

              <div className="mt-8 text-center text-sm text-gray-500">
                Last updated: May 2026
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
