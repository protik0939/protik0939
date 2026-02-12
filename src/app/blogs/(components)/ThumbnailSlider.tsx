'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoMdPlay } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

interface ThumbnailSliderProps {
    mediaUrls: string[];
}

// Helper function to extract YouTube video ID
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

export default function ThumbnailSlider({ mediaUrls }: ThumbnailSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);

    useEffect(() => {
        // Auto-advance slider every 3 seconds
        if (mediaUrls.length > 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev === mediaUrls.length - 1 ? 0 : prev + 1));
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [mediaUrls.length]);

    useEffect(() => {
        const currentMedia = mediaUrls[currentIndex];
        if (currentMedia && !isYouTubeUrl(currentMedia)) {
            const img = document.createElement('img');
            img.src = currentMedia;
            img.onload = () => {
                setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
            };
        } else {
            setImageDimensions(null);
        }
    }, [currentIndex, mediaUrls]);

    const currentMedia = mediaUrls[currentIndex];
    const isVideo = isYouTubeUrl(currentMedia);
    const videoId = isVideo ? getYouTubeId(currentMedia) : null;

    // Determine object-fit based on image dimensions to fit perfectly in frame
    const getObjectFit = (): 'cover' | 'contain' => {
        if (!imageDimensions) return 'cover';
        const aspectRatio = imageDimensions.width / imageDimensions.height;
        const containerAspectRatio = 16 / 9; // Approximate blog card aspect ratio
        
        // If image aspect ratio is close to container, use cover
        // Otherwise, use contain to ensure entire image is visible
        return Math.abs(aspectRatio - containerAspectRatio) < 0.5 ? 'cover' : 'contain';
    };

    return (
        <div className='relative w-full h-full'>
            {/* Media Content */}
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentMedia}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className='w-full h-full'
                >
                    {isVideo && videoId ? (
                        <div className='relative w-full h-full'>
                            <Image
                                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                alt='Video thumbnail'
                                height={1600}
                                width={900}
                                className='w-full h-full object-cover'
                            />
                            {/* Play icon overlay */}
                            <div className='absolute inset-0 flex items-center justify-center bg-black/30'>
                                <div className='bg-primary/90 rounded-full p-4'>
                                    <IoMdPlay className='text-primary-foreground text-4xl' />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Image
                            src={currentMedia}
                            alt={`Slide ${currentIndex + 1}`}
                            height={1600}
                            width={900}
                            className='w-full h-full'
                            style={{
                                objectFit: getObjectFit(),
                            }}
                        />
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Dots Indicator - Only show if more than 1 media */}
            {mediaUrls.length > 1 && (
                <div className='absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full'>
                    {mediaUrls.map((url, index) => (
                        <button
                            key={url}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setCurrentIndex(index);
                            }}
                            className={`w-1.5 h-1.5 rounded-full theme-transition ${
                                index === currentIndex
                                    ? 'bg-white w-4'
                                    : 'bg-white/50 hover:bg-white/75'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
