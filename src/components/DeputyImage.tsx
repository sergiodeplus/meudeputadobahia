import React from 'react';

interface DeputyImageProps {
    src?: string;
    alt: string;
    fallbackInitial: string;
    className?: string;
    party?: string;
}

export const DeputyImage: React.FC<DeputyImageProps> = ({ src, alt, fallbackInitial, className = "", party }) => {
    const [hasError, setHasError] = React.useState(false);

    // If there is a valid image source and no error, render the image with halftone effect
    if (src && !hasError) {
        return (
            <div className={`relative overflow-hidden bg-ink/10 ${className}`}>
                <img
                    src={src}
                    alt={alt}
                    onError={() => setHasError(true)}
                    className="w-full h-full object-cover halftone-img transition-transform duration-500 hover:scale-110"
                />
                {/* Paper texture overlay for the image to blend better */}
                <div className="absolute inset-0 bg-paper/10 mix-blend-multiply pointer-events-none"></div>
            </div>
        );
    }

    // Fallback to initial if no image or error
    return (
        <div className={`flex flex-col items-center justify-center bg-paper border-2 border-ink/10 relative overflow-hidden ${className}`}>
            {/* Background pattern for fallback */}
            <div className="absolute inset-0 opacity-10 halftone-bg"></div>

            <span className="font-serif font-black text-3xl text-ink/40 z-10">
                {fallbackInitial}
            </span>
            {party && <span className="text-[9px] font-mono text-ink/30 mt-1 z-10">{party}</span>}
        </div>
    );
};
