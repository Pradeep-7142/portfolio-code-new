import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Code2, Trophy, Star } from 'lucide-react';

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

  return <span ref={ref}>{count}{suffix}</span>;
};

const CodingProfiles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const profiles = [
    {
      name: 'GitHub',
      icon: Code2,
      stats: [
        { label: 'Repositories', value: 17, suffix: '+' },
        { label: 'Contributions', value: 400, suffix: '+' },
      ],
      link: 'https://github.com/Pradeep-7142',
      gradient: 'from-gray-700 to-gray-900',
      color: 'text-white',
    },
    {
      name: 'LeetCode',
      icon: Trophy,
      stats: [
        { label: 'Questions', value: 644, suffix: '+' },
        { label: 'Contest Rating', value: 1456, suffix: '' },
        { label: 'Profile Rank', value: 108609, suffix: '' },
      ],
      link: 'https://leetcode.com/u/ExcitedToCode/',
      gradient: 'from-orange-500 to-yellow-500',
      color: 'text-orange-400',
    },
    {
      name: 'GFG',
      icon: Star,
      stats: [
        { label: 'Problems Solved', value: 188, suffix: '+' },
        { label: 'Institute Rank', value: 21, suffix: '' },
      ],
      link: 'https://www.geeksforgeeks.org/profile/pradeept6s8',
      gradient: 'from-green-500 to-teal-500',
      color: 'text-green-400',
    },
  ];

  return (
    <section id="profiles" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Coding <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Profiles</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-stretch">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group w-full"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${profile.gradient} rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300`}></div>
              <div className="relative bg-gray-800 rounded-lg p-6 border border-gray-700 h-full flex flex-col">
                <div className={`w-16 h-16 bg-gradient-to-r ${profile.gradient} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <profile.icon className="text-white" size={32} />
                </div>

                <h3 className={`text-2xl font-bold mb-6 text-center ${profile.color}`}>
                  {profile.name}
                </h3>

                <div className="space-y-4 flex-grow">
                  {profile.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <motion.a
                  href={profile.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-6 px-6 py-3 bg-gradient-to-r ${profile.gradient} text-white rounded-lg font-semibold text-center block`}
                >
                  View Profile
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
