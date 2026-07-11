import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function Viewer() {
  const { category } = useParams();
  const [image, setImage] = useState(null);

  const fetchWallpaper = async () => {
    try {
      const res = await API.get(`/wallpapers/${category}`);
      setImage("http://localhost:4000" + res.data.image);
    } catch (error) {
      console.error("Error fetching wallpaper:", error);
    }
  };

  useEffect(() => {
    fetchWallpaper();

    const interval = setInterval(() => {
      fetchWallpaper();
    }, 5000);

    return () => clearInterval(interval);
  }, [category]);

  return (
    <div>
      <img src={image} style={{ width: "100%", height: "100vh" , objectFit: "cover" }} />
    </div>
  );
}

export default Viewer;