import React from 'react'
import Projects from './(components)/Projects'
import LanguagesIKnow from './(components)/LanguagesIKnow'

export const metadata = {
    title: 'Skills | Sadat Alam Protik',
    description: 'Skills of Sadat Alam Protik',
};

export default function page() {
  return (
    <div className='w-full h-screen overflow-hidden'>
      <div className='w-full h-full overflow-auto'>
        <LanguagesIKnow />
        <Projects />
      </div>
    </div>
  )
}
