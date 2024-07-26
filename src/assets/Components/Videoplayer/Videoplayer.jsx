import React, { useEffect, useRef } from 'react';
import './videoplayer.css';
import Video from '../Video.mp4.mp4';

const Videoplayer = ({ playState, setPlayState }) => {
  const videoPlayerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (videoPlayerRef.current && !videoPlayerRef.current.contains(event.target)) {
        setPlayState(false);
      }
    };

   
    document.addEventListener('mousedown', handleClickOutside);

    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setPlayState]);

  return (
    <div 
      className={`video-player ${playState ? '' : 'hide'}`} 
      ref={videoPlayerRef}
    >
      <video 
        src={Video}
        autoPlay 
        muted 
        controls
        onClick={() => setPlayState(false)} 
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Videoplayer;
