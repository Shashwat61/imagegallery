import React from 'react'
interface CarouselButtonProps{
    children: React.ReactNode;
    handleClick: () => void;
}
function CarouselButton({children}: CarouselButtonProps) {
  return (
    <div>{children}</div>

  )
}

export default CarouselButton