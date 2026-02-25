import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

const PointCloud = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let rafId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const count = Math.min(600, Math.floor((canvas.width * canvas.height) / 4000))

    const palette = [
      [0, 212, 180],   // teal (most)
      [0, 212, 180],
      [0, 212, 180],
      [0, 180, 220],   // blue-teal
      [180, 220, 255], // cool white
      [212, 168, 67],  // amber (few)
    ]

    const pts = Array.from({ length: count }, () => {
      const col = palette[Math.floor(Math.random() * palette.length)]
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random(),
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: col[0],
        g: col[1],
        b: col[2],
        phase: Math.random() * Math.PI * 2,
      }
    })

    let scanY = -20
    let tick = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      tick++

      // Scan line moves down slowly
      scanY += 0.4
      if (scanY > canvas.height + 20) scanY = -20

      pts.forEach(p => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < -5) p.x = canvas.width + 5
        if (p.x > canvas.width + 5) p.x = -5
        if (p.y < -5) p.y = canvas.height + 5
        if (p.y > canvas.height + 5) p.y = -5

        const size = p.z * 2.5 + 0.4
        const dist = Math.abs(p.y - scanY)
        const scanBoost = dist < 40 ? (1 - dist / 40) * 1.8 : 0

        const baseAlpha = p.z * 0.55 + 0.1
        const alpha = Math.min(1, baseAlpha + scanBoost * 0.6)

        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${alpha})`
        ctx.fill()

        // Glow for scan-lit points
        if (scanBoost > 0.3) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${scanBoost * 0.08})`
          ctx.fill()
        }
      })

      // Scan line itself
      const scanAlpha = 0.35
      const grad = ctx.createLinearGradient(0, scanY - 2, 0, scanY + 2)
      grad.addColorStop(0, `rgba(0, 212, 180, 0)`)
      grad.addColorStop(0.5, `rgba(0, 212, 180, ${scanAlpha})`)
      grad.addColorStop(1, `rgba(0, 212, 180, 0)`)
      ctx.fillStyle = grad
      ctx.fillRect(0, scanY - 2, canvas.width, 4)

      rafId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="hero__canvas"
      aria-hidden="true"
    />
  )
}

const Introduction = () => {
  const { t } = useTranslation()

  return (
    <section id="intro" className="hero">
      <PointCloud />
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__label">01 — EDS Systems</p>
        <h1 className="hero__title">
          3D Laser<br />
          <span className="hero__title--accent">Scanning</span>
        </h1>
        <p className="hero__subtitle">{t('scanning')} · Belgium</p>
        <p className="hero__desc">{t('introCopy')}</p>
        <a href="#services" className="hero__cta">
          {t('threeD')}
        </a>
      </div>
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}

export default Introduction
