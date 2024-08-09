"use client";

import React, { useState } from "react";
import Head from "next/head";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import WazyHeaderDiv from "@/components/WazyHeaderDiv";
import { Data } from "@/lib/galleryData";

const TailorGallery = () => {
  const [suit_index, setsuit_index] = useState(-1);
  const [child_index, setchild_index] = useState(-1);
  const [native_index, setnative_index] = useState(-1);

  // Children Data
  const childrenImages = Data.find(
    (category) => category.category === "chil_wr"
  ).data;

  // Suit Data
  const suitImages = Data.find((category) => category.category === "suit").data;

  // Native Data
  const nativeImages = Data.find(
    (category) => category.category === "native"
  ).data;

  const slides = Data.flatMap((category) =>
    category.data.map(({ original, width, height }) => ({
      src: original,
      width,
      height,
      isSelected: false,
    }))
  );

  const handleSuitClick = (index) => setsuit_index(index);
  const handleChildClick = (index) => setchild_index(index);
  const handleNativeClick = (index) => setnative_index(index);

  return (
    <>
      <Head>
        <title>Our Gallery</title>
      </Head>

      <div className="mx-auto text-center px-4 py-8 bg-gradient-to-b from-white to-gray-200 bg-gray">
        <section className="flex gap-16 flex-col md:flex-row mb-20 justify-center ">
          <div className="flex-1">
            <WazyHeaderDiv
              text="Children Wears"
              colour="#bdbdbd"
              heightPX={15}
            />
            <Gallery
              images={childrenImages}
              onClick={handleChildClick}
              enableImageSelection={false}
            />
          </div>
          <div className="flex-1">
            <WazyHeaderDiv text="Suits" colour="#bdbdbd" heightPX={15} />
            <Gallery
              images={suitImages}
              onClick={handleSuitClick}
              enableImageSelection={false}
            />
          </div>
        </section>

        <WazyHeaderDiv
          text="Native/Senator Wears"
          colour="#bdbdbd"
          heightPX={15}
        />
        <Gallery
          images={nativeImages}
          onClick={handleNativeClick}
          enableImageSelection={false}
        />

        <Lightbox
          slides={nativeImages.map((image) => ({
            src: image.original,
            width: image.width,
            height: image.height,
          }))}
          plugins={[Zoom, Fullscreen]}
          open={native_index >= 0}
          index={native_index}
          close={() => setnative_index(-1)}
          zoom={{
            scrollToZoom: true,
            maxZoomPixelRatio: 5,
          }}
        />
        <Lightbox
          slides={childrenImages.map((image) => ({
            src: image.original,
            width: image.width,
            height: image.height,
          }))}
          plugins={[Zoom, Fullscreen]}
          open={child_index >= 0}
          index={child_index}
          close={() => setchild_index(-1)}
          zoom={{
            scrollToZoom: true,
            maxZoomPixelRatio: 5,
          }}
        />
        <Lightbox
          slides={suitImages.map((image) => ({
            src: image.original,
            width: image.width,
            height: image.height,
          }))}
          plugins={[Zoom, Fullscreen]}
          open={suit_index >= 0}
          index={suit_index}
          close={() => setsuit_index(-1)}
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
