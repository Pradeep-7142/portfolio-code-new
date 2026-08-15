import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, MapPin, Phone, Send, Copy, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [copied, setCopied] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('Full-time Opportunity');

  const email = 'pradeep080805@gmail.com';
  const phone = '+91 9026714211';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const subjectOptions = [
    'Full-time Opportunity',
    'Project Collaboration',
    'Freelance Work',
    'General Inquiry',
  ];

  return (
    <section id="contact" className="py-24 bg-gray-950/80 relative overflow-hidden" ref={ref}>
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            I’m actively looking for full-time Software Engineer opportunities. Let's discuss how my backend and full-stack engineering skills can add value to your team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-4"
          >
            {/* Email Card (Click to Copy) */}
            <motion.div
              whileHover={{ y: -4 }}
              onClick={handleCopyEmail}
              className="p-6 rounded-2xl bg-gray-900/90 border border-gray-800 backdrop-blur-xl hover:border-blue-500/50 transition-all cursor-pointer group shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-medium block">Direct Email</span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                      {email}
                    </span>
                  </div>
                </div>
                <button
                  aria-label="Copy email"
                  className="p-2 rounded-lg bg-gray-800 text-gray-400 group-hover:text-white group-hover:bg-gray-700 transition-colors"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
            </motion.div>

            {/* Phone Card (Click to Call) */}
            <motion.a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-gray-900/90 border border-gray-800 backdrop-blur-xl hover:border-purple-500/50 transition-all group shadow-lg block"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-medium block">Phone Number</span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-purple-400 transition-colors">
                      {phone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </motion.a>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-gray-900/90 border border-gray-800 backdrop-blur-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-medium block">Location & Relocation</span>
                  <span className="text-sm sm:text-base font-bold text-white">
                    Noida, India <span className="text-xs font-normal text-emerald-400">(Open to Remote / Relocation)</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Quick Send */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition duration-500"></div>

              <div className="relative bg-gray-900/90 rounded-3xl p-8 sm:p-10 border border-gray-800 backdrop-blur-xl h-full flex flex-col justify-between shadow-2xl">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Start a Conversation</h3>
                      <p className="text-xs text-gray-400">Select a topic to generate a pre-filled direct email</p>
                    </div>
                  </div>

                  {/* Preset Subject Selector */}
                  <div className="mb-6">
                    <label className="text-xs uppercase tracking-wider font-semibold text-gray-400 block mb-3">
                      Select Topic:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {subjectOptions.map((topic) => (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => setSelectedSubject(topic)}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                            selectedSubject === topic
                              ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 border border-blue-400'
                              : 'bg-gray-800/80 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-700/60'
                          }`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Clicking below will launch your default email client with my address and chosen subject filled in. Feel free to attach JD or details!
                  </p>
                </div>

                {/* Email Me Button */}
                <motion.a
                  href={`mailto:${email}?subject=${encodeURIComponent(selectedSubject + ' - Pradeep Kumar')}&body=${encodeURIComponent(
                    `Hi Pradeep,\n\nI came across your portfolio and would like to connect regarding ${selectedSubject}.\n\nBest regards,`
                  )}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white font-bold text-center flex items-center justify-center gap-2.5 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all text-base"
                >
                  <Send size={18} />
                  <span>Send Email ({selectedSubject})</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
