"use client"
import React, { useEffect, useState } from 'react'
import Category from './Category'
import { CategoryType } from './layout/MainScreen';
interface CategoriesProps{
    setActiveCategory: React.Dispatch<React.SetStateAction<CategoryType>>
    categories: string[]
}
function Categories({ setActiveCategory, categories}: CategoriesProps) {
    const [selected, setSelected] = useState(0);

    useEffect(()=>{
        setActiveCategory(categories[selected]);
    },[selected])
    
  return (
    <div className='border rounded flex gap-8 justify-center'>
        {categories.map((category, i)=> (
            <Category key={i} name={category} active = {selected} 
            setActiveCategory={()=>setSelected(i)}
            index={i}
            />
        ))}
    </div>
  )
}

export default Categories