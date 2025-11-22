'use client'
import React, { createContext, useContext, useEffect, useState, useMemo } from 'react'
import { bn } from './Translations/bn'
import { en } from './Translations/en'

type Language = 'en' | 'bn'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
  toBengaliNumber: (num: number) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: en,
  bn: bn,
}

export function LanguageProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'bn')) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Save language to localStorage
    localStorage.setItem('language', language)

    // Update HTML lang attribute
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  const toBengaliNumber = (num: number): string => {
    if (language !== 'bn') return num.toString()
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']
    return num.toString().split('').map(digit => bengaliDigits[Number.parseInt(digit)] || digit).join('')
  }

  const value = useMemo(() => ({ language, setLanguage, t, toBengaliNumber }), [language])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
