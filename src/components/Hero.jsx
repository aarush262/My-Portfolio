import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFileAlt } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

import myPhoto from '../assets/Me.PNG';
import htmlIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css.png';
import jsIcon from '../assets/icons/js.png';
import reactIcon from '../assets/icons/react.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-white min-h-screen flex flex-col-reverse md:flex-row items-center justify-around px-4 md:px-6 lg:px-10 py-12"
    >
      {/* 🔮 Purple Blur Behind Image */}
      <div className="absolute -z-10 w-[450px] h-[450px] bg-purple-200 rounded-full blur-3xl top-20 right-10 opacity-50"></div>

      {/* 📝 Left: Animated Text */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center md:text-left md:w-1/2 space-y-5"
      >
        {/* ✨ Typing Line with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="font-semibold tracking-wider uppercase"
        >
          <TypeAnimation
            sequence={[
              '<Frontend Developer />',
              2000,
              '',
              500,
              '<Full Stack Developer />',
              2000,
              '',
              500,
              '<Tech Enthusiast />',
              2000,
              '',
              500,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
            cursor={true}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-black font-bold text-lg sm:text-xl"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[3.8rem] md:text-[4.5rem] font-extrabold text-gray-900 leading-[1.1]"
        >
          Hi, I'm <span className="text-purple-600">Bobby</span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[2.3rem] md:text-[2.8rem] font-bold text-gray-800"
        >
          SOFTWARE <span className="text-purple-600">DEVELOPER</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-gray-600 text-[1.4rem] md:text-[1.55rem] max-w-xl mx-auto md:mx-0"
        >
          I build beautiful, responsive websites and web apps with modern tech and great UI.
        </motion.p>

        {/* Tech Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex gap-4 mt-4 justify-center md:justify-start"
        >
          <img src={htmlIcon} alt="HTML" className="w-8 h-8" />
          <img src={cssIcon} alt="CSS" className="w-8 h-8" />
          <img src={jsIcon} alt="JavaScript" className="w-8 h-8" />
          <img src={reactIcon} alt="React" className="w-8 h-8" />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6"
        >
          <a
            href="#projects"
            className="px-7 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
          >
            Projects 🚀
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition"
          >
            Hire Me 💼
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex gap-6 justify-center md:justify-start mt-6 text-gray-600"
        >
          <a
            href="https://github.com/aarush262"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 hover:text-black"
            title="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/bobby-yadav-1115682ba/"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 hover:text-[#0A66C2]"
            title="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 hover:text-[#E1306C]"
            title="Instagram"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://drive.google.com/file/d/1-c2OeINlh5D6o9rUlBktfDpI5l9ZHoNh/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 hover:text-purple-600"
            title="Resume"
          >
            <FaFileAlt className="text-2xl" />
          </a>
        </motion.div>
      </motion.div>

      {/* 🧍 Right: Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="md:w-1/2 mb-10 md:mb-0 flex justify-center md:justify-end"
      >
        <img
          src={myPhoto}
          alt="Aarush"
          className="w-[460px] md:w-[580px] lg:w-[620px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
        />
      </motion.div>

      {/* ⬇ Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm animate-bounce">
        ↓ Scroll Down
      </div>
    </section>
  );
};

export default Hero;