"use client";
import React, { Suspense, useState } from "react";
import Carousel from "./Carousel";
import useFetch from "@/customhooks/useFetch";
import Loading from "../fallback/Loading";

interface CarouselProps {
  activeCategory: string;
}
export interface PhotosData {
  id: string;
  slug: string;
  alt_description: string;
  urls: ImageUrls;
}

type ImageUrls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3?: string; // Optional property for small_s3 URL
};
function CarouselViewer({ activeCategory }: CarouselProps) {
  const {data, loading, error} = useFetch({url: `https://api.unsplash.com/search/photos?query=${activeCategory}&client_id=${process.env.NEXT_PUBLIC_CLIENT_SECRET}`})

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <div>
      <h1>
        Showing photos of {activeCategory}
        <Suspense fallback={<Loading/>}>
        <Carousel data={data} />
        </Suspense>
      </h1>
    </div>
  );
}

export default CarouselViewer;
