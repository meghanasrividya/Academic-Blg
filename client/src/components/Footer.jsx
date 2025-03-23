// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Academic Blog. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">About</a> | <a href="#">Contact</a> | <a href="#">Terms</a>
        </div>
      </footer>
    );
  }
  