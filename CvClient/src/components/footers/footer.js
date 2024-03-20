import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <div className="footer-section">
        <h3>Contact</h3>
        <p>Milan.hussein@nackademin.se</p>
      </div>
      <div className="footer-section">
        <h3>About Me</h3>
        <p>WebDeveloper and Web designer</p>
      </div>
      <div className="footer-section">
        <h3>Portfolio</h3>
        <p>Worked with big corporations</p>
      </div>
      <div className="footer-section">
        <p>&copy; 2024 Milans Portfolio</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer;