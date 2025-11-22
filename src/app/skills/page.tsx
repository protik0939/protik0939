'use client'
import React, { useState } from 'react'
import Projects from './(components)/Projects'
import LanguagesIKnow from './(components)/LanguagesIKnow'
import { useLanguage } from '../(components)/LanguageProvider'

export default function Page() {
  const [activeTab, setActiveTab] = useState<'all' | 'knowledges' | 'projects'>('all');
  const { t } = useLanguage();

  return (
    <div className='w-full h-screen overflow-hidden'>
      <div className='w-full h-full overflow-auto'>
        {/* Tabs */}
        <div className='w-full flex justify-center pt-20 pb-4 px-4'>
          <div className='flex gap-2 bg-card/30 backdrop-blur-sm p-2 theme-rounded theme-border border-border'>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 theme-rounded font-medium theme-transition ${
                activeTab === 'all'
                  ? 'bg-primary text-primary-foreground theme-shadow'
                  : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
              }`}
            >
              {t('skills.tabs.all')}
            </button>
            <button
              onClick={() => setActiveTab('knowledges')}
              className={`px-6 py-2 theme-rounded font-medium theme-transition ${
                activeTab === 'knowledges'
                  ? 'bg-primary text-primary-foreground theme-shadow'
                  : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
              }`}
            >
              {t('skills.tabs.knowledges')}
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-2 theme-rounded font-medium theme-transition ${
                activeTab === 'projects'
                  ? 'bg-primary text-primary-foreground theme-shadow'
                  : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
              }`}
            >
              {t('skills.tabs.projects')}
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'all' && (
          <>
            <LanguagesIKnow />
            <Projects />
          </>
        )}
        {activeTab === 'knowledges' && <LanguagesIKnow />}
        {activeTab === 'projects' && <Projects />}
      </div>
    </div>
  )
}
