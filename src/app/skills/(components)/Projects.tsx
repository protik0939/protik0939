"use client";

import Titles from "@/app/(components)/Titles";
import { projectsInfo, skillData, teamInfo } from "@/models/jsonData";
import Link from "next/link";
import React from "react";
import "./skills.css";
import { TbExternalLink } from "react-icons/tb";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects(): JSX.Element {
    const fadeInVariant = {
        hidden: { opacity: 0, filter: "blur(10px)" },
        visible: { opacity: 1, filter: "blur(0px)" },
    };

    const handleSeeMore = (
        e: React.MouseEvent<HTMLButtonElement>,
        projectId: string
    ) => {
        e.stopPropagation();
        e.preventDefault();
        const modal = document.getElementById(`my_modal_3-${projectId}`) as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        }
    };

    const handleCloseModal = (projectId: string) => {
        const modal = document.getElementById(`my_modal_3-${projectId}`) as HTMLDialogElement;
        if (modal) {
            modal.close();
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            transition={{ duration: 1 }}
        >
            <Titles title={"Projects By me"} />
            <div className="w-full p-10 sm:p-4 flex flex-wrap">
                {projectsInfo.map((p) => {
                    return (
                        <div
                            key={p.pId}
                            className="w-1/2 sm:w-full h-auto aspect-video transition duration-100 border-0 hover:border-2"
                        >
                            <div
                                className="relative w-full h-full"
                                style={{
                                    backgroundImage: `url(${p.pImgSrc})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="absolute w-full h-full bottom-0 p-5 sm:p-4 bg-gradient-to-t from-black to-transparent">
                                    <Link
                                        href={p.pLink}
                                        target="_blank"
                                        className="absolute top-5 right-5 sm:top-4 sm:right-4 bg-black/50 py-1 px-4 rounded-full backdrop-blur-md hover:scale-110 flex items-center justify-center space-x-2"
                                        onClick={(e) => e.stopPropagation()} // Prevent modal issues
                                    >
                                        <span>Visit</span>
                                        <TbExternalLink />
                                    </Link>
                                    <div className="absolute bottom-5 sm:bottom-4">
                                        <div className="font-bold">{p.pTitle}</div>
                                        <div>Level: {p.pLevel}</div>
                                        <div>{p.pType}</div>
                                        <button
                                            className="badge badge-outline hover:bg-slate-500"
                                            onClick={(e) => handleSeeMore(e, p.pId)}
                                        >
                                            See More
                                        </button>
                                    </div>
                                </div>

                                <dialog id={`my_modal_3-${p.pId}`} className="modal">
                                    <div className="modal-box z-40 backdrop-blur-md">
                                        <button
                                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                            onClick={() => handleCloseModal(p.pId)}
                                        >
                                            ✕
                                        </button>
                                        <div className="w-full flex items-center justify-center">
                                            {
                                                p.pLogo ?
                                                    <Image src={p.pLogo} width={100} height={100} className={`w-20 ${p.pId == 'alphaoneeducation' || p.pId == 'batterylowinteractiveclone' ? 'bg-white rounded-xl' : ''}`} alt={p.pTitle} />
                                                    :
                                                    ''
                                            }
                                        </div>
                                        <h3 className="font-bold text-lg text-center">{p.pTitle}</h3>
                                        <h3 className="font-bold text-xs text-center italic">{p.pType}</h3>
                                        <h3 className="font-bold text-xs text-center">| {p.pCategory} |</h3>
                                        <p className="py-4">
                                            {p.pDetails}
                                        </p>
                                        <p><b>Project level: </b>{p.pLevel}</p>
                                        <p className="font-bold text-lg text-center mt-8">Made using</p>
                                        <div className="flex flex-wrap gap-2 justify-center items-center mt-2">
                                            {p.pMaterials.map((materialId) => {
                                                const skill = skillData
                                                    .flatMap((skill) => skill.sdInfos)
                                                    .find((info) => info.id === materialId);
                                                return skill ? (
                                                    <div key={skill.id} className="flex flex-col items-center p-2 rounded-xl">
                                                        <Image
                                                            src={skill.logo}
                                                            alt={skill.name}
                                                            width={40}
                                                            height={40}
                                                            className="w-16"
                                                        />
                                                        <span className="text-sm text-white mt-1">{skill.name}</span>
                                                    </div>
                                                ) : null;
                                            })}
                                        </div>
                                        <p className="font-bold text-lg text-center mt-8">People behind this</p>
                                        <div className="flex flex-col w-full gap-2 mt-2 px-5 space-y-3">
                                            {p.pMembers.map((mId) => {
                                                const tMember = teamInfo.find((info) => info.tId === mId);
                                                return tMember ? (
                                                    <div key={tMember.tId} className="flex flex-row items-center justify-between p-2 px-5 rounded-xl shadow-md shadow-slate-400">
                                                        <Image
                                                            src={tMember.tImage}
                                                            alt={tMember.tName}
                                                            width={100}
                                                            height={100}
                                                            className="w-16 rounded-full"
                                                        />
                                                        <span className="text-sm text-white mt-1">{tMember.tName}</span>
                                                    </div>
                                                ) : null;
                                            })}
                                        </div>
                                        <Link href={p.pLink} target="_blank" className="w-full flex items-center justify-center"><button className="btn btn-outline my-6 border-b-4 border-l-4  hover:border-b-[1px] hover:border-l-[1px] transition-all ease-in-out">Visit <TbExternalLink /></button></Link>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}
