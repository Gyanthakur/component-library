"use client";
import React, { useEffect, useState } from "react";

const TRACK_LENGTH = 600; // px
const CAR_WIDTH = 60;
const CAR_HEIGHT = 40;
const TRACK_HEIGHT = 80;
const FINISH_LINE = TRACK_LENGTH - CAR_WIDTH - 10;

export default function RacingGamePage() {
  const [carX, setCarX] = useState(0);
  const [started, setStarted] = useState(false);
  const [won, setWon] = useState(false);

  // Keyboard controls
  useEffect(() => {
    if (!started || won) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setCarX((prev) => Math.min(prev + 20, FINISH_LINE));
      } else if (e.key === "ArrowLeft") {
        setCarX((prev) => Math.max(prev - 20, 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [started, won]);

  // Detect win
  useEffect(() => {
    if (carX >= FINISH_LINE && started) {
      setWon(true);
      setStarted(false);
    }
  }, [carX, started]);

  const handleStart = () => {
    setCarX(0);
    setWon(false);
    setStarted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center flex-col justify-center dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
        🏁 Racing Game
      </h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300 text-lg">
        Use <span className="font-semibold">Left</span> and <span className="font-semibold">Right</span> arrow keys to move the car. Reach the finish line!
      </p>
      <div
        className="relative w-[620px] max-w-full"
        style={{ height: TRACK_HEIGHT + 40 }}
      >
        {/* Track */}
        <div
          className="absolute left-0 top-10 w-[600px] h-[80px] bg-gradient-to-r from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-800 border-4 border-gray-300 dark:border-gray-700 shadow-inner"
        >
          {/* Finish Line */}
          <div
            className="absolute top-0 right-0 h-full w-4 flex flex-col justify-between"
            style={{ background: "repeating-linear-gradient(180deg, #fff 0 10px, #222 10px 20px)" }}
          />
          {/* Car */}
          <div
            className="absolute bottom-4"
            style={{
              left: carX,
              width: CAR_WIDTH,
              height: CAR_HEIGHT,
              transition: "left 0.08s cubic-bezier(.4,2,.6,1)"
            }}
          >
            {/* Simple SVG Car */}
            <svg width={CAR_WIDTH} height={CAR_HEIGHT} viewBox="0 0 60 40" fill="none">
              <rect x="8" y="18" width="44" height="14" rx="5" fill="#6366f1" />
              <rect x="16" y="10" width="28" height="14" rx="4" fill="#a5b4fc" />
              <circle cx="18" cy="36" r="4" fill="#222" />
              <circle cx="42" cy="36" r="4" fill="#222" />
              <rect x="20" y="14" width="8" height="6" rx="2" fill="#fff" opacity="0.7" />
              <rect x="32" y="14" width="8" height="6" rx="2" fill="#fff" opacity="0.7" />
            </svg>
          </div>
        </div>
      </div>
      {/* Controls */}
      <div className="mt-10 flex flex-col items-center gap-4">
        {!started && !won && (
          <button
            onClick={handleStart}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            Start Race
          </button>
        )}
        {won && (
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-green-600 mb-2 animate-bounce">🎉 You Win!</div>
            <button
              onClick={handleStart}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Play Again
            </button>
          </div>
        )}
        {started && !won && (
          <div className="text-gray-600 dark:text-gray-300 text-sm">
            Press <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">←</kbd> / <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">→</kbd> to move
          </div>
        )}
      </div>
    </div>
  );
}
