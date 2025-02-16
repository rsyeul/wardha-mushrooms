import React, { useState, useEffect } from 'react';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "http://getwallpapers.com/wallpaper/full/5/9/1/1183519-popular-mushroom-wallpaper-1920x1080.jpg",
    // "https://i.pinimg.com/originals/6d/38/2e/6d382ee0f6a22b70f6169941529f7354.jpg",
    
    "https://wallpaperaccess.com/full/5514823.jpg",
    "https://i.pinimg.com/736x/e2/87/09/e287099cb90bbc87be84ff8df3dc7b46.jpg",
    // "https://static.vecteezy.com/system/resources/previews/021/781/533/large_2x/fantasy-mushroom-wallpaper-in-the-forest-ai-generated-photo.jpg"

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  // Assuming navbar height is 64px. Adjust if needed.
  const carouselHeight = "calc(100vh - 64px)";

  return (
    <div className="carousel relative overflow-hidden w-full" style={{ height: carouselHeight }}>
      <div
        className="carousel-inner flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="carousel-item min-w-full relative" style={{ height: carouselHeight }}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-4xl font-bold">
                Welcome to Wardha Mushrooms
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;