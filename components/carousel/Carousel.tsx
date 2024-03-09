import React from "react";
import { PhotosData } from "./CarouselViewer";
import CarouselButton from "./CarouselButton";
import CarouselImageViewer from "./CarouselImageViewer";

interface CarouselProps {
  data: PhotosData[] | null;
}
function Carousel({ data }: CarouselProps) {
  return (
    <div className="flex w-full justify-between overflow-x-scroll">
      {/* back button */}
      <CarouselButton handleClick={() => {}}>{"<"}</CarouselButton>
      {/* main carousel container */}

      <div className="w-[90%]">
      <CarouselImageViewer data={data}/>
      </div>
      {/* forward button */}
      <CarouselButton handleClick={()=> {}}>{">"}</CarouselButton>
    </div>
  );
}

export default Carousel;
