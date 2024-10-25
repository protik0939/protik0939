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