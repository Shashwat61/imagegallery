"use client";
import React, { ReactElement, SyntheticEvent } from "react";
interface CarouselButtonProps {
  children: React.ReactNode;
  handleClick: (e: SyntheticEvent) => void;
  startingIndex: number;
  hideRightButton?: boolean;
  direction?: string;
}
function CarouselButton({
  children,
  startingIndex,
  hideRightButton,
  direction,
  handleClick,
}: CarouselButtonProps) {
  console.log(
    startingIndex,
    direction,
    "proppppsssp",
    direction === "left" && startingIndex
  );
  return (
    <button
      data-direction={direction === "left" ? "left" : "right"}
      className={`w-8 ${
        (direction === "left" && startingIndex > 0) ||
        (direction === "right" && !hideRightButton)
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      } flex self-center font-bold hover:bg-slate-400 p-4`}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </button>
  );
}

export default CarouselButton;
