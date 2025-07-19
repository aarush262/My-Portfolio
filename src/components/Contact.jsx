import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Lottie from 'lottie-react';
import botAnimation from '../assets/LYcuaPniT5.json';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen pt-24 pb-32 px-6 md:px-16 bg-gradient-to-br from-white via-purple-50 to-purple-100"
    >
      {/* 🧠 Heading + Lottie */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 mb-16 max-w-6xl mx-auto">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-gray-900">Get </span>
            <span className="text-purple-600">In Touch</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-xl mt-4">
            Have a project in mind or just want to connect? Feel free to reach out through the form or links below!
          </p>
        </motion.div>

        {/* Lottie Bot */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]"
        >
          <Lottie animationData={botAnimation} loop />
        </motion.div>
      </div>

      {/* Grid layout */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Side: Contact Info & Icons */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800">Feel free to ask me anything!</h3>
          <p className="text-gray-600">
            Whether it's freelance, collaboration, or questions — I'm always happy to chat.
          </p>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-purple-700">
              <FaEnvelope />
              <span className="text-gray-700">aarushyadav262@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-purple-700">
              <FaPhoneAlt />
              <span className="text-gray-700">+91 9137070217</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6 text-purple-700 text-2xl">
            <a
              href="https://github.com/aarush262"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black transition-transform duration-300 hover:scale-125"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/bobby-yadav-1115682ba/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 transition-transform duration-300 hover:scale-125"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-600 transition-transform duration-300 hover:scale-125"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          action="https://formsubmit.co/aarushyadav262@gmail.com"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label className="block mb-1 font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-purple-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-purple-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border border-purple-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none bg-white"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
            >
              Send Message 🚀
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;