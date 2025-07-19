import React from 'react';
import { motion } from 'framer-motion';
import awsLogo from '../assets/certifications/aws.png';
import gcloudLogo from '../assets/certifications/gcloud.png';
import salesforceLogo from '../assets/certifications/salesforce.png';
import pythonLogo from '../assets/certifications/python.jpg';
import './FlipCard.css';

const certifications = [
  {
    title: 'AWS Academy: Cloud Architecting',
    issuer: 'AWS Academy',
    date: 'Issued June 2024',
    logo: awsLogo,
    link: 'https://www.credly.com/badges/1bd8de6d-44ff-4d2f-bcbd-2678f54bf449/print',
  },
  {
    title: 'Google Cloud Fundamentals: Core Infrastructure',
    issuer: 'Google Cloud',
    date: 'Issued July 2024',
    logo: gcloudLogo,
    link: 'https://www.cloudskillsboost.google/public_profiles/a7829215-f61e-4224-858f-a3f44ff09add/badges/10029590',
  },
  {
    title: 'Salesforce: Apex Specialist',
    issuer: 'Salesforce',
    date: 'Issued July 2024',
    logo: salesforceLogo,
    link: 'https://www.salesforce.com/trailblazer/f0bteomzboos1wvai4',
  },
  {
    title: 'Data Analytics and Visualization',
    issuer: 'Forage',
    date: 'Issued August 2024',
    logo: pythonLogo,
    link: 'https://drive.google.com/file/d/1C_7vE56tXjBIm-xkIJHtLfbYUdWSAvg4/view?usp=sharing',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 md:px-16 bg-gradient-to-bl from-white via-purple-50 to-purple-100">
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent tracking-tight"
        >
          Certifications
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto mt-4"
        >
          A selection of certifications I’ve earned to build cloud, backend, and programming expertise.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 place-items-center">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="flip-card w-[90%] sm:w-[85%] md:w-[80%] h-[330px]"
          >
            <div className="flip-card-inner hover:shadow-xl">
              {/* Front */}
              <div className="flip-card-front bg-white border-2 border-purple-200 rounded-xl shadow-md p-5 flex flex-col items-center justify-center text-center hover:shadow-xl transition duration-300">
                <img src={cert.logo} alt={cert.title} className="w-20 h-20 object-contain mb-4" />
                <h3 className="text-base font-semibold text-gray-800 px-2">{cert.title}</h3>
              </div>

              {/* Back */}
              <div className="flip-card-back bg-purple-600 text-white rounded-xl p-6 flex flex-col items-center justify-center text-center">
                <h3 className="text-md font-semibold">{cert.issuer}</h3>
                <p className="text-sm my-2">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 bg-white text-purple-700 px-4 py-2 rounded-full hover:bg-purple-100 transition"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;