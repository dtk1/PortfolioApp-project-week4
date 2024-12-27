import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Daulet. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "1rem 0",
  },
};

export default Footer;
