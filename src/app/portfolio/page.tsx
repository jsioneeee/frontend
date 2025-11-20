"use client";

import Header from "@/components/ui/header";
import { motion } from "framer-motion";
import { FaGamepad, FaBed, FaCode, FaUserShield } from "react-icons/fa6";
import { GiEightBall } from "react-icons/gi";

export default function Hobby() {
  const hobbies = [
    {
      icon: <FaGamepad size={32} />,
      title: "Online Gaming",
      desc: "Competitive and fun online games.",
    },
    {
      icon: <FaBed size={32} />,
      title: "Sleeping",
      desc: "Relaxing and recharging for productivity.",
    },
    {
      icon: <FaCode size={32} />,
      title: "Coding",
      desc: "Building cool and useful projects.",
    },
    {
      icon: <FaUserShield size={32} />,
      title: "Ethical Hacking",
      desc: "Practicing cybersecurity with Kali Linux.",
    },
    {
      icon: <GiEightBall size={32} />,
      title: "Billiards",
      desc: "Casual and competitive billiard games.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white font-sans">
      <Header />

      <main className="flex flex-col items-center justify-start pt-20 px-4">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Jeremy's Hobbies
        </motion.h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, translateY: -6 }}
              className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 
              shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="flex items-center justify-center mb-4 text-purple-300">
                {hobby.icon}
              </div>

              <h2 className="text-2xl font-semibold mb-2">{hobby.title}</h2>
              <p className="text-zinc-300">{hobby.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 text-zinc-400 text-center"
        >
          More features and pages will be added soon to my portfolio.
        </motion.p>
      </main>
    </div>
  );
}
