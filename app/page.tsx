"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <div className="text-center bg-white p-6 rounded shadow-md">
        <p className="text-2xl font-bold mb-4">Current Date and Time:</p>
        <p className="text-xl">{currentTime.toLocaleString()}</p>
      </div>
    </div>
  );
}
