'use client'

import React, { useEffect, useState } from 'react'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [particles, setParticles] = useState<Array<{
    id: string
    left: number
    top: number
    delay: number
    duration: number
  }>>([])

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: `particle-${Date.now()}-${i}`,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
      }))
    )

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    // Start exit animation
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 2500)

    // Hide preloader after exit animation completes
    const hideTimer = setTimeout(() => {
      setIsLoading(false)
    }, 3300) // 2500ms + 800ms for exit animation

    return () => {
      clearInterval(progressInterval)
      clearTimeout(exitTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!isLoading) {
    return null
  }

  return (
    <div className={`preloader ${isExiting ? 'preloader-hidden' : ''}`}>
      <div className="preloader-content">
        {/* Animated Logo/Icon */}
        <div className="preloader-logo">
          <div className="logo-ring ring-1"></div>
          <div className="logo-ring ring-2"></div>
          <div className="logo-ring ring-3"></div>
          <div className="logo-center">
            <img src="/icon.svg" alt="Logo" className="logo-icon" />
          </div>
        </div>

        {/* Animated Text */}
        <div className="preloader-text">
          <h2 className="loading-title">
            <span className="char" style={{ animationDelay: '0s' }}>L</span>
            <span className="char" style={{ animationDelay: '0.1s' }}>o</span>
            <span className="char" style={{ animationDelay: '0.2s' }}>a</span>
            <span className="char" style={{ animationDelay: '0.3s' }}>d</span>
            <span className="char" style={{ animationDelay: '0.4s' }}>i</span>
            <span className="char" style={{ animationDelay: '0.5s' }}>n</span>
            <span className="char" style={{ animationDelay: '0.6s' }}>g</span>
            <span className="dot" style={{ animationDelay: '0.7s' }}>.</span>
            <span className="dot" style={{ animationDelay: '0.8s' }}>.</span>
            <span className="dot" style={{ animationDelay: '0.9s' }}>.</span>
          </h2>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <div className="progress-text">{Math.min(Math.round(progress), 100)}%</div>
        </div>

        {/* Floating Particles */}
        <div className="particles">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
