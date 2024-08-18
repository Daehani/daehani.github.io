import React, { useState } from 'react';
// import './youtube.css';  // 스타일 파일을 별도로 관리합니다.

const YouTubeVideoWithThumbnail: React.FC = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleThumbnailClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <div className="video-container">
      {isVideoVisible ? (
        <iframe
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
          className="thumbnail"
          onClick={handleThumbnailClick}
        />
      )}
    </div>
  );
};

export default YouTubeVideoWithThumbnail;