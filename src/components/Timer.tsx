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
        <Button
          className="rounded-full w-28 h-28 bg-transparent duration-300 ease-in-out border outline-none border-white hover:bg-white/10 hover:backdrop-blur-sm flex items-center justify-center"
          onClick={toggleTimer}
        >
          {isActive ? "Stop" : "Start"}
        </Button>
        <Button
          className="rounded-full w-28 h-28 bg-transparent duration-300 ease-in-out border outline-none border-white hover:bg-white/10 hover:backdrop-blur-sm flex items-center justify-center"
          onClick={resetTimer}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Timer;
