import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ImageRevealSlider({
  beforeImage,
  afterImage,
  width = 500,
  height = 300,
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;

    setSliderPosition(percent);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const _handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    e.stopPropagation();
    handleMove(e.clientX);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    e.stopPropagation();
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative size-full overflow-hidden rounded-lg shadow-2xl select-none ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* Imagen "antes" */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage}
          alt="Antes"
          className="w-full h-full object-cover"
          draggable="false"
          width={width}
          height={height}
          unoptimized
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60" />
      </div>

      {/* Imagen "después" */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={afterImage}
          alt="Después"
          className="w-full h-full object-cover"
          draggable="false"
          width={width}
          height={height}
          unoptimized
        />
      </div>

      {/* Línea divisoria */}
      <div
        className={`absolute top-0 bottom-0 w-1 bg-white ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Control deslizante con forma de círculo partido */}
        {/* <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10">          
          <div className="absolute right-1/2 top-0 w-5 h-10 bg-transparent rounded-l-full shadow-lg border-2 border-r-0 border-white flex items-center justify-center"></div>
          <div className="absolute left-1/2 top-0 w-5 h-10 bg-white rounded-r-full shadow-lg border-2 border-l-0 border-white flex items-center justify-center"></div>
        </div> */}

        <div className="overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-white">
          <ChevronLeft className="w-4 h-4 text-gray-700 absolute left-1" />
          <ChevronRight className="w-4 h-4 text-gray-700 absolute right-1" />
        </div>
      </div>
    </div>
  );
}
