// components/ChildrenWearsGallery.js

import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import WazyHeaderDiv from "@/components/WazyHeaderDiv";

function getRandomNumber() {
  return Math.floor(Math.random() * (300 - 150 + 1)) + 150;
}

const MyGallery = ({ images, title }) => {
  const [selectedImageIndex, set_selectedImageIndex] = useState(-1);

  // Create the allImgData array
  const allImgData = images.map((image, index) => ({
    src: image,
    width: getRandomNumber(),
    height: getRandomNumber(),
    caption: `title ${index + 1}`,
    original: image,
  }));

  console.log(allImgData);

  const slides = allImgData.map(({ src, width, height }) => ({
    src: src,
    width: width,
    height: height,
    isSelected: false,
  }));
  console.log(slides);

  const handleClick = (index) => set_selectedImageIndex(index);

  return (
    <div>
      <WazyHeaderDiv text={`${title} Wears`} colour="#bdbdbd" heightPX={15} />
      <Gallery
        images={allImgData}
        onClick={handleClick}
        enableImageSelection={false}
      />
    </div>
  );
};

export default MyGallery;
