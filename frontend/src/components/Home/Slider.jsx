import { useEffect, useState } from "react";
import "./Slider.css";
const images = [
  "src/assets/image1.jpg",
  "src/assets/image2.jpg",
  "src/assets/image3.jpg",
];
function Slider() {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="slider">
      <img src={images[current]} className="slider-img" />
      <button className="nav left" onClick={prevSlide}>
        {"<"}
      </button>

      <button className="nav right" onClick={nextSlide}>
        {">"}
      </button>
    </div>
  );
}
export default Slider;
