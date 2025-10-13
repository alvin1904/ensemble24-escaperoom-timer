"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import { useTimeContext } from "@/lib/timeContext";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Timer = () => {
  const { seconds, isActive, toggleTimer, resetTimer, isRed } =
    useTimeContext();
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const logoImage = process.env.NEXT_PUBLIC_LOGO;

  return (
    <div className="w-fit h-full flex flex-col items-center justify-center">
      <h1
        className={cn(
          "xl:text-[300px] text-[130px] select-none",
          isRed ? "text-red-700" : "text-white"
        )}
        style={{
          WebkitTextStroke: isRed ? "2px #f11" : "2px #fff",
        }}
      >
        {formatTime(seconds)}
      </h1>
      <div className="flex gap-8 items-center">
        <Button
          className="rounded-full w-28 h-28 select-none bg-transparent duration-300 ease-in-out border outline-none border-white hover:bg-white/10 hover:backdrop-blur-sm flex items-center justify-center"
          onClick={toggleTimer}
        >
          {isActive ? "Stop" : "Start"}
        </Button>
        {logoImage && (
          <Image
            src={logoImage}
            width={40}
            height={100}
            alt="logo"
            className="w-10"
          />
        )}
        <Button
          className="rounded-full w-28 h-28 select-none bg-transparent duration-300 ease-in-out border outline-none border-white hover:bg-white/10 hover:backdrop-blur-sm flex items-center justify-center"
          onClick={resetTimer}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Timer;
