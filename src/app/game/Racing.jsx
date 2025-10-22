"use client";
import { useEffect, useState } from "react";

export default function Racing() {
  const [car1, setCar1] = useState(0);
  const [car2, setCar2] = useState(0);
  const [winner, setWinner] = useState("");
  const [running, setRunning] = useState(false);

  const trackLengthDesktop = 600; // px for desktop
  const trackLengthMobile = 300; // px for small screens
  const [trackLength, setTrackLength] = useState(trackLengthDesktop);

  // Update track length on resize
  useEffect(() => {
    const updateTrackLength = () => {
      if (window.innerWidth < 768) setTrackLength(trackLengthMobile);
      else setTrackLength(trackLengthDesktop);
    };
    updateTrackLength();
    window.addEventListener("resize", updateTrackLength);
    return () => window.removeEventListener("resize", updateTrackLength);
  }, []);

  // Race movement
  useEffect(() => {
    if (!running) return;

    const race = setInterval(() => {
      setCar1((prev) => Math.min(prev + Math.random() * 15, trackLength));
      setCar2((prev) => Math.min(prev + Math.random() * 15, trackLength));
    }, 100);

    return () => clearInterval(race);
  }, [running, trackLength]);

  // Check winner
  useEffect(() => {
    if (car1 >= trackLength || car2 >= trackLength) {
      setRunning(false);
      if (car1 > car2) setWinner("🚗 Car 1 Wins!");
      else if (car2 > car1) setWinner("🏎️ Car 2 Wins!");
      else setWinner("🤝 It’s a Tie!");
    }
  }, [car1, car2, trackLength]);

  const startRace = () => {
    setCar1(0);
    setCar2(0);
    setWinner("");
    setRunning(true);
  };

  return (
    <div className="bg-gradient-to-br from-white dark:from-gray-900 via-gray-200 dark:via-gray-400 to-gray-300 dark:to-black py-10 md:py-12 rounded-3xl shadow-2xl text-center text-gray-600 dark:text-gray-400 space-y-8 md:space-y-10 backdrop-blur-xl transition-colors">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
        🏁 Ultimate Racing Track
      </h2>

      {/* Track */}
      <div className="relative w-full max-w-[700px] h-48 md:h-56 bg-gradient-to-r from-gray-300 dark:from-gray-400 to-gray-500 dark:to-gray-900 rounded-2xl border border-gray-400 dark:border-gray-600 overflow-hidden mx-auto shadow-inner">
        {/* Road markings */}
        <div className="absolute top-1/2 left-0 w-full h-[4px] bg-white/70 dark:bg-white/40 rounded-full"></div>

        {/* Finish Line */}
        <div className="absolute left-[2%] md:left-[20px] top-0 h-full w-[12px] bg-[repeating-linear-gradient(45deg,white,white_10px,black_10px,black_20px)] rounded-sm shadow-lg"></div>

        {/* Car 1 */}
        <div
          className="absolute top-10 md:top-12 text-5xl md:text-6xl transition-left duration-100 ease-linear"
          style={{ left: `${trackLength - car1}px` }}
        >
          🚗
        </div>

        {/* Car 2 */}
        <div
          className="absolute top-28 md:top-32 text-5xl md:text-6xl transition-left duration-100 ease-linear"
          style={{ left: `${trackLength - car2}px` }}
        >
          🏎️
        </div>
      </div>

      {/* Winner Display */}
      {winner && (
        <p className="text-xl md:text-2xl font-bold animate-bounce text-indigo-600 dark:text-indigo-400">
          {winner}
        </p>
      )}

      {/* Start Button */}
      <button
        onClick={startRace}
        disabled={running}
        className={`bg-gradient-to-r from-blue-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-xl shadow-md transition-all hover:scale-105 ${
          running ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {running ? "🏎️ Racing..." : "Start Race"}
      </button>

      <style jsx>{`
        .transition-left {
          transition: left 0.1s linear;
        }
      `}</style>
    </div>
  );
}
