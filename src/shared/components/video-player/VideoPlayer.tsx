'use client';
import { useEffect, useRef, useState } from 'react';
import { Volume, VolumeX } from 'lucide-react';

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  const handleUnmute = () => {
    if (videoRef.current) {
      const isCurrentlyMuted = videoRef.current.muted;
      videoRef.current.muted = !isCurrentlyMuted;
      setIsMuted(!isMuted);
      videoRef.current.volume = isCurrentlyMuted ? 1 : 0;
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = true;
          if (video.paused) {
            video.play().catch((e) => console.error('Autoplay failed', e));
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="w-full h-auto bg-black relative flex items-center justify-center rounded-[1.8rem] overflow-hidden">
      <video
        ref={videoRef}
        muted
        playsInline
        controls={false}
        preload="auto"
        loop
        className="w-full h-auto"
      >
        <source
          src="https://res.cloudinary.com/dca3dwuz9/video/upload/v1749619805/t2schgrxinikdb4kxzqw.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <button
        onClick={handleUnmute}
        className="absolute text-black bottom-[1.6rem] right-[1.6rem] lg:bottom-[3.2rem] lg:right-[3.2rem] bg-white px-4 py-2 rounded-[1.6rem] cursor-pointer"
      >
        {isMuted ? <Volume size={18} /> : <VolumeX size={18} />}
      </button>
    </section>
  );
};

export default VideoPlayer;
