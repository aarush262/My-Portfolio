import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import project1 from '../assets/projects/splitter.png';
import project2 from '../assets/projects/workerbuild.png';

const projects = [
  {
    image: project1,
    title: 'Smart Expense Splitter',
    description:
      'A full-stack app to split group expenses with receipt uploads, balance sheet, and authentication system.',
    tech: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
    live: 'https://smart-expense-splitter.vercel.app',
    github: 'https://github.com/aarush262/Smart-expense-splitter.git',
  },
  {
    image: project2,
    title: 'WorkerBuild Gig Platform',
    description:
      'A freelance gig portal with resume upload, authentication for workers & recruiters, and smart filtering.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://workerbuild.vercel.app',
    github: 'https://github.com/aarush262/Workerbuild.git',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 md:px-16 bg-gradient-to-br from-white via-purple-50 to-purple-100 overflow-hidden"
    >
      {/* 🔮 Background Blobs */}
      <div className="absolute -z-10 top-10 left-[-50px] w-[300px] h-[300px] bg-purple-200 rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute -z-10 bottom-10 right-[-40px] w-[250px] h-[250px] bg-pink-200 rounded-full blur-[100px] opacity-20"></div>

      {/* 🔥 Section Title */}
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent leading-tight tracking-tight transition duration-300 hover:scale-105"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto mt-4"
        >
          Here are some of the full-stack web applications I’ve built — each one showcasing clean design, strong logic, and modern technologies.
        </motion.p>
      </div>

      {/* ✅ Scrollable view on mobile */}
      <div className="md:hidden overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 snap-x snap-mandatory scroll-pl-6 pr-6">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: false }}
              className="snap-start shrink-0 w-[85%] border border-purple-300 bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <img src={proj.image} alt={proj.title} className="rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-purple-600">{proj.title}</h3>
              <p className="text-gray-600 mt-2">{proj.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 bg-purple-600 text-white rounded-full transition hover:bg-purple-700 hover:scale-105"
                >
                  Live
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 border border-purple-600 text-purple-600 rounded-full transition hover:bg-purple-100 hover:scale-105"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Desktop view with Tilt */}
      <div className="hidden md:flex gap-10 justify-center">
        {projects.map((proj, idx) => (
          <Tilt
            glareEnable={false}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.02}
            transitionSpeed={1500}
            key={idx}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: false }}
              className="w-full max-w-[500px] border border-purple-300 bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <img src={proj.image} alt={proj.title} className="rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-purple-600">{proj.title}</h3>
              <p className="text-gray-600 mt-2">{proj.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 bg-purple-600 text-white rounded-full transition hover:bg-purple-700 hover:scale-105"
                >
                  Live
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 border border-purple-600 text-purple-600 rounded-full transition hover:bg-purple-100 hover:scale-105"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;