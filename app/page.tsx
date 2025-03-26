"use client";

import { useState, useEffect } from "react";

const API_KEY = "AIzaSyDiq9W2_94vbR63rLEZDtID9BCvSyY9FaI"; 
const CX = "756729135966"; 
export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSearch = async () => {
    if (query.trim() === "") return;

    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${query}`
    );
    const data = await response.json();
    setResults(data.items || []);
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
        <div className="mt-4">
          {results.map((result, index) => (
            <div key={index} className="mb-4">
              <a href={result.link} className="text-blue-500">
                {result.title}
              </a>
              <p>{result.snippet}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
