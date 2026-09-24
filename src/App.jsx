import { useEffect, useState, useRef } from "react";
import GalleryNav from "./components/GalleryNav";
import Gallery from "./components/Gallery";

function App() {
  const fullGalleryData = useRef(null);
  const [galleryData, setGalleryData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("data/gallery_data.json");
      if (!res.ok) {
        throw new Error(`Response: ${res.status}`);
      }
      return await res.json();
    } catch (err) {
      console.log("err.message");
    }
  };

  useEffect(() => {
    getData().then((res) => {
      setGalleryData(res);
      fullGalleryData.current = res;
    });
  }, []);

  const handleChange = (searchValue) => {
    const filteredPhotos = fullGalleryData.current.filter((photo) => {
      const value = searchValue.toLowerCase();

      return (
        photo.title.toLowerCase().includes(value) ||
        photo.description.toLowerCase().includes(value) ||
        photo.category.toLowerCase().includes(value) ||
        photo.name.toLowerCase().includes(value)
      );
    });

    setGalleryData(filteredPhotos);
  };
  const handleFilter = (filterValue) => {
    if (filterValue === "all") setGalleryData(fullGalleryData.current);
    else {
      const filteredPhotos = fullGalleryData.current.filter(
        (photo) => photo.category === filterValue,
      );
      setGalleryData(filteredPhotos);
    }
  };

  useEffect(() => {
    console.log(galleryData);
  }, [galleryData]);

  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
            Image Gallery
          </h1>
          <GalleryNav onChange={handleChange} onFilter={handleFilter} />
          {galleryData.length > 0 ? (
            <Gallery data={galleryData} />
          ) : (
            <div>No Photos Found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
