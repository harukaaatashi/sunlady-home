'use client';

import { useEffect, useRef } from 'react';
import { company } from '@/lib/company';

export default function GoogleMap() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const address = `${company.postalCode} ${company.addressLines[0]}`;

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

  const handleMapClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="aspect-[16/9] w-full relative group cursor-pointer" onClick={handleMapClick}>
      <iframe
        ref={iframeRef}
        width="100%"
        height="100%"
        style={{ border: 0, pointerEvents: 'none' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
        title="Google Maps"
      />
      <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-200 rounded-lg flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 px-4 py-2 rounded-md shadow-lg">
          <p className="text-sm font-medium text-gray-800">クリックして Google Maps で開く</p>
        </div>
      </div>
    </div>
  );
} 