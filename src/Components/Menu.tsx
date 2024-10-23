'use client'
import React, { useEffect, useRef, useState } from 'react'
import { TiThMenu } from 'react-icons/ti'
import { IoHomeOutline, IoInformation, IoCode, IoCallOutline } from 'react-icons/io5'
import { PiStudent } from 'react-icons/pi'
import { CgFeed } from 'react-icons/cg'
import { RiFlowerLine } from 'react-icons/ri'
import { TbFileCv } from 'react-icons/tb'
import { IoMdClose } from 'react-icons/io'
import ParticlesBg from 'particles-bg';
import Link from 'next/link'


export default function Menu() {

  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

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
  }, [menuRef]);



  const config = {
    num: [20, 30],
    rps: 0.1,
    radius: [.1, 1],
    life: [1.5, 3],
    v: [.4, .8],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: "all",
    color: ["#ffffff"],
    type: "lines",
    cross: "dead",
    random: 0,
    g: 0,
  };


  return (
    <div>
      <div className={`fixed transition-all duration-500  ${showMenu ? 'bottom-20' : 'bottom-0'} z-50 w-full flex justify-center items-center`}>
        <div className='relative flex justify-center items-center'>
          <div ref={menuRef} className='relative w-40 h-32'>

            <button onClick={() => setShowMenu(!showMenu)} className={`z-50 absolute cursor-pointer p-2 rounded-full border  text-xl left-1/2 top-1/2 hover:shadow-2xl hover:scale-110 hover:shadow-white transform transition-all duration-500 ${showMenu ? '-translate-x-1/2 -translate-y-1/2 rotate-180 border-[#ff0000] bg-[#ff0000]/20 scale-75 text-[#ff0000]' : '-translate-x-1/2 -translate-y-1/2 border-white bg-white/20 text-white'}`} >
              {showMenu ? <IoMdClose /> : <TiThMenu />}
            </button>

            <Link href={'/'} className={`transition-all duration-500 ${showMenu ? 'opacity-100 left-1/2 top-0 transform -translate-x-1/2 -translate-y-full' : 'opacity-0 pointer-events-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'} absolute hover:shadow-2xl hover:scale-110 hover:shadow-white bg-white/20 p-2 rounded-full border border-white text-2xl tooltip`} data-tip="Home" >
              <IoHomeOutline />
            </Link>

            <Link href={'/education'} className={`transition-all duration-500  ${showMenu ? 'opacity-100 left-[85%] top-[5%] transform -translate-x-1/2 -translate-y-1/2' : 'opacity-0 pointer-events-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'} absolute hover:shadow-2xl hover:scale-110 hover:shadow-white bg-white/20 p-2 rounded-full border border-white text-2xl tooltip tooltip-right`} data-tip="Education"  >
              <PiStudent />
            </Link>

            <Link href={'/about'} className={`transition-all duration-500  ${showMenu ? 'opacity-100 left-full top-1/2 transform -translate-x-1/2 -translate-y-1/2' : 'opacity-0 pointer-events-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'} absolute hover:shadow-2xl hover:scale-110 hover:shadow-white bg-white/20 p-2 rounded-full border border-white text-2xl  tooltip tooltip-right`} data-tip="About" >
              <IoInformation />
            </Link>

            <Link href={'/cv'} className={`transition-all duration-500  ${showMenu ? 'opacity-100 left-[85%] top-[95%] transform -translate-x-1/2 -translate-y-1/2' : 'opacity-0 pointer-events-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'} absolute hover:shadow-2xl hover:scale-110 hover:shadow-white bg-white/20 p-2 rounded-full border border-white text-2xl  tooltip tooltip-right`} data-tip="CV" >
              <TbFileCv />
            </Link>

            <Link href={'/contact'} className={`transition-all duration-500  ${showMenu ? 'opacity-100 left-1/2 top-full transform -translate-x-1/2' : 'opacity-0 pointer-events-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'} absolute hover:shadow-2xl hover:scale-110 hover:shadow-white bg-white/20 p-2 rounded-full border border-white text-2xl tooltip tooltip-bottom`} data-tip="Contact" >
              <IoCallOutline />
            </Link>

            <Link href={'/hobby'} className={`transition-all duration-500  ${showMenu ? 'opacity-100 left-[15%] top-[95%] transform -translate-x-1/2 -translate-y-1/2' : 'opacity-0 pointer-events-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'} absolute hover:shadow-2xl hover:scale-110 hover:shadow-white bg-white/20 p-2 rounded-full border border-white text-2xl tooltip tooltip-left`} data-tip="Hobby" >
              <RiFlowerLine />
            </Link>

            <Link href={'/blogs'} className={`transition-all duration-500  ${showMenu ? 'opacity-100 left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2' : 'opacity-0 pointer-events-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'} absolute hover:shadow-2xl hover:scale-110 hover:shadow-white bg-white/20 p-2 rounded-full border border-white text-2xl tooltip tooltip-left`} data-tip="Blogs" >
              <CgFeed />
            </Link>

            <Link href={'/skills'} className={`transition-all duration-500  ${showMenu ? 'opacity-100 left-[15%] top-[5%] transform -translate-x-1/2 -translate-y-1/2' : 'opacity-0 pointer-events-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'} absolute hover:shadow-2xl hover:scale-110 hover:shadow-white bg-white/20 p-2 rounded-full border border-white text-2xl tooltip tooltip-left`} data-tip="Skills" >
              <IoCode />
            </Link>

          </div>

        </div>

      </div>

      <ParticlesBg type="custom" config={config} bg={true} />
    </div>
  )
}
