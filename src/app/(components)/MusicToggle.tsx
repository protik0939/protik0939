'use client'
import React, { useState, useRef, useEffect } from 'react'
import { IoMusicalNotes, IoPause } from 'react-icons/io5'
import { useLanguage } from './LanguageProvider'
import { useTheme } from './ThemeProvider'

export default function MusicToggle() {
  const { t } = useLanguage()
  const { actualTheme } = useTheme()
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Theme-specific music mapping
  const getThemeMusic = (theme: string) => {
    switch (theme) {
      case 'light':
        return '/music/light-theme-music.mp3'
      case 'dark':
        return '/music/dark-theme-music.mp3'
      case 'ocean':
        return '/music/ocean-theme-music.mp3'
      case 'sunset':
        return '/music/sunset-theme-music.mp3'
      case 'forest':
        return '/music/forest-theme-music.mp3'
      case 'informal':
        return '/music/pubg-informal-background-music.mp3'
      default:
        return '/music/dark-theme-music.mp3'
    }
  }

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio(getThemeMusic(actualTheme))
    audioRef.current.loop = true
    audioRef.current.volume = 0.9

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  // Change music when theme changes
  useEffect(() => {
    if (audioRef.current) {
      const wasPlaying = isPlaying
      
      // Pause current music
      audioRef.current.pause()
      
      // Change source
      audioRef.current.src = getThemeMusic(actualTheme)
      audioRef.current.currentTime = 0 // Start from beginning
      
      // Resume if it was playing
      if (wasPlaying) {
        audioRef.current.play().catch((error) => {
          console.log('Audio play failed:', error)
        })
      }
    }
  }, [actualTheme])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch((error) => {
          console.log('Audio play failed:', error)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <button
      onClick={toggleMusic}
      className="p-3 theme-rounded theme-border border-primary bg-card/20 backdrop-blur-sm text-foreground text-2xl hover:theme-shadow hover:scale-110 theme-transition tooltip tooltip-left"
      data-tip={isPlaying ? t('ui.pauseMusic') : t('ui.playMusic')}
      aria-label={isPlaying ? t('ui.pauseMusic') : t('ui.playMusic')}
    >
      {isPlaying ? <IoPause /> : <IoMusicalNotes />}
    </button>
  )
}
