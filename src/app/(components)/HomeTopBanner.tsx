'use client'
import React, { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import Image from 'next/image';

import ptk from '../../../public/protikWOutBgg.webp';
import ptkWhite from '../../../public/protikWOutBggWhite.webp';
import ptkOcean from '../../../public/protikWOutBggOcean.webp';
import ptkSunset from '../../../public/protikWOutBggSunset.webp';
import ptkForest from '../../../public/protikWOutBggForest.webp';
import ptkInformal from '../../../public/protikWOutBggPubg.webp';

import { GrProjects } from "react-icons/gr";
import { GiGraduateCap } from "react-icons/gi";
import { TiInfoLargeOutline } from "react-icons/ti";
import { CgFeed } from "react-icons/cg";
import { topBarData } from '@/models/jsonData';
import dynamic from 'next/dynamic';
import { useLanguage } from './LanguageProvider';
import { useTheme } from './ThemeProvider';

const ShuffleText = dynamic(() => import('react-shuffle-text'), { ssr: false });

export default function HomeTopBanner() {
    const { actualTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);
    const [showText4, setShowText4] = useState(false);
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowText1(true), 0);
        setTimeout(() => setShowText2(true), 200);
        setTimeout(() => setShowText3(true), 400);
        setTimeout(() => setShowText4(true), 800);
        setTimeout(() => setMounted(true), 900);
        setTimeout(() => setShowImage(true), 1200);
    }, []);

    const springs = useSpring({
        from: { y: 20 },
        to: [{ y: 40 }, { y: 20 }],
        loop: { reverse: true },
        config: { duration: 2000, tension: 180, friction: 12 },
        pause: !mounted,
    });

    const springsImage = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 2000, tension: 180, friction: 12 },
        pause: !mounted
    });

    const { t, language } = useLanguage();

    // Determine image based on current theme
    const getThemeImage = () => {
        switch (actualTheme) {
            case 'light':
                return ptkWhite;
            case 'ocean':
                return ptkOcean;
            case 'sunset':
                return ptkSunset;
            case 'forest':
                return ptkForest;
            case 'informal':
                return ptkInformal;
            case 'dark':
            default:
                return ptk;
        }
    };
    
    const currentImage = getThemeImage();

    return (
        <div className='relative h-screen w-full flex justify-center items-center'>
            <animated.div
                style={{
                    ...springs,
                    zIndex: 5,
                }}
                className='absolute font-bold flex flex-col items-center w-full top-10 sm:top-5 overflow-hidden'>
                {showText1 && (
                    <div className="text-2xl text-muted-foreground theme-transition">
                        {language === 'en'
                            ? <ShuffleText content={t(topBarData[0].first)} />
                            : t(topBarData[0].first)}
                    </div>
                )}
                {showText2 && (
                    <div className='text-5xl sm:text-3xl text-foreground theme-transition'>
                        {language === 'en'
                            ? <ShuffleText content={t(topBarData[0].second)} />
                            : t(topBarData[0].second)}
                    </div>
                )}
                {showText3 && (
                    <div className='text-7xl sm:text-5xl text-primary theme-transition'>
                        {language === 'en'
                            ? <ShuffleText content={t(topBarData[0].third)} />
                            : t(topBarData[0].third)}
                    </div>
                )}
                {showText4 && (
                    <div className='text-9xl sm:text-7xl text-accent theme-transition'>
                        {language === 'en'
                            ? <ShuffleText content={t(topBarData[0].fourth)} />
                            : t(topBarData[0].fourth)}
                    </div>
                )}
            </animated.div>

            <div className={`w-full h-full absolute flex items-end justify-center ${actualTheme === 'informal' ? 'overflow-hidden' : ''}`} style={{ zIndex: 4 }}>
                <animated.div
                    style={{
                        ...springsImage,
                    }}
                    className={`${
                        actualTheme === 'informal' 
                            ? 'absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[100%]' 
                            : ''
                    }`}>
                    {showImage && <Image
                        src={currentImage}
                        alt='Protik'
                        width={610}
                        height={300}
                        className={`${
                            actualTheme === 'informal'
                                ? 'absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[90%]'
                                : 'h-auto w-[400px] sm:w-[100%]'
                        }`}
                        priority={true}
                    />}
                </animated.div>
            </div>


            <div className='relative w-64 h-64 hidden'>
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2'>
                    <div className='text-3xl bg-white/20 rounded-full p-3 border border-white'>
                        <GrProjects />
                    </div>
                </div>
                <div className='absolute left-0 top-1/2 transform -translate-y-1/2'>
                    <div className='text-3xl bg-white/20 rounded-full p-3 border border-white'>
                        <GiGraduateCap />
                    </div>
                </div>
                <div className='absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-full'>
                    <div className='text-3xl bg-white/20 rounded-full p-3 border border-white'>
                        <TiInfoLargeOutline />
                    </div>
                </div>
                <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>
                    <div className='text-3xl bg-white/20 rounded-full p-3 border border-white'>
                        <CgFeed />
                    </div>
                </div>
                <div className='absolute top-1/4 left-1/4 transform'>
                    <div className='text-3xl bg-white/20 rounded-full p-3 border border-white'>
                        <GrProjects />
                    </div>
                </div>
                <div className='absolute top-3/4 left-1/4 transform'>
                    <div className='text-3xl bg-white/20 rounded-full p-3 border border-white'>
                        <GiGraduateCap />
                    </div>
                </div>
            </div>


            <div className='w-full h-full absolute z-10'>
                <div className='absolute w-full h-1/2 bottom-0 bg-gradient-to-t from-background to-transparent' />
            </div>
        </div>
    );
}
