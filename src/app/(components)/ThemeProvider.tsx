'use client'
import React, { createContext, useContext, useEffect, useState, useMemo } from 'react'

type Theme = 'light' | 'dark' | 'system' | 'ocean' | 'sunset' | 'forest'
type ActualTheme = 'light' | 'dark' | 'ocean' | 'sunset' | 'forest'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  actualTheme: ActualTheme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [actualTheme, setActualTheme] = useState<ActualTheme>('dark')

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
    root.classList.remove('light', 'dark', 'ocean', 'sunset', 'forest')

    if (theme === 'system') {
      const systemTheme = globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
      setActualTheme(systemTheme)
    } else {
      root.classList.add(theme)
      setActualTheme(theme)
    }
  }, [theme])

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
