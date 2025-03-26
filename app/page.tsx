"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSearch = () => {
    if (query.trim() === "") return;

    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(googleSearchUrl, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <div className="text-center bg-white p-6 rounded shadow-md mb-8">
        <p className="text-2xl font-bold mb-4">De tijd nu:</p>
        <p className="text-xl">{currentTime.toLocaleString()}</p>
      </div>
      <div className="text-center bg-white p-6 rounded shadow-md">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="p-2 border rounded mb-4"
        />
        <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </div>
    </div>
  );
}
