"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import { useTimeContext } from "@/lib/timeContext";

const Timer = () => {
  const { seconds, isActive, toggleTimer, resetTimer } = useTimeContext();
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
