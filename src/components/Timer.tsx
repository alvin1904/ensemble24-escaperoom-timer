"use client";

import { useEffect, useState } from "react";
import Button from "./Button";

const Timer = () => {
  const [seconds, setSeconds] = useState(600); // 10 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(600);
  };

  useEffect(() => {
    let interval: any = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      setIsActive(false);
      alert("Timer is up!");
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="w-fit flex flex-col items-center justify-center">
      <h1 className="text-[300px]">{formatTime(seconds)}</h1>
      <div className="flex gap-4 items-center">
        <Button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</Button>
        <Button onClick={resetTimer}>Reset</Button>
      </div>
    </div>
  );
};

export default Timer;
