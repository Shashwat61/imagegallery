import React from 'react'
import { PhotosData } from './CarouselViewer'
import Image from 'next/image'
interface CarouselImageProps{
    data: PhotosData
    index: number
}
function CarouselImage({data}: CarouselImageProps) {
  return (
    <div className=''>
        <Image src={data.urls.regular} alt={data.alt_description} height={100} width={100}/>
    </div>
  )
}

export default CarouselImage