'use client'
import React, { CSSProperties } from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import Link from 'next/link'
import Image from "next/image";
import Scrollbars from "rc-scrollbars";
import { IoLogoWhatsapp, IoMailOutline } from "react-icons/io5";
import { AiOutlineLinkedin, AiOutlineSkype } from "react-icons/ai";

export default function page() {


  const renderThumb = ({ style, ...props }: { style: CSSProperties }) => {
    const thumbStyle: CSSProperties = {
      backgroundColor: '#ffffff50', // Change this to the desired color (example: indigo-600)
      borderRadius: '4px',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };


  return (
    <div className="h-screen w-full text-zinc-50">
      <Scrollbars
        style={{ width: '100%', height: '100%' }}
        autoHide
        renderThumbHorizontal={renderThumb}
        renderThumbVertical={renderThumb}
      >
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="grid w-full p-10 sm:p-5 grid-flow-dense grid-cols-12 gap-4"
        >
          <HeaderBlock />
          <SocialsBlock />
          <AboutBlock />
          <SocialsBlock />
          <SocialsBlock />
          <SocialsBlock />
          <SocialsBlock />
          <LocationBlock />
          <EmailListBlock />
        </motion.div>
      </Scrollbars>
    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800/10 backdrop-blur-[2px] p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 bgg:col-span-6">
    <div className="flex items-center space-x-4 mb-4">
      <Image
        src="/protikWOutBg.webp"
        alt="avatar"
        width={100}
        height={100}
        className="size-14 rounded-lg"
      />
      <div className=" text-2xl font-bold">
        Let&apos;s Connect!
      </div>
    </div>

    <div className="text-zinc-400 text-sm">
      If you&apos;re interested in discussing projects, collaborations, or any professional inquiries, feel free to reach out. I&apos;m always open to connecting with like-minded individuals and new opportunities.
    </div>
    <Link
      href={"tel:+8801721846361"}
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact me <FiArrowRight />
    </Link>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-[#ffffff10] group backdrop-blur-[2px] bgg:col-span-3 transition-all duration-100 overflow-hidden hover:shadow-lg hover:shadow-white"
    >
      <Link
        href={"mailto:protik0939@gmail.com"}
        className="grid h-full place-content-center text-3xl text-white"
      >
        <IoMailOutline className="group-hover:shadow-xl group-hover:scale-[5] group-hover:-rotate-[2.5deg] transition-all duration-100" />
      </Link>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-[#ffffff10] group backdrop-blur-[2px] bgg:col-span-3 transition-all duration-100 overflow-hidden hover:shadow-lg hover:shadow-white"
    >
      <Link
        href={"https://wa.link/7dawvd"}
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <IoLogoWhatsapp className="group-hover:shadow-xl group-hover:scale-[5] group-hover:rotate-[2.5deg] transition-all duration-100" />
      </Link>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-[#ffffff10] group backdrop-blur-[2px] bgg:col-span-3 transition-all duration-100 overflow-hidden hover:shadow-lg hover:shadow-white"
    >
      <Link
        href={"https://www.linkedin.com/in/protik0939/"}
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <AiOutlineLinkedin className="group-hover:shadow-xl group-hover:scale-[5] group-hover:rotate-[2.5deg] transition-all duration-100" />
      </Link>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-[#ffffff10] group backdrop-blur-[2px] bgg:col-span-3 transition-all duration-100 overflow-hidden hover:shadow-lg hover:shadow-white"
    >
      <Link
        href={"https://join.skype.com/invite/yFTTJ3l3wXM3"}
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <AiOutlineSkype className="group-hover:shadow-xl group-hover:scale-[5] group-hover:-rotate-[2.5deg] transition-all duration-100" />
      </Link>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p className="text-center">
      Other Social Links
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 bgg:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Cyberspace</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 bgg:col-span-9">
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Join the list
      </button>
    </form>
  </Block>
);