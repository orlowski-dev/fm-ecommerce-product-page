import { useRef, useState } from "react";
import "./Slider.scss";
import { SliderButton } from "./buttons";
import { motion } from "framer-motion";

interface Props {
  images: string[];
  thumbnails: string[];
}

const Slider = ({ images, thumbnails }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="slider-component">
      <div className="slider">
        <motion.div
          className="images"
          ref={imagesContainerRef}
          animate={{
            x: `-${currentImage * 100}%`,
            transition: {
              type: "just",
            },
          }}
        >
          {images.map((image, index: number) => (
            <img src={image} alt={"product image " + index} key={index} />
          ))}
        </motion.div>
      </div>
      <div className="dsk-only thumbnails">
        {thumbnails.map((thumbnail, index: number) => (
          <img
            src={thumbnail}
            alt={"product thumbnail " + index}
            key={index}
            className={currentImage === index ? "selected" : undefined}
            onClick={() => {
              setCurrentImage(index);
            }}
          />
        ))}
      </div>
      <div className="controls mbl-only">
        <SliderButton
          description="Previous image"
          onClick={() => {
            if (currentImage > 0) {
              setCurrentImage((prev) => prev - 1);
            }
          }}
        >
          <img src="/assets/images/icon-previous.svg" alt="previous image" />
        </SliderButton>
        <SliderButton
          description="Next image"
          onClick={() => {
            if (currentImage < images.length - 1) {
              setCurrentImage((prev) => prev + 1);
            }
          }}
        >
          <img src="/assets/images/icon-next.svg" alt="next image" />
        </SliderButton>
      </div>
    </div>
  );
};

export default Slider;
