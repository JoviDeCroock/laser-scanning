import ReactModal from 'react-modal'
import useNoBodyScroll from './useNoBodyScroll'

if (typeof document !== 'undefined') {
  ReactModal.setAppElement('#app')
}

const overlayStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.82)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  overflow: 'auto',
  zIndex: 10000,
}

const contentStyle = {
  background: '#0d1520',
  border: '1px solid rgba(0, 212, 180, 0.15)',
  borderRadius: '8px',
  bottom: 'auto',
  left: 'auto',
  maxWidth: '900px',
  minHeight: '500px',
  padding: '2.5rem',
  position: 'relative',
  right: 'auto',
  top: 'auto',
  margin: '5vh auto',
  outline: 'none',
  color: '#a0b0c0',
  fontFamily: "'Outfit', sans-serif",
}

const Modal = ({ children, isOpen, onRequestClose, icon, title, footer }) => {
  useNoBodyScroll(isOpen)

  return (
    <ReactModal
      isOpen={isOpen}
      style={{ overlay: overlayStyle, content: contentStyle }}
      contentLabel={title}
      onRequestClose={onRequestClose}
    >
      {/* Close button */}
      <button
        onClick={onRequestClose}
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          background: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          width: '36px',
          height: '36px',
          cursor: 'pointer',
          color: '#607080',
          fontSize: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease',
          lineHeight: 1,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(0, 212, 180, 0.4)'
          e.currentTarget.style.color = '#00d4b4'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
          e.currentTarget.style.color = '#607080'
        }}
        aria-label="Close"
      >
        ×
      </button>

      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.25rem',
        paddingBottom: '1.5rem',
        marginBottom: '1.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}>
        {icon?.src && (
          <img
            src={icon.src}
            alt={icon.alt || ''}
            style={{
              width: '56px',
              height: '56px',
              objectFit: 'contain',
              filter: 'brightness(0) invert(1) opacity(0.5)',
            }}
          />
        )}
        <h2 style={{
          margin: 0,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '1.8em',
          fontWeight: 400,
          color: '#dce6f0',
          letterSpacing: '0.01em',
        }}>
          {title}
        </h2>
      </div>

      {/* Body */}
      <div style={{ paddingBottom: footer ? '5rem' : '0' }}>
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '1rem',
        }}>
          {footer}
        </div>
      )}
    </ReactModal>
  )
}

export default Modal
