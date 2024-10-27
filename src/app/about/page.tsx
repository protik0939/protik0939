'use client';
import React from 'react';
import { motion } from "framer-motion";

export default function Page() {

    // Animation variants for the blur fade-in effect
    const fadeInVariant = {
        hidden: { opacity: 0, filter: 'blur(10px)' },
        visible: { opacity: 1, filter: 'blur(0px)' }
    };

    return (
        <motion.div className='w-full h-screen overflow-hidden'>
            <div className='w-full h-full overflow-auto'>
                <div className="max-w-4xl mx-auto p-6 shadow-md rounded-lg my-10">
                    <header className="text-center mb-8">
                        <motion.h1
                            className="text-4xl font-bold text-white"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ duration: 1 }}
                        >
                            Discovering My Path: A Journey of Growth and Ambition
                        </motion.h1>
                        <motion.p
                            className="font-bold text-white mt-2"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 0.1, duration: 1 }}
                        >
                            By Protik
                        </motion.p>
                    </header>

                    <section className="mb-6">
                        <motion.p
                            className="text-lg text-white mb-4"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 0.2, duration: 1 }}
                        >
                            Good day everyone,
                        </motion.p>
                        <motion.p
                            className="text-lg text-white mb-4"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 0.3, duration: 1 }}
                        >
                            I am delighted to have this opportunity to share my story with you. My name is Protik, and I am currently pursuing my BSc in Computer Science and Engineering at Daffodil International University. Over the past few years, I have been on a journey of personal and professional growth, exploring the world of technology, learning from diverse experiences, and gradually shaping a vision for my future.
                        </motion.p>
                    </section>

                    <section className="mb-8">
                        <motion.h2
                            className="text-3xl font-semibold text-white mb-4"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 0.4, duration: 1 }}
                        >
                            Early Beginnings and Educational Background
                        </motion.h2>
                        <motion.p
                            className="text-lg text-white mb-4"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            My story begins in Dhaka, Bangladesh, where I grew up. Like many children, I was curious about the world around me. I found myself particularly drawn to gadgets and how they worked. I often spent hours dismantling toys, radios, and small electronics, just to see what made them tick. It was more than just play; it was an early spark that hinted at my love for problem-solving and technology.
                        </motion.p>
                        <motion.p
                            className="text-lg text-white mb-4"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 0.6, duration: 1 }}
                        >
                            I completed my Secondary School Certificate (SSC) in Science from BAF Shaheen College in Jashore in 2019, where I achieved a GPA of 4.67. My time there helped me build a strong foundation in subjects like physics and mathematics, which, unbeknownst to me at the time, would later prove invaluable in my career path.
                        </motion.p>
                        <motion.p
                            className="text-lg text-white mb-4"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 0.7, duration: 1 }}
                        >
                            Following that, I pursued my Higher Secondary Certificate (HSC) in Science from BAF Shaheen College in Kurmitola, Dhaka, in 2021. I earned a GPA of 5.00, a milestone that reinforced my determination to pursue higher education in a field I was passionate about: computer science.
                        </motion.p>
                    </section>

                    <section className="mb-8">
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="text-3xl font-semibold text-white mb-4">
                            Pursuing Computer Science
                        </motion.h2>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 0.9, duration: 1 }}
                            className="text-lg text-white mb-4">
                            After completing my HSC, I enrolled in Daffodil International University to pursue a degree in Computer Science and Engineering. Currently, I am in my third year, and this journey has been transformative in many ways.
                        </motion.p>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 1, duration: 1 }}
                            className="text-lg text-white mb-4">
                            At DIU, I have not only learned the theoretical aspects of computer science but also gained hands-on experience with various technologies. From working on projects related to web development and software engineering to studying subjects like data structures, algorithms, and database management, my knowledge has expanded significantly. One of the most rewarding aspects of my studies has been the opportunity to apply what I&#39;ve learned in real-world scenarios.
                        </motion.p>
                    </section>

                    <section className="mb-8">
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 1.1, duration: 1 }}
                            className="text-3xl font-semibold text-white mb-4">Skills and Competencies</motion.h2>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 1.2, duration: 1 }}
                            className="text-lg text-white mb-4">
                            Over the course of my education and personal projects, I have developed a diverse set of skills that I believe will be instrumental in my future career. These skills range from technical abilities to soft skills that are essential for teamwork and leadership.
                        </motion.p>
                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 1.3, duration: 1 }}
                            className="list-disc pl-6 mb-4">
                            <li className="text-lg text-white mb-2">Proficient in programming languages such as C/C++, JavaScript and Python.</li>
                            <li className="text-lg text-white mb-2">Experienced in web development with React.js, MongoDB, Node.js, and Express.js.</li>
                            <li className="text-lg text-white mb-2">Skilled in database management, API integration, and version control using Git.</li>
                            <li className="text-lg text-white mb-2">Strong problem-solving skills, teamwork, and time management.</li>
                        </motion.ul>
                    </section>

                    <section className="mb-8">
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 1.4, duration: 1 }}
                            className="text-3xl font-semibold text-white mb-4">Challenges and Growth</motion.h2>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="text-lg text-white mb-4">
                            Like anyone on a journey of growth, I have encountered my share of challenges. One significant challenge was transitioning from purely academic learning to real-world application. Theoretical knowledge is important, but the first time I tried to apply that knowledge to a real project, I quickly realized that there&#39;s so much more to it.
                        </motion.p>
                    </section>

                    <section className="mb-8">
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 1.6, duration: 1 }}
                            className="text-3xl font-semibold text-white mb-4">Future Goals</motion.h2>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 1.7, duration: 1 }}
                            className="text-lg text-white mb-4">
                            Looking ahead, I have several goals that I am passionate about pursuing. First and foremost, I want to continue learning and expanding my knowledge in the field of computer science. I plan to explore areas such as machine learning, artificial intelligence, and blockchain technology.
                        </motion.p>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 1.8, duration: 1 }}
                            className="text-lg text-white mb-4">
                            In the long term, I hope to start my own tech company. Entrepreneurship is something I&#39;ve always been interested in, and I believe that my skills in software development, combined with my desire to solve real-world problems, will serve me well in this pursuit.
                        </motion.p>
                    </section>

                    <section className="mb-8">
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 1.9, duration: 1 }}
                            className="text-3xl font-semibold text-white mb-4">Conclusion</motion.h2>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 2.0, duration: 1 }}
                            className="text-lg text-white mb-4">
                            In conclusion, my journey so far has been one of discovery, growth, and ambition. From my early fascination with technology to my current studies and projects, I have always been driven by a desire to learn and create. The challenges I&#39;ve faced have only made me more determined, and the skills I&#39;ve gained have equipped me for the future.
                        </motion.p>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 2.1, duration: 1 }}
                            className="text-lg text-white mb-4">
                            Thank you for taking the time to listen to my story. I look forward to connecting with like-minded individuals and contributing to the ever-evolving world of technology.
                        </motion.p>
                    </section>



                </div>
            </div>
        </motion.div>
    );
}
