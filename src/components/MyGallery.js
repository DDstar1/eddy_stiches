"use client";
import React from "react";
import { Gallery } from "react-grid-gallery";

export default function MyGallery({ images_list }) {
  return <Gallery images={images_list} rowHeight={180} margin={10} />;
}
