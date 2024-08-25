// src/components/HoverVideoPlayer.js
import React, { useState } from 'react';

const HoverVideoPlayer = () => {
  const [isHovered, setIsHovered] = useState(false);

  // URL of the video you want to display
  const videoUrl = "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/WhatsApp%20Video%202024-07-22%20at%209.15.22%20AM.mp4?alt=media&token=36ecc999-36be-46c0-ad14-5547a601c1bc";

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
          autoPlay
          muted
          loop
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default HoverVideoPlayer;
