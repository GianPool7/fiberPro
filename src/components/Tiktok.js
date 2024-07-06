// TikTokEmbed.js
import React, { useEffect } from 'react';

const TikTokEmbed = ({ videoId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, [videoId]);

  return (
    <blockquote className="tiktok-embed" cite={`https://www.tiktok.com/@fiberpro_internet?lang=es/video/${videoId}`} data-video-id={videoId}>
      <section> </section>
    </blockquote>
  );
};

export default TikTokEmbed;
