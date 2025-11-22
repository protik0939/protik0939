'use client';
import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '@/app/(components)/LanguageProvider';

export default function About() {

    const fadeInVariant = {
        hidden: { opacity: 0, filter: 'blur(10px)' },
        visible: { opacity: 1, filter: 'blur(0px)' }
    };

    const {language} = useLanguage();

    return (
        <motion.div className='w-full h-screen overflow-hidden'>
            <div className='w-full h-full overflow-auto'>
                <div className="max-w-4xl mx-auto p-6 theme-shadow bg-card/30 backdrop-blur-3xl theme-rounded my-10 theme-border border-border">
                    <div className="text-center mb-8">
                        <motion.h1
                            className="text-4xl font-bold text-primary"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ duration: 1 }}
                        >
                            {
                                language === 'en' ? 'Discovering My Path: A Journey of Growth and Ambition' : 'আমার পথচলা: নিজেকে গড়া ও স্বপ্ন ছোঁয়ার গল্প'
                            }
                        </motion.h1>
                        <motion.p
                            className="font-bold text-accent mt-2"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 0.1, duration: 1 }}
                        >
                            {
                                language === 'en' ? 'by Sadat Alam Protik' : 'সাদাত আলম প্রতীক দ্বারা লিখিত'
                            }
                        </motion.p>
                    </div>

                    <section className="mb-6">
                        <motion.p
                            className="text-lg text-white mb-4"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 0.2, duration: 1 }}
                        >
                            {
                                language === 'en' ? 'Assalamu Alaikum everyone,' : 'আসসালামু আলাইকুম সবাইকে,'
                            }
                        </motion.p>
                        <motion.p
                            className="text-lg text-white mb-4"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 0.3, duration: 1 }}
                        >
                            {
                                language === 'en' ? `I am delighted to have this opportunity to share my story with you. My name is Protik, and I am currently pursuing my BSc in Computer Science and Engineering at Daffodil International University. Over the past few years, I have been on a journey of personal and professional growth, exploring the world of technology, learning from diverse experiences, and gradually shaping a vision for my future.` : `আজ আপনাদের সামনে আমার জীবনের গল্পটি তুলে ধরতে পেরে আমি অত্যন্ত আনন্দিত। আমার নাম প্রতীক এবং বর্তমানে আমি ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটিতে কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (CSE) বিভাগে বিএসসি করছি। বিগত কয়েক বছর ছিল আমার ব্যক্তিগত ও পেশাগত বিকাশের এক অনন্য যাত্রা, যেখানে আমি প্রযুক্তির জগতকে অন্বেষণ করেছি, বিচিত্র সব অভিজ্ঞতা থেকে শিক্ষা নিয়েছি এবং ধীরে ধীরে আমার ভবিষ্যতের স্বপ্নকে একটি সুস্পষ্ট রূপ দেওয়ার চেষ্টা করেছি।`
                            }
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
                            {
                                language === 'en' ? 'Early Life and Education' : 'শুরুর দিনগুলো এবং শিক্ষাগত প্রেক্ষাপট'
                            }
                        </motion.h2>
                        <motion.p
                            className="text-lg text-white mb-4"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            {
                                language === 'en' ? 'My story begins in Dhaka, Bangladesh, where I grew up. Like many children, I was curious about the world around me. I found myself particularly drawn to gadgets and how they worked. I often spent hours dismantling toys, radios, and small electronics, just to see what made them tick. It was more than just play; it was an early spark that hinted at my love for problem-solving and technology.' : 'আমার গল্পের শুরু বাংলাদেশের ঢাকায়, যেখানে আমি বড় হয়েছি। অন্য সব শিশুর মতোই, আমিও আমার চারপাশের জগত নিয়ে কৌতূহলী ছিলাম। বিশেষ করে বিভিন্ন গ্যাজেট এবং সেগুলো কীভাবে কাজ করে, তার প্রতি আমার প্রবল আকর্ষণ ছিল। খেলনা, রেডিও বা ছোটখাটো ইলেকট্রনিক্স খুলে তার ভেতরের কলকব্জা দেখার জন্য আমি ঘণ্টার পর ঘণ্টা পার করে দিতাম। এটি কেবল খেলা ছিল না; বরং এটি ছিল সমস্যা সমাধান এবং প্রযুক্তির প্রতি আমার ভালোবাসার এক আগাম ইঙ্গিত।'
                            }
                        </motion.p>
                        <motion.p
                            className="text-lg text-white mb-4"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 0.6, duration: 1 }}
                        >
                            {
                                language === 'en' ? 'I completed my Secondary School Certificate (SSC) in Science from BAF Shaheen College in Jashore in 2019, where I achieved a GPA of 4.67. My time there helped me build a strong foundation in subjects like physics and mathematics, which, unbeknownst to me at the time, would later prove invaluable in my career path.' : '২০১৯ সালে আমি যশোরের বিএএফ শাহীন কলেজ থেকে বিজ্ঞান বিভাগে ৪.৬৭ জিপিএ নিয়ে আমার মাধ্যমিক (SSC) সম্পন্ন করি। সেখানকার শিক্ষাজীবন আমাকে পদার্থবিজ্ঞান এবং গণিতের মতো বিষয়গুলোতে একটি শক্ত ভিত্তি গড়তে সাহায্য করেছিল। তখন আমি জানতাম না যে, এই ভিত্তিই পরবর্তীতে আমার ক্যারিয়ারের পথের পাথেয় হয়ে উঠবে।'
                            }
                        </motion.p>
                        <motion.p
                            className="text-lg text-white mb-4"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 0.7, duration: 1 }}
                        >
                            {
                                language === 'en' ? 'Following that, I pursued my Higher Secondary Certificate (HSC) in Science from BAF Shaheen College in Kurmitola, Dhaka, in 2021. I earned a GPA of 5.00, a milestone that reinforced my determination to pursue higher education in a field I was passionate about: computer science.' : 'এরপর ২০২১ সালে আমি ঢাকার কুর্মিটোলায় অবস্থিত বিএএফ শাহীন কলেজ থেকে বিজ্ঞান বিভাগে উচ্চ মাধ্যমিক (HSC) সম্পন্ন করি এবং জিপিএ ৫.০০ অর্জন করি। এই সাফল্য কম্পিউটার সায়েন্স—যে বিষয়টির প্রতি আমি গভীরভাবে অনুরাগী ছিলাম—তা নিয়ে উচ্চশিক্ষা গ্রহণের প্রতি আমার সংকল্পকে আরও দৃঢ় করেছিল।'
                            }
                        </motion.p>
                    </section>

                    <section className="mb-8">
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="text-3xl font-semibold text-white mb-4">
                            {
                                language === 'en' ? 'Pursuing Computer Science' : 'কম্পিউটার সায়েন্সের পথে যাত্রা'
                            }
                        </motion.h2>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 0.9, duration: 1 }}
                            className="text-lg text-white mb-4">
                            {
                                language === 'en' ? 'After completing my HSC, I enrolled in Daffodil International University to pursue a degree in Computer Science and Engineering. Currently, I am in my third year, and this journey has been transformative in many ways.' : 'এইচএসসি শেষ করার পর, আমি ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটিতে কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং পড়ার জন্য ভর্তি হই। বর্তমানে আমি তৃতীয় বর্ষে আছি এবং এই সময়টা আমার জন্য নানাভাবেই পরিবর্তনমূলক।'
                            }
                        </motion.p>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 1, duration: 1 }}
                            className="text-lg text-white mb-4">
                            {
                                language === 'en' ? 'At DIU, I have not only learned the theoretical aspects of computer science but also gained hands-on experience with various technologies. From working on projects related to web development and software engineering to studying subjects like data structures, algorithms, and database management, my knowledge has expanded significantly. One of the most rewarding aspects of my studies has been the opportunity to apply what I\'ve learned in real-world scenarios.' : 'ড্যাফোডিল-এ আমি কেবল কম্পিউটার সায়েন্সের তাত্ত্বিক দিকগুলোই শিখিনি, বরং হাতে-কলমে বিভিন্ন প্রযুক্তির ব্যবহারও শিখেছি। ওয়েব ডেভেলপমেন্ট এবং সফটওয়্যার ইঞ্জিনিয়ারিং-এর প্রজেক্ট করা থেকে শুরু করে ডেটা স্ট্রাকচার, অ্যালগরিদম এবং ডেটাবেস ম্যানেজমেন্টের মতো বিষয়গুলো অধ্যয়ন—সব মিলিয়ে আমার জ্ঞানের পরিধি অনেক বিস্তৃত হয়েছে। আমার পড়াশোনার সবচেয়ে আনন্দদায়ক দিক হলো অর্জিত জ্ঞানকে বাস্তব ক্ষেত্রে প্রয়োগ করার সুযোগ পাওয়া।'
                            }
                        </motion.p>
                    </section>

                    <section className="mb-8">
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 1.1, duration: 1 }}
                            className="text-3xl font-semibold text-white mb-4">
                            {
                                language === 'en' ? 'Skills and Competencies' : 'দক্ষতা ও যোগ্যতা'
                            }
                        </motion.h2>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 1.2, duration: 1 }}
                            className="text-lg text-white mb-4">
                            {
                                language === 'en' ? 'Over the course of my education and personal projects, I have developed a diverse set of skills that I believe will be instrumental in my future career. These skills range from technical abilities to soft skills that are essential for teamwork and leadership.' : 'আমার শিক্ষাজীবন এবং ব্যক্তিগত প্রজেক্টগুলোর মাধ্যমে আমি বিচিত্র সব দক্ষতা অর্জন করেছি, যা আমার ভবিষ্যৎ ক্যারিয়ারে গুরুত্বপূর্ণ ভূমিকা রাখবে বলে আমি বিশ্বাস করি। এর মধ্যে কারিগরি দক্ষতার পাশাপাশি টিমওয়ার্ক এবং নেতৃত্বের জন্য প্রয়োজনীয় সফট স্কিল-ও অন্তর্ভুক্ত।'
                            }
                        </motion.p>
                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 1.3, duration: 1 }}
                            className="list-disc pl-6 mb-4">
                            <li className="text-lg text-white mb-2">
                                {
                                    language === 'en' ? 'Proficient in programming languages such as C/C++, JavaScript and Python.' : 'C/C++, JavaScript এবং Python প্রোগ্রামিং ল্যাঙ্গুয়েজে দক্ষতা।'
                                }
                            </li>
                            <li className="text-lg text-white mb-2">
                                {
                                    language === 'en' ? 'Experienced in web development with React.js, MongoDB, Node.js, and Express.js.' : 'React.js, MongoDB, Node.js এবং Express.js ব্যবহার করে ওয়েব ডেভেলপমেন্টে অভিজ্ঞতা।'
                                }
                            </li>
                            <li className="text-lg text-white mb-2">
                                {
                                    language === 'en' ? 'Skilled in database management, API integration, and version control using Git.' : 'ডেটাবেস ম্যানেজমেন্ট, API ইন্টিগ্রেশন এবং Git ব্যবহার করে ভার্সন কন্ট্রোলে পারদর্শিতা।'
                                }
                            </li>
                            <li className="text-lg text-white mb-2">
                                {
                                    language === 'en' ? 'Strong problem-solving skills, teamwork, and time management.' : 'জোরালো সমস্যা সমাধান (problem-solving) দক্ষতা, দলগতভাবে কাজ করা এবং সময় ব্যবস্থাপনায় যোগ্যতা।'
                                }
                            </li>
                        </motion.ul>
                    </section>

                    <section className="mb-8">
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 1.4, duration: 1 }}
                            className="text-3xl font-semibold text-white mb-4">
                            {
                                language === 'en' ? 'Challenges and Growth' : 'চ্যালেঞ্জ এবং উত্তরণ প্রবৃদ্ধির পথে'
                            }
                        </motion.h2>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="text-lg text-white mb-4">
                            {
                                language === 'en' ? 'Like anyone on a journey of growth, I have encountered my share of challenges. One significant challenge was transitioning from purely academic learning to real-world application. Theoretical knowledge is important, but the first time I tried to apply that knowledge to a real project, I quickly realized that there\'s so much more to it.' : 'যে কোনো মানুষের মতোই আমাকেও জীবনের যাত্রাপথে বেশ কিছু চ্যালেঞ্জের মুখোমুখি হতে হয়েছে। একটি বড় চ্যালেঞ্জ ছিল তাত্ত্বিক পড়াশোনা থেকে বেরিয়ে বাস্তব প্রয়োগের জগতে প্রবেশ করা। তাত্ত্বিক জ্ঞান অবশ্যই জরুরি, কিন্তু আমি যখন প্রথমবার সেই জ্ঞান একটি বাস্তব প্রজেক্টে প্রয়োগ করতে গেলাম, তখন বুঝতে পারলাম যে এর গভীরতা অনেক বেশি এবং শিখতে হবে আরও অনেক কিছু।'
                            }
                        </motion.p>
                    </section>

                    <section className="mb-8">
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 1.6, duration: 1 }}
                            className="text-3xl font-semibold text-white mb-4">
                            {
                                language === 'en' ? 'Future Goals' : 'ভবিষ্যৎ লক্ষ্য'
                            }
                        </motion.h2>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 1.7, duration: 1 }}
                            className="text-lg text-white mb-4">
                            {
                                language === 'en' ? 'Looking ahead, I have several goals that I am passionate about pursuing. First and foremost, I want to continue learning and expanding my knowledge in the field of computer science. I plan to explore areas such as machine learning, artificial intelligence, and blockchain technology.' : 'সামনের দিনগুলোর জন্য আমার বেশ কিছু লক্ষ্য রয়েছে। প্রথমত, আমি কম্পিউটার সায়েন্সের ক্ষেত্রে আমার শেখার পরিধি আরও বাড়াতে চাই। মেশিন লার্নিং, আর্টিফিশিয়াল ইন্টেলিজেন্স এবং ব্লকচেইন প্রযুক্তির মতো বিষয়গুলো নিয়ে কাজ করার পরিকল্পনা আমার আছে।'
                            }
                        </motion.p>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 1.8, duration: 1 }}
                            className="text-lg text-white mb-4">
                            {
                                language === 'en' ? 'In the long term, I hope to start my own tech company. Entrepreneurship is something I\'ve always been interested in, and I believe that my skills in software development, combined with my desire to solve real-world problems, will serve me well in this pursuit.' : 'দীর্ঘমেয়াদে, আমি আমার নিজের একটি টেক কোম্পানি বা স্টার্টআপ শুরু করতে চাই। উদ্যোক্তা হওয়ার স্বপ্ন আমি সবসময়ই দেখেছি। আমি বিশ্বাস করি, সফটওয়্যার ডেভেলপমেন্টে আমার দক্ষতা এবং বাস্তব সমস্যা সমাধানের প্রবল ইচ্ছা আমাকে এই পথে সফল হতে সাহায্য করবে।'
                            }
                        </motion.p>
                    </section>

                    <section className="mb-8">
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 1.9, duration: 1 }}
                            className="text-3xl font-semibold text-white mb-4">
                            {
                                language === 'en' ? 'Conclusion' : 'উপসংহার'
                            }
                        </motion.h2>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 2.0, duration: 1 }}
                            className="text-lg text-white mb-4">
                            {
                                language === 'en' ? 'In conclusion, my journey so far has been one of discovery, growth, and ambition. From my early fascination with technology to my current studies and projects, I have always been driven by a desire to learn and create. The challenges I\'ve faced have only made me more determined, and the skills I\'ve gained have equipped me for the future.' : 'পরিশেষে বলা যায়, আমার এ পর্যন্ত যাত্রাটি ছিল নিজেকে আবিষ্কার, বিকাশ এবং উচ্চাকাঙ্ক্ষার গল্প। প্রযুক্তির প্রতি আমার ছোটবেলার সেই মুগ্ধতা থেকে শুরু করে বর্তমানের পড়াশোনা ও প্রজেক্ট—সবকিছুর মূলেই ছিল শেখার এবং নতুন কিছু সৃষ্টি করার প্রবল আকাঙ্ক্ষা। যেসব বাধার সম্মুখীন হয়েছি, সেগুলো আমাকে আরও দৃঢ়প্রতিজ্ঞ করেছে এবং অর্জিত দক্ষতাগুলো আমাকে ভবিষ্যতের জন্য প্রস্তুত করেছে।'
                            }
                        </motion.p>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariant}
                            transition={{ delay: 2.1, duration: 1 }}
                            className="text-lg text-white mb-4">
                            {
                                language === 'en' ? 'Thank you for taking the time to listen to my story. I look forward to connecting with like-minded individuals and contributing to the ever-evolving world of technology.' : 'আমার গল্প শোনার জন্য আপনাদের সবাইকে ধন্যবাদ। আমি সমমনা মানুষদের সাথে যুক্ত হতে এবং প্রযুক্তির এই প্রতিনিয়ত পরিবর্তনশীল জগতে অবদান রাখতে উন্মুখ হয়ে আছি।'
                            }
                        </motion.p>
                    </section>



                </div>
            </div>
        </motion.div>
    );
}
