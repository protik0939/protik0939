'use client'
import React, { createContext, useContext, useEffect, useState, useMemo, useRef } from 'react'

type Theme = 'light' | 'dark' | 'system' | 'ocean' | 'sunset' | 'forest' | 'informal'
type ActualTheme = 'light' | 'dark' | 'ocean' | 'sunset' | 'forest' | 'informal'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  actualTheme: ActualTheme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [actualTheme, setActualTheme] = useState<ActualTheme>('dark')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [nextTheme, setNextTheme] = useState<ActualTheme | null>(null)
  const isInitialMount = useRef(true)

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem('theme', theme)

    const root = document.documentElement
    
    // Determine the new theme
    let newTheme: ActualTheme
    if (theme === 'system') {
      newTheme = globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } else {
      newTheme = theme
    }

    // If theme is changing and not initial mount, trigger transition animation
    if (newTheme !== actualTheme && !isInitialMount.current) {
      setIsTransitioning(true)
      setNextTheme(newTheme)
      
      // Fade out phase (500ms)
      setTimeout(() => {
        // Switch theme classes
        root.classList.remove('light', 'dark', 'ocean', 'sunset', 'forest', 'informal')
        root.classList.add(newTheme)
        setActualTheme(newTheme)
        
        // Fade in phase starts immediately after theme switch
        setTimeout(() => {
          setIsTransitioning(false)
          setNextTheme(null)
        }, 800) // Fade in duration
      }, 500) // Fade out duration
    } else if (isInitialMount.current) {
      // Initial load, no animation
      root.classList.remove('light', 'dark', 'ocean', 'sunset', 'forest', 'informal')
      root.classList.add(newTheme)
      setActualTheme(newTheme)
      isInitialMount.current = false
    }
  }, [theme, actualTheme])

  // Listen to system theme changes
  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = globalThis.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e: MediaQueryListEvent) => {
        const root = document.documentElement
        root.classList.remove('light', 'dark')
        const newTheme = e.matches ? 'dark' : 'light'
        root.classList.add(newTheme)
        setActualTheme(newTheme)
      }

      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])

  const value = useMemo(() => ({ theme, setTheme, actualTheme }), [theme, actualTheme])

  return (
    <ThemeContext.Provider value={value}>
      {/* Theme Transition Overlay */}
      {isTransitioning && (
        <>
          {/* Fade Out Overlay - same for all themes */}
          <div 
            className="theme-transition-overlay fade-out"
            style={{ pointerEvents: 'none' }}
          />
          {/* Fade In Overlay - theme-specific animation */}
          {nextTheme && (
            <div 
              className={`theme-transition-overlay fade-in fade-in-${nextTheme}`}
              style={{ pointerEvents: 'none' }}
            />
          )}
        </>
      )}
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
