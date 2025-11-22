'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useLanguage } from './LanguageProvider'
import { IoLanguage } from 'react-icons/io5'

type Language = 'en' | 'bn'

interface LanguageOption {
  code: Language
  label: string
  nativeLabel: string
  flag: string
}

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()
  const [showLanguages, setShowLanguages] = useState(false)
  const languageRef = useRef<HTMLDivElement | null>(null)

  const languages: LanguageOption[] = [
    {
      code: 'en',
      label: 'English',
      nativeLabel: 'English',
      flag: 'EN'
    },
    {
      code: 'bn',
      label: 'Bengali',
      nativeLabel: 'বাংলা',
      flag: 'বাং'
    }
  ]

  const currentLanguage = languages.find(l => l.code === language) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setShowLanguages(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode)
    setShowLanguages(false)
  }

  return (
    <div ref={languageRef}>
      <div className="relative">
        {/* Language Toggle Button */}
        <button
          onClick={() => setShowLanguages(!showLanguages)}
          className="p-3 flex aspect-square flex-col theme-rounded theme-border border-primary bg-card/20 backdrop-blur-sm text-foreground text-2xl hover:theme-shadow hover:scale-110 theme-transition tooltip tooltip-left items-center gap-2"
          data-tip={t('ui.changeLanguage')}
        >
          <span className="text-xl">{currentLanguage.flag}</span>
        </button>

        {/* Language Options Panel */}
        <div
          className={`absolute top-14 right-0 transition-all duration-300 ${
            showLanguages
              ? 'opacity-100 pointer-events-auto translate-y-0'
              : 'opacity-0 pointer-events-none -translate-y-4'
          }`}
        >
          <div className="bg-card/50 backdrop-blur-md theme-border border-primary rounded-2xl p-4 min-w-[180px] theme-shadow">
            <h3 className="text-foreground text-sm font-semibold mb-3 px-2">{t('ui.language')}</h3>
            <div className="space-y-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 theme-rounded theme-transition ${
                    language === lang.code
                      ? 'bg-primary/20 text-foreground theme-shadow scale-105'
                      : 'hover:bg-card/20 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">{lang.nativeLabel}</span>
                    <span className="text-xs opacity-70">{lang.label}</span>
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
