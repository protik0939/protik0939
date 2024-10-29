'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { motion } from "framer-motion";

export const metadata = {
    title: 'CV | Sadat Alam Protik',
    description: 'Curriculum Vitae of Sadat Alam Protik',
};

export default function Cv() {

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
            className='w-full h-screen overflow-hidden'>
            <motion.div className='w-full h-full overflow-auto sm:p-2'>
                <div className="max-w-2xl mx-auto my-16 sm:my-16 p-8 bg-gray-800/10 backdrop-blur-sm border shadow-inner shadow-white rounded-lg">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariant}
                        transition={{ delay: .2, duration: 1 }}
                        className="flex items-center sm:justify-center sm:flex-col sm:space-y-6 bgg:space-x-6 mb-8">
                        <Image
                            src="/protikformal.webp"
                            alt="Protik"
                            height={100}
                            width={100}
                            className="w-28 h-28 rounded-full object-cover border-4 border-gray-200"
                        />
                        <div>
                            <h1 className="text-2xl font-semibold text-slate-400">Md. Sadat Alam Protik</h1>
                            <p className="text-white">B.Sc. in CSE, Daffodil International University</p>
                            <p className="text-white">Email: protik0939@gmai.com</p>
                            <p className="text-white">Phone: +880 1721 846361</p>
                        </div>
                    </motion.div>

                    <motion.section
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariant}
                        transition={{ delay: .4, duration: 1 }}
                        className="mb-6">
                        <h2 className="text-xl font-semibold text-slate-200">Professional Summary</h2>
                        <p className="mt-2 text-white">
                            Detail-oriented and motivated Computer Science student specializing in software
                            development with hands-on experience in full-stack development, data analysis, and
                            artificial intelligence. Skilled in React, Node.js, MongoDB, and Express.js.
                        </p>
                    </motion.section>

                    <motion.section
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariant}
                        transition={{ delay: .6, duration: 1 }}
                        className="mb-6">
                        <h2 className="text-xl font-semibold text-slate-200">Technical Skills</h2>
                        <div className="mt-2 grid grid-cols-2 gap-4 text-white">
                            <div>
                                <h3 className="font-medium border-0 border-l-4 pl-2">Languages</h3>
                                <p>JavaScript, HTML, CSS, SQL</p>
                            </div>
                            <div>
                                <h3 className="font-medium border-0 border-l-4 pl-2">Frameworks & Libraries</h3>
                                <p>React, Node.js, Express.js</p>
                            </div>
                            <div>
                                <h3 className="font-medium border-0 border-l-4 pl-2">Databases</h3>
                                <p>MongoDB, MySQL</p>
                            </div>
                            <div>
                                <h3 className="font-medium border-0 border-l-4 pl-2">Other Tools</h3>
                                <p>Axios, JWT, PWA</p>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariant}
                        transition={{ delay: .8, duration: 1 }} className="mb-6">
                        <h2 className="text-xl font-semibold text-slate-200">Projects</h2>

                        <div className="mt-4">
                            <h3 className="font-medium text-slate-300">CSE P DIU Website</h3>
                            <p className="text-white">
                                Built a web app for university students to upload and share posts with images and videos.
                            </p>
                            <p className="text-gray-500 text-sm">Technologies Used: React, MongoDB, Express.js, Vercel</p>
                        </div>

                        <div className="mt-4">
                            <h3 className="font-medium text-slate-300">Alphaone Education Consultancy</h3>
                            <p className="text-white">
                                An introductory website about an educational consultancy in India.
                            </p>
                            <p className="text-gray-500 text-sm">Technologies Used: JavaScript, Node.js, MongoDB</p>
                        </div>

                        <div className="mt-4">
                            <h3 className="font-medium text-slate-300">Football club with live TV</h3>
                            <p className="text-white">
                                Built a video player with controls including Chromecast integration, buffering indicator, and quality selector. Though the main website is for a football club.
                            </p>
                            <p className="text-gray-500 text-sm">Technologies Used: React,  JavaScript</p>
                        </div>
                    </motion.section>

                    <motion.section
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariant}
                        transition={{ delay: 1, duration: 1 }}
                        className="mb-6">
                        <h2 className="text-xl font-semibold text-slate-200">Education</h2>
                        <p className="text-white mt-2">
                            <span className="font-medium">B.Sc. in Computer Science and Engineering</span>, Daffodil
                            International University
                        </p>
                        <p className="text-gray-500 text-sm">CGPA: 3.96</p>
                    </motion.section>

                    <motion.section
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariant}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="text-center mt-8">
                        <p className="text-slate-200">Email: <Link target='_blank' href={'mailto:protik0939@gmail.com'}>protik0939@gmail.com</Link></p>
                        <p className="text-slate-200">LinkedIn: <Link target='_blank' href={'https://www.linkedin.com/in/protik0939/'}>protik0939</Link></p>
                    </motion.section>
                </div>
            </motion.div>
        </motion.div>
    );
}
