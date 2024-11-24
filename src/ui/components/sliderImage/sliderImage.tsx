import React, { useState, useEffect,useCallback } from "react";
import Image from "next/image";


interface SliderProps {
  images: string[]; // Tableau des URLs des images
  interval?: number; // Intervalle pour le défilement automatique (en ms)
}

const SliderImage: React.FC<SliderProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour changer d'image

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);
  
  useEffect(() => {
    const autoSlide = setInterval(goToNext, interval);
    return () => clearInterval(autoSlide); // Nettoyage de l'intervalle
  }, [interval, goToNext]);
  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg">
      {/* Images */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          layout="responsive"
          width={1200} // Exemple : largeur de l'image
          height={800} // Exemple : hauteur de l'image
          objectFit="cover"
          className="w-full h-auto object-cover"
        />
      ))}
      </div>

      {/* Boutons précédent et suivant */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        onClick={goToPrevious}
      >
        ◀
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        onClick={goToNext}
      >
        ▶
      </button>

      {/* Indicateurs */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}

            
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SliderImage;
