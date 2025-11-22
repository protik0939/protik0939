'use client'
import React, { useEffect, useRef, useState } from 'react'
import { TiThMenu } from 'react-icons/ti'
import { IoHomeOutline, IoInformation, IoCode, IoCallOutline } from 'react-icons/io5'
import { PiStudent } from 'react-icons/pi'
import { CgFeed } from 'react-icons/cg'
import { RiFlowerLine } from 'react-icons/ri'
import { TbFileCv } from 'react-icons/tb'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ColorBends from './ColorBends'
import { useLanguage } from './LanguageProvider'

export default function Menu() {
  const { t } = useLanguage()
  const [showMenu, setShowMenu] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const pathname = usePathname()

  const menuRef = useRef<HTMLDivElement | null>(null)
  const previousPathname = useRef(pathname)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef])

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      setIsNavigating(true)
      previousPathname.current = pathname
      
      const timer = setTimeout(() => {
        setIsNavigating(false)
      }, 800)
      
      return () => clearTimeout(timer)
    }
  }, [pathname])

  const handleLinkClick = () => {
    setIsNavigating(true)
    setShowMenu(false)
  }





  return (
    <div>
      <div className={`fixed transition-all duration-500  ${showMenu ? 'bottom-20' : 'bottom-0 pointer-events-none'} z-50 w-full flex justify-center items-center`}>
        <div className='relative flex justify-center items-center'>
          <div ref={menuRef} className='relative w-40 h-32'>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {isNavigating && (
                <svg className="absolute -inset-2 w-14 h-14 route-progress-container" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="50%" stopColor="hsl(var(--accent))" />
                      <stop offset="100%" stopColor="hsl(var(--chart-1))" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#progressGradient)"
                    strokeWidth="3"
                    strokeDasharray="283"
                    strokeDashoffset="283"
                    strokeLinecap="round"
                    className="route-progress-circle"
                  />
                </svg>
              )}
              <button onClick={() => setShowMenu(!showMenu)} className={`z-50 relative cursor-pointer p-2 theme-rounded theme-border pointer-events-auto text-xl hover:theme-shadow hover:scale-110 transform theme-transition ${showMenu ? 'rotate-180 border-accent bg-accent/20 scale-75 text-accent' : 'border-primary bg-card/20 text-foreground'}`} >
                {showMenu ? <IoMdClose /> : <TiThMenu />}
              </button>
            </div>

            <Link href={'/'} onClick={handleLinkClick} className={`theme-transition ${showMenu ? 'opacity-100 left-1/2 top-0 transform -translate-x-1/2 -translate-y-full' : 'opacity-0 pointer-events-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'} absolute hover:theme-shadow hover:scale-110 bg-card/20 p-2 theme-rounded theme-border border-primary text-foreground text-2xl tooltip`} data-tip={t('home')} >
              <IoHomeOutline />
            </Link>

            <Link href={'/education'} onClick={handleLinkClick} className={`theme-transition ${showMenu ? 'opacity-100 left-[85%] top-[5%] transform -translate-x-1/2 -translate-y-1/2' : 'opacity-0 pointer-events-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'} absolute hover:theme-shadow hover:scale-110 bg-card/20 p-2 theme-rounded theme-border border-primary text-foreground text-2xl tooltip tooltip-right`} data-tip={t('education')}  >
              <PiStudent />
            </Link>

            <Link href={'/about'} onClick={handleLinkClick} className={`theme-transition ${showMenu ? 'opacity-100 left-full top-1/2 transform -translate-x-1/2 -translate-y-1/2' : 'opacity-0 pointer-events-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'} absolute hover:theme-shadow hover:scale-110 bg-card/20 p-2 theme-rounded theme-border border-primary text-foreground text-2xl tooltip tooltip-right`} data-tip={t('about')} >
              <IoInformation />
            </Link>

            <Link href={'/cv'} onClick={handleLinkClick} className={`theme-transition ${showMenu ? 'opacity-100 left-[85%] top-[95%] transform -translate-x-1/2 -translate-y-1/2' : 'opacity-0 pointer-events-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'} absolute hover:theme-shadow hover:scale-110 bg-card/20 p-2 theme-rounded theme-border border-primary text-foreground text-2xl tooltip tooltip-right`} data-tip={t('cv')} >
              <TbFileCv />
            </Link>

            <Link href={'/contact'} onClick={handleLinkClick} className={`theme-transition ${showMenu ? 'opacity-100 left-1/2 top-full transform -translate-x-1/2' : 'opacity-0 pointer-events-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'} absolute hover:theme-shadow hover:scale-110 bg-card/20 p-2 theme-rounded theme-border border-primary text-foreground text-2xl tooltip tooltip-bottom`} data-tip={t('contact')} >
              <IoCallOutline />
            </Link>

            <Link href={'/hobby'} onClick={handleLinkClick} className={`theme-transition ${showMenu ? 'opacity-100 left-[15%] top-[95%] transform -translate-x-1/2 -translate-y-1/2' : 'opacity-0 pointer-events-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'} absolute hover:theme-shadow hover:scale-110 bg-card/20 p-2 theme-rounded theme-border border-primary text-foreground text-2xl tooltip tooltip-left`} data-tip={t('hobby')} >
              <RiFlowerLine />
            </Link>

            <Link href={'/blogs'} onClick={handleLinkClick} className={`theme-transition ${showMenu ? 'opacity-100 left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2' : 'opacity-0 pointer-events-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'} absolute hover:theme-shadow hover:scale-110 bg-card/20 p-2 theme-rounded theme-border border-primary text-foreground text-2xl tooltip tooltip-left`} data-tip={t('blogs')} >
              <CgFeed />
            </Link>

            <Link href={'/skills'} onClick={handleLinkClick} className={`theme-transition ${showMenu ? 'opacity-100 left-[15%] top-[5%] transform -translate-x-1/2 -translate-y-1/2' : 'opacity-0 pointer-events-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'} absolute hover:theme-shadow hover:scale-110 bg-card/20 p-2 theme-rounded theme-border border-primary text-foreground text-2xl tooltip tooltip-left`} data-tip={t('skills')} >
              <IoCode />
            </Link>

          </div>

        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent pointer-events-none -z-50">
        <ColorBends />
      </div>
    </div>
  )
}
