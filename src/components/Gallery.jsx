import { useState, useRef } from "react";

export default function Gallery(props) {
  const { data } = props;
  const imgIndexRef = useRef(0);
  const [activeImage, setActiveImage] = useState(data[0]);

  const nextImg = () => {
    const numOfImages = data.length;
    imgIndexRef.current = imgIndexRef.current + 1;
    if (imgIndexRef.current >= numOfImages) imgIndexRef.current = 0;
    setActiveImage(data[imgIndexRef.current]);
  };
  const prevImg = () => {
    if (imgIndexRef.current <= 0) imgIndexRef.current = data.length;
    imgIndexRef.current = imgIndexRef.current - 1;
    setActiveImage(data[imgIndexRef.current]);
  };
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        {/* Big Image Display */}
        <div
          className="relative mb-8 overflow-hidden rounded-lg bg-gray-200"
          style={{ height: "500px" }}>
          <div
            id="big-image-container"
            className="h-full w-full flex items-center justify-center">
            <img
              id="big-image"
              src={activeImage.url}
              className="max-h-full max-w-full object-contain fade-in"
              alt={activeImage.title}
            />
          </div>

          {/* Navigation Arrows */}
          <button
            id="prev-btn"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70"
            onClick={prevImg}>
            <i className="fas fa-chevron-left text-xl"></i>
          </button>
          <button
            id="next-btn"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70"
            onClick={nextImg}>
            <i className="fas fa-chevron-right text-xl"></i>
          </button>

          {/* Image Info */}
          <div
            id="image-info"
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
            <h3 id="image-title" className="text-xl font-bold">
              {activeImage.title}
            </h3>
            <p id="image-description" className="text-sm opacity-90">
              {activeImage.description}
            </p>
            <div className="flex items-center mt-2">
              <span
                id="image-index"
                className="text-sm bg-blue-500 px-2 py-1 rounded">
                {/* NEXT UP: Need to get the index */}
                {imgIndexRef.current + 1}/12
              </span>
              <div className="ml-auto flex gap-2"></div>
            </div>
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div
          id="thumbnail-container"
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {data.map((img, index) => (
            <img
              key={img.id}
              src={img.thumb}
              alt={img.title}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setActiveImage(img);
                imgIndexRef.current = index;
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
