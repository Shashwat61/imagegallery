"use client";
import { useState } from "react";
import Categories from "../Categories";
import { categories } from "@/utils/utils";
import CarouselViewer from "../carousel/CarouselViewer";

export type CategoryType = string;
function MainScreen() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>(
    categories[0]
  );

  return (
    <div className="m-2 border">
      <Categories
        setActiveCategory={setActiveCategory}
        categories={categories}
      />
      <div className="mt-8">
        <CarouselViewer activeCategory={activeCategory} />
      </div>
    </div>
  );
}

export default MainScreen;
