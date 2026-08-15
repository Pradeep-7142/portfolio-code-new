import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Github, Trophy, ExternalLink, Award } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const CodingProfiles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const profiles = [
    {
      name: 'LeetCode',
      handle: '@ExcitedToCode',
      icon: Trophy,
      badge: '644+ Solved',
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      stats: [
        { label: 'Problems Solved', value: 644, suffix: '+' },
        { label: 'Contest Rating', value: 1456, suffix: '' },
        { label: 'Global Rank', value: 108609, suffix: '' },
      ],
      link: 'https://leetcode.com/u/ExcitedToCode/',
      gradient: 'from-amber-500 via-orange-500 to-yellow-500',
      btnGradient: 'from-amber-500 to-orange-600',
      glowColor: 'from-amber-500/30 to-orange-500/30',
    },
    {
      name: 'GeeksforGeeks',
      handle: '@pradeept6s8',
      icon: Award,
      badge: 'Rank #21 (SRMU)',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      stats: [
        { label: 'Problems Solved', value: 188, suffix: '+' },
        { label: 'Institute Rank', value: 21, suffix: '' },
        { label: 'Coding Score', value: 620, suffix: '+' },
      ],
      link: 'https://www.geeksforgeeks.org/profile/pradeept6s8',
      gradient: 'from-emerald-500 via-teal-500 to-green-500',
      btnGradient: 'from-emerald-500 to-teal-600',
      glowColor: 'from-emerald-500/30 to-teal-500/30',
    },
    {
      name: 'GitHub',
      handle: '@Pradeep-7142',
      icon: Github,
      badge: '400+ Contributions',
      badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
      stats: [
        { label: 'Public Repos', value: 17, suffix: '+' },
        { label: 'Contributions', value: 400, suffix: '+' },
        { label: 'Featured Apps', value: 4, suffix: '+' },
      ],
      link: 'https://github.com/Pradeep-7142',
      gradient: 'from-indigo-500 via-blue-500 to-purple-500',
      btnGradient: 'from-indigo-600 to-purple-600',
      glowColor: 'from-indigo-500/30 to-purple-500/30',
    },
  ];

  return (
    <section id="profiles" className="py-24 bg-gray-950/70 relative overflow-hidden" ref={ref}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-3">
            <span>ALGORITHMIC ACHIEVEMENTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Coding <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Profiles</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Demonstrated problem-solving competence with 800+ solved algorithmic challenges across leading competitive programming platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={profile.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="group relative h-full flex flex-col"
              >
                {/* Glow Backdrop */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${profile.gradient} rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-400`}></div>

                {/* Card Interior */}
                <div className="relative bg-gray-900/90 rounded-3xl p-6 sm:p-8 border border-gray-800 backdrop-blur-xl h-full flex flex-col justify-between group-hover:border-gray-700 transition-all shadow-xl">
                  <div>
                    {/* Header with Icon, Name, and Badge */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${profile.gradient} flex items-center justify-center text-white shadow-lg shadow-black/30`}>
                        <Icon size={26} />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${profile.badgeColor}`}>
                        {profile.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-0.5">{profile.name}</h3>
                      <p className="text-xs text-gray-400 font-mono mb-6">{profile.handle}</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {profile.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 rounded-xl bg-gray-800/70 border border-gray-700/60"
                        >
                          <span className="text-xs font-medium text-gray-400">{stat.label}</span>
                          <span className="text-base font-bold text-white">
                            <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visit Profile Action Button */}
                  <motion.a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`mt-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r ${profile.btnGradient} text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-black/30 transition-all`}
                  >
                    <span>View Profile</span>
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
