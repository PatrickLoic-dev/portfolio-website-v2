import React from 'react';

const VideoBackground = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            zIndex: -1,
        }}>
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    width: '100%',
                    height: '100vh',    // hauteur Hero = 100% viewport height
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            >
                <source src="https://cdn.pixabay.com/video/2023/06/11/166797-835662249_large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.5)', // 50% black overlay
                pointerEvents: 'none' // Let clicks pass through to underlying layers if needed
            }} />
        </div>
    );
};

export default VideoBackground;
