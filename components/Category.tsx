"use client"

interface CategoryProps{
    name: String;
    active: number;
    setActiveCategory: (index: number)=> void;
    index: number;
}
function Category({name, active, setActiveCategory, index}: CategoryProps) {
    
  return (
    <div className={`border rounded-md px-2 ${active===index && "bg-slate-500"}`}>
        <button onClick={()=> setActiveCategory(index)}>{name}</button>
    </div>
  )
}

export default Category