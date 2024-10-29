'use client'
import { skillData } from '@/models/jsonData'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

export default function SkillSet() {

    const fadeInVariant = {
        hidden: { opacity: 0, filter: 'blur(10px)' },
        visible: { opacity: 1, filter: 'blur(0px)' }
    };

    return (
        <div>
            {
                skillData.map(sd => {
                    return (
                        <motion.div
                            key={sd.id}
                            className='mb-8'
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ duration: 1 }}>
                            <h1 className='border-0 border-l-[20px] border-white mb-2 pl-2'>{sd.title}</h1>
                            <div className='w-full flex flex-wrap justify-center'>
                                <div className='w-full p-5 flex flex-wrap items-center'>
                                    {
                                        sd.sdInfos.map(si => {
                                            return (
                                                <div key={si.id} className='w-1/6 p-4 sm:w-1/3 sm:p-2'>
                                                    <div
                                                        className={`radial-progress flex items-center justify-center ${si.id === 'vercel' || si.id === 'expressjs' || si.id === 'nextjs' ? 'bg-white/30 rounded-full' : ''}`}
                                                        style={{ "--value": si.percentage, "--size": "full", "--thickness": "2px", width: '100%', height: 'auto', aspectRatio: '1/1' } as React.CSSProperties}
                                                        role="progressbar"
                                                    >
                                                        <Image
                                                            src={si.logo}
                                                            height={200}
                                                            width={200}
                                                            alt={si.name}
                                                            className='w-2/3'
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </motion.div>
                    )
                })
            }
        </div >
    )
}
