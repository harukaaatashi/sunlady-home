'use client';

import { useEffect, useRef } from 'react';

export default function GoogleMap() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && iframeRef.current) {
            iframeRef.current.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.0!2d139.7086!3d35.6475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z44CSMTUwLTAwMjEg5p2x5Lqs6YO95riL6LC35Yy65oiQ5q2j6KW_77yR5LiB55uu77yT77yS4oiS77yR77yR!5e0!3m2!1sja!2sjp!4v1";
          }
        });
      },
      { threshold: 0.1 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);

  return (
    <div className="aspect-[16/9] w-full">
      <iframe
        ref={iframeRef}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
        title="Google Maps"
      />
    </div>
  );
} 