import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_babuin", 
        "template_contact", 
        formData,
        "mY-2YH0A05jIzPhaq" 
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Me</h2>
      <p style={styles.description}>
        Feel free to reach out for collaboration, questions, or just to say hi!
      </p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            style={styles.textarea}
            required
          ></textarea>
        </div>
        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
      {status && <p style={styles.status}>{status}</p>}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "#f5f5f5",
    color: "#333",
    borderRadius: "16px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "2rem auto",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textAlign: "center",
  },
  description: {
    fontSize: "1.1rem",
    color: "#555",
    textAlign: "center",
    marginBottom: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    width: "100%",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  label: {
    fontSize: "1rem",
    color: "#555",
  },
  input: {
    padding: "0.75rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  textarea: {
    padding: "0.75rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
    width: "100%",
    height: "150px",
    resize: "none",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  button: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#333",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  },
  status: {
    marginTop: "1rem",
    fontSize: "1rem",
    color: "#555",
  },
};

export default Contact;
