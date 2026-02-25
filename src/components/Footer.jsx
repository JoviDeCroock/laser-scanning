import React from 'react'

const Footer = () => (
  <footer className="site-footer">
    <p className="site-footer__copy">
      &copy; {new Date().getFullYear()} EDS Systems · Mark Swinnen · Belgium
    </p>
    <a
      href="mailto:mark-eds-systems@telenet.be"
      className="site-footer__email"
    >
      mark-eds-systems@telenet.be
    </a>
  </footer>
)

export default Footer
