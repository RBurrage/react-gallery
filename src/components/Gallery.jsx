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

      <div
        id="image-modal"
        class="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center modal">
        <div class="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <button
            id="close-modal"
            class="absolute top-4 right-4 text-gray-700 hover:text-gray-900 z-10 bg-white rounded-full p-2 shadow-lg">
            <i class="fas fa-times text-xl"></i>
          </button>
          <div class="p-4 flex">
            <div class="w-2/3">
              <img
                id="modal-image"
                src=""
                class="max-h-[70vh] w-auto mx-auto"
                alt="Full size image"
              />
            </div>
            <div class="w-1/3 p-4 border-l border-gray-200">
              <h3 id="modal-title" class="text-xl font-bold mb-2">
                Image Title
              </h3>
              <p id="modal-description" class="text-gray-700 mb-4">
                Image description goes here.
              </p>
              <div class="mb-4">
                <h4 class="font-semibold mb-2">Details</h4>
                <ul class="text-sm text-gray-600">
                  <li class="flex justify-between py-1 border-b border-gray-100">
                    <span>Category:</span>
                    <span id="modal-category">Nature</span>
                  </li>
                  <li class="flex justify-between py-1 border-b border-gray-100">
                    <span>Date:</span>
                    <span id="modal-date">June 15, 2023</span>
                  </li>
                  <li class="flex justify-between py-1 border-b border-gray-100">
                    <span>Size:</span>
                    <span id="modal-size">1920x1080</span>
                  </li>
                  <li class="flex justify-between py-1 border-b border-gray-100">
                    <span>Likes:</span>
                    <span id="modal-likes">124</span>
                  </li>
                </ul>
              </div>
              <div class="flex gap-2">

                <a href="" target="_bland" download={}> 
                    {/* href should hold the URL of the image and download should hold the name */}
                    {/* Second project inside section3, named 'project' */}
                  <button class="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    <i class="fas fa-download mr-2"></i> Download
                  </button>
                </a>

                <button class="flex-1 bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300">
                  <i class="fas fa-share-alt mr-2"></i> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
