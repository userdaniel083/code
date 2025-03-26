"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="text-center">
        <p className="text-lg font-semibold">Current Date and Time:</p>
        <p>{currentTime.toLocaleString()}</p>
      </div>
    </div>
  );
}
