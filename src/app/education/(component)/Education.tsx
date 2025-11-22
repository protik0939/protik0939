'use client'
import React, { useRef, useState } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { eduData } from "@/models/jsonData";
import { TEducationData } from "@/models/typeScript";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useLanguage } from "@/app/(components)/LanguageProvider";
import { IoInformationCircleOutline, IoCloseCircle } from "react-icons/io5";

const Education = () => {

    const fadeInVariant = {
        hidden: { opacity: 0, filter: 'blur(10px)' },
        visible: { opacity: 1, filter: 'blur(0px)' }
    };

    return (
        <motion.div
            className="w-full h-screen place-content-center px-4 py-12 text-slate-900"
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            transition={{ duration: 1 }}>
            <TiltCards />
        </motion.div>
    );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCards = () => {
    const [selectedData, setSelectedData] = useState<TEducationData | null>(null);

    return (
        <>
            <div className="flex sm:flex-col w-full h-full items-center justify-center space-x-4 sm:space-x-0 sm:space-y-4">
                {
                    eduData.map((e) => {
                        return <TiltCard key={e.dType} data={e} onViewDetails={setSelectedData} />;
                    })
                }
            </div>
            {selectedData && <DetailsModal data={selectedData} onClose={() => setSelectedData(null)} />}
        </>
    );
};

interface TiltCardProps {
    data: TEducationData;
    onViewDetails: (data: TEducationData) => void;
}

const TiltCard = ({ data, onViewDetails }: TiltCardProps) => {
    const { dType, dOn, dYear, iLogo, institution, dResult, iImage, iDetails } = data;

    const ref = useRef<HTMLDivElement | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const {t, language} = useLanguage();

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
                backgroundImage: `url(${iImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300/30 to-violet-300/50"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute flex flex-col justify-center items-center inset-4 place-content-center rounded-xl bg-white/50 backdrop-blur-lg shadow-lg"
            >
                <div className="flex flex-col justify-center items-center sm:flex-row">
                    <Image
                        style={{
                            transform: "translateZ(75px)",
                        }}
                        src={iLogo}
                        alt={institution}
                        height={200}
                        width={200}
                        className="text-4xl h-auto w-2/3 sm:w-1/3"
                    />
                    <div
                        style={{
                            transform: "translateZ(50px)",
                        }}
                        className="text-center"
                    >
                        <h1 className=" text-xl font-bold">{t(dType)}  |  {t(dOn)}</h1>
                        {
                            language === 'bn' ? (
                                <h1 className=" text-xs">{t(institution)} থেকে</h1>
                            ) : (
                                <h1 className=" text-xs">From: {t(institution)}</h1>
                            )
                        }
                        <h1 className=" text-xl font-bold">{t(dResult)}</h1>
                        <h1 className=" text-xs font-bold">{t('edu.year')}: {t(dYear)}</h1>
                    </div>
                </div>

                <Marquee className="overflow-hidden">
                    <p>{t(iDetails)}</p>
                </Marquee>

                <button
                    onClick={() => onViewDetails(data)}
                    style={{
                        transform: "translateZ(75px)",
                    }}
                    className="mt-2 px-4 py-2 bg-primary hover:bg-primary/80 text-primary-foreground theme-rounded flex items-center gap-2 theme-transition hover:theme-shadow"
                >
                    <IoInformationCircleOutline className="text-xl" />
                    {t('ui.viewDetails')}
                </button>

            </div>
        </motion.div>
    );
};

// Details Modal Component (rendered outside the 3D card)
const DetailsModal = ({ data, onClose }: { data: TEducationData; onClose: () => void }) => {
    const { dType, dOn, dYear, iLogo, institution, dResult, iDetails } = data;
    const { t } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
            style={{ 
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }}
            onClick={onClose}
        >
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-xl" />
            
            {/* Modal Content */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-4xl max-h-[90vh] sm:max-h-[85vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Liquid Glass Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                    {/* Liquid Glass Background with Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-white/10 dark:from-gray-800/40 dark:via-gray-900/30 dark:to-black/20 backdrop-blur-2xl" />
                    
                    {/* Animated Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
                    
                    {/* Content */}
                    <div className="relative p-6 sm:p-8 overflow-y-auto max-h-[90vh] sm:max-h-[85vh]">
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 theme-rounded bg-card/50 hover:bg-accent/30 backdrop-blur-sm theme-border border-primary theme-transition hover:scale-110 group"
                        >
                            <IoCloseCircle className="text-3xl text-foreground group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        {/* Header Section */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 pb-6 border-b border-white/30 dark:border-white/10">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl" />
                                <Image
                                    src={iLogo}
                                    alt={institution}
                                    height={120}
                                    width={120}
                                    className="relative rounded-2xl shadow-xl border-2 border-white/30"
                                />
                            </div>
                            <div className="text-center sm:text-left flex-1">
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 drop-shadow-lg">
                                    {t(dType)}
                                </h2>
                                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 font-medium">
                                    {t(institution)}
                                </p>
                                <p className="text-md text-gray-600 dark:text-gray-300 mt-1">
                                    {t(dOn)}
                                </p>
                            </div>
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <div className="bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30 dark:border-white/10">
                                <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 block mb-1">
                                    {t('edu.result')}
                                </span>
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {t(dResult)}
                                </span>
                            </div>
                            <div className="bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30 dark:border-white/10">
                                <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 block mb-1">
                                    {t('edu.year')}
                                </span>
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {t(dYear)}
                                </span>
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 dark:border-white/10">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                <IoInformationCircleOutline className="text-2xl" />
                                {t('edu.details')}
                            </h3>
                            <p className="text-gray-800 dark:text-gray-100 leading-relaxed text-base sm:text-lg">
                                {t(iDetails)}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Education;
