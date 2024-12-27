import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section style={styles.hero}>
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={styles.heading}
      >
        Hello! I'm Daulet
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={styles.subheading}
      >
        Frontend Developer | Web Enthusiast
      </motion.p>
    </section>
  );
}

const styles = {
  hero: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
    backgroundColor: "#f0f0f0",
    textAlign: "center",
  },
  heading: {
    fontSize: "3rem",
    margin: "0.5rem",
  },
  subheading: {
    fontSize: "1.5rem",
    color: "#555",
  },
};

export default Hero;
