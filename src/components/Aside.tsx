"use client";

import React, { useEffect } from "react";
import Button from "./Button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { useTimeContext } from "@/lib/timeContext";
import { appConfig } from "@/app.config";
import Link from "next/link";

const Aside = () => {
  const { hint, setHint } = useTimeContext();

  let advice = `Message the given clue to ${appConfig.messageToName}`;
  let whasappLink = `https://wa.me/+91${process.env.NEXT_PUBLIC_PHONE}`;
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <div className="flex flex-col items-center justify-center gap-10">
            <br />
            <p className="text-center md:text-xl text-md leading-tight px-5">
              {appConfig.heading.line1}
              {(appConfig.timePenaltyForHint / 60)
                .toFixed(2)
                .replace(".00", "")}{" "}
              {appConfig.heading.line2}
              <br />
              {appConfig.requireWhatsappMessage && (
                <>
                  {advice}
                  <Link
                    href={whasappLink}
                    className="text-green-500 hover:underline"
                  >
                    {whasappLink}
                  </Link>
                </>
              )}
            </p>
            <div className="max-h-[30vh] md:max-h-[60vh] p-4 w-full grid grid-cols-2 gap-4 overflow-y-auto scroll-m-0">
              {appConfig.hints.map((hint, index) => {
                if (hint === "") return <></>;
                else
                  return (
                    <Button
                      onClick={() => setHint(index)}
                      key={index}
                      className="h-32 bg-white/20 text-2xl hover:bg-white/30 duration-500 ease-in-out"
                    >
                      Hint #{index + 1}
                    </Button>
                  );
              })}
            </div>
          </div>
        </DrawerTrigger>
        {hint !== null && (
          <DrawerContent className="mx-auto w-full bg-black/50 backdrop-blur-md text-white p-8 pb-20 outline-none border-none">
            <DrawerHeader>
              <DrawerTitle className="text-[1.5rem] md:leading-normal leading-none">
                Hint #{hint + 1}
              </DrawerTitle>
              <DrawerDescription className="text-[3.5rem] leading-tight">
                {appConfig.hints[hint]}
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        )}
      </Drawer>
    </>
  );
};

export default Aside;
