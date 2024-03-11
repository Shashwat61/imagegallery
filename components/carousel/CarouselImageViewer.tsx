import CarouselImage from "./CarouselImage";
import { PhotosData } from "./CarouselViewer";

interface CarouselImageViewerProps {
  data: PhotosData[] | null;
  showNumberOfImages: number;
  startingIndex: number;
  endIndex: number;
  endIndexRef: React.MutableRefObject<HTMLInputElement | null>;
  referencePoint: React.MutableRefObject<HTMLInputElement | null>;
  startingRef: React.MutableRefObject<HTMLInputElement | null>;
}
function CarouselImageViewer({
  data,
  showNumberOfImages,
  startingIndex,
  endIndex,
  endIndexRef,
  referencePoint,
  startingRef,
}: CarouselImageViewerProps) {
  return (
    <div className="flex space-x-4 overflow-x-scroll">
      {data?.map((item, i) => {
        return (
          <>
            {i == startingIndex ? (
              <div
                className="w-[300px] bg-red-600"
                key={item.id}
                ref={startingRef}
              ></div>
            ) : null}
            <CarouselImage
              data={item}
              key={item.id}
              index={i}
              startingIndex={startingIndex}
              endIndex={endIndex}
              endIndexRef={endIndexRef}
            />
            {i + 1 === endIndex ? (
              <div
                className="w-[300px] bg-red-600"
                key={i}
                ref={referencePoint}
              ></div>
            ) : null}
          </>
        );
      })}
    </div>
  );
}

export default CarouselImageViewer;
