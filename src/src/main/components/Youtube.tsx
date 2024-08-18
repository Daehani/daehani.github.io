import React, { useState } from 'react';

const YouTubeVideoWithThumbnail = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleThumbnailClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {isVideoVisible ? (
        <iframe
          width="400"
          height="300"
          src="https://www.youtube.com/embed/flzdOMmfi28?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <img
          src="/assets/photos/thumb2.png"  //"YOUR_THUMBNAIL_IMAGE_URL"
          alt="Custom Thumbnail"
          style={{ cursor: 'pointer', width: '400px', height: '200px' }}
          onClick={handleThumbnailClick}
        />
      )}
    </div>
  );
};

export default YouTubeVideoWithThumbnail;