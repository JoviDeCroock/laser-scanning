import React from 'react'
import Icon from './Icon'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            aria-label="Mail EDS Systems"
            href="mailto:mark-eds-systems@telenet.be"
            className="icon"
          >
            <Icon name="envelope-o" />
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; EDS Systems</li>
      </ul>
    </div>
  </div>
)

export default Footer
