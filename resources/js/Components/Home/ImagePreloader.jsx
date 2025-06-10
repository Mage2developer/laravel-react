import React, { useEffect, useState } from 'react';

const imagesToPreload = [
    '/images/home/slider/wedding-banner.webp',
    '/images/home/slider/destination-wedding.webp',
    '/images/home/slider/hindu-wedding-mandap.webp'
];

function ImagePreloader({ children }) {
    const [allImagesLoaded, setAllImagesLoaded] = useState(false);

    useEffect(() => {
        const loadImages = async () => {
            const promises = imagesToPreload.map((src) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = () => resolve();
                    img.onerror = () => reject(`Failed to load image: ${src}`);
                });
            });

            try {
                await Promise.all(promises);
                setAllImagesLoaded(true);
            } catch (error) {
                console.error('Error preloading images:', error);
                // Handle error, e.g., show a fallback or continue anyway
                setAllImagesLoaded(true); // Still show content even if some fail
            }
        };

        loadImages();
    }, []); // Run once on component mount

    if (!allImagesLoaded) {
        return <div>Loading images...</div>; // Or a spinner/placeholder
    }

    return <>{children}</>;
}

export default ImagePreloader;
