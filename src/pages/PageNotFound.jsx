import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! Page not found 😕</p>
      <Link to="/" style={styles.button}>Go Back Home</Link>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f9fa",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "clamp(50px, 10vw, 100px)",
    margin: "0",
    color: "#007bff",
  },
  message: {
    fontSize: "clamp(16px, 4vw, 24px)",
    color: "#333",
    marginBottom: "20px",
  },
  button: {
    textDecoration: "none",
    backgroundColor: "#007bff",
    color: "white",
    padding: "12px 24px",
    borderRadius: "8px",
    fontSize: "clamp(14px, 3vw, 16px)",
    transition: "0.3s",
  },
};

export default PageNotFound;
