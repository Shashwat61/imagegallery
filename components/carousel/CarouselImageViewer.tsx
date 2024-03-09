import CarouselImage from "./CarouselImage"
import { PhotosData } from "./CarouselViewer"

interface CarouselImageViewerProps{
    data: PhotosData[] | null;
    showNumberOfImages: number;
    startingIndex: number;
    endIndex:number;
    endIndexRef: React.MutableRefObject<HTMLInputElement | null>;
}
function CarouselImageViewer({data, showNumberOfImages, startingIndex, endIndex, endIndexRef}: CarouselImageViewerProps) {
    const showData = data?.slice(startingIndex,endIndex);
    console.log(showData?.length, 'showdata')

  return (
    <div className="flex space-x-4 overflow-x-scroll">
        {data?.map((item,i)=>{
            return (
                <CarouselImage data={item} key={item.id} index={i} startingIndex={startingIndex} endIndex = {endIndex} endIndexRef={endIndexRef}/>
            )
        })}
    </div>
  )
}

export default CarouselImageViewer