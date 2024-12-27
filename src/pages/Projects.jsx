import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import projectData from "../data/projects.json"; 

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <div style={styles.container}>
      {projects.map((project) => (
        <div key={project.id} style={styles.cardContainer}>
          <div style={styles.imageSection}> <img src={project.img} alt={project.title} 
    style={styles.img}/></div>
         
          <div style={styles.contentSection}>
            <h2 style={styles.projectTitle}>{project.title}</h2>
            <p style={styles.projectDescription}>{project.description}</p>
            <div style={styles.tagsContainer}>
              {project.tags.map((tag, index) => (
                <span key={index} style={styles.tag}>{tag}</span>
              ))}
            </div>
            <div style={styles.linkContainer}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.githubLink}
              >
                <FaGithub style={styles.githubIcon} /> GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    padding: "2rem",
    backgroundColor: "#f5f5f5",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff", 
    borderRadius: "16px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    maxWidth: "500px",
    width: "100%",
    border: "1px solid #e0e0e0",
  },
  imageSection: {
    width: "100%", 
    height: "200px", 
    overflow: "hidden", 
    borderTopLeftRadius: "16px", 
    borderTopRightRadius: "16px",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  contentSection: {
    padding: "1.5rem",
    paddingTop: 0,
    fontFamily: "'Montserrat', sans-serif",
  },
  projectTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "1rem",
    textAlign: "center",
  },
  projectDescription: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  tagsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    marginBottom: "1.5rem",
  },
  tag: {
    backgroundColor: "#f0f0f0",
    color: "#555",
    borderRadius: "12px",
    padding: "0.5rem 1rem",
    fontSize: "0.9rem",
    fontWeight: "500",
    border: "1px solid #e0e0e0",
  },
  linkContainer: {
    display: "flex",
    justifyContent: "center",
  },
  githubLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
    fontSize: "1rem",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "0.5rem 1rem",
    backgroundColor: "#f9f9f9",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  },
  githubIcon: {
    marginRight: "0.5rem",
  },
};

export default Projects;
