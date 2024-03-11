"use client";
import React, { Suspense, useState } from "react";
import Carousel from "./Carousel";
import useFetch from "@/customhooks/useFetch";
import Loading from "../fallback/Loading";
import { useQuery } from "@tanstack/react-query";
import { fetchPhotosByCategory } from "@/utils/utils";

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
  // const {data, loading, error} = useFetch({url: `https://api.unsplash.com/search/photos?query=${activeCategory}&client_id=${process.env.NEXT_PUBLIC_CLIENT_SECRET}`})
  // make query using react query
  const {data, error, isLoading: loading, } = useQuery<any>({
    queryKey: ['photos', activeCategory],
    queryFn: () => fetchPhotosByCategory(activeCategory),
  })  
  console.log(data,'data')
  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <div className="h-full">
      <h1 className="ml-4">
        Showing photos of {activeCategory}
      </h1>
        <Suspense fallback={<Loading/>}>
        <Carousel data={data?.results} />
        </Suspense>
    </div>
  );
}

export default CarouselViewer;
