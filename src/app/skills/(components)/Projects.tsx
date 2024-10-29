'use client'
import Titles from '@/Components/Titles'
import { projectsInfo } from '@/models/jsonData'
import Link from 'next/link'
import React from 'react'
import './skills.css'
import { TbExternalLink } from 'react-icons/tb'
import { motion } from "framer-motion";

export default function Projects() {

    const fadeInVariant = {
        hidden: { opacity: 0, filter: 'blur(10px)' },
        visible: { opacity: 1, filter: 'blur(0px)' }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            transition={{ duration: 1 }}
        >
            <Titles title={'Projects By me'} />
            <div className='w-full p-10 sm:p-4 flex flex-wrap'>
                {
                    projectsInfo.map(p => {
                        return (
                            <Link href={p.pLink} target='_blank' key={p.pId} className='w-1/2 sm:w-full h-auto aspect-video transition duration-100 border-0 hover:border-2'>
                                <div
                                    className='relative w-full h-full'
                                    style={{
                                        backgroundImage: `url(${p.pImgSrc})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className='absolute w-full h-full bottom-0 p-10 sm:p-4 bg-gradient-to-t from-black to-transparent'>
                                        <button className='absolute top-10 right-10 sm:top-4 sm:right-4 bg-black/50 py-1 px-4 rounded-full backdrop-blur-md hover:scale-110 flex items-center justify-center space-x-2'>
                                            <span>Visit</span><TbExternalLink />
                                        </button>
                                        <div className='absolute bottom-10 sm:bottom-4'>
                                            <div className='font-bold'>{p.pTitle}</div>
                                            <div>Level: {p.pLevel}</div>
                                            <div>{p.pType}</div>
                                            <div
                                                className='tooltip !text-left custom-tooltip'
                                                data-tip={p.pDetails}
                                            >
                                                {p.pDetails.slice(0, 50)}{p.pDetails.length > 70 && '...'}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Link>

                        )
                    })
                }
            </div>
        </motion.div>
    )
}
