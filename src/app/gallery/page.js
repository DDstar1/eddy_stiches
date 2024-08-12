"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import WazyHeaderDiv from "@/components/WazyHeaderDiv";

const TailorGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
  const [currentCategory, setCurrentCategory] = useState("");
  const [galleries, setGalleries] = useState({});

  useEffect(() => {
    // Fetch images grouped by tags
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/getGalleryImages");
        const data = await response.json();
        setGalleries(data);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (category, index) => {
    setCurrentCategory(category);
    setSelectedImageIndex(index);
  };

  const slides =
    galleries[currentCategory]?.map((src) => ({
      src,
      width: 800,
      height: 600,
      isSelected: false,
    })) || [];

  const hasImages = Object.keys(galleries).some(
    (key) => galleries[key].length > 0
  );

  return (
    <>
      <Head>
        <title>Our Gallery</title>
      </Head>

      <div className="my-auto mx-auto px-4 py-8 bg-gradient-to-b from-white to-gray-200 min-h-screen">
        {hasImages ? (
          <section className="flex flex-col md:flex-row md:flex-wrap gap-8 mb-16">
            {Object.entries(galleries).map(([key, images], index) => (
              <div
                key={key}
                className={`flex-1 text-center ${
                  index % 4 === 1 ? "md:w-full" : "md:w-1/2"
                }`}
              >
                <WazyHeaderDiv
                  text={key.charAt(0).toUpperCase() + key.slice(1)}
                  colour="#bdbdbd"
                  heightPX={15}
                />
                <Gallery
                  images={images.map((src) => ({
                    src,
                    width: 800,
                    height: 600,
                  }))}
                  onClick={(index) => handleImageClick(key, index)}
                  enableImageSelection={false}
                />
              </div>
            ))}
          </section>
        ) : (
          <div className="flex justify-center items-center min-h-screen w-full">
            <div className="text-center p-16 text-black bg-gradient-to-r from-gray-200 to-gray-300 rounded-md shadow-md">
              There are no available images at the moment.
            </div>
          </div>
        )}

        <Lightbox
          slides={slides}
          plugins={[Zoom, Fullscreen]}
          open={selectedImageIndex >= 0}
          index={selectedImageIndex}
          close={() => setSelectedImageIndex(-1)}
          zoom={{
            scrollToZoom: true,
            maxZoomPixelRatio: 5,
          }}
        />
      </div>
    </>
  );
};

export default TailorGallery;
