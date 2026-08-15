import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Download, FileText, Eye, CheckCircle2 } from 'lucide-react';

const resumeUrl = '/resume.pdf';
const resumeFilename = 'Pradeep_Kumar_Resume.pdf';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const metrics = [
    { label: 'Core Technologies', value: '15+', color: 'text-blue-400' },
    { label: 'Industry Roles', value: '3', color: 'text-emerald-400' },
    { label: 'Production Apps', value: '4+', color: 'text-purple-400' },
    { label: 'DSA Solved', value: '800+', color: 'text-amber-400' },
  ];

  return (
    <section id="resume" className="py-24 bg-gray-900 relative overflow-hidden" ref={ref}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            {/* Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

            {/* Main Card */}
            <div className="relative bg-gray-950/90 rounded-3xl p-8 sm:p-12 border border-gray-800 backdrop-blur-xl shadow-2xl">
              {/* Title & Description */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-[2px] mb-6 shadow-xl shadow-blue-500/20">
                  <div className="w-full h-full bg-gray-900 rounded-[14px] flex items-center justify-center">
                    <FileText size={36} className="text-blue-400" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
                  Get a Full Overview of My Career
                </h3>
                <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                  Includes detailed architectural highlights of my software engineering experience at Beans.ai and ZingHR, complete project breakdowns, and competitive programming achievements.
                </p>
              </div>

              {/* 4 Metric Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="text-center p-4 bg-gray-900/80 rounded-2xl border border-gray-800/80 shadow-sm"
                  >
                    <div className={`text-2xl sm:text-3xl font-extrabold ${metric.color} mb-1`}>
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-400 font-medium">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={resumeUrl}
                  download={resumeFilename}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2.5 text-sm sm:text-base"
                  aria-label="Download resume PDF"
                >
                  <Download size={20} />
                  <span>Download PDF</span>
                </motion.a>

                <motion.a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-8 py-4 border border-gray-700 bg-gray-900/90 hover:bg-gray-800 text-gray-200 hover:text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2.5 text-sm sm:text-base shadow-sm"
                  aria-label="Preview resume PDF"
                >
                  <Eye size={20} className="text-purple-400" />
                  <span>Preview in Browser</span>
                </motion.a>
              </div>

              <div className="mt-8 text-center text-xs text-gray-500 flex items-center justify-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-400" />
                <span>Verified PDF Document</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
