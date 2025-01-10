import { useState, useEffect } from "react";

export default function WelcomeScreen({ onFinish }) {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
      onFinish(); // Trigger the transition to the homepage
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, [onFinish]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <div
          className={`animate-bounce inline-block text-4xl ${
            animate ? "opacity-100" : "opacity-0"
          }`}
        >
          📖
        </div>
        <h1 className="mt-4 text-4xl font-bold">Welcome to PeacefulSoul</h1>
        <p className="mt-2 text-lg">Discover the world of books!</p>
        <p><em>Loading........</em></p>
      </div>
    </div>
  );
}
