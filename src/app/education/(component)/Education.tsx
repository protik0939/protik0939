'use client'
import React, { useRef } from "react";
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
    return (
        <div className="flex sm:flex-col w-full h-full items-center justify-center space-x-4 sm:space-x-0 sm:space-y-4">
            {
                eduData.map((e) => {
                    return <TiltCard key={e.dType} data={e} />;
                })
            }
        </div>
    );
};

interface TiltCardProps {
    data: TEducationData;
}

const TiltCard = ({ data }: TiltCardProps) => {
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
                        <h1 className=" text-xl font-bold">{dType}  |  {dOn}</h1>
                        <h1 className=" text-xs">From: {institution}</h1>
                        <h1 className=" text-xl font-bold">{dResult}</h1>
                        <h1 className=" text-xs font-bold">Year: {dYear}</h1>
                    </div>
                </div>

                <Marquee className="overflow-hidden">
                    <p>{iDetails}</p>
                </Marquee>

            </div>
        </motion.div>
    );
};

export default Education;
