"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import WazyHeaderDiv from "@/components/WazyHeaderDiv";
import ReactLoading from "react-loading";

function getRandomNumber() {
  return Math.floor(Math.random() * (300 - 150 + 1)) + 150;
}

const TailorGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
  const [currentCategory, setCurrentCategory] = useState("");
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    // Fetch images grouped by tags
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/getGalleryImages");
        const data = await response.json();
        // console.log(data);
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
    console.log(currentCategory);
  };

  // const slidesHandler = () => {
  const slidesHandler =
    galleries
      .find((item) => item.tag === currentCategory)
      ?.tag_list.map((src) => ({
        src,
        width: 800,
        height: 600,
        isSelected: false,
      })) || [];
  //   return slides;
  // };

  return (
    <>
      <Head>
        <title>Our Gallery</title>
      </Head>

      <div className="my-auto mx-auto px-4 py-8 bg-gradient-to-b from-white to-gray-200 min-h-screen  text-black">
        {galleries.length > 0 ? (
          <section className="flex flex-col md:flex-row md:flex-wrap gap-8 mb-16">
            {galleries.map((item, index) => (
              <div
                key={item.tag}
                className={`flex-1 text-center ${
                  index % 4 === 1 ? "md:w-full" : "md:w-1/2"
                }`}
              >
                <WazyHeaderDiv
                  text={item.tag.charAt(0).toUpperCase() + item.tag.slice(1)}
                  colour="#bdbdbd"
                  heightPX={15}
                />
                <Gallery
                  images={item.tag_list.map((src) => ({
                    src,
                    width: getRandomNumber(),
                    height: getRandomNumber(),
                  }))}
                  onClick={(index) => handleImageClick(item.tag, index)}
                  enableImageSelection={false}
                />
              </div>
            ))}
          </section>
        ) : (
          <div className="flex justify-center  items-center min-h-screen w-full">
            <ReactLoading
              type={"cylon"}
              color={"#37474f"}
              height={667}
              width={375}
            />
          </div>
        )}

        <Lightbox
          slides={slidesHandler}
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
