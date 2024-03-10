"use client";
import React, { useState } from "react";
import Carousel from "./Carousel";

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
  const [data, setData] = useState<PhotosData[] | null>([
    {
      id: "1",
      slug: "a-person-sitting-on-a-bench-next-to-a-body-of-water-0boeA7NBluU",
      alt_description: "a person sitting on a bench next to a body of water",
      urls: {
        raw: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1647891940243-77a6483a152e",
      },
    },
    {
      id: "2",
      slug: "a-person-sitting-on-a-bench-next-to-a-body-of-water-0boeA7NBluU",
      alt_description: "a person sitting on a bench next to a body of water",
      urls: {
        raw: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1647891940243-77a6483a152e",
      },
    },
    {
      id: "3",
      slug: "a-person-sitting-on-a-bench-next-to-a-body-of-water-0boeA7NBluU",
      alt_description: "a person sitting on a bench next to a body of water",
      urls: {
        raw: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1647891940243-77a6483a152e",
      },
    },
    {
      id: "4",
      slug: "a-person-sitting-on-a-bench-next-to-a-body-of-water-0boeA7NBluU",
      alt_description: "a person sitting on a bench next to a body of water",
      urls: {
        raw: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1647891940243-77a6483a152e",
      },
    },
    {
      id: "5",
      slug: "a-person-sitting-on-a-bench-next-to-a-body-of-water-0boeA7NBluU",
      alt_description: "a person sitting on a bench next to a body of water",
      urls: {
        raw: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1647891940243-77a6483a152e",
      },
    },
    {
      id: "6",
      slug: "a-person-sitting-on-a-bench-next-to-a-body-of-water-0boeA7NBluU",
      alt_description: "a person sitting on a bench next to a body of water",
      urls: {
        raw: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1647891940243-77a6483a152e",
      },
    },
    {
      id: "7",
      slug: "a-person-sitting-on-a-bench-next-to-a-body-of-water-0boeA7NBluU",
      alt_description: "a person sitting on a bench next to a body of water",
      urls: {
        raw: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1647891940243-77a6483a152e",
      },
    },
    {
      id: "8",
      slug: "a-person-sitting-on-a-bench-next-to-a-body-of-water-0boeA7NBluU",
      alt_description: "a person sitting on a bench next to a body of water",
      urls: {
        raw: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1647891940243-77a6483a152e",
      },
    },
    {
      id: "9",
      slug: "a-person-sitting-on-a-bench-next-to-a-body-of-water-0boeA7NBluU",
      alt_description: "a person sitting on a bench next to a body of water",
      urls: {
        raw: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1647891940243-77a6483a152e",
      },
    },
    {
      id: "10",
      slug: "a-person-sitting-on-a-bench-next-to-a-body-of-water-0boeA7NBluU",
      alt_description: "a person sitting on a bench next to a body of water",
      urls: {
        raw: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1647891940243-77a6483a152e",
      },
    },
    {
      id: "11",
      slug: "a-person-sitting-on-a-bench-next-to-a-body-of-water-0boeA7NBluU",
      alt_description: "a person sitting on a bench next to a body of water",
      urls: {
        raw: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1647891940243-77a6483a152e",
      },
    },
    {
      id: "12",
      slug: "a-person-sitting-on-a-bench-next-to-a-body-of-water-0boeA7NBluU",
      alt_description: "a person sitting on a bench next to a body of water",
      urls: {
        raw: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1647891940243-77a6483a152e",
      },
    },
    {
      id: "13",
      slug: "a-person-sitting-on-a-bench-next-to-a-body-of-water-0boeA7NBluU",
      alt_description: "a person sitting on a bench next to a body of water",
      urls: {
        raw: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1647891940243-77a6483a152e",
      },
    },
    {
      id: "14",
      slug: "a-person-sitting-on-a-bench-next-to-a-body-of-water-0boeA7NBluU",
      alt_description: "a person sitting on a bench next to a body of water",
      urls: {
        raw: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1647891940243-77a6483a152e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzY4NTN8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA5OTc1MDg5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1647891940243-77a6483a152e",
      },
    },
  ]);
  // api call
  // get data

  return (
    <div>
      <h1>
        Showing photos of {activeCategory}
        <Carousel data={data} />
      </h1>
    </div>
  );
}

export default CarouselViewer;
