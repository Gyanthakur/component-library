import { useEffect, useState } from "react";

export default function Racing() {
  const [car1, setCar1] = useState(0);
  const [car2, setCar2] = useState(0);
  const [winner, setWinner] = useState("");
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const race = setInterval(() => {
      setCar1((prev) => Math.min(prev + Math.random() * 8, 300));
      setCar2((prev) => Math.min(prev + Math.random() * 8, 300));
    }, 100);

    return () => clearInterval(race);
  }, [running]);

  useEffect(() => {
    if (car1 >= 300 || car2 >= 300) {
      setRunning(false);
      if (car1 > car2) setWinner("🚗 Car 1 Wins!");
      else if (car2 > car1) setWinner("🏎️ Car 2 Wins!");
      else setWinner("🤝 It’s a Tie!");
    }
  }, [car1, car2]);

  const startRace = () => {
    setCar1(0);
    setCar2(0);
    setWinner("");
    setRunning(true);
  };

  return (
    <div className="ui-bg-gray-100 ui-p-6 ui-rounded-2xl ui-shadow-lg ui-space-y-6 ui-text-center ui-backdrop-blur-md">
      <h2 className="ui-text-2xl ui-font-bold">🏁 Simple Racing Game</h2>

      <div className="ui-relative ui-w-full ui-h-24 ui-bg-white/30 ui-rounded-lg ui-border ui-overflow-hidden ui-backdrop-blur-xl">
        <div
          className="ui-absolute ui-top-4 ui-h-4 ui-bg-gradient-to-r ui-from-blue-500 ui-to-cyan-400 ui-rounded-full ui-transition-all ui-duration-100"
          style={{ left: `${car1}px`, width: "40px" }}
        ></div>

        <div
          className="ui-absolute ui-top-12 ui-h-4 ui-bg-gradient-to-r ui-from-red-500 ui-to-pink-500 ui-rounded-full ui-transition-all ui-duration-100"
          style={{ left: `${car2}px`, width: "40px" }}
        ></div>
      </div>

      {winner && (
        <p className="ui-text-lg ui-font-semibold ui-text-gray-800 ui-animate-bounce">
          {winner}
        </p>
      )}

      <button
        onClick={startRace}
        disabled={running}
        className={`ui-bg-gradient-to-r ui-from-indigo-500 ui-to-purple-500 ui-text-white ui-font-semibold ui-px-6 ui-py-2 ui-rounded-lg ui-shadow-md ui-transition-all hover:ui-scale-105 ${
          running ? "ui-opacity-60 ui-cursor-not-allowed" : ""
        }`}
      >
        {running ? "Racing..." : "Start Race"}
      </button>
    </div>
  );
}
