'use client'
import React, { RefObject, SyntheticEvent, useEffect, useRef, useState } from "react";
import { PhotosData } from "./CarouselViewer";
import CarouselButton from "./CarouselButton";
import CarouselImageViewer from "./CarouselImageViewer";
// import { getNumberOfImagesByScreenSize } from "@/utils/utils";
function getNumberOfImagesByScreenSize(){
    if(typeof window!==undefined){
        if(window.innerWidth < 468){
            return 2
        }
        if  (window.innerWidth < 601){
            return 3
        }
        else if(window.innerWidth <768){
            return 4
        }
        else if(window.innerWidth < 1024){
            return 5
        }
        else return 5
    }
}
interface CarouselProps {
  data: PhotosData[] | null;
}
type Dataset  = Record<string, string>;
function Carousel({ data }: CarouselProps) {
    const [showNumberOfImages, setShowNumberOfImages] = useState<number | undefined>(getNumberOfImagesByScreenSize());
    console.log(showNumberOfImages,'ssssssss')
    const [startingIndex, setStartingIndex] = useState<number>(0)
    const [endIndex, setEndIndex] = useState<number>(showNumberOfImages!)
    const hideRightButton = endIndex  === data?.length
    console.log(startingIndex, endIndex, data?.length)
    const carouselRef = useRef<HTMLInputElement | null>(null)
    const startIndexImageRef = useRef<HTMLInputElement | null>(null)
    const endIndexImageRef = useRef<HTMLInputElement | null>(null)

    function handleActiveSlidesOnClick(e: SyntheticEvent){
        if (!(e.target instanceof HTMLButtonElement)) {
            return;
          }
          switch (e.target.dataset["direction"]) {
            case "left":
              setStartingIndex((prevStartingIndex) => Math.max(0, prevStartingIndex - showNumberOfImages!));
              setEndIndex((prevEndIndex) => Math.max(0, prevEndIndex - showNumberOfImages!));
              break;
        
            case "right":
              setStartingIndex((prevStartingIndex) =>
                Math.min(data!.length - showNumberOfImages!, prevStartingIndex + showNumberOfImages!)
              );
              setEndIndex((prevEndIndex) =>
                Math.min(data!.length, prevEndIndex + showNumberOfImages!)
              );
              const scrollPosition = startingIndex * 300;
              console.log(carouselRef,'carousjelref') // Assuming imageWidth of 300
                carouselRef && carouselRef.current!.scrollIntoView({
                behavior: 'smooth',
                });
              
              break;
            
            default:
            break;
        }
    }

    useEffect(()=>{
        window.addEventListener("resize", () => {
            setShowNumberOfImages(getNumberOfImagesByScreenSize());
        })
        return ()=>{
            window.removeEventListener('resize',()=>{
                
            })
        }
    },[])
    console.log(showNumberOfImages, 'number of images', startingIndex, endIndex);
  return (
    <div className="flex w-full justify-between">
      {/* back button */}
      <CarouselButton direction="left" startingIndex={startingIndex} handleClick={handleActiveSlidesOnClick}>&lt;</CarouselButton>
      {/* main carousel container */}
      <div className="w-full overflow-x-scroll" ref={carouselRef}>
      <CarouselImageViewer data={data} showNumberOfImages={showNumberOfImages!} startingIndex={startingIndex} endIndex={endIndex} endIndexRef= {carouselRef} />
      </div>
      {/* forward button */}
      <CarouselButton direction="right" startingIndex={startingIndex} hideRightButton={hideRightButton} handleClick={handleActiveSlidesOnClick}>&gt;</CarouselButton>
    </div>
  );
}

export default Carousel;
