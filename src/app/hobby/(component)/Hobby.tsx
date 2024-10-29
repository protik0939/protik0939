'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { TCardProps } from "@/models/typeScript";


export default function Hobby() {


  const fadeInVariant = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { opacity: 1, filter: 'blur(0px)' }
  };

  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-none">
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
        transition={{ delay: .1, duration: 1 }}
        className="relative z-0 text-[20vw] font-black text-neutral-800/40 md:text-[200px]">
        Hobbies
      </motion.h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);


  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="/hobby/anchoring.webp"
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="5%"
        className="w-72 md:w-96"
      />
      <Card
        containerRef={containerRef}
        src="/hobby/football.webp"
        alt="Playing Football"
        rotate="12deg"
        top="50%"
        left="75%"
        className="w-72 md:w-96"
      />
      <Card
        containerRef={containerRef}
        src="/hobby/Cycling copy.webp"
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-72 md:w-96"
      />
      <Card
        containerRef={containerRef}
        src="/hobby/debating.webp"
        alt="Example image"
        rotate="8deg"
        top="60%"
        left="10%"
        className="w-72 md:w-96"
      />
      <Card
        containerRef={containerRef}
        src="/hobby/listeningmusics.webp"
        alt="Example image"
        rotate="18deg"
        top="10%"
        left="75%"
        className="w-72 md:w-96"
      />
      <Card
        containerRef={containerRef}
        src="/hobby/mobilephotography.webp"
        alt="Example image"
        rotate="-3deg"
        top="60%"
        left="50%"
        className="w-72 md:w-96"
      />
    </div>
  );
};



const Card = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
}: TCardProps) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      const zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };


  const zoomInVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)', scale: 0 },
    visible: { opacity: 1, filter: 'blur(0px)', scale: 1.0 }
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}

      initial="hidden"
      animate="visible"
      variants={zoomInVariants}
      transition={{ delay: .1, duration: 1 }}

      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};