import { PhotosData } from "./CarouselViewer";
import Image from "next/image";

interface CarouselImageProps {
  data: PhotosData;
  index: number;
  startingIndex: number;
  endIndex: number;
  endIndexRef: React.MutableRefObject<HTMLInputElement | null>;
}
function CarouselImage({
  data,
  index,
  endIndex,
  startingIndex,
  endIndexRef,
}: CarouselImageProps) {
  const areActive = index < endIndex && index >= startingIndex;
  console.log(
    areActive,
    "areactive",
    index,
    endIndex,
    startingIndex,
    endIndex === index - 1
  );
  return (
    <div className="mt-4">

      <div
        className={areActive ? "blur-0" : "blur-sm"}
        ref={endIndex === index + 1 ? endIndexRef : null}
      >
        <Image
          src={data.urls.full}
          alt={data.alt_description}
          width={300}
          height={400}
          className="max-w-none object-contain"
        />
      </div>
    </div>
  );
}

export default CarouselImage;
