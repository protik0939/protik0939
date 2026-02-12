'use client'
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

interface MediaSliderProps {
    mediaUrls: string[];
}

// Helper function to extract YouTube video ID from various YouTube URL formats
const getYouTubeId = (url: string): string | null => {
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/shorts\/([^&\n?#]+)/
    ];
    
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) return match[1];
    }
    return null;
};

// Check if URL is a YouTube link
const isYouTubeUrl = (url: string): boolean => {
    return url.includes('youtube.com') || url.includes('youtu.be');
};

export default function MediaSlider({ mediaUrls }: MediaSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? mediaUrls.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === mediaUrls.length - 1 ? 0 : prev + 1));
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            // Swiped left
            handleNext();
        }

        if (touchStart - touchEnd < -75) {
            // Swiped right
            handlePrevious();
        }
    };

    const currentMedia = mediaUrls[currentIndex];
    const isVideo = isYouTubeUrl(currentMedia);
    const videoId = isVideo ? getYouTubeId(currentMedia) : null;

    return (
        <div 
            ref={containerRef}
            className='relative w-full h-full flex items-center justify-center'
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Media Content */}
            <div className='w-full h-full flex items-center justify-center'>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentMedia}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className='w-full h-full flex items-center justify-center'
                    >
                        {isVideo && videoId ? (
                            <div className='w-full h-full flex items-center justify-center'>
                                <iframe
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                    title={`YouTube video ${currentIndex + 1}`}
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                    allowFullScreen
                                    className='w-full h-full theme-rounded max-h-[80vh]'
                                    style={{ minHeight: '400px' }}
                                />
                            </div>
                        ) : (
                            <Image
                                src={currentMedia}
                                alt={`Slide ${currentIndex + 1}`}
                                width={1600}
                                height={900}
                                className='w-full h-full theme-rounded theme-shadow'
                                style={{
                                    objectFit: 'contain',
                                    minHeight: '400px',
                                    maxHeight: '80vh'
                                }}
                            />
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            {mediaUrls.length > 1 && (
                <>
                    <button
                        onClick={handlePrevious}
                        className='absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card theme-border border-border rounded-full p-3 theme-shadow theme-transition hover:scale-110 z-10'
                        aria-label='Previous slide'
                    >
                        <IoMdArrowBack className='text-2xl text-foreground' />
                    </button>
                    <button
                        onClick={handleNext}
                        className='absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card theme-border border-border rounded-full p-3 theme-shadow theme-transition hover:scale-110 z-10'
                        aria-label='Next slide'
                    >
                        <IoMdArrowForward className='text-2xl text-foreground' />
                    </button>
                </>
            )}

            {/* Dots Indicator */}
            {mediaUrls.length > 1 && (
                <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full z-10'>
                    {mediaUrls.map((url, index) => (
                        <button
                            key={url}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full theme-transition ${
                                index === currentIndex
                                    ? 'bg-primary w-6'
                                    : 'bg-muted-foreground/50 hover:bg-muted-foreground'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
