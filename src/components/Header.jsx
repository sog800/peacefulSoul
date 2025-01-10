import { useState, useEffect } from "react";

const quotes = [
  "A room without books is like a body without a soul.",
  "Reading is essential for those who seek to rise above the ordinary.",
  "Books are a uniquely portable magic.",
  "The more you read, the more you know. The more you learn, the more places you’ll go.",
];

export default function Header() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 6000); // Change quote every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded p-12 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-2 p-6 mt-16">"Explore the World of Books"</h2>
      <p className="text-lg italic border-2 rounded-lg w-50 p-6 mb-24 ">{quotes[index]}</p>
    </header>
  );
}
