import React, { useRef, useState } from "react";
import img1 from "../assets/assets/images/out-33.jpg";
import img2 from "../assets/assets/images/out-34.jpg";
import img3 from "../assets/assets/images/out-35.jpg";
import img4 from "../assets/assets/images/out-36.jpg";
import "./styles/carousel.css";
import leftArrow from "../assets/assets/left-arrow.png";
import rightArrow from "../assets/assets/right-arrow.png"

const Carousel = () => {
  const images = [img1, img2, img3, img4];
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="carousel">
      <img
        onClick={() =>
          setCurrentImg((prevImg) =>
            prevImg == 0 ? images.length - 1 : prevImg - 1
          )
        }
        src={leftArrow}
        width={25}
        height={25}
        style={{ cursor: "pointer", marginRight: "10px" }}
      />
      <img src={images[currentImg]} width={400} height={400} />
      <img
        onClick={() =>
          setCurrentImg((prevImg) =>
            prevImg == images.length - 1 ? 0 : prevImg + 1
          )
        }
        src={rightArrow}
        width={25}
        height={25}
        style={{ cursor: "pointer", marginLeft: "10px" }}
      />
    </div>
  );
};

export default Carousel;
