import { MutableRefObject } from "react";

export interface TCardProps {
    containerRef: MutableRefObject<HTMLDivElement | null>;
    src: string;
    alt: string;
    top: string;
    left: string;
    rotate: string;
    className?: string;
}

export interface TEducationData {
    dType: string;
    dOn: string;
    dYear: string;
    dResult: string;
    institution: string;
    iImage: string;
    iLogo: string;
    iDetails: string;
}


export interface TBlogPost {
    _id: string;
    title: string;
    author: string;
    uploadTime: string; // ISO date string
    timeToRead: string;
    fullDetails: string;
    tags: string[];
    imageSource: string[]; // Array of image URLs or YouTube video URLs
}
