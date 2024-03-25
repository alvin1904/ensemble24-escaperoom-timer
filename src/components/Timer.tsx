"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import { useTimeContext } from "@/lib/timeContext";
import { cn } from "@/lib/utils";

const Timer = () => {
  const { seconds, isActive, toggleTimer, resetTimer, isRed } =
    useTimeContext();
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="w-fit flex flex-col items-center justify-center">
      <h1
        className={cn(
          "md:text-[300px] text-[130px] select-none",
          isRed ? "text-red-500" : "text-white"
        )}
      >
        {formatTime(seconds)}
      </h1>
      <div className="flex gap-4 items-center">
        <Button onClick={toggleTimer}>{isActive ? "Stop" : "Start"}</Button>
        <Button onClick={resetTimer}>Reset</Button>
      </div>
    </div>
  );
};

export default Timer;
