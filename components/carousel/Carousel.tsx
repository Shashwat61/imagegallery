"use client";

import React, {
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { PhotosData } from "./CarouselViewer";
import CarouselButton from "./CarouselButton";
import CarouselImageViewer from "./CarouselImageViewer";
// import { getNumberOfImagesByScreenSize } from "@/utils/utils";
function getNumberOfImagesByScreenSize() {
  if (typeof window !== undefined) {
    if (window.innerWidth < 468) {
      return 2;
    }
    if (window.innerWidth < 601) {
      return 3;
    } else if (window.innerWidth < 768) {
      return 4;
    } else if (window.innerWidth < 1024) {
      return 5;
    } else return 5;
  }
}
interface CarouselProps {
  data: PhotosData[] | null;
}

function Carousel({ data }: CarouselProps) {
  const [showNumberOfImages, setShowNumberOfImages] = useState<
    number | undefined
  >(getNumberOfImagesByScreenSize());

  console.log(showNumberOfImages, "ssssssss");
  const [startingIndex, setStartingIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(showNumberOfImages!);
  const hideRightButton = endIndex === data?.length;
  const carouselRef = useRef<HTMLInputElement | null>(null);
  const referencePoint = useRef<HTMLInputElement | null>(null);
  const startingIndexRef = useRef<HTMLInputElement | null>(null);
  const [direction, setDirection] = useState<string>("");

  function handleActiveSlidesOnClick(e: SyntheticEvent) {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }
    const scrollAmount: number = showNumberOfImages! * 300;
    switch (e.target.dataset["direction"]) {
      case "left":
        setStartingIndex((prevStartingIndex) =>
          Math.max(0, prevStartingIndex - showNumberOfImages!)
        );
        setEndIndex((prevEndIndex) =>
          Math.max(0, prevEndIndex - showNumberOfImages!)
        );
        setDirection("left");
        break;

      case "right":
        setStartingIndex((prevStartingIndex) =>
          Math.min(
            data!.length - showNumberOfImages!,
            prevStartingIndex + showNumberOfImages!
          )
        );
        setEndIndex((prevEndIndex) =>
          Math.min(data!.length, prevEndIndex + showNumberOfImages!)
        );
        setDirection("right");
        break;

      default:
        break;
    }
  }
  function handleShowNumberOfImages(){
    setShowNumberOfImages(getNumberOfImagesByScreenSize());
  }
  useEffect(() => {
    window.addEventListener("resize",  handleShowNumberOfImages);
    return () => {
      window.removeEventListener("resize", handleShowNumberOfImages);
    };
  }, []);

  useEffect(() => {
    if (!data || !showNumberOfImages) return
    if (direction == "left") {
      startingIndexRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      referencePoint.current!.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [startingIndex, endIndex]);
  console.log(
    showNumberOfImages,
    "number of images",
    startingIndex,
    endIndex,
    direction
  );
  return (
    <div className="flex w-full justify-between">
      {/* back button */}
      <CarouselButton
        direction="left"
        startingIndex={startingIndex}
        handleClick={handleActiveSlidesOnClick}
      >
        &lt;
      </CarouselButton>
      {/* main carousel container */}
      <div className="w-full overflow-x-scroll">
        <CarouselImageViewer
          data={data}
          showNumberOfImages={showNumberOfImages!}
          startingIndex={startingIndex}
          endIndex={endIndex}
          endIndexRef={carouselRef}
          referencePoint={referencePoint}
          startingRef={startingIndexRef}
        />
      </div>
      {/* forward button */}
      <CarouselButton
        direction="right"
        startingIndex={startingIndex}
        hideRightButton={hideRightButton}
        handleClick={handleActiveSlidesOnClick}
      >
        &gt;
      </CarouselButton>
    </div>
  );
}

export default Carousel;
