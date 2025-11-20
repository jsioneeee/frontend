"use client";

import Header from "@/components/ui/header";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white font-sans">
      <Header />

      <main className="flex flex-col items-center pt-20 px-4">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Contact Me
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-zinc-400 mb-10 text-center max-w-xl"
        >
          Feel free to reach out for collaborations, questions, or anything
          you'd like to talk about!
        </motion.p>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl shadow-lg max-w-xl w-full"
        >
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-400" size={28} />
              <p className="text-lg">jsiona@gbox.ncf.edu.ph</p>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-green-400" size={28} />
              <p className="text-lg">+63 907 175 9173</p>
            </div>

            <hr className="border-white/20" />

            {/* Social Links */}
            <div className="flex items-center space-x-6 justify-center mt-4">
              <a href="#" className="text-blue-500 hover:scale-110 transition">
                <FaFacebook size={28} />
              </a>

              <a href="#" className="text-gray-200 hover:scale-110 transition">
                <FaGithub size={28} />
              </a>

              <a href="#" className="text-blue-300 hover:scale-110 transition">
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 text-zinc-500 text-center"
        >
          I'll get back to you as soon as possible!
        </motion.p>
      </main>
    </div>
  );
}
