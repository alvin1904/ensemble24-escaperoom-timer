"use client";

import React, { useState } from "react";
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
import { hints } from "@/data";

const Aside = () => {
  const [hint, setHint] = useState(0);

  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <div className="flex flex-col items-center justify-center gap-10">
            <p className="text-center text-lg leading-tight px-5">
              You may use hints. Each hint costs 1 minute of your time in the
              escape room. Message the message to Jiyan Job. (+91{" "}
              {process.env.NEXT_PUBLIC_PHONE})
            </p>
            <Button onClick={() => setHint(1)}>Use hint #1</Button>
            <Button onClick={() => setHint(2)}>Use hint #2</Button>
            <Button onClick={() => setHint(3)}>Use hint #3</Button>
          </div>
        </DrawerTrigger>
        <DrawerContent className="mx-auto w-full bg-gray-900 text-white pb-10 outline-none border-none">
          <DrawerHeader>
            <DrawerTitle className="text-[1.5rem]">Hint #{hint}</DrawerTitle>
            <DrawerDescription className="text-[2rem] leading-tight">
              {hints[hint]}
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button onClick={() => {}}>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Aside;
