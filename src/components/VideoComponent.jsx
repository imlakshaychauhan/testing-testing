import React, { useRef, useEffect } from 'react';

const VideoComponent = ({VideoSource}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true; // Enable infinite looping
      videoRef.current.play(); // Start playing the video
    }
  }, []);

  return (
    <div style={{ display: 'inline-block' }}>
      <video
        ref={videoRef}
        style={{
          width: '300px',
          height: 'auto',
          maxWidth: '100%',
          objectFit: 'cover',
          verticalAlign: 'middle',
        }}
        muted
        autoPlay
        playsInline
      >
        <source src={VideoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;