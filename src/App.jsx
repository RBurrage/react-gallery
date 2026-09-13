import { useEffect, useState } from "react";

function App() {
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
    getData().then((res) => setGalleryData(res));
  }, []);
  return <div>App</div>;
}

export default App;
