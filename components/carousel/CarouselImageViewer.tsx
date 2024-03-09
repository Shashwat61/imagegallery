import CarouselImage from "./CarouselImage"
import { PhotosData } from "./CarouselViewer"

interface CarouselImageViewerProps{
    data: PhotosData[] | null
}
function CarouselImageViewer({data}: CarouselImageViewerProps) {
  return (
    <div className="flex gap-8 w-full bg-slate-100">
        {data?.map((item,i)=>{
            return (
                <CarouselImage data={item} key={item.id} index={i}/>
            )
        })}
    </div>
  )
}

export default CarouselImageViewer