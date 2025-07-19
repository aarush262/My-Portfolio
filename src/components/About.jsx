import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/Me2.PNG';

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-around px-6 md:px-10 lg:px-16 py-20 bg-white overflow-hidden"
    >
      {/* 🔮 Background Shape */}
      <div className="absolute bottom-[-80px] left-[-60px] w-[300px] h-[300px] bg-purple-100 rounded-full blur-3xl opacity-30 -z-10"></div>

      {/* 👤 Left: Image with Glowing Circle */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0"
      >
        <div
          className="group relative w-[450px] h-[450px] md:w-[550px] md:h-[550px] rounded-full 
          bg-[#C900D9] flex items-center justify-center shadow-2xl transition-all duration-500 
          hover:shadow-[0_0_60px_20px_rgba(201,0,217,0.4)] hover:rotate-1"
        >
          <img
            src={aboutImg}
            alt="About Me"
            className="w-[300px] md:w-[420px] object-contain 
            transition-all duration-500 group-hover:scale-110 group-hover:-rotate-1"
          />
        </div>
      </motion.div>

      {/* 📝 Right: Text */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 text-center md:text-left space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          About <span className="text-purple-600">Me</span>
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-xl">
          I'm a passionate full-stack web developer with a focus on building user-friendly and scalable web applications. I enjoy crafting clean and responsive UI, writing maintainable backend logic, and collaborating on real-world projects. Skilled in Python, JavaScript, React, and MongoDB, I strive to turn ideas into impactful digital experiences.
        </p>

        {/* 🧠 Tech Stack */}
        <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
          {[
            "Python",
            "SQL",
            "Flask",
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB",
            "TailwindCSS",
            "Express",
          ].map((tech, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold 
              animate-float hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;