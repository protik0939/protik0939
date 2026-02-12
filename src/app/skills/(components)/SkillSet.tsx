'use client'
import { skillData } from '@/models/jsonData'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import { useLanguage } from '@/app/(components)/LanguageProvider';

export default function SkillSet() {

    const fadeInVariant = {
        hidden: { opacity: 0, filter: 'blur(10px)' },
        visible: { opacity: 1, filter: 'blur(0px)' }
    };

    const { t } = useLanguage();

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
                            <h1 className='border-0 border-l-[20px] border-white mb-2 pl-2'>{t(sd.title)}</h1>
                            <div className='w-full flex flex-wrap justify-center'>
                                <div className='w-full p-5 flex flex-wrap items-center'>
                                    {
                                        sd.sdInfos.map(si => {
                                            return (
                                                <div key={si.id} className='w-1/6 p-4 sm:w-1/3 sm:p-2'>
                                                    <div className='relative w-full' style={{ aspectRatio: '1/1' }}>
                                                        <div
                                                            className={`radial-progress flex items-center justify-center ${si.id === 'vercel' || si.id === 'expressjs' || si.id === 'nextjs' ||  si.id === 'prismaorm' ? 'bg-white/30 rounded-full' : ''}`}
                                                            style={{ "--value": si.percentage, "--size": "full", "--thickness": "2px", width: '100%', height: '100%' } as React.CSSProperties}
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
                                                        {/* Percentage Badge */}
                                                        <div className='absolute -top-2 right-1/2 bg-white/90 backdrop-blur-sm text-gray-800 dark:bg-gray-800/90 dark:text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border-2 border-white'>
                                                            {t(si.percentageForTxt)}
                                                        </div>
                                                        {/* Name Badge */}
                                                        <div className='absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-800 dark:bg-gray-800/90 dark:text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 whitespace-nowrap'>
                                                            {t(si.name)} 
                                                        </div>
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
