import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  Frontend: [
    { name: 'React', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
  ],
  Backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 80 },
    { name: 'Python', level: 85 },
    { name: 'Flask', level: 75 },
  ],
  'Database & Tools': [
    { name: 'MongoDB', level: 85 },
    { name: 'SQL', level: 80 },
    { name: 'Git', level: 95 },
    { name: 'Postman', level: 80 },
  ],
};

const allTechs = [
  'React',
  'Node.js',
  'Python',
  'MongoDB',
  'Tailwind CSS',
  'Express.js',
  'Flask',
  'SQL',
  'JavaScript',
  'HTML',
  'CSS',
  'Git',
  'Postman',
];

const getRandomFloatDelay = () => {
  const delay = Math.random() * 3 + 1; // between 1s to 4s
  return `${delay}s`;
};

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="py-20 px-6 md:px-16 bg-gradient-to-br from-white via-purple-50 to-purple-100"
    >
      {/* 🔥 Heading */}
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-purple-800 bg-clip-text text-transparent"
        >
          Skills & <span className="text-black">Expertise</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto mt-4"
        >
          A comprehensive toolkit of modern technologies and frameworks I use to build exceptional web experiences.
        </motion.p>
      </div>

      {/* 🎯 Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.entries(skills).map(([category, skillsArr], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: false }}
            className="bg-white rounded-xl p-6 shadow-md border border-purple-200"
          >
            <h3 className="text-xl font-semibold text-purple-700 mb-4 text-center">{category}</h3>
            {skillsArr.map((skill, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-purple-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-purple-950"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* 🧠 Technologies I Work With */}
      <div className="text-center mt-16">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-gray-800 mb-6"
        >
          Technologies I Work With
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {allTechs.map((tech, idx) => (
            <motion.span
              key={idx}
              initial={{ y: 0 }}
              animate={{ y: [-2, 2, -2] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'mirror',
                delay: parseFloat(getRandomFloatDelay()),
              }}
              className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium shadow-md 
                         hover:bg-purple-200 transition transform hover:scale-105"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;