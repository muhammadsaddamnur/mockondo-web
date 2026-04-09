'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const screenshots = [
  '/screenshot/mock_http.png',
  '/screenshot/mock_ws.png',
  '/screenshot/mock_s3.png',
  '/screenshot/http_client.png',
  '/screenshot/ws_client.png',
  '/screenshot/generate_code.png',
  '/screenshot/remote_server.png',
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000); // 🔥 lebih santai (4 detik)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full pt-10">
  <div className="relative w-full aspect-[5/3] overflow-hidden">
    <AnimatePresence>
      <motion.img
        key={index}
        src={screenshots[index]}
        className="absolute inset-0 w-full h-full object-contain"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </AnimatePresence>
  </div>
</div>
  );
}