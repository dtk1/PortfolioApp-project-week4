import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

function About() {
  const techStack = [
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.sectionHeading}>About Me</h2>
      <div style={styles.aboutBox}>
        <div style={styles.aboutContent}>
          <p style={styles.aboutText}>
            Hi, I'm a passionate frontend developer with a love for building
            modern, responsive, and visually appealing web applications. My
            expertise lies in creating intuitive interfaces using the latest
            technologies. I strive to blend clean design with exceptional
            functionality to provide a seamless user experience.
          </p>
          <div style={styles.iconGroup}>
            <motion.a
              href="https://www.linkedin.com/in/daulet-tlegenov-59a506242/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              style={styles.aboutIconWrapper}
            >
              <FaLinkedin style={styles.socialIcon} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/dauletlegenov/#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              style={styles.aboutIconWrapper}
            >
              <FaInstagram style={styles.socialIcon} />
            </motion.a>
            <motion.a
              href="https://github.com/dtk1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              style={styles.aboutIconWrapper}
            >
              <FaGithub style={styles.socialIcon} />
            </motion.a>
          </div>
        </div>
      </div>

      <h2 style={styles.sectionHeading}>My Technologies</h2>
      <div style={styles.techBox}>
        <div style={styles.techGrid}>
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              style={styles.techCard}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div style={styles.icon}>{tech.icon}</div>
              <p style={styles.techName}>{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f5f5f5", 
    color: "#333", 
    padding: "2rem",
    minHeight: "100vh",
    gap: "3rem", 
  },
  sectionHeading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#333",
    textAlign: "center",
  },
  aboutBox: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
    width: "100%",
    maxWidth: "1200px",
  },
  aboutContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
  },
  aboutText: {
    fontSize: "1.8rem", 
    lineHeight: "2",
    textAlign: "center",
    color: "#555",
    maxWidth: "800px",
  },
  iconGroup: {
    display: "flex",
    gap: "2rem",
  },
  aboutIconWrapper: {
    backgroundColor: "#f9f9f9",
    borderRadius: "50%",
    padding: "1.2rem",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    textDecoration: "none",
  },
  socialIcon: {
    fontSize: "2rem",
    color: "#333",
    transition: "transform 0.3s ease, color 0.3s ease",
  },
  techBox: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
    width: "100%",
    maxWidth: "1200px",
    textAlign: "center",
    marginBottom: '100px'
  },
  techGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "2.5rem",
    justifyItems: "center",
  },
  techCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    width: "150px",
    height: "150px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  icon: {
    fontSize: "4rem", 
    marginBottom: "1rem",
  },
  techName: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#333",
  },
};

export default About;
