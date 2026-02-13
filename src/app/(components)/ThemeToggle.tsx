'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from './ThemeProvider'
import { useLanguage } from './LanguageProvider'
import { IoSunnyOutline, IoMoonOutline, IoGameControllerOutline } from 'react-icons/io5'
import { MdOutlineComputer } from 'react-icons/md'
import { GiWaves, GiForest } from 'react-icons/gi'
import { BsSunset } from 'react-icons/bs'

type Theme = 'light' | 'dark' | 'system' | 'ocean' | 'sunset' | 'forest' | 'informal'

interface ThemeOption {
  name: Theme
  label: string
  icon: React.ReactNode
  description: string
}

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { t } = useLanguage()
  const [showThemes, setShowThemes] = useState(false)
  const themeRef = useRef<HTMLDivElement | null>(null)

  const themes: ThemeOption[] = [
    {
      name: 'light',
      label: t('theme.light'),
      icon: <IoSunnyOutline />,
      description: t('theme.light.desc')
    },
    {
      name: 'dark',
      label: t('theme.dark'),
      icon: <IoMoonOutline />,
      description: t('theme.dark.desc')
    },
    {
      name: 'system',
      label: t('theme.system'),
      icon: <MdOutlineComputer />,
      description: t('theme.system.desc')
    },
    {
      name: 'ocean',
      label: t('theme.ocean'),
      icon: <GiWaves />,
      description: t('theme.ocean.desc')
    },
    {
      name: 'sunset',
      label: t('theme.sunset'),
      icon: <BsSunset />,
      description: t('theme.sunset.desc')
    },
    {
      name: 'forest',
      label: t('theme.forest'),
      icon: <GiForest />,
      description: t('theme.forest.desc')
    },
    {
      name: 'informal',
      label: t('theme.informal'),
      icon: <IoGameControllerOutline />,
      description: t('theme.informal.desc')
    }
  ]

  const currentTheme = themes.find(t => t.name === theme) || themes[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (themeRef.current && !themeRef.current.contains(event.target as Node)) {
        setShowThemes(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleThemeChange = (themeName: Theme) => {
    setTheme(themeName)
    setShowThemes(false)
  }

  return (
    <div ref={themeRef}>
      <div className="relative">
        {/* Theme Toggle Button */}
        <button
          onClick={() => setShowThemes(!showThemes)}
          className="p-3 theme-rounded theme-border border-primary bg-card/20 backdrop-blur-sm text-foreground text-2xl hover:theme-shadow hover:scale-110 theme-transition tooltip tooltip-left"
          data-tip={t('ui.changeTheme')}
        >
          {currentTheme.icon}
        </button>

        {/* Theme Options Panel */}
        <div
          className={`absolute top-14 right-0 transition-all duration-300 ${
            showThemes
              ? 'opacity-100 pointer-events-auto translate-y-0'
              : 'opacity-0 pointer-events-none -translate-y-4'
          }`}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-4 min-w-[200px] shadow-2xl">
            <h3 className="text-white text-sm font-semibold mb-3 px-2">{t('ui.selectTheme')}</h3>
            <div className="space-y-1">
              {themes.map((themeOption) => (
                <button
                  key={themeOption.name}
                  onClick={() => handleThemeChange(themeOption.name)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 theme-rounded theme-transition ${
                    theme === themeOption.name
                      ? 'bg-primary/20 text-foreground theme-shadow scale-105'
                      : 'hover:bg-card/20 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="text-xl">{themeOption.icon}</span>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">{themeOption.label}</span>
                    <span className="text-xs opacity-70">{themeOption.description}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
