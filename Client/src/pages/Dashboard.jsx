import { useNavigate } from "react-router-dom";

function Dashboard({ closeMenu }) {
  const navigate = useNavigate();

  const openViewer = (category) => {
    closeMenu();           
    navigate(`/viewer/${category}`);
  };
   
    
  return (
  <div className="flex flex-col items-center text-white">
      <h2 className="text-2xl mb-8 font-semibold">
        Select Wallpaper Category
      </h2>

      <div className="grid grid-cols-4 grid-rows-3 gap-4 w-[700px] h-[420px]">

        {/* BIG CARD */}
        <div
          onClick={() => openViewer("anime")}
          className="col-span-2 row-span-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-xl font-semibold cursor-pointer transition hover:scale-105 hover:bg-white/20"
        >
          Anime
        </div>

        {/* SMALL */}
        <div
          onClick={() => openViewer("cars")}
          className="col-span-1 row-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 transition"
        >
          Cars
        </div>

        {/* SMALL */}
        <div
          onClick={() => openViewer("marvel")}
          className="col-span-1 row-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 transition"
        >
          Marvel
        </div>

        {/* BIG */}
        <div
          onClick={() => openViewer("nature")}
          className="col-span-2 row-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-lg cursor-pointer hover:scale-105 transition"
        >
          Nature
        </div>

        {/* SMALL */}
        <div
          onClick={() => openViewer("space")}
          className="col-span-1 row-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 transition"
        >
          Space
        </div>

        {/* SMALL */}
        <div
          onClick={() => openViewer("technology")}
          className="col-span-3 row-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 transition"
        >
          Technology
        </div>

      </div>
    </div>
  );
}

export default Dashboard;