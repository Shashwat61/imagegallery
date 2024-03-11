"use client"
export const categories = [
    "Forest", "Office", "Temple", "Birds"
]

export function getNumberOfImagesByScreenSize(){
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
    else return 6
}

export async function fetchPhotosByCategory(activeCategory: string){
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${activeCategory}&client_id=${process.env.NEXT_PUBLIC_CLIENT_SECRET}`, {cache: "no-store"})
    return (await response.json()) as any[]
}