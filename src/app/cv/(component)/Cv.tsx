'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { motion } from "framer-motion";
import { useLanguage } from '@/app/(components)/LanguageProvider';

export const metadata = {
    title: 'CV | Sadat Alam Protik',
    description: 'Curriculum Vitae of Sadat Alam Protik',
};

export default function Cv() {

    const fadeInVariant = {
        hidden: { opacity: 0, filter: 'blur(10px)' },
        visible: { opacity: 1, filter: 'blur(0px)' }
    };

    const {language} = useLanguage();

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            transition={{ duration: 1 }}
            className='w-full h-screen overflow-hidden'>
            <motion.div className='w-full h-full overflow-auto sm:p-2'>
                <div className="max-w-2xl mx-auto my-16 sm:my-16 p-8 backdrop-blur-3xl bg-card/30 theme-border border-border theme-shadow theme-rounded">
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
                            <h1 className="text-2xl font-semibold text-primary">{language === 'en' ? 'Md. Sadat Alam Protik' : 'মোঃ সাদাত আলম প্রতীক'}</h1>
                            <p className="text-foreground">{language === 'en' ? 'B.Sc. in CSE, Daffodil International University' : 'বিএসসি ইন সিএসই, ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি'}</p>
                            <p className="text-foreground">{language === 'en' ? 'Email: protik0939@gmail.com' : 'ইমেইল: protik0939@gmail.com'}</p>
                            <p className="text-foreground">{language === 'en' ? 'Phone: +880 1721 846361' : 'ফোন: +৮৮০ ১৭২১ ৮৪৬৩৬১'}</p>
                        </div>
                    </motion.div>

                    <motion.section
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariant}
                        transition={{ delay: .4, duration: 1 }}
                        className="mb-6">
                        <h2 className="text-xl font-semibold text-primary">{language === 'en' ? 'Professional Summary' : 'পেশাগত সারাংশ'}</h2>
                        <p className="mt-2 text-foreground">
                            {language === 'en' ? 'Dedicated and efficient web developer with a strong foundation in computer science and a passion for creating dynamic, user-friendly web applications. Proficient in JavaScript, React, Node.js, and database management. Adept at problem-solving and committed to continuous learning and professional growth.' : 'কম্পিউটার সায়েন্সে শক্ত ভিত্তি এবং ডাইনামিক ও ব্যবহারবান্ধব (user-friendly) ওয়েব অ্যাপ্লিকেশন তৈরির গভীর আগ্রহসম্পন্ন একজন নিষ্ঠাবান ও দক্ষ ওয়েব ডেভেলপার। জাভাস্ক্রিপ্ট (JavaScript), রিয়্যাক্ট (React), নোড জেএস (Node.js) এবং ডেটাবেস ম্যানেজমেন্টে পারদর্শী। জটিল সমস্যা সমাধানে দক্ষ এবং প্রতিনিয়ত নতুন প্রযুক্তি শেখা ও পেশাগত উন্নয়নের প্রতি প্রতিশ্রুতিবদ্ধ।'}
                        </p>
                    </motion.section>

                    <motion.section
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariant}
                        transition={{ delay: .6, duration: 1 }}
                        className="mb-6">
                        <h2 className="text-xl font-semibold text-primary">{language === 'en' ? 'Technical Skills' : 'প্রযুক্তিগত দক্ষতা'}</h2>
                        <div className="mt-2 grid grid-cols-2 gap-4 text-foreground">
                            <div>
                                <h3 className="font-medium border-0 border-l-4 pl-2">{language === 'en' ? 'Languages' : 'ভাষাসমূহ'}</h3>
                                <p>{language === 'en' ? 'JavaScript, HTML, CSS, SQL' : 'জাভাস্ক্রিপ্ট, এইচটিএমএল, সিএসএস, এসকিউএল'}</p>
                            </div>
                            <div>
                                <h3 className="font-medium border-0 border-l-4 pl-2">{language === 'en' ? 'Frameworks & Libraries' : 'ফ্রেমওয়ার্ক ও লাইব্রেরি'}</h3>
                                <p>{language === 'en' ? 'React, Node.js, Express.js' : 'রিয়্যাক্ট, নোড জেএস, এক্সপ্রেস জেএস'}</p>
                            </div>
                            <div>
                                <h3 className="font-medium border-0 border-l-4 pl-2">{language === 'en' ? 'Databases' : 'ডেটাবেস'}</h3>
                                <p>{language === 'en' ? 'MongoDB, MySQL' : 'মঙ্গোডিবি, মাইএসকিউএল'}</p>
                            </div>
                            <div>
                                <h3 className="font-medium border-0 border-l-4 pl-2">{language === 'en' ? 'Other Tools' : 'অন্যান্য সরঞ্জাম'}</h3>
                                <p>{language === 'en' ? 'Axios, JWT, PWA' : 'অ্যাক্সিওস, জেডব্লিউটি, পিডব্লিউএ'}</p>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariant}
                        transition={{ delay: .8, duration: 1 }} className="mb-6">
                        <h2 className="text-xl font-semibold text-primary">{language === 'en' ? 'Projects' : 'প্রকল্পসমূহ'}</h2>

                        <div className="mt-4">
                            <h3 className="font-medium text-accent">{language === 'en' ? 'CSE P DIU Website' : 'সিএসই পি ডিআইইউ ওয়েবসাইট'}</h3>
                            <p className="text-foreground">
                                {language === 'en' ? 'Built a web app for university students to upload and share posts with images and videos.' : 'বিশ্ববিদ্যালয়ের শিক্ষার্থীদের জন্য একটি ওয়েব অ্যাপ তৈরি করেছি যেখানে তারা ছবি এবং ভিডিও সহ পোস্ট আপলোড এবং শেয়ার করতে পারে।'}
                            </p>
                            <p className="text-muted-foreground text-sm">{language === 'en' ? 'Technologies Used: React, MongoDB, Express.js, Vercel' : 'ব্যবহৃত প্রযুক্তি: রিয়্যাক্ট, মঙ্গোডিবি, এক্সপ্রেস জেএস, ভার্সেল'}</p>
                        </div>

                        <div className="mt-4">
                            <h3 className="font-medium text-accent">{language === 'en' ? 'Alphaone Education Consultancy' : 'আলফাওয়ান এডুকেশন কনসালটেন্সি'}</h3>
                            <p className="text-foreground">
                                {language === 'en' ? 'An introductory website about an educational consultancy in India.' : 'ভারতে একটি শিক্ষামূলক পরামর্শদাতা সংস্থার পরিচিতিমূলক ওয়েবসাইট।'}
                            </p>
                            <p className="text-gray-500 text-sm">{language === 'en' ? 'Technologies Used: JavaScript, Node.js, MongoDB' : 'ব্যবহৃত প্রযুক্তি: জাভাস্ক্রিপ্ট, নোড জেএস, মঙ্গোডিবি'}</p>
                        </div>

                        <div className="mt-4">
                            <h3 className="font-medium text-accent">{language === 'en' ? 'Football club with live TV' : 'লাইভ টিভি সহ ফুটবল ক্লাব'}</h3>
                            <p className="text-foreground">
                                {language === 'en' ? 'Built a video player with controls including Chromecast integration, buffering indicator, and quality selector. Though the main website is for a football club.' : 'একটি ভিডিও প্লেয়ার তৈরি করেছি যার নিয়ন্ত্রণগুলির মধ্যে রয়েছে ক্রোমকাস্ট ইন্টিগ্রেশন, বাফারিং সূচক এবং গুণমান নির্বাচনকারী। যদিও প্রধানত এই ওয়েবসাইটটি একটি ফুটবল ক্লাবের জন্য।'}
                            </p>
                            <p className="text-gray-500 text-sm">{language === 'en' ? 'Technologies Used: React,  JavaScript' : 'ব্যবহৃত প্রযুক্তি: রিয়্যাক্ট, জাভাস্ক্রিপ্ট'}</p>
                        </div>
                    </motion.section>

                    <motion.section
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariant}
                        transition={{ delay: 1, duration: 1 }}
                        className="mb-6">
                        <h2 className="text-xl font-semibold text-primary">{language === 'en' ? 'Education' : 'শিক্ষা'}</h2>
                        <p className="text-foreground mt-2">
                            <span className="font-medium">{language === 'en' ? 'B.Sc. in Computer Science and Engineering' : 'কম্পিউটার সায়েন্স এবং ইঞ্জিনিয়ারিং-এ বিএসসি'}</span>, {language === 'en' ? 'Daffodil International University' : 'ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি'}
                        </p>
                        <p className="text-muted-foreground text-sm">{language === 'en' ? 'CGPA: 3.96' : 'সিজিপিএ: ৩.৯৬'}</p>
                    </motion.section>

                    <motion.section
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariant}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="text-center mt-8">
                        <p className="text-foreground">{language === 'en' ? 'Email' : 'ইমেইল'}: <Link target='_blank' href={'mailto:protik0939@gmail.com'} className="text-accent hover:underline">protik0939@gmail.com</Link></p>
                        <p className="text-foreground">{language === 'en' ? 'LinkedIn' : 'লিঙ্কডইন'}: <Link target='_blank' href={'https://www.linkedin.com/in/protik0939/'} className="text-accent hover:underline">protik0939</Link></p>
                    </motion.section>
                </div>
            </motion.div>
        </motion.div>
    );
}
